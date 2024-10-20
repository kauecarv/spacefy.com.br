"use client";  

import { motion } from "framer-motion";
import Link from "next/link";
import { PiStarFourFill } from "react-icons/pi";

const MakeBudge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}  
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Link
        href="/"
        id="ButtonMakeBudge"
        className="py-2 px-4 md:py-3 md:px-5 hidden sm:inline-flex bg-spacefy text-white rounded-xl text-sm font-poppins font-medium items-center gap-2 transition duration-300 hover:scale-105 hover:bg-white hover:text-black"  // Escala e mudança de fundo no hover
      >
        <motion.div
          animate={{ rotate: 360 }}  
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}  
        >
          <PiStarFourFill />
        </motion.div>
        <span className="whitespace-nowrap">Fazer Orçamento</span> 
      </Link>
    </motion.div>
  );
};

export default MakeBudge;
