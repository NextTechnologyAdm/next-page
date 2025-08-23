import React from 'react'
import { FaLightbulb, FaUsers, FaHandshake, FaRocket } from 'react-icons/fa';
import  SplitText  from "../ui/TextEffects/SplitText";
import { MagicCard } from "../components/magicui/magic-card";


const AboutUsSection = () => {
  const TEXT = {
    title: "¿Quiénes somos?",
    description: "Somos un equipo de desarrolladores apasionados dedicados a construir aplicaciones web de alta calidad. Nuestra misión es crear soluciones eficientes y fáciles de usar que satisfagan las necesidades de nuestros clientes siguiendo nuestros ideales.",
    ideals: [
      {
        icon: <FaLightbulb className="text-2xl text-blue-500" />,
        title: 'Innovación',
        description: 'Nos esforzamos por estar a la vanguardia de la tecnología, implementando las últimas tendencias y herramientas en nuestros proyectos.'
      },
      {
        icon: <FaUsers className='text-2xl text-green-500' />,
        title: 'Talento',
        description: 'Contamos con un equipo diverso de programadores capacitados, cada uno aportando su experiencia única para lograr resultados excepcionales.'
      },
      {
        icon: <FaHandshake className='text-2xl text-yellow-500' />, 
        title: 'Compromiso',
        description: 'Nos comprometemos a entregar proyectos de alta calidad, cumpliendo con los plazos y superando las expectativas de nuestros clientes.'
      },
      {
        icon: <FaRocket className='text-2xl text-red-500' />, 
        title: 'Cultura startup',
        description: 'Fomentamos un ambiente de trabajo dinámico y colaborativo, donde la creatividad y la innovación son valoradas.'
      }
    ]
  }

  return (
    <section className=" text-white py-24 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto max-w-7xl">
        <header className="m-16 text-center">
          <SplitText
            text={TEXT.title}
            className="text-4xl md:text-5xl font-bold mb-4"
            delay={100}
            duration={0.6}
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />
          <p className="text-xl max-w-3xl mx-auto mt-4">
            {TEXT.description}
          </p>
        </header>

        <div className="relative flex flex-col items-center">
          {/* La línea de tiempo vertical central */}
          <div className="absolute w-1 h-full bg-[#6a5acd]/30 rounded-full left-1/2 transform -translate-x-1/2"></div>
          
          {/* Contenedor de las tarjetas en una sola columna */}
          <div className="flex flex-col gap-y-20 w-full">
            {TEXT.ideals.map((ideal, index) => (
              <div
                key={index}
                className={`relative z-10 w-full md:w-1/2 group p-6 transition-all duration-300 transform hover:scale-105 ${
                  index % 2 === 0 
                    ? 'md:self-start md:text-right' 
                    : 'md:self-end md:text-left'
                }`}
              >
                <MagicCard
                  className="p-6 rounded-xl border shadow-lg hover:shadow-xl transition-shadow duration-300"
                  gradientColor='#6a5acd' // lavender-indigo
                  gradientFrom="#6a5acd" // lavender-indigo con opacidad
                  gradientTo="#4adede" // picton-blue transparente
                  gradientSize={100}
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                    <div className={`mb-4 text-3xl transition-colors duration-300`}>
                      {ideal.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
                      {ideal.title}
                    </h3>
                    <p className="text-sm md:text-base">
                      {ideal.description}
                    </p>
                  </div>
                </MagicCard>
                {/* El círculo que conecta la tarjeta a la línea de tiempo */}
                <div className={`absolute top-1/2 -mt-2 w-4 h-4 rounded-full border-2 transform -translate-y-1/2 
                  ${index % 2 === 0 ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'}`}>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection