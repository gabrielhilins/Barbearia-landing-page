"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/motion-wrapper"
import { HiArrowRight } from "react-icons/hi"

const services = [
  {
    id: 1,
    title: "Corte de Cabelo",
    description: "Corte personalizado de acordo com seu estilo e tipo de cabelo.",
    price: "R$ 45",
    image: "/mens-haircut-barbershop-professional.jpg",
  },
  {
    id: 2,
    title: "Barba",
    description: "Modelagem e acabamento com navalha para uma barba impecável.",
    price: "R$ 35",
    image: "/beard-trim-barbershop-professional-razor.jpg",
  },
  {
    id: 3,
    title: "Corte + Barba",
    description: "O combo completo para sair renovado.",
    price: "R$ 70",
    image: "/haircut-and-beard-barbershop-mens-grooming.jpg",
  },
  {
    id: 4,
    title: "Tratamento Capilar",
    description: "Hidratação e revitalização para cabelos mais saudáveis.",
    price: "R$ 55",
    image: "/hair-treatment-mens-scalp-massage-barbershop.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 sm:py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">Nossos Serviços</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-silver mt-4">
              Serviços em <span className="text-copper">destaque</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate rounded-lg overflow-hidden border border-slate-light/20 hover:border-copper/50 transition-all duration-300">
                {/* Image */}
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-silver font-semibold text-lg">{service.title}</h3>
                    <span className="text-copper font-bold whitespace-nowrap">{service.price}</span>
                  </div>
                  <p className="text-silver-dark text-sm mb-4 leading-relaxed">{service.description}</p>
                  <Link
                    href={`/agendar?servico=${service.id}`}
                    className="inline-flex items-center gap-2 text-copper hover:text-copper-light transition-colors text-sm font-medium group/link"
                  >
                    Agendar
                    <HiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
