
// This is a utility for handling email sending
// Note: The actual email sending requires server-side code or an email service API
// You will need to replace the API keys and configuration later

// Email template for contact form
export const generateContactEmailTemplate = (formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) => {
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
          h1 { color: #1A1F2C; border-bottom: 2px solid #d4af37; padding-bottom: 10px; }
          .highlight { color: #d4af37; font-weight: bold; }
          .footer { margin-top: 30px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>New Contact Message</h1>
          <p><strong>From:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
          <div class="footer">
            <p>This message was sent from the contact form on your LIMO MO website.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

// Email template for booking form
export const generateBookingEmailTemplate = (bookingData: {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  pickupLocation: string;
  dropoffLocation: string;
  passengers: string;
  timeOfService: string;
  additionalInfo?: string;
  serviceDate: Date;
}) => {
  const dateFormatted = bookingData.serviceDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const vehicleNames = {
    'escalade': 'Cadillac Escalade (Black)',
    'escalade-white': 'Cadillac Escalade (White)',
    'suburban': 'Chevrolet Suburban'
  };
  
  const vehicleName = (vehicleNames as any)[bookingData.vehicle] || bookingData.vehicle;
  
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
          h1 { color: #1A1F2C; border-bottom: 2px solid #d4af37; padding-bottom: 10px; }
          .highlight { color: #d4af37; font-weight: bold; }
          .details { background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0; }
          .footer { margin-top: 30px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>New Booking Request</h1>
          <p>A new booking request has been submitted with the following details:</p>
          
          <div class="details">
            <p><strong>Customer Name:</strong> ${bookingData.name}</p>
            <p><strong>Email:</strong> ${bookingData.email}</p>
            <p><strong>Phone:</strong> ${bookingData.phone}</p>
            <p><strong>Vehicle:</strong> <span class="highlight">${vehicleName}</span></p>
            <p><strong>Date:</strong> ${dateFormatted}</p>
            <p><strong>Time:</strong> ${bookingData.timeOfService}</p>
            <p><strong>Number of Passengers:</strong> ${bookingData.passengers}</p>
            <p><strong>Pickup Location:</strong> ${bookingData.pickupLocation}</p>
            <p><strong>Drop-off Location:</strong> ${bookingData.dropoffLocation}</p>
            ${bookingData.additionalInfo ? `<p><strong>Additional Information:</strong> ${bookingData.additionalInfo}</p>` : ''}
          </div>
          
          <p>Please respond to the customer as soon as possible to confirm this booking.</p>
          
          <div class="footer">
            <p>This booking request was submitted through your LIMO MO website.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

// Function to send email - to be implemented with your email service
export const sendEmail = async (
  to: string,
  subject: string,
  htmlContent: string
): Promise<{ success: boolean; message: string }> => {
  try {
    // This is a placeholder for the actual email sending implementation
    // You'll need to replace this with your preferred email service API
    
    // For example, with EmailJS, SendGrid, or any other service
    // const response = await emailServiceApi.sendEmail({
    //   to,
    //   subject,
    //   html: htmlContent,
    //   from: 'your-configured-sender@example.com'
    // });
    
    console.log('Email would be sent with the following details:');
    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('Content:', htmlContent);
    
    // For now, we'll simulate a successful send
    return { 
      success: true, 
      message: 'Email sent successfully' 
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again later.'
    };
  }
};
