import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Jorman Sánchez",
    company: "Pow Fitness",
    comment: "La página web para mi gimnasio me parece chévere, ahora tengo una interacción más profesional a nivel online.",
  },
  {
    name: "Pedro Luis Álvarez",
    company: "Axiología jurídica PLAF",
    comment: "El equipo entendió perfectamente mis necesidades y creó una aplicación que me permite precisar los datos de los documentos legales de forma rápida y eficiente.",
  },
  {
    name: "Luis Martínez",
    company: "Casa de Abrigo Negra Hipólita II",
    comment: "Como director de una casa de abrigo, la solución dígital me permitió gestionar de manera óptima los insumos.",
  },
];

export default function TestimoniosQuoteGrid() {
  return (
    <section className="py-16 relative">
      {/* Brillos difuminados de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 opacity-20"
          style={{ 
            background: 'radial-gradient(circle, rgba(0, 227, 254, 0.3) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 opacity-15"
          style={{ 
            background: 'radial-gradient(circle, rgba(106, 90, 205, 0.4) 0%, transparent 70%)',
            filter: 'blur(50px)'
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10"
          style={{ 
            background: 'radial-gradient(circle, rgba(0, 227, 254, 0.5) 0%, transparent 60%)',
            filter: 'blur(60px)'
          }}
        ></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-white">
          Testimonios de Nuestros clientes
        </h2>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-black/10 border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-default relative overflow-hidden"
            >
              {/* Brillo individual para cada tarjeta */}
              <div 
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ 
                  background: `radial-gradient(circle at ${i % 2 === 0 ? 'top left' : 'bottom right'}, rgba(0, 227, 254, 0.6) 0%, transparent 50%)`,
                  filter: 'blur(20px)'
                }}
              ></div>
              
              <FaQuoteRight className="text-5xl text-[#6a5acd] block mb-4 opacity-70 relative z-10" />
              <p className="text-white mb-4 relative z-10">{t.comment}</p>
              <h3 className="text-lg font-semibold text-gray-400 relative z-10">{t.name}</h3>
              <p className="text-[#6a5acd] text-sm relative z-10">{t.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
