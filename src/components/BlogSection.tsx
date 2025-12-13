import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: 'Building Scalable SaaS Applications with React and Supabase',
    excerpt: 'Learn how to architect and build production-ready SaaS applications using React, Supabase, and modern best practices for scalability.',
    category: 'Development',
    date: 'Dec 10, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
  },
  {
    title: 'The Power of AI in Modern Web Development',
    excerpt: 'Discover how AI tools and APIs are revolutionizing the way we build web applications and enhance user experiences.',
    category: 'AI & Tech',
    date: 'Dec 5, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  },
  {
    title: 'Mastering Tailwind CSS: Tips and Tricks for 2024',
    excerpt: 'Advanced techniques and patterns for building beautiful, responsive UIs faster with Tailwind CSS utility classes.',
    category: 'CSS',
    date: 'Nov 28, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=400&fit=crop',
  },
  {
    title: 'Next.js 14: A Complete Guide to App Router',
    excerpt: 'Everything you need to know about the new App Router in Next.js 14, including server components and streaming.',
    category: 'Next.js',
    date: 'Nov 20, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
  },
  {
    title: 'Authentication Best Practices for Web Apps',
    excerpt: 'Secure your applications with modern authentication strategies including OAuth, JWT, and session management.',
    category: 'Security',
    date: 'Nov 15, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop',
  },
  {
    title: 'Creating Stunning 3D Experiences with Three.js',
    excerpt: 'A beginner-friendly guide to adding immersive 3D graphics to your web projects using Three.js and React.',
    category: '3D Graphics',
    date: 'Nov 8, 2024',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop',
  },
];

function BlogCard({ post, index, isInView }: { post: typeof blogPosts[0]; index: number; isInView: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group glass-card rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>

        <h3 className="font-display font-semibold text-base sm:text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {post.excerpt}
        </p>

        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
          Read More
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </motion.article>
  );
}

export function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4">
            Latest <span className="gradient-text">Blog Posts</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development and technology
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.title}
              post={post}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <Button variant="hero-outline" size="lg">
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
