export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
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
    description: "Création d'une identité visuelle moderne.",
    imageUrl: "https://images.unsplash.com/photo-1572044162444-ad60f128bde2?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Ce projet consistait à créer une nouvelle identité visuelle pour une startup. J'ai travaillé sur le logo, la palette de couleurs et la typographie."
  },
  {
    id: "2",
    title: "Affiche Événementielle",
    category: "personnel",
    description: "Design d'une affiche pour un festival de musique.",
    imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
    fullDescription: "Affiche réalisée pour un festival de musique imaginaire. L'objectif était d'utiliser des couleurs vives et une typographie dynamique."
  },
  {
    id: "3",
    title: "Interface Mobile App",
    category: "universitaire",
    description: "Maquettage UI/UX d'une application de bien-être.",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
    fullDescription: "Projet universitaire visant à concevoir l'interface d'une application de suivi du bien-être physique et mental."
  },
  {
    id: "4",
    title: "Campagne Social Media",
    category: "alternance",
    description: "Visuels pour les réseaux sociaux.",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
    fullDescription: "Création d'une série de visuels cohérents pour une campagne Instagram et LinkedIn."
  },
  {
    id: "5",
    title: "Illustration Botanique",
    category: "personnel",
    description: "Illustration numérique sur Procreate.",
    imageUrl: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1976&auto=format&fit=crop",
    fullDescription: "Série d'illustrations botaniques explorant le lien entre l'art et le bien-être."
  },
  {
    id: "6",
    title: "Identité de Marque",
    category: "universitaire",
    description: "Projet de branding pour un café local.",
    imageUrl: "https://images.unsplash.com/photo-1521474332319-72e65a0321aa?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Création complète de l'identité d'un café : logo, menu, et packaging."
  },
];
