import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Square, Layers, Palette, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { getProductsByCategory } from "@/data/productsData";

const productCategories = [
  {
    icon: Square,
    title: "Peintures Intérieures",
    description: "Peintures intérieures de haute qualité pour murs et plafonds avec excellente couverture et durabilité.",
    color: "from-slate-600 to-slate-800",
    category: "interior" as const,
    sectionId: "peintures-interieures"
  },
  {
    icon: Layers,
    title: "Revêtements Extérieurs",
    description: "Peintures extérieures résistantes aux intempéries conçues pour les conditions difficiles.",
    color: "from-zinc-600 to-zinc-800",
    category: "exterior" as const,
    sectionId: "revetements-exterieurs"
  },
  {
    icon: Palette,
    title: "Finitions Décoratives",
    description: "Finitions décoratives premium incluant métalliques, texturées et effets spéciaux.",
    color: "from-[hsl(51,100%,50%)] to-[hsl(45,100%,45%)]",
    category: "decorative" as const,
    sectionId: "finitions-decoratives"
  },
  {
    icon: ShieldCheck,
    title: "Solutions Protectrices",
    description: "Revêtements protecteurs de qualité industrielle pour une durabilité et protection maximales.",
    color: "from-stone-600 to-stone-800",
    category: "protective" as const,
    sectionId: "solutions-protectrices"
  },
];

export function Products() {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (sectionId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

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

        {/* Icônes des familles - Navigation rapide */}
        <div className="flex justify-center gap-8 mb-16 flex-wrap">
          {productCategories.map((category) => (
            <a
              key={category.sectionId}
              href={`#${category.sectionId}`}
              className="group flex flex-col items-center gap-3 transition-transform hover:scale-110"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all`}>
                <category.icon className="h-10 w-10 text-white" />
              </div>
              <span className="text-sm font-semibold text-center max-w-[100px] group-hover:text-primary transition-colors">
                {category.title}
              </span>
            </a>
          ))}
        </div>

        {/* Sections de produits par famille */}
        <div className="space-y-16">
          {productCategories.map((category) => {
            const products = getProductsByCategory(category.category);
            const isExpanded = expandedCategories[category.sectionId];
            const displayProducts = isExpanded ? products : products.slice(0, 4);
            const hasMore = products.length > 4;

            return (
              <div key={category.sectionId} id={category.sectionId} className="scroll-mt-24">
                <Card className="overflow-hidden border-2">
                  <div className={`bg-gradient-to-br ${category.color} p-8 text-white`}>
                    <div className="flex items-center gap-4 mb-3">
                      <category.icon className="h-8 w-8" />
                      <h3 className="text-3xl font-bold">{category.title}</h3>
                    </div>
                    <p className="text-white/90 max-w-2xl">{category.description}</p>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                      {displayProducts.map((product) => (
                        <Link
                          key={product.id}
                          to={`/produit/${product.id}`}
                          className="group"
                        >
                          <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary">
                            <div className="aspect-[137/98] relative overflow-hidden bg-muted">
                              <img
                                src={product.thumbnailUrl}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                loading="lazy"
                              />
                            </div>
                            <CardContent className="p-4">
                              <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {product.name}
                              </h4>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {product.subtitle}
                              </p>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>

                    {hasMore && (
                      <div className="text-center mt-8">
                        <button
                          onClick={() => toggleCategory(category.sectionId)}
                          className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105"
                        >
                          {isExpanded 
                            ? "Voir moins" 
                            : `Voir + (${products.length - 4} autres produits)`
                          }
                        </button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
