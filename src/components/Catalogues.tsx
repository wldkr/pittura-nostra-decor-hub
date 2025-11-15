import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const catalogues = [
  {
    title: "Catalogue Général",
    description: "Découvrez notre gamme complète de produits décoratifs",
    year: "2022",
    url: "#", // URL to be updated with actual PDF link
  },
  {
    title: "Peintures Intérieures",
    description: "Guide technique des peintures pour intérieur",
    year: "2024",
    url: "#",
  },
  {
    title: "Revêtements Extérieurs",
    description: "Solutions pour façades et extérieurs",
    year: "2024",
    url: "#",
  },
  {
    title: "Finitions Décoratives",
    description: "Effets décoratifs et techniques spéciales",
    year: "2024",
    url: "#",
  },
];

export function Catalogues() {
  return (
    <section id="catalogues" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black">Catalogues PDF</h2>
          <div className="h-1 w-24 bg-[var(--gradient-brand)] rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Téléchargez nos catalogues produits et documentations techniques
          </p>
        </div>

        {/* Catalogue 2022 Iframe */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-6 text-center">Catalogue 2022</h3>
            <div className="relative overflow-hidden" style={{ height: "552px", maxWidth: "100%" }}>
              <iframe 
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                src="https://www.yumpu.com/fr/embed/view/dXVSyuFcevgC4qfE" 
                frameBorder="0" 
                allowFullScreen={true}
                title="Catalogue PITTURA NOSTRA 2022"
              />
            </div>
            <div className="text-center mt-4">
              <Button asChild variant="outline">
                <a 
                  href="https://www.yumpu.com/fr/document/view/66605654/catalogue-2022" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Ouvrir en plein écran
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {catalogues.map((catalogue, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-[var(--gradient-brand)] rounded-lg flex items-center justify-center">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{catalogue.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {catalogue.description}
                  </p>
                  <p className="text-xs text-muted-foreground">Année {catalogue.year}</p>
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  asChild
                >
                  <a href={catalogue.url} download>
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Pour plus d'informations techniques, n'hésitez pas à nous contacter
          </p>
        </div>
      </div>
    </section>
  );
}
