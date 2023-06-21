import AppLayout from '@/components/Layouts/AppLayout';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import HeaderProduct from '@/components/HeaderProduct';
import { useAuth } from '@/hooks/auth';

const Producto = () => {
  const { user } = useAuth();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const router = useRouter();
  const { pid } = router.query; //id recibida por parametro
  const [layout, setLayout] = useState('grid');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortedStores, setSortedStores] = useState([]);

  useEffect(() => {
    if (selectedProduct) {
      const sortStores = () => {
        const sorted = [...selectedProduct.stores].sort((a, b) => {
          if (sortOrder === 'asc') {
            return a.pivot.value - b.pivot.value;
          } else {
            return b.pivot.value - a.pivot.value;
          }
        });
        setSortedStores(sorted);
      };
      sortStores();
    }
  }, [selectedProduct, sortOrder]);

  useEffect(() => {
    if (!pid) return;
    axios
      .get(process.env.NEXT_PUBLIC_BACKEND_URL + `/producto/${pid}`) //pid es el id de la tienda (http://localhost:8000/tienda/
      .then((response) => {
        setSelectedProduct(response.data);
      });
  }, [pid]);

  const handleSortOrderChange = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  };

  const listItem = (data) => {
    return (
      <div className="col-12">
        <div className="flex flex-column align-items-center p-3 w-full md:flex-row">
          {data.image && (
            <img
              className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
              src={data.image}
              alt={data.name}
            />
          )}
          <div className="text-center md:text-left md:flex-1">
            <div className="text-2xl font-bold">
              <a href={`/tienda/${data.id}`}>{data.name}</a>
            </div>
            <div className="mb-3">{data.description}</div>
            <i className="pi pi-tag vertical-align-middle mr-2"></i>
            <span className="vertical-align-middle font-semibold">
              {data.pivot.stock}
            </span>
          </div>
          {user?.type !== undefined ? (
            <div className="flex md:flex-column mt-5 justify-content-between align-items-center md:w-auto w-full">
              <span className="align-self-center text-2xl font-semibold mb-2 md:align-self-end">
                {data.pivot.value}€
              </span>
              <span className={`product-badge `}>{data.pivot.unit}</span>
            </div>
          ) : (
            <span className="align-self-center text-2xl font-semibold mb-2 md:align-self-end">
              Inicia sesión para ver el precio
            </span>
          )}
        </div>
      </div>
    );
  };

  const gridItem = (data) => {
    return (
      <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
        <div className="p-4 border-1 surface-border surface-card border-round">
          <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <div className="flex align-items-center gap-2">
              <i className="pi pi-tag"></i>
              <span className="font-semibold">{data.category}</span>
            </div>
          </div>
          <div className="flex flex-column align-items-center gap-3 py-5">
            <img
              className="w-9 shadow-2 border-round"
              src={`https://primefaces.org/cdn/primereact/images/data/${data.image}`}
              alt={data.name}
            />
            <div className="text-2xl font-bold">{data.name}</div>
          </div>
          <div className="flex align-items-center justify-content-between">
            <span className="text-2xl font-semibold">${data.price}</span>
          </div>
        </div>
      </div>
    );
  };

  const itemTemplate = (store, layout) => {
    if (!store) {
      return;
    }

    if (layout === 'list') return listItem(store);
    else if (layout === 'grid') return gridItem(store);
  };

  const header = () => {
    return (
      <div className="flex justify-content-end">
        <DataViewLayoutOptions
          layout={layout}
          onChange={(e) => setLayout(e.value)}
        />
      </div>
    );
  };

  
  return (
    <AppLayout header={<HeaderProduct data={selectedProduct} />}>
      <Head>
        <title>
          LocAlmeria - {selectedProduct ? selectedProduct.name : 'Producto'}
        </title>
      </Head>
      <div className="py-12">
        {/* ... */}
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            {selectedProduct && (
              <>
                <div className="flex justify-end mb-3">
                    <Button
                    icon={`pi ${sortOrder === 'asc' ? 'pi-sort-numeric-down-alt' : 'pi-sort-numeric-down'}`}
                    className="p-button p-button-text p-button-sm mr-2 mt-2"
                    style={{ width: '32px', height: '32px', backgroundColor: 'lightblue', color: 'black' }}
                    onClick={handleSortOrderChange}
                    />
                </div>
                <DataView
                  value={sortedStores}
                  itemTemplate={itemTemplate}
                  paginator
                  rows={10}
                  layout="list"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Producto;
