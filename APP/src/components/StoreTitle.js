import React from 'react';

function StoreTitle({store}) {
  return (
    <div className="max-w-7xl">
      <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg relative">
        <img
          src="/palm-tree.svg"
          alt="Palmera"
          className="absolute top-1/2 left-0 transform -translate-y-1/2 w-24 h-24"
        />
        <div className="text-center p-6 bg-white border-b border-gray-200 bg-gradient-to-b from-sky-400 via-sky-300 to-amber-300">
              <h1 className="text-3xl font-bold">{store?.name}</h1>
          <p className="text-xl">{store?.description}</p>
        </div>
        <img
          src="/palm-tree.svg"
          alt="Palmera"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 w-24 h-24"
        />
      </div>
    </div>
  );
}

export default StoreTitle;