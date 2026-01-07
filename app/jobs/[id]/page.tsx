import JobDetailsClient from './JobDetailsClient';

// This function tells Next.js which paths to pre-render as static HTML
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ];
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // We pass the 'id' to the Client Component which handles the localStorage logic
  return <JobDetailsClient id={id} />;
}