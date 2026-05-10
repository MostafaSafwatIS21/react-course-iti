import { useParams } from "react-router-dom";
import products from "../../data/products.json";
import PreviewCard from "../shadcn-space/card/card-02";

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container my-5 mx-auto">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="text-gray-700">
          The product you are looking for does not exist.
        </p>
      </div>
    );
  }
  return (
    <div className="h-screen w-7/12 my-5 mx-auto">
      <PreviewCard product={product} />
    </div>
  );
}
