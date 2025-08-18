import { GraduationCap, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science in Software Engineering",
      period: "2021 - Present",
      status: "Currently Pursuing",
      description: "Focused on software development, data structures, algorithms, and modern programming paradigms.",
      achievements: ["Dean's List", "Programming Competition Winner", "Tech Club President"]
    },
    {
      institution: "Online Learning Platforms",
      degree: "Professional Certifications",
      period: "2020 - Present",
      status: "Continuous Learning",
      description: "Completed various certifications in web development, cloud computing, and emerging technologies.",
      achievements: ["Full-Stack Development", "AWS Fundamentals", "React Specialist"]
    }
  ];

  const certifications = [
    "Full-Stack Web Development",
    "AWS Cloud Practitioner",
    "React Development",
    "Node.js Backend Development",
    "Mobile App Development",
    "Database Management"
  ];

  return (
    <section id="education" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          Education & Learning
        </h2>
        
        <div className="max-w-5xl mx-auto">
          {/* Education */}
          <div className="mb-16">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gradient-card p-8 rounded-2xl shadow-medium hover-lift animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start">
                    <div className="bg-gradient-hero p-3 rounded-xl text-primary-foreground mr-6 mt-1">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-primary mb-1">{edu.degree}</h3>
                          <p className="text-lg font-medium text-secondary">{edu.institution}</p>
                        </div>
                        <div className="text-right mt-2 md:mt-0">
                          <span className="text-sm font-medium text-muted-foreground bg-accent px-3 py-1 rounded-full">
                            {edu.period}
                          </span>
                          <p className="text-xs text-secondary mt-1">{edu.status}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {edu.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full font-medium flex items-center"
                          >
                            <Award className="w-3 h-3 mr-1" />
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-fade-in">
            <div className="bg-gradient-card p-8 rounded-2xl shadow-medium">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-hero p-3 rounded-xl text-primary-foreground mr-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Certifications & Courses</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-accent/50 text-accent-foreground px-4 py-3 rounded-xl font-medium text-sm hover:bg-secondary/20 transition-colors"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;