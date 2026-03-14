import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { contactInfo } from '../mockData';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Marble texture background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] to-white">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1623197532650-bacb8a68914e)',
            backgroundSize: '500px 500px',
            backgroundRepeat: 'repeat'
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-[#B76E79] bg-[#B76E79]/10 px-4 py-2 rounded-full">
              Connect With Us
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2C2C2C] mb-4">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-[#3A3A3A] max-w-2xl mx-auto">
            Have questions about our products? We're here to help you find the perfect solution
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg border border-[#B76E79]/10">
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-6">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#3A3A3A] mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full rounded-xl border-[#B76E79]/20 focus:border-[#B76E79] focus:ring-[#B76E79]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#3A3A3A] mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full rounded-xl border-[#B76E79]/20 focus:border-[#B76E79] focus:ring-[#B76E79]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#3A3A3A] mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 1234567890"
                  className="w-full rounded-xl border-[#B76E79]/20 focus:border-[#B76E79] focus:ring-[#B76E79]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#3A3A3A] mb-2">
                  Your Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  required
                  rows={5}
                  className="w-full rounded-xl resize-none border-[#B76E79]/20 focus:border-[#B76E79] focus:ring-[#B76E79]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#B76E79] to-[#C9A0A0] hover:from-[#A05D68] hover:to-[#B88F8F] text-white rounded-xl py-5 sm:py-6 text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Send Message
                <Send size={20} className="ml-2" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Cards */}
            <div className="bg-gradient-to-br from-[#C9A0A0]/10 to-[#B76E79]/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#B76E79]/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#B76E79] to-[#C9A0A0] flex items-center justify-center shadow-md">
                    <Mail size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#2C2C2C] mb-2">Email Us</h4>
                  <p className="text-[#3A3A3A]">{contactInfo.email}</p>
                  <p className="text-sm text-[#3A3A3A]/70 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#8B7E8B]/10 to-[#A68A7A]/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#8B7E8B]/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8B7E8B] to-[#A68A7A] flex items-center justify-center shadow-md">
                    <Phone size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#2C2C2C] mb-2">Call Us</h4>
                  <p className="text-[#3A3A3A]">{contactInfo.phone}</p>
                  <p className="text-sm text-[#3A3A3A]/70 mt-1">Mon-Sat, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#A68A7A]/10 to-[#8B7E8B]/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#A68A7A]/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#A68A7A] to-[#8B7E8B] flex items-center justify-center shadow-md">
                    <MapPin size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#2C2C2C] mb-2">Visit Us</h4>
                  <p className="text-[#3A3A3A]">{contactInfo.address}</p>
                  <p className="text-sm text-[#3A3A3A]/70 mt-1">Office and manufacturing facility</p>
                </div>
              </div>
            </div>

            {/* Distributor Info */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-md border border-[#B76E79]/10">
              <h4 className="text-xl font-bold text-[#2C2C2C] mb-4">
                Become a Distributor
              </h4>
              <p className="text-[#3A3A3A] mb-6">
                Join our network of partners and grow your business with CanoCrystal products
              </p>
              <Button className="w-full bg-gradient-to-r from-[#B76E79] to-[#C9A0A0] hover:from-[#A05D68] hover:to-[#B88F8F] text-white rounded-xl py-5 sm:py-6 shadow-md">
                Partnership Inquiry
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
