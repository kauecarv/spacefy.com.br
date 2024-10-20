"use client";  

import { motion } from "framer-motion";
import Link from "next/link";

const NavbarLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}  
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link href="https://spacefy.com.br" className="font-bold whitespace-nowrap flex-nowrap flex font-poppins text-2xl md:text-3xl text-white transition duration-300 hover:text-spacefy hover:scale-105">
        Spacefy
      </Link>
    </motion.div>
  );
};

export default NavbarLogo;
