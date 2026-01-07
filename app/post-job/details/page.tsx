'use client';
import { Truck, MapPin, ArrowRight } from 'lucide-react';

export default function PostJobDetails() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 text-left">
      <div className="max-w-xl w-full bg-gray-50 rounded-[3.5rem] border border-gray-100 shadow-2xl overflow-hidden">
        <div className="bg-emerald-600 p-10 text-white">
          <div className="flex items-center gap-3 mb-2 text-left">
            <Truck size={24} />
            <h1 className="text-2xl font-black italic uppercase tracking-tighter">BidMyMove</h1>
          </div>
          <p className="font-bold opacity-90 text-left">Step 2: Route Details</p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); window.location.href='/dashboard/live'; }} className="p-10 space-y-8">
          <div className="space-y-4">
            <input required placeholder="Pickup Address" className="w-full p-5 rounded-2xl border-none shadow-sm" />
            <input required placeholder="Drop-off Address" className="w-full p-5 rounded-2xl border-none shadow-sm" />
          </div>
          <button type="submit" className="w-full py-6 bg-[#1F2937] text-white rounded-[2rem] font-black text-xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-3">
            Find My Mover <ArrowRight size={24} />
          </button>
        </form>
      </div>
    </div>
  );
}