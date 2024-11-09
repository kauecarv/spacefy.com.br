"use client";

import { motion, useScroll, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { MdOutlineUpgrade } from "react-icons/md";

export default function ScrollToTop() {
  const { scrollY } = useScroll();
  const controls = useAnimation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateScrollButton = () => {
      if (scrollY.get() > 400) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    scrollY.onChange(updateScrollButton);
    return () => {
      scrollY.clearListeners();
    };
  }, [controls, scrollY]);

  const buttonVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };



  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      className="fixed right-8 bottom-24 z-50 bg-neutral-900 hover:bg-indigo-700 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors"
      variants={buttonVariants}
      initial="hidden"
      animate={controls}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      <MdOutlineUpgrade className="w-6 h-6" />
    </motion.button>
  );
} 