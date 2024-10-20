"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdCloseCircle } from "react-icons/io";
import { FaHeadset } from "react-icons/fa6";
import { FaRankingStar } from "react-icons/fa6";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: 0 },
  };

  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <>
      <motion.ul
        className="flex justify-center items-center gap-4 mx-auto xl:hidden"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <button
          className="py-3 px-3 bg-[#101010] rounded-xl border border-[#272727] inline-flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IoMdCloseCircle className="text-white" size={20} />
          ) : (
            <AiOutlineMenu className="text-white" size={16} />
          )}
        </button>
      </motion.ul>

      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            className="fixed inset-0 bg-[#101010] z-50 p-6 flex flex-col justify-center items-center"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="absolute top-6 font-poppins text-white text-md font-medium flex items-center gap-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <FaRankingStar className="text-[#4F46E5]" />
              3x <span className="text-[#4F46E5]">mais leads</span> em até 1 mês
            </motion.div>

            <motion.button
              className="absolute top-4 right-4 text-spacefy p-2 rounded-full hover:bg-[#4F46E5] transition"
              onClick={() => setIsOpen(false)}
              initial="hidden"
              animate="visible"
              variants={staggerVariants}
              custom={0} 
            >
              <IoMdCloseCircle size={24} />
            </motion.button>

            <motion.div
              className="mb-8 font-poppins font-medium text-4xl text-spacefy"
              initial="hidden"
              animate="visible"
              variants={staggerVariants}
              custom={1}
            >
              SPACEFY
            </motion.div>

            <motion.ul className="flex flex-col items-center gap-8">
              {[
                "Quem Somos?",
                "Nossos Serviços",
                "Ver Avaliações",
                "Projetos Entregues",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={staggerVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index + 2}
                  className="text-white text-xl font-poppins font-normal relative"
                >
                  <Link
                    href="/"
                    className="flex items-center justify-center text-white transition hover:text-[#4F46E5] hover:before:absolute hover:before:bottom-0 hover:before:left-0 hover:before:w-full hover:before:h-[2px] hover:before:bg-[#4F46E5]"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-10 text-center"
              initial="hidden"
              animate="visible"
              variants={staggerVariants}
              custom={6}
            >
              <Link
                href="/wppcontact"
                className="py-2 px-3 inline-flex mb-2 bg-white text-black rounded-xl text-sm font-poppins font-medium items-center gap-2 " 
              >
          
                  <FaHeadset />
                <span className="whitespace-nowrap">Entre em Contato</span>
              </Link>
              <p className="mt-3 text-sm font-dmsans font-normal text-[#A3A3A3]">
                Estamos prontos para ajudar você a alcançar o próximo nível.
              </p>
            </motion.div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default MobileNavigation;
