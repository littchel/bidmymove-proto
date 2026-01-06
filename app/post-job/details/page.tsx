'use client';

export default function PostJobDetails() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 text-left">
      <div className="max-w-xl w-full bg-gray-50 rounded-[3rem] border border-gray-100 shadow-2xl p-10">
        <h1 className="text-3xl font-black italic mb-6 text-emerald-600">Move Details</h1>
        
        {/* Using a standard HTML form to bypass all Next.js build hook errors */}
        <form action="/dashboard/live" method="GET" className="space-y-6">
          <div>
            <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 ml-2 tracking-widest">Pickup Address</label>
            <input 
              required 
              name="pickup" 
              placeholder="Where from? (e.g. Sandton)" 
              className="w-full p-5 bg-white rounded-2xl border-none shadow-sm text-lg" 
            />
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 ml-2 tracking-widest">Drop-off Address</label>
            <input 
              required 
              name="destination" 
              placeholder="Where to? (e.g. Pretoria)" 
              className="w-full p-5 bg-white rounded-2xl border-none shadow-sm text-lg" 
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-6 bg-[#1F2937] text-white rounded-[2rem] font-black text-xl hover:bg-emerald-600 transition-colors"
          >
            Post & Get Bids
          </button>
        </form>
      </div>
    </div>
  );
}