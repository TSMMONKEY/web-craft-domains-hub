
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Top Freelance Web Developer
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              As an independent web designer with years of experience, I specialize in creating 
              exceptional websites that combine stunning design with powerful functionality. 
              From freelance website builders to complex PHP web applications, I deliver 
              results that exceed expectations.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you're looking for freelance web developer services, need domain hosting 
              services, or require a complete website redesign, I provide personalized solutions 
              tailored to your specific needs and budget.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose My Services?</h3>
                <ul className="space-y-4">
                  {[
                    "Expert in PHP web development and WordPress",
                    "Complete domain and hosting solutions",
                    "Responsive, mobile-first design approach",
                    "SEO-optimized websites for better rankings",
                    "Fast turnaround times and competitive pricing",
                    "Ongoing support and maintenance services"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2.5"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
