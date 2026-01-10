"use client"

import Link from "next/link"
import { HiOutlineBell, HiOutlineCog, HiOutlineLogout } from "react-icons/hi"

export function DashboardHeader() {
  return (
    <header className="bg-obsidian-light border-b border-slate-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/admin" className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold text-silver tracking-wider">
              NOIR <span className="text-copper">BARBER</span>
            </span>
            <span className="text-xs text-silver-dark bg-slate px-2 py-1 rounded ml-2">Admin</span>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button
              className="relative p-2 text-silver-dark hover:text-copper transition-colors"
              aria-label="Notificações"
            >
              <HiOutlineBell size={22} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-copper rounded-full" />
            </button>

            {/* Settings */}
            <button className="p-2 text-silver-dark hover:text-copper transition-colors" aria-label="Configurações">
              <HiOutlineCog size={22} />
            </button>

            {/* User */}
            <div className="flex items-center gap-3 pl-4 border-l border-slate-light/20">
              <div className="text-right hidden sm:block">
                <p className="text-silver text-sm font-medium">Carlos Silva</p>
                <p className="text-silver-dark text-xs">Administrador</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-copper/20 flex items-center justify-center">
                <span className="text-copper font-semibold text-sm">CS</span>
              </div>
            </div>

            {/* Logout */}
            <Link href="/" className="p-2 text-silver-dark hover:text-copper transition-colors" aria-label="Sair">
              <HiOutlineLogout size={22} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
