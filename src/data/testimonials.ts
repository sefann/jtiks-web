export interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  comment: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Johnson',
    service: 'Luxury Facial Treatment',
    rating: 5,
    comment: 'Absolutely amazing experience! The facial treatment left my skin glowing and feeling incredibly refreshed. The staff is professional and the atmosphere is so relaxing.',
  },
  {
    id: 'testimonial-2',
    name: 'Emily Chen',
    service: 'Microblading',
    rating: 5,
    comment: 'I couldn\'t be happier with my microblading results! The attention to detail and the natural look achieved is exactly what I wanted. Highly recommend!',
  },
  {
    id: 'testimonial-3',
    name: 'Maria Rodriguez',
    service: 'Lip Blush',
    rating: 5,
    comment: 'The lip blush service exceeded my expectations. The color is perfect and looks so natural. The entire process was comfortable and the results are stunning.',
  },
  {
    id: 'testimonial-4',
    name: 'Jessica Williams',
    service: 'Anti-Aging Therapy',
    rating: 5,
    comment: 'Incredible results from the anti-aging therapy! My skin looks years younger and feels so smooth. The team at JTIKS truly knows what they\'re doing.',
  },
  {
    id: 'testimonial-5',
    name: 'Amanda Taylor',
    service: 'Brow Shaping & Tinting',
    rating: 5,
    comment: 'Best brow shaping I\'ve ever had! The tinting is perfect and my brows look amazing. The service is top-notch and the results speak for themselves.',
  },
];

