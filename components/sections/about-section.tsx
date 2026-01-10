"use client"

import Link from "next/link"
import { SlideIn, FadeIn } from "@/components/ui/motion-wrapper"
import { HiArrowRight } from "react-icons/hi"

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <SlideIn direction="left">
            <div>
              <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">Sobre a Barbearia</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-silver mt-4 mb-6 leading-tight">
                Mais do que um corte,
                <br />
                <span className="text-copper">uma experiência</span>
              </h2>
              <div className="space-y-4 text-silver-dark leading-relaxed">
                <p>
                  A NOIR BARBER nasceu da ideia de oferecer um serviço de barbearia de qualidade, sem complicação. Aqui,
                  você encontra profissionais que sabem o que fazem, um ambiente organizado e um atendimento direto ao
                  ponto.
                </p>
                <p>
                  Nada de promessas exageradas. O que entregamos é simples: corte de cabelo e barba bem feitos, com
                  atenção aos detalhes que fazem diferença no resultado final.
                </p>
              </div>
              <Link
                href="#galeria"
                className="inline-flex items-center gap-2 text-copper hover:text-copper-light transition-colors mt-8 text-sm uppercase tracking-wider font-medium group"
              >
                Conheça o Espaço
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </SlideIn>

          {/* Image */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="/barbershop-interior-modern-dark-leather-chairs.jpg"
                  alt="Interior da NOIR BARBER"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-copper rounded-lg -z-10" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
