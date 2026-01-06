'use client';

export default function PostJobDetails() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Use standard browser navigation to avoid Next.js hook errors
    window.location.href = '/dashboard/live';
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 text-left">
      <div className="max-w-xl w-full bg-gray-50 rounded-[3rem] border border-gray-100 shadow-2xl p-10">
        <h1 className="text-3xl font-black italic mb-6 text-emerald-600">Move Details</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 ml-2">Pickup Address</label>
            <input required name="p" placeholder="Where from?" className="w-full p-5 bg-white rounded-2xl border-none shadow-sm" />
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 ml-2">Drop-off Address</label>
            <input required name="d" placeholder="Where to?" className="w-full p-5 bg-white rounded-2xl border-none shadow-sm" />
          </div>

          <button 
            type="submit" 
            className="w-full py-6 bg-[#1F2937] text-white rounded-[2rem] font-black text-xl"
          >
            Post & Get Bids
          </button>
        </form>
      </div>
    </div>
  );
}