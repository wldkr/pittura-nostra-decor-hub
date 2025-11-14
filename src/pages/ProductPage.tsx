import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ArrowLeft, FileText, Mail } from "lucide-react";
import { getProduct, DEFAULT_VIDEO_URL, DEFAULT_THUMBNAIL } from "@/data/productsData";
import { useState } from "react";
import inspiration1 from "@/assets/inspiration-1.jpg";
import inspiration2 from "@/assets/inspiration-2.jpg";
import inspiration3 from "@/assets/inspiration-3.jpg";
import inspiration4 from "@/assets/inspiration-4.jpg";
import { ColorsGrid } from "@/components/ColorsGrid";

const inspirationImages = [
  { src: inspiration1, alt: "Salon moderne avec murs peints de manière décorative" },
  { src: inspiration2, alt: "Chambre élégante avec mur d'accent décoratif" },
  { src: inspiration3, alt: "Façade extérieure de maison fraîchement peinte" },
  { src: inspiration4, alt: "Bureau moderne avec murs décorés professionnellement" },
];

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? getProduct(productId) : null;
  const [activeTab, setActiveTab] = useState<"description" | "video" | "colors">("description");

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
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={thumbnailUrl} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
          </div>
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
              {["description","video","colors"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as "description"|"video"|"colors")}
                  className={`px-6 py-2 font-semibold rounded-lg transition-all ${
                    activeTab === tab 
                      ? "bg-gradient-to-r from-primary to-accent text-white" 
                      : "hover:bg-secondary"
                  }`}
                >
                  {tab === "description" ? "Description" : tab === "video" ? "Vidéo d'application" : "Nuances"}
                </button>
              ))}
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
              {activeTab === "description" && (
                <div className="animate-fade-in grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Description</h2>
                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                      {product.description.map((p,i)=><p key={i}>{p}</p>)}
                    </div>
                  </div>
                  {product.characteristics && (
                    <div>
                      <h2 className="text-3xl font-bold mb-6">Caractéristiques</h2>
                      <ul className="space-y-4">
                        {product.characteristics.map((c,i)=>(
                          <li key={i} className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="h-2 w-2 rounded-full bg-white" />
                            </div>
                            <span className="text-lg">{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "video" && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-bold mb-8 text-center">Vidéo d'Application</h2>
                  <Card className="overflow-hidden">
                    <div className="aspect-video bg-black">
                      <iframe src={videoUrl} className="w-full h-full" allowFullScreen title={`Vidéo ${product.name}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
                    </div>
                  </Card>
                  <p className="text-center text-sm text-muted-foreground mt-4">Découvrez les techniques d'application professionnelles</p>
                </div>
              )}

              {activeTab === "colors" && (
                <div className="animate-fade-in">
                  <ColorsGrid />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Documentation & Inspiration Sections */}
        {/* ...reste du code existant inchangé pour la doc, inspirations et CTA */}
      </main>

      <Footer />
    </div>
  );
}
