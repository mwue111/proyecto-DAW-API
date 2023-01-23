import { useAuth } from '@/hooks/auth';
import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { CustomerService } from '../service/CustomerService';

const Table = ({ fetchUrl }) => {
    const { user } = useAuth(); //Para poder utilizar la información del usuario (si está conectado, el tipo...)
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

  //Objects.keys se queda con la llave del objeto.
  const headers = Object.keys(data[0]);

  //Corta headers a partir de la llave created_at para que no se muestre
  headers.splice(headers.indexOf('created_at'), headers.length - headers.indexOf('created_at'));

  return (
    <table className="table-auto w-full text-left bg-gray-200">
      <thead className="bg-gray-300">
        <tr className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
          {headers.map(header => (
            <th key={header} className="px-4 py-2">{header}</th>
          ))}
          {/*Si el usuario existe y si es tipo admin que se muestre una columna nueva de acciones */}
          {user && user.type === 'administrator' && <th>Acciones</th>}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
            <tr key={item.id}>
              {headers.map(header => (
                <td key={`${header}-${item.id}`} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{item[header]}</td>
              ))}
              <td>
                {/*Acciones aquí*/}
              </td>
            </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table
