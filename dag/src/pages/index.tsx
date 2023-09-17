"use client";
import Head from "next/head";
import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import AnimatedButtons from "~/components/AnimatedButtons";
import AnimatedButtonsSearch from "~/components/AnimatedButtonsSearch";
import ImageSearchBox from "~/components/ImageSearchBox";
import SearchBar from "~/components/SearchBar";
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
            styling="text-xl text-center flex w-[200px] h-[60px]  bg-gradient-to-r from-purple-400 to-purple-950 rounded-full shadow-lg"
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
      <div className="bg-black flex-col-2 flex h-[60vh] items-center justify-center gap-11 bg-black bg-cover bg-no-repeat text-white">
        <div className="fkex justify-between w-full max-w-xl px-10">
      <AnimatedText
            sentence="Leverage your storage and processing space."
            styling="text-5xl font-extralight mb-4"
            horizontal={false}
          />
          </div>
          <div className="grid grid-cols-2 gap-12 max-w-xl">
            <div>
              <div className="flex items-start flex-row">
                <div className="h-7 w-1 bg-blue-500 mr-3"></div>
            <AnimatedText
            sentence="Get Paid Fast"
            styling="text-3xl"
            horizontal={false}
          /></div>
              <p className= "font-light">Make money while giving up some of your processing to help people improve and train their models!</p>
            </div>
            <div>
              <div className="flex items-start flex-row">
                <div className="h-7 w-1 bg-yellow-500 mr-3"></div>
            <AnimatedText
            sentence="Compute"
            styling="text-3xl"
            horizontal={false}
          /></div>
              <p className= "font-light">Gain access to a vast array of datasets crowdsourced by others in the DAG community!</p>
            </div>
            <div>
              <div className="flex items-start flex-row">
                <div className="h-7 w-1 bg-green-500 mr-3"></div>
            <AnimatedText
            sentence="Decentralized Storage"
            styling="text-3xl"
            horizontal={false}
          /></div>
              <p className= "font-light">Store models and leverage the processing space provided on DAG</p>
            </div>
            <div>
              <div className="flex items-start flex-row">
                <div className="h-7 w-1 bg-purple-500 mr-3"></div>
            <AnimatedText
            sentence="Train Fast"
            styling="text-3xl"
            horizontal={false}
          /></div>
              <p className= "font-light">Don't have a powerful device? DAG solves that problem!</p>
            </div>
          </div>
      
      </div>
      <div className="bg-warped flex-col-2 flex h-[60vh] items-center justify-center bg-cover bg-no-repeat gap-11 bg-cover text-white">
     
      <div className="flex items-center justify-between flex-col gap-y-3">
      <SearchBar/>
        <div className="flex flex-row items-center justify-center gap-4 pt-4 text-center">
          <AnimatedButtonsSearch
            sentence="ALL DATASETS"
            styling="text-white"
            link=""
          />
          <AnimatedButtonsSearch
            sentence="IRIS DATA"
            styling="text-white"
            link=""
          />
          <AnimatedButtonsSearch
            sentence="PRE-TRAINED MODEL"
            styling="text-white"
            link=""
          />
          <AnimatedButtonsSearch
            sentence="RENEWABLE ENERGY"
            styling="text-white"
            link=""
          />
          <AnimatedButtonsSearch
            sentence="LOAN PREDICTION DATA"
            styling="text-white"
            link=""
          />

        </div>
        <div className="flex flex-row items-center justify-center gap-4 pt-4 text-center">
            <ImageSearchBox
    styling="rounded-xl w-[300px] h-[200px] border-2 border-white text-center flex max-w-xl bg-black shadow-lg"
    opacity="opacity-5"
    link=""
/><ImageSearchBox
    styling="rounded-xl w-[300px] h-[200px] border-2 border-white text-center flex max-w-xl bg-black shadow-lg"
    opacity="opacity-5"
    link=""
/><ImageSearchBox
    styling="rounded-xl w-[300px] h-[200px] border-2 border-white text-center flex max-w-xl bg-black shadow-lg"
    opacity="opacity-5"
    link=""
/>
        </div>
      </div>
      </div>
    </>
  );
}
