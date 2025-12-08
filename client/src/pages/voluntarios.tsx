import { Link } from "wouter";
import { ArrowLeft, Heart, Users, Calendar, ClipboardList, Clock, Shirt, Utensils, CheckCircle } from "lucide-react";
import logoUrl from "@assets/LOGO Congreso Parques_1758315663051.png";

export default function Voluntarios() {
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
              Voluntarios
            </h1>
            <div className="w-32 h-1 bg-[#BCCE16] mx-auto mb-6"></div>
            <a href="#" className="inline-block bg-[#BCCE16] text-[#0e0477] font-bold px-8 py-3 rounded-lg hover:bg-[#d4e52a] transition-colors">
              Registrarme como voluntario
            </a>
          </div>
        </section>

        {/* Beneficios y Requisitos */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Beneficios */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-[#6847f6]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-12 h-12 text-[#6847f6]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0e0477] mb-4">Beneficios de ser voluntario</h3>
                  <ul className="text-left space-y-2">
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#BCCE16] flex-shrink-0 mt-0.5" />
                      Precio preferencial para voluntarios
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#BCCE16] flex-shrink-0 mt-0.5" />
                      Contacto con más de 40 ponentes nacionales e internacionales.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#BCCE16] flex-shrink-0 mt-0.5" />
                      Capacitación en áreas especializadas.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#BCCE16] flex-shrink-0 mt-0.5" />
                      Networking.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#BCCE16] flex-shrink-0 mt-0.5" />
                      Acceso a eventos sociales
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#BCCE16] flex-shrink-0 mt-0.5" />
                      Diploma de voluntariado.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#BCCE16] flex-shrink-0 mt-0.5" />
                      Diploma de asistencia al congreso.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#BCCE16] flex-shrink-0 mt-0.5" />
                      ¡Y mucho más!
                    </li>
                  </ul>
                </div>

                {/* Requisitos */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-[#6847f6]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-[#6847f6]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0e0477] mb-4">¿Qué necesitas para ser voluntario?</h3>
                  <ul className="text-left space-y-2">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Inscribirse al programa de voluntarios dentro del periodo determinado.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Tener disponibilidad para desempeñarse como voluntario por lo menos un día del Congreso.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Asistir a la capacitación online. (Esta capacitación es indispensable)
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Cumplir con los tiempos y turnos a las actividades del congreso.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Conocimiento del idioma inglés (al menos nivel intermedio).
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fechas Importantes */}
        <section className="py-12 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-[#0e0477] mb-8 text-center flex items-center justify-center gap-2">
                <Calendar className="w-6 h-6" /> Fechas Importantes
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-lg p-6 shadow">
                  <h4 className="text-[#6847f6] font-semibold mb-2">Apertura de Convocatoria</h4>
                  <p className="text-gray-700">15 de Julio</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow">
                  <h4 className="text-[#6847f6] font-semibold mb-2">Período de evaluación</h4>
                  <p className="text-gray-700">15 de Julio al 01 de Septiembre</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow">
                  <h4 className="text-[#6847f6] font-semibold mb-2">Cierre de Convocatoria</h4>
                  <p className="text-gray-700">01 de Septiembre</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Actividades y Horarios */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Actividades */}
                <div>
                  <h3 className="text-xl font-bold text-[#0e0477] mb-4 flex items-center gap-2">
                    <ClipboardList className="w-5 h-5" /> Actividades previstas:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Apoyar a la organización y distribución de materiales.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Atender y apoyar en el área de registro.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Orientar y apoyar a los participantes.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Hacer el seguimiento del ingreso a las salas y brindar respaldo en caso de contratiempos.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Acompañar a los talleres (23 de octubre).
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Apoyar a los ponentes.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Asistencia en los eventos sociales.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Apoyar en el área de Expo Parques.
                    </li>
                  </ul>
                </div>

                {/* Horarios */}
                <div>
                  <h3 className="text-xl font-bold text-[#0e0477] mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5" /> Horarios Disponibles
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-[#6847f6] text-white">
                          <th className="border border-gray-300 p-3">Miércoles</th>
                          <th className="border border-gray-300 p-3">Jueves</th>
                          <th className="border border-gray-300 p-3">Viernes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-center">
                          <td className="border border-gray-300 p-3">23 de octubre</td>
                          <td className="border border-gray-300 p-3">24 de octubre</td>
                          <td className="border border-gray-300 p-3">25 de octubre</td>
                        </tr>
                        <tr className="text-center bg-gray-50">
                          <td className="border border-gray-300 p-3">8:00 hrs. - 19:00 hrs.</td>
                          <td className="border border-gray-300 p-3">8:00 hrs. - 19:00 hrs.</td>
                          <td className="border border-gray-300 p-3">8:00 hrs. - 19:00 hrs.</td>
                        </tr>
                        <tr className="text-center">
                          <td className="border border-gray-300 p-3 font-semibold text-[#6847f6]">7 voluntarios</td>
                          <td className="border border-gray-300 p-3 font-semibold text-[#6847f6]">7 voluntarios</td>
                          <td className="border border-gray-300 p-3 font-semibold text-[#6847f6]">7 voluntarios</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-gray-600 text-sm italic">
                    <strong>Nota:</strong> Recuerda llegar 30 minutos antes de tu turno.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instrucciones y Otros */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Instrucciones */}
                <div>
                  <h3 className="text-xl font-bold text-[#0e0477] mb-4">Instrucciones:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-6 h-6 bg-[#6847f6] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                      Completa el formulario de registro.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-6 h-6 bg-[#6847f6] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                      Selecciona el turno disponible que prefieras. Al seleccionar el turno te comprometes a cumplirlo.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-6 h-6 bg-[#6847f6] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                      Deja tus datos personales. Todos los campos son necesarios.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-6 h-6 bg-[#6847f6] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                      Espera un correo de confirmación con más detalles.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-6 h-6 bg-[#6847f6] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">5</span>
                      Asiste a la capacitación en línea de voluntarios (indispensable).
                    </li>
                  </ul>
                </div>

                {/* Alimentos y vestimenta */}
                <div>
                  <h3 className="text-xl font-bold text-[#0e0477] mb-4 flex items-center gap-2">
                    <Utensils className="w-5 h-5" /> Alimentos, transporte y hospedaje:
                  </h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      A excepción de los alimentos en talleres y eventos sociales, cada voluntario es responsable de sus alimentos.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Los traslados hacia y desde el centro de congresos serán responsabilidad de cada uno.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      El hospedaje es responsabilidad de cada voluntario.
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-[#0e0477] mb-2 flex items-center gap-2">
                    <Shirt className="w-5 h-5" /> Vestimenta
                  </h3>
                  <p className="text-gray-700">La vestimenta es casual y cómoda.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-white text-center">
          <a href="#" className="inline-block bg-[#6847f6] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#5a3dd6] transition-colors">
            Registrarme como voluntario
          </a>
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
