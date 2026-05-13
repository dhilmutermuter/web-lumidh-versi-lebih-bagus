"use client";

import { motion } from "framer-motion";
import { ProductCard } from "./product-card";

const menProducts = [
  {
    title: "The Executive Blazer",
    material: "Italian Wool Blend",
    image: "/outfit1.jpg",
  },
  {
    title: "Minimalist Linen",
    material: "Premium Belgian Linen",
    image: "/outfit2.jpg",
  },
  {
    title: "Urban Chino",
    material: "Japanese Cotton Twill",
    image: "/outfit3.jpg",
  },
];

export function MenSection() {
  return (
    <section id="men" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 font-serif text-3xl md:text-4xl italic tracking-wide text-foreground"
        >
          For Him
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {menProducts.map((product, index) => (
            <ProductCard
              key={product.title}
              title={product.title}
              material={product.material}
              image={product.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
