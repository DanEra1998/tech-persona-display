import { useState } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, Github, Code, Database, Cloud, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading development of enterprise-level applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
      achievements: [
        "Improved application performance by 40% through optimization",
        "Led migration to microservices architecture",
        "Mentored 5 junior developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Innovations Inc",
      location: "New York, NY",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams to deliver high-quality solutions.",
      technologies: ["Vue.js", "Python", "MongoDB", "Redis", "Kubernetes"],
      achievements: [
        "Delivered 15+ successful projects on time",
        "Reduced server costs by 30% through optimization",
        "Implemented real-time features using WebSockets",
        "Built responsive designs for mobile-first approach"
      ]
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Focused on creating beautiful and intuitive user interfaces. Worked closely with design team to implement pixel-perfect designs and smooth animations.",
      technologies: ["React", "TypeScript", "Styled Components", "Jest", "Figma"],
      achievements: [
        "Increased user engagement by 25%",
        "Improved accessibility compliance to WCAG 2.1 AA",
        "Reduced bundle size by 35% through code splitting",
        "Established component library used across teams"
      ]
    }
  ];

  const skills = [
    {
      category: "Frontend",
      icon: Code,
      technologies: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      category: "Backend",
      icon: Database,
      technologies: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "GraphQL", level: 80 }
      ]
    },
    {
      category: "DevOps",
      icon: Cloud,
      technologies: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 75 },
        { name: "CI/CD", level: 90 },
        { name: "Terraform", level: 70 }
      ]
    },
    {
      category: "Mobile",
      icon: Smartphone,
      technologies: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 75 },
        { name: "Expo", level: 85 },
        { name: "iOS", level: 70 },
        { name: "Android", level: 70 }
      ]
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory and payments",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard with real-time charts and export functionality",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat with AI integration and message encryption",
      technologies: ["Next.js", "OpenAI API", "WebSockets", "Redis"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="work" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey, skills, and notable projects that showcase my expertise 
            in full-stack development and problem-solving.
          </p>
        </div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className="tech-card fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1 space-y-2">
                    <div className="flex items-center space-x-2 text-accent">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.type}</span>
                    </div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                    <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="skills" className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={skillGroup.category}
                className="tech-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <skillGroup.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{skillGroup.category}</h3>
                </div>

                <div className="space-y-4">
                  {skillGroup.technologies.map((tech) => (
                    <div key={tech.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{tech.name}</span>
                        <span className="text-xs text-muted-foreground">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="projects" className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="tech-card group fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="overflow-hidden rounded-lg mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default WorkExperience;