"use client";  

import { motion } from "framer-motion";
import Link from "next/link";

const NavbarNavigation = () => {

  return (
    <motion.ul
      className="hidden xl:flex text-white w-full max-w-4xl bg-[#101010] rounded-full border border-[#272727] py-4 px-6"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}  
      animate={{ opacity: 1, y: 0, scale: 1 }}  
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.04, borderColor: "#383838" }}  
    >
      {["Quem Somos?", "Nossos Serviços", "Ver Avaliações", "Projetos Entregues"].map((item, index) => (
        <li
          key={index}
          className="px-4 "  
        >
          <Link href="/" className="font-poppins transition duration-300 hover:text-spacefy text-md font-normal text-white">
            {item}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
};

export default NavbarNavigation;
