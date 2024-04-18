import React from 'react';

export async function ServerSidePage() {
  const apiData = await fetch('https://rickandmortyapi.com/api/character');
  const data = await apiData.json();
  const characters=data.results

  return (
    <div className="max-w-2xl mx-auto px-4">
    <h1 className="text-3xl font-bold mb-4">Personajes de Rick and Morty (SSR)</h1>
    <ul className="grid grid-cols-2 gap-4">
      {characters.map(character => (
        <li key={character.id} className="bg-gray-100 p-4 rounded-lg shadow">
          <p className="text-xl font-semibold">{character.name}</p>
          <p className="text-gray-600">Especie: {character.species}</p>
          <p className="text-gray-600">Origen: {character.origin.name}</p>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default ServerSidePage;
