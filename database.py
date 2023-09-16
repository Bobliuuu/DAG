import pymongo
from collections.abc import MutableMapping
from bson import ObjectId  # Import ObjectId from bson

# Replace the placeholders with your MongoDB connection details
client = pymongo.MongoClient("mongodb+srv://tanish_sh:Ek0LVketpjwBqvHS@cluster0.e0gdghz.mongodb.net/?retryWrites=true&w=majority")

db = client["Cluster0"]

mycol = db["datasets"]
data = {
    "data1": {
        "links": ["https://example.com/link1"],
        "labels": ["label1"],
        "nft": "NFT-12345"
    },
    "data2": {
        "links": ["https://example.com/link2"],
        "labels": ["label2"],
        "nft": "NFT-67890"
    },
    "data3": {
        "links": ["https://example.com/link3"],
        "labels": ["label3"],
        "nft": "NFT-54321"
    }
}
#remove before adding
# Delete the collection (datatable)
mycol.drop()


# Insert the JSON data into the collection
mycol.insert_one(data)

#---------------------------- modify data -----------------------------------------
# Update a specific document in the collection
# Find the document you want to update and retrieve its _id
document_to_update = mycol.find_one({"data1.nft": "NFT-12345"})

# Check if the document exists before attempting to update it
if document_to_update:
    # Get the ObjectId of the document
    document_id = document_to_update["_id"]
    
    # Update the document using its ObjectId
    mycol.update_one({"_id": ObjectId(document_id)}, {"$set": {"data1.nft": "Updated-NFT-12345"}})
else:
    print("Document not found.")


# #Add data
# # Add a new document to the collection
new_data = {
    "data4": {
        "links": ["https://example.com/link4"],
        "labels": ["label4"],
        "nft": "NFT-99999"
    }
}
mycol.insert_one(new_data)

#delete data
# Delete a specific document from the collection
# Find the document you want to delete and retrieve its _id
document_to_delete = mycol.find_one({"data1.nft": "NFT-12345"})

# Check if the document exists before attempting to delete it
if document_to_delete:
    # Delete the document by its _id
    mycol.delete_one({"_id": document_to_delete["_id"]})
else:
    print("Document not found.")

# Update to remove the "data1.nft" field within a document
mycol.update_one({"data1.nft": "NFT-12345"}, {"$unset": {"data1.nft": ""}})


#Read data
# Read all documents in the collection
all_documents = mycol.find()
for document in all_documents:
    print(document)


client.close()

