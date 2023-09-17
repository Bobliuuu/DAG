import pymongo
from collections.abc import MutableMapping
from bson import ObjectId  # Import ObjectId from bson

# Replace the placeholders with your MongoDB connection details
client = pymongo.MongoClient("mongodb+srv://tanish_sh:Ek0LVketpjwBqvHS@cluster0.e0gdghz.mongodb.net/?retryWrites=true&w=majority")

db = client["Cluster0"]

mycol = db["datasets"]
data = {
    "bird_dataset": {
        "links": ["https://ipfs.io/ipfs/bafybeiefa3s7fveh77rtvak6v7tmzcljlf2kdebdi6ariu4ee75d2w3f4e/duck.png", "https://ipfs.io/ipfs/bafybeicrunsto7pspok37ejsdk7wvhb3kowlyicrfb2rdxmdgzxfqmtiza/fisher.png", "https://ipfs.io/ipfs/bafybeic4ucnajbc4jt3cfalxjkyyj4umh24ebdwao3ggocflibndjuibu4/eagle.png", "https://ipfs.io/ipfs/bafybeidcuyqdsfk6opqph3nlkhysn45j3hcyxywhhef4z3bt6n4ehi6fka/gull.png", "https://ipfs.io/ipfs/bafybeigm4widladno5pasbxtg2jubzxbukluwbid4ofmpbr6khprpjauhq/crane.png", "https://ipfs.io/ipfs/bafybeiccdpbr5swhscavqfjz5tj5ta6hr2tcnbpy4yffkm43czxfotpdf4/geese.png", "https://ipfs.io/ipfs/bafybeiez6ekn56bso2burgufckqrviqjeyuxt54piglvjezfgfn6e6dowy/orange.png"],
        "labels": ["bird1", "bird2", "bird3", "bird4", "bird5", "bird6", "bird7"],
        "nft": ["bafybeiefa3s7fveh77rtvak6v7tmzcljlf2kdebdi6ariu4ee75d2w3f4e", "bafybeicrunsto7pspok37ejsdk7wvhb3kowlyicrfb2rdxmdgzxfqmtiza", "bafybeic4ucnajbc4jt3cfalxjkyyj4umh24ebdwao3ggocflibndjuibu4", "bafybeidcuyqdsfk6opqph3nlkhysn45j3hcyxywhhef4z3bt6n4ehi6fka", "bafybeigm4widladno5pasbxtg2jubzxbukluwbid4ofmpbr6khprpjauhq", "bafybeiccdpbr5swhscavqfjz5tj5ta6hr2tcnbpy4yffkm43czxfotpdf4", "bafybeiez6ekn56bso2burgufckqrviqjeyuxt54piglvjezfgfn6e6dowy"]
    },
    "board_dataset": {
        "links": ["https://ipfs.io/ipfs/bafybeig7znljejqqf7aehizesfrr6cmlnftne455wlb5gwx5snrlwz3kya/board7.jpg", "https://ipfs.io/ipfs/bafybeigvhumw6s333z6nvwtpowpmu6rcrelwckbwqmvlxmbrjaih7fqjbq/board1.jpg", "https://ipfs.io/ipfs/bafybeidbfhwlozpvq3h2t4chk5ak6bds5c2pqvjdxzqd7qww3vrqmeplje/board6.jpg", "https://ipfs.io/ipfs/bafybeiaqx5rts5auaxm6kypjk6ihknoucuxp64fg5nfafsvhf4po7mdezm/board4.jpg", "https://ipfs.io/ipfs/bafybeifmnscxln4n6g4lnnmgnevrvpclmbqhtwmqzwwmnkrt7u4pnl2cni/board3.jpg", "https://ipfs.io/ipfs/bafybeidosxuu5rna4f5xpmvpgrmi425b3ro5mllc7hona7hmmgtpqq6wty/board5.jpg", "https://ipfs.io/ipfs/bafybeiba4p5yhcphjvqwxhygeydek6a5ggl2wt65ykrqdmaw5xhwxmqs7u/board2.jpg"],
        "labels": ["board1", "board2", "board3", "board4", "board5", "board6", "board7"],
        "nft": ["bafybeig7znljejqqf7aehizesfrr6cmlnftne455wlb5gwx5snrlwz3kya", "bafybeigvhumw6s333z6nvwtpowpmu6rcrelwckbwqmvlxmbrjaih7fqjbq", "bafybeidbfhwlozpvq3h2t4chk5ak6bds5c2pqvjdxzqd7qww3vrqmeplje", "bafybeiaqx5rts5auaxm6kypjk6ihknoucuxp64fg5nfafsvhf4po7mdezm", "bafybeifmnscxln4n6g4lnnmgnevrvpclmbqhtwmqzwwmnkrt7u4pnl2cni", "bafybeidosxuu5rna4f5xpmvpgrmi425b3ro5mllc7hona7hmmgtpqq6wty", "bafybeiba4p5yhcphjvqwxhygeydek6a5ggl2wt65ykrqdmaw5xhwxmqs7u"]
    },
    "map_dataset": {
        "links": ["https://ipfs.io/ipfs/bafybeicvvj2gjtn35pazsccanjpghirdnnpubuajdkncnpeo5qtaaw6fzu/map1.jpg", "https://ipfs.io/ipfs/bafybeihlavllqmvaj5cb7ljlocqcwcclpsyrpnctysw6orp3dcdcl64ta4/map3.jpg", "https://ipfs.io/ipfs/bafybeibsq54kbo2vjf7jnuoya7ypzbvamtbfe67ngolewnkedd4gfazrxa/map6.jpg", "https://ipfs.io/ipfs/bafybeifhncoz4gvp4xprqnm2ukmhfgsnehdpghb6wii4l5mbzoopxbx7eq/map5.jpg", "https://ipfs.io/ipfs/bafybeiadazi54z4fgpdz6trwuon5lim2hvtrwq56mfpxf2druhwklubjla/map2.jpg", "https://ipfs.io/ipfs/bafybeibjq7hlgq2e7ssrvdu22zws6y7gbzohqkzd5bmxkd542fh4o444ai/map4.jpg", "https://ipfs.io/ipfs/bafybeic5dj6256ryge2ft6nd2cii7q2mrrqp6ixi55lvvrfyxqregyjq4u/map7.jpg"],
        "labels": ["map1", "map2", "map3", "map4", "map5", "map6", "map7"],
        "nft": ["bafybeicvvj2gjtn35pazsccanjpghirdnnpubuajdkncnpeo5qtaaw6fzu", "bafybeihlavllqmvaj5cb7ljlocqcwcclpsyrpnctysw6orp3dcdcl64ta4", "bafybeifhncoz4gvp4xprqnm2ukmhfgsnehdpghb6wii4l5mbzoopxbx7eq", "bafybeiadazi54z4fgpdz6trwuon5lim2hvtrwq56mfpxf2druhwklubjla", "bafybeibjq7hlgq2e7ssrvdu22zws6y7gbzohqkzd5bmxkd542fh4o444ai", "bafybeic5dj6256ryge2ft6nd2cii7q2mrrqp6ixi55lvvrfyxqregyjq4u"]
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

