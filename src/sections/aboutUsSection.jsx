import React from 'react'
import { FaLightbulb, FaUsers, FaHandshake, FaRocket } from 'react-icons/fa';
import { motion } from "framer-motion";
import  SplitText  from "../ui/TextEffects/SplitText";
import { MagicCard } from "../components/magicui/magic-card";


const AboutUsSection = () => {
  const TEXT = {
    title: "¿Quiénes somos?",
    description:
      "Somos un equipo de desarrolladores apasionados dedicados a construir aplicaciones web de alta calidad. Nuestra misión es crear soluciones eficientes y fáciles de usar que satisfagan las necesidades de nuestros clientes siguiendo nuestros ideales.",
    ideals: [
      {
        icon: <FaLightbulb className="text-2xl text-blue-500" />,
        title: "Innovación",
        description:
          "Nos esforzamos por estar a la vanguardia de la tecnología, implementando las últimas tendencias y herramientas en nuestros proyectos.",
      },
      {
        icon: <FaUsers className="text-2xl text-green-500" />,
        title: "Talento",
        description:
          "Contamos con un equipo diverso de programadores capacitados, cada uno aportando su experiencia única para lograr resultados excepcionales.",
      },
      {
        icon: <FaHandshake className="text-2xl text-yellow-500" />,
        title: "Compromiso",
        description:
          "Nos comprometemos a entregar proyectos de alta calidad, cumpliendo con los plazos y superando las expectativas de nuestros clientes.",
      },
      {
        icon: <FaRocket className="text-2xl text-red-500" />,
        title: "Cultura startup",
        description:
          "Fomentamos un ambiente de trabajo dinámico y colaborativo, donde la creatividad y la innovación son valoradas.",
      },
    ],
  };

  return (
    <section id= "aboutus" className="text-white  bg-gradient-to-t from-[#080b2e] to-[#090010] py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <header className="my-20 text-center space-y-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <SplitText
              text={TEXT.title}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-purple-400 md:text-purple-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
              delay={0.1}
              duration={0.6}
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            />
          </motion.div>
          <div className="flex justify-center">
            <span className="inline-block w-20 h-1 bg-gradient-to-r from-purple-400 to-cyan-300 rounded-full"></span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-white/80"
          >
            {TEXT.description}
          </motion.p>
        </header>

        <div className="relative flex flex-col items-center">
          <div className="absolute w-1 h-full bg-[#6a5acd]/30 rounded-full left-1/2 transform -translate-x-1/2"></div>

          <div className="flex flex-col gap-y-28 w-full">
            {TEXT.ideals.map((ideal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.5 }}
                className={`relative z-10 w-full md:w-1/2 group p-6 ${
                  index % 2 === 0
                    ? "md:self-start md:text-right"
                    : "md:self-end md:text-left"
                }`}
              >
                <MagicCard
                  className="p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm bg-white/5 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:rotate-1"
                  gradientColor="#6a5acd" // lavender-indigo
                  gradientFrom="#6a5acd80" // lavender-indigo con opacidad
                  gradientTo="#4adede80" // picton-blue transparente
                  gradientSize={150}
                >
                  <div
                    className={`flex flex-col ${
                      index % 2 === 0
                        ? "md:items-end md:text-right"
                        : "md:items-start md:text-left"
                    }`}
                  >
                    <motion.div
                      className="mb-5 text-3xl p-4 rounded-full bg-gradient-to-tr from-purple-600/30 to-cyan-400/30"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 10,
                        duration: 0.6,
                      }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      {ideal.icon}
                    </motion.div>
                    <motion.h3
                      className="text-xl md:text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 tracking-wide"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {ideal.title}
                    </motion.h3>
                    <motion.p
                      className="text-sm md:text-base leading-relaxed text-white/80"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true, amount: 0.4 }}
                    >
                      {ideal.description}
                    </motion.p>
                  </div>
                </MagicCard>
                <motion.div
                  className={`absolute top-1/2 -mt-2 w-4 h-4 rounded-full border-2 transform -translate-y-1/2 border-purple-400 bg-cyan-300 ${
                    index % 2 === 0
                      ? "md:right-0 md:translate-x-1/2"
                      : "md:left-0 md:-translate-x-1/2"
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    duration: 0.4,
                  }}
                  viewport={{ once: true, amount: 0.6 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection