"use client";
import Head from "next/head";
import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import AnimatedButtons from "~/components/AnimatedButtons";
import FileUploadBox from "~/components/FileUploadBox";

export default function Upload() {
  return (
    <>
    <div className= "bg-upload bg-no-repeat bg-cover bg-black h-[100vh] text-white justify-center flex flex-col-2 items-center gap-11">
      <div className = "justify-center flex flex-col">
      <h1 className="text-7xl font-extrabold">
        <AnimatedText sentence="Upload Now" styling="" horizontal = {false}/>
      </h1>
      <AnimatedText sentence="Sort. Choose. Get Paid." styling="text-2xl" horizontal = {false}/>
      <AnimatedText
        sentence="Select various datasets from your device."
        styling="text-2xl"
        horizontal = {true}
      />
      <AnimatedButtons sentence = "Upload Data" styling = "text-3xl text-center flex max-w-xs bg-gradient-to-r from-purple-900 to-gray-900 rounded-full shadow-lg" link=""/>
      </div>
      <div>
      <h1 className="text-7xl font-extrabold">
      <FileUploadBox styling = "rounded-xl w-[400px] h-[200px] border-2 border-white text-center flex max-w-xl bg-gray-200 shadow-lg" opacity = "opacity-5" link=""/>
      </h1>
      </div>
      </div>
    </>
    
  );
}
