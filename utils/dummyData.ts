import { Hotel } from '@/types';

const amenities = ['wifi', 'pool', 'gym', 'restaurant'];
const propertyTypes = ['hotel', 'apartment', 'resort', 'villa'];

export function generateDummyHotels(count: number): Hotel[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `hotel-${i + 1}`,
    name: `Luxury Stay ${i + 1}`,
    description: `Experience unparalleled comfort and elegance at Luxury Stay ${i + 1}. Perfect for both business and leisure travelers.`,
    rating: Math.floor(Math.random() * 5) + 1,
    price: Math.floor(Math.random() * 300) + 100,
    image: `/images/adwa.jpg`,
    amenities: amenities.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 4) + 1),
    propertyType: propertyTypes[Math.floor(Math.random() * propertyTypes.length)],
  }));
}

