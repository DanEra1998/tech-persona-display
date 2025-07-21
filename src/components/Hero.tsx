import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Full Stack Developer";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-tech-purple rounded-full animate-pulse delay-700"></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
        <div className="space-y-4 fade-in-up">
          <div className="flex items-center justify-center space-x-2 text-accent">
            <Code2 className="w-6 h-6" />
            <span className="code-font text-sm">Hello World!</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm{' '}
            <span className="glow-text">Alex</span>
          </h1>
          
          <div className="h-8 flex items-center justify-center">
            <span className="text-2xl md:text-3xl text-muted-foreground code-font">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I craft digital experiences that blend creativity with cutting-edge technology. 
            Passionate about building scalable solutions and beautiful user interfaces.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up">
          <Button className="tech-button group">
            View My Work
            <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          
          <div className="flex space-x-4">
            <Button variant="outline" size="icon" className="border-primary/30 hover:border-primary hover:bg-primary/10">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="border-primary/30 hover:border-primary hover:bg-primary/10">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="border-primary/30 hover:border-primary hover:bg-primary/10">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;