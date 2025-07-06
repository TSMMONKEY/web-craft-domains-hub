
import React from 'react';
import { Button } from '@/components/ui/button';
import { Code, Globe, Settings } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6 leading-tight">
            Freelance Web Designer & Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Professional web design services, PHP development, domain registration, and hosting solutions. 
            Creating stunning websites that drive results for your business.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <Globe className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700 font-medium">Domain Services</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <Code className="w-5 h-5 text-purple-600" />
            <span className="text-gray-700 font-medium">PHP Development</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <Settings className="w-5 h-5 text-blue-800" />
            <span className="text-gray-700 font-medium">Web Hosting</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Get Started Today
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
