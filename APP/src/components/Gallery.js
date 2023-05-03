import React, { useState, useEffect, useRef } from 'react';
import { Galleria } from 'primereact/galleria';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Button } from 'primereact/button';
import axios from 'axios';

function Gallery( {rowData, table} ) {

    // console.log('rowData: ', rowData.id, ' - table: ', table);

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
    const [activeIndex, setActiveIndex] = useState(0);
    const galleria = useRef(null);

    const getImage = (itemId, table) => {
        setActiveIndex(0);
        setLoading(true);

        axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + `/imagenes/${table}/${itemId}`)
            .then(res => {
                let newImages = [];

                if(res.data.length === 0){
                    newImages.push({
                        itemImageSrc: 'https://media.istockphoto.com/id/1319717836/es/vector/ning%C3%BAn-vector-de-icono-de-signo-de-c%C3%A1mara-de-fotos.jpg?s=170667a&w=0&k=20&c=UwNQQM1WyAQXWVayIwQlSefX-ycCuugxKo41nxzcSpc=',
                        alt: 'No hay imágenes disponibles para esta tienda',
                        title: 'sin imágenes'
                    });
                }
                else{
                    res.data.map((item) => {
                        newImages.push({
                            itemImageSrc: process.env.NEXT_PUBLIC_BACKEND_URL + item,
                            thumbnailImageSrc: process.env.NEXT_PUBLIC_BACKEND_URL + item,
                            alt: `imagen de ${table}`,
                            title: `item id: ${itemId}`
                        });
                    });
                }

                setImages(newImages);
            })
            // .then(() => {
            //     setLoading(false);
            //     galleria.current.show();
            // })
            .catch(error => console.log('Ha ocurrido un error: ', error))
            .finally(() => {
                setLoading(false);
                if(galleria.current) {
                    galleria.current.show();
                }
            })
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
                activeIndex={activeIndex}
                onItemChange={(e) => {setActiveIndex(e.index)}}
            />

            { loading == true ? <ProgressSpinner style={{width: '30%', height: '30%'}} strokeWidth="5" /> :
                <Button
                    label="Imágenes"
                    icon="pi pi-external-link"
                    onClick={() =>
                        getImage(rowData.id, table)
                    }
                />
            }
        </div>
    )
}

export default Gallery
