import Link from "next/link"
import { AiFillHome } from "react-icons/ai"
import { BookingFlow } from "@/components/booking/booking-flow"
import { Footer } from "@/components/sections/footer"

export const metadata = {
  title: "Agendar Horário | NOIR BARBER",
  description: "Agende seu horário na NOIR BARBER. Escolha o serviço, profissional, data e horário.",
}

export default function AgendarPage() {
  return (
    <main className="min-h-screen bg-obsidian flex flex-col pt-24">
      
      {/* Conteúdo principal */}
      <div className="flex-grow pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Botão voltar para home */}
          <div className="flex justify-center mb-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-white border border px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
            >
              <AiFillHome size={20} />
              <span>Voltar para página inicial</span>
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl sm:text-4xl text-silver mb-2">
              Agendar <span className="text-copper">Horário</span>
            </h1>
            <p className="text-silver-dark">
              Escolha o serviço, profissional e horário ideal para você.
            </p>
          </div>

          <BookingFlow />
        </div>
      </div>

      {/* Footer sempre no final */}
      <Footer />
    </main>
  )
}
