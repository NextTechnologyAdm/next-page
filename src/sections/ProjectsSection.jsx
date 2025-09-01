import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Comments from "../sections/CommentsSection";
import powPage from "../assets/images/pow-page.webp";
import automation from "../assets/images/automation-n8n.webp";

gsap.registerPlugin(ScrollTrigger);

const cases = [
  // Tu array de casos de éxito...
  {
    title: "Página web, precios y reservas para Gimnasio",
    problem: "El cliente no tenía presencia online ni sistema de reservas.",
    solution: "Desarrollamos una web con catálogo de servicios y sistema de reservas integrado.",
    result: "Presencia online establecida y aumento del 30% en reservas mensuales.",
    image: powPage,
    demo: "https://luis-alvarezf10.github.io/pow-page"
  },
  {
    title: "Pagina porno y juego multijugador porno",
    problem: "El cliente quería una plataforma interactiva para adultos.",
    solution: "Creamos una web con contenido para adultos y un juego multijugador integrado.",
    result: "Lanzamiento exitoso con más de 10,000 usuarios registrados en el primer mes.",
    image: "https://placehold.co/800x450",
    demo: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjZyvbUgbiPAxX_qf0HHf2eJYIQFnoECAsQAQ&url=https%3A%2F%2Fwww.xvideos.com%2Fhome%2Fen&usg=AOvVaw2dXrUacPZUTuCFMR16sPCc&opi=89978449"
  },
  {
    title: "Automatización Atención al cliente de Instagram",
    problem: "Nosotros queríamos mejorar la atención al cliente en Instagram.",
    solution: "Implementamos un chatbot que responde automáticamente a consultas comunes y dirige a los usuarios a recursos útiles.",
    result: "Reducción del tiempo de respuesta en un 50% y aumento de la satisfacción del cliente.",
    image: automation,
    demo: "https://www.instagram.com/nextechnology_ve"
  }
];

export default function CasosCarousel() {
  const scrollSectionRef = useRef(null);

  useEffect(() => {
    // Usamos gsap.matchMedia() para controlar la lógica por tamaño de pantalla
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const panels = gsap.utils.toArray(scrollSectionRef.current.children);

      const animacion = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: scrollSectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${scrollSectionRef.current.offsetWidth}`,
        },
      });

      return () => {
        animacion.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section id="projects"  className="min-h-screen py-20 bg-gradient-to-t from-[#0d0010] to-transparent">
      <div className="relative">
        {/* <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
          <Particles
            particleColors={['#6a5acd', '#0a0b2e', '#4adede', '#6b7280']}
            particleCount={400}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div> */}
        <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
          Casos de Éxito
        </h2>

        {/* El contenedor ahora es vertical por defecto y horizontal en md+ */}
        <div ref={scrollSectionRef} className="container h-full flex flex-col md:flex-row flex-nowrap md:h-screen items-center px-4 md:px-8">
          {cases.map((caso, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full p-4"
            >
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Sección de la imagen (izquierda en escritorio) */}
                  <div className="w-full md:w-1/2">
                    <img
                      src={caso.image}
                      alt={caso.title}
                      className="rounded-xl shadow-lg w-full"
                    />
                  </div>
                  {/* Sección de la descripción (derecha en escritorio) */}
                  <div className="w-full md:w-1/2 text-left">
                    <h3 className="p-2 bg-black/20 border border-white/5 rounded-xl text-2xl font-semibold mb-3 text-white">
                      {caso.title}
                    </h3>
                    <p className="text-gray-400 mb-2"><strong>Problema:</strong> {caso.problem}</p>
                    <p className="text-gray-400  mb-2"><strong>Solución:</strong> {caso.solution}</p>
                    <p className="text-[#6a5acd] dark:text-indigo-400 font-medium mb-4">
                      <strong>Resultado:</strong> {caso.result}
                    </p>
                    <a
                      href={caso.demo}
                      target="_blank"
                      className="inline-block bg-gradient-to-r from-[#6a5acd] to-[#4adede] px-8 py-2 rounded-lg font-semibold text-white hover:opacity-80 transition"
                    >
                      Ver Proyecto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Comments />
    </section>
  );
}