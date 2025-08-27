import logo from '../assets/images/nex-white.png'
import LegalLinks from '../components/legal/LegalLinks';
import React, { useMemo } from 'react';

// Constante movida fuera para evitar recreación
const FOOTER_TEXTS = {
    companyDesc: 'Somos una startup digital emergente apasionada por la innovación tecnológica. Transformamos ideas en realidad digital con soluciones ágiles y costos-efectivas.',
    services: 'Servicios',
    servicesList: ['Desarrollo Web', 'Apps Móviles', 'APIs & Backend', 'Diseño UX/UI'],
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
                <img src={logo} alt='NexTechnology' className='w-12 h-12' />
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
              {/* Redes sociales */}
              <div className="flex gap-4 mb-6 md:mb-0 pl-10">
                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-colors duration-300 group hover:bg-[#E1306C]/20">
                  { 
                    (
                    <svg className="w-5 h-5 text-white group-hover:text-[#E1306C] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a5.25 5.25 0 1 1-5.25 5.25 5.25 5.25 0 0 1 5.25-5.25zm0 1.5a3.75 3.75 0 1 0 3.75 3.75A3.75 3.75 0 0 0 12 5.25zm5.25 1.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
                    </svg>
                    )
                  }
                </a>
                {/* X (Twitter) */}
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-colors duration-300 group hover:bg-[#000]/20">
                  {
                    (
                    <svg className="w-5 h-5 text-white group-hover:text-[#000] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.53 2H21.5l-7.39 8.42L22.5 22h-7.19l-5.7-6.5L2.47 22H.5l7.93-9.02L1.5 2h7.19l5.19 5.93L17.53 2zm-2.13 17.5h2.13l-5.7-6.5-2.13 2.5 5.7 6.5zm-7.19-15l5.19 5.93L6.5 4.5zm13.19 0l-5.7 6.5 2.13 2.5 5.7-6.5z" />
                    </svg>
                    )
                  }
                </a>
                {/* LinkedIn */}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-colors duration-300 group hover:bg-[#0077B5]/20">
                  <svg className={`w-5 h-5 text-white group-hover:text-[#0077B5] transition-colors duration-300`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z" />
                  </svg>
                </a>
              </div>
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