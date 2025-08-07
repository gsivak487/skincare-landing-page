import React from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAddToCart: (product: Product) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveFromCart: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  quantity,
  onAddToCart,
  onUpdateQuantity,
  onRemoveFromCart,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
        </div>

        {quantity === 0 ? (
          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                className="p-2 hover:bg-gray-100 transition-colors duration-200"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 py-2 font-semibold">{quantity}</span>
              <button
                onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                className="p-2 hover:bg-gray-100 transition-colors duration-200"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={() => onRemoveFromCart(product.id)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;