import emailjs from '@emailjs/browser';

// Configuración de EmailJS - Usar variables de entorno
const EMAIL_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};

// Configuración de reintentos y timeout
const MAX_RETRIES = 3;
const INITIAL_DELAY = 1000; // 1 segundo
const TIMEOUT_DURATION = 8000; // 8 segundos

// Función auxiliar para reintentos con exponential backoff
const sendWithRetry = async (attempt = 1) => {
  if (!EMAIL_CONFIG.publicKey || !EMAIL_CONFIG.serviceId || !EMAIL_CONFIG.templateId) {
    throw new Error('EmailJS: Las variables de entorno para el servicio no están configuradas.');
  }

  const { formData } = sendWithRetry.requestData;

  const emailData = {
    // Campos que usaste en la plantilla HTML
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone || 'No especificado',
    company: formData.company || 'No especificada',
    subject: formData.subject || 'Consulta General',
    service: formData.subject || 'Consulta General', // Alternativa por si usas 'service'
    motivo: formData.subject || 'Consulta General', // Alternativa por si usas 'motivo'
    message: formData.message,
    date: new Date().toLocaleString('es-ES', {
      timeZone: 'America/Caracas',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  };
  
  // Debug: mostrar datos que se envían
  console.log('Datos enviados a EmailJS:', emailData);
  
  try {
    // Usar Promise.race para implementar el timeout
    const response = await Promise.race([
      emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        emailData,
        EMAIL_CONFIG.publicKey
      ),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('EmailJS: Request timed out')), TIMEOUT_DURATION)
      )
    ]);
    return response;
  } catch (error) {
    console.warn(`Intento ${attempt} fallido: ${error.message}`);
    // Reintentar solo si es un error de red o timeout
    if (
      (error instanceof Error && error.message === 'EmailJS: Request timed out') ||
      (error.status && error.status >= 500) || // Errores de servidor
      !navigator.onLine
    ) {
      if (attempt < MAX_RETRIES) {
        const delay = INITIAL_DELAY * Math.pow(2, attempt - 1);
        console.log(`Reintentando en ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        return sendWithRetry(attempt + 1); // Llamada recursiva con nuevo intento
      }
    }
    // Si no hay más reintentos o el error no es de red, lanzar el error
    throw error;
  }
};

// Función principal para enviar email
export const sendContactEmail = async (formData) => {
  try {
    sendWithRetry.requestData = { formData };
    const response = await sendWithRetry();
    return {
      success: true,
      message: 'Email enviado correctamente',
      response
    };
  } catch (error) {
    console.error('Error enviando email:', error);
    return {
      success: false,
      message: 'Error al enviar el email. Por favor, intenta de nuevo más tarde.',
      error: error.message
    };
  }
};


// Función alternativa usando fetch para envío directo (requiere backend)
export const sendContactEmailDirect = async (formData) => {
  try {
    // Esta función requeriría un backend para funcionar
    // Por ahora, simularemos el envío
    
    const emailContent = {
      to: 'nextechnologyadm@gmail.com',
      subject: formData.service || 'Nueva Consulta - Nex-Technology',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #00BFFF, #8A2BE2); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Nueva Consulta de Contacto</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0;">Nex-Technology</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 25px;">
              <h2 style="color: #1e293b; margin-bottom: 15px; font-size: 18px; border-bottom: 2px solid #00BFFF; padding-bottom: 5px;">
                👤 Información del Cliente
              </h2>
              <p style="margin: 8px 0; color: #475569;"><strong>Nombre:</strong> ${formData.name}</p>
              <p style="margin: 8px 0; color: #475569;"><strong>Email:</strong> ${formData.email}</p>
              <p style="margin: 8px 0; color: #475569;"><strong>Empresa:</strong> ${formData.company || 'No especificada'}</p>
            </div>
            
            <div style="margin-bottom: 25px;">
              <h2 style="color: #1e293b; margin-bottom: 15px; font-size: 18px; border-bottom: 2px solid #8A2BE2; padding-bottom: 5px;">
                🎯 Servicio de Interés
              </h2>
              <p style="margin: 8px 0; color: #475569; background: #f1f5f9; padding: 10px; border-radius: 5px; font-weight: bold;">
                ${formData.service || 'No especificado'}
              </p>
            </div>
            
            <div style="margin-bottom: 25px;">
              <h2 style="color: #1e293b; margin-bottom: 15px; font-size: 18px; border-bottom: 2px solid #00FF88; padding-bottom: 5px;">
                💬 Mensaje
              </h2>
              <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #00BFFF;">
                <p style="margin: 0; color: #475569; line-height: 1.6;">${formData.message}</p>
              </div>
            </div>
            
            <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; text-align: center; color: #64748b; font-size: 14px;">
              <p style="margin: 5px 0;">📅 Fecha: ${new Date().toLocaleString('es-ES', {
                timeZone: 'America/Caracas',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</p>
              <p style="margin: 5px 0;">🌐 Enviado desde: Nex-Technology Landing Page</p>
            </div>
          </div>
        </div>
      `
    };


    return {
      success: true,
      message: 'Email enviado correctamente'
    };

  } catch (error) {
    return {
      success: false,
      message: 'Error al enviar el email',
      error: error.message
    };
  }
};

// Validar datos del formulario
export const validateFormData = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres';
  }

  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Por favor ingresa un email válido';
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres';
  }

  if (!formData.subject) {
    errors.subject = 'Por favor selecciona un motivo de consulta';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export default {
  sendContactEmail,
  sendContactEmailDirect,
  validateFormData
};