import React, { useState, useEffect, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Fieldset } from 'primereact/fieldset';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';

const DialogProduct = ({ product }) => {
    {/*
    Producto:
    -id
    -name
    -description
    -brand_id
    -category_id
    -estaría bien poner fotos, están en otra tabla
    */}
    const [productName, setProductName] = useState('');
    const [productDesc, setProductDesc] = useState('');
    const [productBrand, setProductBrand] = useState('');
    const [productCat, setProductCat] = useState('');

    console.log('producto: ', product);
    return(
        <div>
            <div className='field'>
                <Fieldset legend='Datos del producto'>
                    <label htmlFor='productName'>Nombre:</label>
                    <InputText id='productName' name='productName' defaultValue={product.name} onChange={e => setProductName(e.target.value)}/>
                    <br/>
                    <br/>
                    <label htmlFor='productDesc'>Descripción:</label>
                    <InputTextarea id='productDesc' name='productDesc' defaultValue={product.description} rows={5} onChange={e => setProductDesc(e.target.value)}/>
                    <br/>
                    <br/>
                    <label htmlFor='productBrand'>Marca:</label>
                    <InputText id='productBrand' name='productBrand' defaultValue={product.brand_id} onChange={e => setProductBrand(e.target.value)}/>
                    <br/>
                    <br/>
                    <label htmlFor='productCat'>Categoría:</label>
                    <InputText id='productCat' name='productCat' defaultValue={product.category.name} onChange={e => setProductCat(e.target.value)}/>
                </Fieldset>
            </div>
        </div>
    );
}

export default DialogProduct;
