"use client"

import { motion } from "framer-motion";
import { PiStarFourFill } from "react-icons/pi";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { RiUserSmileLine, RiPhoneLine, RiMailSendLine } from "react-icons/ri";

const STAR_POSITIONS = Array.from({ length: 20 }, (_, i) => ({
  x: `${10 + (i % 10) * 10}%`,
  y: `${5 + Math.floor(i / 10) * 20}%`
}));

const Modelos = () => {
  const pageVariants = {
    initial: {
      x: "100%",
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    initial: { 
      x: 50,
      opacity: 0 
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 80
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  const inputVariants = {
    initial: { 
      x: 30,
      opacity: 0 
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="relative flex flex-col w-full min-h-screen pt-10"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
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
        variants={childVariants}
      >
        <p className="font-poppins uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-b from-transparent via-[#4F46E8]/70 to-[#4F46E8] text-[90px] sm:text-[110px] md:text-[300px] lg:text-[316px] leading-[0.9] whitespace-nowrap">
          SPACEFY
        </p>
      </motion.div>

      <div className="flex flex-col items-center px-4 py-8 z-10 -mt-28">
        <motion.div
          variants={childVariants}
          className="relative"
        >
          <h2 className="font-poppins uppercase font-bold text-[#1A1A1C]/10 text-[100px] sm:text-[130px] md:text-[160px] lg:text-[200px] leading-[0.9] mb-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            SPACEFY
          </h2>
          
          <div className="relative z-10">
            <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-bold text-center mb-4 max-w-5xl leading-tight">
              Pronto para Revolucionar sua <span className="text-spacefy">Presença Digital?</span>
            </h1>
          </div>
        </motion.div>

        <motion.p
          variants={childVariants}
          className="text-center text-md font-dmsans text-[#A3A3A3] max-w-xl mb-10"
        >
          Transforme seu negócio com um site profissional que <span className="text-spacefy text-[16px] font-semibold">converte visitantes em clientes</span>. Comece agora!
        </motion.p>

        <div className="w-full max-w-xl space-y-6">
          <div className="space-y-4">
            {[
              { Icon: RiUserSmileLine, placeholder: "Insira seu nome ou da empresa", type: "text" },
              { Icon: RiPhoneLine, placeholder: "Qual seu telefone para contato?", type: "tel" },
              { Icon: RiMailSendLine, placeholder: "Insira seu e-mail corporativo", type: "email" }
            ].map((field, index) => (
              <motion.div
                key={index}
                variants={inputVariants}
                className="relative group"
              >
                <field.Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl transition-colors duration-300 group-hover:text-spacefy group-focus-within:text-spacefy z-10" />
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#0A0A0B]/80 backdrop-blur-sm
                    border-2 border-[#151516] text-white placeholder-gray-500
                    transition-all duration-300 ease-out
                    font-dmsans text-sm
                    focus:outline-none focus:ring-0 focus:ring-offset-0
                    focus:border-spacefy focus:bg-[#0D0D0E]
                    focus:shadow-[0_0_20px_rgba(79,70,232,0.15)]
                    hover:border-spacefy/50 hover:bg-[#0C0C0D]
                    disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-spacefy/0 via-spacefy/5 to-spacefy/0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 pt-2">
            {[
              { 
                text: "Voltar",
                icon: BsArrowLeftShort,
                className: "bg-[#0A0A0B]/90 backdrop-blur-sm border-2 border-[#151516] hover:border-spacefy/50 hover:bg-[#0D0D0E] hover:shadow-[0_0_20px_rgba(79,70,232,0.15)] hover:-translate-y-1"
              },
              { 
                text: "Avançar",
                icon: BsArrowRightShort,
                className: "bg-spacefy hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(79,70,232,0.25)] hover:-translate-y-1"
              }
            ].map((button, index) => (
              <motion.button
                key={index}
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className={`flex-1 px-8 py-4 rounded-xl text-white font-poppins flex items-center justify-center gap-2 text-sm transition-all duration-300 ${button.className}`}
              >
                {index === 0 && <button.icon className="text-2xl" />}
                <span className="font-medium tracking-wide">{button.text}</span>
                {index === 1 && <button.icon className="text-2xl" />}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Modelos;