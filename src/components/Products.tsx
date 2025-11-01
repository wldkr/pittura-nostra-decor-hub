import { Card, CardContent } from "@/components/ui/card";
import { Paintbrush, Palette, Sparkles, Shield } from "lucide-react";

const products = [
  {
    icon: Paintbrush,
    title: "Peintures Intérieures",
    description: "Peintures intérieures de haute qualité pour murs et plafonds avec excellente couverture et durabilité.",
  },
  {
    icon: Palette,
    title: "Revêtements Extérieurs",
    description: "Peintures extérieures résistantes aux intempéries conçues pour les conditions difficiles.",
  },
  {
    icon: Sparkles,
    title: "Finitions Décoratives",
    description: "Finitions décoratives premium incluant métalliques, texturées et effets spéciaux.",
  },
  {
    icon: Shield,
    title: "Solutions Protectrices",
    description: "Revêtements protecteurs de qualité industrielle pour une durabilité et protection maximales.",
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black">Nos Produits</h2>
          <div className="h-1 w-24 bg-[var(--gradient-brand)] rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre gamme complète de produits décoratifs premium
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
