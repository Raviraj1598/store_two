import { HeaderAlt } from './components/HeaderAlt';
import { HeroSplit } from './components/HeroSplit';
import { ProductCardAlt } from './components/ProductCardAlt';
import { CollectionBanner } from './components/CollectionBanner';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { motion } from 'motion/react';
import { Scissors, Sparkles, Package, Award, TrendingUp } from 'lucide-react';

export default function App() {
  const features = [
    {
      icon: Scissors,
      title: 'Custom Tailoring',
      description: 'Perfect fit guaranteed with expert alterations'
    },
    {
      icon: Package,
      title: 'Express Delivery',
      description: 'Fast & secure shipping across India'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Handpicked fabrics and authentic designs'
    },
    {
      icon: Sparkles,
      title: 'Exclusive Designs',
      description: 'Limited edition collections'
    }
  ];

  const trendingProducts = [
    {
      image: 'https://images.unsplash.com/photo-1742891602910-1b724ac6939c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMGNoYW5peWElMjBjaG9saSUyMHRyYWRpdGlvbmFsJTIwZ2FyYmElMjBuYXZyYXRyaXxlbnwxfHx8fDE3Nzg5MjUwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Royal Maroon Chaniya Choli with Traditional Mirror Work',
      price: 4999,
      originalPrice: 9999,
      badge: 'TRENDING',
      colors: ['#7a1c1c', '#c9a961', '#8b0000'],
      rating: 4.8
    },
    {
      image: 'https://images.unsplash.com/photo-1774437897985-9a7f1b7867a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjB3b21hbiUyMGNoYW5peWElMjBjaG9saSUyMHRyYWRpdGlvbmFsJTIwZ2FyYmElMjBuYXZyYXRyaXxlbnwxfHx8fDE3Nzg5MjUwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Multicolor Navratri Special Chaniya with Gold Embroidery',
      price: 5999,
      originalPrice: 11999,
      badge: 'HOT',
      colors: ['#ff6b6b', '#ffd700', '#4ecdc4'],
      rating: 4.9
    },
    {
      image: 'https://images.unsplash.com/photo-1654764746225-e63f5e90facd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBicmlkZSUyMGxlaGVuZ2ElMjB3ZWRkaW5nJTIwZXRobmljJTIwd2VhciUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3ODkyNTA3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Premium Bridal Red Lehenga with Zari and Sequin Work',
      price: 24999,
      originalPrice: 49999,
      colors: ['#8b0000', '#c9a961'],
      rating: 5.0
    },
    {
      image: 'https://images.unsplash.com/photo-1598899044014-895e928db374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxpbmRpYW4lMjB3b21hbiUyMGNoYW5peWElMjBjaG9saSUyMHRyYWRpdGlvbmFsJTIwZ2FyYmElMjBuYXZyYXRyaXxlbnwxfHx8fDE3Nzg5MjUwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Sunshine Yellow Chaniya Choli with Floral Patterns',
      price: 3999,
      originalPrice: 7999,
      badge: 'NEW',
      colors: ['#ffd700', '#fff8dc', '#daa520'],
      rating: 4.6
    },
    {
      image: 'https://images.unsplash.com/photo-1774437778651-b711670f3192?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxpbmRpYW4lMjB3b21hbiUyMGNoYW5peWElMjBjaG9saSUyMHRyYWRpdGlvbmFsJTIwZ2FyYmElMjBuYXZyYXRyaXxlbnwxfHx8fDE3Nzg5MjUwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Designer Blue Chaniya with Jewelry Set',
      price: 6999,
      originalPrice: 12999,
      colors: ['#1e3a8a', '#c9a961', '#ffffff'],
      rating: 4.7
    },
    {
      image: 'https://images.unsplash.com/photo-1617633150878-7df1d12a9a57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBicmlkZSUyMGxlaGVuZ2ElMjB3ZWRkaW5nJTIwZXRobmljJTIwd2VhciUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3ODkyNTA3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Elegant Wedding Lehenga with Heavy Embroidery',
      price: 18999,
      originalPrice: 34999,
      badge: 'SALE',
      colors: ['#8b0000', '#ffffff'],
      rating: 4.9
    }
  ];

  const featuredCollections = [
    {
      title: 'Navratri Garba Collection',
      subtitle: 'Limited Edition',
      description: 'Experience the vibrant spirit of Gujarat with our exclusive Navratri collection. Featuring intricate mirror work, bold colors, and traditional embroidery perfect for nine nights of celebration.',
      image: 'https://images.unsplash.com/photo-1774437897985-9a7f1b7867a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjB3b21hbiUyMGNoYW5peWElMjBjaG9saSUyMHRyYWRpdGlvbmFsJTIwZ2FyYmElMjBuYXZyYXRyaXxlbnwxfHx8fDE3Nzg5MjUwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Bridal Luxury',
      subtitle: 'Wedding Couture',
      description: 'Make your special day unforgettable with our premium bridal lehengas. Each piece is a masterpiece crafted with the finest fabrics, zari work, and intricate detailing fit for a queen.',
      image: 'https://images.unsplash.com/photo-1654764746225-e63f5e90facd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBicmlkZSUyMGxlaGVuZ2ElMjB3ZWRkaW5nJTIwZXRobmljJTIwd2VhciUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3ODkyNTA3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      reverse: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeaderAlt />
      <HeroSplit />

      <section className="py-20 bg-gradient-to-b from-white to-[var(--luxury-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--luxury-maroon)] to-[var(--luxury-gold)] rounded-2xl mb-4 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg text-[var(--luxury-maroon)] mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--luxury-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow-md mb-4">
              <TrendingUp className="w-4 h-4 text-[var(--luxury-gold)]" />
              <span className="text-sm text-[var(--luxury-maroon)]">Trending Now</span>
            </div>
            <h2 className="text-5xl text-[var(--luxury-maroon)] mb-4">Shop The Latest</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our most popular designs loved by thousands
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingProducts.map((product, index) => (
              <ProductCardAlt key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {featuredCollections.map((collection, index) => (
              <CollectionBanner key={index} {...collection} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[var(--luxury-cream)] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[var(--luxury-maroon)] to-[var(--luxury-red)] rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-12 lg:p-16 text-white flex flex-col justify-center"
              >
                <div className="inline-block px-4 py-2 bg-white/20 rounded-full mb-6 self-start">
                  <Sparkles className="w-5 h-5 inline mr-2" />
                  Custom Stitching Service
                </div>
                <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
                  Tailored To Perfection
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Get your dream outfit customized exactly to your measurements. Our master tailors ensure a perfect fit with premium fabrics and exquisite craftsmanship.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[var(--luxury-gold)] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Expert measurements & consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[var(--luxury-gold)] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Choose your own fabric & design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[var(--luxury-gold)] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Ready in 7-10 days</span>
                  </div>
                </div>
                <button className="px-8 py-4 bg-white text-[var(--luxury-maroon)] rounded-full hover:bg-[var(--luxury-gold)] hover:text-white transition-all shadow-xl self-start">
                  Book Appointment
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-full min-h-[400px] lg:min-h-0"
              >
                <img
                  src="https://images.unsplash.com/photo-1760287364328-e30221615f2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBldGhuaWMlMjBmYXNoaW9uJTIwc3RvcmUlMjBib3V0aXF1ZSUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3ODkyNTQyMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Custom Stitching"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />

      <Footer />
    </div>
  );
}