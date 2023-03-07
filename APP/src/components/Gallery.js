import React, { useState, useEffect, useRef } from 'react';
import { Galleria } from 'primereact/galleria';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Button } from 'primereact/button';
import axios from 'axios';

function Gallery( {rowData, table} ) {

    {/* { loading === true ? <ProgressSpinner /> : } */}

    let defaultImages = [
        {
            itemImageSrc: '',
            thumbnailImageSrc: '',
            alt: '',
            title: '',
        },
    ];

    const [images, setImages] = useState(defaultImages);
    const [loading, setLoading] = useState();
    const galleria = useRef(null);

    const getImage = async (itemId, table) => {

        console.log('itemId y table: ', itemId, table);
        //setImages(defaultUrl);   //Esto debería limpiar la galería
        //cleanGallery();
        console.log('images al principio de getImage: ', images);

        setLoading(true);

        await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + `/imagenes/${table}/${itemId}`)
            .then(res => {
                cleanGallery();
                let newImages = [];

                if(res.data.length === 0){
                    newImages.push({
                        itemImageSrc: 'https://media.istockphoto.com/id/1319717836/es/vector/ning%C3%BAn-vector-de-icono-de-signo-de-c%C3%A1mara-de-fotos.jpg?s=170667a&w=0&k=20&c=UwNQQM1WyAQXWVayIwQlSefX-ycCuugxKo41nxzcSpc=',
                        alt: 'No hay imágenes disponibles para esta tienda',
                        title: 'sin imágenes'
                    });
                }
                else{
                    console.log('petición: ', res);
                    res.data.map((item) => {
                        newImages.push({
                            itemImageSrc: item,
                            thumbnailImageSrc: item,
                            alt: `imagen de ${table}`,
                            title: `item id: ${itemId}`
                        });
                    });
                }

                console.log('newImages: ', newImages);
                setImages(newImages);
            })
            .then(() => {
                console.log('images: ', images);
                setLoading(false);
                console.log('galleria: ', galleria)
                galleria.current.show();
            })
            .catch(error => console.log('Ha ocurrido un error: ', error))


        //Problemas con esta versión:
            //1. se bugea: no se puede limpiar al volver al dar al botón *Aquí
            //2. hay que esperar que carguen las imágenes desde la bd
    }

    const cleanGallery = () => {
        setImages(defaultImages);
    }

    const responsiveOptions = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '90%', display: 'block' }} />;
        // if(item?.itemImageSrc){
        //     //console.log('item: ', item);
        // }
    }

    const thumbnailTemplate = (item) => {
        if(item.thumbnailImageSrc){
            return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ width: '30%', display: 'inline-block' }} />;
        }
    }


    return (
        <div>
            <Galleria
                ref={galleria}
                value={images}
                responsiveOptions={responsiveOptions}
                numVisible={9}
                style={{ maxWidth: '50%' }}
                circular fullScreen showItemNavigators
                item={itemTemplate}
                thumbnail={thumbnailTemplate}
                activeIndex={0}
            />

            <Button
                label="Imágenes"
                icon="pi pi-external-link"
                onClick={() =>
                    getImage(rowData.id, table)
                }
            />
        </div>
    )
}

export default Gallery
