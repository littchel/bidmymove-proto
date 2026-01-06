'use client';

// THIS LINE IS THE FIX: It tells Next.js to skip static generation for this page
export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, ArrowRight } from 'lucide-react';

export default function JobDetails() {
  const router = useRouter();
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newJob = {
      pickup,
      destination,
      id: Date.now().toString(),
      status: 'pending'
    };
    localStorage.setItem('last_job', JSON.stringify(newJob));
    router.push('/dashboard/live');
  };

  return (
    <div className="min-h-screen bg-white py-12 px-6 flex items-center justify-center">
      <div className="max-w-xl w-full bg-gray-50 p-10 rounded-[3rem] border border-gray-100 shadow-xl text-center">
        <h1 className="text-3xl font-black italic mb-2 text-[#1F2937]">Move Details</h1>
        <p className="text-gray-400 font-bold mb-10 uppercase text-[10px] tracking-widest">Route Information</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-left">
            <input 
              required
              placeholder="Pickup Location"
              className="w-full p-5 bg-white rounded-2xl border-none shadow-sm text-lg"
              onChange={(e) => setPickup(e.target.value)}
            />
          </div>

          <div className="text-left">
            <input 
              required
              placeholder="Drop-off Location"
              className="w-full p-5 bg-white rounded-2xl border-none shadow-sm text-lg"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-6 bg-emerald-600 text-white rounded-2xl font-black text-xl shadow-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-3"
          >
            Find Drivers <ArrowRight size={24} />
          </button>
        </form>
      </div>
    </div>
  );
}