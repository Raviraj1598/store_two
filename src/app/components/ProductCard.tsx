import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  rating?: number;
}

export function ProductCard({ image, title, price, originalPrice, badge, rating = 4.5 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-[var(--luxury-maroon)]/10"
    >
      <div className="relative overflow-hidden aspect-[3/4] bg-[var(--luxury-cream)]">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />

        {badge && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-[var(--luxury-red)] text-white text-xs rounded-full">
            {badge}
          </div>
        )}

        {discount > 0 && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-[var(--luxury-gold)] text-white text-xs rounded-full">
            {discount}% OFF
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-white rounded-full shadow-lg hover:bg-[var(--luxury-gold)] hover:text-white transition-colors"
          >
            <Eye className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`p-3 rounded-full shadow-lg transition-colors ${
              isWishlisted
                ? 'bg-[var(--luxury-red)] text-white'
                : 'bg-white hover:bg-[var(--luxury-gold)] hover:text-white'
            }`}
          >
            <Heart className="w-5 h-5" fill={isWishlisted ? 'currentColor' : 'none'} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-[var(--luxury-maroon)] text-white rounded-full shadow-lg hover:bg-[var(--luxury-red)] transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      <div className="p-4">
        <h3 className="text-[var(--luxury-maroon)] mb-2 line-clamp-2 h-12">{title}</h3>

        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-sm ${i < Math.floor(rating) ? 'text-[var(--luxury-gold)]' : 'text-gray-300'}`}>
              ★
            </span>
          ))}
          <span className="text-xs text-gray-500 ml-1">({rating})</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-2xl text-[var(--luxury-maroon)]">₹{price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">₹{originalPrice.toLocaleString()}</span>
          )}
        </div>

        <div className="mt-3 flex gap-2">
          <div className="flex-1 h-1 bg-[var(--luxury-gold)]/20 rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-[var(--luxury-gold)] rounded-full" />
          </div>
          <span className="text-xs text-gray-500">Few left</span>
        </div>
      </div>
    </motion.div>
  );
}
