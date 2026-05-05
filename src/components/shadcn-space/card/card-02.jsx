import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Store, BellElectric } from "lucide-react";

const PreviewCard = ({ product }) => (
  <Card className="relative gap-0 py-0 rounded-2xl group hover:shadow-3xl duration-300">
    <div className="overflow-hidden rounded-t-2xl">
      <a href="#">
        <div className="w-full h-72">
          <img
            src={product.image}
            alt={product.name}
            width={440}
            height={300}
            className="w-full h-full object-cover rounded-t-2xl group-hover:brightness-50 group-hover:scale-125 transition duration-300 delay-75"
          />
        </div>
      </a>

      <div className="absolute top-6 right-6 hidden p-4 bg-white rounded-full group-hover:block">
        <ArrowRight className="text-card-foreground" />
      </div>
    </div>

    <div className="p-6">
      <div className="flex justify-between gap-5 mb-6">
        <div>
          <a href="#">
            <h3 className="text-xl font-medium duration-300 group-hover:text-primary">
              {product.name.slice(0, 10)}
            </h3>
          </a>
          <p className="text-base font-normal text-muted-foreground">
            {product.description.slice(0, 40)}...
          </p>
        </div>

        <Badge className="px-5 py-2 text-base font-normal rounded-xl bg-teal-500/10 text-teal-800">
          ${product.price}
        </Badge>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2 xs:pr-4 pr-8 border-e border-border">
          <BellElectric size={20} />
          <p className="text-sm sm:text-base">{product.category}</p>
        </div>

        <div
          className={`flex  gap-2 xs:px-4 p-2 ${product.status === "In Stock" ? "bg-green-600" : product.status === "Low Stock" ? "bg-yellow-600" : "bg-red-600"} text-white rounded-xl`}
        >
          <Store size={20} />
          <p className="text-sm sm:text-base">{product.status}</p>
        </div>
      </div>
    </div>
  </Card>
);

export default PreviewCard;
