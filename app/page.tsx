import React from 'react';
import { ArrowRight, Truck, Star, Shield, CheckCircle, Smartphone } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1F2937]">
      {/* Navigation - Restored & Fixed Typos */}
      <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-600 p-2 rounded-lg">
            <Truck className="text-white" size={24} />
          </div>
          <span className="text-2xl font-black tracking-tighter italic text-emerald-600">BidMyMove</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-bold text-[10px] uppercase tracking-widest text-gray-400">
          <a href="#how-it-works" className="hover:text-emerald-600 transition">How it Works</a>
          <a href="#features" className="hover:text-emerald-600 transition">Features</a>
          <a href="#fleet" className="hover:text-emerald-500 transition">Join Fleet</a>
        </div>
        <Link href="/post-job">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-all shadow-lg uppercase text-[10px] tracking-widest">
            Book Now
          </button>
        </Link>
      </nav>

      {/* Hero Section - Fixed Image & Cleaned Text */}
      <section className="px-6 pt-12 pb-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center text-left">
        <div className="space-y-8">
          <div className="inline-block bg-emerald-50 text-emerald-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
            Next-Gen Logistics Platform
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
            Smart Moves.<br />
            <span className="text-emerald-600">Better Prices.</span>
          </h1>
          <p className="text-xl text-gray-500 font-medium max-w-md">
            Why pay fixed rates? Get competitive bids from verified truck owners and save up to 40%.
          </p>
          <Link href="/post-job">
            <button className="bg-[#1F2937] text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 hover:bg-emerald-600 transition-all group shadow-2xl">
              Get a Quote <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-emerald-50 rounded-[4rem] rotate-3 -z-10"></div>
          {/* RESTORED: Happy Couple Image */}
          <img 
            src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=1200" 
            alt="Happy couple using BidMyMove"
            className="rounded-[3rem] shadow-2xl border-8 border-white object-cover h-[500px] w-full"
          />
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

      {/* RESTORED: Driver Onboarding Section */}
      <section id="fleet" className="bg-[#1F2937] py-24 px-6 rounded-[5rem] mx-4 mb-12 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="text-left space-y-8">
            <h2 className="text-5xl font-black leading-tight">
              Own a Truck?<br />
              <span className="text-emerald-500">Start Earning.</span>
            </h2>
            <p className="text-xl text-gray-300 font-medium leading-relaxed">
              Join South Africa's fastest-growing logistics fleet. Get access to thousands of daily loads and choose the jobs that suit your route.
            </p>
            <button className="bg-yellow-400 text-black px-10 py-4 rounded-2xl font-black text-lg hover:bg-white transition-all uppercase tracking-widest">
              Join Fleet
            </button>
          </div>

          {/* RESTORED: Fleet Portal Visual Card */}
          <div className="bg-white p-8 rounded-[3rem] shadow-2xl text-left transform rotate-2">
            <div className="flex justify-between items-start mb-10">
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Driver Revenue</p>
                <p className="text-4xl font-black text-[#1F2937] tracking-tighter italic">R12,450.00</p>
              </div>
              <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-600">
                <Smartphone size={32} />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                <div className="bg-emerald-500 w-2 h-2 rounded-full"></div>
                <p className="font-bold text-gray-700">Sandton — Pretoria CBD</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}