import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black">Actualités & Conseils</h2>
          <div className="h-1 w-24 bg-[var(--gradient-brand)] rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos derniers articles, tendances et conseils d'experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {latestPosts.map((post) => (
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
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString('fr-FR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
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

        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/blog">
              Voir tous les articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
