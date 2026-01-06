'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Added for navigation
import { Truck, CheckCircle2, Loader2, Star, ShieldCheck } from 'lucide-react';

export default function LiveBidding() {
  const router = useRouter(); // Initialize the router
  const [status, setStatus] = useState('searching'); // searching, bids-ready
  const [bids, setBids] = useState<any[]>([]);

  useEffect(() => {
    // Simulate finding drivers after 3 seconds
    const timer1 = setTimeout(() => {
      setBids([
        { id: 1, name: "Johannes L.", vehicle: "Hyundai H100", price: "420", rating: "4.8", reviews: "89", message: "I am in Sandton now, can help immediately!" },
      ]);
    }, 3000);

    // Add a second competitive bid after 6 seconds
    const timer2 = setTimeout(() => {
      setBids(prev => [...prev, 
        { id: 2, name: "Sipho M.", vehicle: "Kia K2700", price: "390", rating: "4.9", reviews: "156", message: "Specializing in fragile items. Professional blankets included." }
      ]);
      setStatus('bids-ready');
    }, 6000);

    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Status */}
        <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-gray-100 mb-8 text-center">
          {status === 'searching' ? (
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
                  <div className="relative bg-emerald-600 p-6 rounded-full text-white shadow-xl">
                    <Loader2 size={40} className="animate-spin" />
                  </div>
                </div>
              </div>
              <h1 className="text-3xl font-black italic text-[#1F2937]">Notifying Fleet...</h1>
              <p className="text-gray-500 font-medium">Your request has been sent to 48 verified drivers near Sandton.</p>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex justify-center text-emerald-600 mb-4">
                <CheckCircle2 size={50} />
              </div>
              <h1 className="text-3xl font-black italic text-[#1F2937]">Bids are In!</h1>
              <p className="text-gray-500 font-medium italic">Compare offers and select your preferred BidMyMove partner.</p>
            </div>
          )}
        </div>

        {/* Live Bids List */}
        <div className="space-y-6">
          {bids.map((bid) => (
            <div key={bid.id} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 animate-in slide-in-from-bottom duration-700">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full border-2 border-emerald-500 overflow-hidden shadow-inner">
                   <img src={`https://i.pravatar.cc/150?u=${bid.id}`} alt="Driver" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-black text-xl text-[#1F2937] italic">{bid.name}</h3>
                    <ShieldCheck size={16} className="text-blue-500" />
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold">
                    <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-lg">{bid.vehicle}</span>
                    <div className="flex items-center gap-1 text-[#FBBF24]">
                      <Star size={14} fill="currentColor" /> {bid.rating} <span className="text-gray-400 font-medium">({bid.reviews})</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-3 italic font-medium leading-relaxed max-w-sm">"{bid.message}"</p>
                </div>
              </div>

              <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8 min-w-[180px]">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Quote</p>
                <p className="text-4xl font-black text-[#1F2937] mb-4 tracking-tighter">R{bid.price}</p>
                {/* SURGICAL FIX: Added onClick to redirect to the success page */}
                <button 
                  onClick={() => router.push('/dashboard/success')}
                  className="w-full md:w-auto bg-[#1F2937] text-white px-8 py-3 rounded-2xl font-black hover:bg-emerald-600 transition-all shadow-lg shadow-gray-200"
                >
                  Accept Bid
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}