import React, { useState, useEffect, Component } from 'react'
import { Image } from 'primereact/image';
import axios from 'axios';

function Images({ table, product, setImagesToDelete }){
    const productId = product.id;

    const [selectedImages, setSelectedImages] = useState([]);
    // const [dataToDelete, setDataToDelete] = useState([]);

    //Para traer el objeto entero:
    const [fullProduct, setFullProduct] = useState([]);
    const [imgData, setImgData] = useState({});

    useEffect(() => {

        let allImages = [];
        axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + `/producto/${productId}`)
            .then(res => {
                res.data.product_img.map((item) => {
                    allImages.push({
                        'id': item.file.id,
                        'url': item.file.url
                    })
                })
                setFullProduct(allImages);
            })
            .catch(error => console.log(error));

            setImagesToDelete(selectedImages);
            console.log('selectedImages: ', selectedImages);
    }, [selectedImages]);

    const handleDelete = (pic) => {

        if(selectedImages.includes(pic)){
            setSelectedImages(selectedImages.filter((img) => img !== pic));
        }
        else{
            setSelectedImages([...selectedImages, pic]);
        }

        console.log('selectedImages: ', selectedImages);

        // for(let i = 0; i < product.product_img.length; i++){
        //     if(product.product_img[i].file.url === pic && !imagesToDelete.includes(product.product_img[i].file.id)){
        //         imagesToDelete.push(product.product_img[i].file.id);
        //     }
        // }

        // console.log(imagesToDelete);

        // let url = process.env.NEXT_PUBLIC_BACKEND_URL + '/subir-archivo';

        //la petición de axios tiene que hacerse en TableAdmin

        // if(confirm('¿Seguro que quieres eliminar esta imagen?')){
        //     for(let i = 0; imagesToDelete.length; i++){
        //         axios.delete(url + '/' + imagesToDelete[i])
        //             .then(res => {
        //                 console.log(res.data + ' - eliminado')
        //                 // setDataToDelete(imagesToDelete);
        //             })
        //             .catch(error => console.log('error: ', error))
        //     }
        // }
    }

    return (
        <div className="flex">
            {fullProduct.length > 0 && fullProduct.map(pic =>
                <Image
                    src={process.env.NEXT_PUBLIC_BACKEND_URL + pic.url}
                    zoomSrc={process.env.NEXT_PUBLIC_BACKEND_URL + pic.url}
                    alt={`Foto de ${product.nombre}`}
                    key={pic.id}
                    width='80'
                    height='60'
                    onClick={() => handleDelete(pic.id)}
                    className={`p-2 m-auto cursor-pointer ${selectedImages.includes(pic.id) ?
                        'border-4 border-green-600' : '' }`}
                />
            )}
        </div>
      )
}

export default Images
