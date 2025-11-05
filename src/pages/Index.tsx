import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { BlogPreview } from "@/components/BlogPreview";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FacebookFeed } from "@/components/FacebookFeed";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <BlogPreview />
      <FacebookFeed />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
