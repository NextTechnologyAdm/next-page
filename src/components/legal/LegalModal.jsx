import React from 'react';

const LegalModal = ({ isOpen, onClose, type }) => {

  if (!isOpen) return null;

  const content = {
    privacy: {
      title:'Política de Privacidad',
      content:`
        <h3>1. Información que Recopilamos</h3>
        <p>En NexTechnology recopilamos información cuando nos contactas a través de nuestros formularios, incluyendo nombre, email, empresa y mensaje.</p>
        
        <h3>2. Uso de la Información</h3>
        <p>Utilizamos tu información para responder a tus consultas, proporcionar servicios tecnológicos y mejorar nuestra plataforma.</p>
        
        <h3>3. Protección de Datos</h3>
        <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales.</p>
        
        <h3>4. Tus Derechos</h3>
        <p>Tienes derecho a acceder, rectificar, eliminar y portar tus datos. Contacta: nextechnologyadm@gmail.com</p>
      `
    },
    cookies: {
      title:'Política de Cookies',
      content: `
        <h3>1. ¿Qué son las Cookies?</h3>
        <p>Las cookies son pequeños archivos que se almacenan en tu dispositivo para mejorar tu experiencia de navegación.</p>
        
        <h3>2. Cookies que Utilizamos</h3>
        <p>• <strong>Esenciales:</strong> Para el funcionamiento básico del sitio<br>
        • <strong>Analíticas:</strong> Para entender cómo usas nuestro sitio<br>
        • <strong>Preferencias:</strong> Para recordar tu idioma y tema</p>
        
        <h3>3. Control de Cookies</h3>
        <p>Puedes gestionar las cookies desde la configuración de tu navegador o contactarnos.</p>
      `
    },
    terms: {
      title:'Términos de Servicio',
      content:`
        <h3>1. Servicios</h3>
        <p>NexTechnology ofrece servicios de desarrollo web, aplicaciones móviles, consultoría IT e inteligencia artificial.</p>
        
        <h3>2. Uso Aceptable</h3>
        <p>Te comprometes a usar nuestros servicios de manera legal y ética, sin interferir con otros usuarios.</p>
        
        <h3>3. Propiedad Intelectual</h3>
        <p>Respetamos la propiedad intelectual. Los proyectos desarrollados siguen los acuerdos específicos de cada contrato.</p>
        
        <h3>4. Limitación de Responsabilidad</h3>
        <p>Nuestros servicios se proporcionan "tal como están". No garantizamos resultados específicos.</p>
        
        <h3>5. Contacto</h3>
        <p>Para consultas: nextechnologyadm@gmail.com | +58 412 735 9010</p>
      `
    }
  };

  const currentContent = content[type] || content.privacy;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-all duration-300"
        onClick={onClose}
      />
      <div 
        className="relative max-w-4xl w-full max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl"
        style={{
          background:'linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.95) 50%, rgba(51, 65, 85, 0.98) 100%)',
          backdropFilter: 'blur(32px)',
          border:'1px solid rgba(0, 191, 255, 0.2)',
          boxShadow:'0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(0, 191, 255, 0.1)'
        }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 px-8 py-6 border-b" style={{
          background:'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)',
          backdropFilter: 'blur(20px)',
          borderColor:'rgba(255, 255, 255, 0.1)'
        }}>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-picton-blue to-lavender-indigo flex items-center justify-center">
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-1">{currentContent.title}</h2>
                <p className="text-sm opacity-70">NexTechnology -  Startup Digital</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              style={{ color: '#e2e8f0' }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="group-hover:rotate-90 transition-transform duration-300">
                <path d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(85vh-140px)] px-8 py-6">
          <div 
            className="legal-content space-y-6"
            style={{ color:'#e2e8f0' }}
            dangerouslySetInnerHTML={{ __html: currentContent.content }}
          />
        </div>
        
        {/* Footer */}
        <div className="sticky bottom-0 px-8 py-4 border-t" style={{
          background:'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)',
          backdropFilter: 'blur(20px)',
          borderColor:'rgba(255, 255, 255, 0.1)'
        }}>
          <div className="flex justify-between items-center text-sm opacity-70">
            <span>{'Última actualización: Enero 2025'}</span>
            <span>nextechnologyadm@gmail.com</span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .legal-content h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 1.5rem 0 0.75rem 0;
          background: linear-gradient(135deg, #00BFFF, #8A2BE2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .legal-content h3:before {
          content: '';
          width: 4px;
          height: 1.25rem;
          background: linear-gradient(135deg, #00BFFF, #8A2BE2);
          border-radius: 2px;
          flex-shrink: 0;
        }
        
        .legal-content p {
          line-height: 1.7;
          margin: 0.75rem 0;
          font-size: 0.95rem;
          text-align: justify;
        }
        
        .legal-content strong {
          font-weight: 600;
          color: '#00BFFF';
        }
        
        .legal-content p:first-of-type {
          font-size: 1rem;
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
};

export default LegalModal;