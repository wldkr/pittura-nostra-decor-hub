import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPostPage() {
  const { postId } = useParams<{ postId: string }>();
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Article non trouvé</h1>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour au blog
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
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour au blog
              </Link>
            </Button>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-primary uppercase tracking-wide">
                    {post.category}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString('fr-FR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black">{post.title}</h1>
              <p className="text-xl text-muted-foreground">{post.excerpt}</p>
            </div>
          </div>
        </section>

        {/* Media Section */}
        {(post.image || post.videoUrl) && (
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : post.videoUrl ? (
                    <iframe
                      src={post.videoUrl}
                      className="w-full h-full"
                      title={post.title}
                      allowFullScreen
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-lg text-foreground leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Besoin de conseils personnalisés ?</h2>
              <p className="text-lg text-muted-foreground">
                Notre équipe d'experts est à votre disposition pour vous accompagner dans vos projets
              </p>
              <Button size="lg" asChild>
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
