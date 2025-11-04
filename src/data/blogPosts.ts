export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  videoUrl?: string;
  content: string[];
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "techniques-peinture-decorative",
    title: "Techniques de Peinture Décorative : Guide Complet",
    excerpt: "Découvrez les meilleures techniques pour réussir vos projets de peinture décorative et transformer vos espaces.",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=500&fit=crop",
    category: "Conseils",
    content: [
      "La peinture décorative est un art qui permet de transformer complètement l'atmosphère d'un espace. Dans cet article, nous allons explorer les techniques essentielles pour réussir vos projets.",
      "Préparation de la surface : La clé d'un résultat professionnel réside dans la préparation. Assurez-vous que vos murs sont propres, lisses et correctement apprêtés.",
      "Choix des outils : Utilisez des pinceaux et rouleaux de qualité adaptés au type de peinture et à l'effet souhaité. Les outils de qualité font toute la différence.",
      "Techniques d'application : Que vous souhaitiez un effet marbré, texturé ou lisse, chaque technique nécessite une approche spécifique. Pratiquez d'abord sur une surface test."
    ]
  },
  {
    id: "tendances-couleurs-2024",
    title: "Tendances Couleurs 2024 : Inspirations pour votre Intérieur",
    excerpt: "Les couleurs qui définissent 2024 et comment les intégrer dans votre décoration intérieure.",
    date: "2024-03-10",
    videoUrl: "https://www.youtube-nocookie.com/embed/ONlwxw-gBd8?si=7Ml8Jl6p4tLQkei6&controls=0",
    category: "Tendances",
    content: [
      "2024 marque le retour des couleurs audacieuses et des teintes naturelles. Les tendances actuelles privilégient l'authenticité et le bien-être.",
      "Les tons terreux comme le terracotta, l'ocre et le beige chaleureux dominent la palette de cette année. Ces couleurs apportent une sensation de confort et de connexion avec la nature.",
      "Les verts profonds et les bleus apaisants continuent leur popularité, parfaits pour créer des espaces de détente et de sérénité.",
      "N'ayez pas peur d'oser ! Les accents colorés sur un mur ou dans des éléments décoratifs peuvent complètement transformer l'énergie d'une pièce."
    ]
  },
  {
    id: "entretien-facades-exterieures",
    title: "Entretien des Façades Extérieures : Nos Conseils d'Expert",
    excerpt: "Comment protéger et entretenir vos façades pour qu'elles restent belles plus longtemps.",
    date: "2024-03-05",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=500&fit=crop",
    category: "Entretien",
    content: [
      "L'entretien régulier de vos façades extérieures est essentiel pour préserver leur beauté et leur intégrité structurelle.",
      "Inspection annuelle : Examinez vos façades au moins une fois par an pour détecter les fissures, l'écaillage ou les zones d'humidité.",
      "Nettoyage : Un nettoyage en douceur avec de l'eau et un détergent adapté permet d'éliminer la saleté et les pollutants qui peuvent dégrader la peinture.",
      "Retouches préventives : N'attendez pas que les dégâts s'aggravent. Des retouches régulières prolongent considérablement la durée de vie de votre revêtement.",
      "Choix de produits adaptés : Utilisez des peintures extérieures de qualité comme notre gamme Surfacaire, spécialement conçues pour résister aux intempéries tunisiennes."
    ]
  }
];
