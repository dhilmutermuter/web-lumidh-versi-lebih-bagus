"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  const handleViewCollection = () => {
    const element = document.querySelector("#men");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wide"
          >
            Timeless Elegance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.3 }}
            className="font-sans text-sm md:text-base font-light tracking-[0.3em] uppercase"
          >
            Curated Fashion & Fragrance
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.6 }}
            onClick={handleViewCollection}
            className="mt-8 border border-white px-10 py-4 font-sans text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:bg-white hover:text-[#111111]"
          >
            View Collection
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
