import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import peakdraftImg from '@/assets/projects/peakdraft.png';
import peakflowImg from '@/assets/projects/peakflow.png';
import zemenayImg from '@/assets/projects/zemenay.png';
import summxImg from '@/assets/projects/summx.png';

const projects = [
  {
    title: 'PeakDraft - AI Content Generator',
    description: 'AI-powered SaaS app that generates blogs, emails, ads, and more. Features task management with Kanban boards, text humanizer, and 14+ AI templates.',
    image: peakdraftImg,
    tech: ['React', 'Tailwind CSS', 'Clerk', 'Supabase', 'Paddle', 'OpenAI', 'shadcn'],
    liveUrl: 'https://peakdraft.netlify.app',
    githubUrl: 'https://github.com/nanbonsmr/peakdraft.git',
    featured: true,
  },
  {
    title: 'PeakFlow - Blog Platform',
    description: 'Full-stack blog website with admin dashboard for content management, user management, and email notifications via Resend.',
    image: peakflowImg,
    tech: ['React', 'Tailwind CSS', 'Supabase', 'Resend'],
    liveUrl: 'https://peakflow-blog.netlify.app/',
    githubUrl: 'https://github.com/nanbonsmr/PeakFlow.git',
  },
  {
    title: 'Zemenay - Digital Agency',
    description: 'Responsive digital marketing agency website with modern design, smooth animations, and professional aesthetics.',
    image: zemenayImg,
    tech: ['React', 'Tailwind CSS', 'CSS', 'Framer Motion'],
    liveUrl: 'https://zemenay.netlify.app',
    githubUrl: 'https://github.com/nanbonsmr/zemenay.git',
  },
  {
    title: 'SummX - AI Article Summarizer',
    description: 'AI-powered article summarizer that transforms lengthy articles into clear, concise summaries using OpenAI GPT-4.',
    image: summxImg,
    tech: ['Next.js', 'React', 'shadcn', 'OpenAI API'],
    liveUrl: 'https://summx.netlify.app/',
    githubUrl: 'https://github.com/nanbonsmr/summery.git',
  },
];

function ProjectCard({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl glass-card ${
        project.featured ? 'md:col-span-2' : ''
      }`}
      style={{
        transform: isHovered ? 'perspective(1000px) rotateX(2deg) rotateY(-2deg) scale(1.02)' : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
        transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
    >
      {/* Image */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        
        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-primary/20 to-secondary/20 backdrop-blur-sm flex items-center justify-center gap-4"
        >
          <Button variant="hero" size="lg" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              Code
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Glow effect on hover */}
      {isHovered && (
        <div className="absolute inset-0 rounded-2xl pointer-events-none shadow-[inset_0_0_60px_hsl(270_95%_60%/0.1)]" />
      )}
    </motion.div>
  );
}

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills in building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Button variant="hero-outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
