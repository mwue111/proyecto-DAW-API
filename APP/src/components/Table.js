import React, { useState, useEffect } from 'react';

const Table = ({ fetchUrl }) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }
  
  if (!data.length) {
    console.log(data)
    return <div>No data found</div>
  }

    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Brand ID</th>
            <th>Category ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.brand_id}</td>
              <td>{item.category_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

export default Table
