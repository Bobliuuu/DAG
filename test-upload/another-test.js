import { Web3Storage } from 'web3.storage'
import { getFilesFromPath } from 'web3.storage'
import { File } from 'web3.storage'

async function getFiles (path) {
  const files = await getFilesFromPath(path)
  console.log(`read ${files.length} file(s) from ${path}`)
  return files
}

function makeFileObjects () {
    // You can create File objects from a Buffer of binary data
    // see: https://nodejs.org/api/buffer.html
    // Here we're just storing a JSON object, but you can store images,
    // audio, or whatever you want!
    const obj = { hello: 'world' }
    const buffer = Buffer.from(JSON.stringify(obj))
  
    const files = [
      new File(['contents-of-file-1'], 'plain-utf8.txt'),
      new File([buffer], 'hello.json')
    ]
    return files
}  

// Function to create a web3.storage client
function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

// Function to get the access token
function getAccessToken() {
  // If you're just testing, you can paste in a token
  // and uncomment the following line:
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGNCOTU4NjIxRjVmNjcxNkM4QTlhRDZkRWQ4MUVDRTQzZGQwQzFjOGUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTEzMDM2ODMwNjEsIm5hbWUiOiJjb2xhYiJ9.RIio_qk4aEyLJaBUjmemiPm0zTFJ4K_kHN2AUhex9Jw';
}

// Function to upload files to web3.storage
async function storeFiles(files) {
  try {
    console.log(files)
    const client = makeStorageClient();
    const cid = await client.put(files);
    console.log('Stored files with CID:', cid);
    return cid;
  } catch (error) {
    console.error('Error uploading files to web3.storage:', error);
  }
}

// Usage example:
const filesToUpload = getFiles('images');
storeFiles(filesToUpload);
