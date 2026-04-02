import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { CheckCircle2, Target, Eye, Heart, Users } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { cn } from '../lib/utils';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <Helmet>
        <title>About Us | Addword Agency Story</title>
        <meta name="description" content="Learn about Addword's mission, vision, and the team behind our premium digital solutions." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Story &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Vision
            </span>
          </motion.h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Founded with a passion for digital excellence, Addword has grown into a full-service agency that bridges the gap between complex technology and business growth.
          </p>
        </div>

        {/* Mission/Vision/Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: 'Our Mission',
              desc: 'To empower businesses with innovative digital solutions that drive measurable growth and lasting impact.',
              icon: Target,
              color: 'text-blue-400',
            },
            {
              title: 'Our Vision',
              desc: 'To be the global leader in digital transformation, setting new standards for quality and creativity.',
              icon: Eye,
              color: 'text-purple-400',
            },
            {
              title: 'Our Values',
              desc: 'Integrity, innovation, and client success are at the heart of everything we do.',
              icon: Heart,
              color: 'text-pink-400',
            },
          ].map((item, i) => (
            <GlassCard key={i} delay={i * 0.1}>
              <div className={cn('w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6', item.color)}>
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Clients Choose Addword</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We don't just build websites or run ads; we build partnerships. Our approach is deeply rooted in understanding your business goals and translating them into high-performance digital assets.
            </p>
            <ul className="space-y-4">
              {[
                'Data-driven decision making',
                'Cutting-edge technology stack',
                'Transparent communication',
                'Focus on ROI and scalability',
                'Dedicated support team',
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle2 size={20} className="text-blue-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative z-10">
              <img
                src="https://picsum.photos/seed/agency/800/800"
                alt="Our Team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full -z-10" />
          </motion.div>
        </div>

        {/* Team Narrative */}
        <GlassCard hover={false} className="text-center py-16">
          <Users size={48} className="text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Meet the Experts</h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our team consists of senior developers, creative designers, and strategic marketers who have worked with some of the world's leading brands. We bring that same level of expertise to every project we undertake.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
