'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Calendar, Clock, Edit3, ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen bg-white py-12 px-6 text-[#1F2937]">
      <div className="max-w-xl mx-auto bg-gray-50 p-10 rounded-[3rem] border border-gray-100 shadow-xl">
        <h1 className="text-3xl font-black italic mb-2">Move Details</h1>
        <p className="text-gray-400 font-bold mb-10 uppercase text-[10px] tracking-widest">Step 2: Destination & Route</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-left">
            <label className="block text-xs font-black uppercase mb-2 ml-2">Pickup Location</label>
            <input 
              required
              placeholder="e.g. Sandton, Johannesburg"
              className="w-full p-5 bg-white rounded-2xl border-none shadow-inner text-lg font-medium"
              onChange={(e) => setPickup(e.target.value)}
            />
          </div>

          <div className="text-left">
            <label className="block text-xs font-black uppercase mb-2 ml-2">Drop-off Location</label>
            <input 
              required
              placeholder="e.g. Pretoria Central"
              className="w-full p-5 bg-white rounded-2xl border-none shadow-inner text-lg font-medium"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="text-left">
                <label className="block text-xs font-black uppercase mb-2 ml-2">Date</label>
                <input type="date" required className="w-full p-5 bg-white rounded-2xl border-none text-sm" />
             </div>
             <div className="text-left">
                <label className="block text-xs font-black uppercase mb-2 ml-2">Time</label>
                <input type="time" required className="w-full p-5 bg-white rounded-2xl border-none text-sm" />
             </div>
          </div>

          <button 
            type="submit" 
            className="w-full py-6 bg-emerald-600 text-white rounded-2xl font-black text-xl shadow-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 mt-4"
          >
            Get Live Bids <ArrowRight size={24} />
          </button>
        </form>
      </div>
    </div>
  );
}