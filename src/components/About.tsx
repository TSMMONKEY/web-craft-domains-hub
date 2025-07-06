
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Top Freelance Web Developer & Designer
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              As an independent web designer and developer with over 5 years of experience, I specialize in creating 
              exceptional websites that combine stunning design with powerful functionality. From custom PHP web 
              applications to responsive WordPress sites, I deliver results that exceed expectations and drive 
              real business growth.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you're looking for freelance web developer services, need comprehensive domain hosting 
              services, or require a complete website redesign, I provide personalized solutions tailored to 
              your specific needs and budget. My expertise spans across modern web technologies, ensuring your 
              website is built for performance, security, and scalability.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-gray-600 text-sm">Websites Created</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                  <div className="text-gray-600 text-sm">Client Satisfaction</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-orange-50 to-purple-50 border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">Support Available</div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Start Your Project
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Download Portfolio
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose My Freelance Services?</h3>
                <ul className="space-y-4">
                  {[
                    {
                      icon: CheckCircle,
                      text: "Expert in PHP web development and WordPress customization"
                    },
                    {
                      icon: Award,
                      text: "Complete domain registration and hosting solutions"
                    },
                    {
                      icon: Users,
                      text: "Responsive, mobile-first design approach for all devices"
                    },
                    {
                      icon: Clock,
                      text: "SEO-optimized websites for better search rankings"
                    },
                    {
                      icon: CheckCircle,
                      text: "Fast turnaround times and competitive pricing"
                    },
                    {
                      icon: Award,
                      text: "Ongoing support and maintenance services"
                    },
                    {
                      icon: Users,
                      text: "Custom e-commerce solutions and payment integration"
                    },
                    {
                      icon: Clock,
                      text: "Performance optimization and security best practices"
                    }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <li key={index} className="flex items-start gap-3">
                        <IconComponent className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 shadow-2xl mt-6">
              <CardContent className="p-6 text-center text-white">
                <h4 className="text-xl font-bold mb-2">Ready to Get Started?</h4>
                <p className="mb-4 opacity-90">Free consultation and project quote available</p>
                <Button 
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Contact Me Today
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
