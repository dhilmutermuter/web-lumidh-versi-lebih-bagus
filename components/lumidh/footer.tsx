"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "6281231572023";

export function Footer() {
  return (
    <footer 
      className="relative bg-[#111111] py-16 md:py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/footer-bg-placeholder.png')"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#111111]/70" />
      
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-8"
        >
          {/* Logo */}
          <h2 className="font-serif text-2xl md:text-3xl tracking-wider text-white">
            Lumidh.
          </h2>

          {/* WhatsApp Contact */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi Lumidh, I would like to know more about your collections.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-sans text-sm tracking-[0.15em] uppercase text-white/80 transition-colors duration-300 hover:text-[#C5A059]"
          >
            <MessageCircle size={16} strokeWidth={1.5} />
            Contact via WhatsApp
          </a>

          {/* Divider */}
          <div className="h-[1px] w-16 bg-white/20" />

          {/* Copyright */}
          <p className="font-sans text-xs tracking-wider text-white/50">
            © 2024 Lumidh. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
