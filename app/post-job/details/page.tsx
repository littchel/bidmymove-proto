'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Calendar, Clock, Edit3, ArrowRight } from 'lucide-react';

export default function JobDetails() {
  const router = useRouter();
  
  // We removed useSearchParams entirely to bypass the Cloudflare build error
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
      vehicleType: 'Verified Vehicle', // Hardcoded to avoid searchParams
      status: 'pending',
      budget: 'Calculated'
    };
    
    localStorage.setItem('jobs', JSON.stringify([newJob, ...existingJobs]));
    router.push('/dashboard/live');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-emerald-600 p-10 text-white">
            <h1 className="text-3xl font-black italic text-left">Move Details</h1>
            <p className="opacity-80 font-medium text-left">Complete your request to notify nearby drivers.</p>
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
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Preferred Time</label>
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
                  placeholder="Mention fragile items or if help is needed loading."
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                ></textarea>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-[#1F2937] text-white rounded-2xl font-black text-xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 shadow-xl"
            >
              Get Live Bids Now <ArrowRight size={24} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}