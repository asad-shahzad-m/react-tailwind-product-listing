import { Link } from 'react-router-dom';

const Header = ({ cart }) => {
  return (
    <div className="header">
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">
              🛒<span className="cart-bubble">{cart.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
