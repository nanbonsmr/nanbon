import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Database, 
  Server, 
  Palette, 
  Cloud, 
  Wrench,
  Blocks,
  FileCode,
  Terminal,
  Layers,
  Globe,
  Zap,
  GitBranch,
  Layout,
  Figma,
  Box
} from 'lucide-react';

const skills = [
  { name: 'React', icon: Code2, category: 'Frontend' },
  { name: 'Next.js', icon: Blocks, category: 'Frontend' },
  { name: 'TypeScript', icon: FileCode, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: Palette, category: 'Frontend' },
  { name: 'Three.js', icon: Box, category: 'Frontend' },
  { name: 'Node.js', icon: Server, category: 'Backend' },
  { name: 'Express', icon: Terminal, category: 'Backend' },
  { name: 'REST APIs', icon: Globe, category: 'Backend' },
  { name: 'GraphQL', icon: Layers, category: 'Backend' },
  { name: 'PostgreSQL', icon: Database, category: 'Database' },
  { name: 'MongoDB', icon: Database, category: 'Database' },
  { name: 'Supabase', icon: Zap, category: 'Database' },
  { name: 'Git', icon: GitBranch, category: 'Tools' },
  { name: 'Docker', icon: Cloud, category: 'Tools' },
  { name: 'Vercel', icon: Layout, category: 'Tools' },
  { name: 'Figma', icon: Figma, category: 'Tools' },
];

const categories = ['Frontend', 'Backend', 'Database', 'Tools'];

const categoryColors: Record<string, string> = {
  Frontend: 'from-primary to-primary/60',
  Backend: 'from-secondary to-secondary/60',
  Database: 'from-accent to-accent/60',
  Tools: 'from-primary via-secondary to-accent',
};

function SkillCard({ skill, index, isInView }: { skill: typeof skills[0]; index: number; isInView: boolean }) {
  const Icon = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="group relative"
    >
      <div className="glass-card rounded-xl p-3 sm:p-4 flex flex-col items-center gap-2 sm:gap-3 cursor-pointer transition-all duration-300 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] group-hover:border-primary/50">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${categoryColors[skill.category]} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
        </div>
        <span className="font-medium text-xs sm:text-sm text-foreground text-center group-hover:text-primary transition-colors">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience with modern technologies
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          {categories.map((category, index) => (
            <motion.span
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r ${categoryColors[category]} text-primary-foreground`}
            >
              {category}
            </motion.span>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          {[
            { value: '16+', label: 'Technologies' },
            { value: '2+', label: 'Years Experience' },
            { value: '50+', label: 'Projects Completed' },
            { value: '100%', label: 'Dedication' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="glass-card rounded-xl p-4 sm:p-6 text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold gradient-text mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
