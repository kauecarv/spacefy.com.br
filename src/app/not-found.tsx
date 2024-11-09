"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInDelayed = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <main className="flex flex-col items-center justify-center relative min-h-screen bg-black overflow-hidden">
      <section className="flex flex-col justify-center w-full max-w-6xl mx-auto items-center py-4 px-4 min-h-fit relative">
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-0"
          initial="hidden"
          animate="visible"
          variants={fadeInDelayed}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-poppins uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-b from-transparent to-[#4F46E8] text-[90px] sm:text[110px] md:text-[300px] text-8xl leading-[0.9] whitespace-nowrap">
            404
          </p>
        </motion.div>

        <div className="flex flex-col text-center justify-center mx-auto text-white mt-2 gap-2 z-10">
          <motion.h1
            className="text-4xl mb-4 sm:text-8xl text-white font-bold font-poppins leading-tight"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Página não encontrada.
          </motion.h1>

          <motion.p
            className="font-poppins font-normal mx-auto text-center text-sm leading-tight w-full max-w-lg text-[#A3A3A3] mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            A página que você está procurando pode ter sido removida ou está temporariamente indisponível.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            <Link 
              href="/"
              className="px-8 py-3 bg-[#4F46E5] text-white rounded-lg font-medium hover:bg-[#4338CA] transition-colors font-dmsans"
            >
              Voltar ao Início
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}