import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '3+', label: 'Years Experience' },
];

const clientLogos = [
  'Startup Co',
  'TechFlow',
  'CloudBase',
  'DataSync',
  'AppForge',
  'PixelLab',
  'NovaTech',
  'ScaleUp',
];

export function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center glass-card rounded-2xl p-6 md:p-8"
            >
              <div className="text-3xl md:text-5xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-8">
            Trusted by innovative teams
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((name, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.4 } : {}}
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                className="text-lg md:text-xl font-display font-semibold text-muted-foreground cursor-default transition-opacity select-none"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
