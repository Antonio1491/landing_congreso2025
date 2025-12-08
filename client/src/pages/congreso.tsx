import { Link } from "wouter";
import { ArrowLeft, Clock, Calendar, MapPin, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import logoUrl from "@assets/LOGO Congreso Parques_1758315663051.png";
import logoAnprBlanco from "@assets/LOGO ANPR-PERFIL-BLANCO_1758654877619.png";
import lineaTiempo from "@assets/image_1765236417102.png";
import conferenciaMagistral from "@assets/Conferencia Magistral_1758578349365.jpg";
import sesionEducativa from "@assets/Sesion educativa_1758578349360.jpg";
import tallerVivencial from "@assets/Taller vivencial_1758578349360.jpg";
import masterClasses from "@assets/Master classes_1758578349365.jpg";
import expoEspacioPublico from "@assets/Expo Espacio Publico_1758578349359.jpg";
import eventosSociales from "@assets/Eventos Sociales_1758578349366.jpg";
import conferenciasIconUrl from "@assets/Conferencias Magistrales_1758578569495.png";
import sesionesIconUrl from "@assets/Sesiones Educativas_1758578569496.png";
import talleresIconUrl from "@assets/Talleres Vivenciales_1758578569495.png";
import masterClassesIconUrl from "@assets/Master Classes_1758578569492.png";
import expoIconUrl from "@assets/Expo Espacio Publico_1758580313612.png";
import eventosIconUrl from "@assets/Eventos Sociales_1758578569496.png";

export default function Congreso() {
  const experiencias = [
    {
      iconUrl: conferenciasIconUrl,
      titulo: "Conferencias Magistrales",
      fecha: "14 y 15 de mayo",
      descripcion: "Líderes en parques y espacios públicos ofrecerán charlas inspiradoras basadas en su trayectoria y en los desafíos urbanos actuales.",
      imagen: conferenciaMagistral
    },
    {
      iconUrl: sesionesIconUrl,
      titulo: "Sesiones Educativas",
      fecha: "14 y 15 de mayo",
      descripcion: "Más de 30 sesiones educativas impartidas por conferencistas nacionales e internacionales ofrecerán un espacio dedicado al aprendizaje y la capacitación.",
      imagen: sesionEducativa
    },
    {
      iconUrl: talleresIconUrl,
      titulo: "Talleres Vivenciales",
      fecha: "13 de mayo",
      descripcion: "Explora parques urbanos, proyectos ciudadanos, centros recreativos y técnicas especializadas en temas clave del espacio público.",
      imagen: tallerVivencial
    },
    {
      iconUrl: masterClassesIconUrl,
      titulo: "Master Classes",
      fecha: "13 de mayo",
      descripcion: "Aprende de especialistas que te brindarán herramientas y técnicas avanzadas para profundizar en temas esenciales del espacio público.",
      imagen: masterClasses
    },
    {
      iconUrl: expoIconUrl,
      titulo: "Expo Espacio Público",
      fecha: "14 y 15 de mayo",
      descripcion: "El punto de encuentro de las compañías líderes que impulsan el sector, exhibiendo productos y servicios clave para transformar y equipar los espacios públicos.",
      imagen: expoEspacioPublico
    },
    {
      iconUrl: eventosIconUrl,
      titulo: "Eventos Sociales",
      fecha: "14 y 15 de mayo",
      descripcion: "Beer and Mix Party y ceremonia de clausura para networking y celebración.",
      imagen: eventosSociales
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
              Congreso Parques 2026
            </h1>
            <div className="w-32 h-1 bg-[#BCCE16] mx-auto mb-6"></div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
              Un espacio de aprendizaje y formación creado para quienes transforman los parques y espacios públicos en motores de bienestar urbano.
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
                  Reunir, integrar y capacitar presencialmente a profesionales, autoridades, academia, industria y sociedad civil del espacio público.
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
                <h4 className="text-lg font-bold text-[#0e0477] mb-2">Fechas</h4>
                <p className="text-gray-600">Del 13 al 15 de mayo del 2026</p>
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

        {/* Nuestro Legado */}
        <section className="py-16 bg-[#0e0477]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Nuestro Legado
            </h2>
            <div className="max-w-4xl mx-auto">
              <img 
                src={lineaTiempo} 
                alt="Línea del tiempo del Congreso Parques 2018-2024" 
                className="w-full h-auto"
                data-testid="linea-tiempo-img"
              />
            </div>
          </div>
        </section>

        {/* Diseña tu experiencia - Grid de tarjetas */}
        <section className="py-16" style={{ backgroundColor: '#35219b' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-2 uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Diseña tu experiencia
                </h2>
                <p className="text-white/80 text-lg">Los asistentes pueden participar en:</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experiencias.map((experiencia, index) => (
                  <div 
                    key={index} 
                    className="relative"
                    style={{ margin: '10px 8px' }}
                    data-testid={`experience-${index}`}
                  >
                    <Card className="bg-white overflow-visible relative">
                      <div className="absolute -top-2 -right-2 z-10 w-14 h-14 rounded-full bg-[#6847f6] flex items-center justify-center shadow-lg">
                        <img 
                          src={experiencia.iconUrl}
                          alt={`${experiencia.titulo} icon`}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img 
                          src={experiencia.imagen} 
                          alt={experiencia.titulo}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <CardContent className="p-4 flex flex-col h-44">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2 text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>{experiencia.titulo}</h3>
                          <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>{experiencia.descripcion}</p>
                        </div>
                        <div className="flex items-center justify-center text-sm font-medium mt-auto pt-2 border-t border-gray-100" style={{ color: '#35219b', fontFamily: 'Montserrat, sans-serif' }}>
                          <Calendar className="w-4 h-4 mr-2" />
                          {experiencia.fecha}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
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
