import React from 'react';
import ClientSidePage from './pages/clientSide';
import ServerSidePage from './pages/serverSide';

export default function Home() {
  return (
    <div>
      <nav className="bg-gray-800 text-white py-4">
        <div className="max-w-2xl mx-auto px-4 flex justify-center items-center">
          <h1 className="text-2xl font-bold">Rick and Morty App</h1>
        </div>
      </nav>
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div>
          <ClientSidePage />
        </div>
        <div>
          <ServerSidePage />
        </div>
      </div>
    </div>
  );
}
