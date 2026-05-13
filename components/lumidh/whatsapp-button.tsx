"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WHATSAPP_NUMBER = "6281231572023";

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 3.5 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-[#111111] text-white px-4 py-2 font-sans text-xs tracking-wide whitespace-nowrap">
          Chat with Lumidh
        </div>
      </div>

      {/* Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi Lumidh, I would like to know more about your collections.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center bg-[#111111] text-white border border-white/20 transition-all duration-300 hover:bg-white hover:text-[#111111] hover:border-[#111111]"
        aria-label="Chat with Lumidh on WhatsApp"
      >
        <Image
          src="/logo wa.png"
          alt="WhatsApp"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </a>
    </motion.div>
  );
}
