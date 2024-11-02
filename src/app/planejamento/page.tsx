"use client"

import { motion, AnimatePresence } from "framer-motion";
import { PiStarFourFill } from "react-icons/pi";
import { IoMdHelp, IoMdClose } from "react-icons/io";
import Link from "next/link";

import { LuLayoutDashboard } from "react-icons/lu";
import { TbHandClick, TbMessage2Star, TbPencilPlus, TbUserCircle, TbDeviceMobile, TbClick, TbTestPipe, TbArrowsExchange, TbFileExport, TbDeviceAnalytics, TbBrandSpeedtest, TbLock, TbEdit, TbUsers, TbCloud, TbDeviceDesktop } from "react-icons/tb";
import {  CgWebsite } from "react-icons/cg";
import { MdOutlineSwitchAccessShortcutAdd, MdOutlineDesignServices } from "react-icons/md";
import { HiOutlineViewGrid } from "react-icons/hi";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { BsMouseFill, BsStarFill } from "react-icons/bs";
import { useEffect, useState } from "react";

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

const categoryDetails = {
  "UI/UX": {
    image: "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671182a4d5a2b01aafedd422_db783e89-af38-441c-a36c-7db2806f79f4.png",
    title: "Design de Interface e Experiência",
    rating: 4.9,
    reviews: 127,
    description: "Criamos interfaces intuitivas e experiências memoráveis que encantam seus usuários. Nossa abordagem combina estética moderna com funcionalidade excepcional.",
    features: [
      {
        icon: <TbPencilPlus className="w-5 h-5" />,
        title: "Wireframes & Mockups",
        description: "Criação de layouts e estruturas visuais detalhadas"
      },
      {
        icon: <TbUserCircle className="w-5 h-5" />,
        title: "Pesquisa de Usuário",
        description: "Análise do comportamento e necessidades do público"
      },
      {
        icon: <MdOutlineDesignServices className="w-5 h-5" />,
        title: "Design System",
        description: "Biblioteca de componentes e guia de estilos"
      },
      {
        icon: <TbDeviceMobile className="w-5 h-5" />,
        title: "Design Responsivo",
        description: "Interface adaptável a todos dispositivos"
      }
    ]
  },
  "Protótipos": {
    image: "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/67105ab6140b33f063f0aa7b_9ac3e592-c478-4029-a2d2-e6323699f465.jpeg",
    title: "Protótipos Interativos",
    rating: 4.8,
    reviews: 98,
    description: "Transformamos conceitos em protótipos funcionais que permitem visualizar e testar seu produto antes do desenvolvimento final.",
    features: [
      {
        icon: <TbClick className="w-5 h-5" />,
        title: "Protótipo Interativo",
        description: "Simulação real da experiência do usuário"
      },
      {
        icon: <TbTestPipe className="w-5 h-5" />,
        title: "Testes A/B",
        description: "Validação de diferentes versões do projeto"
      },
      {
        icon: <TbArrowsExchange className="w-5 h-5" />,
        title: "Fluxos de Navegação",
        description: "Mapeamento completo da jornada do usuário"
      },
      {
        icon: <TbFileExport className="w-5 h-5" />,
        title: "Exportação para Dev",
        description: "Arquivos prontos para desenvolvimento"
      }
    ]
  },
  "Sites": {
    image: "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671b25477be2a508e0342e75_10c8b478-b389-48df-93cb-299dae72141d.jpeg",
    title: "Desenvolvimento Web Profissional",
    rating: 4.9,
    reviews: 156,
    description: "Desenvolvemos sites modernos, responsivos e otimizados para performance que destacam sua marca na internet.",
    features: [
      {
        icon: <TbDeviceAnalytics className="w-5 h-5" />,
        title: "SEO Otimizado",
        description: "Estruturação para melhor ranqueamento"
      },
      {
        icon: <TbBrandSpeedtest className="w-5 h-5" />,
        title: "Alta Performance",
        description: "Carregamento rápido e otimizado"
      },
      {
        icon: <TbLock className="w-5 h-5" />,
        
        title: "Certificado SSL",
        description: "Segurança e criptografia dos dados"
      },
      {
        icon: <TbEdit className="w-5 h-5" />,
        title: "Painel Admin",
        description: "Gestão simplificada do conteúdo"
      }
    ]
  },
  "Sistemas": {
    image: "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/671b29f6647cdaef47831669_e4402a7b-439b-410e-97ea-e03c575cf351.png",
    title: "Sistemas Personalizados",
    rating: 4.7,
    reviews: 89,
    description: "Criamos soluções sob medida que automatizam e otimizam seus processos de negócio.",
    features: [
      {
        icon: <LuLayoutDashboard className="w-5 h-5" />,
        title: "Automação Inteligente",
        description: "Processos otimizados e automatizados"
      },
      {
        icon: <TbDeviceDesktop className="w-5 h-5" />,
        title: "Multi-plataforma",
        description: "Acesso via web, iOS e Android"
      },
      {
        icon: <TbUsers className="w-5 h-5" />,
        title: "Multi-usuários",
        description: "Controle de acessos e permissões"
      },
      {
        icon: <TbCloud className="w-5 h-5" />,
        title: "Cloud Native",
        description: "Sistema hospedado em nuvem segura"
      }
    ]
  }
};

