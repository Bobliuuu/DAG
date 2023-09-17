"use client";
import Head from "next/head";
import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import AnimatedButtons from "~/components/AnimatedButtons";
import FileUploadBox from "~/components/FileUploadBox";

export default function run() {
  return (
    <>
      <div className="bg-process flex-col-2 flex h-[100vh] items-center justify-center gap-11 bg-black bg-cover bg-no-repeat text-white">
        <div className="flex flex-col justify-center gap-y-4">
          <h1 className="text-7xl font-bold">
            <AnimatedText sentence="Process" styling="" horizontal={false} />
          </h1>
          <AnimatedText
            sentence="Run your model, and we'll validate"
            styling="text-2xl font-light"
            horizontal={true}
          />
          <AnimatedButtons
            sentence="Upload your model"
            styling="font-light text-3xl text-center flex max-w-xs bg-gradient-to-r from-purple-700 to-gray-900 rounded-full shadow-lg"
            link=""
          />
        </div>
        <div>
        </div>
      </div>
    </>
  );
}