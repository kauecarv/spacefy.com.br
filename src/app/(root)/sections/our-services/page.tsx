"use client"
import { FiSmile } from "react-icons/fi";
import { useState } from "react";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { RiTimerLine } from "react-icons/ri";
import { TbEyeShare } from "react-icons/tb";
import Image from "next/image";
import { useRef } from "react";

const OurServices = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
        delayChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3, // Reduzido de 0.5 para 0.3
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      number: "01",
      title: "Sites",
      description: "Criamos sites personalizados e responsivos que refletem a identidade da sua marca e oferecem uma experiência excepcional ao usuário.",
      image: "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671b25477be2a508e0342e75_10c8b478-b389-48df-93cb-299dae72141d.jpeg",
      time: "34 dias",
      client: "Andrea Montini", 
      views: "27.2K+"
    },
    {
      number: "02",
      title: "Sistemas",
      description: "Desenvolvemos sistemas robustos e escaláveis para otimizar seus processos de negócio e aumentar a eficiência operacional.",
      image: "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671b25477be2a508e0342e75_10c8b478-b389-48df-93cb-299dae72141d.jpeg",
      time: "60 dias",
      client: "TechCorp Ltda.",
      views: "15.8K+"
    },
    {
      number: "03", 
      title: "Modelos Estáticos",
      description: "Oferecemos modelos estáticos elegantes e de alto desempenho, perfeitos para apresentar informações de forma clara e eficaz.",
      image: "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671b25477be2a508e0342e75_10c8b478-b389-48df-93cb-299dae72141d.jpeg",
      time: "21 dias",
      client: "Design Studio",
      views: "42.5K+"
    },
    {
      number: "04",
      title: "Modelos Interativos",
      description: "Nossos modelos interativos proporcionam uma experiência envolvente e dinâmica, permitindo que seus usuários interajam de forma intuitiva com seu conteúdo.",
      image: "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671b25477be2a508e0342e75_10c8b478-b389-48df-93cb-299dae72141d.jpeg",
      time: "45 dias",
      client: "Interativa S.A.",
      views: "38.9K+"
    },
  ];

  return (
    <section ref={ref} className="w-full h-full bg-black flex flex-col py-24 px-4 sm:px-0">
      <motion.div 
        className="flex flex-col justify-center mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="flex justify-center mb-6"
          variants={itemVariants}
        >
          <span className="inline-flex items-center bg-transparent bg-opacity-20 text-[#ccc] px-3 py-1 rounded-full text-sm font-medium font-dmsans">
            <FiSmile className="mr-2 w-6 h-6 text-indigo-600" />
            <span className="text-md mr-1">4.9</span> avaliação em média
          </span>
        </motion.div>

        <motion.h2 
          className="text-center text-white text-3xl sm:text-5xl font-poppins font-bold mb-4 sm:mb-8"
          variants={itemVariants}
        >
          Estratégia, Design <span className="text-indigo-600">&</span> Perfomance.
        </motion.h2>

        <motion.p 
          className="text-[#ccc] text-md max-w-2xl mx-auto mb-8 sm:mb-16 font-dmsans font-normal leading-relaxed"
          variants={itemVariants}
        >
          Nossos serviços impulsionam seu negócio. Clientes relatam um aumento médio de <span className="text-indigo-600">300% nas taxas de conversão</span> após implementar nossas soluções personalizadas.
        </motion.p>
        
        <motion.div 
          className="flex flex-col justify-center w-full mx-auto space-y-4 rounded-xl"
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={itemVariants}
            >
              <ServiceItem 
                {...service}
                isExpanded={expandedService === service.number}
                onToggle={() => setExpandedService(expandedService === service.number ? null : service.number)}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

const ServiceItem = ({ number, title, description, image, time, client, views, isExpanded, onToggle }: { 
  number: string; 
  title: string; 
  description: string; 
  image: string;
  time: string;
  client: string;
  views: string;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div 
      className={`group flex flex-col w-full sm:w-screen sm:max-w-4xl rounded-xl px-4 sm:px-8 py-4 sm:py-6 transition-all duration-500 border bg-[#111111] border-[#181818] ${isExpanded ? '' : 'hover:bg-indigo-600'}`}
      layout
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ scale: isExpanded ? 1 : 1.02 }}
    >
      <div className="flex justify-between items-center w-full cursor-pointer" onClick={onToggle}>
        <div className="flex items-center w-full">
          <motion.span 
            className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full inline-flex items-center justify-center mr-3 sm:mr-6 transition-all duration-500 bg-[#080808] border border-[#242424] ${isExpanded ? 'group-hover:bg-[#111111] group-hover:border-[#242424]' : 'group-hover:bg-indigo-700 group-hover:border-indigo-500'}`}
            whileHover={{ scale: 1.1 }}
          >
            <span className={`text-sm sm:text-xl font-semibold font-poppins transition-all duration-500 text-indigo-600 ${isExpanded ? 'group-hover:text-indigo-600' : 'group-hover:text-white'}`}>{number}</span>
          </motion.span>
          <h2 className={`text-white text-2xl sm:text-4xl font-semibold font-poppins ${isExpanded ? '' : ''}`}>{title}</h2>
        </div>
        <motion.div 
          className={`rounded-xl p-2 sm:p-3 transition-all duration-500 ${isExpanded ? 'bg-indigo-600 text-white' : 'bg-[#181818] text-[#CCC] group-hover:bg-indigo-500 group-hover:text-white'}`}
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ scale: 1.1 }}
        >
          <CgArrowsExpandUpRight size={20} className="sm:hidden" />
          <CgArrowsExpandUpRight size={28} className="hidden sm:block" />
        </motion.div>
      </div>
      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-4 overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
              <div className="flex-1 w-full">
                <motion.p 
                  className="text-[#ccc] text-sm sm:text-md max-w-2xl ml-4 mb-4 font-dmsans font-normal leading-relaxed text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {description}
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <motion.div 
                    className="aspect-w-16 aspect-h-9 relative w-full sm:w-3/4 h-[200px] sm:h-[340px]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <Image 
                      src={image}
                      alt={title} 
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </motion.div>
                  <motion.div 
                    className="flex flex-row sm:flex-col justify-between w-full sm:w-1/4 space-y-0 sm:space-y-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <InfoCard icon={<RiTimerLine />} title="Tempo" value={time} />
                    <InfoCard icon={<MdOutlineEmojiPeople />} title="Cliente" value={client} />
                    <InfoCard icon={<TbEyeShare />} title="Visitas" value={views} />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const InfoCard = ({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) => (
  <motion.div 
    className="flex flex-col items-center gap-1 rounded-lg p-2 sm:p-2"
    whileHover={{ scale: 1.05 }}
  >
    <span className="text-xl sm:text-2xl text-white mb-1 sm:mb-2">{icon}</span>
    <p className="text-white text-xs sm:text-sm font-medium font-poppins">{value}</p>
    <p className="text-[#999] text-xs sm:text-sm font-medium font-dmsans">{title}</p>
  </motion.div>
);

export default OurServices;