import ProductCard from './ProductCard.jsx';
const ProductGrid = ({ data }) => {
  return (
    <ul className="product-grid">
      {data.map((product, index) => {
        return <ProductCard product={product} key={index} />;
      })}
    </ul>
  );
};

export default ProductGrid;
