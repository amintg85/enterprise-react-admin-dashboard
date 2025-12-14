
import KPICards from '../ui/KPICards'
import SalesChart from '../ui/SalesChart'
import UsersTable from '../ui/UsersTable'
import ThemeToggle from '../ui/ThemeToggle'

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <ThemeToggle />
      </div>
      <KPICards />
      <SalesChart />
      <UsersTable />
    </div>
  )
}
