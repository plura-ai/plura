import React from "react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants: Variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

export default function LoaderAnim() {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="h-12 w-2 bg-primary rounded-md"
        />
      ))}
    </motion.div>
  );
}
