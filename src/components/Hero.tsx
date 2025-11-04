import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const heroImages = [
  "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=1200&h=600&fit=crop",
];

export function Hero() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

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
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
              PITTURA NOSTRA
            </h1>
            <div className="h-1 w-full bg-[var(--gradient-brand)] rounded-full" />
            <p className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide" style={{ width: "75%", margin: "10px auto 0" }}>
              ALL DECORATIVE PRODUCTS
            </p>
          </div>

          {/* Image Carousel */}
          <div className="max-w-4xl mx-auto">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {heroImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[2/1] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={image}
                        alt={`Produit décoratif ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
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
