import type { ArtKey } from '@/components/product-art'

// Familles de produits d'après le catalogue de l'entreprise.
// Volontairement sans valeurs chiffrées (°C, W/cm²…) : à compléter avec les données confirmées par le client.

export type Product = {
  slug: string
  title: string
  detail: string
  art: ArtKey
  tags: string[]
  intro: string
  variants: { name: string; text: string }[]
  applications: string[]
  sectors: string[]
  quoteInfo: string[]
  faq: { q: string; a: string }[]
  related: string[]
  seo: string
}

const standardQuote = ['Tension d’alimentation (230 V, 400 V…)', 'Puissance souhaitée ou à remplacer', 'Quantité', 'Photo ou plan de la pièce']

export const productFamilies: Product[] = [
  {
    slug: 'colliers-chauffants',
    title: 'Colliers chauffants',
    detail: 'Chauffage des fourreaux, buses et fûts par contact extérieur.',
    art: 'collier',
    tags: ['Mica', 'Céramique', 'Étanches pour fûts'],
    intro:
      'Le collier chauffant se fixe autour d’une pièce cylindrique pour la chauffer par contact : fourreau de presse, buse d’injection, tuyauterie ou fût. Nous les fabriquons au diamètre et à la largeur de votre équipement.',
    variants: [
      { name: 'Colliers mica', text: 'Compacts et économiques, pour les fourreaux et buses de presses.' },
      { name: 'Colliers céramique', text: 'Pour les applications plus chaudes, avec une meilleure tenue en température.' },
      { name: 'Colliers étanches pour fûts', text: 'Pour réchauffer le contenu des fûts : huiles, graisses, produits visqueux.' },
    ],
    applications: ['Fourreaux de presses à injecter et d’extrusion', 'Buses d’injection', 'Tuyauteries et vannes', 'Fûts et réservoirs'],
    sectors: ['Plasturgie', 'Emballage industriel', 'Industries à process chauffant'],
    quoteInfo: ['Diamètre intérieur et largeur', 'Type de serrage et de raccordement', 'Découpes ou trous éventuels', ...standardQuote],
    faq: [
      { q: 'Pouvez-vous reproduire un collier usé ?', a: 'Oui. Envoyez-nous une photo avec les dimensions, ou apportez la pièce : nous la reproduisons à l’identique ou en l’améliorant.' },
      { q: 'Mica ou céramique : lequel choisir ?', a: 'Cela dépend de la température de travail et de l’usage. Décrivez votre application, nous vous conseillons le type adapté.' },
    ],
    related: ['cartouches-chauffantes', 'accessoires-regulation', 'matelas-isolation'],
    seo: 'Colliers chauffants mica et céramique sur mesure pour presses et fûts, fabriqués à Casablanca.',
  },
  {
    slug: 'thermoplongeurs',
    title: 'Thermoplongeurs',
    detail: 'Chauffage direct des liquides : eau, huiles, bains de traitement.',
    art: 'thermoplongeur',
    tags: ['Bouchon fileté', 'Bride', 'Inox / cuivre'],
    intro:
      'Le thermoplongeur plonge directement dans le liquide à chauffer. C’est la solution la plus efficace pour les cuves, bacs et réservoirs. Nous l’adaptons à votre liquide, à votre cuve et à votre mode de fixation.',
    variants: [
      { name: 'À bouchon fileté', text: 'Se visse directement dans la paroi de la cuve.' },
      { name: 'À bride', text: 'Pour les puissances plus importantes et les grandes cuves.' },
      { name: 'Plongeurs à poser', text: 'Posés par le haut de la cuve, sans perçage de la paroi.' },
    ],
    applications: ['Bains de traitement de surface', 'Cuves d’eau et chauffe-eau industriels', 'Réservoirs d’huile', 'Bacs de lavage et de dégraissage'],
    sectors: ['Traitement de surface', 'Métiers de bouche', 'Industries à process chauffant'],
    quoteInfo: ['Liquide à chauffer', 'Type de fixation (filetage, bride, à poser)', 'Longueur plongeante', 'Matériau souhaité', ...standardQuote],
    faq: [
      { q: 'Quel matériau pour mon liquide ?', a: 'Le choix dépend du liquide (eau, huile, bain acide ou alcalin). Indiquez-nous le liquide et sa température, nous choisissons le matériau adapté.' },
      { q: 'Pouvez-vous ajouter un thermostat ?', a: 'Oui, le thermoplongeur peut être livré avec thermostat ou sonde pour réguler la température du bain.' },
    ],
    related: ['resistances-blindees-ailettes', 'accessoires-regulation', 'barillets'],
    seo: 'Thermoplongeurs sur mesure à bouchon ou à bride pour cuves, bains et réservoirs. Fabrication à Casablanca.',
  },
  {
    slug: 'resistances-blindees-ailettes',
    title: 'Résistances blindées et à ailettes',
    detail: 'Éléments tubulaires formés pour liquides, air et gaz.',
    art: 'blindee',
    tags: ['Droites', 'En U', 'À ailettes'],
    intro:
      'La résistance blindée est un élément tubulaire robuste, formé selon la géométrie de votre appareil. Équipée d’ailettes, elle chauffe efficacement l’air et les gaz dans les étuves, gaines et batteries de chauffe.',
    variants: [
      { name: 'Blindées droites ou formées', text: 'Droites, en U, en épingle ou cintrées selon votre plan.' },
      { name: 'À ailettes', text: 'Surface d’échange augmentée pour le chauffage de l’air et des gaz.' },
      { name: 'Pour fours et plaques', text: 'Formes spécifiques pour fours, plaques et équipements de cuisson.' },
    ],
    applications: ['Étuves et fours de séchage', 'Gaines et batteries de soufflage', 'Fours professionnels', 'Cuves et bacs'],
    sectors: ['Métiers de bouche', 'Presses chauffantes', 'Industries à process chauffant'],
    quoteInfo: ['Forme et dimensions (plan ou photo)', 'Diamètre du tube', 'Fluide chauffé : air, eau, huile', 'Type de sorties et de fixation', ...standardQuote],
    faq: [
      { q: 'Pouvez-vous fabriquer une forme particulière ?', a: 'Oui, nous cintrons l’élément selon votre plan ou d’après la pièce d’origine.' },
      { q: 'Quand choisir des ailettes ?', a: 'Pour chauffer de l’air ou un gaz : les ailettes améliorent l’échange de chaleur.' },
    ],
    related: ['thermoplongeurs', 'resistances-formables', 'infrarouge-quartz'],
    seo: 'Résistances blindées et à ailettes sur mesure pour air, liquides et fours. Fabrication à Casablanca.',
  },
  {
    slug: 'cartouches-chauffantes',
    title: 'Cartouches chauffantes',
    detail: 'Chauffage localisé des moules, matrices et outillages.',
    art: 'cartouche',
    tags: ['Haute densité', 'Sorties sur mesure'],
    intro:
      'La cartouche chauffante s’insère dans un alésage pour chauffer une pièce métallique de l’intérieur. Compacte et précise, elle est idéale pour les moules, les plateaux de presse et les mâchoires de soudure.',
    variants: [
      { name: 'Haute densité', text: 'Pour une puissance élevée dans un petit volume.' },
      { name: 'Sorties droites ou coudées', text: 'Fils, câbles ou gaines adaptés à l’encombrement de votre machine.' },
      { name: 'Avec thermocouple intégré', text: 'Pour mesurer la température au plus près de la chauffe.' },
    ],
    applications: ['Moules d’injection et de thermoformage', 'Plateaux de presses chauffantes', 'Mâchoires de soudure d’emballage', 'Outillages et matrices'],
    sectors: ['Plasturgie', 'Presses chauffantes', 'Emballage industriel'],
    quoteInfo: ['Diamètre et longueur', 'Type et longueur des sorties', 'Alésage de la pièce', ...standardQuote],
    faq: [
      { q: 'Faut-il un ajustement précis ?', a: 'Oui, un bon ajustement dans l’alésage améliore l’échange de chaleur et la durée de vie de la cartouche.' },
      { q: 'Pouvez-vous fournir de petites quantités ?', a: 'Oui, nous fabriquons à l’unité comme en série.' },
    ],
    related: ['colliers-chauffants', 'accessoires-regulation', 'resistances-silicone'],
    seo: 'Cartouches chauffantes sur mesure pour moules, presses et soudure. Fabrication à Casablanca.',
  },
  {
    slug: 'barillets',
    title: 'Barillets',
    detail: 'Éléments compacts pour le chauffage de fluides et de surfaces.',
    art: 'barillet',
    tags: ['Sur mesure'],
    intro:
      'Les barillets sont des éléments chauffants compacts, utilisés lorsque l’encombrement est limité. Nous les fabriquons selon les dimensions et la puissance de votre application.',
    variants: [
      { name: 'Barillets standards', text: 'Formats courants pour le remplacement rapide.' },
      { name: 'Barillets sur mesure', text: 'Dimensions et raccordement adaptés à votre équipement.' },
    ],
    applications: ['Équipements compacts', 'Chauffage de fluides', 'Remplacement de pièces d’origine'],
    sectors: ['Industries à process chauffant', 'Métiers de bouche'],
    quoteInfo: ['Dimensions', 'Type de raccordement', 'Application', ...standardQuote],
    faq: [
      { q: 'Quelle température maximale ?', a: 'Elle dépend du modèle et de l’application : contactez-nous avec votre besoin, nous vous confirmons la solution adaptée.' },
    ],
    related: ['thermoplongeurs', 'cartouches-chauffantes', 'accessoires-regulation'],
    seo: 'Barillets chauffants standards et sur mesure. Fabrication à Casablanca.',
  },
  {
    slug: 'resistances-formables',
    title: 'Résistances formables et fil boudiné',
    detail: 'Mises en forme selon la géométrie de votre équipement.',
    art: 'formable',
    tags: ['Formables', 'Fil boudiné'],
    intro:
      'Les résistances formables épousent la forme de votre équipement. Le fil boudiné, enroulé en spirale, équipe les fours, radiants et appareils de chauffage où la chaleur doit être répartie.',
    variants: [
      { name: 'Résistances formables', text: 'Mises en forme selon votre plan, pour les géométries complexes.' },
      { name: 'Fil boudiné', text: 'Spirales de fil résistif pour fours et éléments rayonnants.' },
    ],
    applications: ['Fours et étuves', 'Plaques et surfaces chauffantes', 'Appareils de chauffage', 'Réparation d’équipements existants'],
    sectors: ['Métiers de bouche', 'Industries à process chauffant'],
    quoteInfo: ['Forme souhaitée (plan ou photo)', 'Longueur développée', 'Diamètre de spire pour le fil boudiné', ...standardQuote],
    faq: [
      { q: 'Pouvez-vous réparer un four avec du fil boudiné ?', a: 'Oui, nous fabriquons le fil boudiné aux dimensions de votre four d’après la pièce d’origine.' },
    ],
    related: ['resistances-blindees-ailettes', 'infrarouge-quartz', 'matelas-isolation'],
    seo: 'Résistances formables et fil boudiné sur mesure pour fours et appareils. Fabrication à Casablanca.',
  },
  {
    slug: 'infrarouge-quartz',
    title: 'Infrarouge et tubes quartz',
    detail: 'Émetteurs pour séchage, cuisson et chauffe sans contact.',
    art: 'infrarouge',
    tags: ['Infrarouge', 'Quartz'],
    intro:
      'L’infrarouge chauffe directement la surface du produit, sans chauffer l’air autour. C’est une solution rapide pour le séchage, la cuisson et le thermoformage.',
    variants: [
      { name: 'Émetteurs infrarouge', text: 'Pour le séchage et le chauffage de surfaces.' },
      { name: 'Résistances sous tube quartz', text: 'Montée en température rapide, chauffe sans contact.' },
    ],
    applications: ['Séchage de peintures et d’encres', 'Thermoformage', 'Cuisson et maintien au chaud', 'Tunnels de rétraction'],
    sectors: ['Emballage industriel', 'Plasturgie', 'Métiers de bouche'],
    quoteInfo: ['Longueur et type de culot', 'Surface à chauffer', 'Distance au produit', ...standardQuote],
    faq: [
      { q: 'L’infrarouge convient-il à mon produit ?', a: 'Il convient bien aux surfaces et aux produits fins. Décrivez votre produit, nous vous orientons.' },
    ],
    related: ['resistances-blindees-ailettes', 'resistances-formables', 'accessoires-regulation'],
    seo: 'Émetteurs infrarouge et résistances sous tube quartz pour séchage et thermoformage. Casablanca.',
  },
  {
    slug: 'resistances-silicone',
    title: 'Résistances silicone et bâches',
    detail: 'Éléments souples pour surfaces planes, cuves et fûts.',
    art: 'silicone',
    tags: ['Silicone', 'Bâches pour fûts'],
    intro:
      'Fines et souples, les résistances plates sous silicone se collent ou se fixent sur des surfaces planes ou courbes. Les bâches chauffantes enveloppent les fûts pour maintenir leur contenu à température.',
    variants: [
      { name: 'Résistances plates silicone', text: 'Pour les plaques, cuves et surfaces à chauffer uniformément.' },
      { name: 'Bâches pour fûts', text: 'Pour fluidifier ou protéger du froid le contenu des fûts.' },
    ],
    applications: ['Plaques et plateaux', 'Cuves et réservoirs', 'Fûts d’huile, de graisse ou de produits visqueux', 'Protection hors gel'],
    sectors: ['Industries à process chauffant', 'Traitement de surface'],
    quoteInfo: ['Dimensions de la surface', 'Mode de fixation (adhésif, sangles…)', 'Diamètre du fût pour les bâches', ...standardQuote],
    faq: [
      { q: 'Peut-on la poser sur une surface courbe ?', a: 'Oui, la résistance silicone est souple et s’adapte aux surfaces courbes.' },
    ],
    related: ['matelas-isolation', 'colliers-chauffants', 'accessoires-regulation'],
    seo: 'Résistances chauffantes silicone et bâches pour fûts sur mesure. Casablanca.',
  },
  {
    slug: 'matelas-isolation',
    title: 'Matelas d’isolation',
    detail: 'Réduire les pertes de chaleur et protéger les opérateurs.',
    art: 'isolation',
    tags: ['Démontables', 'Sur mesure'],
    intro:
      'Les matelas d’isolation thermique enveloppent les fourreaux, vannes et tuyauteries chaudes. Ils réduisent la consommation d’énergie et protègent les opérateurs des brûlures.',
    variants: [
      { name: 'Matelas démontables', text: 'Se retirent facilement pour la maintenance.' },
      { name: 'Housses sur mesure', text: 'Coupées selon la forme de votre équipement.' },
    ],
    applications: ['Fourreaux de presses', 'Vannes et brides', 'Tuyauteries chaudes', 'Cuves'],
    sectors: ['Plasturgie', 'Industries à process chauffant'],
    quoteInfo: ['Dimensions de la pièce à isoler', 'Température de surface', 'Mode de fermeture souhaité', 'Quantité'],
    faq: [
      { q: 'Quel gain en énergie ?', a: 'Il dépend de l’installation, mais isoler les surfaces chaudes réduit nettement les pertes et la chaleur dans l’atelier.' },
    ],
    related: ['colliers-chauffants', 'resistances-silicone', 'accessoires-regulation'],
    seo: 'Matelas d’isolation thermique sur mesure pour fourreaux, vannes et tuyauteries. Casablanca.',
  },
  {
    slug: 'accessoires-regulation',
    title: 'Accessoires et régulation',
    detail: 'Thermostats, régulateurs, sondes, câbles, prises et bornes.',
    art: 'accessoires',
    tags: ['Thermostats', 'Sondes', 'Câbles'],
    intro:
      'Une résistance a besoin d’être bien raccordée et bien régulée. Nous fournissons les accessoires pour installer, piloter et sécuriser vos éléments chauffants.',
    variants: [
      { name: 'Régulation', text: 'Thermostats, régulateurs de température et sondes.' },
      { name: 'Raccordement', text: 'Prises, bornes, câbles et gaines haute température.' },
    ],
    applications: ['Régulation de bains et de cuves', 'Contrôle de température des moules', 'Raccordement des résistances', 'Remplacement de pièces'],
    sectors: ['Tous secteurs'],
    quoteInfo: ['Type d’accessoire', 'Plage de température', 'Tension et intensité', 'Quantité'],
    faq: [
      { q: 'Pouvez-vous livrer la résistance avec sa régulation ?', a: 'Oui, nous pouvons fournir l’ensemble : élément chauffant, sonde et régulateur.' },
    ],
    related: ['thermoplongeurs', 'cartouches-chauffantes', 'colliers-chauffants'],
    seo: 'Thermostats, régulateurs, sondes, câbles et accessoires pour résistances chauffantes. Casablanca.',
  },
  {
    slug: 'consommables',
    title: 'Consommables',
    detail: 'Anti-adhérent silicone, graisses haute température et alimentaires.',
    art: 'consommables',
    tags: ['Anti-adhérent', 'Graisses'],
    intro:
      'Les consommables pour l’entretien de vos équipements chauffants et de production : produits anti-adhérents et graisses adaptées aux hautes températures et au contact alimentaire.',
    variants: [
      { name: 'Anti-adhérent au silicone', text: 'Pour faciliter le démoulage et éviter les collages.' },
      { name: 'Graisses haute température', text: 'Pour les pièces mécaniques exposées à la chaleur.' },
      { name: 'Graisses alimentaires', text: 'Pour les équipements en contact avec les aliments.' },
    ],
    applications: ['Moules et outillages', 'Machines d’emballage', 'Équipements agroalimentaires', 'Maintenance'],
    sectors: ['Plasturgie', 'Métiers de bouche', 'Emballage industriel'],
    quoteInfo: ['Produit souhaité', 'Conditionnement', 'Quantité'],
    faq: [
      { q: 'Livrez-vous en petites quantités ?', a: 'Oui, contactez-nous pour connaître les conditionnements disponibles.' },
    ],
    related: ['accessoires-regulation', 'cartouches-chauffantes', 'colliers-chauffants'],
    seo: 'Anti-adhérent silicone, graisses haute température et alimentaires. Casablanca.',
  },
]

export const getProduct = (slug: string) => productFamilies.find((p) => p.slug === slug)
