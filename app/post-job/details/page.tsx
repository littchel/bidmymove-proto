import { Suspense } from 'react';
import RouteForm from './RouteForm';

export default function Page() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white font-black italic text-emerald-600 animate-pulse">
        Initializing Move Engine...
      </div>
    }>
      <RouteForm />
    </Suspense>
  );
}