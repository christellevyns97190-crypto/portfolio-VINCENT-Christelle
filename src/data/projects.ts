export interface Project {
  id: string;
  title: string;
  category: string;
  subCategory?: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  fullDescription: string;
}

export const categories = [
  { 
    id: "alternance", 
    name: "Alternance", 
    path: "/creations/alternance",
    description: "Projets réalisés dans le cadre de mon alternance."
  },
  { 
    id: "personnel", 
    name: "Projet personnel", 
    path: "/creations/personnel",
    description: "Créations libres et expérimentations graphiques."
  },
  { 
    id: "universitaire", 
    name: "Universitaire", 
    path: "/creations/universitaire",
    description: "Travaux réalisés durant mon cursus MMI."
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Logo Design",
    category: "alternance",
    description: "Création d&apos;une identité visuelle moderne.",
    imageUrl: "https://images.unsplash.com/photo-1572044162444-ad60f128bde2?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Ce projet consistait à créer une nouvelle identité visuelle pour une startup. J&apos;ai travaillé sur le logo, la palette de couleurs et la typographie."
  },
  {
    id: "2",
    title: "Vente Privée – Génération Mélodie",
    category: "personnel",
    description: "Affiche promotionnelle pour une vente privée.",
    imageUrl: "/perso1.png",
    fullDescription: "Création d'une affiche pour la vente privée de Génération Mélodie, boutique santé, bien-être & accessoires. Design mettant en avant la réduction de -30% et les informations clés de l'événement."
  },
  {
    id: "3",
    title: "Interface Mobile App",
    category: "universitaire",
    subCategory: "concevoir",
    description: "Maquettage UI/UX d&apos;une application de bien-être.",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
    fullDescription: "Projet universitaire visant à concevoir l&apos;interface d&apos;une application de suivi du bien-être physique et mental."
  },
  {
    id: "4",
    title: "Campagne Social Media",
    category: "alternance",
    description: "Visuels pour les réseaux sociaux.",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
    fullDescription: "Création d&apos;une série de visuels cohérents pour une campagne Instagram et LinkedIn."
  },
  {
    id: "5",
    title: "Projet Vidéo",
    category: "personnel",
    description: "Création vidéo personnelle.",
    imageUrl: "/perso1.png",
    videoUrl: "/perso2.mp4",
    fullDescription: "Réalisation d'un projet vidéo personnel explorant la créativité graphique en mouvement."
  },
  {
    id: "5b",
    title: "Rencontre Human Design & Hypersensibilité",
    category: "personnel",
    description: "Affiche événementielle pour un atelier bien-être.",
    imageUrl: "/perso3.png",
    fullDescription: "Création d'une affiche pour la rencontre Human Design & Hypersensibilité organisée par MP Consulting au Salon de Thé Paris."
  },
  {
    id: "6",
    title: "Identité de Marque",
    category: "universitaire",
    subCategory: "exprimer",
    description: "Projet de branding pour un café local.",
    imageUrl: "https://images.unsplash.com/photo-1521474332319-72e65a0321aa?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Création complète de l&apos;identité d&apos;un café : logo, menu, et packaging."
  },
  {
    id: "7",
    title: "Stratégie de Communication",
    category: "universitaire",
    subCategory: "entreprendre",
    description: "Élaboration d&apos;un plan de communication pour une association.",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Projet de conception d&apos;une stratégie de communication complète pour une association locale, incluant le budget, les canaux et le calendrier éditorial."
  },
  {
    id: "8",
    title: "Site Web Vitrine",
    category: "universitaire",
    subCategory: "developper",
    description: "Développement d&apos;un site vitrine en HTML/CSS/JS.",
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
    fullDescription: "Conception et développement d&apos;un site web vitrine responsive pour une PME, en intégrant les bonnes pratiques d&apos;accessibilité et de SEO."
  },
  {
    id: "9",
    title: "Analyse de Marché",
    category: "universitaire",
    subCategory: "apprehender",
    description: "Étude de marché et veille concurrentielle.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Réalisation d&apos;une analyse approfondie d&apos;un marché numérique : identification des tendances, étude des concurrents et recommandations stratégiques."
  },
];
