"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { HiArrowRight, HiArrowLeft, HiChevronLeft, HiChevronRight } from "react-icons/hi"

interface DateTimeSelectionProps {
  selectedDate: Date | null
  selectedTime: string | null
  onSelectDate: (date: Date) => void
  onSelectTime: (time: string) => void
  onNext: () => void
  onBack: () => void
}

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
]

// Mock unavailable slots
const unavailableSlots = ["10:00", "14:30", "17:00"]

export function DateTimeSelection({
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
  onNext,
  onBack,
}: DateTimeSelectionProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const daysInMonth = useMemo(() => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const days: (Date | null)[] = []

    // Add empty days for the first week
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null)
    }

    // Add all days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i))
    }

    return days
  }, [currentMonth])

  const isDateDisabled = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today || date.getDay() === 0 // Disable past dates and Sundays
  }

  const isDateSelected = (date: Date) => {
    if (!selectedDate) return false
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    )
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  return (
    <div>
      <h2 className="text-xl text-silver font-semibold mb-2">Escolha Data e Horário</h2>
      <p className="text-silver-dark text-sm mb-6">Selecione a melhor data e horário para você.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Calendar */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={prevMonth}
              className="p-2 text-silver hover:text-copper transition-colors"
              aria-label="Mês anterior"
            >
              <HiChevronLeft size={20} />
            </button>
            <span className="text-silver font-medium capitalize">
              {currentMonth.toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}
            </span>
            <button
              onClick={nextMonth}
              className="p-2 text-silver hover:text-copper transition-colors"
              aria-label="Próximo mês"
            >
              <HiChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center">
            {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
              <div key={day} className="text-silver-dark text-xs py-2">
                {day}
              </div>
            ))}
            {daysInMonth.map((date, index) => (
              <div key={index}>
                {date ? (
                  <button
                    onClick={() => !isDateDisabled(date) && onSelectDate(date)}
                    disabled={isDateDisabled(date)}
                    className={`w-full aspect-square flex items-center justify-center text-sm rounded-lg transition-all ${
                      isDateSelected(date)
                        ? "bg-copper text-obsidian font-semibold"
                        : isDateDisabled(date)
                          ? "text-slate-light/40 cursor-not-allowed"
                          : "text-silver hover:bg-copper/20"
                    }`}
                  >
                    {date.getDate()}
                  </button>
                ) : (
                  <div />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <p className="text-silver font-medium mb-4">Horários Disponíveis</p>
          {selectedDate ? (
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => {
                const isUnavailable = unavailableSlots.includes(time)
                return (
                  <motion.button
                    key={time}
                    onClick={() => !isUnavailable && onSelectTime(time)}
                    disabled={isUnavailable}
                    whileHover={!isUnavailable ? { scale: 1.05 } : undefined}
                    whileTap={!isUnavailable ? { scale: 0.95 } : undefined}
                    className={`py-3 rounded-lg text-sm font-medium transition-all ${
                      selectedTime === time
                        ? "bg-copper text-obsidian"
                        : isUnavailable
                          ? "bg-slate-light/10 text-slate-light/40 cursor-not-allowed line-through"
                          : "bg-obsidian-light text-silver hover:bg-copper/20"
                    }`}
                  >
                    {time}
                  </motion.button>
                )
              })}
            </div>
          ) : (
            <div className="flex items-center justify-center h-48 text-silver-dark text-sm">
              Selecione uma data para ver os horários disponíveis.
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-silver hover:text-copper transition-colors">
          <HiArrowLeft />
          Voltar
        </button>
        <button
          onClick={onNext}
          disabled={!selectedDate || !selectedTime}
          className="flex items-center gap-2 bg-copper hover:bg-copper-light disabled:bg-slate-light disabled:cursor-not-allowed text-obsidian font-semibold px-6 py-3 rounded-md transition-colors"
        >
          Continuar
          <HiArrowRight />
        </button>
      </div>
    </div>
  )
}
