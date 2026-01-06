'use client';
import Link from 'next/link';
import { 
  ShieldCheck, 
  MapPin, 
  MessageSquare, 
  CheckCircle2, 
  Apple, 
  Play, 
  ArrowRight, 
  Truck, 
  Star 
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-[#1F2937] font-sans selection:bg-emerald-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center text-left">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-xl italic text-center">B</span>
            </div>
            <h1 className="text-2xl font-black tracking-tighter italic text-[#1F2937]">
              BidMy<span className="text-emerald-600">Move</span>
            </h1>
          </div>
          <div className="hidden md:flex gap-8 font-bold text-sm text-gray-400 uppercase tracking-widest">
            <Link href="#how-it-works" className="hover:text-emerald-600 transition">How it Works</Link>
            <Link href="#features" className="hover:text-emerald-600 transition">Features</Link>
            <Link href="#fleet" className="hover:text-emerald-600 transition">Join Fleet</Link>
          </div>
          <Link href="/post-job" className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:bg-emerald-700 transition uppercase text-xs tracking-wider">
            Book Now
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-16 pb-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden text-center lg:text-left">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <span className="bg-[#FBBF24] text-[#1F2937] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
              #1 Rated Logistics Platform
            </span>
            <h2 className="text-6xl lg:text-7xl font-black leading-[1.05] mb-8 tracking-tight text-[#1F2937]">
              Smart Moves. <br /><span className="text-emerald-600">Better Prices.</span>
            </h2>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium max-w-lg">
              Why pay fixed rates when you can get competitive bids? Connect with verified truck owners through BidMyMove and save. [cite: 8]
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/post-job" className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100">
                Get a Quote
              </Link>
              <div className="flex gap-2">
                <button className="bg-black text-white px-4 py-2 rounded-xl flex items-center gap-3 border border-gray-800">
                  <Apple size={20} fill="white" /> 
                  <div className="text-left text-[10px] leading-tight font-bold uppercase"><p className="opacity-60">Download on</p><p className="text-sm">App Store</p></div>
                </button>
                <button className="bg-black text-white px-4 py-2 rounded-xl flex items-center gap-3 border border-gray-800">
                  <Play size={18} fill="white" /> 
                  <div className="text-left text-[10px] leading-tight font-bold uppercase"><p className="opacity-60">Get it on</p><p className="text-sm">Google Play</p></div>
                </button>
              </div>
            </div>
          </div>

          {/* SUCCESSFUL FIX: Your uploaded image of the couple on the couch */}
          <div className="relative flex justify-center lg:justify-end">
             <div className="relative w-full max-w-[500px] h-[500px]">
                {/* Creative Backdrop */}
                <div className="absolute inset-0 bg-emerald-100 rounded-[4rem] rotate-3 scale-95 opacity-50"></div>
                
                {/* The Couple Image */}
                <img 
                  src="/young-couple-using-mobile-phone-while-sitting-couch-home-stay-home-new-normal-lifestyle-concept.jpg" 
                  alt="Happy Couple Booking Move" 
                  className="relative z-10 w-full h-full object-cover rounded-[4rem] shadow-2xl"
                />
                
                {/* Real-time Bidding Notification Overlay */}
                <div className="absolute top-1/2 -left-10 z-20 bg-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-4 animate-bounce">
                   <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-black italic">R</div>
                   <div className="text-left">
                      <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Incoming Bid</p>
                      <p className="text-xl font-black text-[#1F2937]">R450.00</p>
                      <p className="text-[10px] text-gray-400 font-bold">"1-ton truck ready to move!" [cite: 12]</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </header>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16 italic tracking-tighter text-[#1F2937]">How BidMy<span className="text-emerald-600 font-black">Move</span> Works [cite: 16]</h2>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            {[
              { step: "01", title: "Post Your Load", desc: "Select your vehicle size (1-ton to 14-ton) and list your pickup/drop-off points." },
              { step: "02", title: "Receive Real Bids", desc: "Verified truck owners compete for your job. Compare the best prices in real-time." },
              { step: "03", title: "Move with Ease", desc: "Your driver arrives to safely transport your goods to your brand-new home." }
            ].map((item, i) => (
              <div key={i} className="relative p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 group hover:bg-emerald-600 transition-all duration-500">
                <span className="text-6xl font-black text-emerald-100 group-hover:text-white/20 transition-colors absolute top-4 right-8 leading-none tracking-tighter">{item.step}</span>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white uppercase">{item.title}</h3>
                <p className="text-gray-500 group-hover:text-emerald-50 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Portal Recruitment Section */}
      <section id="fleet" className="py-24 bg-[#1F2937] overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-20">
           <img 
             src="https://images.unsplash.com/photo-1586191121274-12f73462b78e?q=80&w=2070" 
             alt="Delivery Truck" 
             className="w-full h-full object-cover"
           />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center text-left">
          <div className="bg-emerald-600 rounded-[3rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-5xl font-black mb-6 text-white tracking-tight leading-[1.1]">Own a Truck? <br />Start Earning. [cite: 20]</h2>
              <p className="text-emerald-50 text-xl mb-10 font-medium max-w-md">
                Join South Africa's fastest-growing logistics fleet. Get access to thousands of daily loads. [cite: 21]
              </p>
              <Link href="/register-fleet" className="inline-block bg-[#FBBF24] text-[#1F2937] px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition shadow-xl">
                Join Fleet [cite: 22]
              </Link>
            </div>
            <Truck className="absolute -bottom-10 -right-10 text-emerald-500 w-64 h-64 opacity-20" />
          </div>

          {/* Fleet Status Dashboard Card */}
          <div className="relative">
             <div className="bg-white p-10 rounded-[3.5rem] shadow-2xl border border-gray-100 max-w-md ml-auto text-[#1F2937]">
                <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-6">
                   <div className="text-left leading-none">
                      <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Driver Dashboard</p>
                      <h3 className="text-2xl font-black italic tracking-tighter">Fleet Portal [cite: 28]</h3>
                   </div>
                   <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600"><Truck size={24} /></div>
                </div>
                <div className="space-y-8">
                   <div className="text-left">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 italic">Weekly Earnings</p>
                      <p className="text-5xl font-black tracking-tight italic">R12,450.00 [cite: 29]</p>
                   </div>
                   <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                      <div className="flex justify-between items-center mb-2">
                         <p className="text-[10px] font-black text-emerald-700 uppercase tracking-widest leading-none">Next Job: 15 mins</p>
                         <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                      </div>
                      <p className="text-xl font-black italic tracking-tight italic text-left">Sandton → Pretoria CBD [cite: 30]</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}