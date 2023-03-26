import { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import axios from 'axios';

function ProductCarousel() {
  const [products, setProducts] = useState([]);
  const responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/producto");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  const getRandomProducts = () => {
    const randomProducts = [];
    if (products.length > 0) {
      while (randomProducts.length < 25) {
        const randomIndex = Math.floor(Math.random() * products.length);
        const randomProduct = products[randomIndex];
        if (!randomProducts.includes(randomProduct)) {
          randomProducts.push(randomProduct);
        }
      }
    }
    return randomProducts;
  };

  const randomProducts = getRandomProducts();

  const productTemplate = (product) => {
    return (
      <div className="product">
        {product.product_img?.length > 0 ? (
          <img src={product.product_img[0].file.url} alt={product.name} />
        ) : (
          <img
            src="https://via.placeholder.com/300x200.png?text=No+Image"
            alt="No Image"
          />
        )}
        <div className="product-details">
          <h4>{product.name}</h4>
        </div>
      </div>
    );
  }

  return (
    <>
      {randomProducts && randomProducts.length > 0 && (
        <Carousel value={randomProducts} itemTemplate={productTemplate} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}></Carousel>
      )}
    </>
  );
}
export default ProductCarousel;
