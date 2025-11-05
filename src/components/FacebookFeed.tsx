import { useEffect } from "react";

export function FacebookFeed() {
  useEffect(() => {
    // Load Facebook SDK
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black">Nos Actualités Facebook</h2>
          <div className="h-1 w-24 bg-[var(--gradient-brand)] rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Suivez nos dernières actualités et réalisations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl shadow-lg overflow-hidden">
            <div 
              className="fb-page" 
              data-href="https://www.facebook.com/pitturanostra"
              data-tabs="timeline"
              data-width="100%"
              data-height="800"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

declare global {
  interface Window {
    FB?: {
      XFBML: {
        parse: () => void;
      };
    };
  }
}
