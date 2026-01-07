'use client';
import { Truck, MapPin, ArrowRight } from 'lucide-react';

export default function RouteForm() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 text-left">
      <div className="max-w-xl w-full bg-gray-50 rounded-[3.5rem] border border-gray-100 shadow-2xl overflow-hidden">
        <div className="bg-emerald-600 p-10 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Truck size={24} />
            <h1 className="text-2xl font-black italic uppercase tracking-tighter">BidMyMove</h1>
          </div>
          <p className="font-bold opacity-90">Step 2: Route Details</p>
        </div>

        <form action="/dashboard/live" method="GET" className="p-10 space-y-8">
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 ml-2 tracking-widest text-left">Pickup Address</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 text-emerald-500" size={20} />
                <input required name="pickup" placeholder="e.g. Sandton" className="w-full pl-12 pr-5 py-5 bg-white rounded-3xl border-none shadow-sm text-lg font-medium outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 ml-2 tracking-widest text-left">Drop-off Address</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 text-[#FBBF24]" size={20} />
                <input required name="destination" placeholder="e.g. Pretoria" className="w-full pl-12 pr-5 py-5 bg-white rounded-3xl border-none shadow-sm text-lg font-medium outline-none" />
              </div>
            </div>
          </div>
          <button type="submit" className="w-full py-6 bg-[#1F2937] text-white rounded-[2rem] font-black text-xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-3">
            Find My Mover <ArrowRight size={24} />
          </button>
        </form>
      </div>
    </div>
  );
}