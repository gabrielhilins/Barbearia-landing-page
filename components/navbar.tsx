"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiCalendar } from "react-icons/hi";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#profissionais", label: "Profissionais" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#galeria", label: "Galeria" },
  { href: "#blog", label: "Blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-obsidian/95 backdrop-blur-md border-b border-slate-light/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-silver tracking-wider">
              NOIR <span className="text-copper">BARBER</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  relative
                  text-silver-dark hover:text-copper
                  transition-colors duration-300
                  text-sm uppercase tracking-widest
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0
                  after:bg-copper
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Link
              href="/agendar"
              className="
                group
                bg-copper hover:bg-copper-light
                text-obsidian font-semibold
                px-6 py-3 rounded-md
                transition-all duration-300
                text-sm uppercase tracking-wider
                flex items-center gap-2
              "
            >
              <HiCalendar className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              Agendar Horário
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-silver hover:text-copper transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-obsidian-light border-t border-slate-light/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="
                    block
                    text-silver-dark hover:text-copper
                    transition-colors duration-300
                    text-sm uppercase tracking-widest
                    py-2
                  "
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA Mobile */}
              <Link
                href="/agendar"
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  group
                  mt-4
                  bg-copper hover:bg-copper-light
                  text-obsidian font-semibold
                  px-6 py-3 rounded-md
                  transition-all duration-300
                  text-sm uppercase tracking-wider
                  flex items-center justify-center gap-2
                "
              >
                <HiCalendar className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                Agendar Horário
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
