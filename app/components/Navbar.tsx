"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    // <nav className="w-full bg-[#001a31] text-white shadow-md">
    <nav className="w-full bg-[#001a31] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          <span className="text-[#02a9f7]">FINTEK</span>POINT
        </Link>

        {/* Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#services" className="hover:text-cyan-400 transition">
            Services
          </a>
           <a href="#technology" className="hover:text-cyan-400 transition">
            Technology
          </a>
           <a href="#testimonial" className="hover:text-cyan-400 transition">
            Testimonials
          </a>
          <a href="#cases" className="hover:text-cyan-400 transition">
            Case Studies
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-block  bg-[#02a9f7] text-black px-5 py-2 rounded-md font-semibold hover:bg-cyan-300 transition"
        >
          Get In Touch
        </a>
      </div>
    </nav>
  );
}