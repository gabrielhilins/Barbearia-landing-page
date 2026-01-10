"use client"

import { motion } from "framer-motion"
import { HiCurrencyDollar, HiCalendar, HiUsers, HiTrendingUp } from "react-icons/hi"

const stats = [
  {
    label: "Receita do Dia",
    value: "R$ 1.280",
    change: "+12%",
    trend: "up",
    icon: HiCurrencyDollar,
  },
  {
    label: "Agendamentos Hoje",
    value: "18",
    change: "+3",
    trend: "up",
    icon: HiCalendar,
  },
  {
    label: "Clientes Atendidos",
    value: "12",
    change: "6 restantes",
    trend: "neutral",
    icon: HiUsers,
  },
  {
    label: "Taxa de Ocupação",
    value: "85%",
    change: "+5%",
    trend: "up",
    icon: HiTrendingUp,
  },
]

export function StatsCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-slate rounded-xl p-5 border border-slate-light/20"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-silver-dark text-sm mb-1">{stat.label}</p>
              <p className="text-silver text-2xl font-bold">{stat.value}</p>
              <p
                className={`text-xs mt-1 ${
                  stat.trend === "up" ? "text-green-400" : stat.trend === "down" ? "text-red-400" : "text-silver-dark"
                }`}
              >
                {stat.change}
              </p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-copper/10 flex items-center justify-center">
              <stat.icon className="text-copper text-xl" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
