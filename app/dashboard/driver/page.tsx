'use client';
import { useRouter } from 'next/navigation'; // Added for navigation
import { Truck, TrendingUp, History, MapPin, CheckCircle2 } from 'lucide-react';

export default function DriverDashboard() {
  const router = useRouter(); // Initialize the router

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Top Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 italic">Total Earnings</p>
            <p className="text-4xl font-black text-[#1F2937]">R12,450.00</p>
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs mt-2">
              <TrendingUp size={14} /> +12% from last week
            </div>
          </div>
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 italic">Completed Moves</p>
            <p className="text-4xl font-black text-[#1F2937]">48</p>
            <p className="text-gray-400 font-bold text-xs mt-2 italic">Lifetime trips</p>
          </div>
          <div className="bg-emerald-600 p-8 rounded-[2.5rem] shadow-xl text-white">
            <p className="text-[10px] font-black opacity-80 uppercase tracking-widest mb-1 italic">Available Jobs</p>
            <p className="text-4xl font-black tracking-tight">12</p>
            <p className="text-emerald-100 font-bold text-xs mt-2">In your current area</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 text-left">
          {/* Recent Activity */}
          <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100">
            <h3 className="text-2xl font-black italic text-[#1F2937] mb-8 flex items-center gap-3">
              <History className="text-emerald-600" /> Recent Trips
            </h3>
            <div className="space-y-6">
              {[
                { route: "Sandton → Pretoria", date: "Yesterday", price: "R390" },
                { route: "Randburg → Midrand", date: "3 Jan 2026", price: "R520" },
                { route: "Soweto → Sandton", date: "1 Jan 2026", price: "R410" }
              ].map((job, i) => (
                <div key={i} className="flex justify-between items-center pb-4 border-b border-gray-50 last:border-0">
                  <div>
                    <p className="font-black text-[#1F2937] italic">{job.route}</p>
                    <p className="text-xs text-gray-400 font-bold">{job.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-emerald-600">{job.price}</p>
                    <div className="flex items-center gap-1 text-[8px] text-gray-400 font-bold uppercase"><CheckCircle2 size={10} /> Paid</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Job Map Simulation */}
          <div className="bg-[#1F2937] p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1 italic">Next Job Ready</p>
              <h3 className="text-3xl font-black italic text-white mb-6">Sandton CBD <br /><span className="text-emerald-500">→ Centurion</span></h3>
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 mb-8">
                <MapPin className="text-emerald-500" />
                <p className="text-white font-medium text-sm">Customer is waiting at the pickup point.</p>
              </div>
              
              {/* SURGICAL FIX: Added onClick to return to the Home page */}
              <button 
                onClick={() => router.push('/')}
                className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-black text-lg hover:bg-emerald-700 transition shadow-xl shadow-emerald-900/20"
              >
                Start Navigation
              </button>
            </div>
            <Truck className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64 rotate-[-15deg]" />
          </div>
        </div>
      </div>
    </div>
  );
}