import { useEffect, useState } from 'react';
import { formatJson } from '@/helpers/helper';

const JsonTest = () => {
  const [data, setData] = useState([])
  const [tipo, setTipo] = useState('tienda')

  useEffect(() => {
    fetch('http://localhost:8000/tienda')
      .then(response => response.json())
      .then(data => console.log(formatJson(data, tipo)));
  },[])

    return (
      'pepe'
    );
  }

export default JsonTest