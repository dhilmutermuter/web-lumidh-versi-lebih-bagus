"use client";

import { motion } from "framer-motion";

const parfumeProducts = [
  {
    title: "Oud Wood Essence",
    description: "Deep, warm, and captivating",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Velvet Rose",
    description: "Soft, romantic, and timeless",
    image:
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Citrus Breeze",
    description: "Fresh, vibrant, and uplifting",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
  },
];

const WHATSAPP_NUMBER = "6281231572023";

export function ParfumeSection() {
  return (
    <section id="parfume" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-foreground">
            Signature Scents
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {parfumeProducts.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group text-center"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden mx-auto max-w-[320px]">
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              {/* Content */}
              <div className="mt-6 space-y-2">
                <h3 className="font-serif text-lg md:text-xl tracking-wide text-foreground">
                  {product.title}
                </h3>
                <p className="font-sans text-sm font-light text-muted-foreground">
                  {product.description}
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi Lumidh, I am interested in ${encodeURIComponent(product.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 border border-foreground px-8 py-3 font-sans text-xs tracking-[0.15em] uppercase text-foreground transition-all duration-500 hover:bg-foreground hover:text-background"
                >
                  Order via WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
