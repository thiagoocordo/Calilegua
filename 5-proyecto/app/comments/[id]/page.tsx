'use client'
import { GET } from '@/app/api/[id]/route';
import { Comments } from '@/app/types/types';
import React, { useEffect, useState } from 'react';

const CommentsComponent = ({params}:{params:{id : number}}) => {
  const { id } = params;
  const [comment, setComment] = useState<Comments | undefined>(undefined);

  const fetchData = async () => {
    try {
      const data = await GET({ params: { id } });
      setComment(data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {comment ? (
        <div key={comment.id} className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">{comment.name}</h2>
          <p className="text-gray-600 mt-2">{comment.comment}</p>
        </div>
      ) : (
        <p>No hay comentarios disponibles.</p>
      )}
    </div>
  );
};

export default CommentsComponent;
