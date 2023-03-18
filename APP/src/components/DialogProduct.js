import React, { useState, useEffect, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Fieldset } from 'primereact/fieldset';
import { Image } from 'primereact/image';
import { FileUpload } from 'primereact/fileupload';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import Upload from './Upload';

const DialogProduct = ({ product, setItem, allCategories, brands, allTags, table }) => {
    const newProduct = product;
    const categoriesList = [...allCategories];
    const brandsList = [...brands];
    const tagList = [...allTags];
    //const oldImages = product.product_img;

    //console.log('product: ', product)

    const selectedTags = [];

    if(product.tags){
        product.tags.map((tag)=>{
             selectedTags.push(tag.name);
        });
    }

    const [dataForm, setDataForm] = useState(product);
    const [selectedCategory, setSelectedCategory] = useState(product.categoria);
    const [dropdownBrand, setDropdownBrand] = useState(product.marca);
    const [tags, setTags] = useState(tagList);
    const [productPic, setProductPic] = useState([]);

    useEffect(() => {
        setItem(dataForm);
        //console.log('productPic: ', productPic);
    }, [dataForm]);

    const handleInputChange = (e) => {
        const target = e.target;
        const val = target.value;
        const name = target.name;

        if(name !== null){
            console.log('name: ', name);
            const checkName = name.split('.');
            if(checkName.length == 2){
                newProduct[checkName[0]][checkName[1]] = val;
            }
            else{

                switch(name){
                    case 'categoria': setSelectedCategory(e.value); break;
                    case 'marca': setDropdownBrand(e.value); break;
                    case 'tags': setTags(e.value); break;
                }

                newProduct[name] = val;
            }

            if(productPic.length){
            //Aquí: hacer que se detecte que se han seleccionado imágenes para elicitar setDataForm igual que los otros campos.

                const oldImages = [];

                for(let i = 0; i < product.product_img.length; i++) {
                    //oldImages.push(product.product_img[i].file.url);
                    oldImages.push(product.product_img[i]);
                }

                productPic.forEach(item => oldImages.push(item));

                newProduct['product_img'] = oldImages;
            }

            setDataForm(newProduct);
            console.log('newProduct: ', dataForm);
        }
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
                    <Dropdown name='marca' value={dropdownBrand} options={brandsList} placeholder="Selecciona la marca" onChange={handleInputChange}/>
                    <br/>
                    <label htmlFor='categoria'>Categoría:</label>
                    <Dropdown name='categoria' value={selectedCategory} onChange={handleInputChange} options={categoriesList}/>
                    <br/>
                    <label htmlFor='tags'>Etiquetas:</label>
                    <MultiSelect
                        name='tags'
                        display="chip"
                        value={tags.filter((tags) =>
                            selectedTags.includes(tags.name))
                        }
                        placeholder="Selecciona una o varias etiquetas"
                        className="w-full md:w-20rem"
                        onChange={handleInputChange}
                        options={tags}
                        optionLabel='name'/>

                </Fieldset>
                <br/>
                <Fieldset legend='Imagen del producto'>
                    <Upload name="product_img" item={product} setProductPic={setProductPic} onChange={handleInputChange} />
                </Fieldset>
            </div>
        </div>
    );
}

export default DialogProduct;
