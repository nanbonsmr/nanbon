import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Full-Stack Developer — School Examination Platform',
    company: 'Personal / School Project',
    location: 'Ethiopia',
    period: '2024 - Present',
    description:
      'Designed and built a complete online examination platform for my school, covering everything from student authentication to real-time exam delivery, grading, and result analytics.',
    achievements: [
      'Built end-to-end: auth, exam engine, question bank, timer, and auto-grading',
      'Role-based dashboards for admins, teachers, and students',
      'Secure exam sessions with anti-cheating safeguards and result analytics',
    ],
    current: true,
  },
  {
    title: 'Freelance Developer & Hackathon Builder',
    company: 'Independent',
    location: 'Remote',
    period: '2023 - Present',
    description:
      'Worked on a variety of projects across different hackathons and as a freelancer — shipping web apps, landing pages, and full-stack products for clients and teams.',
    achievements: [
      'Participated in multiple hackathons, shipping working products under tight deadlines',
      'Delivered freelance web apps and landing pages for diverse clients',
      'Collaborated with cross-functional teams across design, backend, and product',
    ],
  },
];

function TimelineItem({ experience, index, isInView, isLast }: { 
  experience: typeof experiences[0]; 
  index: number; 
  isInView: boolean;
  isLast: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex gap-6 md:gap-8"
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.1 }}
          className={`relative z-10 w-4 h-4 rounded-full shrink-0 ${
            experience.current
              ? 'bg-accent shadow-[0_0_20px_hsl(var(--accent)/0.6)]'
              : 'bg-primary shadow-[0_0_15px_hsl(var(--primary)/0.4)]'
          }`}
        >
          {experience.current && (
            <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-50" />
          )}
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
            className="w-0.5 flex-1 min-h-[40px] bg-gradient-to-b from-primary/60 to-primary/10 origin-top"
          />
        )}
      </div>

      {/* Content card */}
      <motion.div
        whileHover={{ scale: 1.01, x: 5 }}
        transition={{ duration: 0.2 }}
        className="flex-1 glass-card rounded-2xl p-6 md:p-8 group cursor-pointer mb-6"
      >
        {/* Period badge */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="flex items-center gap-1.5 text-sm font-medium text-primary">
            <Calendar className="w-4 h-4" />
            {experience.period}
          </span>
          {experience.current && (
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent border border-accent/30">
              Current
            </span>
          )}
        </div>

        {/* Title and company */}
        <h3 className="text-xl md:text-2xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
          {experience.title}
        </h3>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5">
            <Briefcase className="w-4 h-4" />
            {experience.company}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            {experience.location}
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {experience.description}
        </p>

        {/* Achievements */}
        <ul className="space-y-2">
          {experience.achievements.map((achievement, i) => (
            <li
              key={i}
              className="text-sm text-foreground/80 flex items-start gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent mt-2 shrink-0" />
              {achievement}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through my professional career and the milestones achieved along the way
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.title + experience.company}
              experience={experience}
              index={index}
              isInView={isInView}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
