import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Comments from "../sections/CommentsSection";

const cases = [
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
  const [index, setIndex] = useState(0);
  const nextCase = () => setIndex((index + 1) % cases.length);
  const prevCase = () => setIndex((index - 1 + cases.length) % cases.length);

  return (
    <section id="projects" className="py-16 bg-gradient-to-t from-[#0b0010] to trasparent">
      <div className="max-w-5xl mx-auto px-6 text-center py-5">
        <h2 className="text-4xl font-bold mb-12 text-white">
          Casos de Éxito 
        </h2>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <img
                src={cases[index].image}
                alt={cases[index].title}
                className="rounded-xl shadow-lg w-full mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-white">
                {cases[index].title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Problema:</strong> {cases[index].problem}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solución:</strong> {cases[index].solution}</p>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                <strong>Resultado:</strong> {cases[index].result}
              </p>
              <a
                href={cases[index].demo}
                target="_blank"
                className="bg-gradient-to-r from-[#6a5acd] to-[#4adede] px-8 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Ver Proyecto
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Controles */}
          <div className="flex justify-between mt-8 font-semibold">
            <button
              onClick={prevCase}
              className="bg-white/10 border border-white/20 px-6 md:px-8 py-2 md:py-0.5 text-white rounded-full flex items-center justify-center gap-3 cursor-pointer text-sm md:text-lg"
            >
              ← Anterior
            </button>
            <button
              onClick={nextCase}
              className="bg-white text-black px-6 md:px-8 py-2 md:py-1 rounded-full flex items-center justify-center gap-3 cursor-pointer text-sm md:text-lg"
            >
              Siguiente →
            </button>
          </div>
        </div>
      </div>
        <Comments />    
    </section>
  );
}
