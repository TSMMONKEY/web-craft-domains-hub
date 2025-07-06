
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Complete e-commerce solution built with PHP and MySQL. Features include product catalog, shopping cart, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "PayPal API"],
      category: "E-commerce"
    },
    {
      title: "Corporate Website Redesign",
      description: "Modern responsive website redesign for a law firm. Improved user experience, mobile optimization, and SEO implementation.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["WordPress", "PHP", "Custom CSS", "Responsive Design"],
      category: "Web Design"
    },
    {
      title: "Restaurant Management System",
      description: "Custom web application for restaurant management including order tracking, inventory management, and customer database.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["PHP", "Laravel", "MySQL", "Vue.js", "API Integration"],
      category: "Web Application"
    },
    {
      title: "Real Estate Portal",
      description: "Property listing website with advanced search, user accounts, and property management system for real estate agents.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["PHP", "CodeIgniter", "MySQL", "Google Maps API", "Bootstrap"],
      category: "Web Portal"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
              My Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing successful freelance web development projects, from custom PHP applications 
              to responsive WordPress sites and e-commerce solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800">{project.title}</CardTitle>
                      <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm mt-2">
                        {project.category}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="w-4 h-4 mr-2" />
                      Source
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss your requirements and create something amazing together.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
