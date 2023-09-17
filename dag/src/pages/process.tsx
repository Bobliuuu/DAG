"use client";
import Head from "next/head";
import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import AnimatedButtons from "~/components/AnimatedButtons";
import FileUploadBox from "~/components/FileUploadBox";

export default function process() {
  return (
    <>
      <div className="bg-process flex-col-2 flex h-[100vh] items-center justify-center gap-11 bg-black bg-cover bg-no-repeat text-white">
        <div className="flex flex-col justify-center">
          <h1 className="text-7xl font-extrabold">
            <AnimatedText sentence="Process and Run A Model" styling="" horizontal={false} />
          </h1>
          <AnimatedText
            sentence="Upload, run a model, and process it through our community!"
            styling="text-2xl"
            horizontal={true}
          />
          <AnimatedButtons
            sentence="Upload your model"
            styling="text-3xl text-center flex max-w-xs bg-gradient-to-r from-purple-900 to-gray-900 rounded-full shadow-lg"
            link=""
          />
        </div>
        <div>
        </div>
      </div>
    </>
  );
}
