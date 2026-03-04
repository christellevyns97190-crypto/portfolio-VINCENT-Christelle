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
];
