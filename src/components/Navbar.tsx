import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logoWhite from "@/assets/logo-white.png";
import logoBlack from "@/assets/logo-black.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const updateTheme = () => {
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    };

    window.addEventListener("scroll", handleScroll);
    updateTheme();
    
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const productCategories = [
    {
      name: "Peintures Intérieures",
      items: ["Antico", "Serene", "Sabbia"],
    },
    {
      name: "Revêtements Extérieurs",
      items: ["Eco&Eco", "Surfacaire Extra"],
    },
    {
      name: "Finitions Décoratives",
      items: ["Gravitti", "Gresetanche"],
    },
    {
      name: "Solutions Protectrices",
      items: ["Sellando", "Primer", "Mastic 1", "Mastic 2"],
    },
  ];

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "À Propos", href: "#about" },
    { name: "Catalogues", href: "#catalogues" },
    { name: "Galerie", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src={theme === "dark" ? logoWhite : logoBlack}
              alt="PITTURA NOSTRA"
              className="h-12 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Produits
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-3 p-6 md:grid-cols-2">
                      {productCategories.map((category) => (
                        <div key={category.name} className="space-y-2">
                          <h4 className="font-bold text-sm">{category.name}</h4>
                          <ul className="space-y-1">
                            {category.items.map((item) => (
                              <li key={item}>
                                <NavigationMenuLink asChild>
                                  <button
                                    onClick={() => scrollToSection("#products")}
                                    className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm w-full text-left"
                                  >
                                    {item}
                                  </button>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                {link.name}
              </button>
            ))}
            
            <div className="border-t pt-4 mt-4">
              <p className="font-bold text-sm mb-2">Produits</p>
              {productCategories.map((category) => (
                <div key={category.name} className="mb-3">
                  <p className="text-xs font-semibold text-muted-foreground mb-1">{category.name}</p>
                  <div className="pl-2 space-y-1">
                    {category.items.map((item) => (
                      <button
                        key={item}
                        onClick={() => scrollToSection("#products")}
                        className="block w-full text-left text-sm text-foreground hover:text-primary transition-colors py-1"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
