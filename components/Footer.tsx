import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { gymConfig } from '@/lib/gym-config';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Timetable', href: '/class-schedule' },
  { name: 'Contact', href: '/contact-us' },
  { name: 'Join Now', href: '/join' },
];

export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', href: gymConfig.social.instagram, icon: Instagram },
  ];
  return (
    <footer className="bg-black text-white border-t border-slate-800">
      <div className="content-width container-padding">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link
                href="/"
                className="flex w-fit items-center group mb-2"
              >
                <div className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={gymConfig.assets.horizontalLogo}
                    alt={`${gymConfig.name} Logo`}
                    fill
                    className="object-contain drop-shadow-lg inset-0 brightness-0 invert"
                    loading="lazy"
                  />
                </div>
              </Link>
              <p className="body-lg text-gray-400 mb-6 max-w-md">
                {gymConfig.description}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <Link
                    href="/contact-us#contact-map"
                    className="text-gray-400 hover:text-white transition-colors duration-300 break-words max-w-xs sm:max-w-xl"
                    aria-label={`View map on contact page: ${gymConfig.contact.address.full}`}
                  >
                    {gymConfig.contact.address.full}
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <a
                    href={`tel:${gymConfig.contact.phone.replace(/\s+/g, '')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label={`Call ${gymConfig.contact.phone}`}
                  >
                    {gymConfig.contact.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <a
                    href={`mailto:${gymConfig.contact.email}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 break-words"
                    aria-label={`Email ${gymConfig.contact.email}`}
                  >
                    {gymConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-white mb-6 text-lg">Quick Links</h3>
              <nav className="space-y-3">
                {navigation.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-white transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="font-bold text-white mb-6 text-lg flex items-center">
                <Clock className="w-5 h-5 text-white mr-2" />
                Opening Hours
              </h3>
              <div className="space-y-2 text-gray-400 mb-6">
                {Object.entries(gymConfig.hours.detailed).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span>{day}:</span>
                    <span className="text-white font-semibold">{hours}</span>
                  </div>
                ))}
              </div>

              {/* Social Links - Compact */}
              <div>
                <h4 className="font-bold text-white mb-3 text-lg">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      className="w-10 h-10 bg-slate-800 hover:bg-white hover:text-black rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <social.icon className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors duration-300" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="caption-md text-gray-400 mb-4 md:mb-0">
              © 2025 {gymConfig.name}. All rights reserved. Built for champions.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 caption-md">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}