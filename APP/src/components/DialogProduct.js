import React, { useState, useEffect, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Fieldset } from 'primereact/fieldset';
import { Image } from 'primereact/image';
import { FileUpload } from 'primereact/fileupload';

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
    const [productPic, setProductPic] = useState('');
    const toast = useRef(null);

    {/*Esto debería ser product.image o algo similiar, usado como ejemplo*/}
    let picture = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg/640px-Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg';

    const onProductPicUpload = (e) => {
        setProductPic(e);
        toast.current.show({severity: 'info', summary: '¡Perfecto!', detail:'Imagen subida'});
    }

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
                    <InputText id='productCat' name='productCat' defaultValue={product.category} onChange={e => setProductCat(e.target.value)}/>
                </Fieldset>
                <br/>
                <Fieldset legend='Imagen del producto'>
                    <label htmlFor='productPic'>Nueva imagen:</label>
                    <br/>
                    <br/>
                    <FileUpload mode='basic' name='productPic[]' url='https://primefaces.org/primereact/showcase/upload.php' accept='image/*' maxFileSize={1000000} onUpload={onProductPicUpload}/>
                    <br/>
                    {/*Esto debería ser dependiendo de si hay una imagen guardada para el producto, puesto .name para que haga el condicional */}
                    {product.name &&
                        <div>
                            <label htmlFor='oldProductPic'>Imagen guardada:</label>
                            <Image name='oldProductPic' src={picture} alt={`Imagen de ${product.name}`} width='250' preview/>
                        </div>
                    }
                </Fieldset>
            </div>
        </div>
    );
}

export default DialogProduct;
