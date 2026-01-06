'use client';
import Link from 'next/link';

export default function JobDetails() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="text-center">
        <h1 className="text-2xl font-black italic mb-4">Post Your Move</h1>
        <p className="text-gray-500 mb-6">Enter your details to find verified drivers near you.</p>
        <div className="space-y-4 max-w-xs mx-auto">
          <input placeholder="Pickup" className="w-full p-4 bg-gray-100 rounded-xl border-none" />
          <input placeholder="Destination" className="w-full p-4 bg-gray-100 rounded-xl border-none" />
          <Link href="/dashboard/live" className="block w-full py-4 bg-emerald-600 text-white rounded-xl font-bold">
            Get Bids Now
          </Link>
        </div>
      </div>
    </div>
  );
}