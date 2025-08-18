const ExperienceSection = () => {
  const experiences = [
    {
      company: "Zeolf",
      role: "Software Engineer",
      type: "Research & Technology",
      period: "2023 - Present",
      description: "Developing innovative software solutions focused on research and technology advancement. Working with cutting-edge technologies to build scalable applications.",
      highlights: ["Technology Research", "Software Development", "Innovation Projects"]
    },
    {
      company: "KONET",
      role: "Software Developer",
      type: "Construction",
      period: "2022 - 2023",
      description: "Implemented digital solutions for construction management, streamlining processes and improving operational efficiency.",
      highlights: ["Construction Tech", "Process Automation", "Digital Solutions"]
    },
    {
      company: "Freelance Projects",
      role: "Full-Stack Developer",
      type: "Various Industries",
      period: "2022 - Present",
      description: "Delivered custom web applications and software solutions for diverse clients across multiple industries.",
      highlights: ["Web Development", "Custom Solutions", "Client Relations"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-card p-8 rounded-2xl shadow-medium hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1">{exp.role}</h3>
                    <p className="text-lg font-medium text-secondary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.type}</p>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground bg-accent px-3 py-1 rounded-full mt-2 md:mt-0 self-start">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full font-medium"
                    >
                      {highlight}
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

export default ExperienceSection;