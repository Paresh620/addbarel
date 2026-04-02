import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Save, X, ArrowLeft, Upload, Plus, Trash2, Globe, Search as SearchIcon, Edit2 } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { cn } from '../lib/utils';

export default function AdminContent() {
  const { type } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const action = searchParams.get('action');
  
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<any[]>([]);
  const [editingItem, setEditingItem] = useState<any>(null);

  // Mock Data Loading
  useEffect(() => {
    // In a real app, fetch from Firestore
    const mockItems = [
      { id: '1', title: 'Sample Item 1', status: 'published', date: '2026-03-15' },
      { id: '2', title: 'Sample Item 2', status: 'draft', date: '2026-03-20' },
    ];
    setItems(mockItems);

    if (action === 'new') {
      setEditingItem({
        title: '',
        content: '',
        status: 'draft',
        seo: {
          title: '',
          description: '',
          slug: '',
          keywords: '',
        }
      });
    }
  }, [type, action]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate save
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    navigate('/admin');
  };

  if (editingItem) {
    return (
      <div className="pt-32 pb-24">
        <Helmet>
          <title>Edit {type} | Admin</title>
        </Helmet>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <button
              onClick={() => navigate('/admin')}
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Dashboard
            </button>
            <div className="flex space-x-4">
              <button
                onClick={() => setEditingItem(null)}
                className="px-6 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={loading}
                className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all flex items-center space-x-2"
              >
                {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Save size={18} />}
                <span>Save Changes</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <GlassCard hover={false} className="space-y-6">
                <h2 className="text-xl font-bold mb-6">Content Details</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Title</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter title..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Content / Description</label>
                    <textarea
                      rows={10}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Write your content here..."
                    />
                  </div>
                </div>
              </GlassCard>

              <GlassCard hover={false} className="space-y-6">
                <h2 className="text-xl font-bold mb-6">SEO Settings</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Meta Title</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Meta Description</label>
                    <textarea
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">URL Slug</label>
                      <input
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Focus Keyword</label>
                      <input
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>

            <div className="space-y-8">
              <GlassCard hover={false} className="space-y-6">
                <h2 className="text-xl font-bold mb-6">Publishing</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Status</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                      <option value="draft" className="bg-black">Draft</option>
                      <option value="published" className="bg-black">Published</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Category</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
              </GlassCard>

              <GlassCard hover={false} className="space-y-6">
                <h2 className="text-xl font-bold mb-6">Featured Image</h2>
                <div className="aspect-video rounded-xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-gray-500 hover:border-blue-500 hover:text-blue-400 transition-all cursor-pointer">
                  <Upload size={32} className="mb-2" />
                  <span className="text-xs font-medium">Click to upload image</span>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold capitalize">Manage {type}</h1>
          <button
            onClick={() => navigate(`/admin/content/${type}?action=new`)}
            className="flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all"
          >
            <Plus size={18} />
            <span>Add New</span>
          </button>
        </div>

        <GlassCard hover={false} className="p-0 overflow-hidden">
          <div className="p-4 border-b border-white/10 flex items-center space-x-4">
            <div className="relative flex-grow">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="text"
                placeholder={`Search ${type}...`}
                className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-12 pr-4 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium">{item.title}</td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        'px-2 py-1 rounded-md text-xs font-medium',
                        item.status === 'published' ? 'bg-green-500/10 text-green-400' : 'bg-gray-500/10 text-gray-400'
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
  );
}
