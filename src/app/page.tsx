import Link from 'next/link'
import { ArrowRight, Zap, Shield, Rocket, Check, Star, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar - Dark com blur */}
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo com gradiente azul verdadeiro */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#0066FF] to-[#00A3FF] bg-clip-text text-transparent font-[family-name:var(--font-hachi-maru)] drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                VENTRA
              </span>
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#inicio" className="text-sm text-gray-400 hover:text-white transition">
                Inicio
              </Link>
              <Link href="#features" className="text-sm text-gray-400 hover:text-white transition">
                Features
              </Link>
              <Link href="#pricing" className="text-sm text-gray-400 hover:text-white transition">
                Pricing
              </Link>
              <Link href="#ayuda" className="text-sm text-gray-400 hover:text-white transition">
                Ayuda
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-sm text-gray-400 hover:text-white hover:bg-white/10">
                  Login
                </Button>
              </Link>
              <Link href="/registro">
                <Button size="sm" className="text-sm bg-gradient-to-r from-[#0066FF] to-[#00A3FF] text-white hover:from-[#0052CC] hover:to-[#0080FF] rounded-full px-6 shadow-lg shadow-white/30 font-semibold">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Dark com gradientes azuis verdadeiros */}
      <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center px-6 lg:px-8 overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/20 via-black to-[#00A3FF]/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0066FF]/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00A3FF]/30 rounded-full blur-[120px]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066FF]/10 border border-white/20 mb-8 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <Star className="w-4 h-4 text-white" />
            <span className="text-sm text-white">La plataforma #1 en Paraguay</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Vende tus productos
            <br />
            <span className="bg-gradient-to-r from-[#0066FF] to-[#00A3FF] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              digitales fácilmente
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            La plataforma definitiva para creadores digitales. Sin costos iniciales, 
            pagos seguros y entrega instantánea.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/registro">
              <Button size="lg" className="text-base px-10 py-7 bg-gradient-to-r from-[#0066FF] to-[#00A3FF] text-white hover:from-[#0052CC] hover:to-[#0080FF] rounded-full shadow-2xl shadow-white/40 transition-all text-lg font-semibold">
                Comenzar gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-base px-10 py-7 border-white/30 text-white hover:bg-white/10 rounded-full text-lg font-semibold shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Ver demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-sm text-gray-400">Vendedores activos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$2M+</div>
              <div className="text-sm text-gray-400">En ventas procesadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-sm text-gray-400">Uptime garantizado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Todo lo que necesitas
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Herramientas poderosas para hacer crecer tu negocio digital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 bg-gradient-to-br from-[#0066FF]/10 to-transparent rounded-2xl border border-white/20 hover:border-white/40 transition-all hover:shadow-xl hover:shadow-white/20">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#00A3FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Entrega instantánea
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tus clientes reciben sus productos digitales inmediatamente después de la compra. Sin esperas, sin complicaciones.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 bg-gradient-to-br from-[#00A3FF]/10 to-transparent rounded-2xl border border-white/20 hover:border-white/40 transition-all hover:shadow-xl hover:shadow-white/20">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00A3FF] to-[#0066FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Pagos seguros
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Procesamiento seguro con encriptación de nivel bancario. Acepta tarjetas, Pagopar y más.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 bg-gradient-to-br from-[#0066FF]/10 to-transparent rounded-2xl border border-white/20 hover:border-white/40 transition-all hover:shadow-xl hover:shadow-white/20">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#00A3FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Sin costos iniciales
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Comienza gratis. Solo pagas una comisión cuando realizas una venta. Sin sorpresas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner - Azul verdadeiro vibrante */}
      <section className="py-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#00A3FF]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <TrendingUp className="w-16 h-16 text-white mx-auto mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            ¿Facturando más de 50 mil al mes?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Accede a beneficios exclusivos, comisiones reducidas y soporte prioritario para vendedores de alto volumen
          </p>
          <Button size="lg" className="bg-white text-[#0066FF] hover:bg-gray-100 rounded-full px-10 py-7 text-lg font-semibold shadow-2xl shadow-white/50">
            ¡Contáctanos ahora!
          </Button>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Precios transparentes
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Sin costos ocultos. Paga solo cuando vendas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan Starter */}
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all">
              <div className="text-sm text-gray-400 mb-2">Starter</div>
              <div className="text-4xl font-bold text-white mb-6">
                5%
                <span className="text-lg text-gray-400 font-normal"> por venta</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0066FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Productos ilimitados</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0066FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Pagos seguros</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0066FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Soporte por email</span>
                </li>
              </ul>
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-full">
                Comenzar gratis
              </Button>
            </div>

            {/* Plan Pro - Destacado */}
            <div className="p-8 bg-gradient-to-br from-[#0066FF]/20 to-[#00A3FF]/20 rounded-2xl border-2 border-white/30 relative overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <div className="absolute top-4 right-4 px-3 py-1 bg-white text-[#0066FF] text-xs font-semibold rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                Popular
              </div>
              <div className="text-sm text-white mb-2">Pro</div>
              <div className="text-4xl font-bold text-white mb-6">
                3%
                <span className="text-lg text-gray-300 font-normal"> por venta</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white text-sm">Todo en Starter</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white text-sm">Dominio personalizado</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white text-sm">Analytics avanzado</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white text-sm">Soporte prioritario</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-[#0066FF] to-[#00A3FF] hover:from-[#0052CC] hover:to-[#0080FF] text-white rounded-full shadow-lg shadow-white/40 font-semibold">
                Comenzar ahora
              </Button>
            </div>

            {/* Plan Enterprise */}
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all">
              <div className="text-sm text-gray-400 mb-2">Enterprise</div>
              <div className="text-4xl font-bold text-white mb-6">
                Custom
                <span className="text-lg text-gray-400 font-normal"> pricing</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00A3FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Todo en Pro</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00A3FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Comisiones reducidas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00A3FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Account manager dedicado</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00A3FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">SLA garantizado</span>
                </li>
              </ul>
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-full">
                Contactar ventas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ayuda Section */}
      <section id="ayuda" className="py-24 px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              ¿Necesitas ayuda? Aquí están las respuestas
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2">
                ¿Cómo empiezo a vender?
              </h3>
              <p className="text-gray-400 text-sm">
                Crea tu cuenta gratis, sube tus productos digitales y comienza a vender en minutos. No necesitas conocimientos técnicos.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2">
                ¿Qué productos puedo vender?
              </h3>
              <p className="text-gray-400 text-sm">
                Ebooks, cursos online, plantillas, software, música, fotografías, diseños y cualquier producto digital que imagines.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2">
                ¿Cómo recibo mis pagos?
              </h3>
              <p className="text-gray-400 text-sm">
                Recibe tus pagos directamente en tu cuenta bancaria. Soportamos Pagopar, transferencias y tarjetas de crédito.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2">
                ¿Hay costos ocultos?
              </h3>
              <p className="text-gray-400 text-sm">
                No. Solo pagas la comisión por venta. Sin mensualidades, sin costos de setup, sin sorpresas.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">¿Necesitas más ayuda?</p>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Contactar soporte
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/20 via-black to-[#00A3FF]/20"></div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#0066FF]/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#00A3FF]/30 rounded-full blur-[150px]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Comienza a vender hoy
          </h2>
          <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
            Únete a miles de creadores que ya confían en Ventra para monetizar su trabajo digital
          </p>
          <Link href="/registro">
            <Button size="lg" className="bg-gradient-to-r from-[#0066FF] to-[#00A3FF] text-white hover:from-[#0052CC] hover:to-[#0080FF] rounded-full px-12 py-8 text-xl font-semibold shadow-2xl shadow-white/40 hover:scale-105 transition-all">
              Crear cuenta gratis
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
          <p className="text-sm text-gray-500 mt-6">Sin tarjeta de crédito requerida</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#0066FF] to-[#00A3FF] bg-clip-text text-transparent font-[family-name:var(--font-hachi-maru)] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                VENTRA
              </span>
              <p className="text-sm text-gray-400 mt-4">
                La plataforma más confiable para vender productos digitales en Paraguay
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Producto</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#inicio" className="text-gray-400 hover:text-white transition">Inicio</Link></li>
                <li><Link href="#features" className="text-gray-400 hover:text-white transition">Features</Link></li>
                <li><Link href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Sobre nosotros</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Términos de uso</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Política de privacidad</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
            <p>© 2024 Ventra. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
