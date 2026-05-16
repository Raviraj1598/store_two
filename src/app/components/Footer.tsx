import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--luxury-maroon)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[var(--luxury-gold)] rounded-full flex items-center justify-center">
                <span className="text-[var(--luxury-maroon)] text-xl">✦</span>
              </div>
              <h3 className="text-xl">ROYAL<span className="text-[var(--luxury-gold)]">GARBA</span></h3>
            </div>
            <p className="text-white/70 mb-4">
              Premium ethnic wear celebrating Gujarati heritage with modern elegance. Handcrafted collections for every celebration.
            </p>
            <div className="flex gap-3">
              <button className="p-2 bg-white/10 rounded-full hover:bg-[var(--luxury-gold)] transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-2 bg-white/10 rounded-full hover:bg-[var(--luxury-gold)] transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="p-2 bg-white/10 rounded-full hover:bg-[var(--luxury-gold)] transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-2 bg-white/10 rounded-full hover:bg-[var(--luxury-gold)] transition-colors">
                <Youtube className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4 text-[var(--luxury-gold)]">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-[var(--luxury-gold)] transition-colors">Chaniya Choli</a></li>
              <li><a href="#" className="text-white/70 hover:text-[var(--luxury-gold)] transition-colors">Lehenga Choli</a></li>
              <li><a href="#" className="text-white/70 hover:text-[var(--luxury-gold)] transition-colors">Wedding Collection</a></li>
              <li><a href="#" className="text-white/70 hover:text-[var(--luxury-gold)] transition-colors">Kediyu & Kurta</a></li>
              <li><a href="#" className="text-white/70 hover:text-[var(--luxury-gold)] transition-colors">Navratri Special</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4 text-[var(--luxury-gold)]">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-[var(--luxury-gold)] transition-colors">Track Order</a></li>
              <li><a href="#" className="text-white/70 hover:text-[var(--luxury-gold)] transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-white/70 hover:text-[var(--luxury-gold)] transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-[var(--luxury-gold)] transition-colors">Custom Orders</a></li>
              <li><a href="#" className="text-white/70 hover:text-[var(--luxury-gold)] transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4 text-[var(--luxury-gold)]">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--luxury-gold)] mt-1 flex-shrink-0" />
                <span className="text-white/70">123 Heritage Street, Ahmedabad, Gujarat 380001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--luxury-gold)] flex-shrink-0" />
                <span className="text-white/70">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--luxury-gold)] flex-shrink-0" />
                <span className="text-white/70">info@royalgarba.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">© 2026 RoyalGarba. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-[var(--luxury-gold)] transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-[var(--luxury-gold)] transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-[var(--luxury-gold)] transition-colors">Shipping Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
