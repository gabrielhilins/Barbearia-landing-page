
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaGlobe,
  FaCalendarAlt,
} from "react-icons/fa";
import { DevelopedByFooter } from "@/components/sections/developed-by-footer";

export default function LinksPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full p-4">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/barbershop-interior-modern-dark-leather-chairs.jpg"
          alt="Interior da Barbearia"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      <main className="relative z-20 flex flex-col items-center justify-center w-full max-w-sm sm:max-w-md">
        <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl w-full text-center">
          <header className="mb-6 flex flex-col items-center">
            <h1 className="font-serif text-4xl font-bold text-silver tracking-wider">
              NOIR <span className="text-copper">BARBER</span>
            </h1>
            <h2 className="text-sm font-light text-white/90 mt-2">
              Sua barba, seu estilo, nosso compromisso.
            </h2>
          </header>

          <div className="flex flex-col space-y-4">
            <Button
              asChild
              className="bg-orange-500 text-black hover:bg-orange-600 font-bold text-base sm:text-lg py-5"
            >
              <Link href="/agendar" className="flex items-center justify-center gap-x-2">
                <FaCalendarAlt size={20} />
                Agendamento
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-orange-500 bg-transparent text-orange-500 hover:bg-orange-500/10 hover:text-orange-400 font-semibold text-base sm:text-lg py-5">
              <Link href="/" className="flex items-center justify-center gap-x-2">
                <FaGlobe size={20} />
                Ir para o Site
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-orange-500 text-orange-500 bg-transparent hover:bg-orange-500/10 hover:text-orange-400 font-semibold text-base sm:text-lg py-5">
              <a href="https://wa.me/5500000000000" target="_blank" className="flex items-center justify-center gap-x-2">
                <FaWhatsapp size={20} />
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" className="border-orange-500 text-orange-500 bg-transparent hover:bg-orange-500/10 hover:text-orange-400 font-semibold text-base sm:text-lg py-5">
              <a href="https://instagram.com" target="_blank" className="flex items-center justify-center gap-x-2">
                <FaInstagram size={20} />
                Instagram
              </a>
            </Button>
            <Button asChild variant="outline" className="border-orange-500 text-orange-500 bg-transparent hover:bg-orange-500/10 hover:text-orange-400 font-semibold text-base sm:text-lg py-5">
              <a
                href="https://maps.google.com"
                target="_blank"
                className="flex items-center justify-center gap-x-2"
              >
                <FaMapMarkerAlt size={20} />
                Onde estamos
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/50">
            &copy; {new Date().getFullYear()} Noir Barber. Todos os direitos reservados.
          </p>
        </div>
      </main>

      <div className="relative z-20 w-full">
        <DevelopedByFooter />
      </div>
    </div>
  );
}
