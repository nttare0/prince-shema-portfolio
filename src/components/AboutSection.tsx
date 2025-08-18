const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate software engineer and student with a strong foundation in modern web technologies. 
                With 1-2 years of hands-on experience, I've had the privilege of working with diverse companies 
                ranging from construction to research & technology.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My journey in software development has been driven by curiosity and a desire to create 
                meaningful solutions that make a difference. I thrive on learning new technologies and 
                applying them to solve real-world problems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                and connecting with fellow developers in the tech community.
              </p>
            </div>
            
            <div className="animate-scale-in">
              <div className="bg-gradient-card p-8 rounded-2xl shadow-medium">
                <h3 className="text-xl font-semibold mb-6 text-primary">Quick Facts</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    <span>1-2 years of professional experience</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    <span>Currently studying Software Engineering</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    <span>Based in Kabuga, Rwanda</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    <span>Full-stack development focus</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;