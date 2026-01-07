'use client';

// Force the compiler to skip static analysis for this route
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { Truck, MapPin, ArrowRight } from 'lucide-react';

export default function PostJobDetails() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/dashboard/live';
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-gray-50 rounded-[3.5rem] border border-gray-100 shadow-2xl overflow-hidden">
        <div className="bg-emerald-600 p-10 text-white text-left">
          <div className="flex items-center gap-3 mb-2">
            <Truck size={24} />
            <h1 className="text-2xl font-black italic uppercase tracking-tighter">BidMyMove</h1>
          </div>
          <p className="font-bold opacity-90 text-left">Step 2: Route Details</p>
        </div>

        <form onSubmit={handleSubmit} className="p-10 space-y-8 text-left">
          <div className="space-y-4">
            <div className="text-left">
              <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 ml-2 tracking-widest text-left">Pickup Address</label>
              <input required name="pickup" placeholder="Street, Suburb, City" className="w-full p-5 bg-white rounded-3xl border-none shadow-sm text-lg outline-none" />
            </div>
            <div className="text-left">
              <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 ml-2 tracking-widest text-left">Drop-off Address</label>
              <input required name="destination" placeholder="Street, Suburb, City" className="w-full p-5 bg-white rounded-3xl border-none shadow-sm text-lg outline-none" />
            </div>
          </div>
          <button type="submit" className="w-full py-6 bg-[#1F2937] text-white rounded-[2rem] font-black text-xl flex items-center justify-center gap-3">
            Post & Get Bids <ArrowRight size={24} />
          </button>
        </form>
      </div>
    </div>
  );
}