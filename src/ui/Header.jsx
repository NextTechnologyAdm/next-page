import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'hero', name: 'Inicio' },
    { id: 'aboutus', name: 'Sobre Nosotros' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      setScrollProgress(progress);

      // Mostrar/ocultar navbar
      setIsVisible(scrolled > 0);

      // Detectar sección activa
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
    // ${
    //     isVisible ? 'bg-black/30 translate-y-0' : 'bg-gray-900/0 -translate-y-full'
    //   }
      className='fixed z-50 backdrop-blur-sm border-b border-white/10 transition-all duration-500 w-full'
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className='flex justify-center items-center text-white font-bold'>
            <img src="/assets/images/nex-white.png" alt="logo de nex" className='w-30' />
            <span>Nex Technology</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-md font-medium transition-colors cursor-pointer ${
                  activeSection === section.id 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>
                  {section.name}
                </span>
                <div
                  className={`transition-all duration-300 h-[2px] w-full rounded ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-[#00deff] to-[#9965f0] opacity-100'
                      : 'bg-transparent opacity-0'
                  }`}
                ></div>
              </button>
            ))}
            <button className="bg-white py-1 px-3 font-semibold rounded-full text-[#354345] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">Contacto</button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden ">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className=" p-3 text-white cursor-pointer rounded-full transition-all duration-300 "
              style={{ background: isMobileMenuOpen ? "rgba(255, 255, 255, 0.05)" : "none" }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/20 backdrop-blur-md border-t border-white/20 shadow-2xl">
          <div className="px-6 py-6 space-y-2">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => {
                  scrollToSection(section.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  activeSection === section.id 
                    ? 'text-black bg-white shadow-lg shadow-white/10' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: 'slideInFromRight 0.3s ease-out forwards'
                }}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Barra de progreso */}
      <div className="h-1 bg-white/5">
        <div 
          className="h-full bg-gradient-to-r from-[#00deff] to-[#9965f0] transition-all duration-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
  </motion.header>
  );
}