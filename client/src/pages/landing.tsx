import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Menu, 
  X, 
  ArrowUp, 
  Calendar, 
  MapPin, 
  Users, 
  Mic, 
  BookOpen, 
  Hammer, 
  Target, 
  Building, 
  PartyPopper,
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  Play,
  ZoomIn,
  ChevronUp,
  ChevronDown,
  Leaf,
  Compass,
  Zap,
  DollarSign,
  TreePine
} from "lucide-react";
import logoUrl from "@assets/LOGO Congreso Parques_1758315663051.png";
import decorativeLeavesUrl from "@assets/Hojas coloridas_1758562659824.png";
import expoEspacioPublicoUrl from "@assets/Expo Espacio Publico_1758578349359.jpg";
import tallerVivencialUrl from "@assets/Taller vivencial_1758578349360.jpg";
import sesionEducativaUrl from "@assets/Sesion educativa_1758578349360.jpg";
import conferenciaMagistralUrl from "@assets/Conferencia Magistral_1758578349365.jpg";
import masterClassesUrl from "@assets/Master classes_1758578349365.jpg";
import eventosSocialesUrl from "@assets/Eventos Sociales_1758578349366.jpg";
import masterClassesIconUrl from "@assets/Master Classes_1758578569492.png";
import conferenciasIconUrl from "@assets/Conferencias Magistrales_1758578569495.png";
import talleresIconUrl from "@assets/Talleres Vivenciales_1758578569495.png";
import expoIconUrl from "@assets/Expo Espacio Publico_1758580313612.png";
import sesionesIconUrl from "@assets/Sesiones Educativas_1758578569496.png";
import eventosIconUrl from "@assets/Eventos Sociales_1758578569496.png";
import logoANPRUrl from "@assets/LOGO ANPR_1758652591788.png";
import logoANPRWhiteUrl from "@assets/LOGO ANPR-PERFIL-BLANCO_1758654877619.png";
import logoFIDEMUrl from "@assets/LOGO FIDEM_1758652591788.png";
import logoCDTUrl from "@assets/LOGO CDT_1758652591783.png";
import hojasIzquierdaImg from "@assets/hojas izquierda_1758644374397.png";
import hojasDerechaImg from "@assets/hojas derecha_1758644374401.png";


interface StatCounterProps {
  target: number;
  duration?: number;
}

