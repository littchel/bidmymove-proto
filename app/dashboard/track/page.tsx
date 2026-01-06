'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Added for navigation
import { MapPin, Truck, Phone, MessageSquare, Navigation, ShieldCheck, Star } from 'lucide-react';

export default function TrackMove() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 400); // Truck moves across the screen over 40 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Map Simulation Area */}
      <div className="relative flex-grow bg-emerald-50 overflow-hidden">
        {/* Fake Map Grid Lines */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Route Line */}
        <div className="absolute top-1/2 left-[10%] right-[10%] h-2 bg-gray-200 rounded-full">
          <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>

        {/* Pickup Point */}
        <div className="absolute top-1/2 left-[10%] -translate-y-8 -translate-x-1/2 text-center">
          <MapPin className="text-emerald-600 mb-1" size={32} />
          <p className="text-[10px] font-black uppercase bg-white px-2 py-1 rounded shadow">Sandton</p>
        </div>

        {/* Moving Truck */}
        <div 
          className="absolute top-1/2 -translate-y-12 -translate-x-1/2 transition-all duration-500 z-10"
          style={{ left: `${10 + (progress * 0.8)}%` }}
        >
          <div className="bg-white p-3 rounded-full shadow-2xl border-2 border-emerald-500">
            <Truck className="text-emerald-600" size={24} />
          </div>
          <div className="mt-2 bg-[#1F2937] text-white text-[8px] font-bold px-2 py-1 rounded-full whitespace-nowrap shadow-lg">
            {progress < 100 ? 'Sipho is En-Route' : 'Arrived at Destination'}
          </div>
        </div>

        {/* Destination Point */}
        <div className="absolute top-1/2 left-[90%] -translate-y-8 -translate-x-1/2 text-center">
          <MapPin className="text-[#FBBF24] mb-1" size={32} />
          <p className="text-[10px] font-black uppercase bg-white px-2 py-1 rounded shadow">Pretoria</p>
        </div>
      </div>

      {/* Driver Status Card */}
      <div className="bg-white p-8 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)] relative z-20">
        <div className="max-w-xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-14 bg-gray-100 rounded-full overflow-hidden border-2 border-emerald-500 shadow-inner">
                <img src="https://i.pravatar.cc/150?u=2" alt="Driver" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-black text-lg italic text-[#1F2937]">Sipho M.</h3>
                <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold">
                  <ShieldCheck size={14} /> Verified Professional
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-3 bg-gray-50 rounded-xl text-emerald-600 border border-gray-100 hover:bg-emerald-50 transition"><Phone size={20} /></button>
              <button className="p-3 bg-gray-50 rounded-xl text-emerald-600 border border-gray-100 hover:bg-emerald-50 transition"><MessageSquare size={20} /></button>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between mb-6">
            <div className="flex items-center gap-3 text-left">
              <Navigation className={`text-emerald-600 ${progress < 100 ? 'animate-pulse' : ''}`} size={20} />
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</p>
                <p className="font-black text-[#1F2937]">{progress < 100 ? '14 mins away' : 'Arrived'}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Progress</p>
              <p className="font-black text-[#1F2937]">{progress}%</p>
            </div>
          </div>

          {/* SURGICAL UPDATE: Button appears only when truck reaches Pretoria */}
          {progress === 100 && (
            <button 
              onClick={() => router.push('/dashboard/rate')}
              className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-black text-xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100 animate-in fade-in zoom-in duration-500 flex items-center justify-center gap-3"
            >
              Finish Trip & Rate Driver <Star size={24} fill="white" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}