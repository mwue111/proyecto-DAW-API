import React from 'react'
import { Carousel } from 'primereact/carousel';
import { Image } from 'primereact/image';

/**
 * ProductCarousel component.
 * Renders a carousel of product images using PrimeReact Carousel and Image components.
 * @param {Object[]} images - The array of image objects to be displayed in the carousel.
 * @returns {JSX.Element} The rendered product carousel.
 */
function ProductCarousel({ images }) {
  const responsiveOptions = [
    {
      numVisible: 1,
      numScroll: 1
    }
  ];

  console.log(images)

   /**
   * Renders the template for each image in the carousel.
   * @param {Object} image - The image object to be rendered.
   * @returns {JSX.Element} The rendered image template.
   */
  const imageTemplate = (image) => {
    return (
      <div className="product-item">
        <div className="product-item-content">
          <div className="mb-3" style={{ overflow: "hidden" }}>
            <img
              src={image.file ? process.env.NEXT_PUBLIC_BACKEND_URL + image.file.url : "https://via.placeholder.com/250x250.png?text=No+Image"}
              alt={image.file ? "Image" : "No Image"}
              style={{ objectFit: "contain", maxWidth: "300px", maxHeight: "200px", width: "100%", height: "100%" }}
            />
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

export default ProductCarousel;
