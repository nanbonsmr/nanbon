import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

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
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 md:p-10"
          >
            <h3 className="text-2xl font-display font-semibold mb-6 gradient-text">
              Hello, I'm a Full-Stack Developer
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
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

            <div className="mt-8 flex flex-wrap gap-3">
              {['Problem Solver', 'Clean Code Advocate', 'Performance Obsessed', 'Always Learning'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-2xl p-6 text-center group cursor-pointer"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:shadow-[0_0_30px_hsl(270_95%_60%/0.4)] transition-all duration-300">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl font-display font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
