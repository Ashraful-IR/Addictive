import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useCart } from "@/context/cart-context";
import SpiceLevel from "./SpiceLevel";

const ProductCard = ({ product }) => {
  const { addToCart, isInCart } = useCart();
  const productInCart = isInCart(product.id);

  const handleAddToCart = () => {
    if (productInCart) return;

    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} is ready to check out.`,
    });
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border transition-all duration-300 hover:border-primary/40 glow-fire-hover">
      <Link to={`/products/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={800}
            height={800}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-lg tracking-wider">{product.name}</h3>
            <span className="font-heading text-primary text-lg">
              ${product.price}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{product.tagline}</p>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-heading tracking-wider uppercase text-muted-foreground">
              <span>Heat Indicator</span>
              <span>{product.spiceLevel}/5</span>
            </div>
            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full heat-indicator-fill bg-gradient-to-r from-secondary to-primary"
                style={{
                  width: `${(product.spiceLevel / 5) * 100}%`,
                  animationDelay: `${product.spiceLevel * 90}ms`,
                }}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <SpiceLevel level={product.spiceLevel} />
            <span className="text-xs font-heading tracking-wider uppercase text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1">
              View Details →
            </span>
          </div>
        </div>
      </Link>
      <div className="px-5 pb-5">
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={productInCart}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 font-heading text-xs tracking-wider uppercase rounded-sm border border-primary/35 text-foreground bg-background/60 transition-all hover:border-primary hover:text-primary hover:bg-background disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:border-primary/35 disabled:hover:text-foreground"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>{productInCart ? "Added" : "Add to Cart"}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
