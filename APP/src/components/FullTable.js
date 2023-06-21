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

  const handleTagClick = tag => {
    setFilterText(tag);
  };

  const handleRowClick = row => {
    window.location.href = `/producto/${row.data.id}`;
  };

  const stopPropagation = e => {
    e.stopPropagation();
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
        onRowClick={handleRowClick}
        style={{ marginTop: "1em" }}
      >
        <Column
          field="name"
          header="Nombre"
          body={row => (
            <b>
              {row.name}
            </b>
          )}
          sortable />
        <Column
          header="Etiquetas"
          body={row => (
            <>
              {row.tags.length > 0 && (
                <ul>
                  {row.tags.map(tag => (
                    <li key={tag.id}>
                      <Tag
                        tag={tag.name}
                        onClick={() => handleTagClick(tag.name)}
                        onMouseDown={stopPropagation}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
/>
        <Column field="category.name" header="Categoría" sortable />
        <Column
          header="Foto"
          body={row => (
            <div style={{ width: "100px", height: "100px" }}>
              <img
                src={process.env.NEXT_PUBLIC_BACKEND_URL + row.product_img[0]?.file.url || "https://via.placeholder.com/100"}
                alt={row.name}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          )}
        />
      </DataTable>
    </>
  );
};

export default FullTable;
