import { Card, CardContent } from "@/components/ui/card";
import { Paintbrush, Palette, Sparkles, Shield } from "lucide-react";

const products = [
  {
    icon: Paintbrush,
    title: "Interior Paints",
    description: "High-quality interior paints for walls and ceilings with excellent coverage and durability.",
  },
  {
    icon: Palette,
    title: "Exterior Coatings",
    description: "Weather-resistant exterior paints designed to withstand harsh conditions.",
  },
  {
    icon: Sparkles,
    title: "Decorative Finishes",
    description: "Premium decorative finishes including metallic, textured, and special effects.",
  },
  {
    icon: Shield,
    title: "Protective Solutions",
    description: "Industrial-grade protective coatings for maximum durability and protection.",
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black">Our Products</h2>
          <div className="h-1 w-24 bg-[var(--gradient-brand)] rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of premium decorative products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 bg-[var(--gradient-brand)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <product.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
