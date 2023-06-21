import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import Tag from "components/Tag";

/**
 * FullTable component.
 * Renders a table with filtering and sorting functionality.
 * @returns {JSX.Element} The rendered component.
 */
const FullTable = () => {
    const [products, setProducts] = useState([]);
    const [filterText, setFilterText] = useState("");

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + "/producto").then(res => {
            setProducts(res.data);
        });
    }, []);

    const normalizedFilterText = filterText
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    const filteredProducts = products.filter(product =>
        product.name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(normalizedFilterText) ||
        product.tags.some(tag =>
            tag.name
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(normalizedFilterText)
        ) ||
        product.category?.name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(normalizedFilterText)
    );

    /**
      * Handles the change event for the filter input.
      * @param {Event} e - The change event object.
      */
    const handleFilterChange = e => {
        setFilterText(e.target.value);
    };

    return (
        <>
            <InputText type="text" placeholder="Buscar..." value={filterText} onChange={handleFilterChange} />
            <DataTable
                value={filteredProducts}
                paginator
                rows={10}
                rowsPerPageOptions={[5, 10, 20]}
                selectionMode="single"
                selection={null}
                onRowClick={row => window.location.href = `/producto/${row.data.id}`}
                style={{ marginTop: "1em" }}
            >
                <Column field="name" header="Name" sortable />
                <Column
                    header="Tags"
                    body={row => (
                        <ul>
                            {row.tags.map(tag => (
                                <li key={tag.id}><Tag tag={tag.name} /></li>
                            ))}
                        </ul>
                    )}
                />
                <Column field="category.name" header="Category" sortable />
                <Column
                    header="Image"
                    body={row => (
                        (row.product_img[0]?.file.url) ? (<img src={row.product_img[0]?.file.url} alt={row.name} width="100" />) :
                            <img src="https://via.placeholder.com/100" alt={row.name} width="100" />

                    )}
                />
            </DataTable>
        </>
    );
};

export default FullTable;
