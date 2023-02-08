import React, { useEffect, useState } from 'react'
import ProductCarousel from './ProductCarousel'

function HeaderProduct({data}) {
    const [producto, setProducto] = useState(null)
    useEffect(() => {
        console.log(data)
        setProducto(data);
    }, [data])
  return (
    <div className="flex justify-center items-center w-full h-64 bg-gray-100">
        {producto !=null && 
            <div className='flex flex-row w-auto h-100'> 
                    <div className="">
                        <ProductCarousel images={data.images}/>
                    </div>
                    <div className="">
                        <div className="text-center md:text-left md:flex-1">
                            <div className="text-2xl font-bold">{producto.name}</div>
                            <div className="mb-3">{producto.description}</div>
                            <i className="pi pi-tag vertical-align-middle mr-2"></i>
                        </div>
                    </div>
            </div>
        }
        
    </div>
  )
}

export default HeaderProduct