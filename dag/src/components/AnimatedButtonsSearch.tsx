"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type AnimatedButtonsSearchProps = {
  sentence: string;
  styling: string;
  link: string;
};
const AnimatedButtonsSearch: React.FC<AnimatedButtonsSearchProps> = ({
  sentence,
  styling,
  link,
}) => {
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 10, stiffness: 120 },
    },
  };
  return (

      <motion.div
        className={`${styling} items-center justify-center`}
        variants={container}
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3, type: "spring" },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.button className="flex items-center justify-center rounded-full border-2 border-white bg-gray-950 p-3 hover:opacity-70">
          <h2 className={`flex text-xs font-light`}>{sentence}</h2>
        </motion.button>
      </motion.div>

  );
};

export default AnimatedButtonsSearch;
