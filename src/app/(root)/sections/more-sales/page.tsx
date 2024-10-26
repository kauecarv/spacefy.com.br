"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const MoreSales = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.6,
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section className="bg-black py-16 mt-20 lg:mt-0 lg:top-[12vh] h-full w-full lg:min-h-screen lg:relative overflow-hidden flex items-center">
      <div className="container mx-auto px-4 relative lg:z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-white text-center text-3xl md:text-5xl lg:text-6xl font-poppins font-semibold leading-tight max-w-5xl mx-auto"
        >
          <motion.span variants={textVariants} className="inline-block">
            Aumente suas vendas em até <span className="text-[#4F46E5] font-bold text-7xl">60%</span> com um site impactante!
          </motion.span>
        </motion.div>
      </div>
      <motion.div 
        className="hidden lg:flex absolute inset-0 z-0 items-center justify-center"
        variants={fadeInVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="w-full h-full relative">
          <Image
            src="/assets/publicity/graphic-line.svg"
            alt="Linha gráfica"
            layout="fill"
            className="opacity-70"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default MoreSales;
