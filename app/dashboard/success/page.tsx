'use client';
import Link from 'next/link';
import { CheckCircle2, MapPin, Calendar, Truck, Phone, MessageSquare, Navigation, ArrowRight } from 'lucide-react';

export default function MoveSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Success Card */}
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-emerald-600 p-12 text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-md">
                <CheckCircle2 size={60} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-black italic mb-2 tracking-tight">Move Confirmed!</h1>
            <p className="text-emerald-50 font-medium opacity-90">Your BidMyMove driver is officially booked.</p>
          </div>

          <div className="p-10 space-y-8">
            {/* Driver Contact Section */}
            <div className="flex items-center justify-between p-6 bg-gray-50 rounded-[2rem] border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-full border-2 border-emerald-500 overflow-hidden shadow-sm">
                  <img src="https://i.pravatar.cc/150?u=2" alt="Driver" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <h3 className="font-black text-[#1F2937] text-xl">Sipho M.</h3>
                  <p className="text-sm text-gray-500 font-bold italic">Kia K2700 • Blue Certified</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-4 bg-white rounded-2xl shadow-sm text-emerald-600 border border-gray-100 hover:bg-emerald-50 transition">
                  <Phone size={20} />
                </button>
                <button className="p-4 bg-emerald-600 rounded-2xl shadow-md text-white hover:bg-emerald-700 transition">
                  <MessageSquare size={20} />
                </button>
              </div>
            </div>

            {/* Summary Details */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1 text-left">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Route</p>
                <div className="flex items-center gap-2 text-[#1F2937] font-bold">
                  <MapPin size={16} className="text-emerald-600" />
                  <span className="text-sm">Sandton → Pretoria</span>
                </div>
              </div>
              <div className="space-y-1 text-right">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Date</p>
                <div className="flex items-center gap-2 text-[#1F2937] font-bold justify-end">
                  <Calendar size={16} className="text-emerald-600" />
                  <span className="text-sm">07 January 2026</span>
                </div>
              </div>
            </div>

            <div className="border-t border-dashed border-gray-200 pt-8">
               <div className="flex justify-between items-center mb-8">
                  <span className="font-black text-gray-400 uppercase text-xs italic">Total Paid via Escrow</span>
                  <span className="text-3xl font-black text-[#1F2937]">R390.00</span>
               </div>
               
               {/* SURGICAL UPDATE: Button now links to the Live Tracking Map */}
               <Link 
                 href="/dashboard/track" 
                 className="w-full py-6 bg-emerald-600 text-white rounded-2xl font-black text-xl text-center flex items-center justify-center gap-4 hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100"
               >
                 Track My Driver Live <Navigation size={24} className="animate-pulse" />
               </Link>

               <Link href="/" className="mt-4 w-full py-4 text-gray-400 font-bold text-center flex items-center justify-center gap-2 hover:text-[#1F2937] transition-all">
                  Back to Home
               </Link>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-gray-400 text-sm font-medium italic">
          Need to make a change? Contact support 24/7.
        </p>
      </div>
    </div>
  );
}