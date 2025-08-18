import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
              Ntare Shema Prince
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Software Engineer & Student | Building the future, one line of code at a time
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="#"
                className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-colors hover-lift"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-colors hover-lift"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-colors hover-lift"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/250790824205"
                className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-colors hover-lift"
                aria-label="WhatsApp"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Contact */}
          <div className="border-t border-white/20 pt-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Contact</h4>
                <p className="text-primary-foreground/80 text-sm">+250 790 824 205</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-primary-foreground/80 text-sm">Kabuga, Rwanda</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Availability</h4>
                <p className="text-primary-foreground/80 text-sm">Open to opportunities</p>
              </div>
            </div>
            
            <div className="text-center text-primary-foreground/60 text-sm">
              <p>&copy; {currentYear} Ntare Shema Prince. All rights reserved.</p>
              <p className="mt-2">Built with React, TypeScript & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;