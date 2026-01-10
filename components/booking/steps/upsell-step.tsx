"use client"

import { motion } from "framer-motion"
import { HiCheck, HiArrowRight, HiArrowLeft, HiPlus } from "react-icons/hi"

interface Upsell {
  id: number
  name: string
  price: number
  description: string
}

const upsells: Upsell[] = [
  {
    id: 1,
    name: "Tratamento Capilar",
    price: 15,
    description: "Hidratação rápida para cabelos mais saudáveis.",
  },
  {
    id: 2,
    name: "Massagem Relaxante",
    price: 20,
    description: "5 minutos de relaxamento no couro cabeludo.",
  },
  {
    id: 3,
    name: "Toalha Quente",
    price: 10,
    description: "Experiência premium com toalha quente aromática.",
  },
  {
    id: 4,
    name: "Gel de Finalização",
    price: 25,
    description: "Produto premium para penteado duradouro.",
  },
]

interface UpsellStepProps {
  selectedUpsells: Upsell[]
  onToggleUpsell: (upsell: Upsell) => void
  onNext: () => void
  onBack: () => void
}

export function UpsellStep({ selectedUpsells, onToggleUpsell, onNext, onBack }: UpsellStepProps) {
  const isSelected = (id: number) => selectedUpsells.some((u) => u.id === id)

  return (
    <div>
      <h2 className="text-xl text-silver font-semibold mb-2">Deseja Adicionar Algo?</h2>
      <p className="text-silver-dark text-sm mb-6">Melhore sua experiência com nossos serviços adicionais.</p>

      <div className="grid sm:grid-cols-2 gap-4">
        {upsells.map((upsell) => (
          <motion.button
            key={upsell.id}
            onClick={() => onToggleUpsell(upsell)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative p-5 rounded-lg border-2 text-left transition-all ${
              isSelected(upsell.id) ? "border-copper bg-copper/10" : "border-slate-light/30 hover:border-copper/50"
            }`}
          >
            <div
              className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all ${
              isSelected(upsell.id)
                ? 'bg-copper border-copper'
                : 'border-slate-light/30'
            }"
            >
              {isSelected(upsell.id) ? (
                <HiCheck className="text-obsidian text-sm" />
              ) : (
                <HiPlus className="text-silver-dark text-sm" />
              )}
            </div>

            <h3 className="text-silver font-semibold mb-1">{upsell.name}</h3>
            <p className="text-silver-dark text-sm mb-3">{upsell.description}</p>
            <span className="text-copper font-bold">+R$ {upsell.price.toFixed(2)}</span>
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
          className="flex items-center gap-2 bg-copper hover:bg-copper-light text-obsidian font-semibold px-6 py-3 rounded-md transition-colors"
        >
          Continuar
          <HiArrowRight />
        </button>
      </div>
    </div>
  )
}
