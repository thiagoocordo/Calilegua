'use client'

import React, { useState } from 'react';
import Modal from 'react-modal';
import { Comments } from '@/app/types/types';

interface AddCommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newComment: Partial<Comments>) => void;
}

const AddCommentModal: React.FC<AddCommentModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [newComment, setNewComment] = useState<Partial<Comments>>({ name: '', comment: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewComment((prevComment) => ({ ...prevComment, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(newComment);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="modal-overlay fixed inset-0 bg-gray-800 bg-opacity-75"
      contentLabel="Nuevo Comentario"
      ariaHideApp={false} // Mantener accesible para Tailwind CSS
    >
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Nuevo Comentario</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newComment.name}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
              Comentario
            </label>
            <textarea
              id="comment"
              name="comment"
              value={newComment.comment}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              rows={4}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Guardar Comentario
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddCommentModal;
