'use client';

import dynamic from 'next/dynamic';

// 1. This tells Next.js to NEVER pre-render this page on Cloudflare's build server
const SafeForm = dynamic(() => Promise.resolve(function DetailsForm() {
  return (
    <div className="min-h-screen bg-white py-12 px-6 flex items-center justify-center">
      <div className="max-w-xl w-full bg-gray-50 p-10 rounded-[3rem] border border-gray-100 shadow-xl text-center">
        <h1 className="text-3xl font-black italic mb-2 text-[#1F2937]">Move Details</h1>
        <p className="text-gray-400 font-bold mb-10 uppercase text-[10px] tracking-widest">Route Information</p>
        
        <form className="space-y-6" onAction="/dashboard/live">
          <input 
            required
            name="pickup"
            placeholder="Pickup Location"
            className="w-full p-5 bg-white rounded-2xl border-none shadow-sm text-lg"
          />
          <input 
            required
            name="destination"
            placeholder="Drop-off Location"
            className="w-full p-5 bg-white rounded-2xl border-none shadow-sm text-lg"
          />
          <button 
            type="submit" 
            className="w-full py-6 bg-emerald-600 text-white rounded-2xl font-black text-xl shadow-lg hover:bg-emerald-700 transition-all"
          >
            Find Drivers
          </button>
        </form>
      </div>
    </div>
  );
}), { ssr: false }); // THIS IS THE KEY: ssr: false bypasses the build error

export default function JobDetails() {
  return <SafeForm />;
}