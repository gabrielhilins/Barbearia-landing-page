"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/motion-wrapper"
import { HiArrowRight, HiClock } from "react-icons/hi"

const blogPosts = [
  {
    id: 1,
    title: "Como manter o corte de cabelo por mais tempo",
    excerpt: "Dicas práticas para prolongar o visual do seu corte entre as visitas à barbearia.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Cuidados",
    readTime: "4 min",
  },
  {
    id: 2,
    title: "Guia completo para cuidar da sua barba em casa",
    excerpt: "Produtos e técnicas essenciais para manter a barba sempre alinhada.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Barba",
    readTime: "6 min",
  },
  {
    id: 3,
    title: "Tendências de cortes masculinos para 2025",
    excerpt: "Os estilos que estão em alta e como escolher o melhor para você.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Estilo",
    readTime: "5 min",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 sm:py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-copper text-sm uppercase tracking-[0.2em] font-medium">Blog</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-silver mt-4">
              Dicas & <span className="text-copper">Conteúdo</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.id}`} className="block">
                <div className="bg-slate rounded-lg overflow-hidden border border-slate-light/20 hover:border-copper/50 transition-all duration-300">
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-copper text-xs uppercase tracking-wider font-medium">{post.category}</span>
                      <span className="flex items-center gap-1 text-silver-dark text-xs">
                        <HiClock className="text-sm" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-silver font-semibold text-lg mb-2 group-hover:text-copper transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-silver-dark text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-copper text-sm font-medium mt-4 group-hover:gap-3 transition-all">
                      Ler mais
                      <HiArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
