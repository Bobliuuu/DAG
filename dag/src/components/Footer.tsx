"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimatedButtons from "./AnimatedButtons";
import Link from "next/link";
const Footer: React.FC = () => {
 
  return (
    <motion.div
      className="bg-black h-[15vh] flex flex-wrap overflow-hidden break-all"
      // variants={}
      initial="hidden"
      animate="visible"
    >
      <div className = "flex flex-row gap-4">
      <AnimatedButtons sentence = "Footer" styling = "text-white" link=""/>
      <AnimatedButtons sentence = "Footer" styling = "text-white" link=""/>
      <AnimatedButtons sentence = "Footer" styling = "text-white" link=""/>
      <AnimatedButtons sentence = "Footer" styling = "text-white" link=""/>
      </div>
    </motion.div>
  );
};

export default Footer;
