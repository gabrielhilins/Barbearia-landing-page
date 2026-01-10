"use client";

import { motion } from "framer-motion";
import { HiStar, HiClock, HiUserGroup } from "react-icons/hi";

const trustItems = [
  {
    icon: HiStar,
    title: "+300 avaliações",
    subtitle: "5 estrelas no Google",
  },
  {
    icon: HiClock,
    title: "Atendimento pontual",
    subtitle: "Respeito ao seu tempo",
  },
  {
    icon: HiUserGroup,
    title: "Equipe experiente",
    subtitle: "Profissionais certificados",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6},
  },
};

export function TrustSection() {
  return (
    <section className="bg-slate py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="
                bg-obsidian-light
                border border-slate-light/20
                rounded-2xl
                p-6
                flex items-center gap-5
                shadow-lg
                transition
              "
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-copper/10">
                <item.icon className="text-copper text-2xl" />
              </div>

              <div>
                <p className="text-silver font-semibold text-base">
                  {item.title}
                </p>
                <p className="text-silver-dark text-sm">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
