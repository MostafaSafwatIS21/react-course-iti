import PreviewCard from "../shadcn-space/card/card-02";
import products from "../../data/products.json";
import { Link, useSearchParams } from "react-router-dom";
import { Select } from "../Select";

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let activeCategory = searchParams.get("category");
  let filteredProducts = products;

  if (activeCategory) {
    filteredProducts = products.filter(
      (product) => product.category === activeCategory,
    );
  }

  return (
    <div className="">
      <div className="flex items-center gap-4">
        <label htmlFor="category">Select Category</label>
        <Select setSearchParams={setSearchParams} />
      </div>
      <div className="container my-5 mx-auto grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <PreviewCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
