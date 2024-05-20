'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import bcryptjs from 'bcryptjs';
import axios from "axios";




export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = { username, password: hashedPassword };
    await axios.post('https://66297c6b67df268010a0df12.mockapi.io/services/users', newUser);
    router.push('/auth/signin');
  };
  return (
    <div className="bg-black min-h-screen flex items-center justify-center text-white p-8">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1">Username</label>
            <input type="text" id="name" value={username} onChange={(e) => setUsername(e.target.value)} className="p-2 border border-gray-300 rounded text-black" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 border border-gray-300 rounded text-black" />
          </div>
          <button type="submit" className="bg-white text-black py-2 px-4 rounded hover:bg-gray-300 transition-colors">Register</button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
}
