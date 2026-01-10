import { DashboardHeader } from "@/components/admin/dashboard-header"
import { StatsCards } from "@/components/admin/stats-cards"
import { TodayAgenda } from "@/components/admin/today-agenda"
import { ClientList } from "@/components/admin/client-list"
import { ServicesBreakdown } from "@/components/admin/services-breakdown"

export const metadata = {
  title: "Painel Administrativo | NOIR BARBER",
  description: "Gerencie sua barbearia com o painel administrativo NOIR BARBER.",
}

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-obsidian">
      <DashboardHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StatsCards />

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          {/* Main Content - Agenda */}
          <div className="lg:col-span-2">
            <TodayAgenda />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ClientList />
            <ServicesBreakdown />
          </div>
        </div>
      </div>
    </main>
  )
}
