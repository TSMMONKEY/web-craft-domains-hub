
import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
