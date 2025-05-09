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
import { CalendarIcon, Car, Phone, MessageSquare } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const vehicles = [
  { id: 'escalade', name: 'Cadillac Escalade' },
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

  // Format booking details for SMS
  const formatBookingDetails = () => {
    const vehicleName = vehicles.find(v => v.id === formData.vehicle)?.name || formData.vehicle;
    const dateStr = date ? format(date, "MMM dd, yyyy") : "Not specified";
    
    return `
New Booking Request:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Vehicle: ${vehicleName}
Date: ${dateStr}
Time: ${formData.timeOfService}
Passengers: ${formData.passengers}
Pickup: ${formData.pickupLocation}
Dropoff: ${formData.dropoffLocation}
Details: ${formData.additionalInfo}
    `.trim();
  };
  
  // Handle SMS booking
  const handleSmsBooking = () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.vehicle || !date || !formData.timeOfService) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields before submitting.",
        variant: "destructive"
      });
      return;
    }
    
    const message = encodeURIComponent(formatBookingDetails());
    const phoneNumber = "2024699763"; // Your phone number without formatting
    window.location.href = `sms:${phoneNumber}?body=${message}`;
    
    toast({
      title: "SMS Ready",
      description: "Your booking details have been prepared. Please send the SMS to complete your request.",
      duration: 5000
    });
  };
  
  // Handle phone call
  const handleCallBooking = () => {
    window.location.href = `tel:2024699763`;
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
      // We're not sending an email anymore, just preparing for SMS/call
      setIsSubmitting(false);
      
      toast({
        title: "Booking Options",
        description: "Please use the SMS or Call buttons below to complete your booking.",
        duration: 5000
      });
      
    } catch (error) {
      console.error('Error preparing booking:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        duration: 5000
      });
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
              Reserve your luxury transportation experience with LIMO MO. Complete the form below and contact us to confirm your booking.
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
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="button"
                      className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
                      size="lg"
                      onClick={handleSmsBooking}
                    >
                      <MessageSquare className="h-5 w-5" />
                      Book via SMS
                    </Button>
                    
                    <Button 
                      type="button"
                      className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2"
                      size="lg"
                      onClick={handleCallBooking}
                    >
                      <Phone className="h-5 w-5" />
                      Call to Book
                    </Button>
                  </div>
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
                  After completing the form, you can either send us an SMS with your booking details or call us directly to confirm your reservation. We'll respond promptly to arrange your transportation and discuss any specific requirements.
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
