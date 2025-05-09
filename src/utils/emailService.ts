
import emailjs from 'emailjs-com';
import { EMAIL_CONFIG } from './emailConfig';

// Initialize EmailJS with user ID
export const initEmailService = () => {
  if (EMAIL_CONFIG.userId) {
    emailjs.init(EMAIL_CONFIG.userId);
  }
};

export const sendContactEmail = async (data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      from_phone: data.phone || 'Not provided',
      message: data.message,
      to_email: EMAIL_CONFIG.targetEmail,
    };
    
    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams
    );
    
    return {
      success: true,
      message: 'Message sent successfully!',
      response
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again later.',
      error
    };
  }
};
