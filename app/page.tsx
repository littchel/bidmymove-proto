import React from 'react';
import { ArrowRight, Play, CheckCircle, Shield, Truck, Star } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1F2937]">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-600 p-2 rounded-lg">
            <Truck className="text-white" size={24} />
          </div>
          <span className="text-2xl font-black tracking-tighter italic text-emerald-600">BidMyMove</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-widest text-gray-400">
          <a href="#how-it-works" className="hover:text-emerald-600 transition">How it Works</a>
          <a href="#features" className="hover:text-emerald-600 transition">Features</a>
          <a href="#fleet" className="hover:text-emerald-600 transition text-emerald-500">Join Fleet</a>
        </div>
        <Link href="/post-job">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-all shadow-lg shadow-emerald-100 uppercase text-xs tracking-widest">
            Book Now
          </button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-12 pb-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
            #1 Rated Logistics Platform
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
            Smart Moves.<br />
            <span className="text-emerald-600">Better Prices.</span>
          </h1>
          <p className="text-xl text-gray-500 font-medium max-w-md leading-relaxed">
            Why pay fixed rates when you can get competitive bids? Connect with verified truck owners and save up to 40% on your next move.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/post-job">
              <button className="bg-[#1F2937] text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 hover:bg-emerald-600 transition-all group shadow-2xl">
                Get a Quote <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        {/* Happy Couple Image Fix */}
        <div className="relative">
          <div className="absolute -inset-4 bg-emerald-100 rounded-[4rem] rotate-3 -z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1556740734-7f95891d15c6?auto=format&fit=crop&q=80&w=1000" 
            alt="Happy couple using BidMyMove app"
            className="rounded-[3rem] shadow-2xl border-8 border-white object-cover h-[500px] w-full"
          />
          {/* Real-time Bid Overlay Simulation */}
          <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 flex items-center gap-4 animate-bounce">
            <div className="bg-emerald-500 p-3 rounded-2xl">
              <Star className="text-white fill-current" size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Incoming Bid</p>
              <p className="text-2xl font-black text-emerald-600">R450.00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-24 px-6 rounded-[5rem] mx-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-black mb-16 tracking-tight">How BidMyMove Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Post Your Load", desc: "Select your vehicle type and list your pickup & drop-off locations." },
              { step: "02", title: "Receive Real Bids", desc: "Verified truck owners compete for your job. Compare the best prices in real-time." },
              { step: "03", title: "Move With Ease", desc: "Choose your mover and track your goods safely to your final destination." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform">
                <p className="text-6xl font-black text-emerald-100 mb-6">{item.step}</p>
                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}