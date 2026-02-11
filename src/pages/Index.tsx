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
        <title>Nanbon | Full-Stack Developer — Modern Web Applications & Creative Solutions</title>
        <meta name="description" content="Expert full-stack developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable, performant applications for startups and enterprises." />
        <meta name="keywords" content="full-stack developer, react developer, next.js, node.js, web developer, software engineer" />
        <link rel="canonical" href="https://nanbon.lovable.app" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nanbon.lovable.app" />
        <meta property="og:title" content="Nanbon | Full-Stack Developer — Modern Web Apps" />
        <meta property="og:description" content="Expert full-stack developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable, performant applications." />
        <meta property="og:image" content="https://nanbon.lovable.app/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="640" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nanbon | Full-Stack Developer" />
        <meta name="twitter:description" content="Building scalable, modern web applications with cutting-edge technology." />
        <meta name="twitter:image" content="https://nanbon.lovable.app/og-image.png" />

        {/* Additional SEO */}
        <meta name="author" content="Nanbon" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#7c3aed" />
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
