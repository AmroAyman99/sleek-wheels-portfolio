
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon, Car } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { generateBookingEmailTemplate, sendEmail } from "@/utils/emailService";

const vehicles = [
  { id: 'escalade', name: 'Cadillac Escalade (Black)' },
  { id: 'escalade-white', name: 'Cadillac Escalade (White)' },
  { id: 'suburban', name: 'Chevrolet Suburban' }
];

const Book = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    pickupLocation: '',
    dropoffLocation: '',
    passengers: '',
    timeOfService: '',
    additionalInfo: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSelectChange = (value: string, field: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      toast({
        title: "Date Required",
        description: "Please select a service date.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const bookingData = {
        ...formData,
        serviceDate: date
      };
      
      console.log('Booking submitted', bookingData);
      
      // Generate email content from template
      const emailContent = generateBookingEmailTemplate(bookingData);
      
      // Send the email
      const result = await sendEmail(
        'mohamed_hassan10010@yahoo.com', // Replace with your actual email when configuring
        `New Booking Request from ${formData.name}`,
        emailContent
      );
      
      if (result.success) {
        toast({
          title: "Booking Request Sent",
          description: "Thank you for your request. We'll get back to you shortly to confirm your booking.",
          duration: 5000
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          vehicle: '',
          pickupLocation: '',
          dropoffLocation: '',
          passengers: '',
          timeOfService: '',
          additionalInfo: ''
        });
        setDate(undefined);
      } else {
        toast({
          title: "Error",
          description: result.message || "Something went wrong. Please try again later.",
          variant: "destructive",
          duration: 5000
        });
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast({
        title: "Error",
        description: "Failed to submit your booking. Please try again later.",
        variant: "destructive",
        duration: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-luxury-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
              Book Your <span className="gold-text">Ride</span>
            </h1>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Reserve your luxury transportation experience with LIMO MO. Complete the form below and we'll get back to you promptly to confirm your booking.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-6">
                    Personal <span className="gold-text">Information</span>
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-6">
                    Booking <span className="gold-text">Details</span>
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="vehicle">Select Vehicle</Label>
                      <Select 
                        onValueChange={(value) => handleSelectChange(value, 'vehicle')}
                        value={formData.vehicle}
                        required
                      >
                        <SelectTrigger className="mt-1">
                          <div className="flex items-center gap-2">
                            <Car className="h-4 w-4 text-luxury-primary" />
                            <SelectValue placeholder="Choose a vehicle" />
                          </div>
                        </SelectTrigger>
                        <SelectContent>
                          {vehicles.map((vehicle) => (
                            <SelectItem key={vehicle.id} value={vehicle.id}>
                              {vehicle.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="serviceDate">Service Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full mt-1 justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Select a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => {
                              const today = new Date();
                              today.setHours(0, 0, 0, 0);
                              return date < today;
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div>
                      <Label htmlFor="timeOfService">Time of Service</Label>
                      <Input
                        type="time"
                        id="timeOfService"
                        name="timeOfService"
                        value={formData.timeOfService}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="passengers">Number of Passengers</Label>
                      <Input
                        type="number"
                        id="passengers"
                        name="passengers"
                        min="1"
                        max="12"
                        value={formData.passengers}
                        onChange={handleChange}
                        placeholder="1-12"
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <Label htmlFor="pickupLocation">Pickup Location</Label>
                      <Input
                        id="pickupLocation"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        placeholder="Enter full address"
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <Label htmlFor="dropoffLocation">Drop-off Location</Label>
                      <Input
                        id="dropoffLocation"
                        name="dropoffLocation"
                        value={formData.dropoffLocation}
                        onChange={handleChange}
                        placeholder="Enter full address"
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        placeholder="Any specific requirements or special instructions..."
                        className="mt-1 min-h-[100px]"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <Button 
                    type="submit"
                    className="bg-luxury-primary hover:bg-luxury-primary/90 text-black"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-8">
              Booking <span className="gold-text">Information</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold mb-4">How Booking Works</h3>
                <p className="text-gray-700">
                  After submitting your booking request, our team will review it and contact you within 24 hours to confirm your reservation, discuss any specific requirements, and arrange payment. For urgent bookings, please contact us directly at (202) 555-0123.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold mb-4">Cancellation Policy</h3>
                <p className="text-gray-700">
                  Cancellations made at least 24 hours before the scheduled service will receive a full refund. Cancellations made less than 24 hours before the service will be charged a 50% fee. No-shows will be charged the full amount.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold mb-4">Payment Methods</h3>
                <p className="text-gray-700">
                  We accept all major credit cards, PayPal, and bank transfers. A 50% deposit is required at the time of booking to secure your reservation, with the remaining balance due before or at the time of service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Book;
