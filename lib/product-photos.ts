// Photos of each product, shown in the gallery on its page and on its card.
//
// How to add them:
//   1. Put the files in public/produits/<slug>/  (e.g. public/produits/colliers-chauffants/1.jpg)
//   2. List them below in display order: face, 3/4, détail des connexions, en situation.
//      The first photo is the main one (also used on the product card); the second one
//      appears when the card is hovered.
//   3. Describe each photo in `alt` (read by Google and screen readers).
//
// A product with no photos keeps showing its technical drawing.
// Recommended: landscape 4:3, at least 2000 px wide, same background for every product.

export type ProductPhoto = { src: string; alt: string }

export const productPhotos: Record<string, ProductPhoto[]> = {
  // 'colliers-chauffants': [
  //   { src: '/produits/colliers-chauffants/1.jpg', alt: 'Collier chauffant mica, vue de face' },
  //   { src: '/produits/colliers-chauffants/2.jpg', alt: 'Collier chauffant mica, vue de trois quarts' },
  //   { src: '/produits/colliers-chauffants/3.jpg', alt: 'Bornes de raccordement du collier' },
  //   { src: '/produits/colliers-chauffants/4.jpg', alt: 'Collier monté sur le fourreau d’une presse' },
  // ],
}

export const getProductPhotos = (slug: string): ProductPhoto[] => productPhotos[slug] ?? []
