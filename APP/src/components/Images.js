import React, { useState, useEffect, Component } from 'react'
import { Image } from 'primereact/image';
import axios from 'axios';

function Images({ table, product }){
    const productId = product.id;

    const [oldImages, setOldImages] = useState([]);

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + `/imagenes/${table}/${productId}`)
            .then(res => {
                setOldImages(res.data);
            })
    }, []);

    console.log('oldImages: ', oldImages);
    return (
        <div>
          <Image src={process.env.NEXT_PUBLIC_BACKEND_URL + "/storage/images/product_imgs/1680683009Pomelo3.jpg"} zoomSrc={process.env.NEXT_PUBLIC_BACKEND_URL + "/storage/images/product_imgs/1680683009Pomelo3.jpg"} alt="imagen" width="80" height='60' preview/>
        </div>
      )
}

export default Images
