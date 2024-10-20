"use client"; 

import { motion } from "framer-motion";
import { BsIncognito } from "react-icons/bs";
import Link from "next/link";

const AdminButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}  
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Link
        href="/wppcontact"
        className="py-2.5 px-5 sm:py-3.5 hidden xs:inline-flex bg-white text-black rounded-xl text-md font-poppins font-medium items-center gap-2 transition duration-300 hover:scale-105 hover:bg-spacefy hover:text-white"  // Escala e mudança de fundo no hover
      >
        <motion.div
    
        >
          <BsIncognito />
        </motion.div> 
      
      </Link>
    </motion.div>
  );
};

export default AdminButton;
