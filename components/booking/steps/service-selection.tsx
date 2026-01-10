"use client"

import { motion } from "framer-motion"
import { HiCheck, HiArrowRight, HiClock } from "react-icons/hi"

interface Service {
  id: number
  name: string
  price: number
  duration: number
  description: string
}

const services: Service[] = [
  {
    id: 1,
    name: "Corte de Cabelo",
    price: 45,
    duration: 30,
    description: "Corte personalizado de acordo com seu estilo.",
  },
  {
    id: 2,
    name: "Barba",
    price: 35,
    duration: 25,
    description: "Modelagem e acabamento com navalha.",
  },
  {
    id: 3,
    name: "Corte + Barba",
    price: 70,
    duration: 50,
    description: "O combo completo para sair renovado.",
  },
  {
    id: 4,
    name: "Tratamento Capilar",
    price: 55,
    duration: 40,
    description: "Hidratação e revitalização dos fios.",
  },
]

interface ServiceSelectionProps {
  selectedService: Service | null
  onSelect: (service: Service) => void
  onNext: () => void
}

export function ServiceSelection({ selectedService, onSelect, onNext }: ServiceSelectionProps) {
  return (
    <div>
      <h2 className="text-xl text-silver font-semibold mb-2">Escolha o Serviço</h2>
      <p className="text-silver-dark text-sm mb-6">Selecione o serviço que deseja agendar.</p>

      <div className="grid sm:grid-cols-2 gap-4">
        {services.map((service) => (
          <motion.button
            key={service.id}
            onClick={() => onSelect(service)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative p-5 rounded-lg border-2 text-left transition-all ${
              selectedService?.id === service.id
                ? "border-copper bg-copper/10"
                : "border-slate-light/30 hover:border-copper/50"
            }`}
          >
            {selectedService?.id === service.id && (
              <div className="absolute top-3 right-3 w-6 h-6 bg-copper rounded-full flex items-center justify-center">
                <HiCheck className="text-obsidian text-sm" />
              </div>
            )}

            <h3 className="text-silver font-semibold mb-1">{service.name}</h3>
            <p className="text-silver-dark text-sm mb-3">{service.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-copper font-bold">R$ {service.price.toFixed(2)}</span>
              <span className="flex items-center gap-1 text-silver-dark text-xs">
                <HiClock />
                {service.duration} min
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={onNext}
          disabled={!selectedService}
          className="flex items-center gap-2 bg-copper hover:bg-copper-light disabled:bg-slate-light disabled:cursor-not-allowed text-obsidian font-semibold px-6 py-3 rounded-md transition-colors"
        >
          Continuar
          <HiArrowRight />
        </button>
      </div>
    </div>
  )
}
