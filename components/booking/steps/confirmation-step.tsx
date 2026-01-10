"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { BookingData } from "../booking-flow"
import { HiArrowLeft, HiCheck, HiCalendar, HiUser, HiClipboardList, HiClock } from "react-icons/hi"

interface ConfirmationStepProps {
  bookingData: BookingData
  total: number
  onBack: () => void
}

export function ConfirmationStep({ bookingData, total, onBack }: ConfirmationStepProps) {
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const formatDate = (date: Date | null) => {
    if (!date) return ""
    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  const handleConfirm = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsConfirmed(true)
  }

  if (isConfirmed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-20 h-20 bg-copper rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <HiCheck className="text-obsidian text-4xl" />
        </motion.div>

        <h2 className="text-2xl text-silver font-serif font-semibold mb-2">Agendamento Confirmado!</h2>
        <p className="text-silver-dark mb-8">
          Você receberá um email de confirmação com os detalhes do seu agendamento.
        </p>

        <div className="bg-obsidian-light rounded-lg p-6 text-left max-w-md mx-auto">
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <HiClipboardList className="text-copper" />
              <span className="text-silver">{bookingData.service?.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <HiUser className="text-copper" />
              <span className="text-silver">{bookingData.barber?.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <HiCalendar className="text-copper" />
              <span className="text-silver capitalize">{formatDate(bookingData.date)}</span>
            </div>
            <div className="flex items-center gap-3">
              <HiClock className="text-copper" />
              <span className="text-silver">{bookingData.time}</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-light/20 flex justify-between">
            <span className="text-silver font-medium">Total</span>
            <span className="text-copper font-bold">R$ {total.toFixed(2)}</span>
          </div>
        </div>

        <a
          href="/"
          className="inline-block mt-8 bg-copper hover:bg-copper-light text-obsidian font-semibold px-6 py-3 rounded-md transition-colors"
        >
          Voltar ao Início
        </a>
      </motion.div>
    )
  }

  return (
    <div>
      <h2 className="text-xl text-silver font-semibold mb-2">Confirmar Agendamento</h2>
      <p className="text-silver-dark text-sm mb-6">Revise os detalhes e confirme seu agendamento.</p>

      <div className="bg-obsidian-light rounded-lg p-6 space-y-4">
        <div className="flex items-start gap-4 pb-4 border-b border-slate-light/20">
          <HiClipboardList className="text-copper text-xl mt-1" />
          <div className="flex-1">
            <p className="text-silver-dark text-xs uppercase tracking-wider mb-1">Serviço</p>
            <p className="text-silver font-medium">{bookingData.service?.name}</p>
            <p className="text-copper text-sm">R$ {bookingData.service?.price.toFixed(2)}</p>
          </div>
        </div>

        <div className="flex items-start gap-4 pb-4 border-b border-slate-light/20">
          <HiUser className="text-copper text-xl mt-1" />
          <div>
            <p className="text-silver-dark text-xs uppercase tracking-wider mb-1">Profissional</p>
            <p className="text-silver font-medium">{bookingData.barber?.name}</p>
            <p className="text-silver-dark text-sm">{bookingData.barber?.specialty}</p>
          </div>
        </div>

        <div className="flex items-start gap-4 pb-4 border-b border-slate-light/20">
          <HiCalendar className="text-copper text-xl mt-1" />
          <div>
            <p className="text-silver-dark text-xs uppercase tracking-wider mb-1">Data & Hora</p>
            <p className="text-silver font-medium capitalize">{formatDate(bookingData.date)}</p>
            <p className="text-silver-dark text-sm">{bookingData.time}</p>
          </div>
        </div>

        {bookingData.upsells.length > 0 && (
          <div className="pb-4 border-b border-slate-light/20">
            <p className="text-silver-dark text-xs uppercase tracking-wider mb-2">Adicionais</p>
            {bookingData.upsells.map((upsell) => (
              <div key={upsell.id} className="flex justify-between text-sm mb-1">
                <span className="text-silver">{upsell.name}</span>
                <span className="text-copper">+R$ {upsell.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between items-center pt-2">
          <span className="text-silver font-semibold text-lg">Total</span>
          <span className="text-copper text-2xl font-bold">R$ {total.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-silver hover:text-copper transition-colors">
          <HiArrowLeft />
          Voltar
        </button>
        <button
          onClick={handleConfirm}
          disabled={isLoading}
          className="flex items-center gap-2 bg-copper hover:bg-copper-light disabled:opacity-70 text-obsidian font-semibold px-8 py-3 rounded-md transition-colors"
        >
          {isLoading ? (
            <>
              <span className="w-5 h-5 border-2 border-obsidian/30 border-t-obsidian rounded-full animate-spin" />
              Confirmando...
            </>
          ) : (
            <>
              <HiCheck />
              Confirmar Agendamento
            </>
          )}
        </button>
      </div>
    </div>
  )
}
