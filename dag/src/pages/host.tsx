"use client";
import Head from "next/head";
import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import AnimatedButtons from "~/components/AnimatedButtons";
import FileUploadBox from "~/components/FileUploadBox";

export default function host() {
  return (
    <>
      <div className="bg-host flex-col-2 flex h-[100vh] items-center justify-center gap-11 bg-black bg-cover bg-no-repeat text-white">
        <div className="flex flex-col justify-center">
          <h1 className="text-7xl font-extrabold">
            <AnimatedText sentence="Host Your Device" styling="" horizontal={true} />
          </h1>
          <div className="pt-5">
          <AnimatedText
            sentence="Unused processing power? DAG can leverage it and help you earn cryptocurrency at the same time!"
            styling="text-2xl"
            horizontal={true}
          />
          </div>
          <div className="pt-5">
          <AnimatedButtons
            sentence="Download the client"
            styling="text-3xl text-center flex max-w-xs bg-gradient-to-r from-purple-900 to-gray-900 rounded-full shadow-lg"
            link=""
          />
          </div>
          <div className="pt-5">
          <AnimatedText
            sentence="Minimum client requirements:"
            styling="text-sm"
            horizontal={false}
          />
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  );
}
