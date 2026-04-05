import { useParams, Link } from "react-router-dom";
import { products } from "@/lib/products";
import SpiceLevel from "@/components/SpiceLevel";
import ProductCard from "@/components/ProductCard";
import { Flame, ArrowLeft } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useCart } from "@/context/cart-context";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, isInCart } = useCart();
  const product = products.find((p) => p.id === id);
  const productInCart = product ? isInCart(product.id) : false;

  const handleAddToCart = () => {
    if (!product || productInCart) return;

    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} is ready to check out.`,
    });
  };

  if (!product) {
    return (
      <div className="pt-24 container text-center py-20">
        <h1 className="text-3xl font-heading">Product Not Found</h1>
        <Link to="/products" className="text-primary mt-4 inline-block">← Back to Products</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id);

  return (
    <div className="pt-24 pb-16">
      <div className="container space-y-16">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square rounded-lg overflow-hidden border border-border">
            <img src={product.image} alt={product.name} width={800} height={800} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-6 flex flex-col justify-center">
            <div>
              <p className="text-sm text-primary font-heading tracking-wider uppercase">{product.tagline}</p>
              <h1 className="text-4xl sm:text-5xl font-heading mt-2">{product.name}</h1>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-heading text-primary">${product.price}</span>
              <SpiceLevel level={product.spiceLevel} />
            </div>

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Spice meter bar */}
            <div className="space-y-2">
              <p className="text-xs font-heading tracking-wider uppercase text-muted-foreground">Heat Level</p>
              <div className="h-3 bg-muted rounded-full overflow-hidden relative">
                <div
                  className="h-full rounded-full relative overflow-hidden animate-pulse-fire"
                  style={{
                    width: `${(product.spiceLevel / 5) * 100}%`,
                    background: `linear-gradient(90deg, hsl(24, 100%, 50%), hsl(14, 100%, 50%))`,
                  }}
                >
                  {/* Shimmer overlay */}
                  <div
                    className="absolute inset-0 opacity-60"
                    style={{
                      background: `linear-gradient(90deg, transparent 0%, hsl(40, 100%, 70%, 0.5) 50%, transparent 100%)`,
                      animation: "heat-shimmer 1.5s ease-in-out infinite",
                    }}
                  />
                  {/* Ember particles */}
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute bottom-0 rounded-full"
                      style={{
                        width: "3px",
                        height: "3px",
                        background: "hsl(40, 100%, 70%)",
                        right: `${20 + i * 25}%`,
                        animation: `ember-rise 1.8s ease-out ${i * 0.5}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-heading tracking-wider uppercase text-muted-foreground mb-2">Ingredients</p>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing) => (
                  <span key={ing} className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-heading tracking-wider uppercase text-muted-foreground mb-1">Flavor Profile</p>
              <p className="text-sm text-foreground">{product.flavorProfile}</p>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              disabled={productInCart}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 font-heading text-sm tracking-wider uppercase bg-primary text-primary-foreground rounded-sm transition-all hover:brightness-110 glow-fire-hover w-fit disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:brightness-100"
            >
              <Flame className="w-4 h-4" /> {productInCart ? "Added" : "Add to Cart"}
            </button>
          </div>
        </div>

        {/* Related */}
        <div className="space-y-8">
          <h2 className="text-2xl font-heading">
            You May Also <span className="text-gradient-fire">Like</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
