import React from 'react'


const AboutUsSection = () => {
  const TEXT = {
    title: "¿Quiénes somos?",
    description: "Somos un equipo de desarrolladores apasionados dedicados a construir aplicaciones web de alta calidad. Nuestra misión es crear soluciones eficientes y fáciles de usar que satisfagan las necesidades de nuestros clientes siguiendo nuestros ideales.",
    ideals: [
      {
        icon: 
        title: 'Innovación',
        description: 'Nos esforzamos por estar a la vanguardia de la tecnología, implementando las últimas tendencias y herramientas en nuestros proyectos.'
      },
      {
        icon: 
        title: 'Talento',
        description: 'Contamos con un equipo diverso de programadores capacitados, cada uno aportando su experiencia única para lograr resultados excepcionales.'
      },
      {
        icon: 
        title: 'Compromiso',
        description: 'Nos comprometemos a entregar proyectos de alta calidad, cumpliendo con los plazos y superando las expectativas de nuestros clientes.'
      },
      {
        icon:  
        title: 'Cultura startup',
        description: 'Fomentamos un ambiente de trabajo dinámico y colaborativo, donde la creatividad y la innovación son valoradas.'
      }
    ]
  }

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          We are a team of passionate developers dedicated to building high-quality web applications. Our mission is to create user-friendly and efficient solutions that meet the needs of our clients.
        </p>
        <p className="text-lg text-gray-700">
          With years of experience in the industry, we pride ourselves on our ability to deliver projects on time and within budget. We believe in continuous learning and staying up-to-date with the latest technologies to provide the best possible service.
        </p>
      </div>
    </section>
  )
}

export default AboutUsSection