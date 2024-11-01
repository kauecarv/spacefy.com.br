"use client"

import { motion, AnimatePresence } from "framer-motion";
import { PiStarFourFill } from "react-icons/pi";
import { IoMdHelp } from "react-icons/io";
import { RiCodeLine, RiGlobalLine } from "react-icons/ri";
import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbHandClick, TbMessage2Star } from "react-icons/tb";
import { useState } from "react";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { MdOutlineSwitchAccessShortcutAdd } from "react-icons/md";
import { HiOutlineViewGrid } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { BsMouseFill } from "react-icons/bs";

const STAR_POSITIONS = [
  { x: "10%", y: "10%" },
  { x: "20%", y: "15%" },
  { x: "30%", y: "5%" },
  { x: "40%", y: "20%" },
  { x: "50%", y: "10%" },
  { x: "60%", y: "30%" },
  { x: "70%", y: "25%" },
  { x: "80%", y: "35%" },
  { x: "90%", y: "30%" },
  { x: "15%", y: "40%" },
  { x: "25%", y: "50%" },
  { x: "35%", y: "45%" },
  { x: "45%", y: "55%" },
  { x: "55%", y: "50%" },
  { x: "65%", y: "60%" },
  { x: "75%", y: "65%" },
  { x: "85%", y: "70%" },
  { x: "95%", y: "75%" },
  { x: "40%", y: "80%" },
  { x: "60%", y: "85%" }
];

