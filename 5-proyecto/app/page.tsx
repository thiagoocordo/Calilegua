'use client'
import React, { useEffect, useState } from 'react';
import { GET as GETById } from '@/app/api/[id]/route';
import { GET, POST } from '@/app/api/route';
import { Comments } from '@/app/types/types';
import AddCommentModal from '@/app/components/AddCommentModal';

const Home: React.FC = () => {
  const [comments, setComments] = useState<Comments[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [searchId, setSearchId] = useState<string>('');

  const fetchData = async () => {
    try {
      const data = await GET();
      setComments(data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []); 

  const handleAddComment = async (newComment: Partial<Comments>) => {
    try {
      await POST(newComment);
      fetchData(); 
      setShowModal(false);
    } catch (error) {
      console.error('Error al agregar el comentario:', error);
    }
  };

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchId(value);

    if (value.trim() !== '') {
      const id = Number(value.trim());
      try {
        const data = await GETById({ params: { id } });
        setComments([data]); 
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    } else {
      fetchData(); 
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold mb-5">Comentarios</h1>
      <input
        type="text"
        placeholder="Buscar por id"
        className="ml-2 px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-360 mb-3"
        value={searchId}
        onChange={handleInputChange}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-3 ml-auto flex justify-end mr-2"
        onClick={() => setShowModal(true)}
      >
        Añadir Nuevo Comentario
      </button>

      <AddCommentModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleAddComment}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">{comment.name}</h2>
              <p className="text-gray-600 mt-2">{comment.comment}</p>
            </div>
          ))
        ) : (
          <p>No hay comentarios disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
