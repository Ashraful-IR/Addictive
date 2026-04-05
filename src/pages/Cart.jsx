import { Link } from "react-router-dom";
import { ShoppingCart, ArrowLeft, Flame, Trash2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useCart } from "@/context/cart-context";

const Cart = () => {
  const { items, cartCount, removeFromCart } = useCart();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const handleCheckout = () => {
    toast({
      title: "Checkout started",
      description: "Redirecting you to secure checkout...",
    });
  };

  const handleRemoveItem = (item) => {
    removeFromCart(item.id);
    toast({
      title: "Removed from cart",
      description: `${item.name} has been removed.`,
    });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container space-y-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Continue Shopping
        </Link>

        <div className="flex items-center gap-3">
          <ShoppingCart className="w-7 h-7 text-primary" />
          <h1 className="text-3xl sm:text-4xl font-heading">
            Your <span className="text-gradient-fire">Cart</span>
          </h1>
        </div>

        {items.length === 0 ? (
          <div className="bg-card border border-border rounded-lg p-8 text-center space-y-4">
            <p className="text-muted-foreground">Your cart is empty. Add some heat to get started.</p>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 font-heading text-xs tracking-wider uppercase rounded-sm border border-primary/35 text-foreground bg-background/60 transition-all hover:border-primary hover:text-primary"
            >
              <Flame className="w-4 h-4" /> Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-card border border-border rounded-lg p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="h-20 w-20 rounded-md object-cover border border-border"
                    />
                    <div className="space-y-1">
                      <h2 className="font-heading text-lg tracking-wider">{item.name}</h2>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                  </div>

                  <div className="text-left sm:text-right space-y-1">
                    <p className="text-sm text-muted-foreground">
                      Price: ${item.price.toFixed(2)}
                    </p>
                    <p className="font-heading text-primary text-lg">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(item)}
                      className="inline-flex items-center gap-1 text-xs font-heading tracking-wider uppercase text-muted-foreground transition-colors hover:text-destructive"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-lg p-6 h-fit space-y-5">
              <h2 className="font-heading text-xl tracking-wider">Order Summary</h2>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Items</span>
                <span>{cartCount}</span>
              </div>
              <div className="flex items-center justify-between font-heading text-2xl">
                <span>Total</span>
                <span className="text-primary">${totalPrice.toFixed(2)}</span>
              </div>
              <button
                type="button"
                onClick={handleCheckout}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-heading text-xs tracking-wider uppercase bg-primary text-primary-foreground rounded-sm transition-all hover:brightness-110 btn-fire"
              >
                <Flame className="w-4 h-4 btn-fire-icon" />
                <span>Proceed To Checkout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
