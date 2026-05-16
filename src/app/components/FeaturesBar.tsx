import { Truck, Shield, Sparkles, Headphones } from 'lucide-react';

export function FeaturesBar() {
  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders above ₹2999'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: '100% Safe & Secure'
    },
    {
      icon: Sparkles,
      title: 'Handcrafted',
      description: 'Premium Quality Guaranteed'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'WhatsApp & Call Support'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-[var(--luxury-cream)] to-white py-8 border-y border-[var(--luxury-maroon)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--luxury-maroon)] to-[var(--luxury-red)] rounded-full flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-[var(--luxury-maroon)] text-sm">{feature.title}</h4>
                <p className="text-xs text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
