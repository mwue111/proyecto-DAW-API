import React, { useEffect, useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import axios from 'axios';
import { productStoreFilterFormatter } from '@/helpers/helper';
import { useRouter } from 'next/router';

const SearchBar = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [dataFilter, setDataFilter] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [stores, setStores] = useState([]);
    const [products, setProducts] = useState([]);
    const router = useRouter();

    const search = (event) => {
        let query = event.query;
        let _filteredData = [];

        for (let data of dataFilter) {
            let filteredItems = data.items.filter((item) => item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1);

            if (filteredItems && filteredItems.length) {
                _filteredData.push({ ...data, ...{ items: filteredItems } });
            }
        }
        setFilteredData(_filteredData);
    }

    useEffect(() => {
        try{
            axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+'/tienda/nombre')
            .then((response) => {
                setStores(response.data);
            })
            axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+'/producto/nombre')
            .then((response) => {
                setProducts(response.data);
            })
        } catch (error) {
            console.log(error)
        }
    }, []);

    useEffect(() => {
        const storesProductsFilter=productStoreFilterFormatter(products, stores);
        setDataFilter(storesProductsFilter);
    }, [stores,products]);

    const groupedItemTemplate = (item) => {
        return (
            <div className="flex align-items-center">
                <div>{item.label}</div>
            </div>
        );
    };

    const handleSelect = (e) => {
        const {id, type} = e.value;
            router.push(`/${type}/${id}`);
        setSelectedItem('')
    }

    return (
        <div className="flex items-center">
            <div className="flex items-center">
                <AutoComplete value={selectedItem} onChange={(e) => setSelectedItem(e.value)} onSelect={handleSelect} suggestions={filteredData} completeMethod={search}
                field="label" optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} placeholder="Buscar productos o tiendas"/>
                <span className="text-gray-500">
                </span>
            </div>
        </div>
    );
}

export default SearchBar;
