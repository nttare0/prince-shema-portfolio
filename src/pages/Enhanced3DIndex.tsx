import { motion } from 'framer-motion';
import { Suspense } from 'react';
import EnhancedHero from '@/components/enhanced/EnhancedHero';
import { Enhanced3DCard } from '@/components/enhanced/Enhanced3DCard';
import { ParallaxSection } from '@/components/enhanced/ParallaxSection';
import { Scene3D } from '@/components/3D/Scene3D';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Enhanced3DIndex = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Enhanced Navigation */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Navigation />
      </motion.div>

      {/* Enhanced Hero Section */}
      <EnhancedHero />

      {/* Floating 3D Scene Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene3D className="w-full h-full opacity-20" />
      </div>

      {/* About Section with 3D Cards */}
      <ParallaxSection className="relative z-10">
        <motion.section
          id="about"
          className="py-20 px-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container mx-auto max-w-6xl">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
              whileInView={{ scale: [0.5, 1.1, 1] }}
              transition={{ duration: 0.8 }}
            >
              About Me
            </motion.h2>
            
            <Enhanced3DCard glowColor="#3b82f6" className="max-w-4xl mx-auto">
              <AboutSection />
            </Enhanced3DCard>
          </div>
        </motion.section>
      </ParallaxSection>

      {/* Experience Section */}
      <ParallaxSection className="relative z-10" speed={0.3}>
        <motion.section
          id="experience"
          className="py-20 px-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container mx-auto max-w-6xl">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
              whileInView={{ scale: [0.5, 1.1, 1] }}
              transition={{ duration: 0.8 }}
            >
              Experience
            </motion.h2>
            
            <Enhanced3DCard glowColor="#8b5cf6" className="max-w-5xl mx-auto">
              <ExperienceSection />
            </Enhanced3DCard>
          </div>
        </motion.section>
      </ParallaxSection>

      {/* Skills Section with Interactive Cards */}
      <ParallaxSection className="relative z-10" speed={0.4}>
        <motion.section
          id="skills"
          className="py-20 px-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container mx-auto max-w-6xl">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"
              whileInView={{ scale: [0.5, 1.1, 1] }}
              transition={{ duration: 0.8 }}
            >
              Skills
            </motion.h2>
            
            <Enhanced3DCard glowColor="#06b6d4" className="max-w-5xl mx-auto">
              <SkillsSection />
            </Enhanced3DCard>
          </div>
        </motion.section>
      </ParallaxSection>

      {/* Projects Section */}
      <ParallaxSection className="relative z-10" speed={0.2}>
        <motion.section
          id="projects"
          className="py-20 px-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container mx-auto max-w-6xl">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"
              whileInView={{ scale: [0.5, 1.1, 1] }}
              transition={{ duration: 0.8 }}
            >
              Projects
            </motion.h2>
            
            <Enhanced3DCard glowColor="#f59e0b" className="max-w-5xl mx-auto">
              <ProjectsSection />
            </Enhanced3DCard>
          </div>
        </motion.section>
      </ParallaxSection>

      {/* Contact Section */}
      <ParallaxSection className="relative z-10" speed={0.1}>
        <motion.section
          id="contact"
          className="py-20 px-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container mx-auto max-w-6xl">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
              whileInView={{ scale: [0.5, 1.1, 1] }}
              transition={{ duration: 0.8 }}
            >
              Contact
            </motion.h2>
            
            <Enhanced3DCard glowColor="#ec4899" className="max-w-4xl mx-auto">
              <ContactSection />
            </Enhanced3DCard>
          </div>
        </motion.section>
      </ParallaxSection>

      {/* Enhanced Footer */}
      <motion.div
        className="relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Footer />
      </motion.div>

      {/* Ambient lighting effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
    </div>
  );
};

export default Enhanced3DIndex;