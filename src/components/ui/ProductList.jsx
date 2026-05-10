import PreviewCard from "../shadcn-space/card/card-02";
import products from "../../data/products.json";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div className="container my-5 mx-auto grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <PreviewCard product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
