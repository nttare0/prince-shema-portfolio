import profileImage from '@/assets/ntare-profile.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-section pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src={profileImage}
              alt="Ntare Shema Prince"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-strong hover-lift"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Ntare Shema Prince
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Software Engineer & Student
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate software engineer with 1-2 years of experience building innovative solutions. 
            Specialized in web development and emerging technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-hero text-primary-foreground px-8 py-3 rounded-xl hover-lift font-medium"
            >
              Get In Touch
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-primary text-primary px-8 py-3 rounded-xl hover-lift font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;