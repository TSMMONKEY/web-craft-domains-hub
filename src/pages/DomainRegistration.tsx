
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Search, Shield, Clock } from 'lucide-react';

const DomainRegistration = () => {
  const features = [
    {
      icon: Search,
      title: "Domain Search",
      description: "Find the perfect domain name for your business with our advanced search tools."
    },
    {
      icon: Globe,
      title: "Multiple Extensions",
      description: "Choose from hundreds of domain extensions including .com, .net, .org, and country-specific TLDs."
    },
    {
      icon: Shield,
      title: "Privacy Protection",
      description: "Keep your personal information private with WHOIS privacy protection services."
    },
    {
      icon: Clock,
      title: "Auto-Renewal",
      description: "Never lose your domain with automatic renewal options and expiration reminders."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
              Domain Registration Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure your perfect domain name today. Professional domain registration services with 
              competitive pricing, privacy protection, and expert support.
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Popular Domain Extensions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">.com</h3>
                <p className="text-gray-600 mb-4">The most popular and trusted domain extension for businesses worldwide.</p>
                <p className="text-lg font-semibold text-gray-800">Starting at $12.99/year</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-purple-600 mb-2">.net</h3>
                <p className="text-gray-600 mb-4">Perfect for tech companies, networks, and internet service providers.</p>
                <p className="text-lg font-semibold text-gray-800">Starting at $14.99/year</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-green-600 mb-2">.org</h3>
                <p className="text-gray-600 mb-4">Ideal for non-profit organizations and community groups.</p>
                <p className="text-lg font-semibold text-gray-800">Starting at $13.99/year</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Standard Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free DNS management</li>
                  <li>• Email forwarding</li>
                  <li>• Domain parking page</li>
                  <li>• 24/7 customer support</li>
                  <li>• Easy domain management panel</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Premium Add-ons</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• WHOIS privacy protection</li>
                  <li>• Domain lock security</li>
                  <li>• Auto-renewal service</li>
                  <li>• SSL certificate options</li>
                  <li>• Premium DNS service</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Register Your Domain?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Find and register your perfect domain name today with our easy process.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Search Domains Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DomainRegistration;
