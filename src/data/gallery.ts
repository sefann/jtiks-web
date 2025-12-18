export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: 'skincare' | 'brows' | 'spmu' | 'all';
  type: 'image' | 'video';
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    image: '/images/gallery/skincare-1.jpg',
    title: 'Luxury Facial Results',
    category: 'skincare',
    type: 'image',
  },
  {
    id: 'gallery-2',
    image: '/images/gallery/brows-1.jpg',
    title: 'Microblading Transformation',
    category: 'brows',
    type: 'image',
  },
  {
    id: 'gallery-3',
    image: '/images/gallery/spmu-1.jpg',
    title: 'Lip Blush Enhancement',
    category: 'spmu',
    type: 'image',
  },
  {
    id: 'gallery-4',
    image: '/images/gallery/skincare-2.jpg',
    title: 'Anti-Aging Treatment',
    category: 'skincare',
    type: 'image',
  },
  {
    id: 'gallery-5',
    image: '/images/gallery/brows-2.jpg',
    title: 'Brow Shaping Artistry',
    category: 'brows',
    type: 'image',
  },
  {
    id: 'gallery-6',
    image: '/images/gallery/spmu-2.jpg',
    title: 'Eyeliner Enhancement',
    category: 'spmu',
    type: 'image',
  },
  {
    id: 'gallery-7',
    image: '/images/gallery/skincare-3.jpg',
    title: 'Hydrating Facial',
    category: 'skincare',
    type: 'image',
  },
  {
    id: 'gallery-8',
    image: '/images/gallery/brows-3.jpg',
    title: 'Brow Tinting Results',
    category: 'brows',
    type: 'image',
  },
];

