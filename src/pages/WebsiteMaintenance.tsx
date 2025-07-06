
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, RefreshCw, TrendingUp, Clock } from 'lucide-react';

const WebsiteMaintenance = () => {
  const services = [
    {
      icon: Shield,
      title: "Security Updates",
      description: "Regular security patches, malware scanning, and vulnerability assessments."
    },
    {
      icon: RefreshCw,
      title: "Content Updates",
      description: "Keep your website fresh with regular content updates and modifications."
    },
    {
      icon: TrendingUp,
      title: "Performance Monitoring",
      description: "Continuous monitoring and optimization for peak website performance."
    },
    {
      icon: Clock,
      title: "Regular Backups",
      description: "Automated daily backups to ensure your data is always safe and recoverable."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
              Website Maintenance Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keep your website running smoothly with our comprehensive maintenance services. 
              From security updates to content management, we've got you covered.
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Maintenance Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Maintenance</h3>
                <div className="text-2xl font-bold text-blue-600 mb-4">$99/month</div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Weekly security updates</li>
                  <li>• Monthly backups</li>
                  <li>• Basic performance monitoring</li>
                  <li>• Email support</li>
                  <li>• 2 hours of updates/month</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional Maintenance</h3>
                <div className="text-2xl font-bold text-purple-600 mb-4">$199/month</div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Daily security monitoring</li>
                  <li>• Weekly backups</li>
                  <li>• Performance optimization</li>
                  <li>• Priority support</li>
                  <li>• 5 hours of updates/month</li>
                  <li>• SEO monitoring</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Enterprise Maintenance</h3>
                <div className="text-2xl font-bold text-green-600 mb-4">$399/month</div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Real-time security monitoring</li>
                  <li>• Daily backups</li>
                  <li>• Advanced performance optimization</li>
                  <li>• 24/7 phone support</li>
                  <li>• 10 hours of updates/month</li>
                  <li>• Analytics and reporting</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Keep Your Website in Perfect Shape</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let us handle the technical details while you focus on growing your business.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Choose Your Plan
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteMaintenance;
