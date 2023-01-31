import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {Dropdown} from 'primereact/dropdown'
import {useState, useEffect} from 'react'
import {DataView} from 'primereact/dataview'
import axios from 'axios'


const Store = () => {

    const defaultStores = [
        {
            name: 'Tienda 1',
            products: [
                {
                    name: 'Product 1',
                    description: 'Product 1 Description',
                    price: 100,
                    image: 'product1.jpg',
                    rating: 4,
                    category: 'Category 1',
                    inventoryStatus: 'INSTOCK'
                }
            ]
            }
        ]

    const [selectedStore, setSelectedStore] = useState(null);
    const [stores, setStores] = useState(defaultStores);

    useEffect(() => {
        axios.get('http://localhost:8000/tienda')
        .then((response) => {
            setStores(response.data)
        })
    }, [])

    const renderListItem = (data) => {
        return (
            <div className="col-12">
                <div className="flex flex-column align-items-center p-3 w-full md:flex-row">
                    <img className="md:w-11rem w-9 shadow-2 md:my-0 md:mr-5 mr-0 my-5" src={`https://primereact.org/images/product/${data.image}`}  alt={data.name} />
                    <div className="text-center md:text-left md:flex-1">
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
    
    const changeStore = (e) => {
        setSelectedStore(e.value)
    }

    const itemTemplate = (store, layout) => {
        if (!store) {
            return;
        }

        return renderListItem(store);
    };

    return (
        <AppLayout
            header={
                <div>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        {selectedStore? selectedStore.name : "Tienda"}
                    </h2>
                    <Dropdown value={selectedStore} options={stores} onChange={(e) => setSelectedStore(e.value)} optionLabel="name" placeholder="Select a Store" />
                </div>

            }>

            <Head>
                <title>{selectedStore? selectedStore.name : "Tienda"}</title>
            </Head>

            <div className="py-12">
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

export default Store
