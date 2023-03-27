import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useState, useEffect} from 'react'
import {DataView} from 'primereact/dataview'
import axios from 'axios'
import { useRouter } from 'next/router'
import StoreMap from '@/components/StoreMap'
import { formatJsonDireccion } from '@/helpers/helper'
import StoreTitle from '@/components/StoreTitle'
import StoreInfo from '@/components/StoreInfo'
import { useAuth } from '@/hooks/auth'
import EditStoreDialog from '@/components/EditStoreDialog'
import { Image } from 'primereact/image'
import AddNewProductAccordion from '../../components/AddProductAccordion'



const Tienda = () => {

    const { user } = useAuth()
    const [selectedStore, setSelectedStore] = useState(null);
    const router = useRouter();
    const { pid } = router.query;  //id recibida por parametro
    const [storeUpdated, setStoreUpdated] = useState(false);


    useEffect(() => {
        if(!pid) return;
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tienda/${pid}`) //pid es el id de la tienda (http://localhost:8000/tienda/
        .then((response) => {
            setSelectedStore(response.data)
        })
    }, [pid, storeUpdated])

    const handleStoreUpdated = () => {
        setStoreUpdated(!storeUpdated);
    };

    const renderListItem = (data) => {
        return (
          <div className='col-12'>
            <div className='flex flex-column align-items-center p-3 w-full md:flex-row'>
              <div className='text-center md:text-left md:flex-1'>
                <div className='text-2xl font-bold'>
                  <a href={`/producto/${data.id}`}>{data.name}</a>
                </div>
                <div className='mb-3'>{data.description}</div>
                <i className='pi pi-tag vertical-align-middle mr-2'></i>
                <span className='vertical-align-middle font-semibold'>{data.pivot.stock}</span>
              </div>
              <div className='flex md:flex-column mt-5 justify-content-between align-items-center md:w-auto w-full'>
                <span className='align-self-center text-2xl font-semibold mb-2 md:align-self-end'>{data.pivot.value}€</span>
                <span className={`product-badge `}>{data.pivot.unit}</span>
              </div>
            </div>
          </div>
        )
      }
    

    const itemTemplate = (store, layout) => {
        if (!store) {
            return;
        }

        return renderListItem(store);
    };

    return (
        <AppLayout
        header={selectedStore && 
            <div className='flex flex-col justify-items-center'>
              <StoreTitle store={selectedStore} />
              {((user.type =="owner" && user.id === selectedStore?.user_id) || user.type =="administrator") &&
                <div className='flex flex-col justify-items-center'>
                <EditStoreDialog store={selectedStore} onUpdate={handleStoreUpdated} />
                <AddNewProductAccordion store={selectedStore} onUpdate={handleStoreUpdated} />
                </div>
              }
            </div>
          }
        >
            <Head>
            {selectedStore? <title>LocAlmeria -  {selectedStore.name} : "Tienda"</title>: <title>LocAlmeria -  Tienda</title>}
            </Head>
            <div className="py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8 mb-5 bg-white rounded-lg">
            <div className="col-span-1 flex justify-center items-center ml-4">
            {selectedStore && (
                <div className='border-8 border-color-slate-800 rounded-l-lg'>
                    {selectedStore?.store_imgs.length>0 ?
                        <Image src={selectedStore?.store_imgs[0].file.url} width={300} height={300} alt={selectedStore?.name} style={{ display: 'block' }} />
                        : <Image src="https://via.placeholder.com/300x300.png?text=No+Image" width={300} height={300} alt={selectedStore?.name} style={{ display: 'block' }} />
                    }
                </div>
            )}
            </div>
            <div className="col-span-2 p-6">
                {selectedStore && <StoreInfo info={selectedStore}/>}
            </div>
            <div className="col-span-1">
            {selectedStore &&
                <div className='border-8 border-color-slate-800 rounded-l-lg'>
                    <StoreMap address={formatJsonDireccion(selectedStore?.address)} apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}/>
                </div>}
            </div>
            </div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                       {selectedStore &&
                        <DataView value={selectedStore.products} layout="list" itemTemplate={itemTemplate} paginator rows={10} />
                       }
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Tienda