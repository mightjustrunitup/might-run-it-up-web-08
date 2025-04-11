
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Send, Loader2 } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll respond shortly.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block font-medium text-navy mb-2">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="input-luxury"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium text-navy mb-2">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="input-luxury"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block font-medium text-navy mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="input-luxury"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (234) 567-8900"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block font-medium text-navy mb-2">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="input-luxury"
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select a topic
            </option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Service Request">Service Request</option>
            <option value="Partnership">Partnership</option>
            <option value="Career">Career</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block font-medium text-navy mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="input-luxury resize-none"
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you?"
        ></textarea>
      </div>

      <div className="text-right">
        <Button 
          type="submit" 
          className="btn-primary min-w-[180px]"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message <Send size={16} />
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
