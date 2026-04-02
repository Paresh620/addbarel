import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import emailjs from '@emailjs/browser';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { cn } from '../lib/utils';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // 1. Save to Firestore
      await addDoc(collection(db, 'leads'), {
        ...formState,
        createdAt: serverTimestamp(),
      });

      // 2. Send Email via EmailJS
      // Note: We are not awaiting this to prevent form from hanging if EmailJS fails, 
      // but we still want to attempt it.
      emailjs.send(
        'service_p1s500p',
        'template_c2143x2',
        {
          from_name: formState.name,
          reply_to: formState.email,
          subject: `New Lead: ${formState.service}`,
          message: `
            Name: ${formState.name}
            Email: ${formState.email}
            Phone: ${formState.phone}
            Company: ${formState.company}
            Service: ${formState.service}
            Budget: ${formState.budget}
            Message: ${formState.message}
          `,
        },
        'Qf4-mnxfKW0-SdFRQ'
      ).catch(err => console.error('EmailJS error:', err));

      setStatus('success');
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-24">
      <Helmet>
        <title>Contact Us | Addword Agency</title>
        <meta name="description" content="Get in touch with Addword for a free consultation on your next digital project." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to take your digital presence to the next level? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <GlassCard hover={false} className="h-full">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email Us</p>
                    <p className="text-lg font-medium">hello@addword.agency</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center text-purple-400 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Call Us</p>
                    <p className="text-lg font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-600/20 flex items-center justify-center text-pink-400 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Visit Us</p>
                    <p className="text-lg font-medium">123 Digital Way, Tech City, TC 10101</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10">
                <h4 className="font-semibold mb-4">Follow Our Journey</h4>
                <div className="flex space-x-4">
                  {['FB', 'TW', 'IG', 'LI'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <GlassCard hover={false}>
              {status === 'success' ? (
                <div className="py-20 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mx-auto mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                  <p className="text-gray-400 mb-8">
                    Thank you for reaching out. We've received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-8 py-3 bg-blue-600 rounded-full font-bold hover:bg-blue-700 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Full Name</label>
                      <input
                        required
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Email Address</label>
                      <input
                        required
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Phone Number</label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Company Name</label>
                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Your Business"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Service Required</label>
                      <select
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                      >
                        <option value="" className="bg-black">Select a service</option>
                        <option value="web" className="bg-black">Web Development</option>
                        <option value="app" className="bg-black">Android Development</option>
                        <option value="marketing" className="bg-black">Digital Marketing</option>
                        <option value="seo" className="bg-black">SEO Optimization</option>
                        <option value="automation" className="bg-black">Automation</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Budget Range</label>
                      <select
                        value={formState.budget}
                        onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                      >
                        <option value="" className="bg-black">Select budget</option>
                        <option value="1k-5k" className="bg-black">$1,000 - $5,000</option>
                        <option value="5k-10k" className="bg-black">$5,000 - $10,000</option>
                        <option value="10k-25k" className="bg-black">$10,000 - $25,000</option>
                        <option value="25k+" className="bg-black">$25,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Project Details</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell us about your project goals..."
                    />
                  </div>

                  <button
                    disabled={status === 'loading'}
                    type="submit"
                    className={cn(
                      "w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed",
                      status === 'success' ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
                    )}
                  >
                    {status === 'loading' ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : status === 'success' ? (
                      <>
                        <span>Your submit successful</span>
                        <CheckCircle2 size={18} />
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
