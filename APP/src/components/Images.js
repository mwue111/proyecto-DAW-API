import React, { useState, useEffect, Component } from 'react'
import { Image } from 'primereact/image';
import axios from 'axios';

function Images({ table, product, setImagesToDelete }){
    const productId = product.id;

    const [selectedImages, setSelectedImages] = useState([]);
    const [fullProduct, setFullProduct] = useState([]);

    useEffect(() => {
        if(table === 'usuario'){
            let avatarUrl = [];
            axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + `/usuario/${product.id}`)
                .then(res => {
                    avatarUrl.push({
                        'id': res.data.id,
                        'url': res.data.avatar
                    });

                    setFullProduct(avatarUrl);
            })

        }
        else{
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
        }

            setImagesToDelete(selectedImages);

    }, [selectedImages]);

    const handleDeleteAvatar = (pic) => {
        setSelectedImages([pic.id]);
    }

    const handleDelete = (pic) => {
        // console.log('pic: ', pic)
        if(selectedImages.includes(pic)){
            setSelectedImages(selectedImages.filter((img) => img !== pic));
        }
        else{
            setSelectedImages([...selectedImages, pic]);
        }
        // console.log('selectedImages: ', selectedImages);
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
                    onClick={table === 'usuario' ? () => handleDeleteAvatar(pic) : () => handleDelete(pic.id)}
                    className={`p-2 m-auto cursor-pointer ${selectedImages.includes(pic.id) ?
                        'border-4 border-green-600' : '' }`}
                />
            )}
        </div>
      )
}

export default Images
