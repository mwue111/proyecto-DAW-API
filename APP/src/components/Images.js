import React, { useState, useEffect, Component } from 'react'
import { Image } from 'primereact/image';
import axios from 'axios';

function Images({ table, product }){
    const productId = product.id;
    const imagesToDelete = [];

    const [oldImages, setOldImages] = useState([]);
    const [dataToDelete, setDataToDelete] = useState([]);
    const icon = (<i className="pi pi-check"></i>);

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + `/imagenes/${table}/${productId}`)
            .then(res => {
                setOldImages(res.data);
            })
    }, [dataToDelete]);


    const handleDelete = (pic) => {

        let imgId;

        for(let i = 0; i < product.product_img.length; i++){
            if(product.product_img[i].file.url === pic){
                imagesToDelete.push(product.product_img[i].file.id);
            }
        }

        let url = process.env.NEXT_PUBLIC_BACKEND_URL + '/subir-archivo';

        if(confirm('¿Seguro que quieres eliminar esta imagen?')){
            for(let i = 0; imagesToDelete.length; i++){
                axios.delete(url + '/' + imagesToDelete[i])
                    .then(res => {
                        console.log(res.date + ' - eliminado')
                        // setDataToDelete(imagesToDelete);
                    })
                    .catch(error => console.log('error: ', error))
            }
        }
    }

    return (
        <div className="flex">
            {oldImages.length > 0 && oldImages.map(pic =>
                <Image src={process.env.NEXT_PUBLIC_BACKEND_URL + pic}
                        zoomSrc={process.env.NEXT_PUBLIC_BACKEND_URL + pic}
                        alt={`Foto de ${product.nombre}`}
                        width='80'
                        height='60'
                        // template={icon}
                        // preview
                        key={pic}
                        className='p-2 m-auto cursor-pointer'
                        // onClick={() => handleDelete(process.env.NEXT_PUBLIC_BACKEND_URL + pic)}
                        onClick={() => handleDelete(pic)}
                />)
            }
        </div>
      )
}

export default Images
