"use client";

import { motion } from "framer-motion";
import { ProductCard } from "./product-card";

const womenProducts = [
  {
    title: "Silk Evening Dress",
    material: "Pure Mulberry Silk",
    image: "/outfit wmn 1.jpg",
  },
  {
    title: "Tailored Wool Coat",
    material: "Virgin Merino Wool",
    image: "/outfit wmn 2.jpg",
  },
  {
    title: "Pleated Midi Skirt",
    material: "Japanese Crepe Fabric",
    image: "/outfit wmn 3.jpg",
  },
];

export function WomenSection() {
  return (
    <section id="women" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 font-serif text-3xl md:text-4xl italic tracking-wide text-foreground"
        >
          For Her
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {womenProducts.map((product, index) => (
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
