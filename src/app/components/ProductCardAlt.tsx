import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface ProductCardAltProps {
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  colors?: string[];
  rating?: number;
}

export function ProductCardAlt({ image, title, price, originalPrice, badge, colors = [], rating = 4.5 }: ProductCardAltProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {badge && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-white text-[var(--luxury-maroon)] text-xs rounded-full shadow-lg backdrop-blur-md">
            {badge}
          </div>
        )}

        {discount > 0 && (
          <div className="absolute top-4 right-4 w-16 h-16 bg-[var(--luxury-red)] text-white rounded-full flex flex-col items-center justify-center shadow-lg">
            <span className="text-xs">Save</span>
            <span className="font-bold">{discount}%</span>
          </div>
        )}

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <button className="flex-1 px-4 py-3 bg-white text-[var(--luxury-maroon)] rounded-lg hover:bg-[var(--luxury-maroon)] hover:text-white transition-all shadow-lg flex items-center justify-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm">Add to Cart</span>
          </button>
          <button className="p-3 bg-white text-[var(--luxury-maroon)] rounded-lg hover:bg-[var(--luxury-gold)] hover:text-white transition-all shadow-lg">
            <Eye className="w-4 h-4" />
          </button>
        </motion.div>

        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-md rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
        >
          <Heart
            className={`w-5 h-5 ${isWishlisted ? 'text-[var(--luxury-red)] fill-[var(--luxury-red)]' : 'text-gray-400'}`}
          />
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-[var(--luxury-gold)] fill-[var(--luxury-gold)]' : 'text-gray-300'}`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({rating})</span>
        </div>

        <h3 className="text-[var(--luxury-maroon)] mb-3 line-clamp-2 min-h-[48px] leading-tight">
          {title}
        </h3>

        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-2xl text-[var(--luxury-maroon)]">₹{price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">₹{originalPrice.toLocaleString()}</span>
          )}
        </div>

        {colors.length > 0 && (
          <div className="flex gap-2 items-center">
            <span className="text-xs text-gray-500">Colors:</span>
            <div className="flex gap-1">
              {colors.map((color, index) => (
                <button
                  key={index}
                  className="w-5 h-5 rounded-full border-2 border-gray-200 hover:border-[var(--luxury-gold)] transition-colors"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
