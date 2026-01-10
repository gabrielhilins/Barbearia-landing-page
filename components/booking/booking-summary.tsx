"use client"

import type { BookingData } from "./booking-flow"
import { HiCalendar, HiUser, HiClipboardList } from "react-icons/hi"

interface BookingSummaryProps {
  bookingData: BookingData
  total: number
}

export function BookingSummary({ bookingData, total }: BookingSummaryProps) {
  const formatDate = (date: Date | null) => {
    if (!date) return null
    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    })
  }

  return (
    <div className="bg-slate rounded-xl p-6 sticky top-24">
      <h3 className="font-semibold text-silver text-lg mb-6 pb-4 border-b border-slate-light/20">
        Resumo do Agendamento
      </h3>

      <div className="space-y-4">
        {/* Service */}
        {bookingData.service ? (
          <div className="flex items-start gap-3">
            <HiClipboardList className="text-copper text-lg flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-silver-dark text-xs uppercase tracking-wider">Serviço</p>
              <p className="text-silver font-medium">{bookingData.service.name}</p>
              <p className="text-copper text-sm">R$ {bookingData.service.price.toFixed(2)}</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 text-silver-dark">
            <HiClipboardList className="text-lg" />
            <span className="text-sm">Selecione um serviço</span>
          </div>
        )}

        {/* Barber */}
        {bookingData.barber ? (
          <div className="flex items-start gap-3">
            <HiUser className="text-copper text-lg flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-silver-dark text-xs uppercase tracking-wider">Profissional</p>
              <p className="text-silver font-medium">{bookingData.barber.name}</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 text-silver-dark">
            <HiUser className="text-lg" />
            <span className="text-sm">Selecione um profissional</span>
          </div>
        )}

        {/* Date & Time */}
        {bookingData.date && bookingData.time ? (
          <div className="flex items-start gap-3">
            <HiCalendar className="text-copper text-lg flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-silver-dark text-xs uppercase tracking-wider">Data & Hora</p>
              <p className="text-silver font-medium capitalize">{formatDate(bookingData.date)}</p>
              <p className="text-silver text-sm">{bookingData.time}</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 text-silver-dark">
            <HiCalendar className="text-lg" />
            <span className="text-sm">Selecione data e horário</span>
          </div>
        )}

        {/* Upsells */}
        {bookingData.upsells.length > 0 && (
          <div className="pt-4 border-t border-slate-light/20">
            <p className="text-silver-dark text-xs uppercase tracking-wider mb-2">Adicionais</p>
            {bookingData.upsells.map((upsell) => (
              <div key={upsell.id} className="flex justify-between text-sm">
                <span className="text-silver">{upsell.name}</span>
                <span className="text-copper">+R$ {upsell.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Total */}
      <div className="mt-6 pt-4 border-t border-slate-light/20">
        <div className="flex justify-between items-center">
          <span className="text-silver font-medium">Total</span>
          <span className="text-copper text-2xl font-bold">R$ {total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}
