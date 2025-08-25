import Orb from '../ui/Orb'
import { FaLongArrowAltRight, FaStar } from "react-icons/fa";

export default function Hero() {
    return  (
        <section id="hero" className='bg-[#070010] h-[100vh]'>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <Orb
                    hoverIntensity={0.2}
                    rotateOnHover={false}
                    hue={0}
                    forceHoverState={true}
                />
            </div>
            <div className='absolute left-1/2 -translate-x-1/2 top-1/2 top-1/4 text-white bg-white/5 px-10 py-1 rounded-full border border-white/10 font-semibold'>
                <span>Bienvenido!</span>
            </div>
            <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center flex flex-col gap-5 w-full'>
                <h1 className='text-white text-5xl md:text-6xl font-bold rop-shadow-lg drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]'>Nex Technology</h1>
                <p className='text-gray-400 text-xl font-semibold'>Startup dígital para tu empresa</p>
            </div>
            <div className="absolute bottom-1/8 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row gap-4 md:gap-20 font-semibold z-10">
                {/* Botón principal */}
                <button className="bg-white text-black px-6 md:px-8 py-2 md:py-1 rounded-full flex items-center justify-center gap-3 cursor-pointer hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-sm md:text-lg">
                    <FaStar />
                    <span>Ver Servicios</span>
                </button>

                {/* Botón secundario */}
                <button className="bg-white/10 border border-white/20 px-6 md:px-8 py-2 md:py-0.5 text-white rounded-full flex items-center justify-center gap-3 cursor-pointer hover:bg-white/20 hover:scale-105 transition-all duration-300 text-sm md:text-lg">
                    <span>Contacto</span>
                    <FaLongArrowAltRight />
                </button>
            </div>

        </section>
    )
}