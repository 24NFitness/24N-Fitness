'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gymConfig } from '@/lib/gym-config';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Timetable', href: '/class-schedule' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Set initial scroll state based on current scroll position
    const checkInitialScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Check scroll position immediately on mount
    checkInitialScroll();
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    
    // Navigation now handled by Next.js routing
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl shadow-2xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="content-width container-padding">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center lg:flex-1">
            <Link 
              href="/" 
              className="flex items-center group"
            >
              <div className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={gymConfig.assets.logo}
                  alt={`${gymConfig.name} Logo`}
                  fill
                  className="object-contain drop-shadow-lg"
                  loading="lazy"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-10 lg:flex-1" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white font-semibold text-lg transition-all duration-300 relative group py-2"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full rounded-full"></div>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/join">
              <Button variant="primary" size="default">
                Free Trial
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-4 transition-all duration-300 rounded-xl hover:bg-white/10"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" aria-hidden="true" />
              ) : (
                <Menu className="w-7 h-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl rounded-b-3xl mt-2 shadow-2xl"
          >
            <div className="px-8 pt-8 pb-10 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block w-full text-left px-6 py-5 text-gray-300 hover:text-white heading-lg hover:bg-white/10 transition-all duration-300 rounded-2xl"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6">
                <Link href="/join">
                  <Button variant="primary" size="lg" className="w-full">
                    Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}