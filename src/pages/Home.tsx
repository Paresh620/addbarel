import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Code, Megaphone, BarChart3, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import { Helmet } from 'react-helmet-async';
import { cn } from '../lib/utils';
import SchemaMarkup from '../components/SchemaMarkup';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative overflow-hidden">
      <Helmet>
        <title>Addword Agency | Premium Digital Marketing & Web Development</title>
        <meta name="description" content="Addword is a premium digital agency specializing in web development, Android apps, and data-driven marketing solutions." />
      </Helmet>

      <SchemaMarkup
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Addword Agency",
          "url": "https://addword.agency",
          "logo": "https://addword.agency/logo.png",
          "sameAs": [
            "https://facebook.com/addword",
            "https://twitter.com/addword",
            "https://instagram.com/addword",
            "https://linkedin.com/company/addword"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service"
          }
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-8"
            >
              <Sparkles size={16} />
              <span>Redefining Digital Excellence</span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
            >
              Build the Future of Your{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Digital Presence
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              We combine cutting-edge technology with creative strategy to build high-performance websites, apps, and marketing campaigns that scale.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-blue-600 rounded-full font-semibold text-white overflow-hidden transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Start Your Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-semibold text-white hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Tailored solutions designed to help your business thrive in the modern digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                desc: 'High-performance, responsive websites built with modern frameworks.',
                icon: Code,
                color: 'text-blue-400',
              },
              {
                title: 'Digital Marketing',
                desc: 'Data-driven strategies to increase your brand visibility and ROI.',
                icon: Megaphone,
                color: 'text-purple-400',
              },
              {
                title: 'SEO Optimization',
                desc: 'Rank higher on search engines and drive organic traffic to your site.',
                icon: BarChart3,
                color: 'text-pink-400',
              },
              {
                title: 'Automation',
                desc: 'Streamline your business processes with custom automation tools.',
                icon: Zap,
                color: 'text-yellow-400',
              },
            ].map((service, i) => (
              <GlassCard key={i} delay={i * 0.1}>
                <div className={cn('w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6', service.color)}>
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link to="/services" className="text-blue-400 text-sm font-medium flex items-center hover:underline">
                  Learn more <ArrowRight size={14} className="ml-1" />
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Projects Completed', value: '100+' },
              { label: 'Happy Clients', value: '100+' },
              { label: 'Team Experts', value: '100+' },
              { label: 'Years Experience', value: '100+' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <GlassCard hover={false} className="text-center py-16 px-8 md:px-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to scale your business?</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Join hundreds of successful businesses that have transformed their digital presence with Addword.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all transform hover:scale-105"
            >
              Get a Free Consultation <ArrowRight className="ml-2" size={20} />
            </Link>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
