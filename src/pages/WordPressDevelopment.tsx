
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Layers, Puzzle, Paintbrush, Rocket } from 'lucide-react';

const WordPressDevelopment = () => {
  const services = [
    {
      icon: Layers,
      title: "Custom Theme Development",
      description: "Bespoke WordPress themes tailored to your brand and functionality requirements."
    },
    {
      icon: Puzzle,
      title: "Plugin Development",
      description: "Custom WordPress plugins to extend functionality and meet specific business needs."
    },
    {
      icon: Paintbrush,
      title: "Theme Customization",
      description: "Modify existing themes to match your design preferences and business requirements."
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Speed optimization, caching setup, and performance enhancements for faster loading."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
              WordPress Development Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional WordPress development services including custom themes, plugins, and optimizations. 
              Transform your WordPress site into a powerful, feature-rich platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">WordPress Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Development Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Custom WordPress theme development</li>
                  <li>• Plugin development and customization</li>
                  <li>• WooCommerce e-commerce solutions</li>
                  <li>• Multisite network setup</li>
                  <li>• Custom post types and fields</li>
                  <li>• REST API integration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Optimization & Security</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Site speed optimization</li>
                  <li>• Security hardening and monitoring</li>
                  <li>• SEO optimization</li>
                  <li>• Database optimization</li>
                  <li>• Backup and recovery solutions</li>
                  <li>• Migration services</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Enhance Your WordPress Site?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss your WordPress development needs and create something amazing.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Start Your WordPress Project
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WordPressDevelopment;
