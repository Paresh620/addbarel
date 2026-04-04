import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, FileText, Briefcase, Tag, Settings, LogOut, Plus, Search, Edit2, Trash2, Eye, User } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { collection, getCountFromServer } from 'firebase/firestore';
import { db } from '../lib/firebase';
import GlassCard from '../components/GlassCard';
import { cn } from '../lib/utils';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [leadCount, setLeadCount] = useState(0);

  useEffect(() => {
    const fetchLeadCount = async () => {
      try {
        const snapshot = await getCountFromServer(collection(db, 'leads'));
        setLeadCount(snapshot.data().count);
      } catch (error) {
        console.error('Error fetching lead count:', error);
      }
    };
    fetchLeadCount();
  }, []);

  const stats = [
    { label: 'Total Posts', value: '12', icon: FileText, color: 'text-blue-400' },
    { label: 'Services', value: '8', icon: Settings, color: 'text-purple-400' },
    { label: 'Portfolio', value: '24', icon: Briefcase, color: 'text-pink-400' },
    { label: 'Total Leads', value: leadCount.toString(), icon: User, color: 'text-green-400' },
  ];

  const recentActivity = [
    { type: 'Blog', title: 'Why Custom Dashboards...', status: 'Published', date: '2 hours ago' },
    { type: 'Service', title: 'Web Development', status: 'Updated', date: '5 hours ago' },
    { type: 'Portfolio', title: 'E-commerce App', status: 'Draft', date: '1 day ago' },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-gray-400">Welcome back, Paresh. Manage your agency content here.</p>
          </div>
          <button 
            onClick={() => navigate('/admin/login')}
            className="flex items-center space-x-2 px-4 py-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-all border border-red-500/20"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => {
            const card = (
              <GlassCard key={i} delay={i * 0.1} hover={false}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
                    <h3 className="text-3xl font-bold">{stat.value}</h3>
                  </div>
                  <div className={cn('p-3 rounded-xl bg-white/5', stat.color)}>
                    <stat.icon size={24} />
                  </div>
                </div>
              </GlassCard>
            );
            return stat.label === 'Total Leads' ? (
              <Link key={i} to="/admin/leads" className="block hover:scale-[1.02] transition-transform">
                {card}
              </Link>
            ) : card;
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'New Blog Post', path: '/admin/content/blog?action=new', icon: FileText },
                { label: 'Add Service', path: '/admin/content/services?action=new', icon: Settings },
                { label: 'Add Portfolio', path: '/admin/content/portfolio?action=new', icon: Briefcase },
                { label: 'Create Offer', path: '/admin/content/offers?action=new', icon: Tag },
                { label: 'View Leads', path: '/admin/leads', icon: Eye },
                { label: 'Lead Settings', path: '/admin/settings', icon: Settings },
              ].map((action, i) => (
                <Link
                  key={i}
                  to={action.path}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Plus size={20} />
                  </div>
                  <span className="font-medium">{action.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <GlassCard hover={false} className="p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">Title</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {recentActivity.map((item, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-medium">
                            {item.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium">{item.title}</td>
                        <td className="px-6 py-4">
                          <span className={cn(
                            'px-2 py-1 rounded-md text-xs font-medium',
                            item.status === 'Published' ? 'bg-green-500/10 text-green-400' : 
                            item.status === 'Updated' ? 'bg-yellow-500/10 text-yellow-400' : 'bg-gray-500/10 text-gray-400'
                          )}>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end space-x-2">
                            <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors">
                              <Edit2 size={16} />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
