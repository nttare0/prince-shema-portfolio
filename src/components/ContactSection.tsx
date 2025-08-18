import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in at least your name and message.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `Hi Ntare! 

*New Contact Form Message*

*Name:* ${formData.name}
*Email:* ${formData.email || 'Not provided'}
*Subject:* ${formData.subject || 'General Inquiry'}

*Message:*
${formData.message}

---
Sent from your portfolio website`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/250790824205?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Clear form
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    toast({
      title: "Message Sent!",
      description: "Your message has been sent via WhatsApp. I'll get back to you soon!",
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          Get In Touch
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Let's Start a Conversation
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on projects, 
                or simply connect with fellow developers. Feel free to reach out!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-gradient-hero p-3 rounded-xl text-primary-foreground mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Phone & WhatsApp</p>
                    <p className="text-muted-foreground">+250 790 824 205</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-gradient-hero p-3 rounded-xl text-primary-foreground mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Location</p>
                    <p className="text-muted-foreground">Kabuga, Rwanda</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-gradient-hero p-3 rounded-xl text-primary-foreground mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Preferred Contact</p>
                    <p className="text-muted-foreground">WhatsApp for quick responses</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-card rounded-2xl shadow-medium">
                <h4 className="font-semibold text-primary mb-3">Why Choose WhatsApp?</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Quick and direct communication</li>
                  <li>• Available across all time zones</li>
                  <li>• Easy file and document sharing</li>
                  <li>• Instant notifications for faster response</li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-scale-in">
              <div className="bg-gradient-card p-8 rounded-2xl shadow-medium">
                <h3 className="text-xl font-semibold text-primary mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                      placeholder="Tell me about your project or how I can help..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-hero text-primary-foreground px-6 py-3 rounded-xl hover-lift font-medium flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send via WhatsApp
                  </button>
                </form>
                
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  This form will open WhatsApp with your message pre-filled for direct communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;