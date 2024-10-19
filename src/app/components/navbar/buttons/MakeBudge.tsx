"use client";  // Garante que este componente seja renderizado no lado do cliente

import { motion } from "framer-motion";
import Link from "next/link";
import { PiStarFourFill } from "react-icons/pi";

const MakeBudge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}  // Entrada semelhante à logo
      animate={{ opacity: 1, y: 0 }}  // Chegada suave
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Link
        href="/wppcontact"
        className="py-2 px-4 md:py-3 md:px-5 hidden sm:inline-flex bg-spacefy text-white rounded-xl text-sm font-poppins font-medium items-center gap-2 transition duration-300 hover:scale-105 hover:bg-white hover:text-black"  // Escala e mudança de fundo no hover
      >
        <motion.div
          animate={{ rotate: 360 }}  // Ícone gira continuamente
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}  // Rotação suave
        >
          <PiStarFourFill />
        </motion.div>
        <span className="whitespace-nowrap">Fazer Orçamento</span> {/* Garante que não quebre o texto */}
      </Link>
    </motion.div>
  );
};

export default MakeBudge;
