import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import logoUrl from "@assets/LOGO Congreso Parques_1758315663051.png";

export default function Sede() {
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
              Tijuana, Baja California
            </h1>
            <div className="w-32 h-1 bg-[#BCCE16] mx-auto"></div>
          </div>
        </section>

        {/* Bienvenida */}
        <section className="bg-gradient-to-r from-[#0e0477] to-[#6847f6] py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-[#BCCE16] text-2xl font-bold mb-4">¡Bienvenido a Tijuana, Baja California!</h3>
            <p className="text-white text-lg max-w-4xl mx-auto">
              Tijuana, la puerta de México hacia el mundo, te invita a un viaje fascinante por su rica cultura y modernidad. 
              Ciudad fronteriza cosmopolita, conserva un legado único que se refleja en sus calles vibrantes, su gastronomía 
              de clase mundial y su espíritu emprendedor.
            </p>
          </div>
        </section>

        {/* Video y descripción */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/vPTeF6d3SiA?si=zfb7a3UlDWk0uwiv" 
                  title="Tijuana Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div>
                <p className="text-gray-700 mb-4 text-justify">
                  Tijuana es un destino que te cautivará con su energía y diversidad cultural.
                </p>
                <p className="text-gray-700 mb-2">Anímate a visitar esta vibrante ciudad:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span><strong className="text-[#0e0477]">Conoce la cultura fronteriza:</strong> Tijuana es el corazón de la fusión México-Estados Unidos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span><strong className="text-[#0e0477]">Disfruta del clima mediterráneo:</strong> Tijuana tiene un clima agradable durante todo el año.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span><strong className="text-[#0e0477]">Vive experiencias únicas:</strong> Valle de Guadalupe, playas, gastronomía de autor.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span><strong className="text-[#0e0477]">Degusta la gastronomía Baja Med:</strong> una explosión de sabores y creatividad culinaria.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span><strong className="text-[#0e0477]">Descansa y experimenta:</strong> un ambiente vibrante y lleno de arte urbano.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Centro de Convenciones */}
        <section className="py-16 bg-[#0e0477]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Centro de Convenciones Tijuana
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
              <div className="text-white/90 text-justify space-y-4">
                <p>
                  Lugar sede de nuestro Congreso Internacional de Parques Urbanos "Congreso Parques"; este centro de 
                  convenciones y exposiciones de renombre internacional está ubicado estratégicamente en Tijuana, 
                  con fácil acceso desde los principales hoteles y el aeropuerto. Aquí disfrutarás de una experiencia 
                  única y emocionante.
                </p>
                <p>
                  El lugar sede del Congreso Parques es el escenario perfecto para reunir a expertos y profesionales 
                  en el ámbito de los parques urbanos. Sus amplias y modernas instalaciones brindan el espacio necesario 
                  para conferencias, presentaciones y exposiciones. Además, su ubicación estratégica facilita el acceso 
                  y ofrece comodidad a los visitantes.
                </p>
              </div>
              <div className="text-center">
                <div className="w-full h-64 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">🏛️</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Descubre Tijuana */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-xl font-bold text-[#0e0477] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Descubre Tijuana: Imperdibles que no puedes dejar pasar
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span><strong className="text-[#0e0477]">Paseo por la Avenida Revolución:</strong> un paseo por esta emblemática avenida es como un viaje a la esencia de Tijuana, con su arte urbano, restaurantes y vida nocturna.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span><strong className="text-[#0e0477]">Valle de Guadalupe:</strong> la región vinícola más importante de México, a solo 45 minutos de la ciudad.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span><strong className="text-[#0e0477]">Degusta la gastronomía Baja Med:</strong> ninguna visita a Tijuana está completa sin probar los sabores auténticos de la cocina Baja Med, fusión de ingredientes locales con técnicas internacionales.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span><strong className="text-[#0e0477]">Centro Cultural Tijuana (CECUT):</strong> el icónico "La Bola" es un tributo a la cultura y el arte de la región.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span><strong className="text-[#0e0477]">Playas de Rosarito y Ensenada:</strong> refresca tu cuerpo en las hermosas playas del Pacífico, a pocos minutos de la ciudad.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0e0477] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Bares y Restaurantes: Una Noche para Recordar
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>
                      <strong className="text-[#0e0477]">Foodgarden:</strong> experiencia gastronómica con los mejores chefs de la ciudad.{" "}
                      <a href="#" className="text-[#6847f6] hover:underline inline-flex items-center gap-1">
                        ¡Saber más! <ExternalLink className="w-3 h-3" />
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>
                      <strong className="text-[#0e0477]">Cervecería Insurgente:</strong> pionera del movimiento craft beer en México.{" "}
                      <a href="#" className="text-[#6847f6] hover:underline inline-flex items-center gap-1">
                        ¡Saber más! <ExternalLink className="w-3 h-3" />
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>
                      <strong className="text-[#0e0477]">Misión 19:</strong> alta cocina Baja Med con vistas espectaculares.{" "}
                      <a href="#" className="text-[#6847f6] hover:underline inline-flex items-center gap-1">
                        ¡Saber más! <ExternalLink className="w-3 h-3" />
                      </a>
                    </span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-[#0e0477] mt-8 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Lugares Emblemáticos
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span><strong className="text-[#0e0477]">Parque Morelos:</strong> el parque urbano más grande de la ciudad, ideal para actividades al aire libre.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span><strong className="text-[#0e0477]">Playas de Tijuana:</strong> disfruta del atardecer con vista al Océano Pacífico y el icónico faro.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span><strong className="text-[#0e0477]">La Calle Sexta:</strong> el corazón de la vida nocturna y gastronómica de Tijuana.</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-8">
              *Recomendamos verificar horarios de cada lugar para planear su visita.
            </p>
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
