"use client"

import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/motion-wrapper"

const galleryImages = [
  {
    src: "/placeholder.svg?height=600&width=400",
    alt: "Interior da barbearia",
    span: "row-span-2",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Ferramentas de barbearia",
    span: "",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Produtos de qualidade",
    span: "",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Detalhe de corte",
    span: "",
  },
  {
    src: "/placeholder.svg?height=600&width=400",
    alt: "Ambiente da barbearia",
    span: "row-span-2",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Serviço de barba",
    span: "",
  },
]

export function GallerySection() {
  return (
    <section id="galeria" className="py-20 sm:py-28 bg-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">Galeria</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-silver mt-4">
              Experiência <span className="text-copper">NOIR BARBER</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg group ${image.span}`}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ filter: "sepia(10%) contrast(1.05)" }}
              />
              {/* Film grain overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
