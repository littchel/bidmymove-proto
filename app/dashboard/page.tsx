'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Truck, Clock, MapPin, ChevronRight } from 'lucide-react';

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem('jobs') || '[]');
    setJobs(savedJobs);
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto text-left">
      <h1 className="text-4xl font-black mb-8 italic text-[#1F2937]">
        My <span className="text-emerald-600">Move</span> Dashboard
      </h1>
      
      {jobs.length === 0 ? (
        <div className="bg-white border-2 border-dashed border-gray-200 rounded-[2rem] p-12 text-center">
          <Truck className="mx-auto text-gray-300 mb-4" size={48} />
          <p className="text-gray-500 font-bold mb-6">No active moves found.</p>
          <Link href="/post-job" className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-black shadow-lg hover:bg-emerald-700 transition">
            Book Your First Move
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {jobs.map((job: any) => (
            <div key={job.id} className="bg-white p-6 rounded-[2rem] shadow-md border border-gray-100 flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-600">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-black text-[#1F2937] italic text-lg">{job.pickup} → {job.destination}</p>
                  <div className="flex gap-3 text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                    <span>{job.date}</span>
                    <span>•</span>
                    <span className="text-emerald-600">{job.vehicleType} Truck</span>
                  </div>
                </div>
              </div>
              <Link href="/dashboard/live" className="text-gray-300 hover:text-emerald-600 transition">
                <ChevronRight size={32} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}