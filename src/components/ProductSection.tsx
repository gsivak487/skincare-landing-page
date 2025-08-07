import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductSectionProps {
  title: string;
  subtitle: string;
  products: Product[];
  getCartItemQuantity: (productId: number) => number;
  onAddToCart: (product: Product) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveFromCart: (productId: number) => void;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  subtitle,
  products,
  getCartItemQuantity,
  onAddToCart,
  onUpdateQuantity,
  onRemoveFromCart,
}) => {
  return (
    <section className="py-16 tm-5 bg-gray-400" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={getCartItemQuantity(product.id)}
              onAddToCart={onAddToCart}
              onUpdateQuantity={onUpdateQuantity}
              onRemoveFromCart={onRemoveFromCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;