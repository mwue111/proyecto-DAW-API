import React from 'react'
import { Carousel } from 'primereact/carousel';
import { Image } from 'primereact/image';

function ProductCarousel({ images }) {
  const responsiveOptions = [
    {
      numVisible: 1,
      numScroll: 1
    }
  ];

  const imageTemplate = (image) => {
    return (
      <div className="product-item">
        <div className="product-item-content">
          <div className="mb-3">
            <Image src={image.file ? image.file.url : "https://via.placeholder.com/250x250.png?text=No+Image"} alt={image.file ? "Image" : "No Image"} width="250" preview />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Carousel value={images} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions} circular={true} autoplayInterval={3000} itemTemplate={imageTemplate} />
    </div>
  )
}

export default ProductCarousel
