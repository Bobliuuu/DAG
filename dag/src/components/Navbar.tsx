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
      className="bg-black h-[10vh] flex flex-wrap overflow-hidden break-all"
      // variants={}
      initial="hidden"
      animate="visible"
    >
      <div className = "flex justify-between w-full items-start">
      <button>
      <Image src= {logo} alt="logo" width ={150} height = {150}/>
      </button>

      <div className = "flex flex-row gap-4 justify-center text-center items-center pt-4">
      <AnimatedButtonsNavbar sentence = "Home" styling = "text-white" link=""/>
      <AnimatedButtonsNavbar sentence = "Upload" styling = "text-white" link=""/>
      <AnimatedButtonsNavbar sentence = "Annotate" styling = "text-white" link=""/>
      <AnimatedButtonsNavbar sentence = "Host" styling = "text-white" link=""/>
      <AnimatedButtonsNavbar sentence = "Process" styling = "text-white" link=""/>
      <AnimatedButtonsNavbar sentence = "Dashboard" styling = "text-white" link=""/>
      </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
