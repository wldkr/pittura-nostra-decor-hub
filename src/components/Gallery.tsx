import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black">Galerie de Réalisations</h2>
          <div className="h-1 w-24 bg-[var(--gradient-brand)] rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos projets réalisés et laissez-vous inspirer
          </p>
        </div>

        {/* Instagram Feed Embed */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-card border rounded-lg p-8 text-center space-y-6">
            <Instagram className="h-16 w-16 mx-auto text-primary" />
            <h3 className="text-2xl font-bold">Suivez-nous sur Instagram</h3>
            <p className="text-muted-foreground">
              Découvrez nos dernières réalisations et inspirations
            </p>
            <Button asChild size="lg">
              <a 
                href="https://www.instagram.com/pittura.nostra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Instagram className="h-5 w-5" />
                Voir notre Instagram
              </a>
            </Button>
          </div>
        </div>

        {/* Instagram Embed Script Area */}
        <div className="max-w-6xl mx-auto">
          <script src="https://static.elfsight.com/platform/platform.js" defer></script>
          <div className="elfsight-app-instagram-feed" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
}
