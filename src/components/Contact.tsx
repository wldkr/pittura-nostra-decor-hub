import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Instagram, Youtube, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import qrCode from "@/assets/qr-code.png";

export function Contact() {
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--gradient-brand)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Adresse</h3>
                  <p className="text-muted-foreground">
                    Menzal Harb, Monastir<br />
                    Tunisie
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--gradient-brand)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
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
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Suivez-nous</h3>
              <div className="flex gap-6 items-start">
                {/* Social Media Links */}
                <div className="grid grid-cols-2 gap-4 flex-1">
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

                {/* QR Code */}
                <div className="flex-shrink-0">
                  <img 
                    src={qrCode}
                    alt="QR Code PITTURA NOSTRA"
                    className="w-40 h-40 rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
