import { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Frontend",
      color: "primary",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 80 },
      ]
    },
    {
      title: "Backend",
      color: "accent",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "Go", level: 75 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 80 },
      ]
    },
    {
      title: "DevOps & Tools",
      color: "tech-purple",
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 78 },
        { name: "Kubernetes", level: 70 },
      ]
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary': return 'border-primary bg-primary/10';
      case 'accent': return 'border-accent bg-accent/10';
      case 'tech-purple': return 'border-tech-purple bg-tech-purple/10';
      default: return 'border-primary bg-primary/10';
    }
  };

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience 
            and continuous learning in the ever-evolving tech landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="space-y-6 fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className={`text-center p-4 rounded-lg border ${getColorClass(category.color)}`}>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="tech-card p-4 cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(`${category.title}-${skill.name}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground code-font">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${
                          category.color === 'primary' ? 'bg-primary' :
                          category.color === 'accent' ? 'bg-accent' :
                          'bg-tech-purple'
                        }`}
                        style={{ 
                          width: hoveredSkill === `${category.title}-${skill.name}` 
                            ? `${skill.level}%` 
                            : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center fade-in-up">
          <h3 className="text-2xl font-semibold mb-8 text-accent">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'GraphQL', 'Redis', 'Elasticsearch', 'Webpack', 'Vite', 'Jest', 
              'Cypress', 'Figma', 'Adobe XD', 'Sass', 'WebSockets', 'REST APIs'
            ].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary/50 transition-colors cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;