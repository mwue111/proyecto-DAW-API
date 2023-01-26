import { useEffect, useState } from 'react';
import { formatJson } from '@/helpers/helper';

const JsonTest = () => {
  const [data, setData] = useState([])
  const [tipo, setTipo] = useState('tienda')

  useEffect(() => {
    fetch('http://localhost:8000/tienda')
      .then(response => response.json())
      .then(data => setData(formatJson(data, tipo)));
  },[])
    console.log(data)
    return (
      
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <p className='font-bold'>Nombre: {item.nombre}</p>
            <p>Dirección: {item.direccion}</p>
            <p>Teléfono 1: {item.telefono1}</p>
            <p>Teléfono 2: {item.telefono2}</p>
            <p>Email: {item.email}</p>
            <p>Propietario: {item.propietario}</p>
            <p>Horario: {item.horario}</p>
            <p>Descripción: {item.descripcion}</p>
            <p>------------------</p>
          </div>
        ))}
      </div>
    );
  }

export default JsonTest