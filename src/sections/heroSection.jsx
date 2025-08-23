import Orb from '../ui/Orb'
import { FaLongArrowAltRight, FaStar } from "react-icons/fa";

export default function Hero() {
    return  (
        <section id="hero" className='bg-[#070010] h-[100dvh]'>
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
            <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center flex flex-col gap-5'>
                <h1 className='text-white text-6xl font-bold'>Nex Technology</h1>
                <p className='text-gray-400 text-xl font-semibold'>Startup dígital para tu empresa</p>
            </div>
            <div className='absolute left-1/2 -translate-x-1/2 bottom-1/6 -translate-y-1/2 flex font-semibold text-lg gap-20 '>
                <button className='bg-white px-7 py-1 rounded-full flex items-center gap-5 cursor-pointer hover:shadow-lg hover:shadow-white/10 transition-all duration-300'>
                    <FaStar />
                    <span>Ver Servicios</span>
                </button>
                <button className='bg-white/5 border border-white/10 px-7 py-1 text-white rounded-full flex items-center gap-5 cursor-pointer hover:shadow-lg hover:shadow-white/10 transition-all duration-300'>
                    <span>Contacto</span>
                    <FaLongArrowAltRight />
                </button>
            </div>
        </section>
    )
}