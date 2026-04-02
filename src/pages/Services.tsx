import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Code, Megaphone, BarChart3, Zap, Smartphone, Globe, Shield, Database } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const services = [
  {
    title: 'Web Development',
    desc: 'Custom, high-performance websites built with React, Next.js, and modern tech stacks.',
    icon: Globe,
    benefits: ['Responsive Design', 'SEO Friendly', 'Fast Loading', 'Secure'],
    deliverables: ['Source Code', 'Deployment', 'Documentation'],
    color: 'text-blue-400',
  },
  {
    title: 'Android Development',
    desc: 'Native and cross-platform mobile applications that provide seamless user experiences.',
    icon: Smartphone,
    benefits: ['User-Centric UI', 'High Performance', 'Offline Support', 'Scalable'],
    deliverables: ['APK/AAB Files', 'Play Store Setup', 'API Integration'],
    color: 'text-purple-400',
  },
  {
    title: 'Digital Marketing',
    desc: 'Comprehensive marketing strategies to grow your brand and increase conversions.',
    icon: Megaphone,
    benefits: ['Targeted Campaigns', 'ROI Focused', 'Brand Growth', 'Analytics'],
    deliverables: ['Campaign Reports', 'Ad Management', 'Strategy Doc'],
    color: 'text-pink-400',
  },
  {
    title: 'SEO Optimization',
    desc: 'Technical and on-page SEO to improve your search engine rankings organically.',
    icon: BarChart3,
    benefits: ['Higher Rankings', 'More Traffic', 'Better Visibility', 'Authority'],
    deliverables: ['SEO Audit', 'Keyword Strategy', 'Backlink Plan'],
    color: 'text-yellow-400',
  },
  {
    title: 'Automation Solutions',
    desc: 'Custom scripts and tools to automate repetitive business tasks and save time.',
    icon: Zap,
    benefits: ['Time Saving', 'Error Reduction', 'Efficiency', 'Cost Effective'],
    deliverables: ['Custom Scripts', 'Workflow Setup', 'Training'],
    color: 'text-green-400',
  },
  {
    title: 'System Management',
    desc: 'End-to-end management of your business systems, servers, and admin panels.',
    icon: Database,
    benefits: ['24/7 Monitoring', 'Security Updates', 'Backup Management', 'Uptime'],
    deliverables: ['Admin Dashboard', 'Server Setup', 'Maintenance Plan'],
    color: 'text-cyan-400',
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <Helmet>
        <title>Our Services | Addword Agency Digital Solutions</title>
        <meta name="description" content="Explore Addword's range of services including web development, app development, and digital marketing." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Specialized{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            We provide end-to-end digital solutions designed to help your business scale efficiently and effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <GlassCard key={i} delay={i * 0.1} className="flex flex-col h-full">
              <div className={cn('w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8', service.color)}>
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Key Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium text-gray-300">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link
                  to="/contact"
                  className="block w-full py-3 bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-600 text-white text-center rounded-xl text-sm font-bold transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
