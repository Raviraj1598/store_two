import { motion } from 'motion/react';

interface CategoryCardProps {
  title: string;
  image: string;
  itemCount: number;
}

export function CategoryCard({ title, image, itemCount }: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square shadow-lg"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl mb-1">{title}</h3>
        <p className="text-sm text-white/80">{itemCount}+ Styles</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <button className="px-6 py-3 bg-white text-[var(--luxury-maroon)] rounded-full shadow-xl hover:bg-[var(--luxury-gold)] hover:text-white transition-all">
          Explore Now
        </button>
      </motion.div>
    </motion.div>
  );
}
