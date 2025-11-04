import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Paintbrush, Palette, Sparkles, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const productCategories = [
  {
    icon: Paintbrush,
    title: "Peintures Intérieures",
    description: "Peintures intérieures de haute qualité pour murs et plafonds avec excellente couverture et durabilité.",
    color: "from-blue-500 to-indigo-600",
    products: [
      { id: "adore", name: "Adore" },
      { id: "antico", name: "Antico" },
      { id: "festive", name: "Festive" },
      { id: "fresco", name: "Fresco" },
      { id: "marmo", name: "Marmo" },
      { id: "metal", name: "Metal" },
      { id: "nirvana", name: "Nirvana" },
      { id: "nostalgia", name: "Nostalgia" },
      { id: "sabbia", name: "Sabbia" },
      { id: "serene", name: "Serene" },
      { id: "strong", name: "Strong" },
    ]
  },
  {
    icon: Palette,
    title: "Revêtements Extérieurs",
    description: "Peintures extérieures résistantes aux intempéries conçues pour les conditions difficiles.",
    color: "from-green-500 to-emerald-600",
    products: [
      { id: "surfacaire-eco-eco", name: "Surfacaire Eco&Eco" },
      { id: "surfacaire-extra", name: "Surfacaire Extra" },
    ]
  },
  {
    icon: Sparkles,
    title: "Finitions Décoratives",
    description: "Finitions décoratives premium incluant métalliques, texturées et effets spéciaux.",
    color: "from-purple-500 to-pink-600",
    products: [
      { id: "gravitti", name: "Gravitti" },
      { id: "gresetanche", name: "Gresetanche" },
    ]
  },
  {
    icon: Shield,
    title: "Solutions Protectrices",
    description: "Revêtements protecteurs de qualité industrielle pour une durabilité et protection maximales.",
    color: "from-amber-500 to-orange-600",
    products: [
      { id: "mastic-1", name: "Mastic 1" },
      { id: "mastic-2", name: "Mastic 2" },
      { id: "primer", name: "Primer" },
      { id: "sellando", name: "Sellando" },
    ]
  },
];

export function Products() {
  const [showAllInterior, setShowAllInterior] = useState(false);

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
          {productCategories.map((category, index) => {
            const isInterior = category.title === "Peintures Intérieures";
            const displayProducts = isInterior && !showAllInterior 
              ? category.products.slice(0, 3) 
              : category.products;

            return (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <category.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold whitespace-nowrap transition-all duration-300 hover:translate-x-1 hover:text-primary">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                  
                  <div className="pt-4 space-y-2">
                    {displayProducts.map((product) => (
                      <Button
                        key={product.id}
                        variant="ghost"
                        className="w-full justify-between"
                        asChild
                      >
                        <Link to={`/produit/${product.id}`}>
                          {product.name}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    ))}
                    {isInterior && !showAllInterior && (
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => setShowAllInterior(true)}
                      >
                        Voir + ({category.products.length - 3} produits)
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
