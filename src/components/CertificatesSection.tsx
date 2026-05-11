import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import certUdacity from '@/assets/certificate-udacity-programming.png';

const certificates = [
  {
    title: 'Programming Fundamentals',
    issuer: 'Udacity (Part of Accenture)',
    date: 'December 6, 2024',
    description:
      'Verified Certificate of Nanodegree Program Completion covering core programming foundations, problem solving, and software engineering best practices.',
    image: certUdacity,
    link: 'https://www.udacity.com/certificate/e/d44d438e-a3a4-11ef-81ba-136508d4a233',
    skills: ['Problem Solving', 'Algorithms', 'Clean Code', 'CS Fundamentals'],
  },
];

export function CertificatesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certificates" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Certificates & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Verified achievements and continuous learning milestones
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-10 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + index * 0.1 }}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

              <div className="relative glass-card rounded-3xl overflow-hidden animated-border grid lg:grid-cols-12 gap-0">
                {/* Image side */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:col-span-7 relative block overflow-hidden bg-muted/30"
                  aria-label={`View ${cert.title} certificate`}
                >
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate issued by ${cert.issuer}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 glass-card rounded-full px-3 py-1.5 text-xs font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    Verified
                  </div>
                </a>

                {/* Content side */}
                <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-primary">
                      <Award className="w-5 h-5" />
                      <span className="text-sm font-medium">{cert.issuer}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 gradient-text">
                      {cert.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                      Issued {cert.date}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {cert.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300 hover:scale-[1.02]"
                  >
                    Verify Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
