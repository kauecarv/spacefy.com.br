import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";

export default function AboutUs() {
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
    <section className="bg-black py-4 px-6 lg:py-10 z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="mx-auto justify-center flex flex-col lg:flex-row bg-white rounded-xl p-4 lg:p-10 w-full max-w-5xl"
      >
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-24 flex-grow text-black">
          <motion.h1 
            className="font-poppins text-3xl lg:text-5xl font-semibold leading-tight lg:leading-snug text-center lg:text-left"
            variants={itemVariants}
          >
            Inovação e
            <br />
            Impacto =
            <br />
            <span className="text-indigo-600">Excelência.</span>
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
                { number: "45%", text: "aumento em vendas" },
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
