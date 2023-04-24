import React, { useState, useEffect, Component } from 'react'
import { Image } from 'primereact/image';
import axios from 'axios';

function Images({ table, product }){
    const productId = product.id;
    // const imagesToDelete = [];

    // const [oldImages, setOldImages] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);
    // const [dataToDelete, setDataToDelete] = useState([]);
    // const icon = (<i className="pi pi-check"></i>);

    //Para traer el objeto entero:
    const [fullProduct, setFullProduct] = useState([]);
    const [imgData, setImgData] = useState({});

    useEffect(() => {
        // axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + `/imagenes/${table}/${productId}`)
        //     .then(res => {
        //         setOldImages(res.data);
        //     })

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

        // console.log('imagesToDelete: ', imagesToDelete);

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
            {/* {oldImages.length > 0 && oldImages.map(pic =>
                <Image src={process.env.NEXT_PUBLIC_BACKEND_URL + pic}
                        zoomSrc={process.env.NEXT_PUBLIC_BACKEND_URL + pic}
                        alt={`Foto de ${product.nombre}`}
                        width='80'
                        height='60'
                        // template={icon}
                        // preview
                        key={pic}
                        className={`p-2 m-auto cursor-pointer ${imagesToDelete.includes(pic) ? 'border-4 border-blue-500' : ''}`}
                        // onClick={() => handleDelete(process.env.NEXT_PUBLIC_BACKEND_URL + pic)}
                        onClick={() => handleDelete(pic)}
                />)
            } */}
            {fullProduct.length > 0 && fullProduct.map(pic =>
                <Image
                    src={process.env.NEXT_PUBLIC_BACKEND_URL + pic.url}
                    zoomSrc={process.env.NEXT_PUBLIC_BACKEND_URL + pic.url}
                    alt={`Foto de ${product.nombre}`}
                    key={pic.id}
                    width='80'
                    height='60'
                    onClick={() => handleDelete(pic.id)}
                    // className={`${imagesToDelete.includes(pic.id) ? 'p-2 m-auto cursor-pointer border-4 border-blue-500' : 'p-2 m-auto cursor-pointer'}`}
                    className={`p-2 m-auto cursor-pointer ${
                        selectedImages.includes(pic.id)
                          ? 'border-4 border-blue-500'
                          : ''
                      }`}
                />
            )}
        </div>
      )
}

export default Images
