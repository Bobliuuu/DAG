"use client";
import React from "react";
import { motion } from "framer-motion";
type AnimatedTextProps = {
  sentence: string;
  styling: string;
  horizontal: boolean;
};
const AnimatedText: React.FC<AnimatedTextProps> = ({ sentence, styling, horizontal }) => {
  const words = sentence.split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  const child = {
    hidden: {
      opacity: 0,
      ...(horizontal ? {x: 20} : {y:20}),
      transition: { type: "spring", damping: 10, stiffness: 120 },
    },
    visible: {
      opacity: 1,
      ...(horizontal ? {x: 0} : {y:0}),
      transition: { type: "spring", damping: 10, stiffness: 120 },
    },
  };
  return (
    <motion.div
      className="flex flex-wrap overflow-hidden break-words"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word: string, index: number) => (
        <motion.span
          className={styling}
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
