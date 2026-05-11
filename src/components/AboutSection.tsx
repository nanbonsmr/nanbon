import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';
import portraitImg from '@/assets/nanbon-portrait.png';

const stats = [
  { icon: Code2, value: '2+', label: 'Years Experience' },
  { icon: Rocket, value: '50+', label: 'Projects Delivered' },
  { icon: Users, value: '30+', label: 'Happy Clients' },
  { icon: Lightbulb, value: '100+', label: 'Problems Solved' },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8 lg:mb-12">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 animate-pulse-glow" />

              {/* Image card */}
              <div className="relative glass-card rounded-3xl overflow-hidden animated-border">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none z-10" />
                <img
                  src={portraitImg}
                  alt="Nanbon Samuel — Full-Stack Developer portrait"
                  loading="lazy"
                  className="w-full h-auto object-cover relative z-0 transition-transform duration-700 group-hover:scale-105"
                />
                {/* Bottom overlay badge */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-background/95 via-background/60 to-transparent z-20">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
                    </span>
                    <div>
                      <div className="font-display font-semibold text-sm sm:text-base">Nanbon Samuel</div>
                      <div className="text-xs text-muted-foreground">Full-Stack Developer · Ethiopia</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating chip */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:flex absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-3 items-center gap-2 z-30"
              >
                <Code2 className="w-4 h-4 text-accent" />
                <span className="text-xs font-medium">2+ Years Coding</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 md:p-10"
          >
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-4 sm:mb-6 gradient-text">
              Hello, I'm a Full-Stack Developer
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                With over 2 years of experience in web development, I specialize in building 
                high-performance, scalable applications that solve real-world problems.
              </p>
              <p>
                My expertise spans the entire development stack – from crafting pixel-perfect 
                user interfaces with React and Next.js, to designing robust backend systems 
                with Node.js and modern databases.
              </p>
              <p>
                I'm passionate about clean code, innovative solutions, and pushing the 
                boundaries of what's possible on the web. When I'm not coding, you'll find 
                me exploring new technologies and contributing to open-source projects.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
              {['Problem Solver', 'Clean Code Advocate', 'Performance Obsessed', 'Always Learning'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-muted text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center group cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:shadow-[0_0_30px_hsl(270_95%_60%/0.4)] transition-all duration-300">
                <stat.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
              </div>
              <div className="text-2xl sm:text-3xl font-display font-bold gradient-text mb-1">
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
