import { useState, useEffect } from "react";
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
  Play,
  ZoomIn,
  ChevronUp,
  Leaf,
  Compass,
  Zap,
  DollarSign
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

  return <span className="stat-counter">{current.toLocaleString()}</span>;
}

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: "", alt: "" });
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
      // Calculate offset to account for fixed header height
      const headerHeight = 140; // Approximate height of the header with logo and banner
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


  const openImageModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setImageModalOpen(true);
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
    { valor: 8500, etiqueta: "Asistentes" },
    { valor: 139, etiqueta: "Países" },
    { valor: 550, etiqueta: "Ponentes" },
    { valor: 270, etiqueta: "Conferencias" },
    { valor: 75, etiqueta: "Talleres" },
    { valor: 220, etiqueta: "Expositores" }
  ];

  const galeriaImagenes = [
    {
      src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      thumbnail: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Conferencia sobre desarrollo urbano sostenible"
    },
    {
      src: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      thumbnail: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Parque urbano moderno en Tijuana"
    },
    {
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Auditorio con asistentes al congreso"
    },
    {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Espacios públicos sostenibles con vegetación"
    },
    {
      src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      thumbnail: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Red de profesionales en conferencia"
    }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#6847f6] shadow-lg">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
          <div className="flex flex-col items-center py-4">
            {/* Logo centered */}
            <div className="flex flex-col items-center mb-4">
              <img 
                src={logoUrl} 
                alt="Congreso Parques Logo" 
                className="h-20 w-auto mb-2"
              />
              
              {/* Tijuana 2026 Banner */}
              <div className="bg-[#0e0477] px-4 py-1 rounded-sm">
                <span className="text-[#d2dd0a] font-black text-lg tracking-wider" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  TIJUANA <span className="text-[#1edede]">2026</span>
                </span>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex items-center justify-between w-full">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center justify-center flex-1">
                <div className="flex items-center space-x-6">
                  <button 
                    onClick={() => scrollToSection('convocatorias')} 
                    className="relative overflow-hidden text-white/90 hover:text-white px-6 py-3 text-sm font-medium transition-colors rounded-lg group"
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
              
              {/* Mobile menu button */}
              <div className="md:hidden ml-auto">
                <Button 
                  variant="ghost"
                  size="sm"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-white/90 hover:text-white hover:bg-white/10"
                  aria-controls="mobile-menu" 
                  aria-expanded={mobileMenuOpen}
                  data-testid="mobile-menu-button"
                >
                  <span className="sr-only">Abrir menú principal</span>
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
            
            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden w-full mt-4" id="mobile-menu" data-testid="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-[#6847f6]/95 backdrop-blur-md border-t border-white/20 rounded-md">
                  <button 
                    onClick={() => scrollToSection('convocatorias')} 
                    className="relative overflow-hidden block text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 text-base font-medium w-full text-left rounded-md transition-colors group"
                    data-testid="mobile-nav-convocatorias"
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
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center hero-bg-new pt-32 overflow-hidden">
        {/* Animated Waves Background */}
        <div className="absolute inset-0 z-0">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 z-5">
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
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-40">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="event-date-location mb-4 flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto gap-4 sm:gap-0 hero-date-animate" data-testid="event-date-location">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <p className="text-base sm:text-lg md:text-xl font-semibold">21-23 DE MAYO, 2026</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <p className="text-sm sm:text-base md:text-lg font-medium">TIJUANA, BAJA CALIFORNIA</p>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-2 hero-title-animate" data-testid="hero-title">
              IX Congreso Internacional de Parques Urbanos y Espacio Público
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed max-w-3xl mx-auto px-2 hero-subtitle-animate" data-testid="hero-subtitle">
              Forma parte de este Evento
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center hero-button-animate">
              <button 
                onClick={() => scrollToSection('convocatorias')} 
                className="hero-cta-button px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all text-white rounded-lg border-0"
                data-testid="hero-cta"
              >
                Conoce nuestras Convocatorias
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Decorative Image */}
        <div 
          className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none hero-bottom-image-mosaic"
          style={{ backgroundImage: `url(${decorativeLeavesUrl})` }}
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

      {/* Experiences Section */}
      <section id="experiencias" className="py-16" style={{ backgroundColor: '#35219b' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center mb-12" data-testid="experiences-title">
              <span className="experience-title-experiencias">EXPERIENCIAS</span>
              <span className="experience-title-evento">DEL EVENTO</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiencias.map((experiencia, index) => (
                <div 
                  key={index} 
                  className="experience-card animate"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`experience-${index}`}
                >
                  <Card className="bg-white overflow-visible relative card-content" style={{ margin: '10px 8px' }}>
                    <div className="experience-icon">
                      <img 
                        src={experiencia.iconUrl}
                        alt={`${experiencia.title} icon`}
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={experiencia.image} 
                        alt={experiencia.title}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                    <CardContent className="p-4 flex flex-col h-full">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1 text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>{experiencia.title}</h3>
                        <p className="text-gray-600 mb-2 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>{experiencia.description}</p>
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

      {/* Thematic Axes Section */}
      <section id="ejes" className="py-16 bg-white overflow-hidden section-animate animate-fadeInUp">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary" data-testid="axes-title">Ejes Temáticos</h2>
            
            <div className="flex flex-col md:flex-row gap-2 md:h-96 relative">
              {ejesTemáticos.map((eje, index) => {
                const colors = [
                  'bg-gradient-to-br from-green-500 to-emerald-600', // Naturaleza - Green
                  'bg-gradient-to-br from-pink-500 to-rose-600',     // Comunidad - Pink
                  'bg-gradient-to-br from-teal-400 to-cyan-500',     // Diseño - Teal  
                  'bg-gradient-to-br from-blue-600 to-indigo-700',   // Tecnología - Blue
                  'bg-gradient-to-br from-purple-500 to-violet-600', // Ciudad - Purple
                  'bg-gradient-to-br from-yellow-400 to-orange-500'  // Finanzas - Orange
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
                
                
                return (
                  <div
                    key={index}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    aria-label={`${eje.título}: ${eje.descripción}`}
                    className={`relative cursor-pointer transition-all duration-500 ease-in-out rounded-lg overflow-hidden ${colors[index]} focus:outline-none focus:ring-4 focus:ring-white/30 ${
                      isExpanded 
                        ? 'md:flex-[2] shadow-2xl md:transform md:scale-105' 
                        : isOtherExpanded 
                          ? 'md:flex-[0.5] opacity-75' 
                          : 'flex-1 hover:shadow-lg'
                    } ${
                      isExpanded 
                        ? 'h-auto md:h-full' 
                        : 'h-24 md:h-full'
                    }`}
                    data-testid={`axis-${index}`}
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
                    <div className="h-full p-6 flex flex-col justify-between text-white relative">
                      {/* Main Content */}
                      <div className={`transition-all duration-300 ${isExpanded ? 'transform translate-y-0' : 'transform translate-y-4'}`}>
                        <div className="text-xs font-semibold mb-2 opacity-90">CONGRESO PARQUES</div>
                        <h3 className={`font-bold text-white leading-tight transition-all duration-300 ${
                          isExpanded ? 'text-xl mb-4' : 'text-lg mb-2'
                        }`}>
                          {eje.título.replace(/^\d+\.\s*/, '').toUpperCase()}
                        </h3>
                        
                        {/* Expanded Content on Hover/Click */}
                        <div className={`transition-all duration-300 overflow-hidden ${
                          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <p className="text-sm text-white/90 mb-4 leading-relaxed">
                            {eje.descripción}
                          </p>
                          <div className="space-y-2">
                            <div className="text-xs font-semibold text-white/80 mb-2">TEMAS PRINCIPALES:</div>
                            <ul className="text-xs text-white/80 space-y-1">
                              {eje.subtemas.map((subtema, subIndex) => (
                                <li key={subIndex} className="flex items-start gap-2">
                                  <span className="text-white/60 mt-0.5">•</span>
                                  <span>{subtema}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      {/* MORE INFO Button */}
                      <div className={`transition-all duration-300 ${
                        isExpanded ? 'opacity-100 transform translate-y-0' : 'opacity-70 transform translate-y-2'
                      }`}>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            // Scroll to convocatorias section as this is thematically related
                            scrollToSection('convocatorias');
                          }}
                          className="bg-black/20 hover:bg-black/30 text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                        >
                          MÁS INFO →
                        </button>
                      </div>
                      
                      {/* Minimalist Icon for Non-Expanded State - Hidden on Mobile */}
                      {!isExpanded && (
                        <div className="hidden md:block absolute right-6 top-1/2 transform -translate-y-1/2">
                          <div className="text-white/80">
                            {icons[index]}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
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

      {/* Convocatorias Section */}
      <section id="convocatorias" className="py-16 section-animate animate-fadeInLeft relative overflow-hidden" style={{ backgroundColor: '#35219b' }}>
        {/* Imagen decorativa hojas izquierda */}
        <div className="absolute w-40 h-48 z-5" style={{ bottom: '60px', left: '25%', transform: 'translateX(-50%)' }}>
          <img 
            src={hojasIzquierdaImg} 
            alt="Hojas decorativas izquierda"
            className="w-full h-full object-contain opacity-60"
          />
        </div>
        {/* Imagen decorativa hojas derecha */}
        <div className="absolute w-40 h-48 z-5" style={{ bottom: '60px', right: '25%', transform: 'translateX(50%)' }}>
          <img 
            src={hojasDerechaImg} 
            alt="Hojas decorativas derecha"
            className="w-full h-full object-contain opacity-60"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white" data-testid="calls-title">Convocatorias 2026</h2>
            
            <div className="grid md:grid-cols-2 gap-10 mb-12 stagger-children">
              {/* Convocatoria Sesiones Educativas */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-testid="call-educational">
                {/* Header con "CONVOCATORIA" */}
                <div className="text-center py-6" style={{ background: 'linear-gradient(to right, #d0dd15, #f71cdd)', height: '84px' }}>
                  <h3 className="text-2xl font-bold text-white uppercase flex items-center justify-center h-full" style={{ fontFamily: 'Antonio, sans-serif' }}>
                    CONVOCATORIA
                  </h3>
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col justify-between" style={{ minHeight: '500px' }}>
                  <div>
                    {/* Título */}
                    <div style={{ height: '60px' }} className="flex items-center justify-center">
                      <h4 className="text-xl font-bold text-center uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        SESIONES EDUCATIVAS
                      </h4>
                    </div>
                    
                    {/* Descripción */}
                    <div style={{ height: '120px' }} className="flex items-center justify-center mb-8">
                      <p className="text-gray-600 text-center leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Invitamos a profesionales, académicos y expertos a proponer sesiones educativas que compartan conocimientos innovadores y casos de estudio exitosos en el ámbito de parques y espacios públicos.
                      </p>
                    </div>
                    
                    {/* Fechas */}
                    <div className="space-y-3 mb-8" style={{ height: '80px' }}>
                      <div className="flex items-center justify-center gap-2 text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <Calendar className="w-4 h-4" />
                        <span><strong>Apertura:</strong> 26 de septiembre, 2025</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <Calendar className="w-4 h-4" />
                        <span><strong>Cierre:</strong> 15 de enero, 2026</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Botón */}
                  <div className="text-center">
                    <button 
                      onClick={() => window.open('https://anprmexico.org/convocatoria-sesiones-2026', '_blank')}
                      className="convocatoria-btn px-10 py-4 rounded-lg font-bold text-white uppercase transition-all duration-300"
                      style={{ 
                        backgroundColor: '#35219b',
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                      data-testid="cta-educational"
                    >
                      CONSULTA LAS BASES
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Convocatoria Poster Científico */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-testid="call-poster">
                {/* Header con "CONVOCATORIA" */}
                <div className="text-center py-6" style={{ background: 'linear-gradient(to right, #d0dd15, #f71cdd)', height: '84px' }}>
                  <h3 className="text-2xl font-bold text-white uppercase flex items-center justify-center h-full" style={{ fontFamily: 'Antonio, sans-serif' }}>
                    CONVOCATORIA
                  </h3>
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col justify-between" style={{ minHeight: '500px' }}>
                  <div>
                    {/* Título */}
                    <div style={{ height: '60px' }} className="flex items-center justify-center">
                      <h4 className="text-xl font-bold text-center uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        POSTER CIENTÍFICO
                      </h4>
                    </div>
                    
                    {/* Descripción */}
                    <div style={{ height: '120px' }} className="flex items-center justify-center mb-8">
                      <p className="text-gray-600 text-center leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Presenta tu investigación, proyecto o innovación a través de un póster científico que contribuya al conocimiento del sector de espacios públicos y sostenibilidad urbana.
                      </p>
                    </div>
                    
                    {/* Fechas */}
                    <div className="space-y-3 mb-8" style={{ height: '80px' }}>
                      <div className="flex items-center justify-center gap-2 text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <Calendar className="w-4 h-4" />
                        <span><strong>Apertura:</strong> 26 de septiembre, 2025</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <Calendar className="w-4 h-4" />
                        <span><strong>Cierre:</strong> 15 de enero, 2026</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Botón */}
                  <div className="text-center">
                    <button 
                      onClick={() => window.open('https://anprmexico.org/convocatoria-poster-2026', '_blank')}
                      className="convocatoria-btn px-10 py-4 rounded-lg font-bold text-white uppercase transition-all duration-300"
                      style={{ 
                        backgroundColor: '#35219b',
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                      data-testid="cta-poster"
                    >
                      CONSULTA LAS BASES
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary" data-testid="legacy-title">Nuestro Legado</h2>
            
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

            {/* Gallery */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galeriaImagenes.map((imagen, index) => (
                <div 
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                  onClick={() => openImageModal(imagen.src, imagen.alt)}
                  data-testid={`gallery-image-${index}`}
                >
                  <img 
                    src={imagen.thumbnail} 
                    alt={imagen.alt} 
                    className="w-full h-48 object-cover" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-8 h-8" />
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Video placeholder */}
              <div 
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => setVideoModalOpen(true)}
                data-testid="gallery-video"
              >
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Video resumen Congreso Parques" 
                  className="w-full h-48 object-cover" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-full p-4">
                    <Play className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Elements / Partners */}
      <section id="aliados" className="py-16 bg-white section-animate animate-fadeInUp">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-primary" data-testid="partners-title">Aliados Estratégicos y Patrocinadores</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity stagger-children">
              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                <div className="text-primary font-bold text-sm text-center">ANPR México</div>
                <div className="text-xs text-muted-foreground text-center mt-1">Organizador Principal</div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="text-gray-600 font-semibold text-sm text-center">Gobierno Tijuana</div>
                <div className="text-xs text-gray-500 text-center mt-1">Aliado Estratégico</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200 hover:border-green-300 transition-colors">
                <div className="text-green-700 font-semibold text-sm text-center">ONU Hábitat</div>
                <div className="text-xs text-green-600 text-center mt-1">Socio Internacional</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors">
                <div className="text-blue-700 font-semibold text-sm text-center">CONAVI</div>
                <div className="text-xs text-blue-600 text-center mt-1">Institución Federal</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors">
                <div className="text-orange-700 font-semibold text-sm text-center">Universidad CETYS</div>
                <div className="text-xs text-orange-600 text-center mt-1">Socio Académico</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors">
                <div className="text-purple-700 font-semibold text-sm text-center">Fundación Bancomer</div>
                <div className="text-xs text-purple-600 text-center mt-1">Patrocinador</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer id="footer" className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Logo and Description */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent w-10 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-lg">A</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">ANPR México</div>
                    <div className="text-xs text-primary-foreground/60">Asociación Nacional</div>
                  </div>
                </div>
                <p className="text-primary-foreground/80 mb-4">
                  Asociación Nacional de Parques y Recreación de México - Transformando espacios públicos para un futuro sostenible.
                </p>
                <div className="text-2xl font-bold text-accent" data-testid="footer-hashtag">#CongresoParques2026</div>
              </div>
              
              {/* Links */}
              <div>
                <h4 className="font-semibold mb-4">Enlaces</h4>
                <ul className="space-y-2 text-primary-foreground/80">
                  <li><a href="https://anprmexico.org/privacidad" className="hover:text-accent transition-colors" data-testid="footer-privacy">Políticas de privacidad</a></li>
                  <li><a href="https://anprmexico.org/terminos" className="hover:text-accent transition-colors" data-testid="footer-terms">Términos y condiciones</a></li>
                  <li><a href="https://anprmexico.org/faq" className="hover:text-accent transition-colors" data-testid="footer-faq">Preguntas frecuentes</a></li>
                </ul>
              </div>
              
              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-4">Contacto</h4>
                <ul className="space-y-2 text-primary-foreground/80">
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:congreso@anprmexico.org" className="hover:text-accent transition-colors" data-testid="footer-email">congreso@anprmexico.org</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <a href="https://wa.me/526641234567" className="hover:text-accent transition-colors" data-testid="footer-whatsapp">+52 (664) 123-4567</a>
                  </li>
                </ul>
                
                {/* Social Icons */}
                <div className="flex gap-4 mt-4">
                  <a href="https://facebook.com/ANPRMexico" className="text-primary-foreground/80 hover:text-accent transition-colors" aria-label="Facebook" data-testid="social-facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com/company/anpr-mexico" className="text-primary-foreground/80 hover:text-accent transition-colors" aria-label="LinkedIn" data-testid="social-linkedin">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com/anprmexico" className="text-primary-foreground/80 hover:text-accent transition-colors" aria-label="Instagram" data-testid="social-instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://youtube.com/@ANPRMexico" className="text-primary-foreground/80 hover:text-accent transition-colors" aria-label="YouTube" data-testid="social-youtube">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
              <p>&copy; 2024 Asociación Nacional de Parques y Recreación de México. Todos los derechos reservados.</p>
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

      {/* Image Modal */}
      <Dialog open={imageModalOpen} onOpenChange={setImageModalOpen}>
        <DialogContent className="max-w-4xl max-h-full p-4" data-testid="image-modal">
          <DialogHeader>
            <DialogTitle className="sr-only">Galería de imágenes</DialogTitle>
          </DialogHeader>
          <div className="relative">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg mx-auto"
              data-testid="modal-image"
            />
          </div>
        </DialogContent>
      </Dialog>

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
