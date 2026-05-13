"use client";

import { motion } from "framer-motion";
import { Instagram, Pinterest, Music, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1a1a1a] border-t border-white/10">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16 py-16 md:py-20">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12"
        >
          {/* Left: Brand */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl tracking-wider text-white">
              LUMIDH
            </h2>
            <div className="space-y-2">
              <p className="font-sans text-xs text-white/60 leading-relaxed">
                Fashion & Fragrance.
              </p>
              <p className="font-sans text-xs text-[#C5A059] leading-relaxed">
                Tenang. Tahan waktu. Anda.
              </p>
            </div>
          </div>

          {/* Center: Navigation */}
          <div>
            <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-white/80 mb-6">
              Navigasi
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="font-sans text-sm text-white/60 transition-colors duration-300 hover:text-[#C5A059]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#koleksi"
                  className="font-sans text-sm text-white/60 transition-colors duration-300 hover:text-[#C5A059]"
                >
                  Koleksi
                </a>
              </li>
              <li>
                <a
                  href="#cerita"
                  className="font-sans text-sm text-white/60 transition-colors duration-300 hover:text-[#C5A059]"
                >
                  Cerita
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281231572023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-white/60 transition-colors duration-300 hover:text-[#C5A059]"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Social */}
          <div>
            <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-white/80 mb-6">
              Ikuti Kami
            </h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 transition-all duration-300 hover:border-[#C5A059] hover:text-[#C5A059]"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 transition-all duration-300 hover:border-[#C5A059] hover:text-[#C5A059]"
              >
                <Pinterest size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 transition-all duration-300 hover:border-[#C5A059] hover:text-[#C5A059]"
              >
                <Music size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-[1px] bg-white/10 mb-6 md:mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-between"
        >
          <p className="font-sans text-xs text-white/50 tracking-wider">
            © 2026 Lumidh. Hak cipta dilindungi.
          </p>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 transition-all duration-300 hover:border-white/40 hover:text-white"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} strokeWidth={1.5} />
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
