"use client"

import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/motion-wrapper"

const professionals = [
  {
    id: 1,
    name: "Carlos Silva",
    specialty: "Cortes Clássicos",
    experience: "8 anos de experiência",
    image: "/male-barber-professional-portrait-dark-background.jpg",
  },
  {
    id: 2,
    name: "Rafael Santos",
    specialty: "Barba & Acabamento",
    experience: "6 anos de experiência",
    image: "/male-barber-with-beard-professional-portrait.jpg",
  },
  {
    id: 3,
    name: "Lucas Oliveira",
    specialty: "Cortes Modernos",
    experience: "5 anos de experiência",
    image: "/young-male-barber-professional-stylish-portrait.jpg",
  },
  {
    id: 4,
    name: "André Costa",
    specialty: "Degradê & Fade",
    experience: "7 anos de experiência",
    image: "/skilled-male-barber-professional-portrait-tattoo.jpg",
  },
]

export function ProfessionalsSection() {
  return (
    <section id="profissionais" className="py-20 sm:py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">Nossa Equipe</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-silver mt-4">
              Profissionais <span className="text-copper">experientes</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {professionals.map((pro, index) => (
            <motion.div
              key={pro.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg">
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={pro.image || "/placeholder.svg"}
                    alt={pro.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-silver font-semibold text-lg">{pro.name}</h3>
                  <p className="text-copper text-sm font-medium">{pro.specialty}</p>
                  <p className="text-silver-dark text-xs mt-1">{pro.experience}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
