"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Treatments', href: '/treatments' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'Hospitals', href: '/hospitals' },
  { name: 'Doctors', href: '/doctors' },
  { name: 'Cost Guide', href: '/cost' },
  { name: 'Travel Support', href: '/travel-support' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link href="/" className="logo">
          Genesis Voyage
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={pathname === link.href ? 'text-primary' : ''}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact" className="btn btn-primary">
            Get Free Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-[80px] left-0 w-full p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-medium p-2 ${pathname === link.href ? 'text-primary' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn btn-primary w-full"
            onClick={() => setIsOpen(false)}
          >
            Get Free Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
