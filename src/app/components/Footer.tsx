"use client"

import Link from "next/link";
import { FaDiscord, FaInstagram, FaLinkedin, FaThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black w-full relative">
      <div className="flex items-center justify-center">
        <p className="font-poppins uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-b from-transparent to-[rgba(239,236,255,0.45)] text-[50px] sm:text-[90px] md:text[110px] md:text-[280px] lg:text-[280px] leading-[0.9] whitespace-nowrap">
          IMPACTAR
        </p>
      </div>

      <div className="absolute -bottom-20 md:-bottom-10 h-full md:h-8 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-0">
          <div className="order-1 sm:order-none flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full sm:w-auto">
            <Link href="/about" className="text-white hover:text-indigo-600 transition text-sm duration-500 hover:-translate-y-1 font-poppins font-normal text-center">
              Quem Somos?
            </Link>
            <Link href="/services" className="text-white hover:text-indigo-600 transition text-sm duration-500 hover:-translate-y-1 font-poppins font-normal text-center">
              Nossos Serviços
            </Link>
            <Link href="/reviews" className="text-white hover:text-indigo-600 transition text-sm duration-500 hover:-translate-y-1 font-poppins font-normal text-center">
              Ver Avaliações
            </Link>
            <Link href="/projects" className="text-white hover:text-indigo-600 transition text-sm duration-500 hover:-translate-y-1 font-poppins font-normal text-center">
              Projetos Entregues
            </Link>
          </div>

          <div className="order-2 sm:order-none flex gap-6 sm:gap-10 items-center mt-6 sm:mt-0 mb-6">
            <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 transition duration-300 hover:scale-110 cursor-pointer text-white hover:text-[#717BFE]" />
            <FaDiscord className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 transition duration-300 hover:scale-110 cursor-pointer text-white hover:text-[#717BFE]" />
            <FaThreads className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 transition duration-300 hover:scale-110 cursor-pointer text-white hover:text-[#717BFE]" />
            <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 transition duration-300 hover:scale-110 cursor-pointer text-white hover:text-[#717BFE]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
