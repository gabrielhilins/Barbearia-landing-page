"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ServiceSelection } from "./steps/service-selection"
import { BarberSelection } from "./steps/barber-selection"
import { DateTimeSelection } from "./steps/date-time-selection"
import { UpsellStep } from "./steps/upsell-step"
import { ConfirmationStep } from "./steps/confirmation-step"
import { BookingSummary } from "./booking-summary"
import { HiCheck } from "react-icons/hi"

export interface BookingData {
  service: {
    id: number
    name: string
    price: number
    duration: number
  } | null
  barber: {
    id: number
    name: string
    specialty: string
  } | null
  date: Date | null
  time: string | null
  upsells: {
    id: number
    name: string
    price: number
  }[]
}

const steps = [
  { id: 1, label: "Serviço" },
  { id: 2, label: "Profissional" },
  { id: 3, label: "Data & Hora" },
  { id: 4, label: "Adicional" },
  { id: 5, label: "Confirmar" },
]

export function BookingFlow() {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState<BookingData>({
    service: null,
    barber: null,
    date: null,
    time: null,
    upsells: [],
  })

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const calculateTotal = () => {
    const servicePrice = bookingData.service?.price || 0
    const upsellsTotal = bookingData.upsells.reduce((sum, item) => sum + item.price, 0)
    return servicePrice + upsellsTotal
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                    currentStep > step.id
                      ? "bg-copper border-copper text-obsidian"
                      : currentStep === step.id
                        ? "border-copper text-copper"
                        : "border-slate-light/30 text-silver-dark"
                  }`}
                >
                  {currentStep > step.id ? <HiCheck className="text-lg" /> : <span className="text-sm">{step.id}</span>}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`hidden sm:block w-12 lg:w-20 h-0.5 mx-2 transition-colors ${
                      currentStep > step.id ? "bg-copper" : "bg-slate-light/30"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {steps.map((step) => (
              <span
                key={step.id}
                className={`text-xs transition-colors ${
                  currentStep >= step.id ? "text-silver" : "text-silver-dark"
                } hidden sm:block`}
              >
                {step.label}
              </span>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-slate rounded-xl p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 1 && (
                <ServiceSelection
                  selectedService={bookingData.service}
                  onSelect={(service) => updateBookingData({ service })}
                  onNext={nextStep}
                />
              )}
              {currentStep === 2 && (
                <BarberSelection
                  selectedBarber={bookingData.barber}
                  onSelect={(barber) => updateBookingData({ barber })}
                  onNext={nextStep}
                  onBack={prevStep}
                />
              )}
              {currentStep === 3 && (
                <DateTimeSelection
                  selectedDate={bookingData.date}
                  selectedTime={bookingData.time}
                  onSelectDate={(date) => updateBookingData({ date })}
                  onSelectTime={(time) => updateBookingData({ time })}
                  onNext={nextStep}
                  onBack={prevStep}
                />
              )}
              {currentStep === 4 && (
                <UpsellStep
                  selectedUpsells={bookingData.upsells}
                  onToggleUpsell={(upsell) => {
                    const exists = bookingData.upsells.find((u) => u.id === upsell.id)
                    if (exists) {
                      updateBookingData({
                        upsells: bookingData.upsells.filter((u) => u.id !== upsell.id),
                      })
                    } else {
                      updateBookingData({
                        upsells: [...bookingData.upsells, upsell],
                      })
                    }
                  }}
                  onNext={nextStep}
                  onBack={prevStep}
                />
              )}
              {currentStep === 5 && (
                <ConfirmationStep bookingData={bookingData} total={calculateTotal()} onBack={prevStep} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Sidebar Summary */}
      <div className="lg:col-span-1">
        <BookingSummary bookingData={bookingData} total={calculateTotal()} />
      </div>
    </div>
  )
}
