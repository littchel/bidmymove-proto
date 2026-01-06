'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Browse() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    setJobs(JSON.parse(localStorage.getItem('jobs') || '[]'));
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-blue-600 italic">Available Moves</h1>
      <div className="grid gap-4">
        {jobs.map((job: any) => (
          <Link href={`/jobs/${job.id}`} key={job.id} className="p-6 border-2 rounded-2xl hover:border-blue-500 block transition">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p className="text-gray-500">Budget: ${job.budget}</p>
              </div>
              <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-bold">View Details</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}