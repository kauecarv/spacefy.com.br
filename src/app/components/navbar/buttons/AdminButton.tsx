"use client";  // Garante que este componente seja renderizado no lado do cliente

import { motion } from "framer-motion";
import Link from "next/link";
import { FaUserAstronaut } from "react-icons/fa6";

const AdminButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}  // Entrada semelhante à logo
      animate={{ opacity: 1, y: 0 }}  // Chegada suave
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Link
        href="/wppcontact"
        className="py-3 px-5 hidden xs:inline-flex bg-white text-black rounded-xl text-sm font-poppins font-medium items-center gap-2 transition duration-300 hover:scale-105 hover:bg-spacefy hover:text-white"  // Escala e mudança de fundo no hover
      >
        <motion.div
    
        >
          <FaUserAstronaut />
        </motion.div> 
        Painel
      </Link>
    </motion.div>
  );
};

export default AdminButton;
