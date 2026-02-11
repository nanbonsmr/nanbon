import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ClientsSection } from '@/components/ClientsSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
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
        <title>Nanbon — Creative Digital Agency | Web Design & Development</title>
        <meta name="description" content="Creative digital agency specializing in web design, brand identity, UI/UX, and modern web development. We build digital experiences that matter." />
        <meta name="keywords" content="creative agency, web design, brand identity, UI/UX design, web development, digital marketing" />
        <link rel="canonical" href="https://nanbon.lovable.app" />
      </Helmet>
      
      <LoadingScreen />
      
      <div className="min-h-screen bg-background relative">
        <Navbar />
        <main>
          <HeroSection />
          <ClientsSection />
          <AboutSection />
          <ServicesSection />
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
