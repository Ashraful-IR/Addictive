import { Link } from "react-router-dom";
import { Flame } from "lucide-react";

const Footer = () => (
  <footer className=" border-t border-border bg-muted/30">
    <div className="container  py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Flame className="w-5 h-5 text-primary" />
          <span className="font-heading text-xl tracking-widest text-gradient-fire">
            ADDICTIVE
          </span>
        </div>
        <p className="text-sm text-muted-foreground max-w-xs">
          High heat. High addiction. Handcrafted chili products made in small
          batches with zero fillers.
        </p>
      </div>
      <div className="text-center">
        <h4 className="text-sm mb-4 text-foreground">Navigation</h4>
        <div className="space-y-2">
          {[
            { to: "/", label: "Home" },
            { to: "/products", label: "Products" },
            { to: "/about", label: "About Us" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="text-center">
        <h4 className="text-sm mb-4 text-foreground">Legal</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
    <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
      © 2026 Addictive. All rights reserved. Handle with caution. 🌶️
    </div>
  </footer>
);

export default Footer;
