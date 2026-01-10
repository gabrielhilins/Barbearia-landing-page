"use client"

import { motion } from "framer-motion"
import { HiClock, HiUser, HiCheckCircle, HiXCircle } from "react-icons/hi"

interface Appointment {
  id: number
  time: string
  client: string
  service: string
  barber: string
  status: "completed" | "in-progress" | "upcoming" | "cancelled"
  price: number
}

const appointments: Appointment[] = [
  {
    id: 1,
    time: "09:00",
    client: "Marcos Ferreira",
    service: "Corte + Barba",
    barber: "Carlos Silva",
    status: "completed",
    price: 70,
  },
  {
    id: 2,
    time: "09:30",
    client: "Pedro Almeida",
    service: "Corte de Cabelo",
    barber: "Rafael Santos",
    status: "completed",
    price: 45,
  },
  {
    id: 3,
    time: "10:00",
    client: "Thiago Mendes",
    service: "Barba",
    barber: "Lucas Oliveira",
    status: "completed",
    price: 35,
  },
  {
    id: 4,
    time: "10:30",
    client: "Bruno Nascimento",
    service: "Corte + Barba",
    barber: "André Costa",
    status: "in-progress",
    price: 70,
  },
  {
    id: 5,
    time: "11:00",
    client: "Ricardo Lima",
    service: "Tratamento Capilar",
    barber: "Carlos Silva",
    status: "upcoming",
    price: 55,
  },
  {
    id: 6,
    time: "11:30",
    client: "Felipe Santos",
    service: "Corte de Cabelo",
    barber: "Rafael Santos",
    status: "upcoming",
    price: 45,
  },
  {
    id: 7,
    time: "14:00",
    client: "André Martins",
    service: "Corte + Barba",
    barber: "Lucas Oliveira",
    status: "upcoming",
    price: 70,
  },
  {
    id: 8,
    time: "14:30",
    client: "Paulo Ribeiro",
    service: "Barba",
    barber: "André Costa",
    status: "cancelled",
    price: 35,
  },
]

const statusConfig = {
  completed: {
    label: "Concluído",
    color: "text-green-400 bg-green-400/10",
    icon: HiCheckCircle,
  },
  "in-progress": {
    label: "Em Andamento",
    color: "text-copper bg-copper/10",
    icon: HiClock,
  },
  upcoming: {
    label: "Aguardando",
    color: "text-blue-400 bg-blue-400/10",
    icon: HiClock,
  },
  cancelled: {
    label: "Cancelado",
    color: "text-red-400 bg-red-400/10",
    icon: HiXCircle,
  },
}

export function TodayAgenda() {
  const today = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  })

  return (
    <div className="bg-slate rounded-xl border border-slate-light/20">
      <div className="p-5 border-b border-slate-light/20">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-silver font-semibold text-lg">Agenda do Dia</h2>
            <p className="text-silver-dark text-sm capitalize">{today}</p>
          </div>
          <button className="text-copper hover:text-copper-light text-sm font-medium transition-colors">
            Ver Semana Completa
          </button>
        </div>
      </div>

      <div className="divide-y divide-slate-light/10">
        {appointments.map((appointment, index) => {
          const status = statusConfig[appointment.status]
          return (
            <motion.div
              key={appointment.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`p-4 flex items-center gap-4 hover:bg-obsidian-light/50 transition-colors ${
                appointment.status === "cancelled" ? "opacity-50" : ""
              }`}
            >
              {/* Time */}
              <div className="w-16 text-center">
                <span className="text-silver font-mono font-medium">{appointment.time}</span>
              </div>

              {/* Status indicator */}
              <div
                className={`w-1 h-12 rounded-full ${
                  appointment.status === "completed"
                    ? "bg-green-400"
                    : appointment.status === "in-progress"
                      ? "bg-copper"
                      : appointment.status === "cancelled"
                        ? "bg-red-400"
                        : "bg-slate-light/30"
                }`}
              />

              {/* Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <HiUser className="text-silver-dark text-sm" />
                  <span className="text-silver font-medium truncate">{appointment.client}</span>
                </div>
                <p className="text-silver-dark text-sm truncate">
                  {appointment.service} • {appointment.barber}
                </p>
              </div>

              {/* Status Badge */}
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${status.color}`}>
                <status.icon className="text-sm" />
                {status.label}
              </div>

              {/* Price */}
              <div className="text-right w-20">
                <span
                  className={`text-copper font-semibold ${appointment.status === "cancelled" ? "line-through" : ""}`}
                >
                  R$ {appointment.price}
                </span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
