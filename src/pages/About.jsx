import { Flame, Heart, Zap } from "lucide-react";

const About = () => (
  <div className="pt-24 pb-16">
    <div className="container max-w-3xl space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-heading">
          Our <span className="text-gradient-fire">Story</span>
        </h1>
        <p className="text-muted-foreground">Born from obsession. Built on fire.</p>
      </div>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>
          Addictive started in a tiny kitchen with one mission: create chili products so good, people can't stop eating them. We weren't interested in "mild" or "medium." We wanted fire. We wanted flavor. We wanted that moment when your taste buds light up and your brain says <span className="text-foreground font-medium">"more."</span>
        </p>
        <p>
          Every jar is handcrafted in small batches using the freshest chilies, premium oils, and zero fillers. No preservatives. No shortcuts. Just pure, uncut heat.
        </p>
        <p>
          We source our chilies from trusted farms, toast our spices by hand, and taste-test obsessively until every batch hits that perfect balance of <span className="text-primary font-medium">heat</span>, <span className="text-secondary font-medium">crunch</span>, and <span className="text-accent font-medium">flavor</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          { icon: Flame, title: "Passion for Heat", desc: "We live and breathe chili. It's not a business — it's an obsession." },
          { icon: Heart, title: "Made with Love", desc: "Every jar is crafted by hand with ingredients we'd feed our own family." },
          { icon: Zap, title: "No Compromises", desc: "Zero fillers, zero preservatives. Just pure, honest fire." },
        ].map((v) => (
          <div key={v.title} className="space-y-3 p-6 border border-border rounded-lg">
            <v.icon className="w-8 h-8 text-primary mx-auto" />
            <h3 className="font-heading text-lg">{v.title}</h3>
            <p className="text-sm text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center border-t border-border pt-12 space-y-4">
        <p className="font-heading text-2xl">
          One bite, you're <span className="text-gradient-fire">hooked</span>.
        </p>
        <p className="text-sm text-muted-foreground">Don't say we didn't warn you. 🌶️</p>
      </div>
    </div>
  </div>
);

export default About;
