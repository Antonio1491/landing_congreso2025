import { Link } from "wouter";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useState } from "react";
import logoUrl from "@assets/LOGO Congreso Parques_1758315663051.png";

interface FAQItem {
  pregunta: string;
  respuesta: string | string[];
}

interface FAQSection {
  titulo: string;
  preguntas: FAQItem[];
}

function AccordionItem({ pregunta, respuesta, isOpen, onClick }: { pregunta: string; respuesta: string | string[]; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border border-gray-200 rounded-lg mb-2 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-[#0e0477]">{pregunta}</span>
        <ChevronDown className={`w-5 h-5 text-[#0e0477] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 bg-white">
          {Array.isArray(respuesta) ? (
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {respuesta.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">{respuesta}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default function PreguntasFrecuentes() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ "0-0": true, "1-0": true, "2-0": true });

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const faqSections: FAQSection[] = [
    {
      titulo: "Sobre el Congreso:",
      preguntas: [
        {
          pregunta: "¿Qué es el evento?",
          respuesta: "El Congreso Parques es un evento presencial que se realiza anualmente y que tiene como objetivo reunir y capacitar a profesionales, funcionarios públicos, técnicos, tomadores de decisiones, académicos, estudiantes, sociedad civil y proveedores relacionados al espacio público en un mismo lugar, para impulsar la industria de los parques urbanos y la recreación. Es un espacio de cuatro días de capacitación, conferencias, talleres y una muestra comercial con proveedores de la industria."
        },
        {
          pregunta: "¿Dónde y cuándo será el evento?",
          respuesta: "El Congreso Parques se llevará a cabo del 13 al 15 de mayo de 2026 en Tijuana, Baja California, México."
        },
        {
          pregunta: "¿Por qué debo asistir?",
          respuesta: [
            "Amplía tu red de contactos.",
            "Aprende como mejorar las condiciones de los parques de tu comunidad.",
            "Capacítate y certifícate como profesional en parques urbanos.",
            "Comparte tus experiencias con profesionales de México y el mundo.",
            "Aprende historias y casos de éxito de México y el mundo.",
            "Se parte de la comunidad técnica y educativa con mayor crecimiento en México."
          ]
        },
        {
          pregunta: "¿Qué actividades sucederán en el congreso?",
          respuesta: [
            "Conferencias Magistrales.",
            "Sesiones Educativas.",
            "Expo Espacio Público.",
            "Talleres Vivenciales y Master Class."
          ]
        },
        {
          pregunta: "¿Cómo se dividen las actividades?",
          respuesta: [
            "Talleres Vivenciales y Master classes: Martes 13 de mayo",
            "Conferencias Magistrales: 14 y 15 de mayo",
            "Sesiones Educativas: 14 y 15 de mayo",
            "Expo Espacio Público: 14 y 15 de mayo",
            "Evento social: Del 13 al 15 de mayo"
          ]
        },
        {
          pregunta: "¿Quiénes asistirán?",
          respuesta: "El congreso reunirá a más de 1,500 líderes entre los que se encuentran: arquitectos, paisajistas, sociólogos, administradores, ingenieros, planeadores urbanos, funcionarios públicos, técnicos, tomadores de decisiones, académicos, estudiantes, sociedad civil y proveedores de equipamiento de México y el mundo."
        },
        {
          pregunta: "¿Quién lo organiza?",
          respuesta: "La Asociación Nacional de Parques y Recreación de México (ANPR)"
        },
        {
          pregunta: "¿Debo de ser un especialista de parques?",
          respuesta: "No tienes por qué ser un especialista de parques, solo debes tener la pasión y motivación de querer aprender y llevar a cabo buenas prácticas en la industria de espacios públicos."
        }
      ]
    },
    {
      titulo: "Programa:",
      preguntas: [
        {
          pregunta: "¿Dónde puedo ver el programa?",
          respuesta: "Puedes revisar el programa visitando la sección de 'programa' en el sitio oficial."
        },
        {
          pregunta: "¿Dónde puedo descargar el programa?",
          respuesta: "Pronto podrás descargar el programa en la sección de programa del sitio web oficial."
        },
        {
          pregunta: "¿Cuáles son los ejes temáticos del congreso?",
          respuesta: "El Congreso Parques 2026 es un evento especializado con contenido educativo y experiencial dirigido a un público cuyo trabajo repercute en los parques urbanos y recreación; Este contenido se divide en 6 ejes temáticos que puedes consultar en la sección del Congreso."
        },
        {
          pregunta: "¿Qué pasa si pierdo la conferencia?",
          respuesta: "Luego del congreso, podrás ver las grabaciones de todas las conferencias y descargar el material."
        },
        {
          pregunta: "¿Puedo ver alguna sesión a la cual no pude ingresar?",
          respuesta: "Por supuesto, todas las conferencias serán grabadas y podrás disfrutar de ellas al finalizar el evento."
        },
        {
          pregunta: "¿Qué se llevará a cabo cada día?",
          respuesta: [
            "Talleres Vivenciales y Master classes: Martes 13 de mayo",
            "Conferencias Magistrales: 14 y 15 de mayo",
            "Sesiones Educativas: 14 y 15 de mayo",
            "Expo Espacio Público: 14 y 15 de mayo",
            "Evento social: Del 13 al 15 de mayo"
          ]
        }
      ]
    },
    {
      titulo: "Registro:",
      preguntas: [
        {
          pregunta: "¿Cómo me registro?",
          respuesta: "Puedes registrarte a través de nuestro sitio web oficial en la sección de registro."
        },
        {
          pregunta: "¿Cuáles son los métodos de pago?",
          respuesta: "Aceptamos tarjetas de crédito, débito y transferencias bancarias."
        },
        {
          pregunta: "¿Puedo cancelar mi registro?",
          respuesta: "Sí, puedes cancelar tu registro siguiendo nuestra política de cancelación disponible en el sitio web."
        },
        {
          pregunta: "¿Mi registro incluye acceso a todas las actividades?",
          respuesta: "El acceso a las actividades depende del tipo de pase que adquieras. Consulta los diferentes paquetes disponibles."
        }
      ]
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
              Preguntas Frecuentes
            </h1>
            <div className="w-32 h-1 bg-[#BCCE16] mx-auto"></div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {faqSections.map((section, sectionIdx) => (
                <div key={sectionIdx} className="mb-12">
                  <h2 className="text-2xl font-bold text-[#0e0477] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {section.titulo}
                  </h2>
                  <div>
                    {section.preguntas.map((faq, faqIdx) => (
                      <AccordionItem
                        key={faqIdx}
                        pregunta={faq.pregunta}
                        respuesta={faq.respuesta}
                        isOpen={openItems[`${sectionIdx}-${faqIdx}`] || false}
                        onClick={() => toggleItem(`${sectionIdx}-${faqIdx}`)}
                      />
                    ))}
                  </div>
                </div>
              ))}
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
