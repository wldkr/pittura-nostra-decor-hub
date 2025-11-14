import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const heroImages = [
  { src: hero1, alt: "Peintre professionnel appliquant de la peinture décorative sur un mur intérieur" },
  { src: hero2, alt: "Façade de maison moderne fraîchement peinte avec finitions professionnelles" },
  { src: hero3, alt: "Outils de peinture professionnels - rouleaux et équipement de qualité" },
  { src: hero4, alt: "Intérieur élégant avec finition décorative murale haut de gamme" },
  { src: hero5, alt: "Artisan peintre au travail sur la rénovation d'une façade extérieure" },
];

export function Hero() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Full-screen Hero Slider */}
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-screen">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-screen">
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Centered Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in duration-1000">
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-tight drop-shadow-2xl">
              Bienvenue chez Pittura Nostra
            </h1>
            <p className="text-white text-xl md:text-2xl font-light drop-shadow-lg">
              L'excellence en peintures décoratives depuis la Tunisie
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 pointer-events-auto">
              <Button
                size="lg"
                onClick={scrollToProducts}
                className="bg-gradient-to-r from-[hsl(51,100%,50%)] to-[hsl(45,100%,45%)] hover:opacity-90 text-black font-bold group shadow-xl"
              >
                Découvrir nos Produits
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold shadow-xl"
              >
                Nous Contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
