import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1742891602910-1b724ac6939c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMGNoYW5peWElMjBjaG9saSUyMHRyYWRpdGlvbmFsJTIwZ2FyYmElMjBuYXZyYXRyaXxlbnwxfHx8fDE3Nzg5MjUwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Navratri Special Collection',
    subtitle: 'Traditional Chaniya Choli for Garba Nights',
    badge: '50% OFF'
  },
  {
    image: 'https://images.unsplash.com/photo-1654764746225-e63f5e90facd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBicmlkZSUyMGxlaGVuZ2ElMjB3ZWRkaW5nJTIwZXRobmljJTIwd2VhciUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3ODkyNTA3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Premium Wedding Lehenga',
    subtitle: 'Handcrafted with Royal Embroidery',
    badge: 'NEW'
  },
  {
    image: 'https://images.unsplash.com/photo-1774437791559-0482c24cc27a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjB3b21hbiUyMGNoYW5peWElMjBjaG9saSUyMHRyYWRpdGlvbmFsJTIwZ2FyYmElMjBuYXZyYXRyaXxlbnwxfHx8fDE3Nzg5MjUwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Festive Couple Collection',
    subtitle: 'Matching Outfits for Special Occasions',
    badge: 'TRENDING'
  }
];

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="relative h-[600px] overflow-hidden bg-[var(--luxury-cream)]">
      {heroSlides.map((slide, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={{
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1 : 1.1,
          }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{ pointerEvents: currentSlide === index ? 'auto' : 'none' }}
        >
          <div className="relative h-full w-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: currentSlide === index ? 1 : 0, x: currentSlide === index ? 0 : -50 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-2xl"
                >
                  <div className="inline-block mb-4 px-4 py-2 bg-[var(--luxury-gold)] text-[var(--luxury-maroon)] rounded-full">
                    {slide.badge}
                  </div>
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-white/90 mb-8">
                    {slide.subtitle}
                  </p>
                  <button className="px-8 py-4 bg-[var(--luxury-maroon)] text-white rounded-lg hover:bg-[var(--luxury-red)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Shop Now
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all border border-white/30"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all border border-white/30"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              currentSlide === index ? 'w-12 bg-[var(--luxury-gold)]' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
