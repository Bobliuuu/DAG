import pymongo
from collections.abc import MutableMapping
from bson import ObjectId  # Import ObjectId from bson

# Replace the placeholders with your MongoDB connection details
client = pymongo.MongoClient("mongodb+srv://tanish_sh:Ek0LVketpjwBqvHS@cluster0.e0gdghz.mongodb.net/?retryWrites=true&w=majority")

db = client["Cluster0"]

mycol = db["datasets"]
data = {
    "duck_dataset": {
        "links": ["https://ipfs.io/ipfs/bafybeiefa3s7fveh77rtvak6v7tmzcljlf2kdebdi6ariu4ee75d2w3f4e/duck.png"],
        "labels": ["bird1"],
        "nft": "bafybeiefa3s7fveh77rtvak6v7tmzcljlf2kdebdi6ariu4ee75d2w3f4e"
    },
    "kingfisher_dataset": {
        "links": ["https://ipfs.io/ipfs/bafybeicrunsto7pspok37ejsdk7wvhb3kowlyicrfb2rdxmdgzxfqmtiza/fisher.png"],
        "labels": ["bird2"],
        "nft": "bafybeicrunsto7pspok37ejsdk7wvhb3kowlyicrfb2rdxmdgzxfqmtiza"
    },
    "eagel_dataset": {
        "links": ["https://ipfs.io/ipfs/bafybeic4ucnajbc4jt3cfalxjkyyj4umh24ebdwao3ggocflibndjuibu4/eagle.png"],
        "labels": ["bird3"],
        "nft": "bafybeic4ucnajbc4jt3cfalxjkyyj4umh24ebdwao3ggocflibndjuibu4"
    },
    "gull_dataset": {
        "links": ["https://ipfs.io/ipfs/bafybeidcuyqdsfk6opqph3nlkhysn45j3hcyxywhhef4z3bt6n4ehi6fka/gull.png"],
        "labels": ["bird4"],
        "nft": "bafybeidcuyqdsfk6opqph3nlkhysn45j3hcyxywhhef4z3bt6n4ehi6fka"
    },
    "crane_dataset": {
        "links": ["https://ipfs.io/ipfs/bafybeigm4widladno5pasbxtg2jubzxbukluwbid4ofmpbr6khprpjauhq/crane.png"],
        "labels": ["bird5"],
        "nft": "bafybeigm4widladno5pasbxtg2jubzxbukluwbid4ofmpbr6khprpjauhq"
    },
    "geese_dataset": {
        "links": ["https://ipfs.io/ipfs/bafybeiccdpbr5swhscavqfjz5tj5ta6hr2tcnbpy4yffkm43czxfotpdf4/geese.png"],
        "labels": ["bird6"],
        "nft": "bafybeiccdpbr5swhscavqfjz5tj5ta6hr2tcnbpy4yffkm43czxfotpdf4"
    },
    "toucan_dataset": {
        "links": ["https://ipfs.io/ipfs/bafybeiez6ekn56bso2burgufckqrviqjeyuxt54piglvjezfgfn6e6dowy/orange.png"],
        "labels": ["bird7"],
        "nft": "bafybeiez6ekn56bso2burgufckqrviqjeyuxt54piglvjezfgfn6e6dowy"
    },
    "board1_dataset": {
        "links": ["https://ipfs.io/ipfs/bafybeig7znljejqqf7aehizesfrr6cmlnftne455wlb5gwx5snrlwz3kya/board7.jpg"],
        "labels": ["board1"],
        "nft": "bafybeig7znljejqqf7aehizesfrr6cmlnftne455wlb5gwx5snrlwz3kya"
    },
    "board2_dataset": {
        "links": ["https://ipfs.io/ipfs/bafybeigvhumw6s333z6nvwtpowpmu6rcrelwckbwqmvlxmbrjaih7fqjbq/board1.jpg"],
        "labels": ["board2"],
        "nft": "bafybeigvhumw6s333z6nvwtpowpmu6rcrelwckbwqmvlxmbrjaih7fqjbq"
    },
    "board3_dataset": {
        "links": ["https://ipfs.io/ipfs/bafybeidbfhwlozpvq3h2t4chk5ak6bds5c2pqvjdxzqd7qww3vrqmeplje/board6.jpg"],
        "labels": ["board3"],
        "nft": "bafybeidbfhwlozpvq3h2t4chk5ak6bds5c2pqvjdxzqd7qww3vrqmeplje"
    },
    "board4_dataset": {
        "links": ["https://ipfs.io/ipfs/bafybeiaqx5rts5auaxm6kypjk6ihknoucuxp64fg5nfafsvhf4po7mdezm/board4.jpg"],
        "labels": ["board4"],
        "nft": "bafybeiaqx5rts5auaxm6kypjk6ihknoucuxp64fg5nfafsvhf4po7mdezm"
    },
    "board5_dataset": {
        "links": ["https://ipfs.io/ipfs/bafybeifmnscxln4n6g4lnnmgnevrvpclmbqhtwmqzwwmnkrt7u4pnl2cni/board3.jpg"],
        "labels": ["board5"],
        "nft": "bafybeifmnscxln4n6g4lnnmgnevrvpclmbqhtwmqzwwmnkrt7u4pnl2cni"
    },
    "board6_dataset": {
        "links": ["https://ipfs.io/ipfs/bafybeidosxuu5rna4f5xpmvpgrmi425b3ro5mllc7hona7hmmgtpqq6wty/board5.jpg"],
        "labels": ["board6"],
        "nft": "bafybeidosxuu5rna4f5xpmvpgrmi425b3ro5mllc7hona7hmmgtpqq6wty"
    },
    "board7_dataset": {
        "links": ["https://ipfs.io/ipfs/bafybeiba4p5yhcphjvqwxhygeydek6a5ggl2wt65ykrqdmaw5xhwxmqs7u/board2.jpg"],
        "labels": ["board7"],
        "nft": "bafybeiba4p5yhcphjvqwxhygeydek6a5ggl2wt65ykrqdmaw5xhwxmqs7u"
    },
    "map1_dataset": {
        "links": ["https://ipfs.io/ipfs/bafybeicvvj2gjtn35pazsccanjpghirdnnpubuajdkncnpeo5qtaaw6fzu/map1.jpg"],
        "labels": ["map1"],
        "nft": "bafybeicvvj2gjtn35pazsccanjpghirdnnpubuajdkncnpeo5qtaaw6fzu"
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

