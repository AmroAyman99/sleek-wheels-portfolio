
import emailjs from 'emailjs-com';
import { EMAIL_CONFIG } from './emailConfig';

// Initialize EmailJS with user ID
export const initEmailService = () => {
  if (EMAIL_CONFIG.userId) {
    emailjs.init(EMAIL_CONFIG.userId);
  }
};

// Function to send contact form email using EmailJS
export const sendContactEmail = async (data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
}) => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      from_phone: data.phone || 'Not provided',
      message: data.message,
      subject: data.subject || 'Contact Form Submission',
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

// Legacy function name for compatibility with Contact.tsx
export const sendEmail = sendContactEmail;

// Generate a HTML email template for contact form submissions
export const generateContactEmailTemplate = (data: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="color: #333; border-bottom: 1px solid #ddd; padding-bottom: 10px;">New Contact Form Submission</h2>
      
      <div style="margin: 20px 0;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${data.subject || 'No subject'}</p>
      </div>
      
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
        <h3 style="margin-top: 0;">Message:</h3>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      </div>
      
      <p style="font-size: 12px; color: #777; margin-top: 20px; text-align: center;">
        This is an automated message from your LIMO MO website contact form.
      </p>
    </div>
  `;
};

// Generate a HTML email template for booking requests (kept for compatibility but will not be used in new system)
export const generateBookingEmailTemplate = (data: any) => {
  const formattedDate = data.serviceDate ? new Date(data.serviceDate).toLocaleDateString() : 'Not specified';
  
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="color: #333; border-bottom: 1px solid #ddd; padding-bottom: 10px;">New Booking Request</h2>
      
      <div style="margin: 20px 0;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      </div>
      
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
        <h3 style="margin-top: 0;">Booking Details:</h3>
        <p><strong>Vehicle:</strong> ${data.vehicle}</p>
        <p><strong>Service Date:</strong> ${formattedDate}</p>
        <p><strong>Time of Service:</strong> ${data.timeOfService}</p>
        <p><strong>Number of Passengers:</strong> ${data.passengers}</p>
        <p><strong>Pickup Location:</strong> ${data.pickupLocation}</p>
        <p><strong>Dropoff Location:</strong> ${data.dropoffLocation}</p>
      </div>
      
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
        <h3 style="margin-top: 0;">Additional Information:</h3>
        <p>${(data.additionalInfo || 'None provided').replace(/\n/g, '<br>')}</p>
      </div>
      
      <p style="font-size: 12px; color: #777; margin-top: 20px; text-align: center;">
        This is an automated message from your LIMO MO website booking form.
      </p>
    </div>
  `;
};
