export interface Masterclass {
  id: string;
  title: string;
  description: string;
  learnings: string[];
  duration: string;
  price: number;
  paystackLink: string;
}

export const masterclasses: Masterclass[] = [
  {
    id: 'masterclass-1',
    title: 'Advanced Skincare Techniques',
    description: 'Learn professional skincare techniques and product knowledge from industry experts.',
    learnings: [
      'Understanding skin types and conditions',
      'Product selection and application',
      'Treatment protocols',
      'Client consultation best practices',
    ],
    duration: '4 hours',
    price: 25000,
    paystackLink: 'https://paystack.com/pay/masterclass-skincare', // Placeholder
  },
  {
    id: 'masterclass-2',
    title: 'Brow Artistry Masterclass',
    description: 'Master the art of brow shaping, tinting, and microblading techniques.',
    learnings: [
      'Brow mapping and design',
      'Tinting techniques',
      'Microblading fundamentals',
      'Color theory and selection',
    ],
    duration: '6 hours',
    price: 35000,
    paystackLink: 'https://paystack.com/pay/masterclass-brows', // Placeholder
  },
  {
    id: 'masterclass-3',
    title: 'SPMU Fundamentals',
    description: 'Comprehensive training in Semi-Permanent Makeup application and safety protocols.',
    learnings: [
      'SPMU safety and hygiene',
      'Needle selection and techniques',
      'Color theory for SPMU',
      'Aftercare and touch-up protocols',
    ],
    duration: '8 hours',
    price: 45000,
    paystackLink: 'https://paystack.com/pay/masterclass-spmu', // Placeholder
  },
];

