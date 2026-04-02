import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { db } from '../../lib/firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
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

export default function LeadsDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'leads'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const leadsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Lead[];
      setLeads(leadsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="pt-32 pb-24">
      <Helmet>
        <title>Leads Dashboard | Admin</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Lead Submissions</h1>
        <div className="grid gap-6">
          {leads.map(lead => (
            <GlassCard key={lead.id} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{lead.name}</h3>
                <span className="text-sm text-gray-500">
                  {lead.createdAt?.toDate().toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-400 mb-2"><strong>Email:</strong> {lead.email}</p>
              <p className="text-gray-400 mb-2"><strong>Service:</strong> {lead.service}</p>
              <p className="text-gray-400"><strong>Message:</strong> {lead.message}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
