"use client";
import Head from "next/head";
import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import AnimatedButtons from "~/components/AnimatedButtons";
import FileUploadBox from "~/components/FileUploadBox";

export default function annotate() {
  return (
    <>
      <div className="bg-annotate flex-col-2 flex h-[100vh] items-center justify-center gap-11 bg-black bg-cover bg-no-repeat text-white">
        <div className="flex flex-col justify-center">
          <h1 className="text-7xl font-extrabold">
            <AnimatedText sentence="Annotate and Earn" styling="" horizontal={false} />
          </h1>
          <AnimatedText
            sentence="Sort. Choose. Get Paid."
            styling="text-2xl"
            horizontal={false}
          />
          <AnimatedText
            sentence="Select various datasets from your device."
            styling="text-2xl"
            horizontal={true}
          />
          <AnimatedButtons
            sentence="Upload Data"
            styling="text-3xl text-center flex max-w-xs bg-gradient-to-r from-purple-900 to-gray-900 rounded-full shadow-lg"
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
