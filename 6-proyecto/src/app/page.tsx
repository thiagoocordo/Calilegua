'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session, status} = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [router, status]);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center text-white p-8">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>
        {session && session.user ? (
          <div>
            <p className="mb-4">Welcome, {session.user.name}!</p>
            <button onClick={() => signOut()} className="bg-white text-black py-2 px-4 rounded hover:bg-gray-300 transition-colors">Sign Out</button>
          </div>
        ) : (
          <p>You are not logged in.</p>
        )}
      </div>
    </div>
  );
}
