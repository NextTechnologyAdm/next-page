import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Jorman Sánchez",
    company: "PowFitness",
    comment: "La página web que me hicieron es increíble, mis clientes ahora pueden reservar clases en línea fácilmente.",
  },
  {
    name: "Pedro Luis Álvarez",
    company: "Axiología jurídica PLAF",
    comment: "El equipo entendió perfectamente mis necesidades y creó una aplicación que me permite precisar los datos de los documentos legales de forma rápida y eficiente.",
  },
  {
    name: "Ana Torres",
    company: "Cafeteria MAMAMELWEBO",
    comment: "Con la tienda online mis ventas se dispararon un 40% en solo dos meses.",
  },
];

export default function TestimoniosQuoteGrid() {
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Testimonios de Nuestros clientes
        </h2>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-black/10 border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-default"
            >
              <FaQuoteRight className="text-5xl text-[#6a5acd] block mb-4" />
              <p className="text-white mb-4">{t.comment}</p>
              <h3 className="text-lg font-semibold text-gray-400">{t.name}</h3>
              <p className="text-[#6a5acd] text-sm">{t.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
