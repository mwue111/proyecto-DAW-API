import React, { useEffect, useState } from 'react'
import ProductCarousel from './ProductCarousel'
import Tag from 'components/Tag'

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
                    <div className='max-w-sm items-center'>
                        <ProductCarousel images={data.images}/>
                    </div>
                    <div className="">
                        <div className="text-center md:text-left md:flex-1">
                            <div className="text-2xl font-bold">{producto.name}</div>
                            <div>
                                <div className="mb-3">{producto.description}</div>
                            </div>
                            <div >
                                {producto.tags.map((tag) => (
                                        <Tag tag={tag.name} />
                                ))}
                            </div>
                        </div>
                    </div>
            </div>
        }
        
    </div>
  )
}

export default HeaderProduct