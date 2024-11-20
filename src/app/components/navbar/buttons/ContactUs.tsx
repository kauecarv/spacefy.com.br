"use client";  

import { motion } from "framer-motion";
import Link from "next/link";
import { FaHeadphonesAlt } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";

const ContactUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}  
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="z-50"  
    >
      <Link
        href="/planejamento"
        className="py-2 px-4 md:py-3 md:px-5 hidden sm:inline-flex bg-white text-black rounded-xl text-sm font-poppins font-medium items-center gap-2 transition duration-300 hover:scale-105 hover:bg-black hover:text-white"  
      >
  
          <FaHeadphonesAlt />
        <span className="whitespace-nowrap">Fale Conosco</span> 
      </Link>
    </motion.div>
  );
};

export default ContactUs;
