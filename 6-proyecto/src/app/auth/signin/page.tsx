'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });
    if (result && !result.error) {
      router.push('/');
    } else {
      setError('Invalid email or password');
    }
  };
  const handleShowUsers = () => {
    console.log("Current users:");
  };
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white p-8">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Sign In</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">Username</label>
            <input type="text" id="email" value={username} onChange={(e) => setUsername(e.target.value)} className="p-2 border border-gray-300 rounded text-black" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 border border-gray-300 rounded text-black" />
          </div>
          <button type="submit" className="bg-white text-black py-2 px-4 rounded hover:bg-gray-300 transition-colors">Sign In</button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
        <button onClick={handleShowUsers} className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700 transition-colors">Show Users</button>
        <p className="mt-4">Don't have an account? <a href="/auth/register" className="text-blue-500">Register</a></p>
      </div>
    </div>
  );
}
