"use client";
import { motion } from "framer-motion";
import AnimatedButtons from "./AnimatedButtons";
import Link from "next/link";
import logo from "public/img/graphics/Logo.png";
import Image from "next/image";
const Footer: React.FC = () => {
 
  return (
<div className="bg-black flex justify-center items-center">
    <motion.div
      className="h-[20vh] flex flex-wrap overflow-hidden break-all gap-x-40 justify-end pb-40"
      initial="hidden"
      animate="visible"
    >
      
        
      <div className = "flex flex-col">
      <Image src={logo} alt="logo" width={150} height={150} />
      <AnimatedButtons sentence = "Made by the DAG team" styling = "text-gray-400" link=""/>
      </div>
      <div className = "flex flex-col">
      <AnimatedButtons sentence = "DAG" styling = "text-white" link=""/>
      <AnimatedButtons sentence = "See how it works" styling = "text-gray-400" link=""/>
      <AnimatedButtons sentence = "Contact us" styling = "text-gray-400" link=""/>
      </div>
      <div className = "flex flex-col">
      <AnimatedButtons sentence = "GET CONNECTED" styling = "text-white" link=""/>
      <AnimatedButtons sentence = "Discord" styling = "text-gray-400" link=""/>
      <AnimatedButtons sentence = "Instagram" styling = "text-gray-400" link=""/>
      </div>
    </motion.div>
    </div>
  );
};

export default Footer;
