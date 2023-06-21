import React, { useEffect, useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import axios from 'axios';
import { productStoreFilterFormatter } from '@/helpers/helper';
import { useRouter } from 'next/router';

/**
 * SearchBar component.
 * Renders a search bar with autocomplete functionality for products and stores.
 * @returns {JSX.Element} The rendered search bar component.
 */
const SearchBar = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [dataFilter, setDataFilter] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [stores, setStores] = useState([]);
    const [products, setProducts] = useState([]);
    const router = useRouter();

     /**
   * Handles the search input and filters the data accordingly.
   * @param {object} event - The search input event.
   */
    const search = (event) => {
        const query = event.query.toLowerCase().replace(/[àáâãäå]/g, 'a')
                                                  .replace(/[èéêë]/g, 'e')
                                                  .replace(/[ìíîï]/g, 'i')
                                                  .replace(/[òóôõö]/g, 'o')
                                                  .replace(/[ùúûü]/g, 'u');
        const _filteredData = dataFilter.map(group => {
          const filteredItems = group.items.filter((item) => {
            const normalizedItem = item.label.toLowerCase().replace(/[àáâãäå]/g, 'a')
                                                                .replace(/[èéêë]/g, 'e')
                                                                .replace(/[ìíîï]/g, 'i')
                                                                .replace(/[òóôõö]/g, 'o')
                                                                .replace(/[ùúûü]/g, 'u');
            return normalizedItem.includes(query);
          });

          return { ...group, items: filteredItems };
        }).filter(group => group.items.length);

        setFilteredData(_filteredData);
      };


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
            setProducts([]);
        }
    }, []);

    useEffect(() => {
        if(stores){
            const storesProductsFilter=productStoreFilterFormatter(products, stores);
            setDataFilter(storesProductsFilter);
        }
    }, [stores,products]);

     /**
   * Renders the template for the grouped items in the autocomplete dropdown.
   * @param {object} item - The item to be rendered.
   * @returns {JSX.Element} The rendered template for the grouped item.
   */
    const groupedItemTemplate = (item) => {
        return (
            <div className="flex align-items-center">
                <div>{item.label}</div>
            </div>
        );
    };

     /**
   * Handles the selection of an item from the autocomplete dropdown.
   * @param {object} e - The selection event.
   */
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
