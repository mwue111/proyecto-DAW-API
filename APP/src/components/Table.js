import React, { useState, useEffect } from 'react';

const Table = ({ fetchUrl }) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, [fetchUrl]);

  if (isLoading) {
    return <div>Cargando...</div>
  }
  
  if (!data.length) {
    return <div>No se han encontrado datos</div>
  }

  const headers = Object.keys(data[0]);

  return (
    <table className="table-auto w-full text-left">
      <thead className="bg-gray-200">
        <tr className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
          {headers.map(header => (
            <th key={header} className="px-4 py-2">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
            <tr key={item.id}>
              {headers.map(header => (
                typeof item[header] === 'object' ? null : (
                <td key={`${header}-${item.id}`} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{item[header]}</td>
                )
              ))} 
            </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table
