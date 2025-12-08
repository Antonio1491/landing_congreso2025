import { Link } from "wouter";
import { ArrowLeft, Users, Calendar, FileText, Award, CheckCircle, Send, Image, Printer, Eye, Scale } from "lucide-react";
import logoUrl from "@assets/LOGO Congreso Parques_1758315663051.png";

export default function PostersCientificos() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }} data-testid="page-title">
              Convocatoria
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Póster Científico
            </h2>
            <div className="w-32 h-1 bg-[#BCCE16] mx-auto mb-6"></div>
            <a href="#" className="inline-block bg-[#BCCE16] text-[#0e0477] font-bold px-8 py-3 rounded-lg hover:bg-[#d4e52a] transition-colors">
              Registrar Póster
            </a>
          </div>
        </section>

        {/* Instrucciones */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0e0477] mb-4">Instrucciones de participación</h3>
              <p className="text-gray-700 text-lg">
                Difunde tus ideas y trabajos de investigación, estudios de casos, buenas prácticas, proyectos preliminares, proyectos ejecutivos, ensayos o similares relacionados con el espacio público y parques, para ser exhibidos durante las actividades del Congreso Parques del 23 al 25 de octubre.
              </p>
            </div>
          </div>
        </section>

        {/* Quiénes pueden participar */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[#0e0477] mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6" /> ¿Quiénes pueden participar?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Estudiantes Universitarios (últimos dos años) o Postgrado en Facultades de Arquitectura y Urbanismo, Ciencias Naturales, Ingeniería, Ciencias Sociales, Tecnología Aplicada, Economía, y otras.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Organizaciones civiles relacionadas con la industria del espacio público (fundaciones, asociaciones, vecinos organizados, etc.)
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Organismos públicos y privados relacionados con el espacio público / urbanismo / espacios naturales.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Consultores, estudios de arquitectura o similares.
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center gap-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-[#6847f6]/10 rounded-full flex items-center justify-center">
                    <span className="text-5xl md:text-6xl">👩‍🔬</span>
                  </div>
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-[#6847f6]/10 rounded-full flex items-center justify-center">
                    <span className="text-5xl md:text-6xl">👨‍🔬</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fechas Importantes */}
        <section className="py-12 bg-white border-y border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-[#0e0477] mb-8 text-center flex items-center justify-center gap-2">
                <Calendar className="w-6 h-6" /> Fechas Importantes
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-[#6847f6] font-semibold mb-2">Convocatoria</h4>
                  <p className="text-gray-700">Mayo</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-[#6847f6] font-semibold mb-2">Revisión de propuestas</h4>
                  <p className="text-gray-700">Julio</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-[#6847f6] font-semibold mb-2">Resultados</h4>
                  <p className="text-gray-700">Julio</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notas y Beneficios */}
        <section className="py-16 bg-gradient-to-r from-[#0e0477] to-[#6847f6] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5" /> Notas importantes
                  </h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#BCCE16] flex-shrink-0 mt-0.5" />
                      Puedes participar individualmente, en grupo o en equipo.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#BCCE16] flex-shrink-0 mt-0.5" />
                      Los participantes deben ser mayores de edad.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#BCCE16] flex-shrink-0 mt-0.5" />
                      Solo se aceptará 1 póster por persona, grupo o equipo.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#BCCE16] flex-shrink-0 mt-0.5" />
                      Los grupos deben ser de un máximo de 3 personas.
                    </li>
                  </ul>
                  <h3 className="text-xl font-bold mb-4">Ejes temáticos</h3>
                  <p className="mb-2">Los temas deberán coincidir con los ejes del congreso.</p>
                  <Link href="/congreso-parques" className="text-[#BCCE16] font-semibold hover:underline">
                    Consultar Ejes Temáticos
                  </Link>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5" /> Beneficios
                  </h3>
                  <p className="mb-4">Este concurso premiará en 3 categorías correspondientes a los perfiles de los asistentes:</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#BCCE16] rounded-full"></span>
                      Estudiante
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#BCCE16] rounded-full"></span>
                      Joven Profesional
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#BCCE16] rounded-full"></span>
                      Profesional
                    </li>
                  </ul>
                  <p className="text-white/80 text-sm">Independientemente del origen o carácter de la institución u organización a la que pertenezcan.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premios */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-[#0e0477] mb-2">¡Todos los ganadores recibirán un diploma avalado por la Asociación Nacional de Parques y Recreación de México!</h3>
              <p className="text-lg text-[#6847f6] font-semibold mb-8">Se entregarán premios a los 3 primeros lugares de cada categoría.</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-white rounded-lg p-6">
                  <span className="text-4xl mb-2 block">🥇</span>
                  <p className="font-bold text-xl">100% descuento</p>
                  <p className="text-sm">Inscripción Oro al Congreso</p>
                </div>
                <div className="bg-gradient-to-br from-gray-300 to-gray-400 text-white rounded-lg p-6">
                  <span className="text-4xl mb-2 block">🥈</span>
                  <p className="font-bold text-xl">75% descuento</p>
                  <p className="text-sm">Inscripción Oro al Congreso</p>
                </div>
                <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-lg p-6">
                  <span className="text-4xl mb-2 block">🥉</span>
                  <p className="font-bold text-xl">50% descuento</p>
                  <p className="text-sm">Inscripción Oro al Congreso</p>
                </div>
              </div>
              <p className="mt-6 text-gray-600 text-sm">
                <strong className="text-[#0e0477]">Nota:</strong> Los gastos relacionados con la inscripción a los talleres, el transporte, el alojamiento, las comidas y los honorarios no están incluidos.
              </p>
            </div>
          </div>
        </section>

        {/* Envío de propuestas */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-[#0e0477] mb-4 flex items-center gap-2">
                <Send className="w-6 h-6" /> Envío de propuestas
              </h3>
              <p className="text-gray-700 mb-4">Es necesario que los autores de los trabajos presenten su propuesta y el póster a esta convocatoria antes del 15 de julio.</p>
              <p className="text-gray-700 mb-4">La propuesta debe cumplir con los siguientes requisitos:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                  Enviar el documento resumen en formato .doc
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                  Extensión máximo 1 página tamaño carta, a espacio sencillo, márgenes superior e inferior de 2.5 cm. y derecho e izquierdo de 3 cm.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                  Título: Fuente Times New Roman tamaño 12, centrado, en mayúsculas, negrita y subrayado.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                  Autores: nombre de los autores en fuente Times New Roman tamaño 10, en cursiva y justificado a la izquierda.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                  Cuerpo del resumen: fuente Times New Roman tamaño 10 y párrafo justificado.
                </li>
              </ul>

              <h4 className="text-lg font-bold text-[#0e0477] mb-3">Sección del resumen:</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong className="text-[#6847f6]">Introducción y/u objetivos:</strong> describir brevemente el planteamiento del problema y la justificación del trabajo.</li>
                <li><strong className="text-[#6847f6]">Metodología:</strong> explicar la metodología y tipo de trabajo.</li>
                <li><strong className="text-[#6847f6]">Resultados:</strong> describir los resultados obtenidos en el estudio.</li>
                <li><strong className="text-[#6847f6]">Conclusiones y/o discusión:</strong> relación del trabajo con la bibliografía previa, discusión de los resultados obtenidos.</li>
                <li><strong className="text-[#6847f6]">Bibliografía:</strong> incluir hasta cuatro referencias bibliográficas.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Formato del Póster */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-[#0e0477] mb-8 text-center flex items-center justify-center gap-2">
                <Image className="w-6 h-6" /> Formato del Póster Digital
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex justify-center">
                  <div className="w-48 h-72 bg-gradient-to-b from-[#6847f6] to-[#0e0477] rounded-lg shadow-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">PÓSTER</span>
                  </div>
                </div>
                <div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-1.5 flex-shrink-0"></span>
                      Nombre del autor o autores en el encabezado.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-1.5 flex-shrink-0"></span>
                      Categoría: Profesional - Joven Profesional - Estudiante.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-1.5 flex-shrink-0"></span>
                      Título.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-1.5 flex-shrink-0"></span>
                      Tipo de trabajo: tesis, investigación, proyecto, etc.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-1.5 flex-shrink-0"></span>
                      Origen: Ciudad y País.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-1.5 flex-shrink-0"></span>
                      Introducción, Metodología, Resultados / Discusión.
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-gray-700 text-sm mb-4">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-1.5 flex-shrink-0"></span>
                      Conclusión.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-1.5 flex-shrink-0"></span>
                      Bibliografía.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-1.5 flex-shrink-0"></span>
                      Año de elaboración / ejecución.
                    </li>
                  </ul>
                  <h4 className="font-bold text-[#0e0477] mb-2">Entrega digital:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Formato PDF</li>
                    <li>• Peso inferior a 10 MB</li>
                    <li>• Resolución 72 ppp</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formato Impreso */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-[#0e0477] mb-8 text-center flex items-center justify-center gap-2">
                <Printer className="w-6 h-6" /> Formato del Póster Impreso
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-4">En caso de ser seleccionado es importante considerar el tamaño de letra aproximado para cada una de las partes del póster impreso:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Título: 100 puntos</li>
                    <li>• Autores y sede: 80 puntos</li>
                    <li>• Títulos para secciones: 60 puntos</li>
                    <li>• Cuerpo de texto: 40 puntos</li>
                    <li>• Notas de pie: 25 puntos</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow">
                  <h4 className="font-bold text-[#0e0477] mb-3">Entrega Impresa:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Tamaño: 24" x 36" (60.92 x 91.44 cm)</li>
                    <li>• Full Color</li>
                    <li>• 300 dpi</li>
                    <li>• Impresión en plotter</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gastos */}
        <section className="py-8 bg-amber-50 border-y border-amber-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-[#0e0477] mb-3">Gastos:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  Todos los costos de elaboración y diseño serán responsabilidad del (los) autor (es) del trabajo.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  La organización únicamente facilitará panelería y planificación de exposiciones.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  Los gastos de viaje, alimentación y alojamiento de los participantes no serán cubiertos por la organización.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Exhibición */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-[#0e0477] mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6" /> Exhibición
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>El póster podrá ser exhibido durante el programa del congreso. La exhibición se realizará en las sesiones educativas, charlas y/o Expo de acuerdo a lo que determine el Centro de Convenciones con sus criterios de uso, funcionalidad o normas de seguridad.</p>
                <p>Los autores podrán acompañar sus carteles en los horarios que se determinen para resolver dudas de los asistentes.</p>
                <p>Los ganadores que asistan al congreso podrán entregar su póster impreso al comité organizador durante las fechas del congreso.</p>
                <p>Los carteles también serán publicados en las redes sociales y páginas oficiales de la Asociación Nacional de Parques y Recreación de México.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Jurado */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-[#0e0477] mb-4 text-center flex items-center justify-center gap-2">
                <Scale className="w-6 h-6" /> Jurado
              </h3>
              <p className="text-center text-gray-700 mb-6">El jurado estará compuesto por profesionales y expertos del sector de parques y espacios públicos.</p>
              <div className="bg-white rounded-lg p-6 shadow">
                <p className="text-gray-700 mb-4">La clasificación se realizará con puntuaciones del 1 al 5 según criterios:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                    Correspondencia a los ejes del congreso.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                    Presentación general.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                    Creatividad, innovación, originalidad en la propuesta.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                    Número de personas beneficiadas con el proyecto.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                    Viabilidad de la propuesta (objetivos, tiempos y presupuesto requerido).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                    Contexto en el que se desarrolla.
                  </li>
                </ul>
                <p className="mt-4 text-gray-600 text-sm italic">Los resultados no pueden ser apelados por los participantes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-white text-center">
          <a href="#" className="inline-block bg-[#6847f6] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#5a3dd6] transition-colors">
            Registrar Póster
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
