import { PiHandSwipeRightBold } from "react-icons/pi";
import { HiOutlineViewGrid } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDesignServices, MdOutlineSwitchAccessShortcutAdd } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { useInView } from "react-intersection-observer";
import { TbMessage2Star } from "react-icons/tb";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("sites");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
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
      y: 0
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: "easeOut"
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
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
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671b25477be2a508e0342e75_10c8b478-b389-48df-93cb-299dae72141d.jpeg",
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671182a4d5a2b01aafedd422_db783e89-af38-441c-a36c-7db2806f79f4.png"
    ]
  };

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
      className="bg-black w-full h-full flex flex-col py-16"
    >
      <div className="flex flex-col text-start mx-auto w-full max-w-6xl gap-8">
        <div className="flex flex-col gap-3 px-6">
        <motion.div 
          className="flex flex-col sm:flex-row justify-center sm:justify-start sm:space-x-4 space-y-4 sm:space-y-0 mb-6"
          variants={itemVariants}
        >
          <span className="inline-flex items-center bg-transparent bg-opacity-20 text-[#ccc] px-3 py-1 rounded-full text-sm font-medium font-dmsans">
            <TbMessage2Star className="mr-2 w-5 h-5 text-indigo-600" />
            <span className="text-md text-[#ccc] mr-1">127+</span> projetos entregues
          </span>
          <span className="inline-flex items-center bg-transparent bg-opacity-20 text-[#ccc] px-3 py-1 rounded-full text-sm font-medium font-dmsans">
            <MdOutlineSwitchAccessShortcutAdd className="mr-2 w-5 h-5 text-indigo-600" />
            <span className="text-md text-[#ccc] mr-1">119.4k</span> views geradas
          </span>
        </motion.div>
          
          <h2 className="text-white text-3xl md:text-5xl font-bold font-poppins text-center md:text-left">
            Impacto <span className="text-indigo-600">Real</span> com Resultados <span className="text-indigo-600">Visíveis.</span>
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between px-6 gap-6 md:gap-0">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center w-full md:w-auto bg-[#0A0A0A] rounded-xl overflow-hidden">
            <motion.button 
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setSelectedCategory("todos")}
              className={`text-[#ccc] w-full md:w-auto ${selectedCategory === "todos" ? "bg-indigo-600 text-white" : "hover:bg-indigo-600 hover:text-white"} duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center md:justify-start gap-2`}
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
              className={`text-[#ccc] w-full md:w-auto ${selectedCategory === "sites" ? "bg-indigo-600 text-white" : "hover:bg-indigo-600 hover:text-white"} duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center md:justify-start gap-2`}
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
                <MdOutlineDesignServices className="text-xl" />
              </motion.span>
              Modelos
            </motion.button>
          </div>

          <motion.button 
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="text-indigo-600 font-medium hover:text-white group transition-colors font-poppins flex items-center gap-2"
          >
            Ver mais
            <motion.span 
              className="text-lg"
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <PiHandSwipeRightBold/>
            </motion.span>
          </motion.button>
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
                <img 
                  src={image} 
                  alt={`Projeto ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div 
                      className="absolute inset-0 bg-black/60 flex items-center justify-center"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={overlayVariants}
                    >
                      <motion.button
                        className="bg-indigo-700 px-6 py-2.5 rounded-xl flex items-center gap-2 hover:bg-indigo-500 transition-colors text-white"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <CgArrowsExpandUpRight className="w-5 h-5" />
                        <span className="text-sm font-medium text-white font-dmsans">Ver projetos</span>
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Projects;
