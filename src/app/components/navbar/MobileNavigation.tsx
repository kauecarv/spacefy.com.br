"use client";

import NavbarLogo from "../Logo";

import Link from "next/link";
import { useState, useEffect } from "react";

import { TbSquareRoundedPercentage } from "react-icons/tb";

import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdCloseCircle } from "react-icons/io";
import { FaHeadset } from "react-icons/fa6";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = '';
      document.body.style.width = '';
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const menuItems = [
    "Quem Somos?",
    "Nossos Serviços",
    "Ver Avaliações",
    "Projetos Entregues",
  ];

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="lg:hidden">
      <button
        className="p-2 bg-[#101010] rounded-xl border border-[#272727]"
        onClick={() => setIsOpen(true)}
      >
        <AiOutlineMenu className="text-white" size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex flex-col"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <div className="flex justify-between items-center p-4">
              <NavbarLogo />
              <button
                className="p-2 text-white"
                onClick={() => setIsOpen(false)}
              >
                <IoMdCloseCircle size={24} />
              </button>
            </div>

            <div className="flex-grow flex flex-col justify-center items-center">
              <div className="mb-8 text-center px-4">
                <TbSquareRoundedPercentage className="text-[#4F46E5] text-2xl mb-2 mx-auto" />
                <p className="text-white text-lg font-poppins font-medium">
                  Até 4x mais leads em um mês
                </p>
              </div>
              <ul className="space-y-6 text-center mb-8">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href="/"
                      className="text-white text-xl font-dmsans transition duration-300 hover:text-[#4F46E5]"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="w-full px-4 mt-8">
                <Link
                  href="/"
                  className="w-full py-3 bg-white text-black rounded-xl text-center font-poppins font-medium h-12 inline-flex items-center justify-center"
                >
                  <FaHeadset className="inline mr-2" />
                  Entre em Contato
                </Link>
                <p className="mt-3 text-sm font-dmsans font-normal text-center text-[#A3A3A3]">
                  Estamos prontos para ajudar você a alcançar o próximo nível.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavigation;
