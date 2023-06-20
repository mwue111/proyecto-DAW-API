import { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import axios from 'axios';

function RecommendedProducts () {
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
    if (products.length > 9) {
      while (randomProducts.length <6) {
        const randomIndex = Math.floor(Math.random() * products.length);
        const randomProduct = products[randomIndex];
        if (!randomProducts.includes(randomProduct)) {
          randomProducts.push(randomProduct);
        }
      }
    }else if(products.length > 3){
      while (randomProducts.length < 3) {
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
        <a href={`/producto/${product.id}`}>
          {product.product_img?.length > 0 ? (
            <img
              src={process.env.NEXT_PUBLIC_BACKEND_URL + product.product_img[0].file.url}
              alt={product.name}
              style={{ maxWidth: 300, maxHeight: 200 }}
            />
          ) : (
            <img
              src="https://via.placeholder.com/300x200.png?text=No+Image"
              alt="No Image"
              style={{ maxWidth: 400, maxHeight: 400 }}
            />
          )}
          <div className="product-details">
            <h4>{product.name}</h4>
          </div>
        </a>
      </div>
    );
  };
  

  return (
    <>
      {randomProducts && randomProducts.length > 0 && (
        <Carousel value={randomProducts} itemTemplate={productTemplate} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} circular ></Carousel>
      )}
    </>
  );
}
export default RecommendedProducts;
