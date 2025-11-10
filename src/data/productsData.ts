// Structure de données des produits - Compatible avec Google Drive
// Les URLs peuvent être remplacées par les liens Google Drive réels

export interface ProductData {
  id: string;
  name: string;
  subtitle: string;
  category: "interior" | "exterior" | "decorative" | "protective";
  description: string[];
  characteristics?: string[];
  
  // Médias depuis Google Drive
  thumbnailUrl?: string; // 137x98px depuis dossier "thumbnail"
  videoUrl?: string; // depuis dossier "video application"
  technicalSheetUrl?: string; // PDF depuis dossier "fiche technique"
  catalogueUrl?: string;
  
  // Nuances de couleurs avec chargement progressif
  colors: Array<{
    id: string;
    name?: string;
    imageUrl: string;
  }>;
  
  // Images d'inspiration/réalisations
  inspirationImages?: string[];
}

// Vidéo par défaut si aucune vidéo n'est trouvée
export const DEFAULT_VIDEO_URL = "https://www.youtube-nocookie.com/embed/33pQyXMyBuk";

// Image par défaut si aucune image n'est trouvée
export const DEFAULT_THUMBNAIL = "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop";

export const productsDatabase: Record<string, ProductData> = {
  // ========== PEINTURES INTÉRIEURES ==========
  adore: {
    id: "adore",
    name: "Adore",
    subtitle: "Élégance moderne pour intérieurs raffinés",
    category: "interior",
    description: [
      "Adore combine modernité et élégance pour créer des espaces intérieurs sophistiqués. Sa formulation avancée offre une finition premium avec une texture exceptionnelle.",
      "Parfaite pour les pièces de vie contemporaines, chambres et espaces de réception nécessitant une touche d'élégance."
    ],
    characteristics: [
      "Finition mate veloutée",
      "Excellente couverture en 2 couches",
      "Séchage rapide (2-4h)",
      "Lessivable et résistante",
      "Faible émission de COV"
    ],
    thumbnailUrl: DEFAULT_THUMBNAIL,
    videoUrl: DEFAULT_VIDEO_URL,
    colors: [
      { id: "AD-01", name: "Blanc Pur", imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
      { id: "AD-02", name: "Gris Perle", imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=300&h=300&fit=crop" },
      { id: "AD-03", name: "Beige Doux", imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop" },
      { id: "AD-04", name: "Taupe", imageUrl: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=300&h=300&fit=crop" },
    ]
  },
  
  antico: {
    id: "antico",
    name: "Antico",
    subtitle: "Charme intemporel d'inspiration antique",
    category: "interior",
    description: [
      "Antico évoque le charme des intérieurs classiques tout en apportant une durabilité moderne. Cette peinture premium offre une finition exceptionnelle inspirée des techniques traditionnelles.",
      "Idéale pour créer des ambiances authentiques et chaleureuses dans vos espaces de vie."
    ],
    characteristics: [
      "Effet patiné élégant",
      "Haute résistance au lessivage",
      "Application facile",
      "Finition satinée douce"
    ],
    thumbnailUrl: DEFAULT_THUMBNAIL,
    videoUrl: DEFAULT_VIDEO_URL,
    colors: [
      { id: "AN-01", imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
      { id: "AN-02", imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=300&h=300&fit=crop" },
    ]
  },
  
  festive: {
    id: "festive",
    name: "Festive",
    subtitle: "Couleurs vibrantes pour espaces dynamiques",
    category: "interior",
    description: [
      "Festive apporte vie et énergie à vos espaces avec sa large palette de couleurs éclatantes et lumineuses.",
      "Parfaite pour les espaces de vie, chambres d'enfants et zones nécessitant une touche de dynamisme."
    ],
    thumbnailUrl: DEFAULT_THUMBNAIL,
    videoUrl: DEFAULT_VIDEO_URL,
    colors: [
      { id: "FE-01", imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  
  fresco: {
    id: "fresco",
    name: "Fresco",
    subtitle: "Finition artisanale traditionnelle",
    category: "interior",
    description: [
      "Fresco offre un rendu artisanal inspiré des techniques de fresque traditionnelles italiennes.",
      "Créez des intérieurs uniques avec caractère et authenticité grâce à ses effets de matière subtils."
    ],
    thumbnailUrl: DEFAULT_THUMBNAIL,
    videoUrl: DEFAULT_VIDEO_URL,
    colors: [
      { id: "FR-01", imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  
  marmo: {
    id: "marmo",
    name: "Marmo",
    subtitle: "Effet marbre luxueux",
    category: "interior",
    description: [
      "Marmo reproduit l'élégance naturelle du marbre avec un effet sophistiqué et prestigieux.",
      "Transformez vos murs en surfaces luxueuses rappelant les plus beaux marbres italiens."
    ],
    thumbnailUrl: DEFAULT_THUMBNAIL,
    videoUrl: DEFAULT_VIDEO_URL,
    colors: [
      { id: "MA-01", imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  
  metal: {
    id: "metal",
    name: "Metal",
    subtitle: "Finition métallique contemporaine",
    category: "interior",
    description: [
      "Metal apporte une touche moderne et sophistiquée avec ses reflets métalliques subtils et élégants.",
      "Parfait pour les intérieurs contemporains, lofts et espaces à style industriel chic."
    ],
    thumbnailUrl: DEFAULT_THUMBNAIL,
    videoUrl: DEFAULT_VIDEO_URL,
    colors: [
      { id: "ME-01", imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  
  nirvana: {
    id: "nirvana",
    name: "Nirvana",
    subtitle: "Pureté et sérénité absolues",
    category: "interior",
    description: [
      "Nirvana crée une atmosphère zen et épurée, idéale pour les espaces de détente et de bien-être.",
      "Sa palette apaisante favorise la relaxation et l'harmonie dans vos intérieurs."
    ],
    thumbnailUrl: DEFAULT_THUMBNAIL,
    videoUrl: DEFAULT_VIDEO_URL,
    colors: [
      { id: "NI-01", imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  
  nostalgia: {
    id: "nostalgia",
    name: "Nostalgia",
    subtitle: "Charme rétro revisité",
    category: "interior",
    description: [
      "Nostalgia évoque le charme des intérieurs d'antan avec une touche contemporaine raffinée.",
      "Parfaite pour créer des ambiances vintage authentiques et chaleureuses."
    ],
    thumbnailUrl: DEFAULT_THUMBNAIL,
    videoUrl: DEFAULT_VIDEO_URL,
    colors: [
      { id: "NO-01", imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  
  sabbia: {
    id: "sabbia",
    name: "Sabbia",
    subtitle: "Texture sable méditerranéenne",
    category: "interior",
    description: [
      "Sabbia offre un effet texturé unique inspiré des finitions traditionnelles méditerranéennes.",
      "Créez des ambiances chaleureuses et authentiques avec ses reflets subtils de sable doré."
    ],
    thumbnailUrl: DEFAULT_THUMBNAIL,
    videoUrl: DEFAULT_VIDEO_URL,
    colors: [
      { id: "SA-01", imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  
  serene: {
    id: "serene",
    name: "Serene",
    subtitle: "Douceur et tranquillité",
    category: "interior",
    description: [
      "Serene apporte une atmosphère apaisante avec sa texture lisse et ses teintes harmonieuses.",
      "Idéale pour chambres, salons et tous espaces nécessitant calme et sérénité."
    ],
    thumbnailUrl: DEFAULT_THUMBNAIL,
    videoUrl: DEFAULT_VIDEO_URL,
    colors: [
      { id: "SE-01", imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  
  strong: {
    id: "strong",
    name: "Strong",
    subtitle: "Résistance maximale zones intensives",
    category: "interior",
    description: [
      "Strong est spécialement conçue pour les zones à fort passage nécessitant une durabilité exceptionnelle.",
      "Protection renforcée contre les chocs, rayures et lessivages fréquents tout en conservant une finition impeccable."
    ],
    characteristics: [
      "Ultra résistante aux chocs",
      "Lessivable classe 1",
      "Idéale zones de passage",
      "Finition anti-traces"
    ],
    thumbnailUrl: DEFAULT_THUMBNAIL,
    videoUrl: DEFAULT_VIDEO_URL,
    colors: [
      { id: "ST-01", imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  
  // ========== REVÊTEMENTS EXTÉRIEURS ==========
  "surfacaire-eco-eco": {
    id: "surfacaire-eco-eco",
    name: "Surfacaire Eco&Eco",
    subtitle: "Solution façade écologique performante",
    category: "exterior",
    description: [
      "Surfacaire Eco&Eco est un revêtement extérieur respectueux de l'environnement offrant protection optimale et esthétique durable.",
      "Formulation écologique sans compromis sur la performance face aux conditions climatiques difficiles."
    ],
    characteristics: [
      "Formulation écologique",
      "Protection UV renforcée",
      "Résistance aux intempéries",
      "Perméable à la vapeur d'eau"
    ],
    thumbnailUrl: DEFAULT_THUMBNAIL,
    videoUrl: DEFAULT_VIDEO_URL,
    colors: [
      { id: "EE-01", imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  
  "surfacaire-extra": {
    id: "surfacaire-extra",
    name: "Surfacaire Extra",
    subtitle: "Performance façade maximale",
    category: "exterior",
    description: [
      "Surfacaire Extra offre une protection supérieure pour façades exigeantes avec une durabilité exceptionnelle.",
      "Solution premium pour façades nécessitant résistance maximale et entretien minimal sur le long terme."
    ],
    characteristics: [
      "Durabilité exceptionnelle 15+ ans",
      "Protection anti-fissures",
      "Autonettoyant effet lotus",
      "Entretien minimal"
    ],
    thumbnailUrl: DEFAULT_THUMBNAIL,
    videoUrl: DEFAULT_VIDEO_URL,
    colors: [
      { id: "EX-01", imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  
  // ========== FINITIONS DÉCORATIVES ==========
  gravitti: {
    id: "gravitti",
    name: "Gravitti",
    subtitle: "Effets décoratifs texturés sophistiqués",
    category: "decorative",
    description: [
      "Gravitti crée des effets décoratifs sophistiqués avec ses textures variées et son rendu unique en relief.",
      "Transformez vos murs en véritables œuvres d'art avec des finitions personnalisables à l'infini."
    ],
    thumbnailUrl: DEFAULT_THUMBNAIL,
    videoUrl: DEFAULT_VIDEO_URL,
    colors: [
      { id: "GR-01", imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  
  gresetanche: {
    id: "gresetanche",
    name: "Gresetanche",
    subtitle: "Étanchéité décorative zones humides",
    category: "decorative",
    description: [
      "Gresetanche combine protection imperméable haute performance et finition décorative élégante.",
      "Solution idéale pour salles de bains, cuisines, zones humides et surfaces extérieures exposées."
    ],
    thumbnailUrl: DEFAULT_THUMBNAIL,
    videoUrl: DEFAULT_VIDEO_URL,
    colors: [
      { id: "GE-01", imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  
  // ========== SOLUTIONS PROTECTRICES ==========
  "mastic-1": {
    id: "mastic-1",
    name: "Mastic 1",
    subtitle: "Rebouchage intérieur professionnel",
    category: "protective",
    description: [
      "Mastic 1 est la solution professionnelle pour réparation et rebouchage des fissures et imperfections en intérieur.",
      "Séchage rapide, ponçage facile et excellente adhérence pour une finition parfaite avant peinture."
    ],
    thumbnailUrl: DEFAULT_THUMBNAIL,
    colors: [
      { id: "M1-01", imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  
  "mastic-2": {
    id: "mastic-2",
    name: "Mastic 2",
    subtitle: "Mastic façade extérieur haute performance",
    category: "protective",
    description: [
      "Mastic 2 est spécialement formulé pour applications extérieures et réparations de façades exigeantes.",
      "Résiste aux variations climatiques extrêmes et garantit une tenue longue durée exceptionnelle."
    ],
    thumbnailUrl: DEFAULT_THUMBNAIL,
    colors: [
      { id: "M2-01", imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  
  primer: {
    id: "primer",
    name: "Primer",
    subtitle: "Sous-couche universelle professionnelle",
    category: "protective",
    description: [
      "Notre Primer professionnel prépare parfaitement toutes surfaces pour une application optimale de peinture.",
      "Améliore l'adhérence, uniformise la porosité et réduit la consommation de peinture de finition."
    ],
    thumbnailUrl: DEFAULT_THUMBNAIL,
    colors: [
      { id: "PR-01", imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
  
  sellando: {
    id: "sellando",
    name: "Sellando",
    subtitle: "Scellant protecteur multi-usages",
    category: "protective",
    description: [
      "Sellando est un scellant haute performance pour protection durable et étanchéité optimale de toutes surfaces.",
      "Assure une barrière efficace contre l'humidité, les infiltrations et les agressions extérieures."
    ],
    thumbnailUrl: DEFAULT_THUMBNAIL,
    colors: [
      { id: "SE-01", imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&h=300&fit=crop" },
    ]
  },
};

// Fonction utilitaire pour obtenir les produits par catégorie
export function getProductsByCategory(category: ProductData["category"]): ProductData[] {
  return Object.values(productsDatabase).filter(product => product.category === category);
}

// Fonction utilitaire pour obtenir un produit par son ID avec fallbacks
export function getProduct(productId: string): ProductData | null {
  return productsDatabase[productId] || null;
}
