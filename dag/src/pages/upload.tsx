import Head from "next/head";
import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import AnimatedButtons from "~/components/AnimatedButtons";
import FileUploadBox from "~/components/FileUploadBox";
import { useState } from "react"; // Import useState

export default function Upload() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(files);

    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setImagePreviewUrl(reader.result);
      }
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <>
      <div className="bg-upload flex-col-2 flex h-[100vh] items-center justify-center gap-11 bg-black bg-cover bg-no-repeat text-white">
        <div className="flex flex-col justify-center">
          <h1 className="text-7xl font-bold">
            <AnimatedText sentence="Upload Now" styling="" horizontal={false} />
          </h1>

          <AnimatedText sentence="Sort. Choose. Get Paid." styling="text-xl font-extralight" horizontal={false} />
          <AnimatedText
            sentence="Select various datasets from your device."
            styling="text-xl font-extralight"
            horizontal={true}
          />

          {/* Add a blank line for separation */}
          <div className="h-6"></div>

          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">
            Upload multiple files
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="multiple_files"
            type="file"
            multiple
            onChange={handleFileChange}
          />
          <div className="h-6"></div>

          <AnimatedButtons
            sentence="Submit"
            styling="text-l text-center flex w-[120px] h-[37px] bg-gradient-to-r from-purple-400 to-purple-950 rounded-full shadow-lg"
            link="/annotate"
          />
        </div>
        
        <div>
          <h1 className="text-7xl font-extrabold">
            <FileUploadBox
              styling="rounded-xl w-[400px] h-[200px] border-2 border-black text-center flex max-w-xl bg-gray-200 shadow-lg"
              opacity="opacity-5"
              link=""
              imagePreview={imagePreviewUrl}
            />
          </h1>
        </div>
      </div>
      {selectedFiles.length > 0 && (
        <div className="text-white mt-4">
          <p>Selected files:</p>
          <ul>
            {Array.from(selectedFiles).map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
