import { Link } from "wouter";
import { ArrowLeft, MapPin, Phone, Globe, Key } from "lucide-react";
import logoUrl from "@assets/LOGO Congreso Parques_1758315663051.png";

interface HotelCardProps {
  name: string;
  location: string;
  reservationCode: string;
  contact: string;
  email: string;
  phone: string;
  website: string;
  rooms: {
    type: string;
    single: string;
    double: string;
    note: string;
  };
}

function HotelCard({ name, location, reservationCode, contact, email, phone, website, rooms }: HotelCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <div className="p-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-center justify-center bg-gray-100 rounded-lg p-6">
            <span className="text-5xl">🏨</span>
          </div>
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xl font-bold text-[#0e0477]">{name}</h3>
            <div className="flex items-start gap-2 text-gray-700">
              <MapPin className="w-4 h-4 text-[#6847f6] mt-1 flex-shrink-0" />
              <span className="text-sm">{location}</span>
            </div>
            <div className="flex items-start gap-2 text-gray-700">
              <Key className="w-4 h-4 text-[#6847f6] mt-1 flex-shrink-0" />
              <span className="text-sm"><strong className="text-[#0e0477]">Clave de Reservación:</strong> {reservationCode}</span>
            </div>
            <div className="flex items-start gap-2 text-gray-700">
              <Phone className="w-4 h-4 text-[#6847f6] mt-1 flex-shrink-0" />
              <span className="text-sm"><strong className="text-[#0e0477]">Contacto:</strong> {contact} | {email} | {phone}</span>
            </div>
            <div className="flex items-start gap-2 text-gray-700">
              <Globe className="w-4 h-4 text-[#6847f6] mt-1 flex-shrink-0" />
              <a href={website} target="_blank" rel="noopener noreferrer" className="text-sm text-[#6847f6] hover:underline">{website}</a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <h4 className="text-sm font-bold text-[#0e0477] mb-2">Habitación</h4>
              <p className="text-sm text-gray-600">{rooms.type}</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0e0477] mb-2">SGL</h4>
              <p className="text-sm text-gray-600">{rooms.single}</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0e0477] mb-2">DBL</h4>
              <p className="text-sm text-gray-600">{rooms.double}</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0e0477] mb-2">Nota</h4>
              <p className="text-sm text-gray-600">{rooms.note}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hospedaje() {
  const hotels: HotelCardProps[] = [
    {
      name: "Fiesta Inn Tijuana Otay",
      location: "Blvd. Industrial 20001, Parque Industrial Otay, 22444 Tijuana, B.C.",
      reservationCode: "CONGRESO2026",
      contact: "Reservaciones",
      email: "reservaciones@fiestainn.com",
      phone: "Tel - 664 624 3500",
      website: "https://www.fiestainn.com/",
      rooms: {
        type: "Estándar",
        single: "$1,945 MXN",
        double: "$2,283 MXN",
        note: "Incluye desayuno e impuestos"
      }
    },
    {
      name: "Holiday Inn Express Tijuana",
      location: "Blvd. Agua Caliente 11500, Aviación, 22014 Tijuana, B.C.",
      reservationCode: "CONGRESO PARQUES 2026",
      contact: "Reservaciones",
      email: "ventas@hiextijuana.com",
      phone: "Tel - 664 634 2200",
      website: "https://www.ihg.com/",
      rooms: {
        type: "Estándar",
        single: "$1,744 MXN",
        double: "$1,744 MXN",
        note: "Incluye desayuno e impuestos"
      }
    },
    {
      name: "Ibis Tijuana",
      location: "Blvd. Agua Caliente 11320, Aviación, 22014 Tijuana, B.C.",
      reservationCode: "CPTIJ26",
      contact: "Reservaciones",
      email: "reservas@ibis.com",
      phone: "Tel - 664 634 3219",
      website: "https://all.accor.com/",
      rooms: {
        type: "Estándar",
        single: "$1,154 MXN",
        double: "$1,478 MXN",
        note: "Incluye desayuno e impuestos"
      }
    },
    {
      name: "Extended Suites Tijuana",
      location: "Blvd. Agua Caliente 10750, Aviación, 22014 Tijuana, B.C.",
      reservationCode: "Congreso Parques Tijuana 2026",
      contact: "Reservaciones",
      email: "ventas@extendedsuites.com.mx",
      phone: "Tel - 664 267 0704",
      website: "https://www.extendedsuites.com.mx/",
      rooms: {
        type: "Estándar",
        single: "$1,064 MXN",
        double: "$1,064 MXN",
        note: "Incluye impuestos"
      }
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
              Hospedaje
            </h1>
            <div className="w-32 h-1 bg-[#BCCE16] mx-auto mb-6"></div>
            <p className="text-white/90 text-lg">¡Encuentra tu alojamiento!</p>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-gradient-to-r from-[#0e0477] to-[#6847f6] py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white text-lg max-w-4xl mx-auto mb-4">
              Tijuana cuenta con una amplia oferta hotelera; en esta sección encontrarás información sobre hoteles a corta distancia del Centro de Convenciones. Si tu hotel desea formar parte del evento, escríbenos a: info@congresoparques.com
            </p>
            <p className="text-[#BCCE16] font-semibold">
              Para utilizar tu clave de reservación comunícate de manera telefónica a tu hotel seleccionado
            </p>
          </div>
        </section>

        {/* Hotels List */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {hotels.map((hotel, index) => (
                <HotelCard key={index} {...hotel} />
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
