
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Users, Clock, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "200+",
      label: "Happy Clients",
      description: "Businesses worldwide trust our services"
    },
    {
      icon: Clock,
      number: "5+",
      label: "Years Experience",
      description: "Professional web development expertise"
    },
    {
      icon: Award,
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered web solutions"
    },
    {
      icon: Lightbulb,
      number: "24/7",
      label: "Support Available",
      description: "Always here when you need us"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
              About FreelanceWebPro
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional freelance web developer specializing in custom web solutions, 
              PHP development, and comprehensive digital services for businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-800">{stat.number}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-blue-600">{stat.label}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">My Story</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  With over 5 years of experience in web development, I've helped hundreds of businesses 
                  establish their online presence through custom web solutions. My journey began with a 
                  passion for creating digital experiences that make a difference.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Specializing in PHP development, WordPress customization, and modern web technologies, 
                  I provide comprehensive services from domain registration to ongoing maintenance.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Every project is an opportunity to create something unique and impactful. I believe 
                  in building long-term partnerships with my clients, providing not just websites, 
                  but complete digital solutions that grow with their business.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Professional workspace"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose Me?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Attention</h3>
                <p className="text-gray-600">
                  As a freelancer, you work directly with me. No middlemen, no communication gaps - 
                  just personalized service and direct collaboration.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality Focused</h3>
                <p className="text-gray-600">
                  I take pride in delivering high-quality work that exceeds expectations. 
                  Every project receives my full attention and expertise.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Long-term Support</h3>
                <p className="text-gray-600">
                  Your success is my success. I provide ongoing support and maintenance 
                  to ensure your website continues to perform at its best.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Work Together?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
