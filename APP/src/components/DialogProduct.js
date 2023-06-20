import React, { useState, useEffect, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Fieldset } from 'primereact/fieldset';
import { Image } from 'primereact/image';
import { FileUpload } from 'primereact/fileupload';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import Upload from './Upload';
import Images from './Images';

const DialogProduct = ({ product, setItem, allCategories, brands, allTags, table }) => {
    const newProduct = product;
    const categoriesList = [...allCategories];
    const brandsList = [...brands];
    const tagList = [...allTags];
    let brandName;
    let brandId;
    let categoryName;
    let categoryId;

    const selectedTags = [];

    console.log('item en dialogProduct: ', product);

    for(let i = 0; i < brandsList.length; i++) {
        if(product.marca === brandsList[i].name) {
            brandName = brandsList[i].name;
            brandId = brandsList[i].id;
        }
    }

    for(let i = 0; i < categoriesList.length; i++) {
        if(product.categoria === categoriesList[i].name) {
            categoryName = categoriesList[i].name;
            categoryId = categoriesList[i].id;
        }
    }

    if(product.tags){
        product.tags.map((tag)=>{
             selectedTags.push(tag.name);
        });
    }

    const [dataForm, setDataForm] = useState(product);
    const [dropdownBrand, setDropdownBrand] = useState(product.marca ? {'name': brandName, 'id': brandId } : null);
    const [selectedCategory, setSelectedCategory] = useState(product.categoria ? {'name': categoryName, 'id': categoryId} : null);
    const [tags, setTags] = useState(tagList);
    const [productPic, setProductPic] = useState([]);

    useEffect(() => {
        setItem(dataForm);
        console.log('dataForm en DialogProduct: ', dataForm);
    }, [dataForm]);

    const handleDelete = (data) => {
        dataForm['img_delete'] = data;
    }

    const uploadHandler = (data) => {
        if(product.product_img){

            //Almaceno las imágenes antiguas para que no entre siempre en el if de tableAdmin
            const allImages = product.product_img;

            data.forEach(item => {
                const files = Object.values(item);
                for(let i = 0; i < files.length; i ++){
                    allImages.push(files[i]);
                }
            });
        }
    }

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
                    case 'tags': setTags(e.value); break;
                }

                newProduct[name] = val;
            }

            setDataForm(newProduct);
        }
    }

    return(
        <div>
            <div className='field'>
                <Fieldset legend='Datos del producto'>
                    <label htmlFor='nombre'>Nombre:</label>
                    <InputText name='nombre'
                                defaultValue={dataForm.nombre}
                                onChange={handleInputChange}
                    />
                    <br/>
                    <br/>
                    <label htmlFor='descripcion'>Descripción:</label>
                    <InputTextarea name='descripcion'
                                    defaultValue={dataForm.descripcion}
                                    rows={5}
                                    onChange={handleInputChange}
                    />
                    <br/>
                    <br/>
                    <label htmlFor='marca'>Marca:</label>
                    <Dropdown name='marca'
                                value={dropdownBrand}
                                options={brandsList}
                                placeholder="Selecciona la marca"
                                onChange={handleInputChange}
                                optionLabel='name'
                    />
                    <br/>
                    <label htmlFor='categoria'>Categoría:</label>
                    <Dropdown name='categoria'
                                value={selectedCategory}
                                onChange={handleInputChange}
                                options={categoriesList}
                                optionLabel='name'
                    />
                    <br/>
                    <label htmlFor='tags'>Etiquetas:</label>
                    <MultiSelect
                        name='tags'
                        display="chip"
                        value={tagList.filter((tags) =>
                            selectedTags.includes(tags.name))
                        }
                        placeholder="Selecciona una o varias etiquetas"
                        className="w-full md:w-20rem"
                        onChange={handleInputChange}
                        options={tagList}
                        optionLabel='name'/>

                </Fieldset>
                <br/>
                <Fieldset legend='Subir nuevas imágenes'>
                    <Upload item={product} setProductPic={(data) => {uploadHandler(data)}}/>
                </Fieldset>
                <br />
                {product.id &&
                <Fieldset legend='Eliminar imágenes existentes'>
                    <Images table={table}
                            product={product}
                            setImagesToDelete={(data) => {handleDelete(data)}}
                    />
                </Fieldset>}
            </div>
        </div>
    );
}

export default DialogProduct;
