import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

export function HeroSplit() {
  return (
    <div className="relative bg-gradient-to-br from-[var(--luxury-cream)] via-white to-[var(--luxury-gold)]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-6">
              <Star className="w-4 h-4 text-[var(--luxury-gold)] fill-[var(--luxury-gold)]" />
              <span className="text-sm text-[var(--luxury-maroon)]">Handcrafted Excellence Since 1985</span>
            </div>

            <h1 className="text-6xl font-bold text-[var(--luxury-maroon)] mb-6 leading-tight">
              Timeless
              <span className="block bg-gradient-to-r from-[var(--luxury-gold)] to-[var(--luxury-maroon)] bg-clip-text text-transparent">
                Elegance
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover our exquisite collection of traditional Gujarati wear, where heritage meets contemporary design. Premium Chaniya Choli, Lehenga, and festive ensembles crafted with love.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button className="px-8 py-4 bg-[var(--luxury-maroon)] text-white rounded-full hover:bg-[var(--luxury-red)] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
                Shop Collection
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-[var(--luxury-maroon)] text-[var(--luxury-maroon)] rounded-full hover:bg-[var(--luxury-maroon)] hover:text-white transition-all">
                Book Consultation
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl text-[var(--luxury-maroon)] mb-1">500+</div>
                <div className="text-sm text-gray-500">Designs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-[var(--luxury-maroon)] mb-1">50K+</div>
                <div className="text-sm text-gray-500">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-[var(--luxury-maroon)] mb-1">4.9★</div>
                <div className="text-sm text-gray-500">Rating</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1742891602910-1b724ac6939c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMGNoYW5peWElMjBjaG9saSUyMHRyYWRpdGlvbmFsJTIwZ2FyYmElMjBuYXZyYXRyaXxlbnwxfHx8fDE3Nzg5MjUwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Traditional Wear"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[var(--luxury-gold)] text-white text-sm rounded-full">
                    New
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1654764746225-e63f5e90facd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBicmlkZSUyMGxlaGVuZ2ElMjB3ZWRkaW5nJTIwZXRobmljJTIwd2VhciUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3ODkyNTA3OXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Wedding Collection"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-12">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1774437897985-9a7f1b7867a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjB3b21hbiUyMGNoYW5peWElMjBjaG9saSUyMHRyYWRpdGlvbmFsJTIwZ2FyYmElMjBuYXZyYXRyaXxlbnwxfHx8fDE3Nzg5MjUwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Festive Collection"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1598899044014-895e928db374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxpbmRpYW4lMjB3b21hbiUyMGNoYW5peWElMjBjaG9saSUyMHRyYWRpdGlvbmFsJTIwZ2FyYmElMjBuYXZyYXRyaXxlbnwxfHx8fDE3Nzg5MjUwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Designer Wear"
                    className="w-full h-80 object-cover"
                  />
                </motion.div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[var(--luxury-gold)]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[var(--luxury-maroon)]/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-2 h-2 bg-[var(--luxury-gold)] rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-[var(--luxury-maroon)] rounded-full animate-pulse" />
    </div>
  );
}
