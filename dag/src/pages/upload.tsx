"use client";
import Head from "next/head";
import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
export default function Upload() {
  return (
    <>
      <h1 className="text-4xl font-bold">
        <AnimatedText sentence="Upload now" styling="" />
      </h1>
      <AnimatedText sentence="Sort. Choose. Get Paid." styling="" />
      <AnimatedText
        sentence="Select various datasets from your device."
        styling=""
      />
      <button>
        <h2>Upload data</h2>
      </button>
    </>
  );
}
