import { Code, Database, Globe, Smartphone, Cloud, GitBranch } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"]
    },
    {
      title: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "Python", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["React Native", "Flutter", "Mobile UI/UX", "App Store Deployment"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Firebase", "Docker", "CI/CD", "Git", "Linux"]
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Dart"]
    },
    {
      title: "Tools & Platforms",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Vercel"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          Skills & Technologies
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-card p-6 rounded-2xl shadow-medium hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-hero p-3 rounded-xl text-primary-foreground mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-sm bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium hover:bg-secondary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;