'use client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    setJobs(JSON.parse(localStorage.getItem('jobs') || '[]'));
    setBids(JSON.parse(localStorage.getItem('bids') || '[]'));
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-black mb-8 italic text-blue-600">My Move Dashboard</h1>
      
      {jobs.length === 0 ? (
        <p className="text-gray-500">You haven't posted any jobs yet.</p>
      ) : (
        jobs.map((job: any) => (
          <div key={job.id} className="mb-8 border-2 rounded-2xl overflow-hidden">
            <div className="bg-gray-800 p-4 text-white flex justify-between">
              <span className="font-bold">{job.title}</span>
              <span className="text-gray-400">Budget: ${job.budget}</span>
            </div>
            
            <div className="p-6 bg-gray-50">
              <h3 className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-widest">Bids Received</h3>
              <div className="grid gap-4">
                {bids.filter((b: any) => b.jobId === job.id).map((bid: any) => (
                  <div key={bid.id} className="bg-white p-4 border rounded-xl shadow-sm flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-black text-green-600">${bid.amount}</p>
                      <p className="text-gray-600 text-sm">{bid.message}</p>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold">Accept</button>
                  </div>
                ))}
                {bids.filter((b: any) => b.jobId === job.id).length === 0 && (
                  <p className="text-sm italic text-gray-400">No bids yet...</p>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}