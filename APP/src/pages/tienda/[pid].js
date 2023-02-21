import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useState, useEffect} from 'react'
import {DataView} from 'primereact/dataview'
import axios from 'axios'
import { useRouter } from 'next/router'
import StoreMap from '@/components/StoreMap'
import { formatJsonDireccion } from '@/helpers/helper'


const Tienda = () => {

    const [selectedStore, setSelectedStore] = useState(null);
    const router = useRouter();
    const { pid } = router.query;  //id recibida por parametro
    

    useEffect(() => {
        try {
            if(pid !=null)
            axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tienda/${pid}`) //pid es el id de la tienda (http://localhost:8000/tienda/
            .then((response) => {
                console.log(response.data)
                setSelectedStore(response.data)
            })
        } catch (error) {
            console.log("petó")
        }
    }, [pid])

    const renderListItem = (data) => {
        return (
            <div className="col-12">
                <div className="flex flex-column align-items-center p-3 w-full md:flex-row">
{/*                     <img className="md:w-11rem w-9 shadow-2 md:my-0 md:mr-5 mr-0 my-5" src={`https://primereact.org/images/product/${data.image}`}  alt={data.name} />
 */}                    <div className="text-center md:text-left md:flex-1">
                        <div className="text-2xl font-bold">{data.name}</div>
                        <div className="mb-3">{data.description}</div>
                        <i className="pi pi-tag vertical-align-middle mr-2"></i>
                        <span className="vertical-align-middle font-semibold">{data.pivot.stock}</span>
                    </div>
                    <div className="flex md:flex-column mt-5 justify-content-between align-items-center md:w-auto w-full">
                        <span className="align-self-center text-2xl font-semibold mb-2 md:align-self-end">${data.pivot.value}</span>
                        <span className={`product-badge `}>{data.pivot.unit}</span>
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (store, layout) => {
        if (!store) {
            return;
        }

        return renderListItem(store);
    };

    return (
        <AppLayout>
            <Head>
                <title>{selectedStore? selectedStore.name : "Tienda"}</title>
            </Head>

            <div className="py-12">
                {selectedStore && 
                    selectedStore.name
                }
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                {selectedStore && <StoreMap address={formatJsonDireccion(selectedStore?.address)} apiKey='AIzaSyBQ7YfohcWfByTbDJ1VdyNyrEEOY1pNI4s'/>} 
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
