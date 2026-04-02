import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { formatDate, cn } from '../lib/utils';

// Mock Blog Data
const MOCK_POSTS = [
  {
    title: 'Why a Modern Website Is Essential for Business Growth',
    slug: 'modern-website-business-growth',
    excerpt: 'In today\'s digital-first world, your website is often the first point of contact between your brand and potential customers.',
    date: '2026-03-15',
    author: 'Paresh Mallick',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/web/800/600',
  },
  {
    title: 'How Digital Marketing Generates Leads for Local Businesses',
    slug: 'digital-marketing-lead-gen',
    excerpt: 'Discover the most effective digital marketing strategies to drive high-quality leads to your local business.',
    date: '2026-03-20',
    author: 'Admin',
    category: 'Marketing',
    image: 'https://picsum.photos/seed/marketing/800/600',
  },
  {
    title: 'The Power of Social Media Management for Brand Visibility',
    slug: 'social-media-brand-visibility',
    excerpt: 'Learn how consistent social media management can transform your brand\'s online presence and engagement.',
    date: '2026-03-25',
    author: 'Marketing Team',
    category: 'Social Media',
    image: 'https://picsum.photos/seed/social/800/600',
  },
  {
    title: 'How Automation Can Save Time and Increase Sales',
    slug: 'automation-save-time-increase-sales',
    excerpt: 'Automation isn\'t just for big corporations. See how small businesses are using it to scale efficiently.',
    date: '2026-03-28',
    author: 'Tech Expert',
    category: 'Automation',
    image: 'https://picsum.photos/seed/automation/800/600',
  },
  {
    title: 'Why Custom Dashboards Improve Business Operations',
    slug: 'custom-dashboards-business-ops',
    excerpt: 'Stop relying on generic tools. A custom dashboard gives you the exact insights you need to manage your business.',
    date: '2026-04-01',
    author: 'Dev Team',
    category: 'System Management',
    image: 'https://picsum.photos/seed/dashboard/800/600',
  },
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Marketing', 'Social Media', 'Automation', 'System Management'];

  const filteredPosts = MOCK_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-24">
      <Helmet>
        <title>Blog | Addword Agency Insights</title>
        <meta name="description" content="Stay updated with the latest trends in digital marketing, web development, and business automation." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Latest{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Insights
            </span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Expert advice, industry trends, and strategic guides to help your business succeed in the digital era.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  activeCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, i) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <GlassCard delay={i * 0.1} className="h-full flex flex-col p-0 overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center text-blue-400 text-sm font-bold">
                    Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
