import { Link } from "wouter";
import { ArrowLeft, Clock, Calendar, MapPin, Globe } from "lucide-react";
import logoUrl from "@assets/LOGO Congreso Parques_1758315663051.png";
import logoAnprBlanco from "@assets/LOGO ANPR-PERFIL-BLANCO_1758654877619.png";
import conferenciaMagistral from "@assets/Conferencia Magistral_1758578349365.jpg";
import sesionEducativa from "@assets/Sesion educativa_1758578349360.jpg";
import tallerVivencial from "@assets/Taller vivencial_1758578349360.jpg";
import masterClasses from "@assets/Master classes_1758578349365.jpg";
import expoEspacioPublico from "@assets/Expo Espacio Publico_1758578349359.jpg";
import eventosSociales from "@assets/Eventos Sociales_1758578349366.jpg";

export default function Congreso() {
  const ejesTematicos = [
    {
      titulo: "Medio Ambiente y Sustentabilidad",
      contenido: [
        "Estrategias de diseño para la conservación de la biodiversidad en parques.",
        "Implementación de prácticas sostenibles en el mantenimiento de espacios verdes.",
        "Desarrollo de parques como áreas de mitigación del cambio climático."
      ]
    },
    {
      titulo: "Salud y Bienestar",
      contenido: [
        "Estudios sobre el impacto de la exposición a la naturaleza en la salud mental y física.",
        "Programas de ejercicio y actividades físicas en parques para mejorar el bienestar comunitario.",
        "Diseño de espacios que fomenten la relajación y la reducción del estrés.",
        "El desarrollo del deporte en el espacio público, infancias y jóvenes."
      ]
    },
    {
      titulo: "Eventos, Recreación y Participación Ciudadana",
      contenido: [
        "Organización de eventos culturales y recreativos para fortalecer la comunidad.",
        "Estrategias para aumentar la participación ciudadana en la planificación y mantenimiento de parques.",
        "Programas educativos o de voluntariado.",
        "Experiencias exitosas de estrategias de comunicación."
      ]
    },
    {
      titulo: "Diseño, Mantenimiento y Equipamiento",
      contenido: [
        "Innovaciones en el diseño de parques y espacios públicos para maximizar la funcionalidad.",
        "Mejores prácticas en el mantenimiento eficiente de áreas verdes y equipamiento.",
        "Implementación de planes maestros de mantenimiento y/o gestión."
      ]
    },
    {
      titulo: "Innovación y Tecnología",
      contenido: [
        "Aplicaciones y plataformas digitales para mejorar o conocer la experiencia del visitante.",
        "Incorporación de tecnologías emergentes, como inteligencia artificial o realidad virtual.",
        "Desarrollo de soluciones tecnológicas para abordar desafíos específicos en la gestión de parques."
      ]
    },
    {
      titulo: "Ciudad y Movilidad",
      contenido: [
        "Integración de planes de movilidad urbana.",
        "Diseño de espacios públicos que fomenten modos de transporte sostenibles.",
        "Mejora de la accesibilidad y conectividad a parques en entornos urbanos.",
        "Planificación Urbana y sistemas de parques.",
        "Modelos de gestión y gobernanza."
      ]
    }
  ];

  const experiencias = [
    {
      titulo: "Conferencias Magistrales",
      fecha: "14 al 15 de Mayo",
      descripcion: "Contaremos con expertos en parques urbanos y espacios públicos; ellos hablarán sobre sus experiencias profesionales y personales además de tocar temas de interés común para nuestras ciudades.",
      imagen: conferenciaMagistral,
      link: "/programa",
      posicionImagen: "left"
    },
    {
      titulo: "Sesiones Educativas",
      fecha: "14 y 15 de Mayo",
      descripcion: "El momento asignado para el aprendizaje y capacitación será en las más de 40 sesiones educativas que contarán con conferencistas nacionales e internacionales.",
      imagen: sesionEducativa,
      link: "/programa",
      posicionImagen: "right"
    },
    {
      titulo: "Talleres Vivenciales",
      fecha: "13 de Mayo",
      descripcion: "Desde parques urbanos, proyectos ciudadanos y centros recreativos hasta técnicas sobre temas diversos del espacio público. Esta es una gran oportunidad para expandir tu conocimiento.",
      imagen: tallerVivencial,
      link: "/talleres",
      posicionImagen: "left"
    },
    {
      titulo: "Master Classes",
      fecha: "13 de Mayo",
      descripcion: "Obtén conocimientos técnicos sobre un tema especializado, contarás con la orientación de un especialista que te ayudará a ampliar tus conocimientos y aprender técnicas sobre diversos temas del espacio público.",
      imagen: masterClasses,
      link: "/talleres",
      posicionImagen: "right"
    },
    {
      titulo: "Expo Espacio Público",
      fecha: "14 al 15 de Mayo",
      descripcion: "Es el foro de negocios que reúne a las empresas líderes del mercado en México y el mundo, presentando los mejores productos y servicios para el diseño, construcción y equipamiento del espacio público.",
      imagen: expoEspacioPublico,
      link: "/expo-espacio-publico",
      posicionImagen: "left"
    },
    {
      titulo: "Eventos Sociales",
      fecha: "13 al 15 de Mayo",
      descripcion: "Amplía tu red profesional y disfruta de los 3 eventos organizados especialmente para ti. Asiste a la fiesta de bienvenida, la fiesta de la cerveza y la fiesta de clausura del Congreso.",
      imagen: eventosSociales,
      link: "/eventos-sociales",
      posicionImagen: "right"
    }
  ];

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
              Congreso Parques
            </h1>
            <div className="w-32 h-1 bg-[#BCCE16] mx-auto mb-6"></div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
              Un evento especializado de educación y contenido experimental, dirigido a profesionales en espacios públicos y parques urbanos.
            </p>
          </div>
        </section>

        {/* Objetivo del Evento */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0e0477] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Objetivo del evento
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Reunir, integrar y capacitar presencial a los profesionales, sociedad civil, funcionarios públicos, academia e industria del espacio público.
                </p>
              </div>
              <div className="text-center">
                <img src={logoUrl} alt="Congreso Parques" className="max-w-[280px] mx-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Línea divisora */}
        <div className="container mx-auto px-4">
          <div className="h-px bg-gray-300 max-w-6xl mx-auto"></div>
        </div>

        {/* Info Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#0e0477]/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-10 h-10 text-[#0e0477]" />
                </div>
                <h4 className="text-lg font-bold text-[#0e0477] mb-2">Duración</h4>
                <p className="text-gray-600">3 días de actividades</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#0e0477]/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-10 h-10 text-[#0e0477]" />
                </div>
                <h4 className="text-lg font-bold text-[#0e0477] mb-2">Fecha</h4>
                <p className="text-gray-600">Del 13 al 15 de Mayo del 2026</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#0e0477]/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-10 h-10 text-[#0e0477]" />
                </div>
                <h4 className="text-lg font-bold text-[#0e0477] mb-2">Lugar</h4>
                <p className="text-gray-600">Tijuana, Baja California, México</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#0e0477]/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-10 h-10 text-[#0e0477]" />
                </div>
                <h4 className="text-lg font-bold text-[#0e0477] mb-2">Lenguaje Oficial</h4>
                <p className="text-gray-600">Español</p>
              </div>
            </div>
          </div>
        </section>

        {/* Video y Organizado por */}
        <section className="bg-[#0e0477] py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/uqru5Tgoj_U?si=T_yqMzbu_xmEw33u" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="text-center py-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Organizado por:
                </h2>
                <img src={logoAnprBlanco} alt="ANPR" className="max-w-[200px] mx-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Ejes Temáticos */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0e0477] mb-12 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Ejes Temáticos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {ejesTematicos.map((eje, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="flex h-2">
                    <div className="w-1/2 bg-[#BCCE16]"></div>
                    <div className="w-1/2 bg-[#1edede]"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#0e0477] mb-4">{eje.titulo}</h3>
                    <ul className="space-y-2">
                      {eje.contenido.map((item, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                          <span className="text-[#BCCE16] mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Línea divisora */}
        <div className="container mx-auto px-4 bg-gray-50">
          <div className="h-px bg-gray-300 max-w-6xl mx-auto"></div>
        </div>

        {/* Diseña tu experiencia */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0e0477] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Diseña tu experiencia
            </h2>
            <p className="text-gray-600 text-lg">Los asistentes pueden participar en:</p>
          </div>

          {experiencias.map((exp, index) => (
            <div 
              key={index} 
              className="relative min-h-[400px] bg-cover bg-center flex items-center"
              style={{ backgroundImage: `linear-gradient(to ${exp.posicionImagen === 'left' ? 'left' : 'right'}, rgba(14, 4, 119, 0.85) 50%, transparent 100%), url(${exp.imagen})` }}
            >
              <div className="container mx-auto px-4">
                <div className={`max-w-xl ${exp.posicionImagen === 'left' ? 'ml-auto mr-0 md:mr-12' : 'mr-auto ml-0 md:ml-12'} text-white py-12`}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{exp.titulo}</h3>
                  <p className="text-[#BCCE16] font-semibold mb-4">{exp.fecha}</p>
                  <p className="text-white/90 mb-6 leading-relaxed">{exp.descripcion}</p>
                  <Link 
                    href={exp.link}
                    className="inline-block bg-[#BCCE16] text-[#0e0477] font-bold px-6 py-3 rounded-lg hover:bg-[#d4e620] transition-colors"
                  >
                    Ver Más
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
