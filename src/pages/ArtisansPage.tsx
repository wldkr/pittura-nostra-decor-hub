import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { X, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const artisanVideos = [
  {
    id: "video1",
    youtubeId: "33pQyXMyBuk",
    title: "Technique de peinture décorative",
    description: "Découvrez les techniques professionnelles de nos artisans",
  },
  {
    id: "video2",
    youtubeId: "ONlwxw-gBd8",
    title: "Application de texture murale",
    description: "Maîtrisez l'art des textures décoratives",
  },
  {
    id: "video3",
    youtubeId: "33pQyXMyBuk",
    title: "Finitions décoratives premium",
    description: "L'excellence dans les finitions haut de gamme",
  },
  {
    id: "video4",
    youtubeId: "ONlwxw-gBd8",
    title: "Peinture extérieure",
    description: "Techniques pour les surfaces extérieures",
  },
];

export default function ArtisansPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[hsl(51,100%,50%)] to-[hsl(45,100%,45%)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-black text-black">
              Nos Artisans
            </h1>
            <div className="h-1 w-24 bg-black rounded-full mx-auto" />
            <p className="text-xl text-black/80 max-w-2xl mx-auto">
              Découvrez le savoir-faire de nos artisans peintres fidèles à Pittura Nostra
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Techniques et Savoir-Faire
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nos artisans partagent leur expertise et leurs techniques de peinture décorative
            </p>
          </div>

          {/* Video Carousel */}
          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {artisanVideos.map((video) => (
                  <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer group">
                      <CardContent className="p-0">
                        <div 
                          onClick={() => setSelectedVideo(video.youtubeId)}
                          className="relative aspect-video bg-black rounded-t-lg overflow-hidden"
                        >
                          <img
                            src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-[hsl(51,100%,50%)] to-[hsl(45,100%,45%)] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Play className="h-8 w-8 text-black ml-1" fill="black" />
                            </div>
                          </div>
                        </div>
                        <div className="p-6 space-y-2">
                          <h3 className="text-xl font-bold line-clamp-2">{video.title}</h3>
                          <p className="text-muted-foreground text-sm line-clamp-2">
                            {video.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          {/* Future Features */}
          <div className="mt-24 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-8 border-2 border-dashed">
              <CardContent className="space-y-4 p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(51,100%,50%)] to-[hsl(45,100%,45%)] rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Carte Fidélité</h3>
                <p className="text-muted-foreground text-sm">
                  Bientôt disponible : demandez votre carte fidélité artisan
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 border-dashed">
              <CardContent className="space-y-4 p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(51,100%,50%)] to-[hsl(45,100%,45%)] rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Jeux & Concours</h3>
                <p className="text-muted-foreground text-sm">
                  Participez à nos jeux et concours exclusifs
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 border-dashed">
              <CardContent className="space-y-4 p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(51,100%,50%)] to-[hsl(45,100%,45%)] rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Formations</h3>
                <p className="text-muted-foreground text-sm">
                  Inscrivez-vous à nos formations professionnelles
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Full-screen Video Overlay */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <div className="w-full aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
