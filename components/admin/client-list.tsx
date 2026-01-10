"use client"

import { motion } from "framer-motion"
import { HiUser, HiPhone } from "react-icons/hi"

const clients = [
  {
    id: 1,
    name: "Marcos Ferreira",
    phone: "(11) 99999-1234",
    visits: 12,
    lastVisit: "Hoje",
  },
  {
    id: 2,
    name: "Pedro Almeida",
    phone: "(11) 98888-5678",
    visits: 8,
    lastVisit: "Hoje",
  },
  {
    id: 3,
    name: "Thiago Mendes",
    phone: "(11) 97777-9012",
    visits: 15,
    lastVisit: "Hoje",
  },
  {
    id: 4,
    name: "Bruno Nascimento",
    phone: "(11) 96666-3456",
    visits: 5,
    lastVisit: "Agora",
  },
]

export function ClientList() {
  return (
    <div className="bg-slate rounded-xl border border-slate-light/20">
      <div className="p-5 border-b border-slate-light/20">
        <h2 className="text-silver font-semibold">Clientes do Dia</h2>
      </div>

      <div className="divide-y divide-slate-light/10">
        {clients.map((client, index) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="p-4 hover:bg-obsidian-light/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center">
                <HiUser className="text-copper" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-silver font-medium truncate">{client.name}</p>
                <div className="flex items-center gap-1 text-silver-dark text-xs">
                  <HiPhone className="text-xs" />
                  {client.phone}
                </div>
              </div>
              <div className="text-right">
                <p className="text-copper text-sm font-medium">{client.visits} visitas</p>
                <p className="text-silver-dark text-xs">{client.lastVisit}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-4 border-t border-slate-light/20">
        <button className="w-full text-copper hover:text-copper-light text-sm font-medium transition-colors">
          Ver Todos os Clientes
        </button>
      </div>
    </div>
  )
}
