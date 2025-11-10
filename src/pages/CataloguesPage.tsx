import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const cataloguesSections = [
  {
    id: "catalogue-general-2022",
    title: "Catalogue Général 2022",
    description: "Découvrez notre gamme complète de produits décoratifs",
    embedUrl: "https://www.yumpu.com/fr/embed/view/dXVSyuFcevgC4qfE",
    fullScreenUrl: "https://www.yumpu.com/fr/document/view/66605654/catalogue-2022",
  },
  {
    id: "peintures-interieures",
    title: "Peintures Intérieures",
    description: "Guide technique des peintures pour intérieur",
    embedUrl: "#",
    fullScreenUrl: "#",
  },
  {
    id: "revetements-exterieurs",
    title: "Revêtements Extérieurs",
    description: "Solutions pour façades et extérieurs",
    embedUrl: "#",
    fullScreenUrl: "#",
  },
  {
    id: "finitions-decoratives",
    title: "Finitions Décoratives",
    description: "Effets décoratifs et techniques spéciales",
    embedUrl: "#",
    fullScreenUrl: "#",
  },
];

const CataloguesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl md:text-5xl font-black">Catalogues PDF</h1>
              <div className="h-1 w-24 bg-[var(--gradient-brand)] rounded-full mx-auto" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Téléchargez nos catalogues produits et documentations techniques
              </p>
              <Button size="lg" className="mt-6 bg-gradient-to-r from-[hsl(51,100%,50%)] to-[hsl(45,100%,45%)] text-black hover:from-[hsl(51,100%,45%)] hover:to-[hsl(45,100%,40%)] font-bold">
                <Download className="h-5 w-5 mr-2" />
                Télécharger le catalogue complet
              </Button>
            </div>

            <div className="space-y-16 max-w-5xl mx-auto">
              {cataloguesSections.map((catalogue) => (
                <Card key={catalogue.id} id={catalogue.id} className="overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-2">{catalogue.title}</h2>
                        <p className="text-muted-foreground">{catalogue.description}</p>
                      </div>
                    </div>

                    {catalogue.embedUrl !== "#" && (
                      <>
                        <div className="relative overflow-hidden rounded-lg mb-4" style={{ height: "552px", maxWidth: "100%" }}>
                          <iframe 
                            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                            src={catalogue.embedUrl}
                            frameBorder="0" 
                            allowFullScreen={true}
                            title={catalogue.title}
                          />
                        </div>
                        <div className="text-center">
                          <Button asChild variant="outline">
                            <a 
                              href={catalogue.fullScreenUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Ouvrir en plein écran
                            </a>
                          </Button>
                        </div>
                      </>
                    )}

                    {catalogue.embedUrl === "#" && (
                      <div className="text-center py-12">
                        <p className="text-muted-foreground mb-4">Catalogue disponible prochainement</p>
                        <Button variant="outline" disabled>
                          <Download className="h-4 w-4 mr-2" />
                          Bientôt disponible
                        </Button>
                      </div>
                    )}
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
      </div>
      <Footer />
    </div>
  );
};

export default CataloguesPage;
