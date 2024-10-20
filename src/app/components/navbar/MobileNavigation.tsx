"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const MobileNavigation = () => {
  return (
    <motion.ul
      className="flex justify-center items-center gap-4  mx-auto xl:hidden"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}  
      animate={{ opacity: 1, y: 0, scale: 1 }}  
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
  
        <Link href={'/#'} className="py-3 px-3 bg-[#101010] rounded-xl border border-[#272727] inline-flex items-center">
          <AiOutlineMenu className="text-white group-hover:text-black transition" />
        </Link>
 
      {/* Adicione outros links de navegação aqui se necessário */}
    </motion.ul>
  );
}

export default MobileNavigation;
