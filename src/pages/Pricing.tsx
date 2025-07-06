
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter Website",
      price: "$799",
      description: "Perfect for small businesses and personal websites",
      features: [
        "Up to 5 pages",
        "Responsive design",
        "Contact form",
        "Basic SEO setup",
        "1 month support",
        "Social media integration"
      ],
      popular: false
    },
    {
      name: "Professional Website",
      price: "$1,499",
      description: "Ideal for growing businesses and e-commerce",
      features: [
        "Up to 15 pages",
        "Custom design",
        "E-commerce functionality",
        "Advanced SEO",
        "3 months support",
        "Blog setup",
        "Analytics integration",
        "Payment gateway setup"
      ],
      popular: true
    },
    {
      name: "Enterprise Solution",
      price: "$2,999",
      description: "Custom solutions for complex business needs",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Database integration",
        "User management system",
        "6 months support",
        "Performance optimization",
        "Security hardening",
        "Custom API development"
      ],
      popular: false
    }
  ];

  const additionalServices = [
    { service: "Domain Registration", price: "$15/year" },
    { service: "Web Hosting", price: "$10-40/month" },
    { service: "SSL Certificate", price: "$50/year" },
    { service: "Website Maintenance", price: "$99-399/month" },
    { service: "Content Updates", price: "$50/hour" },
    { service: "SEO Optimization", price: "$299/month" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clear, competitive pricing for all web development services. No hidden fees, 
              no surprises - just honest freelance rates for quality work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                <CardHeader className="text-center">
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm mb-4 inline-block">
                      Most Popular
                    </div>
                  )}
                  <CardTitle className="text-2xl font-bold text-gray-800">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-blue-600 mt-4">
                    {plan.price}
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'bg-gray-600 hover:bg-gray-700'}`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                  <span className="text-gray-800 font-medium">{item.service}</span>
                  <span className="text-blue-600 font-bold">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">What's Included in Every Project</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Standard Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Mobile-responsive design
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Cross-browser compatibility
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Basic SEO optimization
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Contact form setup
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Google Analytics integration
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Support & Delivery</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Project timeline guarantee
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Unlimited revisions during development
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Training on content management
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Post-launch bug fixes
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Source code ownership
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact me for a free consultation and custom quote for your project.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
