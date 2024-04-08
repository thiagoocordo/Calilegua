'use client'
import React, { useEffect, useState } from 'react';


interface Post {
  id: number;
  title: string;
  body: string;
  params:string;
}

const PostPage: React.FC<Post> = ({id,title,body,params}) => {
  const [post, setPost] = useState<Post | null>(null); // Estado para almacenar el post

  useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogSlug}`)
        .then(response => response.json())
        .then(data => setPost(data))
        .catch(error => console.error('Error fetching post:', error));
    
  }, );

  if (!post) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostPage;
