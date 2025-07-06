
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Database, Shield, Zap } from 'lucide-react';

const PHPDevelopment = () => {
  const services = [
    {
      icon: Code,
      title: "Custom PHP Applications",
      description: "Tailored PHP solutions built from scratch to meet your specific business requirements."
    },
    {
      icon: Database,
      title: "Database Integration",
      description: "Expert MySQL and PostgreSQL integration for robust data management systems."
    },
    {
      icon: Shield,
      title: "Secure Development",
      description: "Security-first approach with input validation, SQL injection prevention, and data encryption."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "High-performance PHP code with caching, optimization, and scalability considerations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
              Professional PHP Development Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert PHP web development services for dynamic websites and powerful web applications. 
              From simple scripts to complex enterprise solutions, I deliver robust PHP solutions.
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">PHP Development Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Frameworks & Tools</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Laravel Framework</li>
                  <li>• CodeIgniter</li>
                  <li>• Symfony Components</li>
                  <li>• Composer Package Manager</li>
                  <li>• PHPUnit Testing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Development Areas</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• E-commerce Solutions</li>
                  <li>• Content Management Systems</li>
                  <li>• API Development</li>
                  <li>• Database-driven Applications</li>
                  <li>• Custom Web Applications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Best Practices</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Object-Oriented Programming</li>
                  <li>• MVC Architecture</li>
                  <li>• Code Documentation</li>
                  <li>• Version Control (Git)</li>
                  <li>• Security Standards</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Need Custom PHP Development?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss your PHP project requirements and create a powerful solution.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Start Your PHP Project
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PHPDevelopment;
