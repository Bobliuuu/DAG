from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import os
import replicate
import w3storage
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

os.environ["REPLICATE_API_TOKEN"] = "redact"

@app.get('/')
async def root():
    return {'message': 'Hello, World!'}

@app.get('/explain')
async def explain(url: str):
    output = replicate.run(
        "daanelson/minigpt-4:b96a2f33cc8e4b0aa23eacfce731b9c41a7d9466d9ed4e167375587b54db9423",
        input={"image": url, "prompt": "Explain this image."},
    )
    return {'explanation': output}

@app.get('/classify'):
async def classify(prompt: str):

@app.get('/mint')
async def mint(url: str, chain: str, address: str):
    response = requests.get("https://media.discordapp.net/attachments/1140854641547030639/1145243410874253393/ROCO_00278.jpg")

    with open("image.jpg", "wb") as file:
        file.write(response.content)

    w3 = w3storage.API(token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGNCOTU4NjIxRjVmNjcxNkM4QTlhRDZkRWQ4MUVDRTQzZGQwQzFjOGUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTEzMDM2ODMwNjEsIm5hbWUiOiJjb2xhYiJ9.RIio_qk4aEyLJaBUjmemiPm0zTFJ4K_kHN2AUhex9Jw')
    some_uploads = w3.user_uploads(size=25)
    cid = w3.post_upload(open("image.jpg", "rb"))
    #print(cid + '.ipfs.w3s.link')
    MURL = f"https://ipfs.io/{cid}"

    url = "https://api.verbwire.com/v1/nft/mint/quickMintFromMetadataUrl"

    payload = f"-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"allowPlatformToOperateToken\"\r\n\r\ntrue\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"chain\"\r\n\r\n{chain}\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"metadataUrl\"\r\n\r\n{MURL}\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"recipientAddress\"\r\n\r\n{address}\r\n-----011000010111000001101001--\r\n\r\n"
    headers = {
        "accept": "application/json",
        "content-type": "multipart/form-data; boundary=---011000010111000001101001",
        "X-API-Key": "redact"
    }

    return json.loads(response.text)['quick_mint']['blockExplorer']