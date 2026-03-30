import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-16">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* Column 1 - Brand */}
          <div>
            <div className="text-white text-2xl font-light tracking-[0.2em] mb-6">
              ARTZA
            </div>
            <p className="text-gray-400 max-w-xs">
              Curated collection of original artworks from talented artists worldwide.
            </p>
          </div>

          {/* Column 2 - Shop */}
          <div>
            <h3 className="text-white font-medium mb-5">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/shop" className="hover:text-white transition-colors">All Artworks</Link></li>
              <li><Link href="/shop?subject=landscape" className="hover:text-white transition-colors">Landscapes</Link></li>
              <li><Link href="/shop?subject=floral" className="hover:text-white transition-colors">Floral Art</Link></li>
              <li><Link href="/shop?medium=oil-paintings" className="hover:text-white transition-colors">Oil Paintings</Link></li>
            </ul>
          </div>

          {/* Column 3 - Explore */}
          <div>
            <h3 className="text-white font-medium mb-5">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/artists" className="hover:text-white transition-colors">Our Artists</Link></li>
              <li><Link href="/commissions" className="hover:text-white transition-colors">Commissions</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/journal" className="hover:text-white transition-colors">Art Journal</Link></li>
            </ul>
          </div>

          {/* Column 4 - Support */}
          <div>
            <h3 className="text-white font-medium mb-5">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/wishlist" className="hover:text-white transition-colors">Wishlist</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Artza. All rights reserved.</p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>

          <div className="mt-4 md:mt-0">
            Made with ❤️ for art lovers
          </div>
        </div>

      </div>
    </footer>
  );
}