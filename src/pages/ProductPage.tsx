import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ArrowLeft, Play, FileText, Mail } from "lucide-react";

interface ProductData {
  name: string;
  subtitle: string;
  description: string[];
  catalogueUrl?: string;
  technicalSheetUrl?: string;
  videoUrl?: string;
  colors: { id: string; image: string }[];
  characteristics?: string[];
}

const productsData: Record<string, ProductData> = {
  antico: {
    name: "Antico",
    subtitle: "Peinture intérieure haut de gamme",
    description: [
      "Antico est une peinture intérieure premium offrant une finition exceptionnelle et une durabilité remarquable.",
      "Conçue pour les murs et plafonds, elle assure une couverture optimale et un rendu professionnel."
    ],
    characteristics: [
      "Excellente couverture",
      "Finition mate élégante",
      "Séchage rapide",
      "Facile à appliquer",
      "Résistant au lessivage"
    ],
    colors: [
      { id: "G420", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
      { id: "G421", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=300&h=300&fit=crop" },
      { id: "G422", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop" },
      { id: "G423", image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=300&h=300&fit=crop" },
    ]
  },
  serene: {
    name: "Serene",
    subtitle: "Élégance et tranquillité",
    description: [
      "Serene apporte une atmosphère apaisante à vos intérieurs avec sa texture lisse et ses teintes harmonieuses.",
      "Parfaite pour créer des espaces de détente et de bien-être."
    ],
    characteristics: [
      "Texture lisse",
      "Teintes apaisantes",
      "Faible odeur",
      "Application uniforme"
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
    characteristics: [
      "Effet texturé unique",
      "Inspiration méditerranéenne",
      "Finition chaleureuse"
    ],
    colors: [
      { id: "T200", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
      { id: "T201", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=300&h=300&fit=crop" },
    ]
  },
  "surfacaire-eco-eco": {
    name: "Surfacaire Eco&Eco",
    subtitle: "Solution écologique extérieure",
    description: [
      "Surfacaire Eco&Eco est un revêtement extérieur respectueux de l'environnement, offrant protection et esthétique.",
      "Résiste aux conditions climatiques difficiles tout en préservant la nature."
    ],
    characteristics: [
      "Respectueux de l'environnement",
      "Protection UV",
      "Résistance aux intempéries"
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
    characteristics: [
      "Durabilité exceptionnelle",
      "Protection maximale",
      "Entretien minimal"
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
  adore: {
    name: "Adore",
    subtitle: "Élégance moderne",
    description: [
      "Adore combine modernité et élégance pour vos intérieurs contemporains.",
      "Finition premium avec une texture exceptionnelle."
    ],
    colors: [
      { id: "A100", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  festive: {
    name: "Festive",
    subtitle: "Couleurs vibrantes",
    description: [
      "Festive apporte vie et énergie à vos espaces avec sa palette de couleurs éclatantes.",
      "Parfaite pour les ambiances joyeuses et dynamiques."
    ],
    colors: [
      { id: "F100", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  fresco: {
    name: "Fresco",
    subtitle: "Finition artisanale",
    description: [
      "Fresco offre un rendu artisanal inspiré des techniques traditionnelles.",
      "Créez des intérieurs uniques avec caractère et authenticité."
    ],
    colors: [
      { id: "FR100", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  marmo: {
    name: "Marmo",
    subtitle: "Effet marbre",
    description: [
      "Marmo reproduit l'élégance du marbre avec un effet sophistiqué et luxueux.",
      "Transformez vos murs en surfaces prestigieuses."
    ],
    colors: [
      { id: "MA100", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  metal: {
    name: "Metal",
    subtitle: "Finition métallique",
    description: [
      "Metal apporte une touche contemporaine avec ses reflets métalliques subtils.",
      "Parfait pour les intérieurs modernes et industriels."
    ],
    colors: [
      { id: "ME100", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  nirvana: {
    name: "Nirvana",
    subtitle: "Pureté et sérénité",
    description: [
      "Nirvana crée une atmosphère zen et épurée pour vos espaces de vie.",
      "Idéale pour les intérieurs minimalistes et apaisants."
    ],
    colors: [
      { id: "NI100", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  nostalgia: {
    name: "Nostalgia",
    subtitle: "Charme intemporel",
    description: [
      "Nostalgia évoque le charme des intérieurs classiques avec une touche moderne.",
      "Parfaite pour les ambiances vintage et authentiques."
    ],
    colors: [
      { id: "NO100", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  strong: {
    name: "Strong",
    subtitle: "Résistance maximale",
    description: [
      "Strong est conçue pour les zones à fort trafic nécessitant une durabilité exceptionnelle.",
      "Protection renforcée et finition impeccable."
    ],
    colors: [
      { id: "ST100", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
};

const inspirationImages = [
  "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=600&h=400&fit=crop",
];

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
        {/* Hero Section with Large Visual */}
        <section className="relative py-32 bg-secondary/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <Button asChild variant="ghost" className="mb-8">
              <Link to="/#products">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour aux produits
              </Link>
            </Button>
            
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-7xl font-black">{product.name}</h1>
              <p className="text-2xl text-muted-foreground">{product.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Description & Characteristics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Description</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  {product.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              {product.characteristics && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">Caractéristiques</h2>
                  <ul className="space-y-3">
                    {product.characteristics.map((char, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-lg">{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Colors Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Nuances Disponibles</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {product.colors.map((color) => (
                  <Card key={color.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={color.image}
                        alt={color.id}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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

        {/* Download & Video Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              {/* Downloads */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-center">Documentation</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Catalogue Produit</h3>
                      </div>
                      <Button className="w-full" size="lg" asChild>
                        <a href={product.catalogueUrl || "#"} download>
                          <Download className="h-5 w-5 mr-2" />
                          Télécharger
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Fiche Technique</h3>
                      </div>
                      <Button className="w-full" size="lg" variant="outline" asChild>
                        <a href={product.technicalSheetUrl || "#"} download>
                          <Download className="h-5 w-5 mr-2" />
                          Télécharger
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Video */}
              {product.videoUrl && (
                <div>
                  <h2 className="text-3xl font-bold mb-8 text-center">Vidéo d'Application</h2>
                  <Card>
                    <CardContent className="p-6">
                      <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                        <iframe
                          src={product.videoUrl}
                          className="w-full h-full"
                          allowFullScreen
                          title={`Vidéo ${product.name}`}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Inspiration / Réalisations Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">Inspirations & Réalisations</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Découvrez comment nos clients ont transformé leurs espaces avec {product.name}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {inspirationImages.map((image, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img
                        src={image}
                        alt={`Réalisation ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-12 text-center space-y-6">
                <h2 className="text-4xl font-bold">Besoin d'un Devis ou de Conseils ?</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Notre équipe d'experts est à votre disposition pour vous accompagner dans votre projet
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" asChild>
                    <Link to="/#contact">
                      <Mail className="h-5 w-5 mr-2" />
                      Demander un Devis
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/catalogues">
                      <Download className="h-5 w-5 mr-2" />
                      Voir les Catalogues
                    </Link>
                  </Button>
                </div>
                <div className="pt-6 text-sm text-muted-foreground">
                  <p>Menzal Harb, Monastir, Tunisie</p>
                  <p className="mt-2">
                    <a href="tel:+21673460460" className="text-primary hover:underline font-semibold">
                      +216 73 460 460
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
