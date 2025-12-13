import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and Tailwind CSS for frontend development. For backend, I work with Express, PostgreSQL, MongoDB, and Supabase. I also have experience with Three.js for 3D graphics and various DevOps tools.',
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on complexity. A simple landing page can be completed in 1-2 weeks, while a full-stack SaaS application typically takes 4-8 weeks. I always provide detailed timelines after understanding your requirements during our initial consultation.',
  },
  {
    question: 'Do you offer ongoing maintenance and support?',
    answer: 'Yes! I offer maintenance packages that include bug fixes, security updates, performance optimization, and feature enhancements. I believe in building long-term relationships with clients and ensuring their applications continue to perform optimally.',
  },
  {
    question: 'How do you handle project communication?',
    answer: 'Clear communication is essential. I use tools like Slack, Discord, or email for daily updates. We\'ll have weekly video calls to discuss progress, and you\'ll have access to a project management board to track milestones. I\'m always responsive and available for urgent matters.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'I offer flexible pricing options including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project scope, complexity, and timeline. Contact me for a free consultation and custom quote tailored to your specific needs.',
  },
  {
    question: 'Can you work with my existing team?',
    answer: 'Absolutely! I have extensive experience collaborating with in-house teams, designers, and other developers. I\'m comfortable with Git workflows, code reviews, and integrating into existing development processes. Team collaboration is one of my strengths.',
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faq" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Got questions? I've got answers. Here are some common inquiries from clients.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="glass-card rounded-xl px-4 sm:px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-display font-medium text-sm sm:text-base text-foreground hover:text-primary hover:no-underline py-4 sm:py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4 sm:pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-muted-foreground">
            Still have questions?{' '}
            <a href="#contact" className="text-primary hover:underline font-medium">
              Get in touch
            </a>{' '}
            and I'll be happy to help!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
