import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { getBlogPost, blogPosts } from '@/lib/blogData';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = getBlogPost(id || '');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild variant="hero">
            <Link to="/#blog">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  // Get related posts (excluding current)
  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{post.title} | Nanbon Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[40vh] sm:h-[50vh] overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </motion.div>

          <div className="container mx-auto px-4 sm:px-6 -mt-32 relative z-10">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Link to="/#blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
            </motion.div>

            {/* Article Header */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="glass-card rounded-2xl p-6 sm:p-10 mb-8">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground mb-4">
                  {post.category}
                </span>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground mb-8">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Article Content */}
              <div className="glass-card rounded-2xl p-6 sm:p-10">
                <div 
                  className="prose prose-invert prose-lg max-w-none
                    prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground
                    prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                    prose-p:text-muted-foreground prose-p:leading-relaxed
                    prose-strong:text-foreground
                    prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                    prose-pre:bg-muted prose-pre:border prose-pre:border-border
                    prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                    prose-li:marker:text-primary"
                  dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
                />
              </div>
            </motion.article>

            {/* Related Posts */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto mt-16"
            >
              <h2 className="text-2xl font-display font-bold mb-8">
                Related <span className="gradient-text">Posts</span>
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="group glass-card rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
                  >
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground">
                        {relatedPost.category}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-display font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2">{relatedPost.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
