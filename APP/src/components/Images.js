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

    return (
        <div className="flex">
            {oldImages.length > 0 && oldImages.map(pic =>
                <Image src={process.env.NEXT_PUBLIC_BACKEND_URL + pic}
                        zoomSrc={process.env.NEXT_PUBLIC_BACKEND_URL + pic}
                        alt={`Foto de ${product.nombre}`}
                        width='80'
                        height='60'
                        preview
                        key={pic}
                        className='p-2 m-auto'
                        onClick={() => {console.log('ok')}}
                />)
            }
        </div>
      )
}

export default Images
