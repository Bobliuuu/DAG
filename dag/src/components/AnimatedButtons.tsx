"use client";
import { motion } from "framer-motion";
import Link from "next/link"
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
    <motion.div className = {`${styling} justify-center items-center`} variants = {container} initial = "hidden" animate = "visible" whileHover={{
      scale: 1.05,
      transition: { duration: 0.3, type: "spring" },
    }}
    whileTap={{ scale: 0.9}}>
      <Link href= {link}> 
          <motion.button className = "p-3"
>
            <h2 className={`font-light flex`}>
              {sentence}
          </h2>
          </motion.button>
        </Link>
          </motion.div>
  );
};

export default AnimatedButtons;
