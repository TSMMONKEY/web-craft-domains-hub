
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', project: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Looking for freelance web developer services? Let's discuss your project and 
            create something amazing together.
          </p>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-800">Get Your Free Quote</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select your project type</option>
                  <option value="website-design">Freelance Website Design</option>
                  <option value="php-development">PHP Web Development</option>
                  <option value="wordpress">WordPress Development</option>
                  <option value="domain-hosting">Domain & Hosting Services</option>
                  <option value="ecommerce">E-commerce Website</option>
                  <option value="maintenance">Website Maintenance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Tell me about your project requirements, timeline, and budget..."
                  required
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Send Message & Get Free Quote
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need immediate assistance? Contact me directly:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contact@freelancewebdesigner.com" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              contact@freelancewebdesigner.com
            </a>
            <a 
              href="tel:+1234567890" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              +1 (234) 567-8900
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
