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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden relative">
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 z-0">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
        
        {/* Dynamic floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Enhanced Navigation */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-50"
      >
        <Navigation />
      </motion.div>

      {/* Enhanced Hero Section */}
      <div className="relative z-10">
        <EnhancedHero />
      </div>

      {/* Floating 3D Scene Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene3D className="w-full h-full opacity-30" />
      </div>

      {/* Main Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        {/* About Section with Enhanced Design */}
        <ParallaxSection className="relative">
          <motion.section
            id="about"
            className="py-32 px-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="container mx-auto max-w-7xl">
              <motion.div
                className="text-center mb-20"
                whileInView={{ scale: [0.5, 1.1, 1] }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                  About Me
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
              </motion.div>
              
              <Enhanced3DCard glowColor="#3b82f6" className="max-w-5xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10">
                <AboutSection />
              </Enhanced3DCard>
            </div>
          </motion.section>
        </ParallaxSection>

        {/* Experience Section with Staggered Cards */}
        <ParallaxSection className="relative" speed={0.3}>
          <motion.section
            id="experience"
            className="py-32 px-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="container mx-auto max-w-7xl">
              <motion.div
                className="text-center mb-20"
                whileInView={{ scale: [0.5, 1.1, 1] }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                  Experience
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
              </motion.div>
              
              <Enhanced3DCard glowColor="#8b5cf6" className="max-w-6xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10">
                <ExperienceSection />
              </Enhanced3DCard>
            </div>
          </motion.section>
        </ParallaxSection>

        {/* Skills Section with Grid Layout */}
        <ParallaxSection className="relative" speed={0.4}>
          <motion.section
            id="skills"
            className="py-32 px-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="container mx-auto max-w-7xl">
              <motion.div
                className="text-center mb-20"
                whileInView={{ scale: [0.5, 1.1, 1] }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  Skills & Expertise
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full" />
              </motion.div>
              
              <Enhanced3DCard glowColor="#06b6d4" className="max-w-6xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10">
                <SkillsSection />
              </Enhanced3DCard>
            </div>
          </motion.section>
        </ParallaxSection>

        {/* Projects Section with Enhanced Cards */}
        <ParallaxSection className="relative" speed={0.2}>
          <motion.section
            id="projects"
            className="py-32 px-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="container mx-auto max-w-7xl">
              <motion.div
                className="text-center mb-20"
                whileInView={{ scale: [0.5, 1.1, 1] }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Featured Projects
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
              </motion.div>
              
              <Enhanced3DCard glowColor="#f59e0b" className="max-w-6xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10">
                <ProjectsSection />
              </Enhanced3DCard>
            </div>
          </motion.section>
        </ParallaxSection>

        {/* Contact Section with Enhanced Form */}
        <ParallaxSection className="relative" speed={0.1}>
          <motion.section
            id="contact"
            className="py-32 px-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="container mx-auto max-w-7xl">
              <motion.div
                className="text-center mb-20"
                whileInView={{ scale: [0.5, 1.1, 1] }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                  Let's Connect
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
                <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
                  Ready to bring your ideas to life? Let's discuss your next project.
                </p>
              </motion.div>
              
              <Enhanced3DCard glowColor="#ec4899" className="max-w-5xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10">
                <ContactSection />
              </Enhanced3DCard>
            </div>
          </motion.section>
        </ParallaxSection>

        {/* Enhanced Footer */}
        <motion.div
          className="relative z-10 mt-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="border-t border-white/10 backdrop-blur-xl bg-white/5">
            <Footer />
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2 h-2 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Enhanced3DIndex;