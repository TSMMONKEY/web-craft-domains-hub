
import React from 'react';
import { Button } from '@/components/ui/button';
import { Code, Globe, Settings } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-blue-800/90" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Professional Freelance Web Designer & Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Expert freelance web design services, PHP development, domain registration, and hosting solutions. 
            Creating stunning websites that drive real business results and enhance your online presence.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl border border-white/20">
            <Globe className="w-5 h-5 text-blue-300" />
            <span className="text-white font-medium">Domain & Hosting Services</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl border border-white/20">
            <Code className="w-5 h-5 text-purple-300" />
            <span className="text-white font-medium">Expert PHP Development</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl border border-white/20">
            <Settings className="w-5 h-5 text-blue-300" />
            <span className="text-white font-medium">Professional Web Design</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-0"
          >
            Start Your Project Today
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-sm"
          >
            View My Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
