"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IconType } from "react-icons";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsCalculator,
} from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import {
  HiOutlineArrowLeft,
  HiOutlineSparkles,
  HiOutlineViewGrid,
} from "react-icons/hi";
import {
  MdOutlineDesignServices,
  MdOutlineSwitchAccessShortcutAdd,
} from "react-icons/md";
import {
  RiFileTextLine,
  RiMailSendLine,
  RiPhoneLine,
  RiUserSmileLine,
} from "react-icons/ri";

interface Field {
  type: string;
  placeholder: string;
  Icon?: IconType;
  description?: string;
  options?: string[] | OptionType[];
  name: string;
  conditional?: string;
  title?: string;
  tooltip?: string;
}

interface Step {
  fields: Field[];
  title: string;
  subtitle: string;
}

interface OptionType {
  label: string;
  value: string;
}

const Sites = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    descricao: "",
    referencia: "",
    referenciaLink: "",
    tecnologias: "",
    paginas: "",
    secoes: "",
    objetivo: "",
    prazo: "",
    investimento: "",
    infraestrutura: "",
  });
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [activeSelect, setActiveSelect] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{
    top: number;
    left: number;
    width: number;
  } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showErrors, setShowErrors] = useState(false);

  const handleSendRequest = async () => {
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, from: 'sites' })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error('Erro ao enviar formulário');
      }

      setShowSuccess(true);
      return data;
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setToastMessage('Erro ao enviar formulário. Tente novamente.');
      throw error;
    }
  };

  const steps: Step[] = [
    {
      fields: [
        {
          Icon: RiUserSmileLine,
          placeholder: "Nome da sua empresa ou projeto",
          type: "text",
          name: "nome",
          description:
            "Identifique seu projeto para acompanhar todo o processo.",
        },
        {
          Icon: RiPhoneLine,
          placeholder: "DDD + Número do WhatsApp",
          type: "tel",
          name: "telefone",
          description: "Para atualizações importantes sobre o desenvolvimento.",
        },
        {
          Icon: RiMailSendLine,
          placeholder: "E-mail profissional para comunicação",
          type: "email",
          name: "email",
          description: "Manteremos você informado sobre cada etapa.",
        },
      ],
      title: "Comece sua Jornada Digital Conosco",
      subtitle:
        "O primeiro passo para transformar sua visão em realidade começa aqui. Vamos construir algo incrível juntos.",
    },
    {
      fields: [
        {
          type: "radio",
          title: "Você tem algum design ou protótipo?",
          name: "referencia",
          placeholder: "Selecione uma opção",
          options: [
            { label: "Sim", value: "sim" },
            { label: "Não", value: "nao" },
          ],
        },
        {
          Icon: RiFileTextLine,
          placeholder: "Cole aqui os links das suas referências",
          type: "text",
          name: "referenciaLink",
          conditional: "sim",
          description:
            "Links dos protótipos ou esboços que você gostaria de usar como inspiração.",
        },
      ],
      title: "Como Você Realmente Imagina seu Projeto?",
      subtitle:
        "Compartilhe suas ideias e referências visuais, ou confie em nossa expertise para criar um design exclusivo.",
    },
    {
      fields: [
        {
          Icon: HiOutlineSparkles,
          type: "text",
          placeholder: "Se sim, qual ferramenta prefere?",
          name: "tecnologias",
          description:
            "Ex: Framer, Figma, Adobe XD ou deixe em branco para nossa sugestão",
        },
      ],
      title: "Vamos Escolher as Melhores Ferramentas",
      subtitle:
        "Conte-nos se você tem alguma preferência de ferramentas ou deixe com nossa equipe.",
    },
    {
      fields: [
        {
          Icon: HiOutlineViewGrid,
          type: "text",
          placeholder: "Quais páginas serão necessárias?",
          name: "paginas",
          description: "Ex: Home, Sobre, Serviços, Contato, Blog, etc.",
        },
        {
          Icon: CgWebsite,
          type: "text",
          placeholder: "Quais seções cada página terá?",
          name: "secoes",
          description: "Ex: Banner, Galeria, Formulário, Lista de Produtos",
        },
        {
          Icon: HiOutlineSparkles,
          type: "text",
          placeholder: "Qual o objetivo principal do site?",
          name: "objetivo",
          description:
            "Ex: Vender produtos, compartilhar informações, promover serviços",
        },
      ],
      title: "Qual a Estrutura e Objetivos do Projeto",
      subtitle:
        "Defina as páginas necessárias e o propósito principal do seu site.",
    },
    {
      fields: [
        {
          type: "select",
          Icon: BsCalculator,
          placeholder: "Qual o prazo desejado para o projeto?",
          name: "prazo",
          description: "Prazo estimado para entrega do projeto",
          options: [
            { label: "Até 15 dias", value: "15 dias" },
            { label: "15-30 dias", value: "30 dias" },
            { label: "30-60 dias", value: "60 dias" },
            { label: "Mais de 60 dias", value: "mais 60 dias" },
          ],
        },
        {
          type: "select",
          Icon: MdOutlineSwitchAccessShortcutAdd,
          placeholder: "Qual o investimento disponível?",
          name: "investimento",

          description: "Faixa de investimento para o projeto",
          options: [
            { label: "Até R$ 1.000", value: "1000" },
            { label: "R$ 1.000 - R$ 3.000", value: "3000" },
            { label: "R$ 3.000 - R$ 5.000", value: "5000" },
            { label: "Mais de R$ 5.000", value: "mais 5000" },
          ],
        },
        {
          type: "radio",
          title: "Você já possui domínio e hospedagem?",
          name: "infraestrutura",
          description: "Se não possuir, podemos incluir no orçamento",
          placeholder: "Selecione uma opção",
          options: [
            { label: "Sim, já tenho", value: "sim" },
            { label: "Não tenho ainda", value: "nao" },
          ],
        },
      ],
      title: "Qual Prazo e Investimento Disponíveis?",
      subtitle:
        "Informe qual o tempo estimado e o valor disponível que você pretende investir no projeto",
    },
  ];

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
      },
    },
  };

  const inputVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.1,
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.1,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  const isCurrentStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.nome && formData.telefone && formData.email;
      case 1:
        return (
          formData.referencia === "nao" ||
          (formData.referencia === "sim" && formData.referenciaLink)
        );
      case 2:
        return formData.tecnologias && formData.tecnologias.trim().length > 0;
      case 3:
        return formData.paginas && formData.objetivo;
      case 4:
        return (
          formData.prazo && formData.investimento && formData.infraestrutura
        );
      default:
        return false;
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[0-9]+$/;
    return re.test(phone);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleNext = async () => {
    if (currentStep === steps.length - 1) {
      try {
        setIsLoading(true);
        await handleSendRequest();
        setShowSuccess(true);
        
        setTimeout(() => {
          setShowSuccess(false);
          setShowThanks(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 3500);
      } catch (error) {
        console.error('Erro ao enviar:', error);
      } finally {
        setIsLoading(false);
      }
      return;
    }
    

    setShowErrors(false);
    setDirection(1);
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const pageVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  const titleVariants = {
    initial: (direction: number) => ({
      y: direction > 0 ? 20 : -20,
      opacity: 0,
    }),
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -20 : 20,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    }),
  };

  const loadingVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const successVariants = {
    initial: { x: 100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      x: 100,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const projects = {
    todos: [
      "/assets/projects/AmazingEmpresarial.avif",
      "/assets/projects/Greenleaf.avif",
      "/assets/projects/JWConstitucional.avif",
      "/assets/projects/SpaceLabs.avif"
    ],
    sites: [
      "/assets/projects/FineMetrics.avif",
      "/assets/projects/IncredibleMinecraft.avif",
      "/assets/projects/SpaceLabs.avif",
      "/assets/projects/legasse.jpg"
    ],
    modelos: [
      "/assets/projects/Greenleaf.avif",
      "/assets/projects/IncredibleMinecraft.avif",
      "/assets/projects/legasse.jpg",
      "/assets/projects/SpaceLabs.avif"
    ]
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeSelect && !(event.target as Element).closest(".relative")) {
        setActiveSelect(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeSelect]);

  const handleSelectClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    fieldName: string
  ) => {
    if (activeSelect === fieldName) {
      setActiveSelect(null);
      setDropdownPosition(null);
      return;
    }

    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();

    setDropdownPosition({
      top: rect.bottom + window.scrollY + 8,
      left: rect.left + window.scrollX,
      width: rect.width,
    });

    setActiveSelect(fieldName);
  };

  const toastVariants = {
    initial: { 
      opacity: 0,
      x: 50,
      scale: 0.95,
      filter: "blur(8px)"
    },
    animate: { 
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      x: 50,
      scale: 0.95,
      filter: "blur(8px)",
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  if (showThanks) {
    return (
      <div className="flex flex-col items-center min-h-screen px-4">
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
              Sua Jornada Digital
              <br />
              <span className="text-[#4F46E8]">Começa Agora</span>
              <HiOutlineSparkles className="inline-block ml-2 text-[#4F46E8] w-8 h-8 md:w-12 md:h-12" />
            </h1>
            <p className="font-dmsans text-lg text-[#A3A3A3] max-w-2xl mx-auto mb-8">
              Agradecemos por confiar em nossa equipe! Em breve entraremos em
              contato para transformar suas ideias em uma experiência digital
              extraordinária.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col mx-auto md:flex-row  justify-center text-center items-center gap-2"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-3 px-6 py-3 text-gray-400 hover:text-[#4F46E8] font-poppins transition-all duration-300 mb-20"
              >
                <HiOutlineArrowLeft className="text-xl" />
                Voltar ao Início
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full max-w-6xl px-4">
          <div className="flex flex-col items-center sm:items-start gap-3 mb-12">
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-2">
              <span className="inline-flex items-center bg-[#0D0D0E] text-[#A3A3A3] px-4 py-2 rounded-full text-sm font-medium font-dmsans">
                <svg
                  className="mr-2 w-5 h-5 text-[#4F46E8]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-white mr-1">127+</span> projetos entregues
              </span>
              <span className="inline-flex items-center bg-[#0D0D0E] text-[#A3A3A3] px-4 py-2 rounded-full text-sm font-medium font-dmsans">
                <MdOutlineSwitchAccessShortcutAdd className="mr-2 w-5 h-5 text-[#4F46E8]" />
                <span className="text-white mr-1">119.4k</span> views geradas
              </span>
            </div>

            <h2 className="text-white text-3xl md:text-5xl font-bold font-poppins text-center sm:text-left mb-8">
              Descubra o Poder da{" "}
              <span className="text-[#4F46E8]">Inovação Digital</span>
            </h2>

            <div className="flex flex-wrap md:flex-nowrap items-center justify-center w-full md:w-auto bg-[#0A0A0A] rounded-xl overflow-hidden">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setSelectedCategory("todos")}
                className={`text-[#ccc] w-full md:w-auto ${
                  selectedCategory === "todos"
                    ? "bg-[#4F46E8] text-white"
                    : "hover:bg-[#4F46E8] hover:text-white"
                } duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center md:justify-start gap-2`}
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
                className={`text-[#ccc] w-full md:w-auto ${
                  selectedCategory === "sites"
                    ? "bg-[#4F46E8] text-white"
                    : "hover:bg-[#4F46E8] hover:text-white"
                } duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center md:justify-start gap-2`}
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
                className={`text-[#ccc] w-full md:w-auto ${
                  selectedCategory === "modelos"
                    ? "bg-[#4F46E8] text-white"
                    : "hover:bg-[#4F46E8] hover:text-white"
                } duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center md:justify-start gap-2`}
              >
                <motion.span variants={iconVariants}>
                  <MdOutlineDesignServices className="text-xl" />
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
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 w-full"
              >
                {projects[selectedCategory as keyof typeof projects].map(
                  (image: string, index: number) => (
                    <motion.div
                      key={index}
                      className={`relative rounded-xl overflow-hidden cursor-pointer group ${
                        index <= 1
                          ? index === 0
                            ? "lg:col-span-7 h-[400px]"
                            : "lg:col-span-5 h-[400px]"
                          : index === 2
                          ? "lg:col-span-4 h-[400px]"
                          : "lg:col-span-8 h-[400px]"
                      }`}
                      whileHover={{
                        scale: 1.02,
                        transition: {
                          duration: 0.2,
                          ease: "easeOut",
                        },
                      }}
                      layout="position"
                    >
                      <Image
                        src={image}
                        alt={`Projeto ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-200 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </motion.div>
                  )
                )}
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

      <div className="flex flex-col items-center px-4 py-8 z-10 -mt-10 sm:-mt-28">
        <div className="relative">
          <h2 className="font-poppins uppercase font-bold text-[#1A1A1C]/10 text-[100px] sm:text-[130px] md:text-[160px] lg:text-[200px] leading-[0.9] mb-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            SPACEFY
          </h2>

          <div className="relative z-10 pt-16 sm:pt-0">
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
            className="text-center text-md font-dmsans text-[#A3A3A3] max-w-lg mb-10 z-50"
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
              className="w-full z-50"
            >
              {steps[currentStep].fields.map((field, index) => (
                <motion.div key={index} className="relative group">
                  {field.type === "radio" ? (
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center">
                        <h3 className="text-xl text-white font-poppins font-medium">
                          {field.title}
                        </h3>

                        {field.tooltip && (
                          <div className="relative ml-1.5">
                            <button
                              type="button"
                              className="group/tooltip w-4 h-4"
                            >
                              <svg
                                className="w-4 h-4 text-gray-400 group-hover/tooltip:text-spacefy transition-colors duration-200"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </button>

                            {/* Tooltip */}
                            <div
                              className="absolute invisible group-hover/tooltip:visible opacity-0 group-hover/tooltip:opacity-100 
                              bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 z-[9999]
                              transition-all duration-200"
                            >
                              <div
                                className="bg-[#0D0D0E] border border-[#151516] p-2.5 rounded-lg 
                                shadow-lg backdrop-blur-sm"
                              >
                                <p className="font-dmsans text-xs text-gray-300 leading-relaxed whitespace-normal">
                                  {field.tooltip}
                                </p>
                                <div
                                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 
                                  rotate-45 w-2 h-2 bg-[#0D0D0E] border-r border-b border-[#151516]"
                                ></div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {field.description && (
                        <p className="text-sm text-gray-400 font-dmsans mb-4">
                          {field.description}
                        </p>
                      )}

                      <div className="grid grid-cols-2 gap-4">
                        {Array.isArray(field.options) &&
                          field.options.map(
                            (option: OptionType | string, i) => {
                              const value =
                                typeof option === "string"
                                  ? option
                                  : option.value;
                              const label =
                                typeof option === "string"
                                  ? option
                                  : option.label;

                              return (
                                <motion.button
                                  key={i}
                                  type="button"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() =>
                                    setFormData({
                                      ...formData,
                                      [field.name]: value,
                                    })
                                  }
                                  className={`relative flex flex-col items-center justify-center p-6 rounded-xl border-2 
                                ${
                                  formData[
                                    field.name as keyof typeof formData
                                  ] === value
                                    ? "border-spacefy bg-spacefy/5"
                                    : "border-[#151516] bg-[#0A0A0B]/80"
                                } 
                                transition-all duration-300 group hover:border-spacefy/50`}
                                >
                                  <div
                                    className={`w-6 h-6 rounded-full border-2 mb-3 flex items-center justify-center
                                ${
                                  formData[
                                    field.name as keyof typeof formData
                                  ] === value
                                    ? "border-spacefy"
                                    : "border-[#151516]"
                                }`}
                                  >
                                    {formData[
                                      field.name as keyof typeof formData
                                    ] === value && (
                                      <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-3 h-3 rounded-full bg-spacefy"
                                      />
                                    )}
                                  </div>
                                  <span className="font-poppins text-sm text-white">
                                    {label}
                                  </span>
                                </motion.button>
                              );
                            }
                          )}
                      </div>
                    </div>
                  ) : field.conditional === "sim" ? (
                    formData.referencia === "sim" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="relative group mt-4"
                      >
                        {field.Icon && (
                          <field.Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl transition-colors duration-300 group-hover:text-spacefy group-focus-within:text-spacefy z-10" />
                        )}
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [field.name]: e.target.value,
                            })
                          }
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
                      </motion.div>
                    )
                  ) : (
                    <motion.div
                      variants={inputVariants}
                      className="relative group mb-4"
                    >
                      {field.Icon && (
                        <field.Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl transition-colors duration-300 group-hover:text-spacefy group-focus-within:text-spacefy z-10" />
                      )}
                      {field.type === "select" ? (
                        <div className="relative group mb-4">
                          {field.Icon && (
                            <field.Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl transition-colors duration-300 group-hover:text-spacefy group-focus-within:text-spacefy z-10" />
                          )}
                          <button
                            type="button"
                            onClick={(e) => handleSelectClick(e, field.name)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#0A0A0B]/80 backdrop-blur-sm
                              border-2 border-[#151516] text-white 
                              transition-all duration-300 ease-out
                              font-dmsans text-sm
                              focus:outline-none
                              hover:border-spacefy/50 hover:bg-[#0C0C0D]
                              flex items-center justify-between"
                          >
                            <span
                              className={`${
                                formData[field.name as keyof typeof formData]
                                  ? "text-white"
                                  : "text-gray-500"
                              }`}
                            >
                              {formData[field.name as keyof typeof formData] ||
                                field.placeholder}
                            </span>

                            <BsArrowRightShort
                              className={`w-5 h-5 -rotate-90 text-gray-500 transition-transform duration-200 ${
                                activeSelect === field.name ? "rotate-90" : ""
                              }`}
                            />
                          </button>

                          {/* Portal para o Dropdown */}
                          {createPortal(
                            <AnimatePresence>
                              {activeSelect === field.name &&
                                dropdownPosition && (
                                  <motion.div
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -4 }}
                                    transition={{ duration: 0.2 }}
                                    style={{
                                      position: "absolute",
                                      top: dropdownPosition.top,
                                      left: dropdownPosition.left,
                                      width: dropdownPosition.width,
                                      zIndex: 99999,
                                    }}
                                    className="fixed"
                                  >
                                    <div
                                      className="bg-[#0D0D0E] border-2 border-[#151516] rounded-xl overflow-hidden
                                    shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-lg"
                                    >
                                      {field.options?.map((option, i) => {
                                        const value =
                                          typeof option === "string"
                                            ? option
                                            : option.value;
                                        const label =
                                          typeof option === "string"
                                            ? option
                                            : option.label;
                                        const isSelected =
                                          formData[
                                            field.name as keyof typeof formData
                                          ] === value;

                                        return (
                                          <motion.button
                                            key={i}
                                            onClick={() => {
                                              setFormData({
                                                ...formData,
                                                [field.name]: value,
                                              });
                                              setActiveSelect(null);
                                              setDropdownPosition(null);
                                            }}
                                            className={`w-full px-6 py-4 text-left transition-all duration-200
                                            flex items-center gap-3 group
                                            ${
                                              isSelected
                                                ? "bg-spacefy/10"
                                                : "hover:bg-[#151516]"
                                            }`}
                                            whileHover={{ x: 4 }}
                                            whileTap={{ scale: 0.98 }}
                                          >
                                            <div
                                              className={`w-2 h-2 rounded-full transition-all duration-200
                                            ${
                                              isSelected
                                                ? "bg-spacefy scale-100"
                                                : "bg-gray-500 scale-0 group-hover:scale-100 group-hover:bg-spacefy/50"
                                            }`}
                                            />
                                            <span
                                              className={`font-dmsans text-sm
                                            ${
                                              isSelected
                                                ? "text-spacefy"
                                                : "text-gray-400 group-hover:text-white"
                                            }`}
                                            >
                                              {label}
                                            </span>
                                          </motion.button>
                                        );
                                      })}
                                    </div>
                                  </motion.div>
                                )}
                            </AnimatePresence>,
                            document.body
                          )}
                        </div>
                      ) : (
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [field.name]: e.target.value,
                            })
                          }
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
                ${
                  isCurrentStepValid()
                    ? showSuccess
                      ? "bg-green-500 opacity-90 cursor-not-allowed"
                      : "bg-spacefy hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(79,70,232,0.25)] hover:-translate-y-1"
                    : "bg-[#0A0A0B]/90 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                }`}
            >
              <span className="font-medium tracking-wide">
                {currentStep === steps.length - 1 ? (
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
              {!isLoading && currentStep !== steps.length - 1 && (
                <BsArrowRightShort className="text-2xl" />
              )}
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
            <span className="font-poppins font-medium">
              Formulário enviado com sucesso!
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toastMessage && (
          <motion.div
            variants={toastVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-4 right-4 z-50"
          >
            <div className="flex items-center gap-3 bg-[#0D0D0E]/95 backdrop-blur-lg border border-red-500/20 
              px-5 py-4 rounded-xl shadow-[0_8px_32px_rgba(239,68,68,0.15)] min-w-[320px]"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-500/10">
                <motion.svg
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    transition: { delay: 0.2, duration: 0.2 }
                  }}
                  className="w-5 h-5 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </motion.svg>
              </div>

              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.1, duration: 0.2 }
                  }}
                  className="flex flex-col gap-0.5"
                >
                  <span className="text-red-500 font-poppins font-medium text-sm">
                    Erro de Validação
                  </span>
                  <span className="text-gray-400 font-dmsans text-sm">
                    {toastMessage}
                  </span>
                </motion.div>
              </div>

              <motion.button
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 0.5,
                  transition: { delay: 0.3, duration: 0.2 }
                }}
                whileHover={{ opacity: 1 }}
                onClick={() => setToastMessage(null)}
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Linha de progresso animada */}
            <div className="relative w-full h-0.5 bg-red-500/10 mt-1 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 3, ease: "linear" }}
                className="absolute top-0 left-0 h-full bg-red-500/50"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sites;
