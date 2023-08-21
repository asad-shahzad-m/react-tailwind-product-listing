import ProductGrid from './ProductGrid.jsx';

const Home = ({ data }) => {
  return (
    <div>
      <ProductGrid data={data} />
    </div>
  );
};

export default Home;