function StatCounter({ target, duration = 2000 }: StatCounterProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const increment = target / (duration / 16); // 60 FPS
    let currentValue = 0;

    const updateCounter = () => {
      if (currentValue < target) {
        currentValue += increment;
        setCurrent(Math.floor(currentValue));
        requestAnimationFrame(updateCounter);
      } else {
        setCurrent(target);
      }
    };

    updateCounter();
  }, [target, duration]);

  return <span className="stat-counter">+{current.toLocaleString()}</span>;
}

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [hoveredAxis, setHoveredAxis] = useState<number | null>(null);
  const [selectedAxis, setSelectedAxis] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [animatedSections, setAnimatedSections] = useState<Set<string>>(new Set());


  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
      setScrolled(window.pageYOffset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Stats visibility observer
  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('legado');
    if (statsSection) {
      statsObserver.observe(statsSection);
    }

    return () => statsObserver.disconnect();
  }, []);

  // Section entrance animations observer
  useEffect(() => {
    const sectionsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId && !animatedSections.has(sectionId)) {
              setAnimatedSections(prev => new Set(Array.from(prev).concat([sectionId])));
              entry.target.classList.add('animate');
              // Also add animate class to any stagger-children elements
              const staggerElements = entry.target.querySelectorAll('.stagger-children');
              staggerElements.forEach(el => el.classList.add('animate'));
              sectionsObserver.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all main sections except header and footer
    const sections = [
      'info', 'experiencias', 'ejes', 'convocatorias', 'legado', 'aliados'
    ];
    
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        sectionsObserver.observe(section);
      }
    });

    return () => sectionsObserver.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate dynamic header height
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight + 20 : 100; // Add small padding
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  const experiencias = [
    {
      iconUrl: conferenciasIconUrl,
      title: "Conferencias Magistrales",
      description: "Presentaciones de alto nivel con expertos internacionales en espacios públicos y sostenibilidad urbana.",
      fecha: "14 y 15 de mayo",
      image: conferenciaMagistralUrl
    },
    {
      iconUrl: sesionesIconUrl,
      title: "Sesiones Educativas",
      description: "Más de 30 espacios de aprendizaje especializado con casos de estudio y mejores prácticas.",
      fecha: "14 y 15 de mayo",
      image: sesionEducativaUrl
    },
    {
      iconUrl: talleresIconUrl,
      title: "Talleres Vivenciales",
      description: "Experiencias prácticas hands-on para aplicar conocimientos en tiempo real.",
      fecha: "13 de mayo",
      image: tallerVivencialUrl
    },
    {
      iconUrl: masterClassesIconUrl,
      title: "Master Classes",
      description: "Sesiones intensivas con maestros reconocidos internacionalmente.",
      fecha: "13 de mayo",
      image: masterClassesUrl
    },
    {
      iconUrl: expoIconUrl,
      title: "Expo Espacio Público",
      description: "Muestra comercial con las últimas innovaciones, tecnologías y soluciones del sector.",
      fecha: "14 y 15 de mayo",
      image: expoEspacioPublicoUrl
    },
    {
      iconUrl: eventosIconUrl,
      title: "Eventos Sociales",
      description: "Beer and Mix Party y ceremonia de clausura para networking y celebración.",
      fecha: "14 y 15 de mayo",
      image: eventosSocialesUrl
    }
  ];

  const ejesTemáticos = [
    {
      título: "1. Naturaleza y Sostenibilidad",
      descripción: "Resiliencia climática y adaptación de espacios públicos ante el cambio climático.",
      subtemas: [
        "Hidrología urbana y gestión de agua",
        "Bosque urbano y silvicultura",
        "Biodiversidad funcional",
        "Buenas prácticas ambientales"
      ]
    },
    {
      título: "2. Comunidad y Participación Ciudadana",
      descripción: "Legitimidad social y apropiación comunitaria de los espacios públicos.",
      subtemas: [
        "Co-gestión comunitaria",
        "Comunicación y educación ambiental",
        "Eventos ancla y activación",
        "Metodologías participativas"
      ]
    },
    {
      título: "3. Diseño, Operación y Gestión Eficiente",
      descripción: "Lo que no se mantiene, se pierde. Gestión integral de activos públicos.",
      subtemas: [
        "Asset management",
        "Costo total de propiedad (TCO)",
        "Mantenimiento preventivo",
        "Innovaciones en materiales",
        "Diseño universal"
      ]
    },
    {
      título: "4. Tecnología e Innovación Urbana",
      descripción: "Datos para decidir. Transformación digital de la gestión de espacios públicos.",
      subtemas: [
        "Mantenimiento predictivo",
        "Inventarios digitales",
        "Señalética digital",
        "AR/QR y experiencias inmersivas",
        "Analítica de aforos"
      ]
    },
    {
      título: "5. Ciudad, Movilidad y Gobernanza",
      descripción: "Parques como red. Integración sistémica en la planificación urbana.",
      subtemas: [
        "Parques + movilidad sostenible",
        "Planeación sistémica",
        "Modelos de gobernanza",
        "Políticas públicas"
      ]
    },
    {
      título: "6. Finanzas, Patrocinios y Modelos de Ingreso",
      descripción: "Sin flujo financiero no hay sostenibilidad. Diversificación de fuentes de ingresos.",
      subtemas: [
        "Modelos de ingresos",
        "Patrocinios con ROI",
        "Fondos climáticos",
        "Soluciones basadas en naturaleza (SBN)"
      ]
    }
  ];

  const timeline = [
    { icon: <Calendar className="w-6 h-6" />, título: "Apertura", fecha: "26 de septiembre de 2025" },
    { icon: <Calendar className="w-6 h-6" />, título: "Cierre", fecha: "15 de enero de 2026" }
  ];

  const estadísticas = [
    { valor: 9100, etiqueta: "Asistentes" },
    { valor: 145, etiqueta: "Países" },
    { valor: 600, etiqueta: "Ponentes" },
    { valor: 300, etiqueta: "Conferencias" },
    { valor: 85, etiqueta: "Talleres" },
    { valor: 250, etiqueta: "Expositores" }
  ];

  const videosLegado = [
    {
      embedUrl: "https://www.youtube.com/embed/Lr_ADiUJijc",
      título: "MÉRIDA 2024",
      año: "2024"
    },
    {
      embedUrl: "https://www.youtube.com/embed/uqru5Tgoj_U",
      título: "LEÓN 2023",
      año: "2023"
    },
    {
      embedUrl: "https://www.youtube.com/embed/Rov_ecOfY34",
      título: "MUNDIAL MONTERREY 2022",
      año: "2022"
    },
    {
      embedUrl: "https://www.youtube.com/embed/x_oSKftOUhY",
      título: "LEÓN 2020",
      año: "2020"
    },
    {
      embedUrl: "https://www.youtube.com/embed/ZwH7OSGZxww",
      título: "SALTA, ARGENTINA 2019",
      año: "2019"
    },
    {
      embedUrl: "https://www.youtube.com/embed/kOJ5Qm3vLHE",
      título: "MÉRIDA 2018",
      año: "2018"
    }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#6847f6] shadow-lg">
        <nav className="container mx-auto px-3 sm:px-6 lg:px-8" aria-label="Navegación principal">
          <div className="flex flex-col items-center py-2 sm:py-4">
            {/* Logo centered - Optimized for mobile */}
            <div className="flex flex-col items-center mb-2 sm:mb-4">
              <img 
                src={logoUrl} 
                alt="Congreso Parques Logo" 
                className="h-12 sm:h-16 md:h-20 w-auto mb-1 sm:mb-2 object-contain"
              />
              
              {/* Tijuana 2026 Banner - Responsive sizing */}
              <div className="bg-[#0e0477] px-2 sm:px-4 py-0.5 sm:py-1 rounded-sm">
                <span className="text-[#d2dd0a] font-black text-sm sm:text-lg tracking-wide sm:tracking-wider" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  TIJUANA <span className="text-[#1edede]">2026</span>
                </span>
              </div>
            </div>
            
            {/* Navigation - Improved mobile layout */}
            <div className="flex items-center justify-between w-full">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center justify-center flex-1">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <button 
                    onClick={() => scrollToSection('convocatorias')} 
                    className="relative overflow-hidden text-white/90 hover:text-white px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base font-medium transition-all duration-300 rounded-lg group hover:bg-white/10"
                    data-testid="nav-convocatorias"
                  >
                    <span className="relative z-10">Convocatorias</span>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="particle-container">
                        <div className="particle particle-1"></div>
                        <div className="particle particle-2"></div>
                        <div className="particle particle-3"></div>
                        <div className="particle particle-4"></div>
                        <div className="particle particle-5"></div>
                        <div className="particle particle-6"></div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              
              {/* Mobile menu button - Enhanced for better touch targets */}
              <div className="md:hidden ml-auto">
                <Button 
                  variant="ghost"
                  size="sm"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-white/90 hover:text-white hover:bg-white/10 p-2 min-h-[44px] min-w-[44px] rounded-lg transition-all duration-300"
                  aria-controls="mobile-menu" 
                  aria-expanded={mobileMenuOpen}
                  data-testid="mobile-menu-button"
                >
                  <span className="sr-only">Abrir menú principal</span>
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
            
            {/* Mobile Navigation - Improved design and spacing */}
            {mobileMenuOpen && (
              <div className="md:hidden w-full mt-3 animate-in fade-in slide-in-from-top-2 duration-300" id="mobile-menu" data-testid="mobile-menu">
                <div className="px-3 py-4 space-y-2 bg-[#5539d4]/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl">
                  <button 
                    onClick={() => {
                      scrollToSection('convocatorias');
                      setMobileMenuOpen(false);
                    }} 
                    className="relative overflow-hidden block text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 text-base font-medium w-full text-left rounded-lg transition-all duration-300 group min-h-[48px]"
                    data-testid="mobile-nav-convocatorias"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <Calendar className="h-4 w-4" />
                      Convocatorias
                    </span>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="particle-container">
                        <div className="particle particle-1"></div>
                        <div className="particle particle-2"></div>
                        <div className="particle particle-3"></div>
                        <div className="particle particle-4"></div>
                        <div className="particle particle-5"></div>
                        <div className="particle particle-6"></div>
                      </div>
                    </div>
                  </button>
                  
                  {/* Additional mobile navigation items */}
                  <button 
                    onClick={() => {
                      scrollToSection('ejes');
                      setMobileMenuOpen(false);
                    }} 
                    className="relative overflow-hidden block text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 text-base font-medium w-full text-left rounded-lg transition-all duration-300 group min-h-[48px]"
                    data-testid="mobile-nav-ejes"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <Target className="h-4 w-4" />
                      Ejes Temáticos
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => {
                      scrollToSection('aliados');
                      setMobileMenuOpen(false);
                    }} 
                    className="relative overflow-hidden block text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 text-base font-medium w-full text-left rounded-lg transition-all duration-300 group min-h-[48px]"
                    data-testid="mobile-nav-aliados"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <Users className="h-4 w-4" />
                      Aliados Estratégicos
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section - Fully Optimized for Mobile */}
      <section id="hero" className="relative min-h-screen flex items-center hero-bg-new pt-24 sm:pt-32 overflow-hidden">
        {/* Animated Waves Background */}
        <div className="absolute inset-0 z-0">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>
        
        {/* Floating Particles - Reduced on mobile for performance */}
        <div className="absolute inset-0 z-5 hidden sm:block">
          <div className="hero-particle triangle-particle-1"></div>
          <div className="hero-particle triangle-particle-2"></div>
          <div className="hero-particle triangle-particle-3"></div>
          <div className="hero-particle circle-particle-1"></div>
          <div className="hero-particle circle-particle-2"></div>
          <div className="hero-particle circle-particle-3"></div>
          <div className="hero-particle triangle-particle-4"></div>
          <div className="hero-particle circle-particle-4"></div>
          <div className="hero-particle triangle-particle-5"></div>
          <div className="hero-particle circle-particle-5"></div>
        </div>
        
        {/* Mobile-only simplified particles */}
        <div className="absolute inset-0 z-5 sm:hidden">
          <div className="hero-particle triangle-particle-1"></div>
          <div className="hero-particle circle-particle-1"></div>
          <div className="hero-particle triangle-particle-3"></div>
        </div>
        
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10 pb-20 sm:pb-40">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Event Date and Location - Mobile Optimized */}
            <div className="event-date-location mb-6 sm:mb-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center max-w-4xl mx-auto gap-3 sm:gap-4 hero-date-animate" data-testid="event-date-location">
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-lg px-3 py-2 sm:bg-transparent sm:backdrop-blur-none sm:px-0 sm:py-0">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                <p className="text-sm sm:text-lg md:text-xl font-bold whitespace-nowrap" style={{ fontFamily: 'Antonio, sans-serif' }}>13-15 DE MAYO, 2026</p>
              </div>
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-lg px-3 py-2 sm:bg-transparent sm:backdrop-blur-none sm:px-0 sm:py-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                <p className="text-xs sm:text-base md:text-lg font-bold whitespace-nowrap" style={{ fontFamily: 'Antonio, sans-serif' }}>TIJUANA, BAJA CALIFORNIA</p>
              </div>
            </div>
            
            {/* Main Title - Mobile Optimized */}
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2 hero-title-animate" style={{ fontFamily: 'Montserrat, sans-serif' }} data-testid="hero-title">
              <span className="block sm:inline">IX Congreso Internacional</span>
              <span className="block sm:inline"> de Parques Urbanos</span>
            </h1>
            
            {/* Subtitle - Mobile Optimized */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-100 leading-relaxed max-w-3xl mx-auto px-2 hero-subtitle-animate" data-testid="hero-subtitle">
              Forma parte de este Evento
            </p>
            
            {/* CTA Button - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center hero-button-animate px-4 sm:px-0">
              <button 
                onClick={() => scrollToSection('convocatorias')} 
                className="hero-cta-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold transform hover:scale-105 active:scale-95 transition-all text-white rounded-lg border-0 w-full sm:w-auto min-h-[48px] touch-manipulation"
                data-testid="hero-cta"
              >
                <span className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4 sm:hidden" />
                  <span>Conoce nuestras Convocatorias</span>
                </span>
              </button>
            </div>
            
            {/* Mobile-specific scroll indicator */}
            <div className="mt-8 sm:hidden animate-bounce">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
              </div>
              <p className="text-xs text-white/70 mt-2">Desliza hacia abajo</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Decorative Image - Mobile Optimized */}
        <div 
          className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none hero-bottom-image-mosaic"
          style={{ 
            backgroundImage: `url(${decorativeLeavesUrl})`,
            height: 'clamp(80px, 15vh, 200px)'
          }}
          data-testid="hero-bottom-decoration"
        ></div>
      </section>

      {/* Information Section */}
      <section id="info" className="py-20 bg-white section-animate animate-fadeInUp">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Text Content */}
              <div className="text-left">
                {/* Main Title */}
                <h2 className="mb-8" data-testid="info-title">
                  <span className="title-conoce">CONOCE</span>
                  <span className="title-congreso">EL CONGRESO PARQUES</span>
                </h2>
                
                {/* Subtitle */}
                <h3 className="subtitle-section" data-testid="info-subtitle">¿Por qué asistir?</h3>
                
                {/* Description */}
                <p className="text-description" data-testid="info-description">
                  Un evento internacional de capacitación, intercambio y experiencias inmersivas que reúne a los principales actores del sector de parques y espacios públicos para compartir conocimientos, innovaciones y mejores prácticas.
                </p>
              </div>

              {/* Right Column - Icons aligned with subtitle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-20 lg:mt-0 stagger-children" data-testid="info-value-proposition">
                <svg width="0" height="0" style={{ position: 'absolute' }}>
                  <defs>
                    <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#d0dd15" />
                      <stop offset="100%" stopColor="#00deff" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="text-center">
                  <div className="icon-container-gradient mb-6">
                    <Users className="w-8 h-8" />
                  </div>
                  <div className="keyword-text">Conecta</div>
                  <div className="description-text">Con líderes y profesionales del sector</div>
                </div>
                <div className="text-center">
                  <div className="icon-container-gradient mb-6">
                    <Target className="w-8 h-8" />
                  </div>
                  <div className="keyword-text">Descubre</div>
                  <div className="description-text">Tendencias globales e innovación</div>
                </div>
                <div className="text-center">
                  <div className="icon-container-gradient mb-6">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <div className="keyword-text">Aprende</div>
                  <div className="description-text">De expertos nacionales e internacionales</div>
                </div>
                <div className="text-center">
                  <div className="icon-container-gradient mb-6">
                    <PartyPopper className="w-8 h-8" />
                  </div>
                  <div className="keyword-text">Vive</div>
                  <div className="description-text">Capacitación, inspiración y networking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section - Mobile Optimized */}
      <section id="experiencias" className="py-12 sm:py-16" style={{ backgroundColor: '#35219b' }}>
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Title - Mobile Optimized */}
            <h2 className="text-center mb-8 sm:mb-12 px-4" data-testid="experiences-title">
              <span className="experience-title-experiencias block sm:inline">EXPERIENCIAS</span>
              <span className="experience-title-evento block sm:inline sm:ml-2">DEL EVENTO</span>
            </h2>
            
            {/* Grid - Fully Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {experiencias.map((experiencia, index) => (
                <div 
                  key={index} 
                  className="experience-card animate w-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`experience-${index}`}
                >
                  <Card className="bg-white overflow-visible relative card-content h-full flex flex-col mx-1 my-2 sm:mx-2 sm:my-2">
                    {/* Icon - Mobile Optimized */}
                    <div className="experience-icon">
                      <img 
                        src={experiencia.iconUrl}
                        alt={`${experiencia.title} icon`}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                      />
                    </div>
                    
                    {/* Image - Mobile Optimized */}
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={experiencia.image} 
                        alt={experiencia.title}
                        className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    
                    {/* Content - Mobile Optimized */}
                    <CardContent className="p-3 sm:p-4 flex flex-col flex-1">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {experiencia.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed line-clamp-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {experiencia.description}
                        </p>
                      </div>
                      
                      {/* Date Footer - Mobile Optimized */}
                      <div className="flex items-center justify-center text-xs sm:text-sm font-medium mt-auto pt-3 border-t border-gray-100 min-h-[40px]" style={{ color: '#35219b', fontFamily: 'Montserrat, sans-serif' }}>
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                        <span className="text-center">{experiencia.fecha}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
            {/* Mobile Navigation Hint */}
            <div className="text-center mt-8 sm:hidden">
              <p className="text-white/70 text-sm">
                Desliza para ver más experiencias
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thematic Axes Section - Mobile Optimized */}
      <section id="ejes" className="py-12 sm:py-16 bg-white overflow-hidden section-animate animate-fadeInUp">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Title - Mobile Optimized */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-4" data-testid="axes-title">
              <span 
                className="px-4 sm:px-6 py-2 sm:py-3 text-white font-bold uppercase rounded-lg text-sm sm:text-base"
                style={{ 
                  backgroundColor: '#0e0477',
                  fontFamily: 'Antonio, sans-serif'
                }}
              >
                EJES
              </span>
              <span 
                className="font-black uppercase text-lg sm:text-2xl md:text-3xl"
                style={{ 
                  color: '#0e0477',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                TEMÁTICOS
              </span>
            </h2>
            
            {/* Mobile Design: Stack cards, Desktop: Flex row */}
            <div className="md:flex md:flex-row md:gap-2 md:h-96 relative">
              {/* Mobile-only design */}
              <div className="md:hidden space-y-3">
              {ejesTemáticos.map((eje, index) => {
                const gradients = [
                  'linear-gradient(to bottom right, #bddd23, #49db76)', // Naturaleza y Sostenibilidad
                  'linear-gradient(to bottom right, #e47f71, #f819e1)', // Comunidad y Participación Ciudadana
                  'linear-gradient(to bottom right, #45deaf, #00deff)', // Diseño, Operación y Gestión Eficiente
                  'linear-gradient(to bottom right, #35219b, #0e0477)', // Tecnología e Innovación Urbana
                  'linear-gradient(to bottom right, #6847f6, #5539d4)', // Ciudad, Movilidad y Gobernanza
                  'linear-gradient(to bottom right, #d2dd0a, #e09757)'  // Finanzas, Patrocinios y Modelos de Ingreso
                ];
                
                const textColors = [
                  '#0e0477', // Azul oscuro para Naturaleza (fondo claro)
                  '#ffffff', // Blanco para Comunidad
                  '#0e0477', // Azul oscuro para Diseño (fondo claro)
                  '#ffffff', // Blanco para Tecnología (fondo oscuro)
                  '#ffffff', // Blanco para Ciudad (fondo oscuro)
                  '#0e0477'  // Azul oscuro para Finanzas (fondo claro)
                ];
                
                const icons = [
                  <Leaf className="w-8 h-8" />,           // Naturaleza
                  <Users className="w-8 h-8" />,          // Comunidad
                  <Compass className="w-8 h-8" />,        // Diseño
                  <Zap className="w-8 h-8" />,            // Tecnología
                  <Building className="w-8 h-8" />,       // Ciudad
                  <DollarSign className="w-8 h-8" />      // Finanzas
                ];
                
                const isHovered = hoveredAxis === index;
                const isSelected = selectedAxis === index;
                const isExpanded = isHovered || isSelected;
                const isOtherExpanded = (hoveredAxis !== null && hoveredAxis !== index) || (selectedAxis !== null && selectedAxis !== index);
                
                
                // Mobile-specific design
                const mobileCard = (
                  <div
                    key={`mobile-${index}`}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 touch-manipulation"
                    data-testid={`axis-mobile-${index}`}
                  >
                    {/* Mobile Header */}
                    <div 
                      className="h-20 flex items-center px-4 relative overflow-hidden"
                      style={{ background: gradients[index] }}
                    >
                      <div className="flex items-center gap-3 w-full">
                        <div className="text-white">
                          {React.cloneElement(icons[index], { className: 'w-6 h-6' })}
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-white/80 mb-1">CONGRESO PARQUES</div>
                          <h3 className="text-sm font-bold text-white leading-tight">
                            {eje.título.replace(/^\d+\.\s*/, '').toUpperCase()}
                          </h3>
                        </div>
                        <button 
                          onClick={() => setSelectedAxis(selectedAxis === index ? null : index)}
                          className="text-white p-1 rounded-full hover:bg-white/20 transition-colors"
                          aria-label={`${isSelected ? 'Cerrar' : 'Abrir'} información de ${eje.título}`}
                        >
                          {isSelected ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                    
                    {/* Mobile Expandable Content */}
                    <div className={`transition-all duration-300 overflow-hidden ${
                      isSelected ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="p-4 border-t border-gray-100">
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          {eje.descripción}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500 font-medium">VER MÁS DETALLES</span>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              scrollToSection('convocatorias');
                            }}
                            className="bg-gray-800 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-gray-700 transition-colors"
                          >
                            MÁS INFO →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
                
                // Desktop design (existing)
                const desktopCard = (
                  <div
                    key={`desktop-${index}`}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    aria-label={`${eje.título}: ${eje.descripción}`}
                    style={{ background: gradients[index] }}
                    className={`relative cursor-pointer transition-all duration-500 ease-in-out rounded-lg overflow-hidden focus:outline-none focus:ring-4 focus:ring-white/30 ${
                      isExpanded 
                        ? 'flex-[2] shadow-2xl transform scale-105' 
                        : isOtherExpanded 
                          ? 'flex-[0.5] opacity-75' 
                          : 'flex-1 hover:shadow-lg'
                    } h-full`}
                    data-testid={`axis-desktop-${index}`}
                    onClick={() => setSelectedAxis(selectedAxis === index ? null : index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedAxis(selectedAxis === index ? null : index);
                      }
                    }}
                    onMouseEnter={() => setHoveredAxis(index)}
                    onMouseLeave={() => setHoveredAxis(null)}
                  >
                    <div className="h-full p-6 flex flex-col justify-between relative" style={{ color: textColors[index] }}>
                      {/* Desktop Main Content */}
                      <div className={`transition-all duration-300 ${isExpanded ? 'transform translate-y-0' : 'transform translate-y-4'}`}>
                        <div className="text-xs font-semibold mb-2 opacity-90">CONGRESO PARQUES</div>
                        <h3 className={`font-bold leading-tight transition-all duration-300 ${
                          isExpanded ? 'text-xl mb-4' : 'text-lg mb-2'
                        }`}>
                          {eje.título.replace(/^\d+\.\s*/, '').toUpperCase()}
                        </h3>
                        
                        {/* Desktop: Show expanded content on hover/click */}
                        <div className={`transition-all duration-300 overflow-hidden ${
                          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <p className="text-sm mb-4 leading-relaxed" style={{ opacity: 0.9 }}>
                            {eje.descripción}
                          </p>
                          <div className="space-y-2">
                            <div className="text-xs font-semibold mb-2" style={{ opacity: 0.8 }}>TEMAS PRINCIPALES:</div>
                            <ul className="text-xs space-y-1" style={{ opacity: 0.8 }}>
                              {eje.subtemas.map((subtema, subIndex) => (
                                <li key={subIndex} className="flex items-start gap-2">
                                  <span className="mt-0.5 flex-shrink-0" style={{ opacity: 0.6 }}>•</span>
                                  <span>{subtema}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      {/* Desktop MORE INFO Button */}
                      <div className={`transition-all duration-300 ${
                        isExpanded ? 'opacity-100 transform translate-y-0' : 'opacity-70 transform translate-y-2'
                      }`}>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            scrollToSection('convocatorias');
                          }}
                          className="bg-black/20 hover:bg-black/30 text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                        >
                          MÁS INFO →
                        </button>
                      </div>
                      
                      {/* Desktop Icon for Non-Expanded State */}
                      {!isExpanded && (
                        <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                          <div className="text-current opacity-80">
                            {icons[index]}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
                
                return (
                  <React.Fragment key={index}>
                    {/* Mobile card - only show in mobile container */}
                    <div className="md:hidden">{mobileCard}</div>
                    {/* Desktop card - only show in desktop container */}
                    <div className="hidden md:block">{desktopCard}</div>
                  </React.Fragment>
                );
              })}
              </div>
              
            </div>
            
            {/* Instructions */}
            <div className="text-center mt-8">
              <p className="text-muted-foreground text-sm">
                <span className="hidden md:inline">Pasa el cursor o haz clic sobre cada eje para conocer más detalles</span>
                <span className="md:hidden">Toca cada eje para conocer más detalles</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Convocatorias Section - Mobile Optimized */}
      <section id="convocatorias" className="py-12 sm:py-16 section-animate animate-fadeInLeft relative overflow-hidden" style={{ backgroundColor: '#35219b' }}>
        {/* Imagen decorativa hojas izquierda - Hidden on mobile */}
        <div className="absolute w-32 sm:w-40 h-40 sm:h-48 z-5 hidden sm:block" style={{ bottom: '120px', left: '25%', transform: 'translateX(-50%)' }}>
          <img 
            src={hojasIzquierdaImg} 
            alt="Hojas decorativas izquierda"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Imagen decorativa hojas derecha - Hidden on mobile */}
        <div className="absolute w-32 sm:w-40 h-40 sm:h-48 z-5 hidden sm:block" style={{ bottom: '120px', right: '25%', transform: 'translateX(50%)' }}>
          <img 
            src={hojasDerechaImg} 
            alt="Hojas decorativas derecha"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 text-white uppercase px-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }} data-testid="calls-title">Convocatorias 2026</h2>
            
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12 stagger-children">
              {/* Convocatoria Sesiones Educativas - Mobile Optimized */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-testid="call-educational">
                {/* Header con "CONVOCATORIA" */}
                <div className="text-center py-4 sm:py-6" style={{ background: 'linear-gradient(to right, #d0dd15, #f71cdd)' }}>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase flex items-center justify-center" style={{ fontFamily: 'Antonio, sans-serif' }}>
                    CONVOCATORIA
                  </h3>
                </div>
                
                {/* Content - Mobile Optimized */}
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-between min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
                  <div className="space-y-4 sm:space-y-6">
                    {/* Título */}
                    <div className="text-center">
                      <h4 className="text-lg sm:text-xl font-bold uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        SESIONES EDUCATIVAS
                      </h4>
                    </div>
                    
                    {/* Descripción */}
                    <div className="text-center">
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Invitamos a profesionales, académicos y expertos a proponer sesiones educativas que compartan conocimientos innovadores y casos de estudio exitosos en el ámbito de parques y espacios públicos.
                      </p>
                    </div>
                    
                    {/* Fechas */}
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center justify-center gap-2 text-gray-700 text-sm sm:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span><strong>Apertura:</strong> 26 de septiembre, 2025</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-700 text-sm sm:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span><strong>Cierre:</strong> 15 de enero, 2026</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Botón - Mobile Optimized */}
                  <div className="text-center mt-6">
                    <button 
                      onClick={() => window.open('https://congresoparques.com/registro_sesiones.php', '_blank')}
                      className="convocatoria-btn w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-white uppercase transition-all duration-300 touch-manipulation min-h-[48px]"
                      style={{ 
                        backgroundColor: '#35219b',
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                      data-testid="cta-educational"
                    >
                      REGÍSTRATE
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Convocatoria Poster Científico - Mobile Optimized */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-testid="call-poster">
                {/* Header con "CONVOCATORIA" */}
                <div className="text-center py-4 sm:py-6" style={{ background: 'linear-gradient(to right, #d0dd15, #f71cdd)' }}>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase flex items-center justify-center" style={{ fontFamily: 'Antonio, sans-serif' }}>
                    CONVOCATORIA
                  </h3>
                </div>
                
                {/* Content - Mobile Optimized */}
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-between min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
                  <div className="space-y-4 sm:space-y-6">
                    {/* Título */}
                    <div className="text-center">
                      <h4 className="text-lg sm:text-xl font-bold uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        POSTER CIENTÍFICO
                      </h4>
                    </div>
                    
                    {/* Descripción */}
                    <div className="text-center">
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Presenta tu investigación, proyecto o innovación a través de un póster científico que contribuya al conocimiento del sector de espacios públicos y sostenibilidad urbana.
                      </p>
                    </div>
                    
                    {/* Fechas */}
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center justify-center gap-2 text-gray-700 text-sm sm:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span><strong>Apertura:</strong> 26 de septiembre, 2025</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-700 text-sm sm:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span><strong>Cierre:</strong> 15 de enero, 2026</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Botón - Mobile Optimized */}
                  <div className="text-center mt-6">
                    <button 
                      onClick={() => window.open('https://congresoparques.com/registro_posters.php', '_blank')}
                      className="convocatoria-btn w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-white uppercase transition-all duration-300 touch-manipulation min-h-[48px]"
                      style={{ 
                        backgroundColor: '#35219b',
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                      data-testid="cta-poster"
                    >
                      REGÍSTRATE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section id="legado" className="py-16 bg-muted section-animate animate-scaleIn">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-12 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, color: '#0e0477' }} data-testid="legacy-title">NUESTRO LEGADO</h2>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16 stagger-children">
              {estadísticas.map((stat, index) => (
                <Card key={index} className="bg-white p-6 shadow-sm border border-border text-center" data-testid={`stat-${index}`}>
                  <CardContent className="p-0">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {statsVisible ? <StatCounter target={stat.valor} /> : "0"}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.etiqueta}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Videos del Legado */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videosLegado.map((video, index) => (
                <div 
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg"
                  data-testid={`legacy-video-${index}`}
                >
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src={video.embedUrl}
                      title={video.título}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-bold text-lg text-primary mb-1">{video.título}</h3>
                    <p className="text-sm text-muted-foreground">{video.año}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Elements / Partners - Mobile Optimized */}
      <section id="aliados" className="py-12 sm:py-16 bg-white section-animate animate-fadeInUp">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Title - Mobile Optimized */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-8 sm:mb-12 uppercase px-4 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, color: '#0e0477' }} data-testid="partners-title">
              ALIADOS ESTRATÉGICOS Y PATROCINADORES
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col gap-8 sm:gap-12 lg:flex-row lg:gap-8 items-center justify-center">
                {/* Organiza - Mobile Optimized */}
                <div className="text-center w-full lg:w-auto">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6" style={{ color: '#0e0477', fontFamily: 'Montserrat, sans-serif' }}>Organiza:</h3>
                  <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 w-full max-w-xs mx-auto sm:w-56 h-28 sm:h-32 flex items-center justify-center">
                    <a 
                      href="https://anpr.org.mx/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full h-full touch-manipulation"
                    >
                      <img 
                        src={logoANPRUrl} 
                        alt="ANPR - Asociación Nacional de Parques y Recreación de México" 
                        className="max-h-16 sm:max-h-20 max-w-full object-contain hover:scale-105 active:scale-95 transition-transform"
                        data-testid="logo-anpr"
                      />
                    </a>
                  </div>
                </div>

                {/* Presenta - Mobile Optimized */}
                <div className="text-center w-full lg:w-auto">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6" style={{ color: '#0e0477', fontFamily: 'Montserrat, sans-serif' }}>Presenta:</h3>
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 w-full max-w-xs sm:w-56 h-28 sm:h-32 flex items-center justify-center">
                      <img 
                        src={logoFIDEMUrl} 
                        alt="FIDEM - Fideicomiso Empresarial del Estado de Baja California" 
                        className="max-h-16 sm:max-h-20 max-w-full object-contain hover:scale-105 active:scale-95 transition-transform"
                        data-testid="logo-fidem"
                      />
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 w-full max-w-xs sm:w-56 h-28 sm:h-32 flex items-center justify-center">
                      <a 
                        href="https://cdt.org.mx/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full h-full touch-manipulation"
                      >
                        <img 
                          src={logoCDTUrl} 
                          alt="CDT - Centro de Desarrollo Tijuana" 
                          className="max-h-16 sm:max-h-20 max-w-full object-contain hover:scale-105 active:scale-95 transition-transform"
                          data-testid="logo-cdt"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Call to Action */}
            <div className="text-center mt-8 sm:hidden">
              <p className="text-sm text-gray-600">
                Toca los logos para visitar sus sitios web
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Footer - Mobile Optimized */}
      <footer id="footer" className="py-8 sm:py-12" style={{ backgroundColor: '#0e0477', color: 'white' }}>
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {/* Logo and Description - Mobile Optimized */}
              <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
                  <a href="https://anpr.org.mx/" target="_blank" rel="noopener noreferrer" className="touch-manipulation">
                    <img 
                      src={logoANPRWhiteUrl} 
                      alt="ANPR - Asociación Nacional de Parques y Recreación de México" 
                      className="h-12 sm:h-16 object-contain hover:scale-105 active:scale-95 transition-transform"
                      data-testid="footer-logo-anpr"
                    />
                  </a>
                </div>
                <p className="text-white/80 mb-4 text-sm sm:text-base leading-relaxed">
                  Asociación Nacional de Parques y Recreación de México - Transformando espacios públicos para un futuro sostenible.
                </p>
                <div className="text-xl sm:text-2xl font-bold" style={{ color: '#BCCE16' }} data-testid="footer-hashtag">#CongresoParques2026</div>
              </div>
              
              {/* Links - Mobile Optimized */}
              <div className="text-center sm:text-left">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Enlaces</h4>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li><a href="https://anpr.org.mx/privacidad" className="hover:opacity-80 active:opacity-60 transition-colors touch-manipulation block py-1" data-testid="footer-privacy">Políticas de privacidad</a></li>
                  <li><a href="https://anpr.org.mx/terminos" className="hover:opacity-80 active:opacity-60 transition-colors touch-manipulation block py-1" data-testid="footer-terms">Términos y condiciones</a></li>
                  <li><a href="https://anpr.org.mx/faq" className="hover:opacity-80 active:opacity-60 transition-colors touch-manipulation block py-1" data-testid="footer-faq">Preguntas frecuentes</a></li>
                </ul>
              </div>
              
              {/* Contact - Mobile Optimized */}
              <div className="text-center sm:text-left">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contacto</h4>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-center justify-center sm:justify-start gap-2">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <a href="mailto:info@congresoparques.com" className="hover:opacity-80 active:opacity-60 transition-colors touch-manipulation" data-testid="footer-email">info@congresoparques.com</a>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start gap-2">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <a href="https://wa.me/529993530691" className="hover:opacity-80 active:opacity-60 transition-colors touch-manipulation" data-testid="footer-whatsapp">+52 999 353 0691</a>
                  </li>
                </ul>
                
                {/* Social Icons - Mobile Optimized */}
                <div className="flex gap-4 mt-4 justify-center sm:justify-start">
                  <a href="https://www.facebook.com/CongresoParques/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:opacity-80 active:opacity-60 transition-colors p-2 -m-2 touch-manipulation" aria-label="Facebook" data-testid="social-facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/congreso_parques/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:opacity-80 active:opacity-60 transition-colors p-2 -m-2 touch-manipulation" aria-label="Instagram" data-testid="social-instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://x.com/congreso_parque" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:opacity-80 active:opacity-60 transition-colors p-2 -m-2 touch-manipulation" aria-label="X (Twitter)" data-testid="social-twitter">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="https://www.youtube.com/@anprmexico" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:opacity-80 active:opacity-60 transition-colors p-2 -m-2 touch-manipulation" aria-label="YouTube" data-testid="social-youtube">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-white/60 text-xs sm:text-sm">
              <p>&copy; 2026 Asociación Nacional de Parques y Recreación de México. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 z-40 transition-all duration-300 ${
          showBackToTop ? 'opacity-100 transform-none' : 'opacity-0 transform-translate-y-20 pointer-events-none'
        }`}
        aria-label="Volver arriba"
        data-testid="back-to-top"
      >
        <ChevronUp className="w-6 h-6" />
      </Button>


      {/* Video Modal */}
      <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
        <DialogContent className="max-w-4xl" data-testid="video-modal">
          <DialogHeader>
            <DialogTitle>Video del Congreso Parques</DialogTitle>
          </DialogHeader>
          <div className="bg-gray-800 p-8 rounded-lg text-center text-white">
            <p className="text-gray-300 mb-6">En una implementación real, aquí se mostraría el video promocional del evento.</p>
            <div className="bg-gray-700 aspect-video rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">Video placeholder</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
