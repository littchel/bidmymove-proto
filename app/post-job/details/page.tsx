'use client';
import { useState, Suspense } from 'react'; // Added Suspense
import { useRouter, useSearchParams } from 'next/navigation';
import { MapPin, Calendar, Clock, Edit3, ArrowRight } from 'lucide-react';

// 1. Wrap the logic in a sub-component to handle searchParams safely
function JobDetailsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const vehicleType = searchParams.get('type') || '1-ton';

  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const existingJobs = JSON.parse(localStorage.getItem('jobs') || '[]');
    const newJob = {
      ...formData,
      id: Date.now().toString(),
      vehicleType,
      status: 'pending',
      budget: vehicleType === '1-ton' ? '450' : vehicleType === '4-ton' ? '1200' : '4500'
    };
    
    localStorage.setItem('jobs', JSON.stringify([newJob, ...existingJobs]));
    router.push('/dashboard/live');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-emerald-600 p-10 text-white">
            <h1 className="text-3xl font-black italic">Move Details</h1>
            <p className="opacity-80 font-medium text-left">Step 2: Tell us where you are moving.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-10 space-y-8">
            <div className="space-y-4 text-left">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Route Information</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 text-emerald-500" size={20} />
                <input 
                  required
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 ring-emerald-500 font-medium text-[#1F2937]"
                  placeholder="Pickup Address (e.g. Sandton CBD)"
                  onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 text-[#FBBF24]" size={20} />
                <input 
                  required
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 ring-emerald-500 font-medium text-[#1F2937]"
                  placeholder="Drop-off Address (e.g. Pretoria CBD)"
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Move Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-4 text-emerald-500" size={18} />
                  <input 
                    type="date"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 ring-emerald-500 font-medium text-[#1F2937]"
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-4 text-emerald-500" size={18} />
                  <input 
                    type="time"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 ring-emerald-500 font-medium text-[#1F2937]"
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2 text-left">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Special Instructions</label>
              <div className="relative">
                <Edit3 className="absolute left-4 top-4 text-emerald-500" size={18} />
                <textarea 
                  rows={3}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 ring-emerald-500 font-medium text-[#1F2937]"
                  placeholder="Extra help needed? Fragile items?"
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                ></textarea>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-[#1F2937] text-white rounded-2xl font-black text-xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-100"
            >
              Publish Job & Get Bids <ArrowRight size={24} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// 2. Main Export with Suspense wrapper
export default function JobDetails() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="font-black italic text-emerald-600 text-xl animate-pulse">Initializing Move Engine...</div>
      </div>
    }>
      <JobDetailsContent />
    </Suspense>
  );
}