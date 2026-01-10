"use client"

import { FadeIn } from "@/components/ui/motion-wrapper"
import { motion } from "framer-motion"
import { GiBeerBottle, GiRazor, GiSnowflake2 } from "react-icons/gi"
import { HiMusicNote, HiCalendar, HiCreditCard } from "react-icons/hi"

const differentials = [
  {
    icon: GiBeerBottle,
    title: "Bebida enquanto espera",
    description: "Cerveja, café ou água gelada, você escolhe.",
  },
  {
    icon: GiRazor,
    title: "Acabamento com navalha",
    description: "Detalhes finais que fazem toda a diferença.",
  },
  {
    icon: GiSnowflake2,
    title: "Ambiente climatizado",
    description: "Conforto em qualquer estação do ano.",
  },
  {
    icon: HiMusicNote,
    title: "Música ambiente",
    description: "Som de qualidade para uma experiência completa.",
  },
  {
    icon: HiCalendar,
    title: "Agendamento fácil",
    description: "Marque seu horário em segundos, sem complicação.",
  },
  {
    icon: HiCreditCard,
    title: "Pagamento antecipado",
    description: "Garanta seu horário com pagamento seguro.",
  },
]

export function DifferentialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">Diferenciais</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-silver mt-4">
              Por que escolher a <span className="text-copper">NOIR BARBER</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-obsidian-light p-6 rounded-lg border border-slate-light/20 hover:border-copper/50 transition-all duration-300 group"
            >
              <item.icon className="text-copper text-3xl mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-silver font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-silver-dark text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
