import React, { useState, useEffect, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Fieldset } from 'primereact/fieldset';
import { Image } from 'primereact/image';
import { FileUpload } from 'primereact/fileupload';

const DialogProduct = ({ product }) => {
    {/*estaría bien poner fotos, están en otra tabla*/}

    const [productName, setProductName] = useState(product.name);
    const [productDesc, setProductDesc] = useState(product.description);
    const [productBrand, setProductBrand] = useState(product.brand_id);
    const [productCat, setProductCat] = useState(product.category);
    const [productPic, setProductPic] = useState('');
    const toast = useRef(null);

    {/*Esto debería ser product.image o algo similiar, usado como ejemplo*/}
    let picture = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg/640px-Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg';

    const onProductPicUpload = (e) => {
        setProductPic(e);
        toast.current.show({severity: 'info', summary: '¡Perfecto!', detail:'Imagen subida'});
    }

    const onChangeProductName = (e) => {
        setProductName(e.target.value);
    }

    const onProductDescChange = (e) => {
        setProductDesc(e.target.value);
    }

    const onProductBrandChange = (e) => {
        setProductBrand(e.target.value);
    }

    const onProductCatChange = (e) => {
        setProductCat(e.target.value);
    }

    console.log('producto: ', product);
    return(
        <div>
            <div className='field'>
                <Fieldset legend='Datos del producto'>
                    <label htmlFor='productName'>Nombre:</label>
                    <InputText id='productName' name='productName' defaultValue={productName} onChange={onChangeProductName}/>
                    <br/>
                    <br/>
                    <label htmlFor='productDesc'>Descripción:</label>
                    <InputTextarea id='productDesc' name='productDesc' defaultValue={productDesc} rows={5} onChange={onProductDescChange}/>
                    <br/>
                    <br/>
                    <label htmlFor='productBrand'>Marca:</label>
                    <InputText id='productBrand' name='productBrand' defaultValue={productBrand} onChange={onProductBrandChange}/>
                    <br/>
                    <br/>
                    <label htmlFor='productCat'>Categoría:</label>
                    <InputText id='productCat' name='productCat' defaultValue={productCat} onChange={onProductCatChange}/>
                </Fieldset>
                <br/>
                <Fieldset legend='Imagen del producto'>
                    <label htmlFor='productPic'>Nueva imagen:</label>
                    <br/>
                    <br/>
                    <FileUpload mode='basic' name='productPic[]' url='https://primefaces.org/primereact/showcase/upload.php' accept='image/*' maxFileSize={1000000} onUpload={onProductPicUpload}/>
                    <br/>
                    {/*Esto debería ser dependiendo de si hay una imagen guardada para el producto, puesto .name para que haga el condicional */}
                    {productName &&
                        <div>
                            <label htmlFor='oldProductPic'>Imagen guardada:</label>
                            <Image name='oldProductPic' src={picture} alt={`Imagen de ${productName}`} width='250' preview/>
                        </div>
                    }
                </Fieldset>
            </div>
        </div>
    );
}

export default DialogProduct;
