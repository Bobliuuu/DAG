"use client";
import { motion } from "framer-motion";
import Image from "next/image";
type ImageSearchBoxProps = {
  styling: string;
  link: string;
  opacity: string;
};

const ImageSearchBox: React.FC<ImageSearchBoxProps> = ({ styling, link, opacity }) => {
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", damping: 10, stiffness: 120 } }
  };

  return (
    <motion.div 
        className={`${styling} justify-center items-center  overflow-hidden ${opacity}`} 
        variants={container} 
        initial="hidden" 
        animate="visible" 
        whileHover={{
            scale: 1.05,
            transition: { duration: 0.3, type: "spring" },
        }}
        whileTap={{ scale: 0.9 }}
    >
        <motion.button className="">
          <Image src = {link} alt = {link} width={400} height = {400}/>
        </motion.button>
    </motion.div>
  );
};

export default ImageSearchBox;
