import { Link } from "wouter";
import { ArrowLeft, Plane, Bus } from "lucide-react";
import logoUrl from "@assets/LOGO Congreso Parques_1758315663051.png";

export default function Conectividad() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#6847f6] shadow-lg">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 md:py-4">
            <Link href="/" className="flex items-center gap-3" data-testid="logo-link">
              <img src={logoUrl} alt="IX Congreso Internacional de Parques Urbanos y Espacio Público" className="h-12 sm:h-14 md:h-16 w-auto" data-testid="header-logo" />
              <div className="bg-[#0e0477] px-2.5 py-1 rounded-sm">
                <span className="text-[#d2dd0a] font-black text-xs md:text-sm tracking-wide" style={{fontFamily: 'Montserrat, sans-serif'}}>TIJUANA <span className="text-[#1edede]">2026</span></span>
              </div>
            </Link>
            <Link href="/" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors" data-testid="back-to-home">
              <ArrowLeft className="w-5 h-5" /><span className="hidden sm:inline">Volver al inicio</span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-20 md:pt-24">
        {/* Hero Header */}
        <section className="bg-gradient-to-b from-[#0e0477] to-[#6847f6] py-16 md:py-24 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }} data-testid="page-title">
              Conectividad
            </h1>
            <div className="w-32 h-1 bg-[#BCCE16] mx-auto"></div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-gradient-to-r from-[#0e0477] to-[#6847f6] py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-[#BCCE16] text-2xl font-bold mb-4">¿Cómo llegar a Tijuana?</h3>
            <p className="text-white text-lg max-w-4xl mx-auto">
              Al ser un destino de carácter de ciudad fronteriza, cosmopolita y de progresivo desarrollo económico, llegar a Tijuana no conlleva mayores dificultades, ya que puede accederse tanto por aire como por tierra.
            </p>
          </div>
        </section>

        {/* Conectividad Aérea */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0e0477]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Conectividad Aérea
                </h2>
                <Plane className="w-8 h-8 text-[#6847f6]" />
              </div>
              <p className="text-gray-700 mb-8 max-w-3xl">
                El Aeropuerto Internacional General Abelardo L. Rodríguez o Aeropuerto Internacional de Tijuana es uno de los aeropuertos más importantes de México, con conexión directa a Estados Unidos a través del Cross Border Xpress (CBX).
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-bold text-[#0e0477] mb-4">Vuelos directos internacionales:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#BCCE16] mt-1">•</span>
                      <span>Los Angeles, California (LAX)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BCCE16] mt-1">•</span>
                      <span>San Diego, California (SAN) - vía CBX</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BCCE16] mt-1">•</span>
                      <span>Houston, Texas (IAH)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BCCE16] mt-1">•</span>
                      <span>Dallas/Fort Worth, Texas (DFW)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BCCE16] mt-1">•</span>
                      <span>Phoenix, Arizona (PHX)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BCCE16] mt-1">•</span>
                      <span>Las Vegas, Nevada (LAS)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0e0477] mb-4">Vuelos directos nacionales:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#BCCE16] mt-1">•</span>
                      <span>Ciudad de México (MEX)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BCCE16] mt-1">•</span>
                      <span>Guadalajara (GDL)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BCCE16] mt-1">•</span>
                      <span>Monterrey (MTY)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BCCE16] mt-1">•</span>
                      <span>León/El Bajío (BJX)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BCCE16] mt-1">•</span>
                      <span>Culiacán (CUL)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BCCE16] mt-1">•</span>
                      <span>Hermosillo (HMO)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BCCE16] mt-1">•</span>
                      <span>Los Mochis (LMM)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BCCE16] mt-1">•</span>
                      <span>Querétaro (QRO)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-[#0e0477] mb-6">Aerolíneas</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-20">
                    <span className="text-gray-600 font-semibold text-sm">Aeroméxico</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-20">
                    <span className="text-gray-600 font-semibold text-sm">Volaris</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-20">
                    <span className="text-gray-600 font-semibold text-sm">VivaAerobus</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-20">
                    <span className="text-gray-600 font-semibold text-sm">American Airlines</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-20">
                    <span className="text-gray-600 font-semibold text-sm">United</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-20">
                    <span className="text-gray-600 font-semibold text-sm">Delta</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conectividad Terrestre */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0e0477]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Conectividad Terrestre
                </h2>
                <Bus className="w-8 h-8 text-[#6847f6]" />
              </div>
              <p className="text-gray-700 mb-8 max-w-3xl">
                Tijuana tiene acceso a las redes carreteras y puertos más importantes, conectando de manera rápida tanto el norte como al sur del país.
              </p>

              <h3 className="text-xl font-bold text-[#0e0477] mb-6">Estados con los que conecta de manera más directa vía terrestre:</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-12 h-12 bg-[#6847f6]/10 rounded-full flex items-center justify-center">
                      <span className="text-xl">🚗</span>
                    </div>
                    <div>
                      <span className="text-gray-700">Baja California Sur</span>
                      <span className="text-[#0e0477] font-bold ml-2">| 1,500 km</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-12 h-12 bg-[#6847f6]/10 rounded-full flex items-center justify-center">
                      <span className="text-xl">🚗</span>
                    </div>
                    <div>
                      <span className="text-gray-700">Sonora</span>
                      <span className="text-[#0e0477] font-bold ml-2">| 650 km</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-12 h-12 bg-[#6847f6]/10 rounded-full flex items-center justify-center">
                      <span className="text-xl">🚗</span>
                    </div>
                    <div>
                      <span className="text-gray-700">Sinaloa</span>
                      <span className="text-[#0e0477] font-bold ml-2">| 1,200 km</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-12 h-12 bg-[#6847f6]/10 rounded-full flex items-center justify-center">
                      <span className="text-xl">🚗</span>
                    </div>
                    <div>
                      <span className="text-gray-700">Chihuahua</span>
                      <span className="text-[#0e0477] font-bold ml-2">| 1,400 km</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-12 h-12 bg-[#6847f6]/10 rounded-full flex items-center justify-center">
                      <span className="text-xl">🚗</span>
                    </div>
                    <div>
                      <span className="text-gray-700">Ciudad de México</span>
                      <span className="text-[#0e0477] font-bold ml-2">| 2,800 km</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-12 h-12 bg-[#6847f6]/10 rounded-full flex items-center justify-center">
                      <span className="text-xl">🚗</span>
                    </div>
                    <div>
                      <span className="text-gray-700">Guadalajara</span>
                      <span className="text-[#0e0477] font-bold ml-2">| 2,200 km</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-[#0e0477] rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Cross Border Xpress (CBX)</h3>
                <p className="text-white/90">
                  Tijuana cuenta con el Cross Border Xpress, un puente peatonal que conecta directamente el Aeropuerto de Tijuana con San Diego, California. Esta innovadora infraestructura permite a los viajeros cruzar la frontera de manera rápida y eficiente.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-[#0e0477] text-white text-center">
        <div className="container mx-auto px-4">
          <p className="text-white/80 text-sm">© 2026 IX Congreso Internacional de Parques Urbanos y Espacio Público. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
