import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Tag, Clock, ArrowRight, Gift } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const offers = [
  {
    title: 'Free SEO Audit',
    desc: 'Get a comprehensive report of your website\'s current SEO performance and a roadmap to improve rankings.',
    validity: 'Limited Time Offer',
    cta: 'Claim Free Audit',
    icon: Gift,
    color: 'text-blue-400',
  },
  {
    title: '20% Off Web Development',
    desc: 'Start your new website project this month and get a 20% discount on the total project cost.',
    validity: 'Valid until April 30, 2026',
    cta: 'Get Discount',
    icon: Tag,
    color: 'text-purple-400',
  },
  {
    title: 'Free Social Media Strategy',
    desc: 'Book a consultation and receive a custom 30-day social media content plan for your brand.',
    validity: 'New Clients Only',
    cta: 'Book Now',
    icon: Clock,
    color: 'text-pink-400',
  },
];

export default function Offers() {
  return (
    <div className="pt-32 pb-24">
      <Helmet>
        <title>Special Offers | Addword Agency Promotions</title>
        <meta name="description" content="Check out our latest promotional offers and discounts on digital marketing and web development services." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Exclusive{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Offers
            </span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Take advantage of these limited-time promotions to grow your business without breaking the bank.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, i) => (
            <GlassCard key={i} delay={i * 0.1} className="flex flex-col h-full text-center">
              <div className={cn('w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-8', offer.color)}>
                <offer.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{offer.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {offer.desc}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                  <Clock size={14} />
                  <span>{offer.validity}</span>
                </div>
                
                <Link
                  to="/contact"
                  className="block w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-all"
                >
                  {offer.cta}
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Referral Program */}
        <div className="mt-24">
          <GlassCard hover={false} className="p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Refer a Friend & Earn</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                Know a business that needs a digital boost? Refer them to Addword and earn a 10% commission on their first project or credit towards your next service.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Learn More About Referrals <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
