"use client";

import { motion } from "framer-motion";

export function PhilosophySection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-foreground">
            The Lumidh Philosophy
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="my-8 h-[1px] w-16 bg-accent origin-center"
          />

          <p className="max-w-xl font-sans text-base md:text-lg font-light leading-relaxed text-muted-foreground">
            Luxury is in the details, not the noise.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
