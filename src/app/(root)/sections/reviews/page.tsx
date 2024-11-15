"use client"
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { HiOutlineSparkles } from "react-icons/hi";
import { TbMoodPlus } from "react-icons/tb";
import { MdEmojiPeople } from "react-icons/md";

interface Review {
  text: string;
  author: string;
  role: string;
  avatar: string;
}

const initialReviews: Review[] = [
  {
    text: "A plataforma revolucionou nossa forma de trabalhar. A simplicidade e eficiência são impressionantes. É exatamente o que precisávamos.",
    author: "Charles Londero",
    role: "CEO da Legasse",
    avatar: "https://randomuser.me/api/portraits/men/68.jpg"

  },
  {
    text: "Desde que implementamos a solução, nossa produtividade aumentou significativamente. A interface intuitiva faz toda diferença.",
    author: "Ana Beatriz", 
    role: "Co-fundadora da DevBrasil",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    text: "Testamos várias alternativas do mercado, mas nada se compara. A experiência é simplesmente superior em todos os aspectos.",
    author: "Carlos Eduardo",
    role: "CTO da InovaTech",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg"
  },
  {
    text: "A equipe entregou além das expectativas. O suporte e dedicação foram excepcionais do início ao fim do projeto.",
    author: "Marina Costa",
    role: "CEO da InnovateBR",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg"
  }
];

const Reviews = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const reviews = [...initialReviews, ...initialReviews, ...initialReviews];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const startAnimation = async () => {
      try {
        await controls.start({
          x: [`0%`, `-${(100 / 3)}%`],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            }
          }
        });
      } catch (error) {
        console.error("Erro na animação:", error);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        controls.stop();
      } else {
        timeoutId = setTimeout(startAnimation, 100);
      }
    };

    const container = containerRef.current;
    
    const handleMouseEnter = () => controls.stop();
    const handleMouseLeave = () => startAnimation();

    container?.addEventListener('mouseenter', handleMouseEnter);
    container?.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    startAnimation();

    return () => {
      container?.removeEventListener('mouseenter', handleMouseEnter);
      container?.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (timeoutId) clearTimeout(timeoutId);
      controls.stop();
    };
  }, [controls]);

  return (
    <motion.section 
      className="w-full bg-black py-32 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center bg-transparent bg-opacity-20 text-[#ccc] px-3 py-1 rounded-full text-sm font-medium font-dmsans">
            <HiOutlineSparkles className="mr-2 w-5 h-5 text-indigo-600" />
            <span className="text-md mr-1">100+</span> projetos entregues
          </span>
          <h2 className="text-center text-white text-3xl sm:text-5xl font-poppins font-bold mb-4 sm:mb-8">
            Depoimentos <span className="text-indigo-600">Autênticos</span> de Confiança.
          </h2>
          <p className="text-[#ccc] text-md max-w-2xl mx-auto mb-8 sm:mb-16 font-dmsans font-normal leading-relaxed">
            Descubra como nossos clientes transformaram seus negócios através de nossas soluções. Uma média de <span className="text-indigo-600 font-semibold">97% de satisfação</span> em todos os projetos.
          </p>
        </motion.div>

        <div className="relative w-full">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />
          
          <div className="relative overflow-hidden" ref={containerRef}>
            <motion.div
              animate={controls}
              className="flex gap-6"
              style={{ width: "fit-content" }}
            >
              {reviews.map((review, index) => (
                <ReviewCard key={`${review.author}-${index}`} {...review} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const ReviewCard = ({ text, author, role, avatar }: Review) => {
  return (
    <motion.div
      className="w-[380px] bg-[#0A0A0A] p-8 rounded-xl flex flex-col gap-6 border border-[#1a1a1a] hover:border-transparent transition-all duration-100 my-4 group"
      whileHover={{ 
        y: -2,
        scale: 1.005,
        transition: {
          duration: 0.1,
          ease: "easeOut"
        }
      }}
    >
      <div className="flex justify-between items-center">
        <TbMoodPlus className="text-lg text-indigo-600 group-hover:text-emerald-400 transition-colors duration-300" />
        <motion.div 
          className="bg-[#111] px-3 py-1 rounded-xl border border-zinc-800"
          whileHover={{
            scale: 1.01,
            transition: {
              duration: 0.1,
              ease: "easeOut"
            }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-zinc-400 text-xs font-dmsans font-medium flex items-center gap-1.5">
           <MdEmojiPeople/>
            Cliente verificado
          </span>
        </motion.div>
      </div>

      <div className="flex-grow">
        <p className="text-[#A3A3A3] text-base font-dmsans leading-relaxed">{text}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={avatar}
            alt={`${author} avatar`}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-white font-medium font-poppins text-sm">{author}</h4>
          <p className="text-indigo-500 text-xs font-dmsans font-normal">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Reviews;