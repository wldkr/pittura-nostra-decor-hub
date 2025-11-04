import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-5xl md:text-6xl font-black">Blog & Actualités</h1>
              <div className="h-1 w-24 bg-[var(--gradient-brand)] rounded-full mx-auto" />
              <p className="text-xl text-muted-foreground">
                Conseils d'experts, tendances et inspirations pour vos projets de peinture décorative
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-video overflow-hidden">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : post.videoUrl ? (
                      <iframe
                        src={post.videoUrl}
                        className="w-full h-full"
                        title={post.title}
                        allowFullScreen
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground">Pas d'image</span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('fr-FR', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    <Button variant="ghost" className="w-full justify-between group/btn" asChild>
                      <Link to={`/blog/${post.id}`}>
                        Lire l'article
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
