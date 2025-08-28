import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "María López",
    company: "GymFit",
    comment: "Muy profesionales, la app quedó mejor de lo esperado y mis clientes la aman.",
  },
  {
    name: "Carlos Pérez",
    company: "NutriShop",
    comment: "Gracias a su sistema de reservas ahora manejo +300 citas al mes sin complicaciones.",
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
