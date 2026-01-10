"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaSpotify } from "react-icons/fa";
import { HiLocationMarker, HiClock, HiMail, HiPhone } from "react-icons/hi";

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6},
    },
  };

  return (
    <footer className="bg-obsidian-light border-t border-slate-light/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Coluna 1 — Marca */}
          <motion.div variants={itemVariants} className="max-w-sm">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold text-silver tracking-wider">
                NOIR <span className="text-copper">BARBER</span>
              </span>
            </Link>

            <p className="text-silver-dark text-sm leading-relaxed text-justify mb-6">
              Corte de cabelo e barba, do jeito certo. Profissionais
              experientes, ambiente confortável e trilha sonora que faz parte da
              experiência.
            </p>

            <div className="mt-6 rounded-xl overflow-hidden border border-slate-light/20 bg-slate shadow-lg">
              <iframe
                src="https://open.spotify.com/embed/playlist/4q8w97oDuS8sJSy8JI4PNh?utm_source=generator"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </motion.div>

         
          {/* Coluna 2 — Contato */}
          <motion.div variants={itemVariants} className="max-w-sm">
            <h4 className="text-silver font-semibold mb-4 uppercase tracking-wider text-sm">
              Contato
            </h4>

            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+5511999999999"
                  className="flex items-center gap-3 text-silver-dark hover:text-copper transition text-sm"
                >
                  <HiPhone className="text-copper text-lg" />
                  (11) 99999-9999
                </a>
              </li>

              <li>
                <a
                  href="mailto:contato@noirbarber.com"
                  className="flex items-center gap-3 text-silver-dark hover:text-copper transition text-sm break-all"
                >
                  <HiMail className="text-copper text-lg" />
                  contato@noirbarber.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaInstagram className="text-copper text-lg" />
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-silver-dark hover:text-copper transition text-sm"
                >
                  @noirbarber
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-copper text-lg" />
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-silver-dark hover:text-copper transition text-sm"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Coluna 3 — Localização + Horários */}
          <motion.div variants={itemVariants} className="max-w-sm">
            <h4 className="text-silver font-semibold mb-4 uppercase tracking-wider text-sm">
              Localização
            </h4>

            {/* Mapa */}
            <div className="rounded-xl overflow-hidden mb-6 border border-slate-light/20 shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=Rua%20Example%20123%20São%20Paulo&output=embed"
                className="w-full h-[150px]"
                loading="lazy"
              />
            </div>

            <div className="flex gap-3 mb-5">
              <HiLocationMarker className="text-copper text-lg mt-1" />
              <div className="text-silver-dark text-sm">
                <p className="text-silver font-semibold mb-1">Endereço</p>
                <p>
                  Rua Example, 123 <br />
                  Centro — São Paulo, SP
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <HiClock className="text-copper text-lg mt-1" />
              <div className="text-silver-dark text-sm">
                <p className="text-silver font-semibold mb-1">
                  Horário de funcionamento
                </p>
                <p>Segunda a Sexta: 09h às 20h</p>
                <p>Sábado: 09h às 18h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Rodapé inferior */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="
    mt-16 pt-8 border-t border-slate-light/20
    flex flex-col sm:flex-row
    items-center justify-between
    gap-4
  "
        >
          {/* Copyright */}
          <p className="text-silver-dark text-sm text-center sm:text-left">
            © {new Date().getFullYear()} NOIR BARBER. Todos os direitos
            reservados.
          </p>

          {/* Links legais */}
          <div className="flex items-center gap-6">
            <Link
              href="/privacidade"
              className="text-silver-dark hover:text-copper transition text-sm"
            >
              Política de Privacidade
            </Link>

            <Link
              href="/termos"
              className="text-silver-dark hover:text-copper transition text-sm"
            >
              Termos de Uso
            </Link>
          </div>
        </motion.div>
      </div>

         <div className="flex justify-center items-center gap-2 text-[10px] tracking-[0.15em] pb-4 uppercase font-[family-name:var(--font-quicksand)] text-white">
            <span className="italic text-white/60">desenvolvido por</span>

            <a
              href="https://ggabstechdesign.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center"
            >
              <img
                src="/Wordmark SVG.svg"
                alt="GGABS"
                className="
        h-5 w-auto
        transition-transform duration-300 ease-out
        group-hover:-translate-y-1
        
      "
              />
            </a>
          </div>

      {/* WhatsApp flutuante */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-lg transition z-50"
        aria-label="Fale conosco no WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </footer>
  );
}
