"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn } from "@/components/ui/motion-wrapper"
import { HiStar, HiChevronLeft, HiChevronRight } from "react-icons/hi"

const reviews = [
  {
    id: 1,
    name: "Marcos Ferreira",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Melhor barbearia da região. Atendimento pontual, ambiente muito agradável e o corte ficou exatamente como eu queria.",
  },
  {
    id: 2,
    name: "Pedro Almeida",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Profissionais de verdade. Já passei por várias barbearias e a NOIR é diferente. Acabamento impecável.",
  },
  {
    id: 3,
    name: "Thiago Mendes",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "O agendamento online facilita muito. Chego, sou atendido na hora e saio satisfeito. Recomendo demais.",
  },
  {
    id: 4,
    name: "Bruno Nascimento",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Minha barba nunca ficou tão bem feita. O Rafael é um artista com a navalha. Cliente fiel agora.",
  },
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section id="avaliacoes" className="py-20 sm:py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">Avaliações</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-silver mt-4">
              O que nossos <span className="text-copper">clientes dizem</span>
            </h2>
          </div>
        </FadeIn>

        {/* Reviews Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-slate rounded-xl p-8 sm:p-12"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <HiStar key={i} className="text-copper text-xl" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-silver text-lg sm:text-xl text-center leading-relaxed mb-8">
                  "{reviews[currentIndex].text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={reviews[currentIndex].avatar || "/placeholder.svg"}
                    alt={reviews[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-copper/30"
                  />
                  <div>
                    <p className="text-silver font-semibold">{reviews[currentIndex].name}</p>
                    <p className="text-silver-dark text-sm">Cliente NOIR BARBER</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute top-1/2 -left-4 sm:-left-12 -translate-y-1/2 w-10 h-10 bg-slate-light hover:bg-copper text-silver hover:text-obsidian rounded-full flex items-center justify-center transition-colors"
              aria-label="Review anterior"
            >
              <HiChevronLeft size={24} />
            </button>
            <button
              onClick={nextReview}
              className="absolute top-1/2 -right-4 sm:-right-12 -translate-y-1/2 w-10 h-10 bg-slate-light hover:bg-copper text-silver hover:text-obsidian rounded-full flex items-center justify-center transition-colors"
              aria-label="Próxima review"
            >
              <HiChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? "bg-copper w-6" : "bg-slate-light"
                }`}
                aria-label={`Ir para review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
