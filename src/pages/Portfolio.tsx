import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { cn } from '../lib/utils';

const projects = [
  {
    id: 1,
    title: 'E-commerce Revolution',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/shop/800/600',
    challenge: 'The client needed a high-performance store that could handle 10k+ concurrent users.',
    solution: 'We built a headless commerce solution using Next.js and Shopify API.',
    result: '45% increase in conversion rate and 60% faster load times.',
    tech: ['React', 'Next.js', 'Tailwind', 'Shopify'],
  },
  {
    id: 2,
    title: 'FinTech Mobile App',
    category: 'App Development',
    image: 'https://picsum.photos/seed/finance/800/600',
    challenge: 'Creating a secure, user-friendly interface for complex financial transactions.',
    solution: 'Developed a Flutter app with biometric auth and real-time data syncing.',
    result: 'Over 100k downloads in the first 3 months with 4.8 star rating.',
    tech: ['Flutter', 'Firebase', 'Node.js'],
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    category: 'System Management',
    image: 'https://picsum.photos/seed/saas/800/600',
    challenge: 'Visualizing large datasets for business owners in an intuitive way.',
    solution: 'Custom React dashboard with D3.js for advanced data visualization.',
    result: 'Reduced reporting time for the client by 80%.',
    tech: ['React', 'D3.js', 'PostgreSQL'],
  },
  {
    id: 4,
    title: 'Global SEO Campaign',
    category: 'Marketing',
    image: 'https://picsum.photos/seed/seo/800/600',
    challenge: 'The client was invisible on Google for their primary keywords.',
    solution: 'Comprehensive technical SEO audit and content cluster strategy.',
    result: 'Ranked #1 for 15 high-volume keywords within 6 months.',
    tech: ['Ahrefs', 'SEMrush', 'Content Strategy'],
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Web Development', 'App Development', 'Marketing', 'System Management'];

  const filteredProjects = projects.filter(p => activeFilter === 'All' || p.category === activeFilter);

  return (
    <div className="pt-32 pb-24">
      <Helmet>
        <title>Portfolio | Addword Agency Case Studies</title>
        <meta name="description" content="Explore our successful projects and see how we've helped businesses grow through technology and marketing." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of our best work across web development, mobile apps, and digital marketing.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                'px-6 py-2 rounded-full text-sm font-medium transition-all border',
                activeFilter === cat
                  ? 'bg-blue-600 border-blue-600 text-white'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <GlassCard className="p-0 overflow-hidden group h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                      <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                        <ExternalLink size={20} />
                      </button>
                      <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                        <Github size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="p-8 flex-grow">
                    <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</div>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    
                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">Challenge</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">Result</h4>
                        <p className="text-green-400/80 text-sm leading-relaxed">{project.result}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-md bg-white/5 text-[10px] font-medium text-gray-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
