"use client";
import Head from "next/head";
import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import AnimatedButtons from "~/components/AnimatedButtons";
import FileUploadBox from "~/components/FileUploadBox";

export default function Home() {
  return (
    <>
    
      <div className="bg-landing flex-col-2 flex h-[100vh] items-center justify-center gap-11 bg-black bg-cover bg-no-repeat text-white">
        <div className="flex flex-col justify-center items-center space-y-8">

          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Power your <span className="text-[hsl(244,100%,70%)]">ML</span>{" "}
            models.
          </h1>
          <AnimatedText
            sentence="Get data, processing power, and storage from other members."
            styling="text-xl font-extralight"
            horizontal={false}
          />
          <div className = "flex justify-center flex-row gap-7">
          <AnimatedButtons
            sentence="DASHBOARD"
            styling="text-xl text-center flex w-[200px] h-[60px]  bg-gradient-to-r from-purple-900 to-gray-950 rounded-full shadow-lg"
            link=""
          />
          <AnimatedButtons
            sentence="READ DOCS"
            styling="text-xl text-center flex w-[200px] h-[60px]  bg-gray-950 rounded-full shadow-lg"
            link=""
          />
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  );
}
