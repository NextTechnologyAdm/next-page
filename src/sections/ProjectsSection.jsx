import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Comments from "../sections/CommentsSection";
import Particles from "../ui/Particles";

gsap.registerPlugin(ScrollTrigger);

const cases = [
  // Tu array de casos de éxito...
  {
    title: "Reservas Online para Gimnasio",
    problem: "El cliente necesitaba automatizar el registro de clases y evitar la sobreocupación.",
    solution: "Creamos una plataforma web con reservas en tiempo real y notificaciones por email.",
    result: "+300 reservas al mes gestionadas sin errores.",
    image: "https://placehold.co/800x450",
    demo: "#"
  },
  {
    title: "E-commerce de Suplementos",
    problem: "El cliente vendía manualmente por WhatsApp, lo que ralentizaba las ventas.",
    solution: "Desarrollamos una tienda online con carrito y pasarela de pagos integrada.",
    result: "Incremento del 40% en ventas en los primeros 2 meses.",
    image: "https://placehold.co/800x450",
    demo: "#"
  },
  {
    title: "Dashboard Empresarial",
    problem: "La empresa no tenía control sobre métricas clave de sus operaciones.",
    solution: "Creamos un panel web con gráficas interactivas y reportes automáticos.",
    result: "Mejora en la toma de decisiones y ahorro de 20 horas semanales de gestión.",
    image: "https://placehold.co/800x450",
    demo: "#"
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
    <section id="projects">
      <div className="relative">
        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
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
        </div>
        <h2 className="text-4xl font-bold mb-12 text-white">
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
                    <h3 className="text-2xl font-semibold mb-3 text-white">
                      {caso.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Problema:</strong> {caso.problem}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solución:</strong> {caso.solution}</p>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
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