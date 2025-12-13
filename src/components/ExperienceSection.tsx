import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovators Inc.',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: 'Leading development of enterprise SaaS applications, mentoring junior developers, and architecting scalable microservices infrastructure.',
    achievements: [
      'Reduced application load time by 60% through optimization',
      'Led a team of 5 developers on critical projects',
      'Implemented CI/CD pipelines reducing deployment time by 75%',
    ],
    current: true,
  },
  {
    title: 'Full-Stack Developer',
    company: 'Digital Solutions Agency',
    location: 'New York, NY',
    period: '2020 - 2022',
    description: 'Developed custom web applications for clients across various industries, from e-commerce to fintech.',
    achievements: [
      'Built 15+ client applications from concept to deployment',
      'Integrated payment processing handling $2M+ in transactions',
      'Achieved 99.9% uptime for all production applications',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Startup Labs',
    location: 'Austin, TX',
    period: '2019 - 2020',
    description: 'Crafted responsive user interfaces and interactive experiences for early-stage startups.',
    achievements: [
      'Converted 3 MVP prototypes into production applications',
      'Implemented design systems improving development speed by 40%',
      'Collaborated directly with founders on product strategy',
    ],
  },
  {
    title: 'Freelance Developer',
    company: 'Self-Employed',
    location: 'Remote',
    period: '2018 - 2019',
    description: 'Started freelancing journey building websites and web applications for small businesses and entrepreneurs.',
    achievements: [
      'Completed 20+ projects for clients worldwide',
      'Maintained 5-star rating on freelance platforms',
      'Built a network of recurring clients',
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
