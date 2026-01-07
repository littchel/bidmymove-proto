'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// ADDED: Explicitly defining the props interface for TypeScript
interface JobDetailsClientProps {
  id: string;
}

export default function JobDetailsClient({ id }: JobDetailsClientProps) {
  const [job, setJob] = useState<any>(null);
  const [bidAmount, setBidAmount] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem('jobs') || '[]');
    const found = jobs.find((j: any) => j.id === id);
    setJob(found);
  }, [id]);

  const submitBid = () => {
    const bids = JSON.parse(localStorage.getItem('bids') || '[]');
    const newBid = {
      id: Date.now().toString(),
      jobId: id,
      amount: bidAmount,
      message: message,
      providerName: "Swift Movers",
      rating: "4.9"
    };
    localStorage.setItem('bids', JSON.stringify([...bids, newBid]));
    alert("Bid Sent Successfully!");
    router.push('/browse');
  };

  if (!job) return <div className="p-10 text-center">Loading job details...</div>;

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="bg-white border-2 rounded-2xl p-8 shadow-sm text-left">
        <h1 className="text-3xl font-black italic mb-2 text-emerald-600">{job.title}</h1>
        <p className="text-blue-600 font-black text-xl mb-6">Customer Budget: R{job.budget}</p>
        
        <hr className="mb-8 border-gray-100" />
        
        <h2 className="text-xl font-bold mb-4 text-gray-800 tracking-tight">Submit Your Bid</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Your Price (R)</label>
            <input 
              type="number" 
              className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 ring-emerald-500 outline-none font-medium" 
              placeholder="e.g. 250"
              onChange={(e) => setBidAmount(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Message to Customer</label>
            <textarea 
              className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 ring-emerald-500 outline-none font-medium" 
              rows={4}
              placeholder="Explain why you're the best fit..."
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button 
            onClick={submitBid}
            className="w-full bg-[#1F2937] text-white p-5 rounded-xl font-black text-lg hover:bg-emerald-600 transition-all shadow-lg"
          >
            Send Bid to Customer
          </button>
        </div>
      </div>
    </div>
  );
}