import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 92 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Three.js', level: 75 },
    ],
    color: 'from-primary to-primary/50',
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 88 },
      { name: 'Prisma', level: 85 },
      { name: 'GraphQL', level: 80 },
      { name: 'REST APIs', level: 95 },
    ],
    color: 'from-secondary to-secondary/50',
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 75 },
      { name: 'Supabase', level: 82 },
    ],
    color: 'from-accent to-accent/50',
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'CI/CD', level: 85 },
      { name: 'Git', level: 95 },
      { name: 'Figma', level: 78 },
      { name: 'Vercel', level: 90 },
    ],
    color: 'from-primary via-secondary to-accent',
  },
];

function SkillCard({ category, index, isInView }: { category: typeof skillCategories[0]; index: number; isInView: boolean }) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -5 }}
      className="glass-card rounded-2xl p-6 md:p-8 group"
    >
      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${category.color} bg-opacity-20 mb-6`}>
        <span className="font-display font-semibold text-foreground">{category.title}</span>
      </div>

      <div className="space-y-5">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="group/skill"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-foreground group-hover/skill:text-primary transition-colors">
                {skill.name}
              </span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                className={`h-full rounded-full bg-gradient-to-r ${category.color} ${
                  hoveredSkill === skill.name ? 'shadow-[0_0_15px_hsl(270_95%_60%/0.5)]' : ''
                } transition-shadow duration-300`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience with modern technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
