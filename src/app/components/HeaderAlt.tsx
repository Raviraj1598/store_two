import { Search, Heart, ShoppingBag, User, ChevronDown, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function HeaderAlt() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="bg-gradient-to-r from-[var(--luxury-gold)] to-[var(--luxury-maroon)] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <span>Free Shipping on Orders Above ₹2999</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-[var(--luxury-cream)] transition-colors">Track Order</a>
              <a href="#" className="hover:text-[var(--luxury-cream)] transition-colors">Custom Orders</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--luxury-maroon)] via-[var(--luxury-red)] to-[var(--luxury-gold)] rounded-lg flex items-center justify-center transform rotate-45">
                  <span className="text-white text-2xl transform -rotate-45">સ</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--luxury-maroon)] to-[var(--luxury-gold)] bg-clip-text text-transparent">
                  SANSKRITI
                </h1>
                <p className="text-xs text-gray-500 tracking-widest">ETHNIC COUTURE</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              <div className="relative group">
                <button className="flex items-center gap-1 text-[var(--luxury-maroon)] hover:text-[var(--luxury-gold)] transition-colors">
                  Women
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center gap-1 text-[var(--luxury-maroon)] hover:text-[var(--luxury-gold)] transition-colors">
                  Men
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <a href="#" className="text-[var(--luxury-maroon)] hover:text-[var(--luxury-gold)] transition-colors">Wedding</a>
              <a href="#" className="text-[var(--luxury-maroon)] hover:text-[var(--luxury-gold)] transition-colors">Navratri</a>
              <a href="#" className="text-[var(--luxury-maroon)] hover:text-[var(--luxury-gold)] transition-colors">New Arrivals</a>
              <a href="#" className="px-4 py-2 bg-[var(--luxury-red)] text-white rounded-lg hover:bg-[var(--luxury-maroon)] transition-colors">Sale</a>
            </nav>

            <div className="flex items-center gap-3">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-[var(--luxury-gold)] w-64 transition-all"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              <button className="relative p-2 hover:bg-[var(--luxury-cream)] rounded-full transition-colors">
                <Heart className="w-5 h-5 text-[var(--luxury-maroon)]" />
                <span className="absolute -top-1 -right-1 bg-[var(--luxury-red)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">5</span>
              </button>
              <button className="p-2 hover:bg-[var(--luxury-cream)] rounded-full transition-colors">
                <User className="w-5 h-5 text-[var(--luxury-maroon)]" />
              </button>
              <button className="relative p-2 bg-[var(--luxury-maroon)] text-white rounded-full hover:bg-[var(--luxury-red)] transition-colors">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-[var(--luxury-gold)] text-[var(--luxury-maroon)] text-xs rounded-full w-5 h-5 flex items-center justify-center">4</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
