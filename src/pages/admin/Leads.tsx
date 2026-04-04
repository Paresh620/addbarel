import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import GlassCard from '../../components/GlassCard';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  createdAt: any;
}

export default function Leads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const q = query(collection(db, 'leads'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const leadsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Lead));
        setLeads(leadsData);
      } catch (error) {
        console.error('Error fetching leads:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchLeads();
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <Helmet>
        <title>Leads | Admin</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Leads</h1>
        {loading ? (
          <div className="text-center py-20">Loading...</div>
        ) : (
          <GlassCard hover={false} className="p-0 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Service</th>
                    <th className="px-6 py-4">Budget</th>
                    <th className="px-6 py-4">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {leads.map(lead => (
                    <tr key={lead.id} className="hover:bg-white/5">
                      <td className="px-6 py-4">{lead.name}</td>
                      <td className="px-6 py-4">{lead.email}</td>
                      <td className="px-6 py-4">{lead.service}</td>
                      <td className="px-6 py-4">{lead.budget}</td>
                      <td className="px-6 py-4">{lead.createdAt?.toDate().toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        )}
      </div>
    </div>
  );
}
