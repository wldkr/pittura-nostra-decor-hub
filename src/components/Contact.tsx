import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Instagram, Youtube, Facebook, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Contact() {
  const [showMap, setShowMap] = useState(false);

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black">Contactez-nous</h2>
          <div className="h-1 w-24 bg-[var(--gradient-brand)] rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contactez-nous pour toute question ou demande d'information
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-8 space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(51,100%,50%)] to-[hsl(45,100%,45%)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Adresse</h3>
                  <p className="text-muted-foreground">
                    Menzal Harb, Monastir<br />
                    Tunisie
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(51,100%,50%)] to-[hsl(45,100%,45%)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Téléphone</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <a href="tel:+21673575056" className="block hover:text-primary transition-colors">
                      (+216) 73 575 056
                    </a>
                    <a href="tel:+21658726600" className="block hover:text-primary transition-colors">
                      (+216) 58 726 600
                    </a>
                  </div>
                  <div className="mt-3">
                    <h4 className="text-sm font-semibold mb-1">Fax</h4>
                    <p className="text-muted-foreground">(+216) 73 575 055</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="justify-start gap-3 hover:border-[#E4405F] group"
                    asChild
                  >
                    <a href="https://www.instagram.com/pittura.nostra" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-5 w-5 group-hover:text-[#E4405F] transition-colors" />
                      Instagram
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="justify-start gap-3 hover:border-[#FF0000] group"
                    asChild
                  >
                    <a href="https://www.youtube.com/@pitturanostra" target="_blank" rel="noopener noreferrer">
                      <Youtube className="h-5 w-5 group-hover:text-[#FF0000] transition-colors" />
                      YouTube
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="justify-start gap-3 hover:border-[#000000] dark:hover:border-[#ffffff] group"
                    asChild
                  >
                    <a href="https://www.tiktok.com/@pittura.nostra" target="_blank" rel="noopener noreferrer">
                      <svg className="h-5 w-5 group-hover:text-[#000000] dark:group-hover:text-[#ffffff] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                      TikTok
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="justify-start gap-3 hover:border-[#1877F2] group"
                    asChild
                  >
                    <a href="https://www.facebook.com/pitturanostraofficiel" target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-5 w-5 group-hover:text-[#1877F2] transition-colors" />
                      Facebook
                    </a>
                  </Button>
                </div>
              </div>

              {/* Google Maps */}
              <div>
                <h3 className="text-xl font-bold mb-4">Notre Localisation</h3>
                <div 
                  onClick={() => setShowMap(true)}
                  className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.856394733033!2d10.823690476403908!3d35.76200007258089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd89d8f8f8f8f8%3A0x8f8f8f8f8f8f8f8!2sPittura%20Nostra!5e0!3m2!1sen!2stn!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="bg-white/90 dark:bg-black/90 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-sm font-semibold">Cliquez pour agrandir</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Full-screen Map Overlay */}
      {showMap && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] bg-background rounded-lg overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowMap(false)}
              className="absolute top-4 right-4 z-10 bg-background hover:bg-accent"
            >
              <X className="h-6 w-6" />
            </Button>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.856394733033!2d10.823690476403908!3d35.76200007258089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd89d8f8f8f8f8%3A0x8f8f8f8f8f8f8f8!2sPittura%20Nostra!5e0!3m2!1sen!2stn!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      )}
    </section>
  );
}
