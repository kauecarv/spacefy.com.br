"use client"

import { motion, AnimatePresence } from "framer-motion";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { RiUserSmileLine, RiPhoneLine, RiMailSendLine, RiFileTextLine } from "react-icons/ri";
import { useState } from "react";
import { IconType } from "react-icons";
import Link from "next/link";
import { MdOutlineSwitchAccessShortcutAdd } from "react-icons/md";
import { HiOutlineViewGrid, HiOutlineSparkles } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";

interface Field {
  type: string;
  placeholder: string;
  Icon?: IconType;
  description?: string;
  options?: string[];
  name: string;
}

interface Step {
  fields: Field[];
  title: string;
  subtitle: string;
}

const Modelos = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    descricao: '',
    orcamento: '',
    prazo: '',
    referencia: ''
  });
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const steps: Step[] = [
    {
      fields: [
        { 
          Icon: RiUserSmileLine, 
          placeholder: "Nome da sua empresa ou projeto", 
          type: "text",
          name: "nome" 
        },
        { 
          Icon: RiPhoneLine, 
          placeholder: "Seu melhor número para contato", 
          type: "tel",
          name: "telefone" 
        },
        { 
          Icon: RiMailSendLine, 
          placeholder: "E-mail profissional para comunicação", 
          type: "email",
          name: "email" 
        }
      ],
      title: "Pronto para Revolucionar sua Presença Digital?",
      subtitle: "Dê o primeiro passo para transformar sua visão em realidade. Sua presença digital única começa aqui."
    },
    {
      fields: [
        { 
          type: "textarea",
          placeholder: "Qual é a sua ideia para se tornar único?",
          description: "Descreva seu projeto, objetivos e ideias principais. Quanto mais detalhes você fornecer, melhor poderemos entender e realizar sua visão.",
          name: "descricao"
        }
      ],
      title: "Conte-nos Sobre Seu Projeto dos Sonhos",
      subtitle: "Cada grande projeto começa com uma ideia. Compartilhe sua visão e deixe-nos ajudar a torná-la realidade."
    },
    {
      fields: [
        { 
          Icon: RiUserSmileLine, 
          placeholder: "Qual seu investimento previsto?", 
          type: "select",
          name: "orcamento",
          options: ["Até R$1000", "R$1000-R$3000", "R$3000-R$5000", "Acima de R$5000"] 
        },
        { 
          Icon: RiPhoneLine, 
          placeholder: "Qual seu prazo ideal?", 
          type: "select",
          name: "prazo",
          options: ["1 mês", "2-3 meses", "3-6 meses", "Flexível"] 
        },
        { 
          Icon: RiMailSendLine, 
          placeholder: "Algum site que te inspire?", 
          type: "text",
          name: "referencia" 
        }
      ],
      title: "Vamos Alinhar os Detalhes", 
      subtitle: "Ajude-nos a entender melhor suas expectativas para entregarmos a solução perfeita para você"
    }
  ];

  const inputVariants = {
    initial: { 
      opacity: 0,
      y: 10
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.1
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.1
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const isCurrentStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.nome && formData.telefone && formData.email;
      case 1:
        return formData.descricao;
      case 2:
        return formData.orcamento && formData.prazo;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (!isCurrentStepValid()) {
      return;
    }
    
    if (currentStep === 1) {
      setIsLoading(true);
      // Simular uma requisição bem-sucedida
      setTimeout(() => {
        setIsLoading(false);
        setShowSuccess(true);
        
        // Após 3.5 segundos, esconde o tooltip e mostra a tela de agradecimento
        setTimeout(() => {
          setShowSuccess(false);
          setShowThanks(true);
        }, 3500);
      }, 2000);
      return;
    }
    
    if (currentStep < steps.length - 1) {
      setDirection(1);
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(prev => prev - 1);
    }
  };

  const pageVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  const titleVariants = {
    initial: (direction: number) => ({
      y: direction > 0 ? 20 : -20,
      opacity: 0
    }),
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -20 : 20,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    })
  };

  const loadingVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const successVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      x: 100, 
      opacity: 0,
      transition: {
        duration: 0.2
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

  if (showThanks) {
    return (
      <div className="flex flex-col items-center min-h-screen bg-[#0A0A0B] px-4">
        <div className="relative w-full text-center pt-20">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 font-poppins text-[120px] sm:text-[200px] font-bold text-[#4F46E8]/10 select-none"
          >
            SPACEFY
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <h1 className="font-poppins text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4">
              Sua Jornada Digital<br/>
              <span className="text-[#4F46E8]">Começa Agora</span>
              <HiOutlineSparkles className="inline-block ml-2 text-[#4F46E8] w-8 h-8 md:w-12 md:h-12" />
            </h1>
            <p className="font-dmsans text-lg text-[#A3A3A3] max-w-2xl mx-auto mb-8">
              Agradecemos por confiar em nossa equipe! Em breve entraremos em contato para transformar suas ideias em uma experiência digital extraordinária.
            </p>
            
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-[#0D0D0E] text-white hover:text-[#4F46E8] border border-[#1A1A1C] hover:border-[#4F46E8]/50 px-6 py-3 rounded-xl font-poppins transition-all duration-300 mb-20"
            >
              <BsArrowLeftShort className="text-xl" />
              Voltar para página inicial
            </Link>
          </motion.div>
        </div>

        <div className="w-full max-w-6xl px-4">
          <div className="flex flex-col items-center sm:items-start gap-3 mb-12">
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-2">
              <span className="inline-flex items-center bg-[#0D0D0E] text-[#A3A3A3] px-4 py-2 rounded-full text-sm font-medium font-dmsans">
                <svg className="mr-2 w-5 h-5 text-[#4F46E8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white mr-1">127+</span> projetos entregues
              </span>
              <span className="inline-flex items-center bg-[#0D0D0E] text-[#A3A3A3] px-4 py-2 rounded-full text-sm font-medium font-dmsans">
                <MdOutlineSwitchAccessShortcutAdd className="mr-2 w-5 h-5 text-[#4F46E8]" />
                <span className="text-white mr-1">119.4k</span> views geradas
              </span>
            </div>
            
            <h2 className="text-white text-3xl md:text-5xl font-bold font-poppins text-center sm:text-left mb-8">
              Descubra o Poder da <span className="text-[#4F46E8]">Inovação Digital</span>
            </h2>

            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start w-full max-w-sm bg-[#0A0A0A] rounded-xl overflow-hidden mb-8">
              <motion.button 
                whileHover={{ backgroundColor: selectedCategory === "todos" ? "#4F46E8" : "rgba(79, 70, 232, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory("todos")}
                className={`w-full text-[#ccc] ${selectedCategory === "todos" ? "bg-[#4F46E8] text-white" : ""} duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center sm:justify-start gap-2`}
              >
                <HiOutlineViewGrid className="text-xl" />
                Todos
              </motion.button>
              <motion.button 
                whileHover={{ backgroundColor: selectedCategory === "sites" ? "#4F46E8" : "rgba(79, 70, 232, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory("sites")}
                className={`w-full text-[#ccc] ${selectedCategory === "sites" ? "bg-[#4F46E8] text-white" : ""} duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center sm:justify-start gap-2`}
              >
                <CgWebsite className="text-xl" />
                Sites
              </motion.button>
              <motion.button 
                whileHover={{ backgroundColor: selectedCategory === "modelos" ? "#4F46E8" : "rgba(79, 70, 232, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory("modelos")}
                className={`w-full text-[#ccc] ${selectedCategory === "modelos" ? "bg-[#4F46E8] text-white" : ""} duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center sm:justify-start gap-2`}
              >
                <CgWebsite className="text-xl" />
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
    );
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen pt-10">
      <div className="flex items-center justify-center">
        <p className="font-poppins uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-b from-transparent via-[#4F46E8]/70 to-[#4F46E8] text-[90px] sm:text-[110px] md:text-[300px] lg:text-[316px] leading-[0.9] whitespace-nowrap">
          SPACEFY
        </p>
      </div>

      <div className="flex flex-col items-center px-4 py-8 z-10 -mt-28">
        <div className="relative">
          <h2 className="font-poppins uppercase font-bold text-[#1A1A1C]/10 text-[100px] sm:text-[130px] md:text-[160px] lg:text-[200px] leading-[0.9] mb-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            SPACEFY
          </h2>
          
          <div className="relative z-10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.h1
                key={currentStep}
                custom={direction}
                variants={titleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-bold text-center mb-4 max-w-5xl leading-tight"
              >
                {steps[currentStep].title}
              </motion.h1>
            </AnimatePresence>
          </div>
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.p
            key={currentStep}
            custom={direction}
            variants={titleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-center text-md font-dmsans text-[#A3A3A3] max-w-lg mb-10"
          >
            {steps[currentStep].subtitle}
          </motion.p>
        </AnimatePresence>

        <div className="w-full max-w-xl space-y-6">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              {steps[currentStep].fields.map((field, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                >
                  {field.type === "textarea" ? (
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400 font-dmsans font-normal ml-2">{field.description}</p>
                      <div className="relative group">
                        <RiFileTextLine className="absolute left-4 top-6 text-gray-500 text-xl transition-colors duration-300 group-hover:text-spacefy group-focus-within:text-spacefy z-10" />
                        <textarea
                          placeholder={field.placeholder}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                          rows={6}
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#0A0A0B]/80 backdrop-blur-sm
                            border-2 border-[#151516] text-white placeholder-gray-500
                            transition-all duration-300 ease-out
                            font-dmsans font-normal text-sm
                            focus:outline-none focus:ring-0 focus:ring-offset-0
                            focus:border-spacefy focus:bg-[#0D0D0E]
                            focus:shadow-[0_0_20px_rgba(79,70,232,0.15)]
                            hover:border-spacefy/50 hover:bg-[#0C0C0D]
                            disabled:opacity-50 disabled:cursor-not-allowed
                            resize-none"
                        />
                      </div>
                    </div>
                  ) : (
                    <motion.div
                      variants={inputVariants}
                      className="relative group mb-4"
                    >
                      {field.Icon && (
                        <field.Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl transition-colors duration-300 group-hover:text-spacefy group-focus-within:text-spacefy z-10" />
                      )}
                      {field.type === "select" ? (
                        <select
                          value={formData[field.name as keyof typeof formData]}
                          onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#0A0A0B]/80 backdrop-blur-sm
                            border-2 border-[#151516] text-white placeholder-gray-500
                            transition-all duration-300 ease-out
                            font-dmsans text-sm
                            focus:outline-none focus:ring-0 focus:ring-offset-0
                            focus:border-spacefy focus:bg-[#0D0D0E]
                            focus:shadow-[0_0_20px_rgba(79,70,232,0.15)]
                            hover:border-spacefy/50 hover:bg-[#0C0C0D]
                            disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <option value="" >{field.placeholder}</option>
                          {field.options?.map((option, i) => (
                            <option key={i} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
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
                      )}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 pt-2">
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`flex-1 px-8 py-4 rounded-xl text-white font-poppins flex items-center justify-center gap-2 text-sm transition-all duration-300 
                bg-[#0A0A0B]/90 backdrop-blur-sm border-2 border-[#151516] 
                hover:border-spacefy/50 hover:bg-[#0D0D0E] 
                hover:shadow-[0_0_20px_rgba(79,70,232,0.15)] hover:-translate-y-1
                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0`}
            >
              <BsArrowLeftShort className="text-2xl" />
              <span className="font-medium tracking-wide">Voltar</span>
            </motion.button>

            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={handleNext}
              disabled={!isCurrentStepValid() || showSuccess}
              className={`flex-1 px-8 py-4 rounded-xl text-white font-poppins flex items-center justify-center gap-2 text-sm transition-all duration-300 
                ${isCurrentStepValid() 
                  ? showSuccess 
                    ? 'bg-green-500 opacity-90 cursor-not-allowed'
                    : 'bg-spacefy hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(79,70,232,0.25)] hover:-translate-y-1'
                  : 'bg-[#0A0A0B]/90 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0'}`}
            >
              <span className="font-medium tracking-wide">
                {currentStep === 1 ? (
                  isLoading ? (
                    <motion.svg
                      variants={loadingVariants}
                      animate="animate"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                    </motion.svg>
                  ) : (
                    "Finalizar"
                  )
                ) : (
                  "Avançar"
                )}
              </span>
              {!isLoading && currentStep !== 1 && <BsArrowRightShort className="text-2xl" />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            variants={successVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-4 right-4 bg-green-500/10 backdrop-blur-sm border border-green-500/20 text-green-500 px-6 py-4 rounded-2xl shadow-lg z-50 flex items-center gap-3"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <span className="font-poppins font-medium">Formulário enviado com sucesso!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Modelos;