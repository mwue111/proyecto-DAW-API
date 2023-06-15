import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Testimonials = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_BACKEND_URL+'/comentario/random')
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="bg-gray-500">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-100 mb-8">Clientes satisfechos</h2>
        <div className="flex flex-wrap">
          {comments.map((comment) => (
            <div key={comment.id} className="w-full h-auto md:w-1/3 px-2 mb-4">
              <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">{comment.comentario}</p>
                <p className="text-gray-500 text-xs md:text-sm px-6">{comment.nombre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;