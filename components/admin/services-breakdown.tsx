"use client"

import { motion } from "framer-motion"

const services = [
  {
    name: "Corte + Barba",
    count: 8,
    revenue: 560,
    percentage: 45,
  },
  {
    name: "Corte de Cabelo",
    count: 5,
    revenue: 225,
    percentage: 28,
  },
  {
    name: "Barba",
    count: 3,
    revenue: 105,
    percentage: 17,
  },
  {
    name: "Tratamento Capilar",
    count: 2,
    revenue: 110,
    percentage: 10,
  },
]

export function ServicesBreakdown() {
  return (
    <div className="bg-slate rounded-xl border border-slate-light/20">
      <div className="p-5 border-b border-slate-light/20">
        <h2 className="text-silver font-semibold">Serviços do Dia</h2>
      </div>

      <div className="p-5 space-y-4">
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-silver text-sm">{service.name}</span>
              <span className="text-copper text-sm font-medium">{service.count}x</span>
            </div>
            <div className="relative h-2 bg-obsidian-light rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${service.percentage}%` }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                className="absolute inset-y-0 left-0 bg-copper rounded-full"
              />
            </div>
            <p className="text-silver-dark text-xs mt-1">R$ {service.revenue.toFixed(2)}</p>
          </motion.div>
        ))}
      </div>

      <div className="p-5 border-t border-slate-light/20">
        <div className="flex justify-between items-center">
          <span className="text-silver-dark text-sm">Total Estimado</span>
          <span className="text-copper text-xl font-bold">R$ 1.000,00</span>
        </div>
      </div>
    </div>
  )
}
