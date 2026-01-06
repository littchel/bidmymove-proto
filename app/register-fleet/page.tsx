'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Truck, User, CreditCard, ShieldCheck, ArrowRight } from 'lucide-react';

export default function DriverOnboarding() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) setStep(2);
    else router.push('/dashboard/driver'); // Links to the new Driver Dashboard
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-[#1F2937] p-10 text-white">
            <h1 className="text-3xl font-black italic mb-2">Join the Fleet</h1>
            <p className="opacity-80 font-medium">Step {step} of 2: {step === 1 ? 'Personal Details' : 'Vehicle Verification'}</p>
          </div>

          <form onSubmit={handleNext} className="p-10 space-y-8">
            {step === 1 ? (
              <div className="space-y-6 text-left">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-4 text-emerald-600" size={18} />
                    <input required className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 ring-emerald-500 font-medium text-[#1F2937]" placeholder="e.g. Sipho Mthethwa" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">RSA ID Number</label>
                  <div className="relative">
                    <ShieldCheck className="absolute left-4 top-4 text-emerald-600" size={18} />
                    <input required className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 ring-emerald-500 font-medium text-[#1F2937]" placeholder="Identity Number" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6 text-left animate-in slide-in-from-right duration-500">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Vehicle Type</label>
                  <select className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 ring-emerald-500 font-medium text-[#1F2937] appearance-none">
                    <option>1-Ton Bakkie (Hyundai H100 / Kia K2700)</option>
                    <option>4-Ton Truck</option>
                    <option>8-Ton Truck</option>
                    <option>14-Ton Heavy Hauler</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Vehicle Registration</label>
                  <div className="relative">
                    <Truck className="absolute left-4 top-4 text-emerald-600" size={18} />
                    <input required className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 ring-emerald-500 font-medium text-[#1F2937]" placeholder="e.g. AB 12 CD GP" />
                  </div>
                </div>
              </div>
            )}

            <button type="submit" className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-black text-xl hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-100">
              {step === 1 ? 'Continue' : 'Complete Registration'} <ArrowRight size={24} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}