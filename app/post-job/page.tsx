'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Truck, ArrowRight, ShieldCheck, Info } from 'lucide-react';

const VEHICLES = [
  {
    id: '1-ton',
    title: '1-Ton Bakkie',
    icon: '🛻',
    desc: 'Perfect for single room moves or small deliveries.',
    capacity: '1,000kg',
    basePrice: '450'
  },
  {
    id: '4-ton',
    title: '4-Ton Truck',
    icon: '🚚',
    desc: 'Ideal for 2-3 bedroom apartment moves.',
    capacity: '4,000kg',
    basePrice: '1,200'
  },
  {
    id: '14-ton',
    title: '14-Ton Hauler',
    icon: '🚛',
    desc: 'Industrial scale moves and heavy machinery.',
    capacity: '14,000kg',
    basePrice: '4,500'
  }
];

export default function VehicleSelection() {
  const [selected, setSelected] = useState('');
  const router = useRouter();

  const handleNext = () => {
    if (selected) {
      router.push(`/post-job/details?type=${selected}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-black text-[#1F2937] italic mb-4">
            Select Your <span className="text-emerald-600">Vehicle</span>
          </h1>
          <p className="text-gray-500 font-medium italic">Choose the right size for your load to get the most accurate bids.</p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {VEHICLES.map((v) => (
            <div 
              key={v.id}
              onClick={() => setSelected(v.id)}
              className={`relative bg-white p-8 rounded-[2.5rem] border-4 transition-all cursor-pointer shadow-sm hover:shadow-xl ${
                selected === v.id ? 'border-emerald-500 scale-105' : 'border-transparent'
              }`}
            >
              {selected === v.id && (
                <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-2 rounded-full shadow-lg">
                  <ShieldCheck size={24} />
                </div>
              )}
              <div className="text-5xl mb-6">{v.icon}</div>
              <h3 className="text-xl font-black text-[#1F2937] mb-2 uppercase tracking-tight">{v.title}</h3>
              <p className="text-xs text-gray-400 font-bold mb-4 uppercase tracking-widest">{v.capacity} Capacity</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 font-medium">{v.desc}</p>
              <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-[10px] font-black text-emerald-600 uppercase">Est. Starting R</span>
                <span className="text-xl font-black text-[#1F2937]">{v.basePrice}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-gray-400 italic">
            <Info size={20} className="text-emerald-500" />
            <p className="text-sm font-medium">Bids may vary based on distance and specific driver offers.</p>
          </div>
          <button 
            disabled={!selected}
            onClick={handleNext}
            className={`flex items-center gap-3 px-12 py-5 rounded-2xl font-black text-xl transition-all ${
              selected 
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100 hover:bg-emerald-700' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continue <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}