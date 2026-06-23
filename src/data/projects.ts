export interface Project {
  id: string;
  title: string;
  category: string;
  subCategory?: string;
  description: string;
  imageUrl: string;
  detailImageUrl?: string;
  videoUrl?: string;
  externalUrl?: string;
  fullDescription: string;
  pdfUrl?: string;
  mediaGallery?: string[];
}

export const categories = [
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
    id: "savi",
    title: "Site Web – Savi Bureautique",
    category: "alternance",
    description: "Création du site vitrine de Savi Bureautique.",
    imageUrl: "/savi-bureautique.gif",
    detailImageUrl: "/savi-bureautique.webp",
    externalUrl: "https://www.savibureautique.fr",
    fullDescription: "Conception et développement du site vitrine de Savi Bureautique, entreprise de services administratifs et bureautiques fondée en 1999. Le site présente les services proposés aux particuliers et professionnels avec une approche moderne et accessible."
  },
  {
    id: "alt-casablanca",
    title: "Flyer – Casa Blanca La Nuit Blanche",
    category: "alternance",
    description: "Flyer événementiel pour une soirée We Love Toubana.",
    imageUrl: "/alt-flyer-casablanca.gif",
    detailImageUrl: "/alt-flyer-casablanca.jpg",
    fullDescription: "Création d'un flyer pour la soirée Casa Blanca – La Nuit Blanche organisée par We Love Toubana à La Palmeraie. Visuel orientaliste avec DJ lineup, date et prévente sur Bizouk."
  },
  {
    id: "alt-noel-cocorent",
    title: "Flyer Noël – Coco Rent Guadeloupe",
    category: "alternance",
    description: "Visuel promotionnel code promo de Noël.",
    imageUrl: "/alt-flyer-noel-cocorent.gif",
    detailImageUrl: "/alt-flyer-noel-cocorent.png",
    fullDescription: "Création d'un visuel pour la campagne Noël de Coco Rent Guadeloupe, mettant en avant le code promo NOËL25, valable jusqu'au 31 décembre pour les réservations 2025 à 2026."
  },
  {
    id: "2",
    title: "Vente Privée – Génération Mélodie",
    category: "personnel",
    description: "Affiche promotionnelle pour une vente privée.",
    imageUrl: "/perso1-thumb.gif",
    detailImageUrl: "/perso1.png",
    fullDescription: "Création d'une affiche pour la vente privée de Génération Mélodie, boutique santé, bien-être & accessoires. Design mettant en avant la réduction de -30% et les informations clés de l'événement."
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
    imageUrl: "/perso3-thumb.gif",
    detailImageUrl: "/perso3.png",
    fullDescription: "Création d'une affiche pour la rencontre Human Design & Hypersensibilité organisée par MP Consulting au Salon de Thé Paris."
  },
  {
    id: "b24-repair-logotypes",
    title: "Logotypes – B24 Repair",
    category: "personnel",
    description: "Création de logotypes pour B24 Repair Les.",
    imageUrl: "/projets/b24-repair-logotypes.pdf",
    pdfUrl: "/projets/b24-repair-logotypes.pdf",
    fullDescription: "Création de logotypes pour la marque B24 Repair Les : recherche graphique, déclinaisons de logos et charte chromatique."
  },
  {
    id: "retouche-photo",
    title: "Retouche Photo",
    category: "personnel",
    description: "Travail de retouche photographique.",
    imageUrl: "/projets/retouche-photo.pdf",
    pdfUrl: "/projets/retouche-photo.pdf",
    fullDescription: "Travail de retouche photographique : correction des couleurs, recadrage, amélioration de la qualité d'image et effets visuels."
  },
  {
    id: "serenity-for-life",
    title: "Serenity for Life",
    category: "personnel",
    description: "Création visuelle Serenity for Life.",
    imageUrl: "/projets/serenity-for-life.gif",
    fullDescription: "Création visuelle pour Serenity for Life : design graphique et motion design pour la marque."
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
    id: "carrousel-transformation",
    title: "Carrousel – Raconte en Réalité",
    category: "universitaire",
    subCategory: "exprimer",
    description: "Carrousel sur le thème de la transformation.",
    imageUrl: "/projets/carrousel-transformation.pdf",
    pdfUrl: "/projets/carrousel-transformation.pdf",
    fullDescription: "Création d&apos;un carrousel sur le thème de la transformation : réflexion sur les raisons du relèvement, constat sur le blocage, et message de résilience à travers un storytelling visuel percutant."
  },
  {
    id: "carrousel-sav",
    title: "Carrousel – SAV",
    category: "universitaire",
    subCategory: "exprimer",
    description: "Carrousel sur le service après-vente.",
    imageUrl: "/projets/carrousel-sav.pdf",
    pdfUrl: "/projets/carrousel-sav.pdf",
    fullDescription: "Création d&apos;un carrousel dédié au service après-vente (SAV) : mise en avant des engagements, des procédures et de la satisfaction client à travers un design clair et engageant."
  },
  {
    id: "identite-visuelle-cocorent",
    title: "Identité Visuelle – Coco Rent",
    category: "universitaire",
    subCategory: "exprimer",
    description: "Identité visuelle pour Coco Rent.",
    imageUrl: "/projets/identite-visuelle-cocorent.pdf",
    pdfUrl: "/projets/identite-visuelle-cocorent.pdf",
    fullDescription: "Création de l&apos;identité visuelle pour l&apos;agence Coco Rent : logo, charte graphique, palette de couleurs, typographies et déclinaisons sur supports de communication."
  },
    {
    id: "business-plan-charmy-gps",
    title: "Business Plan – Charming GPS",
    category: "universitaire",
    subCategory: "entreprendre",
    description: "Business plan et identité visuelle pour Charming GPS.",
    imageUrl: "/projets/business-plan-charmy-gps.pdf",
    pdfUrl: "/projets/business-plan-charmy-gps.pdf",
    fullDescription: "Business plan complet et identité visuelle pour le projet Charming GPS, une application de guidage. Travail réalisé dans le cadre du BUT MMI incluant l'étude de marché, le modèle économique et la stratégie de marque."
  },
  {
    id: "intrepide",
    title: "Intrépide",
    category: "universitaire",
    subCategory: "entreprendre",
    description: "Projet Intrépide.",
    imageUrl: "/projets/intrepide.pdf",
    pdfUrl: "/projets/intrepide.pdf",
    fullDescription: "Projet Intrépide réalisé dans le cadre du cursus universitaire."
  },
  {
    id: "ppp-but3-mmi",
    title: "PPP – Projet Professionnel Personnel",
    category: "universitaire",
    subCategory: "entreprendre",
    description: "Projet Professionnel Personnel – BUT3 MMI.",
    imageUrl: "/projets/ppp-but3-mmi.pdf",
    pdfUrl: "/projets/ppp-but3-mmi.pdf",
    fullDescription: "Projet Professionnel Personnel (PPP) de fin de BUT3 MMI : bilan des compétences, projet professionnel, objectifs de carrière et stratégie de développement dans le domaine du design et du multimédia."
  },
  {
    id: "spot-super-u",
    title: "Spot Publicitaire – Super U",
    category: "universitaire",
    subCategory: "entreprendre",
    description: "Création d&apos;un spot publicitaire pour Super U.",
    imageUrl: "/projets/spot-super-u.pdf",
    pdfUrl: "/projets/spot-super-u.pdf",
    fullDescription: "Création et conception d&apos;un spot publicitaire pour l&apos;enseigne Super U : storyboard, scénario et direction artistique pour la production audiovisuelle."
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
    id: "maquette-jeu",
    title: "Maquette – Jeu",
    category: "universitaire",
    subCategory: "concevoir",
    description: "Maquettage d&apos;un jeu vidéo.",
    imageUrl: "/projets/maquette-jeu.pdf",
    pdfUrl: "/projets/maquette-jeu.pdf",
    fullDescription: "Maquettage et conception d&apos;un jeu vidéo : réalisation des wireframes, design des interfaces et des écrans de jeu, organisation des éléments de gameplay et de navigation."
  },
  {
    id: "mindmap-charmy-gps",
    title: "Mindmap – Charming GPS",
    category: "universitaire",
    subCategory: "concevoir",
    description: "Mindmap pour l&apos;application Charming GPS.",
    imageUrl: "/projets/mindmap-charmy-gps.png",
    fullDescription: "Création d&apos;une mindmap (carte mentale) pour l&apos;application Charming GPS, organisant les fonctionnalités, l&apos;architecture de l&apos;information et les parcours utilisateur de l&apos;application de guidage."
  },
  {
    id: "storyboard-documentaire",
    title: "Storyboard – Documentaire",
    category: "universitaire",
    subCategory: "concevoir",
    description: "Storyboard pour un projet documentaire.",
    imageUrl: "/projets/storyboard-documentaire.pdf",
    pdfUrl: "/projets/storyboard-documentaire.pdf",
    fullDescription: "Réalisation d&apos;un storyboard pour un projet documentaire : séquençage des plans, descriptions visuelles et indications de réalisation pour la production audiovisuelle."
  },
  {
    id: "avant-apres-flyer",
    title: "Avant/Après – Flyer Événementiel",
    category: "universitaire",
    subCategory: "apprehender",
    description: "Analyse comparative avant/après d&apos;un flyer événementiel.",
    imageUrl: "/projets/avant-apres-flyer.pdf",
    pdfUrl: "/projets/avant-apres-flyer.pdf",
    fullDescription: "Analyse comparative avant/après d&apos;un flyer événementiel : étude des améliorations graphiques, de la hiérarchie visuelle, de la typographie et de l&apos;impact communicationnel."
  },
  {
    id: "introduction-ux-ui",
    title: "Introduction UX-UI – BUT MMI",
    category: "universitaire",
    subCategory: "apprehender",
    description: "Introduction aux concepts d&apos;UX et d&apos;UI design.",
    imageUrl: "/projets/introduction-ux-ui.pdf",
    pdfUrl: "/projets/introduction-ux-ui.pdf",
    fullDescription: "Travail d&apos;introduction aux concepts d&apos;UX (expérience utilisateur) et d&apos;UI (interface utilisateur) réalisé dans le cadre du BUT MMI. Exploration des principes d&apos;ergonomie, d&apos;accessibilité et de design d&apos;interaction."
  },
  {
    id: "persona-cocorent",
    title: "Persona Cible – COCORENT",
    category: "universitaire",
    subCategory: "apprehender",
    description: "Création d&apos;une persona cible pour l&apos;agence COCORENT.",
    imageUrl: "/projets/persona-cible-cocorent.pdf",
    pdfUrl: "/projets/persona-cible-cocorent.pdf",
    fullDescription: "Création d&apos;une persona cible pour l&apos;agence COCORENT : analyse du public visé, définition des caractéristiques démographiques, comportements, objectifs et points de friction pour une stratégie de communication ciblée."
  },
];
