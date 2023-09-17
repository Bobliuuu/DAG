"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimatedButtonsNavbar from "./AnimatedButtonsNavbar";
import logo from "public/img/graphics/Logo.png";
import Image from "next/image";
import Link from "next/link";
const Navbar: React.FC = () => {
  return (
    <motion.div
      className="flex h-[10vh] flex-wrap overflow-hidden break-all bg-black"
      // variants={}
      initial="hidden"
      animate="visible"
    >
      
      <div className="flex w-full items-start justify-between">
        <button>
          <Image src={logo} alt="logo" width={150} height={150} />
        </button>

        <div className="flex flex-row items-center justify-center gap-4 pt-4 text-center">
          <AnimatedButtonsNavbar
            sentence="Home"
            styling="text-white"
            link="/"
          />
          <AnimatedButtonsNavbar
            sentence="Upload"
            styling="text-white"
            link="/upload"
          />
          <AnimatedButtonsNavbar
            sentence="Annotate"
            styling="text-white"
            link="/annotate"
          />
          <AnimatedButtonsNavbar sentence="Host" styling="text-white" link="/host" />
          <AnimatedButtonsNavbar
            sentence="Process"
            styling="text-white"
            link="/process"
          />
          <AnimatedButtonsNavbar
            sentence="Dashboard"
            styling="text-white"
            link="/dashboard"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
