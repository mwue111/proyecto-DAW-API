import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { FileUpload } from 'primereact/fileupload';

const AddNewProductAccordion = ({ store }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        brand_id: '',
        category_id: '',
        tags: [],
        stores: [store.id],
        stock: '',
        value: '',
        remarks: '',
        unit: '',
        image: null,
    });
    const [accordionActiveIndex, setAccordionActiveIndex] = useState(null);
    const [tags, setTags] = useState([]);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios
            .get(process.env.NEXT_PUBLIC_BACKEND_URL+'/marca')
            .then((response) => {
                setBrands(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        axios
            .get(process.env.NEXT_PUBLIC_BACKEND_URL+'/etiqueta')
            .then((response) => {
                setTags(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        axios
            .get(process.env.NEXT_PUBLIC_BACKEND_URL+'/categoria')
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleSave = () => {
        const formDataWithImage = new FormData();
        formDataWithImage.append('name', formData.name);
        formDataWithImage.append('description', formData.description);
        formDataWithImage.append('brand_id', formData.brand_id);
        formDataWithImage.append('category_id', formData.category_id);
        formDataWithImage.append('tags', JSON.stringify(formData.tags));
        formDataWithImage.append('stores', JSON.stringify(formData.stores));
        formDataWithImage.append('stock', formData.stock);
        formDataWithImage.append('value', formData.value);
        formDataWithImage.append('remarks', formData.remarks);
        formDataWithImage.append('unit', formData.unit);
        formDataWithImage.append('image', formData.image);

        console.log(formDataWithImage)

        axios
            .post(process.env.NEXT_PUBLIC_BACKEND_URL+'/producto', formDataWithImage)
            .then(() => {
                setFormData({
                    name: '',
                    description: '',
                    brand_id: '',
                    category_id: '',
                    tags: [],
                    stores: [store.id],
                    stock: '',
                    value: '',
                    remarks: '',
                    unit: '',
                    image: null,
                });
                setAccordionActiveIndex(null);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleCancel = () => {
        setFormData({
            name: '',
            description: '',
            brand_id: '',
            category_id: '',
            tags: [],
            stores: [store.id],
            stock: '',
            value: '',
            remarks: '',
            unit: '',
            image: null,
        });
        setAccordionActiveIndex(null);
    };

    const handleImageUpload = (event) => {
        setFormData({ ...formData, image: event.files[0] });
    };

    return (
        <div>
            <Accordion activeIndex={accordionActiveIndex}>
                <AccordionTab header="Add New Product">
                    <div className="p-fluid">
                        <div className="p-field">
                            <label htmlFor="name">Nombre</label>
                            <InputText id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        </div>
                        <div className="p-field">
                            <label htmlFor="description">Descripcion</label>
                            <InputTextarea id="description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                        </div>
                        <div className="p-field">
                            <label htmlFor="brand_id">Marca</label>
                            <Dropdown
                                id="brand_id"
                                options={brands}
                                value={formData.brand_id}
                                onChange={(e) => setFormData({ ...formData, brand_id: e.value })}
                                optionLabel="name"
                                optionValue="id"
                                placeholder="Select a brand"
                                filter
                                filterPlaceholder="Search brand"
                            />
                        </div>
                        <div className="p-field">
                            <label htmlFor="category_id">Categoría</label>
                            <Dropdown
                                id="category_id"
                                options={categories}
                                value={formData.category_id}
                                onChange={(e) => setFormData({ ...formData, category_id: e.value })}
                                optionLabel="name"
                                optionValue="id"
                                placeholder="Select a category"
                                filter
                                filterPlaceholder="Search category"
                            />
                        </div>
                        <div className="p-field">
                            <label htmlFor="tags">Etiquetas</label>
                            <MultiSelect
                                id="tags"
                                options={tags}
                                value={formData.tags}
                                onChange={(e) => setFormData({ ...formData, tags: e.value })}
                                optionLabel="name"
                                optionValue="id"
                                placeholder="Select tags"
                                filter
                                filterPlaceholder="Search tags"
                            />
                        </div>
                        <div className="p-field">
                            <label htmlFor="stock">Stock</label>
                            <InputText id="stock" value={formData.stock} onChange={(e) => setFormData({ ...formData, stock: e.target.value })} />
                        </div>
                        <div className="p-field">
                            <label htmlFor="value">Precio</label>
                            <InputText id="value" value={formData.value} onChange={(e) => setFormData({ ...formData, value: e.target.value })} />
                        </div>
                        <div className="p-field">
                            <label htmlFor="remarks">Comentarios</label>
                            <InputTextarea id="remarks" value={formData.remarks} onChange={(e) => setFormData({ ...formData, remarks: e.target.value })} />
                        </div>
                        <div className="p-field">
                            <label htmlFor="unit">Unidad</label>
                            <InputText id="unit" value={formData.unit} onChange={(e) => setFormData({ ...formData, unit: e.target.value })} />
                        </div>
                        <div className="p-field">
                            <label htmlFor="image">Imagen</label>
                            <FileUpload
                                id="image"
                                mode="basic"
                                accept="image/*"
                                maxFileSize={1000000}
                                customUpload
                                uploadHandler={handleImageUpload}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end gap-8">
                        <Button label="Save" onClick={handleSave} className="p-button" />
                        <Button label="Cancel" onClick={handleCancel} className="p-button-secondary p-ml-2" />
                    </div>

                </AccordionTab>
            </Accordion>
        </div>
    );
};

export default AddNewProductAccordion;
