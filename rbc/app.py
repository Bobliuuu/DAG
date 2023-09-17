import requests
from flask import Flask, render_template, request, redirect, url_for, jsonify
from pymongo import MongoClient
from bson import ObjectId

# Initialize Flask
app = Flask(__name__)

# MongoDB setup
# Connect to MongoDB
client = MongoClient("mongodb+srv://tanish_sh:Ek0LVketpjwBqvHS@cluster0.e0gdghz.mongodb.net/?retryWrites=true&w=majority")
db = client["Cluster0"]


# Define MongoDB collections
clients = db["clients"]
transactions = db["transactions"]

# RBC API base URL
RBC_API_BASE_URL = "http://money-request-app.canadacentral.cloudapp.azure.com:8080/api/v1"

# Function to create a client in the RBC API
def create_rbc_client(name, email):
    url = f"{RBC_API_BASE_URL}/client"
    data = {
        "Name": name,
        "EmailAddress": email
    }
    response = requests.post(url, json=data)
    return response.json()

# Function to create a money request in the RBC API
def create_money_request(amount, requestee_id, message, invoice_number):
    url = f"{RBC_API_BASE_URL}/money-request"
    data = {
        "amount": amount,
        "requesteeId": requestee_id,
        "message": message,
        "invoiceNumber": invoice_number
    }
    response = requests.post(url, json=data)
    return response.json()

# Function to get money requests from the RBC API
def get_money_requests(client_id):
    url = f"{RBC_API_BASE_URL}/money-request"
    params = {"x-signed-on-client": client_id}
    response = requests.get(url, headers=params)
    return response.json()

# Function to update a money request in the RBC API (accept or decline)
def update_money_request(request_id, action, message_to_requester=None):
    url = f"{RBC_API_BASE_URL}/money-request/{request_id}"
    data = {
        "action": action,
        "messageToRequester": message_to_requester
    }
    response = requests.put(url, json=data)
    return response.json()

@app.route("/transaction/<client_id>", methods=["GET", "POST"])
def transaction(client_id):
    client = clients.find_one({"_id": ObjectId(client_id)})
    
    if request.method == "POST":
        amount = request.form.get("amount")
        message = request.form.get("message")
        # Create a money request in the RBC API
        response = create_money_request(amount, client_id, message, "12345")  # Replace with a valid invoice number
        transaction_data = {
            "client_id": client_id,
            "amount": amount,
            "type": "requested",
            "status": "PENDING"
        }
        transactions.insert_one(transaction_data)
    
    client_transactions = transactions.find({"client_id": client_id})
    return render_template("transaction.html", client=client, transactions=client_transactions)

@app.route("/update_money_request/<request_id>", methods=["POST"])
def update_money_request(request_id):
    action = request.form.get("action")
    message_to_requester = request.form.get("message_to_requester")
    # Update the money request in the RBC API
    response = update_money_request(request_id, action, message_to_requester)
    # Update the status of the transaction in your MongoDB
    transactions.update_one({"_id": ObjectId(request_id)}, {"$set": {"status": response["requestStatus"]}})
    return redirect(url_for("transaction", client_id=response["requesterId"]))

if __name__ == "__main__":
    app.run(debug=True)
