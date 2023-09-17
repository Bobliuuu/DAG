"use client";
import Head from "next/head";
import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import AnimatedButtons from "~/components/AnimatedButtons";
import FileUploadBox from "~/components/FileUploadBox";

export default function Upload() {
  return (
    <>
      <div className="bg-upload flex-col-2 flex h-[100vh] items-center justify-center gap-11 bg-black bg-cover bg-no-repeat text-white">
        <div className="flex flex-col justify-center">
          <h1 className="text-7xl font-bold">
            <AnimatedText sentence="Upload Now" styling="" horizontal={false} />
          </h1>

          <AnimatedText
            sentence="Sort. Choose. Get Paid."
            styling="text-xl font-extralight"
            horizontal={false}
          />
          <AnimatedText
            sentence="Select various datasets from your device."
            styling="text-xl font-extralight"
            horizontal={true}
          />

          {/* Add a blank line for seperation */}
<div className="h-6"></div>

          <AnimatedButtons
            sentence="Upload Data"
            styling="text-xl text-center flex w-[200px] h-[60px]  bg-gradient-to-r from-purple-900 to-gray-950 rounded-full shadow-lg"
            link=""
          />
        </div>
        <div>
          <h1 className="text-7xl font-extrabold">
            <FileUploadBox
    styling="rounded-xl w-[400px] h-[200px] border-2 border-white text-center flex max-w-xl bg-gray-200 shadow-lg"
    opacity="opacity-5"
    link=""
/>

          </h1>
        </div>
      </div>
    </>
  );
}
