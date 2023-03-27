import React, { useEffect, useState } from 'react'
import ProductCarousel from './ProductCarousel'
import Tag from 'components/Tag'

function HeaderProduct({data}) {
    const [producto, setProducto] = useState(null)
    useEffect(() => {
        setProducto(data);
    }, [data])
  return (
    <div className="flex justify-center items-center w-full h-128 bg-gray-100 pt-8 pb-4" style={{overflowY: "hidden"}}>
        {producto !=null && 
            <div className='flex flex-row w-full h-100 items-center'> 
                <div className='max-w-sm items-center' style={{float: "left", overflow: "hidden"}}>
                    <ProductCarousel images={data.product_img}/>
                </div>
                <div className="flex-1">
                    <div className="text-center md:text-left">
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
