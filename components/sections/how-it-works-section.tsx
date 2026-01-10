"use client"

import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/motion-wrapper"
import { HiClipboardList, HiUserCircle, HiCalendar, HiCheckCircle } from "react-icons/hi"

const steps = [
  {
    icon: HiClipboardList,
    step: "01",
    title: "Escolha o serviço",
    description: "Selecione entre corte, barba, combo ou tratamentos.",
  },
  {
    icon: HiUserCircle,
    step: "02",
    title: "Escolha o barbeiro",
    description: "Veja a agenda e escolha seu profissional preferido.",
  },
  {
    icon: HiCalendar,
    step: "03",
    title: "Selecione data e horário",
    description: "Escolha o melhor horário disponível para você.",
  },
  {
    icon: HiCheckCircle,
    step: "04",
    title: "Confirme o agendamento",
    description: "Pronto! Você receberá a confirmação por email.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 sm:py-28 bg-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">Como Funciona</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-silver mt-4">
              Agendamento <span className="text-copper">simples e rápido</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-copper/50 to-transparent" />
              )}

              {/* Icon */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-obsidian-light border-2 border-copper/30 mb-6">
                <step.icon className="text-copper text-3xl" />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-copper text-obsidian text-sm font-bold rounded-full flex items-center justify-center">
                  {step.step}
                </span>
              </div>

              <h3 className="text-silver font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-silver-dark text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
