"use client"

import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";
import { HiRocketLaunch } from "react-icons/hi2";

import { useInView } from "react-intersection-observer";

export default function AboutUs() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut"
      }
    }
  };

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

  return (
    <section ref={ref} className="bg-black py-4 px-6 lg:py-10 z-10"   id="about-us">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mx-auto justify-center flex flex-col lg:flex-row bg-white rounded-xl p-4 lg:p-10 w-full max-w-5xl"
      >
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-24 flex-grow text-black">
          <motion.h1 
            className="font-poppins text-3xl lg:text-5xl font-semibold leading-tight lg:leading-snug text-center lg:text-left"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3" >
              <motion.div
                className="text-3xl text-indigo-600"
              
                animate={{
                  y: [-2, -8, -2],
                  scale: [1, 1.1, 1],
                  rotate: [0, 15, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <motion.div
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.2, 0.8], 
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="absolute -bottom-1 -z-10 text-purple-500/50"
                >
                  <HiRocketLaunch />
                </motion.div>
                <HiRocketLaunch />
              </motion.div>
              <span>Experiência</span>
            </div>
            <span>Digital com<br/></span>
            <span className="text-indigo-600">Resultados.</span>
          </motion.h1>
          <div className="flex flex-col w-full space-y-6">
            <motion.p 
              className="font-dmsans text-md lg:text-md font-medium max-w-3xl text-black text-center lg:text-left"
              variants={itemVariants}
            >
              Na{" "}
              <span className="text-indigo-800 font-semibold text-base lg:text-lg">
                Spacefy
              </span>
              , nosso foco é criar sites que combinam tecnologia e design para
              gerar o{" "}
              <span className="text-indigo-800 font-semibold text-base lg:text-lg">
                máximo impacto
              </span>
              . Da primeira linha de código à última interação do usuário, cada
              detalhe é pensado para entregar experiências visuais incríveis que{" "}
              <span className="text-indigo-800 font-semibold text-base lg:text-lg">
                atraem, envolvem e transformam
              </span>{" "}
              a presença digital dos nossos clientes.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-6 w-full"
              variants={itemVariants}
            >
              {[
                { number: "45%", text: "aumento em leads" },
                { number: "99%", text: "feedback positivo" },
                { number: "97.4k", text: "visitas geradas" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center lg:items-start">
                  <h2 className="text-4xl lg:text-5xl font-black text-black font-poppins inline-flex items-center gap-1.5">
                    {item.number} <BsStars className="text-indigo-600 w-5 h-5 lg:w-6 lg:h-6" />
                  </h2>
                  <p className="text-poppins text-sm lg:text-xl font-semibold text-black text-center lg:text-left">
                    {item.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
