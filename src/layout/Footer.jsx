import logo from '../assets/images/nex-white.png'
import LegalLinks from '../components/legal/LegalLinks';
import React from 'react';

// Constante movida fuera para evitar recreación
const FOOTER_TEXTS = {
    companyDesc: 'Somos una startup digital emergente apasionada por la innovación tecnológica. Transformamos ideas en realidad digital con soluciones ágiles y costos-efectivas.',
    services: 'Servicios',
    servicesList: ['Desarrollo Web', 'Apps Móviles', 'Chatbots (IA)', 'Diseño UX/UI', 'Y más...'],
    contact: 'Contacto',
    email: 'nextechnologyadm@gmail.com',
    phone: '+58 412 735 9010',
    location: 'Lecheria, Venezuela',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Servicio',
    cookies: 'Cookies',
    copyright: '© 2025 NexTechnology. Todos los derechos reservados.'
};

function Footer() {
  
  const TEXT = FOOTER_TEXTS;
  return (
    <footer className={`bg-gradient-to-br from-[#0A0A0F] via-[#16213E] to-[#0F3460]  relative overflow-hidden transition-all duration-1000 ease-in-out`}>
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-10 left-10 w-32 h-32  bg-[#00BFFF]/10 rounded-full blur-2xl`}></div>
        <div className={`absolute bottom-10 right-10 w-24 h-24  bg-[#8A2BE2]/10 rounded-full blur-2xl`}></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="py-12 px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 flex flex-col h-full justify-between">
              <div className="flex items-center space-x-5 mb-6">
                <div className='w-20 h-20'>
                  <img src={logo} alt='NexTechnology' className='w-30 h-30 absolute top-5 left-15' />

                </div>
                <div>
                  <h3 className={`text-2xl font-bold text-white`}>
                    <span className="gradient-text">NexTechnology</span>
                  </h3>
                  <p className='text-white/70 text-sm'>Startup Digital</p>
                </div>
              </div>
              <p className='text-white/80 mb-4 pl- leading-relaxed max-w-md text-left'>
                {TEXT.companyDesc}
              </p>
            </div>
            {/* Services */}
            <div>
              <h4 className={`text-lg font-bold mb-6 flex items-center text-white`}>
                <div className="w-1 h-6 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] rounded-full mr-3"></div>
                {TEXT.services}
              </h4>
              <ul className="space-y-3">
                {TEXT.servicesList.map((service, idx) => (
                  <li key={idx}>
                    <span className={`text-white/70 hover:text-white transition-colors duration-300 flex items-center group`}>
                      <div className="w-1 h-1 bg-[#00BFFF] rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h4 className={`text-lg font-bold mb-6 flex items-center text-white`}>
                <div className="w-1 h-6 bg-gradient-to-r from-[#8A2BE2] to-[#00BFFF] rounded-full mr-3"></div>
                {TEXT.contact}
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 6l-10 7L2 6" />
                    </svg>
                  </div>
                  <span className={` text-white/70 group-hover:text-white transition-colors duration-300 text-sm leading-tight`}>{TEXT.email}</span>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#8A2BE2] to-[#00BFFF] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className={`text-white/70 group-hover:text-white transition-colors duration-300 text-sm leading-tight`}>{TEXT.phone}</span>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className={`text-white/70 group-hover:text-white transition-colors duration-300 text-sm leading-tight`}>{TEXT.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className={`border-t py-6 px-25  border-white/10`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className={`text-white/70 text-sm`}>{TEXT.copyright}</div>
            <LegalLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;