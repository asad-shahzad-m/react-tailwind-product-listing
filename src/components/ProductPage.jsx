import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Spinner from './Spinner.jsx';

const ProductPage = ({ cart, setCart }) => {
  const [productInfo, setProductInfo] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => {
        setProductInfo(json);
      });
  }, [productId]);

  const handleAdd = () => {
    const existingProduct = cart.find((item) => item.id === productInfo.id);

    if (existingProduct) {
      // Product is already in the cart, update its quantity
      const updatedCart = cart.map((item) =>
        item.id === productInfo.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // Product is not in the cart, add it with quantity 1
      setCart([...cart, { ...productInfo, quantity: 1 }]);
    }
    toast('Added to cart successfully!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'dark',
    });
  };

  if (productInfo.title) {
    return (
      <div className="product">
        <div className="product__image">
          <img src={productInfo.image} />
        </div>
        <div className="product__content">
          <h4>{productInfo.title}</h4>
          <p>Category: {productInfo.category}</p>
          <p>
            <span>${productInfo.price}</span>
            &nbsp;
            <span>⭐{productInfo.rating.rate}</span>
            &nbsp;
            <span>({productInfo.rating.count})</span>
          </p>
          <p>{productInfo.description}</p>
          <button onClick={handleAdd}>Add to cart</button>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
    );
  }

  return <Spinner />;
};

export default ProductPage;
