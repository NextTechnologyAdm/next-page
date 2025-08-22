import React from 'react'
import { FaLightbulb, FaUsers, FaHandshake, FaRocket } from 'react-icons/fa';


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
    <section className="bg-gray-100 py-12">
      
    </section>
  )
}

export default AboutUsSection