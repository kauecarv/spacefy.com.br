"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaDiscord, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { GiRoundStar } from "react-icons/gi";
import Image from "next/image";
import MoreSales from "./sections/more-sales/page";
import AboutUs from "./sections/about-us/page";
import Features from "./sections/features/page";
import OurServices from "./sections/our-services/page";
import Projects from "./sections/projects/page";
import ContactUs from "./sections/contact-us/page";
import Footer from "../components/Footer";
import Reviews from "./sections/reviews/page";
import { RiMacbookLine } from "react-icons/ri";
import { FaHeadphonesAlt } from "react-icons/fa";

// const words = ["Digital.", "Exclusivo.", "Moderno.", "Eficiente."];

export default function Home() {
  // const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // // useEffect(() => {
  // //   const interval = setInterval(() => {
  // //     setCurrentWordIndex((prevIndex) =>
  // //       prevIndex === words.length - 1 ? 0 : prevIndex + 1
  // //     );
  // //   }, 4500);

  // //   return () => clearInterval(interval);
  // // }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInDelayed = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const wordAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const [reviewCount, setReviewCount] = useState(1000);
  const targetValue = 2172;

  useEffect(() => {
    let currentCount = reviewCount;
    const interval = setInterval(() => {
      if (currentCount < targetValue) {
        currentCount += Math.ceil((targetValue - currentCount) / 10);
        setReviewCount(currentCount);
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [reviewCount]);

  const bounceAnimation = {
    y: [0, -6, 0],
    transition: { duration: 0.4, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <main className="flex flex-col items-center justify-between relative min-h-screen bg-black overflow-hidden">
      <section className="flex flex-col md:flex-row justify-start w-full max-w-5xl mx-auto items-center py-6 px-4 min-h-fit relative ">
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-0 translate-y-[190px]"
          initial="hidden"
          animate="visible"
          variants={fadeInDelayed}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-poppins uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-b from-transparent to-[#4F46E8] text-[90px] sm:text[110px] md:text-[300px] text-8xl leading-[0.9] whitespace-nowrap mb-20">
            SPACEFY
          </p>
        </motion.div>

        <div className="flex flex-col text-center lg:text-start text-white mt-2 gap-2 lg:mt-16 lg:z-50">
          <motion.div
            className="flex md:hidden mx-auto xl:mx-0 gap-10 py-2 px-2 items-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <Link
              href="https://discord.gg/Qby9JecQSW"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="w-6 h-6 md:w-8 md:h-8 transition duration-300 hover:scale-110 cursor-pointer hover:text-[#717BFE]" />
            </Link>

            <Link
              href="https://wa.me/+556281615951?text=Olá, gostaria de falar com vocês."
              target="_blank"
            >
              <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8 transition duration-300 hover:scale-110 cursor-pointer hover:text-[#717BFE]" />
            </Link>
            <Link href="/projetos" target="_blank" rel="noopener noreferrer">
              <RiMacbookLine className="w-6 h-6 md:w-8 md:h-8 transition duration-300 hover:scale-110 cursor-pointer hover:text-[#717BFE]" />
            </Link>
            <Link
              href="https://wa.me/+556281615951?text=Olá, gostaria de falar com vocês."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaHeadphonesAlt className="w-6 h-6 md:w-8 md:h-8 transition duration-300 hover:scale-110 cursor-pointer hover:text-[#717BFE]" />
            </Link>
          </motion.div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-start md:hidden mx-auto lg:mx-0 items-center justify-center text-center gap-2">
            <div className="relative -mt-1 flex -space-x-3">
              <Link href="#avaliacoes">
                <Image
                  width={40}
                  height={40}
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Avatar Cliente Nº 1"
                  className="w-10 h-10 transition duration-200 hover:border-spacefy rounded-full border-2 border-[#101010]"
                />
              </Link>

              <Link href="#avaliacoes">
                <Image
                  width={40}
                  height={40}
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Avatar Cliente Nº 2"
                  className="w-10 h-10  transition duration-200 hover:border-spacefy rounded-full border-2 border-[#101010]"
                />
              </Link>

              <Link href="#avaliacoes">
                <Image
                  width={40}
                  height={40}
                  src="https://randomuser.me/api/portraits/men/52.jpg"
                  alt="Avatar Cliente Nº 3"
                  className="w-10 h-10 transition duration-200 hover:border-spacefy rounded-full border-2 border-[#101010]"
                />
              </Link>

              <Link href="#avaliacoes">
                <Image
                  width={40}
                  height={40}
                  src="https://randomuser.me/api/portraits/men/64.jpg"
                  alt="Avatar Cliente Nº 4"
                  className="w-10 h-10 transition duration-200 hover:border-spacefy rounded-full border-2 border-[#101010]"
                />
              </Link>
            </div>

            <motion.div
              className="flex items-center mb-4 py-2 px-3 max-w-[160px] gap-1 border border-[#222222] bg-[#101010] rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <GiRoundStar className="text-spacefy" />
              <GiRoundStar className="text-spacefy" />
              <GiRoundStar className="text-spacefy" />
              <GiRoundStar className="text-spacefy" />
              <GiRoundStar className="text-spacefy" />

              <motion.span
                className="text-[#fff9] text-xs font-dmsans font-normal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.span animate={bounceAnimation}>
                  ({reviewCount})
                </motion.span>
              </motion.span>
            </motion.div>
          </div>

          <motion.h1
            className="text-4xl mb-4 lg:mb-0 sm:text-6xl md:text-8xl text-white font-bold font-poppins leading-tight"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-white">Explore</span> o{" "}
            <AnimatePresence mode="wait">
              <motion.span
                // key={currentWordIndex}
                className="text-[#4F46E5] inline-block"
                variants={wordAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* {words[currentWordIndex]} */}
                Digital.
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          <motion.div
            className="hidden md:flex mx-auto xl:mx-0 gap-10 py-4 px-2 items-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <Link
              href="https://discord.gg/Qby9JecQSW"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="w-6 h-6 md:w-8 md:h-8 transition duration-300 hover:scale-110 cursor-pointer hover:text-[#717BFE]" />
            </Link>
            <Link
              href="https://wa.me/5581997133518"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8 transition duration-300 hover:scale-110 cursor-pointer hover:text-[#717BFE]" />
            </Link>
            <Link href="/projetos" target="_blank" rel="noopener noreferrer">
              <RiMacbookLine className="w-6 h-6 md:w-8 md:h-8 transition duration-300 hover:scale-110 cursor-pointer hover:text-[#717BFE]" />
            </Link>
            <Link
              href="https://wa.me/+556281615951?text=Olá, gostaria de falar com vocês."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaHeadphonesAlt className="w-6 h-6 md:w-8 md:h-8 transition duration-300 hover:scale-110 cursor-pointer hover:text-[#717BFE]" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col sm:text-center lg:text-start"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <div className="hidden md:flex mx-auto lg:mx-0 items-start justify-start text-center gap-2">
            <div className="relative -mt-1 flex -space-x-3">
              <Link href="#avaliacoes">
                <Image
                  width={40}
                  height={40}
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Avatar Cliente Nº 1"
                  className="w-10 h-10 transition duration-200 hover:border-spacefy rounded-full border-2 border-[#101010]"
                />
              </Link>

              <Link href="#avaliacoes">
                <Image
                  width={40}
                  height={40}
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Avatar Cliente Nº 2"
                  className="w-10 h-10  transition duration-200 hover:border-spacefy rounded-full border-2 border-[#101010]"
                />
              </Link>

              <Link href="#avaliacoes">
                <Image
                  width={40}
                  height={40}
                  src="https://randomuser.me/api/portraits/men/52.jpg"
                  alt="Avatar Cliente Nº 3"
                  className="w-10 h-10 transition duration-200 hover:border-spacefy rounded-full border-2 border-[#101010]"
                />
              </Link>

              <Link href="#avaliacoes">
                <Image
                  width={40}
                  height={40}
                  src="https://randomuser.me/api/portraits/men/64.jpg"
                  alt="Avatar Cliente Nº 4"
                  className="w-10 h-10 transition duration-200 hover:border-spacefy rounded-full border-2 border-[#101010]"
                />
              </Link>
            </div>

            <motion.div
              className="flex items-center mb-4 py-2 px-3 max-w-[160px] border border-[#222222] gap-1 bg-[#101010] rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <GiRoundStar className="text-spacefy" />
              <GiRoundStar className="text-spacefy" />
              <GiRoundStar className="text-spacefy" />
              <GiRoundStar className="text-spacefy" />
              <GiRoundStar className="text-spacefy" />
              <motion.span
                className="text-[#fff9] text-xs font-dmsans font-normal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.span animate={bounceAnimation}>
                  ({reviewCount})
                </motion.span>
              </motion.span>
            </motion.div>
          </div>

          <p className="font-poppins font-normal text-center sm:text-start text-sm leading-tight w-full max-w-lg text-[#A3A3A3] mb-4">
            Somos especialistas em design e desenvolvimento web, criando
            soluções únicas que impulsionam seu negócio e encantam seus
            clientes.
          </p>
        </motion.div>
      </section>

      <MoreSales />
      <AboutUs />
      <Features />
      <OurServices />
      <Projects />
      <Reviews />
      <ContactUs />
      <Footer />
    </main>
  );
}
