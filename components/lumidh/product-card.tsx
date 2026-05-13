"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  title: string;
  material: string;
  image: string;
  aspectRatio?: "portrait" | "square";
  index: number;
}

const WHATSAPP_NUMBER = "6281231572023";

export function ProductCard({
  title,
  material,
  image,
  aspectRatio = "portrait",
  index,
}: ProductCardProps) {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi Lumidh, I am interested in ${encodeURIComponent(title)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      {/* Image Container */}
      <div
        className={`relative overflow-hidden ${
          aspectRatio === "portrait" ? "aspect-[4/5]" : "aspect-square"
        }`}
      >
        <motion.img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      {/* Content */}
      <div className="mt-5 space-y-2">
        <h3 className="font-serif text-lg md:text-xl tracking-wide text-foreground">
          {title}
        </h3>
        <p className="font-sans text-xs font-light tracking-[0.1em] uppercase text-muted-foreground">
          {material}
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-3 font-sans text-xs tracking-[0.15em] uppercase text-foreground transition-colors duration-300 hover:text-accent"
        >
          <MessageCircle size={14} strokeWidth={1.5} />
          Inquire via WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
