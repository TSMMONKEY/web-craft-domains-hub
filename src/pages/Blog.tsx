
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "PHP Web Development Best Practices in 2024",
      excerpt: "Discover the latest PHP development techniques, security practices, and performance optimization strategies for modern web applications.",
      author: "John Smith",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Choosing the Right Domain Name for Your Business",
      excerpt: "Learn how to select the perfect domain name that enhances your brand identity and improves your online presence.",
      author: "John Smith",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Domain Services",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Freelance Web Design: Building Client Relationships",
      excerpt: "Essential tips for freelance web designers on managing client expectations, communication, and delivering successful projects.",
      author: "John Smith",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Freelancing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Web Hosting: Shared vs VPS vs Dedicated Servers",
      excerpt: "Compare different hosting options and learn which solution is best for your website's needs and budget.",
      author: "John Smith",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "Hosting",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "WordPress Security: Protecting Your Website",
      excerpt: "Comprehensive guide to securing your WordPress website against common threats and vulnerabilities.",
      author: "John Smith",
      date: "November 20, 2024",
      readTime: "12 min read",
      category: "WordPress",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Responsive Web Design Trends for 2024",
      excerpt: "Explore the latest trends in responsive web design and how to implement them in your projects.",
      author: "John Smith",
      date: "November 15, 2024",
      readTime: "9 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
              Web Development Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tutorials, and tips on freelance web development, PHP programming, 
              domain services, and the latest web technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm mb-3">
                    {post.category}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to get the latest web development tips and industry insights.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
