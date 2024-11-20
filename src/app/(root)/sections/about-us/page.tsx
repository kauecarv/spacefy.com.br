"use client"

import { motion, animate } from "framer-motion";
import { BsStars } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function AboutUs() {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 10
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const [hasAnimated, setHasAnimated] = useState(false);
  const [targetNumbers] = useState({
    leads: 45,
    feedback: 99,
    visits: 97.4
  });

  const [currentNumbers, setCurrentNumbers] = useState({
    leads: 0,
    feedback: 0,
    visits: 0
  });

  useEffect(() => {
    if (inView) {
      animate(0, targetNumbers.leads, {
        duration: 1.5,
        onUpdate: (value) => {
          setCurrentNumbers(prev => ({...prev, leads: Math.round(value)}));
        }
      });

      animate(0, targetNumbers.feedback, {
        duration: 1.5,
        onUpdate: (value) => {
          setCurrentNumbers(prev => ({...prev, feedback: Math.round(value)}));
        }
      });

      animate(0, targetNumbers.visits, {
        duration: 1.5,
        onUpdate: (value) => {
          setCurrentNumbers(prev => ({...prev, visits: Number(value.toFixed(1))}));
        }
      });
    }
  }, [inView, targetNumbers]);

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
            Experiência
            <br />
            Digital com
            <br />
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
                { number: currentNumbers.leads + "%", text: "aumento em leads" },
                { number: currentNumbers.feedback + "%", text: "feedback positivo" },
                { number: currentNumbers.visits + "k", text: "visitas geradas" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center lg:items-start">
                  <h2 className="text-4xl lg:text-5xl font-black text-black font-poppins inline-flex items-center gap-1.5">
                    {item.number} <BsStars className="text-indigo-600 w-5 h-5 lg:w-6 lg:h-6" />
                  </h2>
                  <p className="font-poppins text-sm lg:text-lg font-semibold text-black text-center lg:text-left">
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