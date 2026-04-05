import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

const Products = () => (
  <div className="pt-24 pb-16">
    <div className="container space-y-12">
      <div className="text-center space-y-3">
        <h1 className="text-4xl sm:text-5xl font-heading">
          Our <span className="text-gradient-fire">Products</span>
        </h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Handle with caution. Each jar is handcrafted in small batches for maximum heat and flavor.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  </div>
);

export default Products;
