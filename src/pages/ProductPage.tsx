import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ArrowLeft, FileText, Mail, Play } from "lucide-react";
import { getProduct, DEFAULT_VIDEO_URL, DEFAULT_THUMBNAIL } from "@/data/productsData";
import { useState } from "react";

const inspirationImages = [
  "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=600&h=400&fit=crop",
];

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? getProduct(productId) : null;
  const [activeTab, setActiveTab] = useState<"description" | "video" | "colors">("description");
  const [showAllColors, setShowAllColors] = useState(false);
  
  // Utiliser la vidéo du produit ou la vidéo par défaut
  const videoUrl = product?.videoUrl || DEFAULT_VIDEO_URL;
  const thumbnailUrl = product?.thumbnailUrl || DEFAULT_THUMBNAIL;

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
        {/* Hero Section - Style Pratta inspiré */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={thumbnailUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Button asChild variant="ghost" className="mb-8 text-white hover:text-white/80 absolute top-8 left-8">
              <Link to="/#products">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour aux produits
              </Link>
            </Button>
            
            <div className="max-w-4xl mx-auto space-y-6 text-white">
              <h1 className="text-6xl md:text-8xl font-black tracking-tight">{product.name}</h1>
              <p className="text-2xl md:text-3xl font-light">{product.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Tabs Navigation */}
        <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-2 py-4 flex-wrap">
              <button
                onClick={() => setActiveTab("description")}
                className={`px-6 py-2 font-semibold rounded-lg transition-all ${
                  activeTab === "description" 
                    ? "bg-gradient-to-r from-primary to-accent text-white" 
                    : "hover:bg-secondary"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("video")}
                className={`px-6 py-2 font-semibold rounded-lg transition-all ${
                  activeTab === "video" 
                    ? "bg-gradient-to-r from-primary to-accent text-white" 
                    : "hover:bg-secondary"
                }`}
              >
                Vidéo d'application
              </button>
              <button
                onClick={() => setActiveTab("colors")}
                className={`px-6 py-2 font-semibold rounded-lg transition-all ${
                  activeTab === "colors" 
                    ? "bg-gradient-to-r from-primary to-accent text-white" 
                    : "hover:bg-secondary"
                }`}
              >
                Nuances
              </button>
              {product.technicalSheetUrl && (
                <Button asChild variant="outline" size="sm">
                  <a href={product.technicalSheetUrl} download>
                    <FileText className="h-4 w-4 mr-2" />
                    Fiche Technique
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              
              {/* Description Tab */}
              {activeTab === "description" && (
                <div className="animate-fade-in">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h2 className="text-3xl font-bold mb-6">Description</h2>
                      <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                        {product.description.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                    {product.characteristics && (
                      <div>
                        <h2 className="text-3xl font-bold mb-6">Caractéristiques</h2>
                        <ul className="space-y-4">
                          {product.characteristics.map((char, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                                <div className="h-2 w-2 rounded-full bg-white" />
                              </div>
                              <span className="text-lg">{char}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Video Tab */}
              {activeTab === "video" && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-bold mb-8 text-center">Vidéo d'Application</h2>
                  <Card className="overflow-hidden">
                    <div className="aspect-video bg-black">
                      <iframe
                        src={videoUrl}
                        className="w-full h-full"
                        allowFullScreen
                        title={`Vidéo ${product.name}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      />
                    </div>
                  </Card>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Découvrez les techniques d'application professionnelles
                  </p>
                </div>
              )}

              {/* Colors Tab */}
              {activeTab === "colors" && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-bold mb-8 text-center">Nuances Disponibles</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {(showAllColors ? product.colors : product.colors.slice(0, 8)).map((color) => (
                      <Card 
                        key={color.id} 
                        className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:-translate-y-2"
                      >
                        <div className="aspect-square relative overflow-hidden">
                          <img
                            src={color.imageUrl}
                            alt={color.name || color.id}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <CardContent className="p-4 text-center">
                          <p className="font-bold text-lg">{color.id}</p>
                          {color.name && (
                            <p className="text-sm text-muted-foreground">{color.name}</p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  {product.colors.length > 8 && (
                    <div className="text-center mt-8">
                      <button
                        onClick={() => setShowAllColors(!showAllColors)}
                        className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105"
                      >
                        {showAllColors 
                          ? "Voir moins" 
                          : `Voir plus (${product.colors.length - 8} autres nuances)`
                        }
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Documentation Downloads - Toujours visible */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Documentation</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardContent className="p-8 text-center">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Fiche Technique</h3>
                    {product.technicalSheetUrl ? (
                      <Button className="w-full" size="lg" asChild>
                        <a href={product.technicalSheetUrl} download>
                          <Download className="h-5 w-5 mr-2" />
                          Télécharger le PDF
                        </a>
                      </Button>
                    ) : (
                      <Button className="w-full" size="lg" disabled>
                        <Download className="h-5 w-5 mr-2" />
                        Fiche technique à venir
                      </Button>
                    )}
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardContent className="p-8 text-center">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Demande de Devis</h3>
                    <Button className="w-full" size="lg" variant="outline" asChild>
                      <Link to="/#contact">
                        Contactez-nous
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
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
