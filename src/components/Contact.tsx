import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Facebook, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black">Contact Us</h2>
          <div className="h-1 w-24 bg-[var(--gradient-brand)] rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for inquiries or support
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
                  <h3 className="text-xl font-bold mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    Menzal Harb, Monastir<br />
                    Tunisia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--gradient-brand)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <a href="tel:+21673460460" className="text-muted-foreground hover:text-primary transition-colors">
                    +216 73 460 460
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Follow Us</h3>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3"
                  asChild
                >
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-5 w-5" />
                    Facebook
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3"
                  asChild
                >
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <Youtube className="h-5 w-5" />
                    YouTube
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3"
                  asChild
                >
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                    Instagram
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
