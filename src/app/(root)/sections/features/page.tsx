"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { TbSquareRoundedPercentage } from "react-icons/tb";
import { FaHeadphonesSimple } from "react-icons/fa6";

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const [activeShakeIndex, setActiveShakeIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const featureCards = [
    "Segurança",
    "Desempenho Rápido", 
    "Compatibilidade",
    "Manutenção",
    "Hospedagem Gratuita",
    "Aparecer no Google",
    "Interface Atraente"
  ];

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setActiveShakeIndex((prevIndex) => 
          prevIndex === featureCards.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [inView]);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 767);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="flex flex-col sm:flex-row justify-center sm:justify-start sm:space-x-4 space-y-4 sm:space-y-0 mb-6"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="inline-flex items-center justify-center sm:justify-start bg-transparent bg-opacity-20 text-[#ccc] px-3 py-1 rounded-full text-sm font-medium font-dmsans">
            <TbSquareRoundedPercentage className="mr-2 w-5 h-5 text-indigo-600" />
            <span className="text-md text-[#ccc] mr-1">98%</span> de
            satisfação
          </span>
          <span className="inline-flex items-center justify-center sm:justify-start bg-transparent bg-opacity-20 text-[#ccc] px-3 py-1 rounded-full text-sm font-medium font-dmsans">
            <FaHeadphonesSimple className="mr-2 w-5 h-5 text-indigo-600" />
            <span className="text-md text-[#ccc] mr-1">500+</span> clientes
            atendidos
          </span>
        </motion.div>

        <motion.h2
          className="text-center text-3xl md:text-5xl max-w-2xl mx-auto font-poppins font-semibold mb-8 md:mb-12"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Soluções que{" "}
          <span className="text-indigo-600">
            Elevam <span className="text-white">suas</span> Visitas
          </span>{" "}
          em <span className="text-indigo-600">Até 62%. </span>
        </motion.h2>

        {isMobile ? (
          <motion.div
            className="grid grid-cols-1 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <FeatureCard
              title="Segurança"
              description="Garantimos a segurança do seu site com as mais recentes tecnologias de proteção."
              position="top"
              isShaking={activeShakeIndex === 0}
            />
            <FeatureCard
              title="Desempenho Rápido"
              description="Otimizamos seu site para carregar rapidamente, melhorando a experiência do usuário."
              position="top"
              isShaking={activeShakeIndex === 1}
            />
            <FeatureCard
              title="Compatibilidade"
              description="Seu site funcionará perfeitamente em todos os dispositivos e navegadores."
              position="top"
              isShaking={activeShakeIndex === 2}
            />
            <FeatureCard
              title="Manutenção"
              description="Oferecemos suporte contínuo para manter seu site atualizado e funcionando sem problemas."
              position="top"
              isShaking={activeShakeIndex === 3}
            />
            <FeatureCard
              title="Hospedagem Gratuita"
              description="Economize com nossa hospedagem gratuita de alta qualidade."
              icon={
                <img
                  src="https://framerusercontent.com/images/X9rSPrFBr6Qh4qsMnmARaX1VN3Q.png?scale-down-to=512"
                  alt="Ícone"
                  className="w-4 h-4"
                />
              }
              position="top"
              isShaking={activeShakeIndex === 4}
            />
            <FeatureCard
              title="Aparecer no Google"
              description="Otimizamos seu site para os mecanismos de busca, aumentando sua visibilidade online."
              icon={
                <img
                  src="https://framerusercontent.com/images/X9rSPrFBr6Qh4qsMnmARaX1VN3Q.png?scale-down-to=512"
                  alt="Ícone"
                  className="w-4 h-4"
                />
              }
              position="top"
              isShaking={activeShakeIndex === 5}
            />
            <FeatureCard
              title="Interface Atraente"
              description="Criamos designs modernos e atraentes que cativam seus visitantes."
              icon={
                <img
                  src="https://framerusercontent.com/images/X9rSPrFBr6Qh4qsMnmARaX1VN3Q.png?scale-down-to=512"
                  alt="Ícone"
                  className="w-4 h-4"
                />
              }
              position="top"
              isShaking={activeShakeIndex === 6}
            />
          </motion.div>
        ) : (
          <motion.div
            className="relative h-[300px]"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <FeatureCard
              title="Segurança"
              className="absolute top-0 left-0"
              description="Garantimos a segurança do seu site com as mais recentes tecnologias de proteção."
              position="top"
              isShaking={activeShakeIndex === 0}
            />
            <FeatureCard
              title="Desempenho Rápido"
              className="absolute top-0 left-[35%] transform -translate-x-1/2"
              description="Otimizamos seu site para carregar rapidamente, melhorando a experiência do usuário."
              position="top"
              isShaking={activeShakeIndex === 1}
            />
            <FeatureCard
              title="Compatibilidade"
              className="absolute top-0 right-0"
              description="Seu site funcionará perfeitamente em todos os dispositivos e navegadores."
              position="top"
              isShaking={activeShakeIndex === 2}
            />
            <FeatureCard
              title="Manutenção"
              className="absolute top-1/3 right-[70%] transform -translate-y-1/2 -translate-x-1/2"
              description="Oferecemos suporte contínuo para manter seu site atualizado e funcionando sem problemas."
              position="top"
              isShaking={activeShakeIndex === 3}
            />
            <FeatureCard
              title="Hospedagem Gratuita"
              className="absolute top-1/3 left-[60%] transform -translate-y-1/2 translate-x-1/2"
              description="Economize com nossa hospedagem gratuita de alta qualidade."
              icon={
                <img
                  src="https://framerusercontent.com/images/X9rSPrFBr6Qh4qsMnmARaX1VN3Q.png?scale-down-to=512"
                  alt="Ícone"
                  className="w-4 h-4"
                />
              }
              position="top"
              isShaking={activeShakeIndex === 4}
            />
            <FeatureCard
              title="Aparecer no Google"
              className="absolute bottom-16 right-[10%] transform -translate-x-1/2"
              description="Otimizamos seu site para os mecanismos de busca, aumentando sua visibilidade online."
              icon={
                <img
                  src="https://framerusercontent.com/images/X9rSPrFBr6Qh4qsMnmARaX1VN3Q.png?scale-down-to=512"
                  alt="Ícone"
                  className="w-4 h-4"
                />
              }
              position="top"
              isShaking={activeShakeIndex === 5}
            />
            <FeatureCard
              title="Interface Atraente"
              className="absolute bottom-16 right-[60%] transform translate-x-1/2"
              description="Criamos designs modernos e atraentes que cativam seus visitantes."
              icon={
                <img
                  src="https://framerusercontent.com/images/X9rSPrFBr6Qh4qsMnmARaX1VN3Q.png?scale-down-to=512"
                  alt="Ícone"
                  className="w-4 h-4"
                />
              }
              position="top"
              isShaking={activeShakeIndex === 6}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

const FeatureCard = ({
  title,
  className,
  icon,
  description,
  isShaking,
}: {
  title: string;
  className?: string;
  icon?: React.ReactNode;
  description: string;
  isShaking?: boolean;
  position: "top";
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const shakeAnimation = {
    rotate: [0, -2, 2, -2, 0],
    transition: {
      duration: 0.5,
      repeat: 2,
      ease: "easeInOut",
    },
  };

  const getTooltipClass = () => {
    return "left-1/2 bottom-full mb-2 transform -translate-x-1/2";
  };

  return (
    <motion.div
      id={title}
      className={`bg-[#121212] p-[8px] px-4 rounded-lg inline-flex items-center justify-center cursor-pointer ${
        className || ""
      }`}
      variants={{
        hidden: { opacity: 0, scale: 1 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        },
      }}
      initial={{ scale: 1 }}
      whileHover={{
        backgroundColor: "#4F46E5",
        scale: 1.02,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
      animate={isShaking ? shakeAnimation : { scale: 1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <h3 className="text-md font-poppins font-medium">{title}</h3>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={`absolute ${getTooltipClass()} bg-[#121212] text-white p-3.5 rounded-md shadow-lg w-64 z-50`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-md font-normal font-dmsans text-[#ccc] leading-relaxed">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Features;