const Planejamento = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    modelos: [
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671b29f6647cdaef47831669_e4402a7b-439b-410e-97ea-e03c575cf351.png", 
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/67105ab6140b33f063f0aa7b_9ac3e592-c478-4029-a2d2-e6323699f465.jpeg",
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671182a4d5a2b01aafedd422_db783e89-af38-441c-a36c-7db2806f79f4.png",
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671b25477be2a508e0342e75_10c8b478-b389-48df-93cb-299dae72141d.jpeg"
    ]
  };

  return (
    <section className="relative flex flex-col w-full min-h-screen">
      {STAR_POSITIONS.map((pos, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: pos.x, top: pos.y }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.8, 0],
            x: [0, Math.random() * 20 - 10, 0],
            y: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        >
          <PiStarFourFill className="text-spacefy w-2 h-2 opacity-70" />
        </motion.div>
      ))}

      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-poppins uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-b from-transparent to-[#4F46E8] text-[90px] sm:text-[110px] md:text-[300px] lg:text-[316px] leading-[0.9] whitespace-nowrap">
          SPACEFY
        </p>
      </motion.div>

      <div className="flex flex-col items-center mt-[-10px] sm:mt-[-20px] md:mt-[-40px] lg:mt-[-140px] py-4 px-4 z-10">
        <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-8xl text-white font-semibold text-center max-w-6xl">
          Transforme suas <span className="text-indigo-600">Ideias</span> em <span className="text-indigo-600">Realidade Digital</span>
        </h1>
        <p className="text-center text-md z-50 font-dmsans text-[#A3A3A3] max-w-4xl font-normal mb-4">
          Está pronto para ter um site que vai <span className="text-spacefy font-semibold text-lg">aumentar suas vendas</span> e acessos de forma impactante? Preencha este formulário e acelere o <span className="text-spacefy font-semibold text-lg">processo de transformar</span> suas ideias em resultados!
        </p>

        <h1 className="font-semibold font-poppins text-2xl text-white mx-auto inline-flex items-center text-center">
          Qual a sua necessidade <IoMdHelp className="text-spacefy text-3xl -mt-1"/>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-8 px-4">
          {[
            {
              href: "/ui-ux",
              icon: <LuLayoutDashboard />,
              title: "UI/UX",
              subtitle: "(Modelos)"
            },
            {
              href: "/prototipos",
              icon: <TbHandClick />,
              title: "Protótipos",
              subtitle: "Modelos Interativos"
            },
            {
              href: "/sites",
              icon: <BsMouseFill />,

              title: "Sites",
              subtitle: "Desenvolvimento Web"
            },
            {
              href: "/sistemas",
              icon: <LiaNetworkWiredSolid />,

              title: "Sistemas",
              subtitle: "Soluções Personalizadas"
            }
          ].map((item, index) => (
            <Link href={item.href} key={index}>
              <motion.div 
                className="group cursor-pointer border border-[#151516] bg-gradient-to-b from-[#040404] via-[#050505] to-[#070707] rounded-xl p-8 flex flex-col items-center justify-center hover:border-[#4F46E8] transition-all duration-200 min-h-[300px] relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                layout
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-[#05031F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  layout
                />
                <motion.div 
                  className="text-spacefy text-7xl mb-8 relative z-10 group-hover:scale-110 transition-transform duration-200"
                  layout
                >
                  {item.icon}
                </motion.div>
                <h3 
                  className="font-poppins text-white text-2xl font-semibold mb-3 relative z-10 group-hover:text-spacefy transition-colors duration-200"
                >
                  {item.title}
                </h3>
                <p 
                  className="font-poppins text-spacefy text-sm font-medium text-center relative z-10"
                >
                  {item.subtitle}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="w-full max-w-6xl mt-16">
          <div className="flex flex-col gap-3 px-6 mb-8">
            <motion.div 
              className="flex flex-col sm:flex-row justify-start sm:space-x-4 space-y-4 sm:space-y-0 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center justify-start bg-transparent bg-opacity-20 text-[#ccc] px-3 py-2 sm:py-1 rounded-full text-xs sm:text-sm font-medium font-dmsans">
                <TbMessage2Star className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                <span className="text-sm sm:text-md text-[#ccc] mr-1">127+</span> projetos entregues
              </span>
              <span className="inline-flex items-center justify-start bg-transparent bg-opacity-20 text-[#ccc] px-3 py-2 sm:py-1 rounded-full text-xs sm:text-sm font-medium font-dmsans">
                <MdOutlineSwitchAccessShortcutAdd className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                <span className="text-sm sm:text-md text-[#ccc] mr-1">119.4k</span> views geradas
              </span>
            </motion.div>
            
            <h2 className="text-white text-3xl md:text-5xl font-bold font-poppins text-left mb-8">
              Explore Nosso <span className="text-indigo-600">Universo</span> de <span className="text-indigo-600">Criações</span>
            </h2>

            <div className="flex items-start justify-start w-full max-w-sm bg-[#0A0A0A] rounded-xl overflow-hidden mb-8">
              <motion.button 
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setSelectedCategory("todos")}
                className={`text-[#ccc] ${selectedCategory === "todos" ? "bg-indigo-600 text-white" : "hover:bg-indigo-600 hover:text-white"} duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-start gap-2`}
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
                className={`text-[#ccc] ${selectedCategory === "sites" ? "bg-indigo-600 text-white" : "hover:bg-indigo-600 hover:text-white"} duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-start gap-2`}
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
                onClick={() => setSelectedCategory("modelos")}
                className={`text-[#ccc] w-full md:w-auto ${selectedCategory === "modelos" ? "bg-indigo-600 text-white" : "hover:bg-indigo-600 hover:text-white"} duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center md:justify-start gap-2`}
              >
                <motion.span variants={iconVariants}>
                  <CgWebsite className="text-xl" />
                </motion.span>
                Modelos
              </motion.button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 "
              >
                {projects[selectedCategory as keyof typeof projects].map((image: string, index: number) => (
                  <motion.div
                    key={index}
                    className={`relative rounded-lg overflow-hidden cursor-pointer ${
                      index <= 1 ? (
                        index === 0 ? 'md:col-span-7 h-[300px]' : 'md:col-span-5 h-[300px]'
                      ) : 
                      index === 2 ? 'md:col-span-4 h-[300px]' : 'md:col-span-8 h-[300px]'
                    }`}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    whileHover={{ scale: 1.02 }}
                    layout
                  >
                    <img 
                      src={image} 
                      alt={`Projeto ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div 
                          className="absolute inset-0 bg-black/60 flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.button
                            className="bg-indigo-700 px-6 py-2.5 rounded-xl flex items-center gap-2 hover:bg-indigo-500 transition-colors text-white"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <CgArrowsExpandUpRight className="w-5 h-5" />
                            <span className="text-sm font-medium text-white font-dmsans">Ver projeto</span>
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planejamento;
