"use client";
import Head from "next/head";
import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import AnimatedButtons from "~/components/AnimatedButtons";

export default function wallet() {
  return (
    <>
      <div className="bg-process flex-col-2 flex h-[100vh] items-center justify-center gap-11 bg-black bg-cover bg-no-repeat text-white">
        <div className="flex flex-col justify-center gap-y-4">
          <h1 className="text-7xl font-bold">
            <AnimatedText sentence="Connect Your Wallet" styling="" horizontal={false} />
          </h1>
          <AnimatedText
            sentence="You give back, we give back"
            styling="text-2xl font-light"
            horizontal={true}
          />
          <AnimatedButtons
            sentence="+ Wallet Address"
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
