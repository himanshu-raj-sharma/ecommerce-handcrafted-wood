export interface MandirProduct {
  id: string;
  title: string;
  wood: 'Solid Teak' | 'Seasoned Sheesham' | 'Rosewood Finish';
  woodLabel: string;
  placement: 'Wall Mount' | 'Floor Standing' | 'Corner Unit';
  size: 'Compact < 3ft' | 'Medium 3-5ft' | 'Grand 5ft+';
  height: string;
  width: string;
  depth: string;
  bells: string;
  bellCount: number;
  lighting: string;
  drawer: string;
  price: string;
  numericPrice: number;
  image: string;
  featured: boolean;
  vastuTag: string;
  description: string;
  woodDescription: string;
  architecturalStyle: string;
}

export interface CustomMandirConfig {
  wood: string;
  type: string;
  height: number;
  width: number;
  depth: number;
  features: string[];
  name: string;
  phone: string;
  city: string;
}

export type TabType = 'home' | 'studio' | 'catalog' | 'craftsmanship' | 'custom' | 'wishlist';
