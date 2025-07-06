
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, Smartphone, Zap, Users } from 'lucide-react';

const FreelanceWebDesign = () => {
  const features = [
    {
      icon: Palette,
      title: "Custom Design",
      description: "Unique, tailored designs that reflect your brand identity and business goals."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring your site looks perfect on all devices."
    },
    {
      icon: Zap,
      title: "Fast Loading",
      description: "Optimized for speed and performance to keep your visitors engaged."
    },
    {
      icon: Users,
      title: "User-Focused",
      description: "Intuitive user experience design that converts visitors into customers."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
              Freelance Web Design Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional freelance web design services that create stunning, conversion-focused websites. 
              From concept to launch, I deliver custom web designs that elevate your brand and drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Design Process</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Initial consultation and requirement gathering</li>
                  <li>• Wireframe and mockup creation</li>
                  <li>• Custom visual design development</li>
                  <li>• Responsive layout optimization</li>
                  <li>• User experience testing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• HTML5 & CSS3 development</li>
                  <li>• Cross-browser compatibility</li>
                  <li>• SEO-friendly structure</li>
                  <li>• Contact forms and interactions</li>
                  <li>• CMS integration (if needed)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Start Your Design Project?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's create a stunning website that represents your brand perfectly.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreelanceWebDesign;
