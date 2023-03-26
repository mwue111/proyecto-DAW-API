import React, { useState, useEffect, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Fieldset } from 'primereact/fieldset';
import { Image } from 'primereact/image';
import { FileUpload } from 'primereact/fileupload';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import Upload from './Upload';
//import axios from 'axios';

const DialogProduct = ({ product, setItem, allCategories, brands, allTags, table }) => {
    const newProduct = product;
    const categoriesList = [...allCategories];
    const brandsList = [...brands];
    const tagList = [...allTags];
    let brandName;
    let brandId;
    let categoryName;
    let categoryId;

    console.log('product: ', product)

    const selectedTags = [];

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
    //const [selectedCategory, setSelectedCategory] = useState(product.categoria);
    const [selectedCategory, setSelectedCategory] = useState(product.categoria ? {'name': categoryName, 'id': categoryId} : null);
    //const [dropdownBrand, setDropdownBrand] = useState(product.marca);
    const [dropdownBrand, setDropdownBrand] = useState(product.marca ? {'name': brandName, 'id': brandId } : null);
    const [tags, setTags] = useState(tagList);
    const [productPic, setProductPic] = useState([]);

    useEffect(() => {
        setItem(dataForm);
        console.log('productPic en useEffect de DialogProduct: ', productPic);
    }, [dataForm, productPic]);

    const uploadHandler = (data) => {
        if(product.product_img){
            setProductPic(data);
            // console.log('productPic al principio de uploadHandler: ', productPic);
            // console.log('data: ', data);

            const oldImages = [];

            for(let i = 0; i < product.product_img.length; i++) {
                oldImages.push(product.product_img[i]);
            }

            data.forEach(item => oldImages.push(item));

            // const formData = new FormData();
            //data.forEach((file) => formData.append('product_img[]', file));
            // formData.forEach(item => oldImages.push(item));

            setProductPic(oldImages);
            console.log('productPic en uploadHandler: ', productPic)


            newProduct['product_img'] = oldImages;
            setDataForm(newProduct);
            console.log('newProduct al subir imagen: ', dataForm);
        }
        // //crear un objeto FormData:
        // const formData = new FormData();

        // //adjuntar el archivo de imagen al objeto FormData:
        // data.forEach((file) => {
        //     formData.append('product_img[]', file);
        // });

        // try {
        //     //const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + "/upload", formData);
        //     console.log('response.data en DialogProduct: ', response.data);
        // }
        // catch(error) {
        //     console.log('error: ', error);
        // }


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
                    <Dropdown name='marca' value={dropdownBrand} options={brandsList} placeholder="Selecciona la marca" onChange={handleInputChange} optionLabel='name'/>
                    <br/>
                    <label htmlFor='categoria'>Categoría:</label>
                    <Dropdown name='categoria' value={selectedCategory} onChange={handleInputChange} options={categoriesList} optionLabel='name'/>
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
                <Fieldset legend='Imagen del producto'>
                    <Upload item={product} setProductPic={(data) => {uploadHandler(data)}}
                    />
                </Fieldset>
            </div>
        </div>
    );
}

export default DialogProduct;
