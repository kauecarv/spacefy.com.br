"use client"

import { useMediaQuery } from 'react-responsive';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Features = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-4"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="inline-block text-xs md:text-sm font-poppins font-semibold text-indigo-600">
          <span className="text-lg">500+</span> sites lançados com <span className="text-lg">98%</span> de satisfação dos clientes
          </span>
        </motion.div>
        
        <motion.h2 
          className='text-center text-3xl md:text-5xl max-w-2xl mx-auto font-poppins font-semibold mb-8 md:mb-12'
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Detalhes que <span className='text-indigo-600'>impulsionam</span> seu <span className='text-indigo-600'>sucesso.</span>
        </motion.h2>
        
        {isMobile ? (
          <motion.div 
            className="grid grid-cols-2 gap-4 justify-items-center"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <FeatureCard title="Segurança" />
            <FeatureCard title="Desempenho Rápido" />
            <FeatureCard title="Compatibilidade" />
            <FeatureCard title="Manutenção" />
            <FeatureCard title="Hospedagem Gratuita" icon={<img src="https://framerusercontent.com/images/X9rSPrFBr6Qh4qsMnmARaX1VN3Q.png?scale-down-to=512" alt="Ícone" className="w-4 h-4" />} />
            <FeatureCard title="Aparecer no Google" icon={<img src="https://framerusercontent.com/images/X9rSPrFBr6Qh4qsMnmARaX1VN3Q.png?scale-down-to=512" alt="Ícone" className="w-4 h-4" />} />
            <FeatureCard title="Interface Atraente" icon={<img src="https://framerusercontent.com/images/X9rSPrFBr6Qh4qsMnmARaX1VN3Q.png?scale-down-to=512" alt="Ícone" className="w-4 h-4" />} />
          </motion.div>
        ) : (
          <motion.div 
            className="relative h-[300px]"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <FeatureCard title="Segurança" className="absolute top-0 left-0" />
            <FeatureCard title="Desempenho Rápido" className="absolute top-0 left-[35%] transform -translate-x-1/2" />
            <FeatureCard title="Compatibilidade" className="absolute top-0 right-0" />
            <FeatureCard title="Manutenção" className="absolute top-1/3 right-[70%] transform -translate-y-1/2 -translate-x-1/2" />
            <FeatureCard title="Hospedagem Gratuita" className="absolute top-1/3 left-[60%] transform -translate-y-1/2 translate-x-1/2" icon={<img src="https://framerusercontent.com/images/X9rSPrFBr6Qh4qsMnmARaX1VN3Q.png?scale-down-to=512" alt="Ícone" className="w-4 h-4" />} />
            <FeatureCard title="Aparecer no Google" className="absolute bottom-16 right-[10%] transform -translate-x-1/2" icon={<img src="https://framerusercontent.com/images/X9rSPrFBr6Qh4qsMnmARaX1VN3Q.png?scale-down-to=512" alt="Ícone" className="w-4 h-4" />} />
            <FeatureCard title="Interface Atraente" className="absolute bottom-16 right-[60%] transform translate-x-1/2" icon={<img src="https://framerusercontent.com/images/X9rSPrFBr6Qh4qsMnmARaX1VN3Q.png?scale-down-to=512" alt="Ícone" className="w-4 h-4" />} />
          </motion.div>
        )}
      </div>
    </section>
  )
};

const FeatureCard = ({ title, className, icon }: { title: string, className?: string, icon?: React.ReactNode }) => (
  <motion.div 
    className={`bg-[#121212] p-[8px] px-4 rounded-lg inline-flex items-center justify-center cursor-pointer w-full ${className || ''}`}
    variants={{
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      }
    }}
    whileHover={{
      backgroundColor: "#4F46E5",
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }}
  >
    {icon && <span className="mr-2">{icon}</span>}
    <h3 className="text-sm font-poppins font-medium">{title}</h3>
  </motion.div>
);

export default Features;
