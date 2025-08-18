import { ExternalLink, Github, Globe } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Construction Management Platform",
      description: "A comprehensive web application for KONET to streamline construction project management, resource allocation, and progress tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Material-UI"],
      features: ["Project Dashboard", "Resource Management", "Progress Tracking", "Team Collaboration"],
      category: "Web Application",
      status: "Completed"
    },
    {
      title: "Research Data Analytics Tool",
      description: "Advanced analytics platform for Zeolf to process and visualize research data, enabling better decision-making and insights.",
      technologies: ["Python", "React", "PostgreSQL", "D3.js", "FastAPI"],
      features: ["Data Visualization", "Statistical Analysis", "Report Generation", "API Integration"],
      category: "Data Analytics",
      status: "In Development"
    },
    {
      title: "E-Commerce Mobile App",
      description: "Cross-platform mobile application for local businesses to sell products online with integrated payment systems.",
      technologies: ["React Native", "Firebase", "Stripe API", "Node.js"],
      features: ["Product Catalog", "Payment Integration", "Order Management", "Push Notifications"],
      category: "Mobile App",
      status: "Completed"
    },
    {
      title: "Portfolio Management System",
      description: "Personal project management tool for freelancers and small agencies to track projects, clients, and finances.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      features: ["Project Tracking", "Client Management", "Invoice Generation", "Time Tracking"],
      category: "SaaS Platform",
      status: "Ongoing"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          Featured Projects
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-card p-8 rounded-2xl shadow-medium hover-lift animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-700' 
                      : project.status === 'In Development'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-primary mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-primary mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex items-center text-sm text-secondary hover:text-primary transition-colors">
                    <Github className="w-4 h-4 mr-1" />
                    View Code
                  </button>
                  <button className="flex items-center text-sm text-secondary hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;