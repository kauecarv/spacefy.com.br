"use client"

import { HiOutlineViewGrid } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDesignServices } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { GoProject } from "react-icons/go";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Projetos = () => {
  const [selectedCategory, setSelectedCategory] = useState("sites");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: "easeOut",
        duration: 0.4
      }
    }
  };

  const overlayVariants = {
    hidden: {
      opacity: 0,
      y: 10
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const projects = {
    todos: [
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671b25477be2a508e0342e75_10c8b478-b389-48df-93cb-299dae72141d.jpeg",
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/67105ab6140b33f063f0aa7b_9ac3e592-c478-4029-a2d2-e6323699f465.jpeg", 
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671182a4d5a2b01aafedd422_db783e89-af38-441c-a36c-7db2806f79f4.png",
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671b29f6647cdaef47831669_e4402a7b-439b-410e-97ea-e03c575cf351.png"
    ],
    sites: [
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671182a4d5a2b01aafedd422_db783e89-af38-441c-a36c-7db2806f79f4.png",
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/67105ab6140b33f063f0aa7b_9ac3e592-c478-4029-a2d2-e6323699f465.jpeg",
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671b25477be2a508e0342e75_10c8b478-b389-48df-93cb-299dae72141d.jpeg",
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671b29f6647cdaef47831669_e4402a7b-439b-410e-97ea-e03c575cf351.png"
    ],
    sistemas: [
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671b25477be2a508e0342e75_10c8b478-b389-48df-93cb-299dae72141d.jpeg",
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/67105ab6140b33f063f0aa7b_9ac3e592-c478-4029-a2d2-e6323699f465.jpeg", 
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671182a4d5a2b01aafedd422_db783e89-af38-441c-a36c-7db2806f79f4.png",
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671b29f6647cdaef47831669_e4402a7b-439b-410e-97ea-e03c575cf351.png"
    ],
    modelos: [
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671b29f6647cdaef47831669_e4402a7b-439b-410e-97ea-e03c575cf351.png",
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/67105ab6140b33f063f0aa7b_9ac3e592-c478-4029-a2d2-e6323699f465.jpeg",
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671182a4d5a2b01aafedd422_db783e89-af38-441c-a36c-7db2806f79f4.png",
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671b25477be2a508e0342e75_10c8b478-b389-48df-93cb-299dae72141d.jpeg",
    ]
  };

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="exit"
      variants={sectionVariants}
      className="bg-black w-full h-full flex flex-col py-16"
    >
      <div className="flex flex-col text-start mx-auto w-full max-w-7xl gap-8">
        <div className="flex flex-col gap-3 px-6">
        <motion.div 
          className="flex flex-col sm:flex-row justify-center sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0 mb-6"
          variants={itemVariants}
        >
          <span className="inline-flex items-center justify-center bg-transparent bg-opacity-20 text-[#ccc] px-3 py-2 sm:py-1 rounded-full text-xs sm:text-sm font-medium font-dmsans w-full sm:w-auto">
            <GoProject className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
            <span className="text-sm sm:text-md text-[#ccc] mr-1">127+</span> projetos entregues
          </span>
          <span className="inline-flex items-center justify-center bg-transparent bg-opacity-20 text-[#ccc] px-3 py-2 sm:py-1 rounded-full text-xs sm:text-sm font-medium font-dmsans w-full sm:w-auto">
            <AiOutlineCheckCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
            <span className="text-sm sm:text-md text-[#ccc] mr-1">98%</span> taxa de aprovação
          </span>
        </motion.div>
          
          <h2 className="text-white text-3xl md:text-7xl max-w-5xl mx-auto text-center font-bold font-poppins text-center">
            Excelência em <span className="text-indigo-600">Projetos</span> e Qualidade em{" "}<span className="text-indigo-600">Soluções.</span>
          </h2>
        </div>
        
        <div className="flex justify-center px-6">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center bg-[#0A0A0A] rounded-xl overflow-hidden">
            <motion.button 
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setSelectedCategory("todos")}
              className={`text-[#ccc] w-full md:w-auto ${selectedCategory === "todos" ? "bg-indigo-600 text-white" : "hover:bg-indigo-600 hover:text-white"} duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center gap-2`}
            >
              <motion.span variants={iconVariants}>
                <HiOutlineViewGrid className="text-xl" />
              </motion.span>
              Todos
            </motion.button>
            <motion.button 
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setSelectedCategory("sites")}
              className={`text-[#ccc] w-full md:w-auto ${selectedCategory === "sites" ? "bg-indigo-600 text-white" : "hover:bg-indigo-600 hover:text-white"} duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center gap-2`}
            >
              <motion.span variants={iconVariants}>
                <CgWebsite className="text-xl" />
              </motion.span>
              Sites
            </motion.button>
            <motion.button 
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setSelectedCategory("sistemas")}
              className={`text-[#ccc] w-full md:w-auto ${selectedCategory === "sistemas" ? "bg-indigo-600 text-white" : "hover:bg-indigo-600 hover:text-white"} duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center gap-2`}
            >
              <motion.span variants={iconVariants}>
                <MdOutlineDesignServices className="text-xl" />
              </motion.span>
              Sistemas
            </motion.button>
            <motion.button 
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setSelectedCategory("modelos")}
              className={`text-[#ccc] w-full md:w-auto ${selectedCategory === "modelos" ? "bg-indigo-600 text-white" : "hover:bg-indigo-600 hover:text-white"} duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center gap-2`}
            >
              <motion.span variants={iconVariants}>
                <MdOutlineDesignServices className="text-xl" />
              </motion.span>
              Modelos
            </motion.button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-12 gap-6 px-6"
          >
            {projects[selectedCategory as keyof typeof projects].map((image: string, index: number) => (
              <motion.div
                key={index}
                variants={projectVariants}
                className={`relative rounded-lg overflow-hidden cursor-pointer ${
                  index <= 1 ? (
                    index === 0 ? 'md:col-span-7 h-[300px]' : 'md:col-span-5 h-[300px]'
                  ) : 
                  index === 2 ? 'md:col-span-4 h-[300px]' : 'md:col-span-8 h-[300px]'
                }`}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.02 }}
              >
                <Image 
                  src={image} 
                  alt={`Projeto ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500"
                  priority={index === 0}
                  quality={90}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Projetos;
