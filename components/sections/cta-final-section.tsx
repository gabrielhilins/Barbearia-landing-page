"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { HiArrowRight } from "react-icons/hi"

export function CTAFinalSection() {
  return (
    <section className="py-24 sm:py-32 bg-obsidian relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23B87333' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-silver mb-6 text-balance">
            Pronto para cortar o cabelo com <span className="text-copper">quem entende do assunto?</span>
          </h2>

          <p className="text-silver-dark text-lg mb-10 max-w-2xl mx-auto">
            Horários limitados. Agende com antecedência.
          </p>

          <Link
            href="/agendar"
            className="group inline-flex items-center gap-3 bg-copper hover:bg-copper-light text-obsidian font-semibold px-10 py-5 rounded-md transition-all duration-300 text-base uppercase tracking-wider"
          >
            Agendar Horário
            <HiArrowRight className="group-hover:translate-x-1 transition-transform text-xl" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
