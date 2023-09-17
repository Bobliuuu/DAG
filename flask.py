from flask import Flask, render_template, request, redirect, url_for
import pymongo
from bson import ObjectId

app = Flask(__name__)

# MongoDB connection
client = pymongo.MongoClient("mongodb+srv://tanish_sh:Ek0LVketpjwBqvHS@cluster0.e0gdghz.mongodb.net/?retryWrites=true&w=majority")
db = client["Cluster0"]
mycol = db["datasets"]

@app.route('/')
def index():
    return 'Welcome to the MongoDB Cluster Management App'

@app.route('/upload', methods=['GET', 'POST'])
def upload_json():
    if request.method == 'POST':
        # Check if a file is uploaded
        if 'file' not in request.files:
            return redirect(request.url)
        
        file = request.files['file']
        
        # Check if the file has a JSON extension
        if file.filename == '' or not file.filename.endswith('.json'):
            return redirect(request.url)

        # Read and insert the JSON data into MongoDB
        data = file.read()
        data = eval(data)  # Convert JSON string to a dictionary
        mycol.insert_one(data)
        return 'JSON data uploaded to MongoDB'

    return render_template('upload.html')

@app.route('/modify/<nft>', methods=['GET', 'POST'])
def modify_data(nft):
    if request.method == 'POST':
        # Retrieve the document to update
        document_to_update = mycol.find_one({"data1.nft": nft})

        if document_to_update:
            # Get the ObjectId of the document
            document_id = document_to_update["_id"]

            # Update the document using its ObjectId
            links = request.form.getlist('links')
            labels = request.form.getlist('labels')
            nft = request.form['nft']

            update_data = {
                "links": links,
                "labels": labels,
                "nft": nft
            }

            mycol.update_one({"_id": ObjectId(document_id)}, {"$set": {"data1": update_data}})
            return 'Data updated successfully'

    return render_template('modify.html', nft=nft)

@app.route('/delete/<nft>', methods=['GET'])
def delete_data(nft):
    # Find the document to delete
    document_to_delete = mycol.find_one({"data1.nft": nft})

    if document_to_delete:
        # Delete the document by its _id
        mycol.delete_one({"_id": document_to_delete["_id"]})
        return 'Data deleted successfully'
    else:
        return 'Document not found'

if __name__ == '__main__':
    app.run(debug=True)
