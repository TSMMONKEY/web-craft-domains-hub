
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Globe, Settings, Users, Search, Laptop } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Freelance Website Development",
      description: "Custom web development using modern technologies. Specializing in PHP web development services and responsive design.",
      features: ["Custom PHP Development", "WordPress Freelance Services", "Responsive Design", "Web Applications"]
    },
    {
      icon: Globe,
      title: "Domain & Hosting Services",
      description: "Complete domain registration services and reliable web hosting solutions for your online presence.",
      features: ["Domain Name Registration", "Web Hosting Services", "Domain Networks Management", "SSL Certificates"]
    },
    {
      icon: Laptop,
      title: "Freelance Web Design",
      description: "Professional web design services creating stunning, user-friendly websites that convert visitors to customers.",
      features: ["Custom Web Design", "UI/UX Design", "Landing Pages", "E-commerce Design"]
    },
    {
      icon: Settings,
      title: "PHP Web Programming",
      description: "Expert PHP web programming services for dynamic websites and web applications with robust functionality.",
      features: ["PHP Web Development", "Database Integration", "API Development", "Performance Optimization"]
    },
    {
      icon: Users,
      title: "Webmaster Services",
      description: "Complete webmaster services including site maintenance, updates, and ongoing support for your website.",
      features: ["Website Maintenance", "Content Updates", "Security Monitoring", "Performance Optimization"]
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      description: "Boost your online visibility with professional SEO services and digital marketing strategies.",
      features: ["Search Engine Optimization", "Content Strategy", "Analytics Setup", "Performance Tracking"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Professional Web Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From freelance website design to domain registration services, I provide comprehensive solutions 
            for all your web development needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
