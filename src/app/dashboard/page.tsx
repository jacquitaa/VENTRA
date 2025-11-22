'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  Bell, 
  Search,
  TrendingUp,
  DollarSign,
  Eye,
  Download,
  MoreVertical,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Star,
  Award,
  Target
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-black border-r border-white/20 p-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mb-10">
          <span className="text-2xl font-bold bg-gradient-to-r from-[#0066FF] to-[#00A3FF] bg-clip-text text-transparent font-[family-name:var(--font-hachi-maru)] drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            VENTRA
          </span>
        </Link>

        {/* Navigation */}
        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === 'dashboard'
                ? 'bg-gradient-to-r from-[#0066FF]/20 to-[#00A3FF]/20 text-white border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === 'products'
                ? 'bg-gradient-to-r from-[#0066FF]/20 to-[#00A3FF]/20 text-white border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Package className="w-5 h-5" />
            <span className="font-medium">Productos</span>
          </button>

          <button
            onClick={() => setActiveTab('sales')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === 'sales'
                ? 'bg-gradient-to-r from-[#0066FF]/20 to-[#00A3FF]/20 text-white border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="font-medium">Ventas</span>
          </button>

          <button
            onClick={() => setActiveTab('customers')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === 'customers'
                ? 'bg-gradient-to-r from-[#0066FF]/20 to-[#00A3FF]/20 text-white border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Users className="w-5 h-5" />
            <span className="font-medium">Clientes</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === 'settings'
                ? 'bg-gradient-to-r from-[#0066FF]/20 to-[#00A3FF]/20 text-white border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium">Configuración</span>
          </button>
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00A3FF] flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              JP
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Juan Pérez</p>
              <p className="text-xs text-gray-400 truncate">juan@email.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/20 px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Buscar productos, ventas, clientes..."
                  className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative text-gray-400 hover:text-white">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#0066FF] rounded-full shadow-[0_0_8px_rgba(0,102,255,0.8)]"></span>
              </Button>
              <Button className="bg-gradient-to-r from-[#0066FF] to-[#00A3FF] text-white hover:from-[#0052CC] hover:to-[#0080FF] font-semibold shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <Plus className="w-4 h-4 mr-2" />
                Nuevo Producto
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Bienvenido de vuelta, Juan 👋
            </h1>
            <p className="text-gray-400">
              Aquí está un resumen de tu negocio hoy
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Revenue Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0066FF]/20 to-[#00A3FF]/10 border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#00A3FF] flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1 text-green-400 text-sm">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>+12.5%</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-1">Ingresos totales</p>
              <p className="text-3xl font-bold text-white">₲ 2,450,000</p>
            </div>

            {/* Sales Card */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-[#0066FF]" />
                </div>
                <div className="flex items-center gap-1 text-green-400 text-sm">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>+8.2%</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-1">Ventas</p>
              <p className="text-3xl font-bold text-white">156</p>
            </div>

            {/* Products Card */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Package className="w-6 h-6 text-[#00A3FF]" />
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-sm">
                  <span>—</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-1">Productos activos</p>
              <p className="text-3xl font-bold text-white">24</p>
            </div>

            {/* Customers Card */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#0066FF]" />
                </div>
                <div className="flex items-center gap-1 text-green-400 text-sm">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>+15.3%</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-1">Clientes nuevos</p>
              <p className="text-3xl font-bold text-white">89</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Sales Chart */}
            <div className="lg:col-span-2 p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Ventas del mes</h3>
                  <p className="text-sm text-gray-400">Comparado con el mes anterior</p>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-400">
                  <Download className="w-4 h-4 mr-2" />
                  Exportar
                </Button>
              </div>

              {/* Simple Bar Chart Visualization */}
              <div className="flex items-end justify-between gap-2 h-64">
                {[65, 45, 78, 52, 90, 68, 85, 72, 95, 80, 88, 92].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-gradient-to-t from-[#0066FF] to-[#00A3FF] rounded-t-lg transition-all hover:opacity-80 shadow-[0_0_10px_rgba(255,255,255,0.2)]" style={{ height: `${height}%` }}></div>
                    <span className="text-xs text-gray-500">{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0066FF]/10 to-[#00A3FF]/5 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-6">Logros</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#00A3FF] flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">Primera venta</p>
                    <p className="text-xs text-gray-400">Completado</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#00A3FF] flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">100 ventas</p>
                    <p className="text-xs text-gray-400">Completado</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 opacity-50">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">1000 ventas</p>
                    <p className="text-xs text-gray-400">56% completado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Sales */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Ventas recientes</h3>
              <Button variant="ghost" size="sm" className="text-white hover:text-white/80">
                Ver todas
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Producto</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Cliente</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Fecha</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Monto</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Estado</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { product: 'Ebook Marketing Digital', customer: 'María González', date: 'Hace 2 horas', amount: '₲ 150,000', status: 'Completado' },
                    { product: 'Curso de Diseño Web', customer: 'Carlos Ramírez', date: 'Hace 5 horas', amount: '₲ 450,000', status: 'Completado' },
                    { product: 'Plantilla Landing Page', customer: 'Ana Silva', date: 'Hace 1 día', amount: '₲ 80,000', status: 'Completado' },
                    { product: 'Pack de Iconos Premium', customer: 'Luis Fernández', date: 'Hace 1 día', amount: '₲ 120,000', status: 'Completado' },
                    { product: 'Guía SEO Completa', customer: 'Sofia Martínez', date: 'Hace 2 días', amount: '₲ 200,000', status: 'Completado' },
                  ].map((sale, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4">
                        <p className="text-sm font-medium text-white">{sale.product}</p>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm text-gray-400">{sale.customer}</p>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm text-gray-400">{sale.date}</p>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm font-medium text-white">{sale.amount}</p>
                      </td>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#0066FF]/20 text-white border border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                          {sale.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
