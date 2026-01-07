'use client';
import { Suspense } from 'react';
import { Truck, MapPin, ArrowRight } from 'lucide-react';

function DetailsForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/dashboard/live';
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-gray-50 rounded-[3.5rem] border border-gray-100 shadow-2xl overflow-hidden">
        <div className="bg-emerald-600 p-10 text-white text-left">
          <h1 className="text-2xl font-black italic uppercase">BidMyMove</h1>
          <p className="font-bold opacity-90">Step 2: Destination</p>
        </div>
        <form onSubmit={handleSubmit} className="p-10 space-y-8 text-left">
          <input required placeholder="Pickup Address" className="w-full p-5 bg-white rounded-2xl border-none shadow-sm" />
          <input required placeholder="Drop-off Address" className="w-full p-5 bg-white rounded-2xl border-none shadow-sm" />
          <button type="submit" className="w-full py-6 bg-[#1F2937] text-white rounded-[2rem] font-black text-xl">
            Get Bids Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="p-20 text-center font-black">Loading...</div>}>
      <DetailsForm />
    </Suspense>
  );
}