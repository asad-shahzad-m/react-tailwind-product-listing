import { Link } from 'react-router-dom';

const LineItem = ({ item }) => {
  return (
    <li className="line-item">
      <div className="item__image">
        <img src={item.image} />
      </div>
      <div className="item__content">
        <Link to={`/${item.id}`}>
          <h4>{item.title}</h4>
        </Link>
        <p>
          ${item.price} X {item.quantity}
        </p>
        <p>${item.price * item.quantity}</p>
      </div>
    </li>
  );
};

export default LineItem;
