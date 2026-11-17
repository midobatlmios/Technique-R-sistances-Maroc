export { productFamilies } from '@/lib/products'

export const photo = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

// Stock photos for the demo; to be replaced by the client's own workshop photos.
export const photos = {
  hero: '1633596879450-e98a1a4d0c80',
  furnace: '1727504172743-08f14448fab8',
  furnaceWorker: '1723109453405-7adc98d376a7',
  pipes: '1765218933298-dc55fdfb517a',
  packaging: '1745420052527-a75fcc6aba58',
  tubular: '1748904005697-917f8307f3f2',
  coil: '1768368826061-9ae98f015137',
  welding: '1683470157197-ee1eb03d67cc',
}

export const machines = [
  {
    title: 'Fours industriels',
    photo: photos.furnace,
    description:
      'Fours conçus selon vos pièces, vos cycles et vos températures de travail : séchage, cuisson, traitement thermique.',
    points: ['Dimensions et chargement sur mesure', 'Régulation et sécurité intégrées', 'Mise en service sur site'],
  },
  {
    title: 'Réchauffeurs en ligne RLT',
    photo: photos.pipes,
    description:
      'Chauffage des fluides directement dans la canalisation, pour une température stable en continu.',
    points: ['Eau, huiles et fluides process', 'Puissance selon le débit', 'Raccordement à votre installation'],
  },
  {
    title: 'Machines d’emballage',
    photo: photos.packaging,
    description:
      'Machines industrielles de conditionnement et de soudure, avec les éléments chauffants adaptés.',
    points: ['Soudure et thermoformage', 'Conçues selon votre produit', 'Pièces de rechange disponibles'],
  },
]

export const sectors = [
  {
    title: 'Traitement de surface',
    description: 'Chauffage des bains de dégraissage, phosphatation et galvanisation.',
    products: ['Thermoplongeurs', 'Régulation'],
    icon: 'droplets',
  },
  {
    title: 'Plasturgie',
    description: 'Chauffage des fourreaux, buses et moules d’injection et d’extrusion.',
    products: ['Colliers', 'Cartouches'],
    icon: 'factory',
  },
  {
    title: 'Presses chauffantes',
    description: 'Plateaux chauffants pour pressage, transfert et thermocollage.',
    products: ['Cartouches', 'Blindées'],
    icon: 'layers',
  },
  {
    title: 'Métiers de bouche',
    description: 'Fours, friteuses, plaques et équipements de cuisson professionnels.',
    products: ['Blindées', 'Graisses alimentaires'],
    icon: 'chef',
  },
  {
    title: 'Emballage industriel',
    description: 'Mâchoires de soudure et tunnels de rétraction.',
    products: ['Cartouches', 'Infrarouge'],
    icon: 'package',
  },
  {
    title: 'Industries à process chauffant',
    description: 'Cuves, réservoirs, étuves et lignes de production.',
    products: ['Fours', 'Réchauffeurs RLT'],
    icon: 'flame',
  },
] as const

export const processSteps = [
  { title: 'Votre demande', description: 'Plan, photo de la pièce usée ou simple description de votre besoin.' },
  { title: 'Étude technique', description: 'Puissance, tension, dimensions et matériaux adaptés à votre application.' },
  { title: 'Fabrication', description: 'Réalisation dans notre atelier de Tit Mellil, à l’unité ou en série.' },
  { title: 'Livraison', description: 'Contrôle avant départ et livraison partout au Maroc.' },
]

export const machineTypes = machines.map((m) => m.title)