// Estilos personalizados para a scrollbar
const scrollbarStyles = `
  body.modal-open {
    overflow: hidden;
  }

  .modal-scroll {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
  }

  .modal-scroll::-webkit-scrollbar {
    width: 2px;
    display: block;
  }
  
  .modal-scroll::-webkit-scrollbar-track {
    background: #1a1a1a;
    margin: 1rem;
  }
  
  .modal-scroll::-webkit-scrollbar-thumb {
    background: #4F46E8;
    border-radius: 4px;
  }
  
  .modal-scroll::-webkit-scrollbar-thumb:hover {
    background: #6366F1;
  }

  .modal-scroll::-webkit-scrollbar-button,
  .modal-scroll::-webkit-scrollbar-corner {
    display: none;
  }
`;

const Planejamento = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [hiddenTooltips, setHiddenTooltips] = useState<{[key: number]: boolean}>({});
  const [tooltipHoveredIndex, setTooltipHoveredIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedModalContent, setSelectedModalContent] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [modalOpen]);

  if (!isMounted) {
    return null;
  }

  const handleTooltipNo = (index: number) => {
    setHiddenTooltips(prev => ({
      ...prev,
      [index]: true
    }));
    setTimeout(() => {
      setHiddenTooltips(prev => ({
        ...prev,
        [index]: false
      }));
    }, 300000);
  };

  const handleModalOpen = (category: string) => {
    setSelectedModalContent(category);
    setModalOpen(true);
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

  const tooltipVariants = {
    hidden: { 
      opacity: 0,
      y: -10,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2
      }
    }
  };


  


  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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
    <motion.section 
      className="relative flex flex-col w-full min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
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
      <AnimatePresence mode="wait">
        {modalOpen && selectedModalContent && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => setModalOpen(false)}
          >
            <style>{scrollbarStyles}</style>
            <motion.div
              className="bg-black rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto modal-scroll"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <div className="absolute top-6 left-6 z-10">
                  <Link 
                    href={`/${selectedModalContent.toLowerCase()}`}
                    className="bg-spacefy hover:bg-spacefy/90 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-all font-poppins duration-200 flex items-center gap-2 hover:scale-105"
                  >
                    <TbPencilPlus className="w-4 h-4" />
                    Fazer Orçamento
                  </Link>
                </div>
                <motion.button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-6 right-6 text-white z-10 bg-black/20 border border-white/10 hover:bg-spacefy/20 hover:border-spacefy hover:text-spacefy p-2 rounded-lg transition-all duration-200 backdrop-blur-sm"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoMdClose className="w-6 h-6" />
                </motion.button>
                <div className="relative w-full h-[300px]">
                  <motion.div 
                    className="absolute inset-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src={categoryDetails[selectedModalContent as keyof typeof categoryDetails].image}
                      alt={selectedModalContent}
                      className="w-full h-full object-cover brightness-[0.3]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black" />
                  </motion.div>
                  
                  <div className="relative h-full flex flex-col justify-end p-6 pb-2">
                    <div className="flex items-start justify-between">
                      <motion.h3 
                        className="font-poppins text-2xl font-bold text-white/90 tracking-tight mb-1"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {categoryDetails[selectedModalContent as keyof typeof categoryDetails].title}
                      </motion.h3>
                      
                      <motion.div 
                        className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="text-spacefy font-dmsans font-medium text-sm">
                          {categoryDetails[selectedModalContent as keyof typeof categoryDetails].rating}
                        </span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <BsStarFill 
                              key={i}
                              className={`w-3 h-3 ${i < Math.floor(categoryDetails[selectedModalContent as keyof typeof categoryDetails].rating) ? 'text-spacefy font-dmsans'  : 'text-white/10 font-dmsans'}`}
                            />
                          ))}
                        </div>
                        <span className="text-white/50 text-xs ml-1 font-dmsans">
                          ({categoryDetails[selectedModalContent as keyof typeof categoryDetails].reviews})
                        </span>
                      </motion.div>
                    </div>
                    
                    <motion.p 
                      className="text-white/60 text-sm mt-2 max-w-2xl"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {categoryDetails[selectedModalContent as keyof typeof categoryDetails].description}
                    </motion.p>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mt-2" />

                <div className="p-6">
                  <motion.div 
                    className="flex flex-col items-start gap-1 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="font-poppins text-xl text-white/90 tracking-tight">
                      Recursos <span className="text-spacefy font-semibold">Exclusivos</span>
                    </h4>
                    <div className="h-[2px] w-16 bg-gradient-to-r from-spacefy/80 to-transparent rounded-full" />
                  </motion.div>

                  <div className="grid grid-cols-2 gap-4">
                    {categoryDetails[selectedModalContent as keyof typeof categoryDetails].features.map((feature, index) => (
                      <motion.div 
                        key={index}
                        className="group flex items-start gap-3 p-4 rounded-xl hover:bg-spacefy/5 transition-all duration-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <div className="w-10 h-10 rounded-xl bg-spacefy/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-spacefy/20 transition-all duration-200">
                          <div className="text-spacefy group-hover:text-spacefy">
                            {feature.icon}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-poppins text-white/90 font-medium text-sm mb-1 group-hover:text-spacefy transition-colors duration-200">
                            {feature.title}
                          </h5>
                          <p className="font-dmsans text-white/50 text-xs leading-relaxed group-hover:text-white/60 transition-colors duration-200">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
        <motion.h1 
          className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-8xl text-white font-semibold text-center max-w-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Transforme suas <span className="text-indigo-600">Ideias</span> em <span className="text-indigo-600">Realidade Digital</span>
        </motion.h1>
        <motion.p 
          className="text-center text-md z-50 font-dmsans text-[#A3A3A3] max-w-4xl font-normal mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Está pronto para ter um site que vai <span className="text-spacefy font-semibold text-lg">aumentar suas vendas</span> e acessos de forma impactante? Preencha este formulário e acelere o <span className="text-spacefy font-semibold text-lg">processo de transformar</span> suas ideias em resultados!
        </motion.p>

        <motion.h1 
          className="font-semibold font-poppins text-2xl text-white mx-auto inline-flex items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Qual a sua necessidade <IoMdHelp className="text-spacefy text-3xl -mt-1"/>
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-8 px-4">
          {[
            {
              href: "/planejamento/modelos",
              icon: <LuLayoutDashboard />,
              title: "UI/UX",
              subtitle: "(Modelos)"
            },
            {
              href: "/planejamento/prototipos", 
              icon: <TbHandClick />,
              title: "Protótipos",
              subtitle: "Modelos Interativos"
            },
            {
              href: "/planejamento/sites",
              icon: <BsMouseFill />,
              title: "Sites", 
              subtitle: "Desenvolvimento Web"
            },
            {
              href: "/planejamento/sistemas",
              icon: <LiaNetworkWiredSolid />,
              title: "Sistemas",
              subtitle: "Soluções Personalizadas"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => window.innerWidth >= 768 && setTooltipHoveredIndex(index)}
              onMouseLeave={() => window.innerWidth >= 768 && setTooltipHoveredIndex(null)}
              onClick={() => {
                if (window.innerWidth < 768) {
                  window.location.href = item.href;
                }
              }}
            >
              <AnimatePresence>
                {tooltipHoveredIndex === index && !hiddenTooltips[index] && window.innerWidth >= 768 && (
                  <motion.div
                    variants={tooltipVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute -top-16 left-1/2 -translate-x-1/2 z-50 bg-[#0A0A0A] border-2 border-indigo-600 rounded-xl px-4 py-2 whitespace-nowrap"
                  >
                    <div className="flex flex-row items-center gap-3 text-sm">
                      <span className="text-[#A3A3A3] font-dmsans font-normal">
                        Antes de ir, quer ver mais sobre?
                      </span>
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleModalOpen(item.title);
                          }}
                          className="px-3 py-1 bg-indigo-600 font-poppins text-white rounded-lg text-sm"
                        >
                          Sim
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleTooltipNo(index);
                          }}
                          className="px-3 py-1 bg-transparent font-poppins border border-[#242424] text-white rounded-lg text-sm"
                        >
                          Não
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link href={item.href}>
                <motion.div 
                  className={`cursor-pointer border ${tooltipHoveredIndex === index ? 'border-[#4F46E8]' : 'border-[#151516] group-hover:border-[#4F46E8]'} bg-gradient-to-b from-[#040404] via-[#050505] to-[#070707] rounded-xl p-8 flex flex-col items-center justify-center transition-all duration-200 min-h-[300px] relative overflow-hidden`}
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
            </motion.div>
          ))}
        </div>

        <div className="w-full max-w-6xl mt-16">
          <div className="flex flex-col items-center sm:items-start gap-3 px-6 mb-8">
            <motion.div 
              className="flex flex-col items-center sm:items-start sm:flex-row justify-center sm:justify-start sm:space-x-4 space-y-4 sm:space-y-0 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center justify-center sm:justify-start bg-transparent bg-opacity-20 text-[#ccc] px-3 py-2 sm:py-1 rounded-full text-xs sm:text-sm font-medium font-dmsans">
                <TbMessage2Star className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                <span className="text-sm sm:text-md  text-[#ccc] mr-1">127+</span> projetos entregues
              </span>
              <span className="inline-flex items-center justify-center sm:justify-start bg-transparent bg-opacity-20 text-[#ccc] px-3 py-2 sm:py-1 rounded-full text-xs sm:text-sm font-medium font-dmsans">
                <MdOutlineSwitchAccessShortcutAdd className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                <span className="text-sm sm:text-md text-[#ccc] mr-1">119.4k</span> views geradas
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-white text-3xl md:text-5xl font-bold font-poppins text-center sm:text-left mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Explore Nosso <span className="text-indigo-600">Universo</span> de <span className="text-indigo-600">Criações</span>
            </motion.h2>

            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start w-full max-w-sm bg-[#0A0A0A] rounded-xl overflow-hidden mb-8">
              <motion.button 
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setSelectedCategory("todos")}
                className={`w-full text-[#ccc] ${selectedCategory === "todos" ? "bg-indigo-600 text-white" : "hover:bg-indigo-600 hover:text-white"} duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center sm:justify-start gap-2`}
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
                className={`w-full text-[#ccc] ${selectedCategory === "sites" ? "bg-indigo-600 text-white" : "hover:bg-indigo-600 hover:text-white"} duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center sm:justify-start gap-2`}
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
                className={`w-full text-[#ccc] ${selectedCategory === "modelos" ? "bg-indigo-600 text-white" : "hover:bg-indigo-600 hover:text-white"} duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center sm:justify-start gap-2`}
              >
                <motion.span variants={iconVariants}>
                  <CgWebsite className="text-xl" />
                </motion.span>
                Modelos
              </motion.button>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div 
                key={selectedCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6"
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
                    whileHover={{ 
                      scale: 1.01,
                      transition: {
                        duration: 0.2,
                        ease: "easeOut"
                      }
                    }}
                    layout="position"
                    layoutDependency={selectedCategory}
                  >
                    <img 
                      src={image} 
                      alt={`Projeto ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-200 ease-out"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Planejamento;