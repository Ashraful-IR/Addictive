import { Link } from "react-router-dom";
import { Flame, Hand, Sparkles, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-products.jpg";
import { products } from "@/lib/products";
import { toast } from "@/components/ui/use-toast";
import { useCart } from "@/context/cart-context";
import ProductCard from "@/components/ProductCard";

const highlights = [
  { icon: Hand, title: "Hand-Crafted", desc: "Every jar made with obsessive care." },
  { icon: Sparkles, title: "Small Batches", desc: "Limited runs for peak freshness." },
  { icon: ShieldCheck, title: "Zero Fillers", desc: "Pure ingredients, pure heat." },
];

const testimonials = [
  { name: "Jake R.", text: "One bite and I was hooked. This stuff is dangerously good.", rating: 5 },
  { name: "Priya M.", text: "The Verdant Fire made me question my tolerance — and I loved every second.", rating: 5 },
  { name: "Carlos D.", text: "Replaced every sauce in my kitchen. Not exaggerating.", rating: 5 },
];

const Index = () => {
  const { addToCart } = useCart();

  const handleQuickOrder = () => {
    const featuredProduct = products[0];
    if (!featuredProduct) return;

    addToCart(featuredProduct);
    toast({
      title: "Added to cart",
      description: `${featuredProduct.name} added from Order Now.`,
    });
  };

  return (
    <div className="bg-grain">
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="The Addictive Chili Trio" width={1920} height={1080} className="w-full h-full object-cover opacity-200" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>
      <div className="relative z-10 container text-center space-y-6 py-32">
        <p className="font-heading text-sm tracking-[0.3em] text-primary animate-fade-in-up">⚠️ WARNING</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading leading-tight">
          HIGH HEAT.<br />
          <span className="text-gradient-fire">HIGH ADDICTION.</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto" style={{ animationDelay: "0.2s" }}>
          Introducing the Chili Trio from Addictive. Not for the weak.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            to="/products"
            onClick={handleQuickOrder}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 font-heading text-sm tracking-wider uppercase bg-primary text-primary-foreground rounded-sm transition-all hover:brightness-110 btn-fire"
          >
            <Flame className="w-4 h-4 btn-fire-icon" /> <span>Order Now</span>
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center px-8 py-3 font-heading text-sm tracking-wider uppercase border border-border text-foreground rounded-sm transition-all hover:border-primary hover:text-primary"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>

    {/* Products */}
    <section className="container py-24 space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl font-heading">
          The <span className="text-gradient-fire">Trio</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Three jars. Infinite addiction. Choose your weapon.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>

    {/* Highlights */}
    <section className="border-y border-border bg-muted/20">
      <div className="container py-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {highlights.map((h) => (
          <div key={h.title} className="space-y-3">
            <h.icon className="w-8 h-8 text-primary mx-auto" />
            <h3 className="font-heading text-xl">{h.title}</h3>
            <p className="text-sm text-muted-foreground">{h.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Testimonials */}
    <section className="container py-24 space-y-12">
      <h2 className="text-3xl sm:text-4xl font-heading text-center">
        What They <span className="text-gradient-fire">Say</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card border border-border rounded-lg p-6 space-y-4">
            <div className="flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Flame key={i} className="w-4 h-4 text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic">"{t.text}"</p>
            <p className="font-heading text-sm tracking-wider">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="border-t border-border bg-muted/20">
      <div className="container py-20 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-heading">
          Can You <span className="text-gradient-fire">Handle</span> It?
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">One bite, you're hooked. Don't say we didn't warn you.</p>
        <Link
          to="/products"
          onClick={handleQuickOrder}
          className="inline-flex items-center gap-2 px-8 py-3 font-heading text-sm tracking-wider uppercase bg-primary text-primary-foreground rounded-sm transition-all hover:brightness-110 glow-fire-hover btn-fire"
        >
          <Flame className="w-4 h-4 btn-fire-icon" /> <span>Shop Now</span>
        </Link>
      </div>
    </section>
    </div>
  );
};

export default Index;
