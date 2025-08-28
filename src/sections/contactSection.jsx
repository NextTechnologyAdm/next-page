import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { sendContactEmail, validateFormData } from '../utils/emailService';

const TEXT = {
  title: "¿Listo para empezar tu proyecto?",
  subtitle: "Completa el formulario o contáctanos directamente. Estamos aquí para ayudarte a crecer.",
  formTitle: "Envíanos tu mensaje",
  formName: "Tu nombre",
  formEmail: "Tu email",
  formPhone: "Tu teléfono (opcional)",
  formCompany: "Tu empresa (opcional)",
  formMessage: "Tu mensaje",
  formSubject: "Motivo de consulta",
  formButton: "Enviar mensaje",
  contactInfoTitle: "Otras formas de contactar",
  contactDescription: "Nos encantaría conocer tu proyecto y ofrecerte una solución a medida. Nos pondremos en contacto contigo en menos de 24 horas.",
  email: "nextechnologyadm@gmail.com",
  phone: "+58 412 735 9010",
  socialTitle: "Síguenos en redes",
  whatsapp: "+584127359010", // Número de WhatsApp para el enlace
  servicesList: [
    "Asesoria estrategica",
    "Diseño UX/UI",
    "Web Apps",
    "Chatbot-IA",
  ],
};

const ContactSection = () => {
  const [formState, setFormState] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    company: '',
    message: '',
    subject: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validar datos del formulario
    const validation = validateFormData(formState);
    if (!validation.isValid) {
      setSubmitStatus({ 
        type: 'error', 
        message: Object.values(validation.errors)[0] 
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await sendContactEmail(formState);
      
      if (result.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: '¡Mensaje enviado correctamente! Te contactaremos pronto.' 
        });
        // Limpiar formulario
        setFormState({ name: '', email: '', phone: '', company: '', message: '', subject: '' });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: result.message 
        });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Error inesperado. Por favor, intenta de nuevo.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 lg:px-16 text-white bg-[#0b0010]">
      <div className="container mx-auto max-w-7xl">
        {/* Encabezado */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
            {TEXT.title}
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">{TEXT.subtitle}</p>
        </motion.div>

        {/* Contenido principal: Formulario y Contacto */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Columna del formulario */}
          <motion.div variants={itemVariants} className="p-8 rounded-2xl border border-white/10 shadow-lg backdrop-blur-sm bg-white/5 h-full lg:order-1">
            <h3 className="text-2xl font-semibold mb-6 text-white">{TEXT.formTitle}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder={TEXT.formName}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 peer"
                />
                <span className="absolute inset-0 rounded-lg border-2 border-transparent pointer-events-none group-focus-within:border-purple-400 group-focus-within:animate-pulse-slow"></span>
              </div>
              
              <div className="relative group">
                <select
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 peer"
                >
                  <option value="" disabled className='text-white/50 bg-gray-900'>{TEXT.formSubject}</option>
                  {TEXT.servicesList.map((service, index) => (
                    <option key={index} value={service} className='bg-gray-900 text-white'>{service}</option>
                  ))}
                </select>
                <span className="absolute inset-0 rounded-lg border-2 border-transparent pointer-events-none group-focus-within:border-cyan-400 group-focus-within:animate-pulse-slow"></span>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder={TEXT.formEmail}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 peer"
                />
                <span className="absolute inset-0 rounded-lg border-2 border-transparent pointer-events-none group-focus-within:border-purple-400 group-focus-within:animate-pulse-slow"></span>
              </div>
              <div className="relative group">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder={TEXT.formPhone}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 peer"
                />
                <span className="absolute inset-0 rounded-lg border-2 border-transparent pointer-events-none group-focus-within:border-cyan-400 group-focus-within:animate-pulse-slow"></span>
              </div>
              <div className="relative group">
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  placeholder={TEXT.formCompany}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 peer"
                />
                <span className="absolute inset-0 rounded-lg border-2 border-transparent pointer-events-none group-focus-within:border-purple-400 group-focus-within:animate-pulse-slow"></span>
              </div>
              <div className="relative group">
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder={TEXT.formMessage}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 peer"
                ></textarea>
                <span className="absolute inset-0 rounded-lg border-2 border-transparent pointer-events-none group-focus-within:border-purple-400 group-focus-within:animate-pulse-slow"></span>
              </div>
              {submitStatus && (
                <div className={`p-3 rounded-lg text-center font-medium ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 shadow-md transform ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-600 to-cyan-400 hover:from-purple-700 hover:to-cyan-500 hover:scale-[1.01]'
                }`}
              >
                {isSubmitting ? 'Enviando...' : TEXT.formButton}
              </button>
            </form>
          </motion.div>

          {/* Columna de información de contacto */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-8 lg:order-2">
            <h3 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300 mb-4">{TEXT.contactInfoTitle}</h3>
            <p className="text-white/80 mb-6 max-w-lg">{TEXT.contactDescription}</p>
            
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-white/10 flex-shrink-0">
                <FiMail className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold text-lg pr-40 text-white/90">Email</h4>
                <a href={`mailto:${TEXT.email}`} className="text-white/70 hover:text-cyan-300 transition-colors duration-300 break-all">{TEXT.email}</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-white/10 flex-shrink-0">
                <FiPhone className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold text-lg pr-10 text-white/90">Teléfono</h4>
                <a href={`tel:${TEXT.phone}`} className="text-white/70 hover:text-cyan-300 transition-colors duration-300 break-all">{TEXT.phone}</a>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-4 text-white/90">{TEXT.socialTitle}</h4>
              <div className="flex space-x-4 justify-center">
                <a href={`https://wa.me/${TEXT.whatsapp}`} aria-label="WhatsApp" className="p-3 rounded-full bg-white/10 hover:bg-green-600/30 transition-colors duration-300">
                  <FaWhatsapp className="w-6 h-6 text-green-400" />
                </a>
                <a href="https://www.instagram.com/nextechnology_ve/" aria-label="Instagram" className="p-3 rounded-full bg-white/10 hover:bg-pink-600/30 transition-colors duration-300">
                  <FaInstagram className="w-6 h-6 text-pink-400" />
                </a>
                <a href="https://www.linkedin.com/in/nextechnology-adm-404166381/" aria-label="LinkedIn" className="p-3 rounded-full bg-white/10 hover:bg-blue-600/30 transition-colors duration-300">
                  <FaLinkedin className="w-6 h-6 text-blue-400" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;