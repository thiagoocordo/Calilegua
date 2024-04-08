// pages/index.tsx
"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  const [postId, setPostId] = useState<number>(1); // Estado para almacenar el ID de la publicación


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostId(parseInt(event.target.value)); 
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Post</h1>
      <div>
        <input type="number" value={postId} onChange={handleChange} /> 
        <Link href={`/blog/${postId}`}>Ir al Post</Link>
      </div>
    </div>
  );
};

export default Home;
