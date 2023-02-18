import React, { useState, useEffect, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Fieldset } from 'primereact/fieldset';
import { Image } from 'primereact/image';
import { FileUpload } from 'primereact/fileupload';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';

const DialogProduct = ({ product, setItem, allCategories, brands }) => {
    const newProduct = product;
    const categoriesList = [...allCategories];
    const brandsList = [...brands];

    console.log('product: ', product)
    //console.log('tags: ', product.tags);

    // const selectedTags = product.tags.map((tag)=>{
    //     return { name: tag.name}
    // });

    // console.log(selectedTags);

    const [dataForm, setDataForm] = useState(product);
    const [selectedCategory, setSelectedCategory] = useState(product.categoria);
    const [dropdownBrand, setDropdownBrand] = useState();
    const [productPic, setProductPic] = useState('');

    useEffect(() => {
        setItem(dataForm);
    }, [dataForm]);

    const handleInputChange = (e) => {
        const target = e.target;
        const val = target.value;
        const name = target.name;

        if(name !== null){
            const checkName = name.split('.');
            if(checkName.length == 2){
                newProduct[checkName[0]][checkName[1]] = val;
            }
            else{
                switch(name){
                    case 'categoria': setSelectedCategory(e.value); break;
                    case 'marca': setDropdownBrand(e.value); break;
                }
                // if(name === 'categoria'){
                //     setSelectedCategory(e.value);
                // }
                newProduct[name] = val;
            }

            setDataForm(newProduct);
            console.log('newProduct: ', dataForm);
        }
    }

    const onProductPicUpload = (e) => {
        setProductPic(e);
        toast.current.show({severity: 'info', summary: '¡Perfecto!', detail:'Imagen subida'});
    }

    return(
        <div>
            <div className='field'>
                <Fieldset legend='Datos del producto'>
                    <label htmlFor='nombre'>Nombre:</label>
                    <InputText name='nombre' defaultValue={dataForm.nombre} onChange={handleInputChange}/>
                    <br/>
                    <br/>
                    <label htmlFor='descripcion'>Descripción:</label>
                    <InputTextarea name='descripcion' defaultValue={dataForm.descripcion} rows={5} onChange={handleInputChange}/>
                    <br/>
                    <br/>
                    <label htmlFor='marca'>Marca:</label>
                    <Dropdown name='marca' value={dataForm.marca} options={brandsList} placeholder="Selecciona la marca" onChange={handleInputChange}/>
                    <br/>
                    <label htmlFor='categoria'>Categoría:</label>
                    <Dropdown name='categoria' value={selectedCategory} onChange={handleInputChange} options={categoriesList}/>
                    <br/>
                    <label htmlFor='tags'>Etiquetas:</label>
                    <MultiSelect name='tags' display="chip" placeholder="Selecciona una o varias categorías" className="w-full md:w-20rem"/> 
                    {/* aquí -- value={selectedCategory} onChange={handleInputChange} options={categoriesList} */}
                </Fieldset>
                <br/>
                <Fieldset legend='Imagen del producto'>
                    <label htmlFor='productPic'>Nueva imagen:</label>
                    <br/>
                    <br/>
                    <FileUpload mode='basic' name='productPic[]' url='https://primefaces.org/primereact/showcase/upload.php' accept='image/*' maxFileSize={1000000} onUpload={onProductPicUpload}/>
                    <br/>
                    {/*Esto debería ser dependiendo de si hay una imagen guardada para el producto, puesto .name para que haga el condicional */}
                    {dataForm.nombre &&
                        <div>
                            <label htmlFor='oldProductPic'>Imagen guardada:</label>
                            <Image name='oldProductPic' /*src={picture} alt={`Imagen de ${productName}`}*/ width='250' preview/>
                        </div>
                    }
                </Fieldset>
            </div>
        </div>
    );
}

export default DialogProduct;
