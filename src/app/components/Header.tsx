import { Search, Heart, ShoppingBag, Menu, User } from 'lucide-react';
import { motion } from 'motion/react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[var(--luxury-maroon)]/10 shadow-sm">
      <div className="bg-[var(--luxury-maroon)] text-white py-2 px-4 text-center">
        <p className="text-sm">Navratri Special Sale | Up to 50% Off | Free Shipping on Orders Above ₹2999</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button className="lg:hidden p-2">
            <Menu className="w-6 h-6 text-[var(--luxury-maroon)]" />
          </button>

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--luxury-maroon)] to-[var(--luxury-red)] rounded-full flex items-center justify-center">
              <span className="text-[var(--luxury-gold)] text-xl">✦</span>
            </div>
            <h1 className="text-2xl font-bold text-[var(--luxury-maroon)] tracking-tight">
              ROYAL<span className="text-[var(--luxury-gold)]">GARBA</span>
            </h1>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-[var(--luxury-maroon)] hover:text-[var(--luxury-gold)] transition-colors">New Arrivals</a>
            <a href="#" className="text-[var(--luxury-maroon)] hover:text-[var(--luxury-gold)] transition-colors">Chaniya Choli</a>
            <a href="#" className="text-[var(--luxury-maroon)] hover:text-[var(--luxury-gold)] transition-colors">Lehenga</a>
            <a href="#" className="text-[var(--luxury-maroon)] hover:text-[var(--luxury-gold)] transition-colors">Wedding Collection</a>
            <a href="#" className="text-[var(--luxury-maroon)] hover:text-[var(--luxury-gold)] transition-colors">Men's Wear</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-[var(--luxury-cream)] rounded-full transition-colors">
              <Search className="w-5 h-5 text-[var(--luxury-maroon)]" />
            </button>
            <button className="p-2 hover:bg-[var(--luxury-cream)] rounded-full transition-colors relative">
              <Heart className="w-5 h-5 text-[var(--luxury-maroon)]" />
              <span className="absolute -top-1 -right-1 bg-[var(--luxury-red)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </button>
            <button className="p-2 hover:bg-[var(--luxury-cream)] rounded-full transition-colors">
              <User className="w-5 h-5 text-[var(--luxury-maroon)]" />
            </button>
            <button className="p-2 hover:bg-[var(--luxury-cream)] rounded-full transition-colors relative">
              <ShoppingBag className="w-5 h-5 text-[var(--luxury-maroon)]" />
              <span className="absolute -top-1 -right-1 bg-[var(--luxury-red)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
