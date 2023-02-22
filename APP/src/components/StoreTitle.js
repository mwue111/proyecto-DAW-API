import React from 'react'

function StoreTitle({store}) {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-5 ">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg ">
            <div className="text-center p-6 bg-white border-b border-gray-200 bg-gradient-to-b from-green-200 to-green-400">
                <h1 className="text-3xl font-bold">{store.name}</h1>
                <p className="text-xl">{store.description}</p>
            </div>
        </div>
    </div>
  )
}

export default StoreTitle