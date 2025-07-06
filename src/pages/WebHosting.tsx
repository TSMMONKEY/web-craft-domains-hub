
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Server, Shield, Zap, HeadphonesIcon } from 'lucide-react';

const WebHosting = () => {
  const features = [
    {
      icon: Server,
      title: "Reliable Infrastructure",
      description: "99.9% uptime guarantee with enterprise-grade servers and redundant systems."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "SSD storage, CDN integration, and optimized servers for maximum performance."
    },
    {
      icon: Shield,
      title: "Secure Hosting",
      description: "SSL certificates, daily backups, malware scanning, and firewall protection."
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Expert technical support available around the clock to help with any issues."
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "$9.99",
      features: [
        "10GB SSD Storage",
        "Unlimited Bandwidth",
        "5 Email Accounts",
        "Free SSL Certificate",
        "24/7 Support"
      ]
    },
    {
      name: "Professional",
      price: "$19.99",
      popular: true,
      features: [
        "50GB SSD Storage",
        "Unlimited Bandwidth",
        "25 Email Accounts",
        "Free SSL Certificate",
        "Daily Backups",
        "CDN Integration"
      ]
    },
    {
      name: "Business",
      price: "$39.99",
      features: [
        "200GB SSD Storage",
        "Unlimited Bandwidth",
        "Unlimited Email Accounts",
        "Free SSL Certificate",
        "Daily Backups",
        "CDN Integration",
        "Priority Support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
              Web Hosting Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reliable, fast, and secure web hosting solutions for businesses of all sizes. 
              Get your website online with our premium hosting infrastructure.
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

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Hosting Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card key={index} className={`bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  <CardHeader className="text-center">
                    {plan.popular && (
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm mb-4 inline-block">
                        Most Popular
                      </div>
                    )}
                    <CardTitle className="text-2xl font-bold text-gray-800">{plan.name}</CardTitle>
                    <div className="text-4xl font-bold text-blue-600 mt-4">
                      {plan.price}<span className="text-lg text-gray-500">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full mt-6 ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'bg-gray-600 hover:bg-gray-700'}`}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Need Custom Hosting Solutions?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us for enterprise hosting, dedicated servers, or custom configurations.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Contact for Custom Solution
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebHosting;
