"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowDown, HiArrowRight } from "react-icons/hi";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with B&W filter */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
        style={{
          backgroundImage: `url('/barbershop-interior-dark-moody-professional.jpg')`,
        }}
      />

      {/* Obsidian Overlay */}
      <div className="absolute inset-0 bg-obsidian/80" />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 via-transparent to-obsidian" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <span className="inline-block text-copper text-sm uppercase tracking-[0.3em] mb-6 font-medium">
            Barbearia Premium
          </span>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-silver leading-tight mb-6 text-balance">
            Corte de cabelo e barba com{" "}
            <span className="text-copper">atenção aos detalhes</span>
          </h1>

          {/* Subheadline */}
          <p className="text-silver-dark text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Profissionais experientes, ambiente confortável e agendamento
            rápido.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/agendar"
            className="group bg-copper hover:bg-copper-light text-obsidian font-semibold px-8 py-4 rounded-md transition-all duration-300 text-sm uppercase tracking-wider flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Agendar Horário
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#servicos"
            className="border border-silver/30 hover:border-copper text-silver hover:text-copper font-medium px-8 py-4 rounded-md transition-all duration-300 text-sm uppercase tracking-wider w-full sm:w-auto text-center"
          >
            Ver Serviços
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="text-copper"
        >
          <HiArrowDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
