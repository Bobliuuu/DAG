"use client";
import React, {useRef} from "react";
import { motion } from "framer-motion";
type AnimatedButtonsProps = {
  sentence: string;
  styling: string;
  link: string;
};
const AnimatedButtons: React.FC<AnimatedButtonsProps> = ({ sentence, styling, link }) => {
  const container = {
    hidden: {opacity: 0, scale: 0}, visible: {opacity: 1, scale:1, transition: {type: "spring", damping: 10, stiffness: 120}}
};
  return (
    <motion.div className = {`${styling} justify-center items-cetner`} variants = {container} initial = "hidden" animate = "visible" whileHover={{
      scale: 1.05,
      transition: { duration: 0.3, type: "spring" },
    }}
    whileTap={{ scale: 0.9}}>
          <motion.button className = "p-3"
>
            <h2 className={`font-thin flex`}>
              {sentence}
          </h2>
          </motion.button>
          </motion.div>
  );
};

export default AnimatedButtons;
