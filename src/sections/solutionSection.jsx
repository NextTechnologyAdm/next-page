import { React } from 'react';
import { motion } from "framer-motion";
import { MdOutlineSavedSearch, MdOutlineDesignServices } from "react-icons/md";
import { FaGlobe, FaRobot } from "react-icons/fa";
import  BorderMagicButton  from '../ui/BorderMagicButton';



const SolutionSection = () => {
  const TEXT = {
    title: "Nuestras soluciones",
    description:
      "Ofrecemos una gama completa de servicios para llevar tu idea desde la concepción hasta la implementación exitosa!  ",
    solutions: [
      {
        title: "Asesoría Estratégica",
        description:
          "Te ayudamos a navegar el panorama tecnológico, identificando las mejores herramientas y estrategias para el éxito de tu proyecto.",
        icon: <MdOutlineSavedSearch />,
      },
      {
        title: "Diseño UX/UI",
        description:
          "Enfocados en la creación de interfaces intuitivas y atractivas que mejoran la experiencia del usuario y aumentan la vista profesional de tu marca.",
        icon: <MdOutlineDesignServices />,
      },
      {
        title: "Aplicaciones Web",
        description:
          "Desde plataformas de E-commerce hasta herramientas de gestión internas, creamos aplicaciones web eficientes y de alto rendimiento.",
        icon: <FaGlobe />,
      },
      {
        title: "ChatBots (IA)",
        description:
          "Automatiza la atencion al cliente en tu negocio digital para maximizar las ventas. Disponibilidad 24/7, y evita perdidas de ventas potenciales.",
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
    <section id="services" className="relative py-24 px-4 md:px-8 lg:px-16 text-white overflow-hidden" style={{ background: 'radial-gradient(ellipse at center, rgba(0, 227, 254, 0.15) 0%, transparent 50%, transparent 100%)' }}>
      {/* Gradient Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-tr from-purple-900 via-transparent to-cyan-900 opacity-30 -z-10"></div> */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#a861ed] to-[#00e3fc]">
            {TEXT.title}
          </h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto text-white/80">
            {TEXT.description}
          </p>
        </motion.header>
        
        {/* <motion.div>
          <div className="max-w-3xl mx-auto text-center mb-12 bg-black/20 p-6 rounded-2xl border border-white/5 shadow-lg backdrop-blur-sm hover:scale-105 transform transition-all duration-300 cursor-default">
            <div className="flex items-center justify-center gap-3 mb-4 text-3xl"> 
              <MdOutlineSavedSearch />
              <h2 className="text-3xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">Asesoría Estratégica</h2>
              <MdOutlineSavedSearch />
            </div>
            <p>Te ayudamos a navegar el panorama tecnológico, identificando las mejores herramientas y estrategias para el éxito de tu proyecto. </p>
          </div>
        </motion.div> */}
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
              className="flex flex-col md:h-75 transform hover:scale-110 transition-all duration-300 cursor-default"
              style={{ y: getRandomY() }}
            >
              <div className="p-8 rounded-2xl border border-white/5 shadow-lg backdrop-blur-sm bg-black/20 h-full">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-purple-600/30 to-cyan-400/30">
                    <span className="text-3xl text-white">{solution.icon}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#a861ed] to-[#00e3fc] ">
                  {solution.title}
                </h3>
                <div className="w-[90%] bg-white/10 h-0.5 mx-auto my-1"></div>
                <p className="text-md text-white/70 text-center ">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="justify-center mt-20 flex flex-col gap-20">
          <motion.div
            className="text-center flex flex-col gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300 p-2">
              ¿Listo para dar el siguiente paso?
            </h3>
            <p className="text-lg max-w-2xl mx-auto text-white/80">
              Descarga nuestro catálogo de servicios para conocer en detalle
              cómo podemos ayudarte a construir el futuro de tu negocio.
            </p>
            <BorderMagicButton className="md:px-12 w-1/2 md:w-auto mx-auto">
              {TEXT.downloadtxt}
            </BorderMagicButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default  SolutionSection;