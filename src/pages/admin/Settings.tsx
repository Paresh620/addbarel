import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import GlassCard from '../../components/GlassCard';
import { cn } from '../../lib/utils';

export default function Settings() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    setSuccess(false);
    // Simulate saving to database
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    setSuccess(true);
    alert(`Success! Lead email has been set to: ${email}`);
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
            disabled={loading}
            className={cn(
              "w-full py-3 rounded-xl font-bold transition-all disabled:opacity-50",
              success ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
            )}
          >
            {loading ? 'Saving...' : success ? 'Saved!' : 'Save Email'}
          </button>
        </GlassCard>
      </div>
    </div>
  );
}
