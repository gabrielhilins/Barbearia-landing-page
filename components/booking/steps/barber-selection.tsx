"use client"

import { motion } from "framer-motion"
import { HiCheck, HiArrowRight, HiArrowLeft } from "react-icons/hi"

interface Barber {
  id: number
  name: string
  specialty: string
  image: string
}

const barbers: Barber[] = [
  {
    id: 1,
    name: "Carlos Silva",
    specialty: "Cortes Clássicos",
    image: "/male-barber-professional-portrait-dark-background.jpg",
  },
  {
    id: 2,
    name: "Rafael Santos",
    specialty: "Barba & Acabamento",
    image: "/male-barber-with-beard-professional-portrait.jpg",
  },
  {
    id: 3,
    name: "Lucas Oliveira",
    specialty: "Cortes Modernos",
    image: "/young-male-barber-professional-stylish-portrait.jpg",
  },
  {
    id: 4,
    name: "André Costa",
    specialty: "Degradê & Fade",
    image: "/skilled-male-barber-professional-portrait-tattoo.jpg",
  },
]

interface BarberSelectionProps {
  selectedBarber: Barber | null
  onSelect: (barber: Barber) => void
  onNext: () => void
  onBack: () => void
}

export function BarberSelection({ selectedBarber, onSelect, onNext, onBack }: BarberSelectionProps) {
  return (
    <div>
      <h2 className="text-xl text-silver font-semibold mb-2">Escolha o Profissional</h2>
      <p className="text-silver-dark text-sm mb-6">Selecione o barbeiro de sua preferência.</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {barbers.map((barber) => (
          <motion.button
            key={barber.id}
            onClick={() => onSelect(barber)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative overflow-hidden rounded-lg border-2 transition-all ${
              selectedBarber?.id === barber.id ? "border-copper" : "border-slate-light/30 hover:border-copper/50"
            }`}
          >
            {selectedBarber?.id === barber.id && (
              <div className="absolute top-2 right-2 z-10 w-6 h-6 bg-copper rounded-full flex items-center justify-center">
                <HiCheck className="text-obsidian text-sm" />
              </div>
            )}

            <div className="aspect-square overflow-hidden">
              <img src={barber.image || "/placeholder.svg"} alt={barber.name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h3 className="text-silver font-semibold text-sm">{barber.name}</h3>
              <p className="text-copper text-xs">{barber.specialty}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-silver hover:text-copper transition-colors">
          <HiArrowLeft />
          Voltar
        </button>
        <button
          onClick={onNext}
          disabled={!selectedBarber}
          className="flex items-center gap-2 bg-copper hover:bg-copper-light disabled:bg-slate-light disabled:cursor-not-allowed text-obsidian font-semibold px-6 py-3 rounded-md transition-colors"
        >
          Continuar
          <HiArrowRight />
        </button>
      </div>
    </div>
  )
}
