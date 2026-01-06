'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Star, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';

export default function RateMover() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 text-center">
          <div className="bg-emerald-600 p-10 text-white">
            <h1 className="text-3xl font-black italic mb-2">Move Complete!</h1>
            <p className="opacity-80 font-medium text-sm">How was your experience with Sipho M.?</p>
          </div>

          <div className="p-10 space-y-8">
            {/* Driver Avatar */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gray-100 rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <img src="https://i.pravatar.cc/150?u=2" alt="Driver" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2 rounded-full shadow-lg">
                  <CheckCircle2 size={16} />
                </div>
              </div>
            </div>

            {/* Star Selection */}
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setRating(star)}
                  className="transition-transform hover:scale-125 focus:outline-none"
                >
                  <Star 
                    size={40} 
                    fill={(hover || rating) >= star ? "#FBBF24" : "transparent"} 
                    className={(hover || rating) >= star ? "text-[#FBBF24]" : "text-gray-200"}
                  />
                </button>
              ))}
            </div>

            {/* Comment Field */}
            <div className="space-y-2 text-left">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Your Feedback</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-emerald-500" size={18} />
                <textarea 
                  rows={3}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 ring-emerald-500 font-medium text-[#1F2937]"
                  placeholder="Tell us about the service..."
                ></textarea>
              </div>
            </div>

            <button 
              onClick={() => router.push('/')}
              className="w-full py-5 bg-[#1F2937] text-white rounded-2xl font-black text-xl hover:bg-emerald-600 transition-all shadow-xl"
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}