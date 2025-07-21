import { Code, Zap, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+', icon: Code },
    { label: 'Projects Completed', value: '50+', icon: Zap },
    { label: 'Happy Clients', value: '30+', icon: Users },
    { label: 'Technologies', value: '15+', icon: Lightbulb },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer who loves turning complex problems into simple, 
            beautiful solutions. With a keen eye for detail and a drive for perfection.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 fade-in-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-accent">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Started my coding journey 5 years ago with a simple "Hello World" program. 
                Since then, I've been on an incredible adventure, constantly learning and 
                evolving with the ever-changing tech landscape.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in full-stack development, with a particular love for React, 
                Node.js, and modern web technologies. When I'm not coding, you'll find me 
                exploring new frameworks, contributing to open source, or mentoring aspiring developers.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-accent">What I Do</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Frontend Development (React, Vue, Angular)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Backend Development (Node.js, Python, Go)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-tech-purple rounded-full"></div>
                  <span>Database Design & Optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-tech-green rounded-full"></div>
                  <span>DevOps & Cloud Architecture</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6 fade-in-right">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="tech-card text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;