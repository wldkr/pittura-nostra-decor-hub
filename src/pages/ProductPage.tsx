import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ArrowLeft, Play } from "lucide-react";

interface ProductData {
  name: string;
  subtitle: string;
  description: string[];
  catalogueUrl?: string;
  technicalSheetUrl?: string;
  videoUrl?: string;
  colors: { id: string; image: string }[];
}

const productsData: Record<string, ProductData> = {
  antico: {
    name: "Antico",
    subtitle: "Peinture intérieure haut de gamme",
    description: [
      "Antico est une peinture intérieure premium offrant une finition exceptionnelle et une durabilité remarquable.",
      "Conçue pour les murs et plafonds, elle assure une couverture optimale et un rendu professionnel."
    ],
    colors: [
      { id: "G420", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
      { id: "G421", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=300&h=300&fit=crop" },
    ]
  },
  serene: {
    name: "Serene",
    subtitle: "Élégance et tranquillité",
    description: [
      "Serene apporte une atmosphère apaisante à vos intérieurs avec sa texture lisse et ses teintes harmonieuses.",
      "Parfaite pour créer des espaces de détente et de bien-être."
    ],
    colors: [
      { id: "S100", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
      { id: "S101", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=300&h=300&fit=crop" },
    ]
  },
  sabbia: {
    name: "Sabbia",
    subtitle: "Texture sable raffinée",
    description: [
      "Sabbia offre un effet texturé unique inspiré des finitions traditionnelles méditerranéennes.",
      "Idéale pour créer des ambiances chaleureuses et authentiques."
    ],
    colors: [
      { id: "T200", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
      { id: "T201", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=300&h=300&fit=crop" },
    ]
  },
  "eco-eco": {
    name: "Eco & Eco",
    subtitle: "Solution écologique extérieure",
    description: [
      "Eco & Eco est un revêtement extérieur respectueux de l'environnement, offrant protection et esthétique.",
      "Résiste aux conditions climatiques difficiles tout en préservant la nature."
    ],
    colors: [
      { id: "E300", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  "surfacaire-extra": {
    name: "Surfacaire Extra",
    subtitle: "Performance extérieure maximale",
    description: [
      "Surfacaire Extra est conçu pour les façades exigeantes, offrant une protection supérieure contre les intempéries.",
      "Garantit une durabilité exceptionnelle et un entretien minimal."
    ],
    colors: [
      { id: "X400", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  gravitti: {
    name: "Gravitti",
    subtitle: "Finition décorative texturée",
    description: [
      "Gravitti crée des effets décoratifs sophistiqués avec ses textures variées et son rendu unique.",
      "Transforme vos murs en véritables œuvres d'art."
    ],
    colors: [
      { id: "D500", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  gresetanche: {
    name: "Gresetanche",
    subtitle: "Étanchéité et décoration",
    description: [
      "Gresetanche combine protection imperméable et finition décorative pour vos surfaces.",
      "Solution idéale pour les zones humides et extérieures."
    ],
    colors: [
      { id: "I600", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  sellando: {
    name: "Sellando",
    subtitle: "Scellant protecteur professionnel",
    description: [
      "Sellando est un scellant haute performance pour la protection durable de vos surfaces.",
      "Assure une étanchéité optimale et une résistance aux agressions extérieures."
    ],
    colors: [
      { id: "P700", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  primer: {
    name: "Primer",
    subtitle: "Sous-couche professionnelle",
    description: [
      "Notre Primer prépare parfaitement vos surfaces pour une application optimale de la peinture.",
      "Améliore l'adhérence et uniformise la porosité du support."
    ],
    colors: [
      { id: "PR01", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  "mastic-1": {
    name: "Mastic 1",
    subtitle: "Mastic de rebouchage intérieur",
    description: [
      "Mastic 1 est idéal pour la réparation et le rebouchage des fissures et trous en intérieur.",
      "Séchage rapide et ponçage facile pour une finition parfaite."
    ],
    colors: [
      { id: "M100", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  "mastic-2": {
    name: "Mastic 2",
    subtitle: "Mastic façade extérieur",
    description: [
      "Mastic 2 est spécialement formulé pour les applications extérieures et façades.",
      "Résiste aux variations climatiques et garantit une tenue longue durée."
    ],
    colors: [
      { id: "M200", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
};

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? productsData[productId] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Produit non trouvé</h1>
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour à l'accueil
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <Button asChild variant="ghost" className="mb-8">
              <Link to="/#products">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour aux produits
              </Link>
            </Button>
            
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-black mb-4">{product.name}</h1>
              <p className="text-xl text-muted-foreground">{product.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Description</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                {product.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Téléchargements</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <Button className="w-full" size="lg" asChild>
                      <a href={product.catalogueUrl || "#"}>
                        <Download className="h-5 w-5 mr-2" />
                        Télécharger le Catalogue
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Button className="w-full" size="lg" variant="outline" asChild>
                      <a href={product.technicalSheetUrl || "#"}>
                        <Download className="h-5 w-5 mr-2" />
                        Fiche Technique
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Vidéo d'Application</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    {product.videoUrl ? (
                      <iframe
                        src={product.videoUrl}
                        className="w-full h-full rounded-lg"
                        allowFullScreen
                        title={`Vidéo ${product.name}`}
                      />
                    ) : (
                      <div className="text-center space-y-4">
                        <Play className="h-16 w-16 mx-auto text-muted-foreground" />
                        <p className="text-muted-foreground">Vidéo à venir prochainement</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Colors Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Nuances Disponibles</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {product.colors.map((color) => (
                  <Card key={color.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="aspect-square">
                      <img
                        src={color.image}
                        alt={color.id}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <p className="font-semibold">{color.id}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h2 className="text-3xl font-bold">Besoin de plus d'informations ?</h2>
              <p className="text-lg text-muted-foreground">
                Menzal Harb, Monastir, Tunisie
              </p>
              <p className="text-lg">
                <a href="tel:+21673460460" className="text-primary hover:underline font-semibold">
                  +216 73 460 460
                </a>
              </p>
              <Button asChild size="lg" className="mt-6">
                <Link to="/#contact">Nous Contacter</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
