import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
              PITTURA NOSTRA
            </h1>
            <div className="h-1 w-full bg-[var(--gradient-brand)] rounded-full" />
            <p className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
              ALL DECORATIVE PRODUCTS
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Peintures et finitions décoratives premium pour projets résidentiels et commerciaux. 
            Transformez vos espaces avec des produits de qualité depuis la Tunisie.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              onClick={scrollToProducts}
              className="bg-[var(--gradient-brand)] hover:opacity-90 text-white font-semibold group"
            >
              Découvrir nos Produits
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Nous Contacter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
