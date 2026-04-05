import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Flame, ShoppingCart } from "lucide-react";
import { products } from "@/lib/products";
import { toast } from "@/components/ui/use-toast";
import { useCart } from "@/context/cart-context";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { cartCount, addToCart } = useCart();

  const handleOrderNow = () => {
    const featuredProduct = products[0];
    if (!featuredProduct) return;

    addToCart(featuredProduct);
    toast({
      title: "Added to cart",
      description: `${featuredProduct.name} added from Order Now.`,
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <Flame className="w-7 h-7 text-primary transition-transform group-hover:scale-110" />
          <span className="font-heading text-2xl tracking-widest text-gradient-fire">ADDICTIVE</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-heading text-sm tracking-wider uppercase transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/products"
            onClick={handleOrderNow}
            className="inline-flex items-center gap-2 px-5 py-2 font-heading text-sm tracking-wider uppercase bg-primary text-primary-foreground rounded-sm transition-all hover:brightness-110 glow-fire-hover btn-fire"
          >
            <Flame className="w-4 h-4 btn-fire-icon" />
            <span>Order Now</span>
          </Link>
          <Link
            to="/cart"
            aria-label="Cart"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:text-primary hover:border-primary"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 min-w-5 h-5 px-1 rounded-full bg-primary text-primary-foreground text-[10px] leading-5 font-heading text-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            to="/cart"
            aria-label="Cart"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:text-primary hover:border-primary"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 min-w-5 h-5 px-1 rounded-full bg-primary text-primary-foreground text-[10px] leading-5 font-heading text-center">
                {cartCount}
              </span>
            )}
          </Link>
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block font-heading text-sm tracking-wider uppercase text-foreground hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/products"
            onClick={() => {
              handleOrderNow();
              setOpen(false);
            }}
            className="inline-flex w-full items-center justify-center gap-2 px-5 py-2 font-heading text-sm tracking-wider uppercase bg-primary text-primary-foreground rounded-sm btn-fire"
          >
            <Flame className="w-4 h-4 btn-fire-icon" />
            <span>Order Now</span>
          </Link>
          <Link
            to="/cart"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between border border-border rounded-sm px-4 py-2"
          >
            <span className="font-heading text-xs tracking-wider uppercase text-muted-foreground">Cart</span>
            <span className="inline-flex min-w-6 h-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-heading">
              {cartCount}
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
