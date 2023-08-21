import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <li className="product-card">
      <div className="product-card__image">
        <img src={product.image} />
      </div>
      <div className="product-card__info">
        <Link to={`/${product.id}`}>
          <h4>{product.title}</h4>
        </Link>
        <p>{product.category}</p>
        <p>
          <span>${product.price}</span>
          &nbsp;
          <span>⭐{product.rating['rate']}</span>
        </p>
      </div>
    </li>
  );
};

export default ProductCard;
