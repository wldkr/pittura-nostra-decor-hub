import { Award, Target, Users } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Committed to delivering premium products that meet international standards.",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Continuously developing new solutions for modern decorative needs.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Dedicated to providing exceptional service and support to our clients.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-black">About Us</h2>
            <div className="h-1 w-24 bg-[var(--gradient-brand)] rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                PITTURA NOSTRA is a leading provider of decorative products in Tunisia, 
                specializing in high-quality paints and finishes for both residential and commercial applications.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                With years of expertise in the industry, we pride ourselves on delivering 
                exceptional products that combine durability, aesthetics, and value. Our commitment 
                to quality and innovation has made us a trusted partner for contractors, designers, 
                and homeowners throughout the region.
              </p>
            </div>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-[var(--gradient-brand)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
