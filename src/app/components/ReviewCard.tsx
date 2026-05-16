import { Star } from 'lucide-react';
import { motion } from 'motion/react';

interface ReviewCardProps {
  name: string;
  rating: number;
  review: string;
  image: string;
  date: string;
}

export function ReviewCard({ name, rating, review, image, date }: ReviewCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white p-6 rounded-xl shadow-md border border-[var(--luxury-maroon)]/10 hover:shadow-xl transition-all"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-[var(--luxury-gold)]"
        />
        <div className="flex-1">
          <h4 className="text-[var(--luxury-maroon)] mb-1">{name}</h4>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-[var(--luxury-gold)] fill-[var(--luxury-gold)]' : 'text-gray-300'}`}
              />
            ))}
          </div>
        </div>
        <span className="text-xs text-gray-400">{date}</span>
      </div>
      <p className="text-gray-600 leading-relaxed">{review}</p>
    </motion.div>
  );
}
