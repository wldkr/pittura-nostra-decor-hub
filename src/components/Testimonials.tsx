import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Ben Salem",
    role: "Architecte d'Intérieur",
    content: "PITTURA NOSTRA offre des produits d'excellente qualité. Les finitions sont impeccables et mes clients sont toujours satisfaits du résultat.",
    rating: 5,
  },
  {
    name: "Fatima Trabelsi",
    role: "Propriétaire de Maison",
    content: "J'ai utilisé leurs peintures pour rénover ma maison. Le rendu est magnifique et la durabilité est remarquable même après plusieurs années.",
    rating: 5,
  },
  {
    name: "Mohamed Jebali",
    role: "Entrepreneur en Bâtiment",
    content: "En tant que professionnel, je recommande vivement PITTURA NOSTRA. Leur service client est excellent et leurs produits répondent parfaitement aux normes.",
    rating: 5,
  },
  {
    name: "Leila Mansour",
    role: "Décoratrice",
    content: "La gamme de couleurs et de textures proposée est impressionnante. Cela me permet d'offrir à mes clients des solutions créatives et uniques.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black">Témoignages Clients</h2>
          <div className="h-1 w-24 bg-[var(--gradient-brand)] rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ce que nos clients disent de nous
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
