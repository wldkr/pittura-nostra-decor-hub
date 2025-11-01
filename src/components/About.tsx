import { Award, Target, Users } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence Qualité",
    description: "Engagés à fournir des produits premium conformes aux standards internationaux.",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Développement continu de nouvelles solutions pour les besoins décoratifs modernes.",
  },
  {
    icon: Users,
    title: "Satisfaction Client",
    description: "Dédiés à fournir un service et un support exceptionnels à nos clients.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-black">À Propos</h2>
            <div className="h-1 w-24 bg-[var(--gradient-brand)] rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                PITTURA NOSTRA est un fournisseur leader de produits décoratifs en Tunisie, 
                spécialisé dans les peintures et finitions de haute qualité pour applications résidentielles et commerciales.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Avec des années d'expertise dans l'industrie, nous sommes fiers d'offrir 
                des produits exceptionnels qui allient durabilité, esthétique et valeur. Notre engagement 
                envers la qualité et l'innovation a fait de nous un partenaire de confiance pour les entrepreneurs, 
                designers et propriétaires dans toute la région.
              </p>
            </div>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-[var(--gradient-brand)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
