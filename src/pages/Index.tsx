import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { BlogSection } from '@/components/BlogSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Full-Stack Developer | Modern Web Applications & Creative Solutions</title>
        <meta name="description" content="Expert full-stack developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable, performant applications for startups and enterprises." />
        <meta name="keywords" content="full-stack developer, react developer, next.js, node.js, web developer, software engineer" />
        <link rel="canonical" href="https://developer.com" />
      </Helmet>
      
      <LoadingScreen />
      
      <div className="min-h-screen bg-background relative">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <BlogSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
