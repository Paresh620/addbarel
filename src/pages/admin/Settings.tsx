import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import GlassCard from '../../components/GlassCard';

export default function Settings() {
  const [email, setEmail] = useState('');

  const handleSave = () => {
    // In a real app, save this to Firestore/Database
    alert(`Lead email set to: ${email}`);
  };

  return (
    <div className="pt-32 pb-24">
      <Helmet>
        <title>Settings | Admin</title>
      </Helmet>
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Lead Settings</h1>
        <GlassCard className="p-8">
          <label className="block text-sm font-medium text-gray-400 mb-2">Designated Lead Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 mb-6 focus:outline-none focus:border-blue-500"
            placeholder="admin@example.com"
          />
          <button
            onClick={handleSave}
            className="w-full py-3 bg-blue-600 rounded-xl font-bold hover:bg-blue-700 transition-all"
          >
            Save Email
          </button>
        </GlassCard>
      </div>
    </div>
  );
}
