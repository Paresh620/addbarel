import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { formatDate } from '../lib/utils';

// Mock Blog Data (Same as Blog.tsx)
const MOCK_POSTS = [
  {
    title: 'Why a Modern Website Is Essential for Business Growth',
    slug: 'modern-website-business-growth',
    content: `
      <p>In today's digital-first world, your website is often the first point of contact between your brand and potential customers. A modern website is no longer a luxury; it's a fundamental requirement for any business looking to grow and succeed.</p>
      
      <h2>1. First Impressions Matter</h2>
      <p>Studies show that users form an opinion about your website in about 0.05 seconds. If your site looks outdated or is difficult to navigate, you're losing potential customers before they even see what you offer.</p>
      
      <h2>2. Mobile-First Experience</h2>
      <p>With over 60% of web traffic coming from mobile devices, a responsive design is critical. A modern website ensures that your content looks great and functions perfectly on every screen size.</p>
      
      <h2>3. Speed and Performance</h2>
      <p>Modern web technologies allow for lightning-fast load times. A delay of even a few seconds can significantly increase your bounce rate and hurt your search engine rankings.</p>
      
      <h2>4. Trust and Credibility</h2>
      <p>A professional, well-designed website signals to customers that you are a legitimate, trustworthy business. It provides a platform to showcase testimonials, case studies, and your expertise.</p>
      
      <h2>Conclusion</h2>
      <p>Investing in a modern website is an investment in your business's future. It's the foundation of your digital marketing efforts and your most powerful sales tool.</p>
    `,
    excerpt: 'In today\'s digital-first world, your website is often the first point of contact between your brand and potential customers.',
    date: '2026-03-15',
    author: 'Paresh Mallick',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/web/1200/600',
  },
  // ... other posts would be here
];

export default function BlogPost() {
  const { slug } = useParams();
  const post = MOCK_POSTS.find(p => p.slug === slug) || MOCK_POSTS[0]; // Fallback to first post for demo

  return (
    <div className="pt-32 pb-24">
      <Helmet>
        <title>{post.title} | Addword Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-gray-400 hover:text-blue-400 mb-12 transition-colors group"
        >
          <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center space-x-4 text-sm text-blue-400 font-bold uppercase tracking-widest mb-6">
            <span>{post.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm mb-12 border-y border-white/10 py-6">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 mr-3">
                <User size={20} />
              </div>
              <div>
                <p className="text-white font-medium">{post.author}</p>
                <p className="text-xs text-gray-500">Author</p>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar size={18} className="mr-2 text-blue-400" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center ml-auto space-x-4">
              <span className="text-xs uppercase font-bold tracking-widest">Share:</span>
              <div className="flex space-x-2">
                {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <button key={i} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                    <Icon size={14} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden mb-12 border border-white/10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          <div 
            className="prose prose-invert prose-blue max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Related CTA */}
          <GlassCard hover={false} className="p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Need help with your {post.category}?</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Our experts are ready to help you implement these strategies and grow your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-blue-600 rounded-full font-bold hover:bg-blue-700 transition-all"
            >
              Get Started Today
            </Link>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
