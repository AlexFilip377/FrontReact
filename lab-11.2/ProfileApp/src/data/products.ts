export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality Bluetooth headphones with noise cancellation',
    price: 199.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Fitness tracker with heart rate monitor',
    price: 299.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300',
  },
  {
    id: '3',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with cushioned sole',
    price: 129.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300',
  },
  {
    id: '4',
    name: 'Coffee Maker',
    description: 'Automatic drip coffee maker with timer',
    price: 79.99,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=300',
  },
  {
    id: '5',
    name: 'Laptop Stand',
    description: 'Ergonomic aluminum laptop stand',
    price: 49.99,
    category: 'Office',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300',
  },
];