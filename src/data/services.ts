export interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: 'skincare' | 'brows' | 'spmu';
  image: string;
  fullDescription?: string;
  benefits?: string[];
}

export const services: Service[] = [
  {
    id: 'skincare-1',
    title: 'Luxury Facial Treatment',
    description: 'A deeply hydrating and rejuvenating facial treatment using premium skincare products tailored to your skin type.',
    fullDescription: 'Our Luxury Facial Treatment is a comprehensive skincare experience designed to deeply hydrate, rejuvenate, and restore your skin\'s natural radiance. Using premium, carefully selected products tailored to your unique skin type, this treatment addresses specific concerns while providing a relaxing, spa-like experience.',
    duration: '90 minutes',
    category: 'skincare',
    image: '/images/services/luxury-facial.jpg',
    benefits: [
      'Deep hydration and moisture restoration',
      'Improved skin texture and tone',
      'Reduced appearance of fine lines',
      'Enhanced skin radiance and glow',
      'Customized treatment for your skin type'
    ],
  },
  {
    id: 'skincare-2',
    title: 'Anti-Aging Therapy',
    description: 'Advanced anti-aging treatment targeting fine lines, wrinkles, and loss of elasticity for youthful, radiant skin.',
    fullDescription: 'Our Anti-Aging Therapy is a powerful, results-driven treatment that targets the visible signs of aging. Using advanced techniques and premium anti-aging products, this comprehensive therapy works to reduce fine lines, wrinkles, and improve skin elasticity for a more youthful, radiant complexion.',
    duration: '120 minutes',
    category: 'skincare',
    image: '/images/services/anti-aging.jpg',
    benefits: [
      'Reduced fine lines and wrinkles',
      'Improved skin elasticity and firmness',
      'Enhanced collagen production',
      'Brighter, more even skin tone',
      'Long-lasting anti-aging results'
    ],
  },
  {
    id: 'brows-1',
    title: 'Brow Shaping & Tinting',
    description: 'Professional brow shaping and tinting to enhance your natural features and create the perfect arch.',
    fullDescription: 'Achieve perfectly shaped, defined brows with our professional Brow Shaping & Tinting service. Our expert technicians analyze your facial features to create the ideal brow shape that complements your natural beauty, then apply professional-grade tinting for enhanced definition and fullness.',
    duration: '45 minutes',
    category: 'brows',
    image: '/images/services/brow-shaping.jpg',
    benefits: [
      'Perfectly shaped brows for your face',
      'Enhanced brow definition and fullness',
      'Professional color matching',
      'Long-lasting tint results',
      'Expert consultation included'
    ],
  },
  {
    id: 'brows-2',
    title: 'Microblading',
    description: 'Semi-permanent eyebrow enhancement using fine strokes to create natural-looking, fuller brows.',
    fullDescription: 'Transform your brows with our expert Microblading service. Using fine, precise strokes that mimic natural hair, we create fuller, perfectly shaped eyebrows that last. This semi-permanent solution is ideal for those seeking low-maintenance, natural-looking brows that enhance your facial features.',
    duration: '120 minutes',
    category: 'brows',
    image: '/images/services/microblading.jpg',
    benefits: [
      'Natural-looking hair-like strokes',
      'Semi-permanent results (12-18 months)',
      'Customized brow design',
      'Low maintenance solution',
      'Perfect for sparse or over-plucked brows'
    ],
  },
  {
    id: 'spmu-1',
    title: 'Lip Blush',
    description: 'Semi-permanent lip color enhancement that adds natural tint and definition to your lips.',
    fullDescription: 'Enhance your natural lip color and definition with our Lip Blush service. This semi-permanent makeup technique adds a subtle, natural-looking tint to your lips, creating fuller-looking lips with enhanced definition. Perfect for those who want to wake up with beautiful, defined lips every day.',
    duration: '120 minutes',
    category: 'spmu',
    image: '/images/services/lip-blush.jpg',
    benefits: [
      'Natural-looking lip color enhancement',
      'Improved lip definition and shape',
      'Semi-permanent results (2-3 years)',
      'Custom color matching',
      'Reduced need for daily lipstick'
    ],
  },
  {
    id: 'spmu-2',
    title: 'Eyeliner Enhancement',
    description: 'Semi-permanent eyeliner application for defined, long-lasting eye definition.',
    fullDescription: 'Define your eyes with our Semi-Permanent Eyeliner Enhancement. Whether you prefer a subtle lash line enhancement or a more dramatic look, our expert technicians create the perfect eyeliner that complements your eye shape and personal style. Wake up every day with perfectly defined eyes.',
    duration: '90 minutes',
    category: 'spmu',
    image: '/images/services/eyeliner.jpg',
    benefits: [
      'Perfectly defined eyes every day',
      'Semi-permanent results (2-3 years)',
      'Customizable thickness and style',
      'Waterproof and smudge-proof',
      'Saves time on daily makeup routine'
    ],
  },
];

