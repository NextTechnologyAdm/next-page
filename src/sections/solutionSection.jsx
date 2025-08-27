import { React } from 'react';
import { motion } from "framer-motion";
import { MdOutlineSavedSearch, MdOutlineDesignServices } from "react-icons/md";
import { FaGlobe, FaRobot } from "react-icons/fa";
import  BorderMagicButton  from '../ui/BorderMagicButton';



const SolutionSection = () => {
  const TEXT = {
    title: "Nuestras soluciones",
    description:
      "Ofrecemos una gama completa de servicios para llevar tu idea desde la concepción hasta la implementación exitosa!",
    solutions: [
      {
        title: "Asesoria estrategica",
        description:
          "Te ayudamos a navegar el panorama tecnológico, identificando las mejores herramientas y estrategias para el éxito de tu proyecto.",
        icon: <MdOutlineSavedSearch />,
      },
      {
        title: "Diseño UX/UI",
        description:
          "Nos enfocamos en la creación de interfaces intuitivas y estéticas para tus usuarios y para aumentar la retención de los mismos.",
        icon: <MdOutlineDesignServices />,
      },
      {
        title: "Web Apps",
        description:
          "Desde plataformas de e-commerce hasta herramientas de gestión internas, creamos aplicaciones web eficientes y de alto rendimiento.",
        icon: <FaGlobe />,
      },
      {
        title: "Chatbot-IA",
        description:
          "Automatiza la atencion al cliente en tu negocio digital para maximizar las ventas.",
        icon: <FaRobot />,
      },
    ],
    downloadtxt: "Descargar catalogo (PDF)",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const getRandomY = () => {
    const values = [-20, 0, 20];
    return values[Math.floor(Math.random() * values.length)];
  };

  return (
    <section id="services" className="relative py-24 px-4 md:px-8 lg:px-16 text-white overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
            {TEXT.title}
          </h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto text-white/80">
            {TEXT.description}
          </p>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {TEXT.solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col transform hover:scale-105 transition-all duration-300 ${
                index % 2 === 0 ? "md:mt-0" : "md:mt-12"
              }`}
              style={{ y: getRandomY() }}
            >
              <div className="p-8 rounded-2xl border border-white/10 shadow-lg backdrop-blur-sm bg-white/5 h-full">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-purple-600/30 to-cyan-400/30">
                    <span className="text-3xl text-white">{solution.icon}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
                  {solution.title}
                </h3>
                <p className="text-sm md:text-base text-white/70 text-center">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
              ¿Listo para dar el siguiente paso?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto text-white/80">
              Descarga nuestro catálogo de servicios para conocer en detalle
              cómo podemos ayudarte a construir el futuro de tu negocio.
            </p>
            <BorderMagicButton className="md:px-12">
              {TEXT.downloadtxt}
            </BorderMagicButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default  SolutionSection;