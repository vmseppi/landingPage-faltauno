import { MoveRight, Calendar, MapPin } from "lucide-react";

function App() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Falta Uno",
    description: "Plataforma para encontrar jugadores para partidos deportivos",
    url: "https://tudominio.com",
    applicationCategory: "SportsApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    creator: {
      "@type": "Organization",
      name: "Falta Uno",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-custom-gradient">
        {/* Header con fondo de imagen y overlay azul */}
        <header
          className="relative min-h-[418px] md:min-h-[600px] md:max-h-[767px] flex items-center justify-center md:justify-start backdrop-blur-sm"
          style={{
            backgroundImage: `linear-gradient(rgba(1, 82, 141, 0.8), rgba(1, 82, 141, 0.8)), url('images/futbol-players.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container mx-auto px-7 md:px-48 py-8 md:py-48 flex flex-col items-center md:items-start relative z-10">
            <div className="max-w-[740px]">
              <div className="flex items-center mb-[20px]">
                <div className="whitespace-nowrap">
                  <span className="inline text-[40.35px] md:text-[80px] text-white leading-[100%] font-semibold text-center uppercase font-['Lexend_Exa']">
                    FALTA<span className="text-[#03DAC5]">UNO</span>
                  </span>
                </div>

                <img
                  src="images/F.svg"
                  alt="Falta Uno Logo"
                  className="ml-[9px] w-[57px] h-[57px] md:w-[124px] md:h-[124px]"
                />
              </div>
              <h1 className="text-white font-lexend font-bold text-xl md:text-[30px] lg:text-[30px] text-center md:text-left uppercase leading-tight mb-4 relative z-10">
                Organiza tu partido
                <br className="md:hidden" />
                <span className="md:inline"> </span>
                en segundos.
              </h1>
              <p className="text-white text-center md:text-left mb-4 w-[353px] md:w-auto md:max-w-[600px] h-[74px] md:h-auto leading-7 md:leading-8 font-lexend font-medium text-sm md:text-xl relative z-10 md:hidden">
                Fútbol, pádel, tenis, basket... Organiza
                <br />
                o únete a partidos cerca de ti, con quien
                <br />
                quieras y donde quieras.
              </p>

              <p className="hidden md:block text-[20px] max-w-771px] leading-[40px] font-medium font-['Lexend_Exa'] l text-white mb-[100px] mt-[54px]">
                Fútbol, pádel, tenis, basket... Organiza o únete a <br />{" "}
                partidos cerca de ti, con quien quieras y donde quieras.
              </p>

              <a
                href="mailto:soportefaltauno@gmail.com?subject=Hola%20desde%20Falta%20Uno&body=Me%20gustaría%20saber%20más%20sobre%20la%20app."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-lexend font-bold text-lg md:text-xl px-[25.78px] py-[17.19px] md:px-8 md:py-4 rounded-[51.56px] w-[240.56px] h-[57.37px] md:w-auto md:h-auto leading-none mt-[40px] relative z-10"
              >
                Contacta
              </a>
            </div>
          </div>
        </header>

        <main>
          <section className="bg-white py-16 px-7">
            <div className="container mx-auto">
              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="text-center mb-12">
                  <p className="font-lexend font-medium text-sm leading-7 text-black mb-6">
                    Con{" "}
                    <span className="font-medium text-[#086EC1]">FALTA</span>
                    <span className="text-[#03DAC5]">UNO</span> crea de forma
                    rápida y sencilla el partido que tu quieras, elige el
                    deporte, la fecha, el lugar y el número de jugadores.
                  </p>
                  <button className="flex items-center justify-center mx-auto text-[#03DAC5] font-lexend font-black text-lg leading-none">
                    Organiza tu partido
                    <MoveRight className="ml-2 w-4 h-4" />
                  </button>
                </div>

                <div className="flex justify-center">
                  <img
                    src="images/phones.svg"
                    alt="Falta Uno App Screenshots"
                    className="w-full max-w-md"
                  />
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex items-center justify-between gap-12 pl-[190px] py-8">
                <div className="flex-1 max-w-[500px]">
                  <p className="font-lexend font-medium text-xl leading-8 text-black mb-8">
                    Con{" "}
                    <span className="font-semibold text-[#086EC1]">FALTA</span>
                    <span className="text-[#03DAC5] font-semibold">
                      UNO
                    </span>{" "}
                    crea de forma rápida y sencilla el partido que tu quieras,
                    elige el deporte, la fecha, el lugar y el número de
                    jugadores.
                  </p>
                  <button className="flex items-center text-[#03DAC5] font-lexend font-black text-3xl leading-none">
                    Organiza tu partido
                    <MoveRight className="ml-3 w-6 h-6" />
                  </button>
                </div>

                <div className="flex-1 flex justify-center">
                  <img
                    src="images/phones.svg"
                    alt="Falta Uno App Screenshots"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Sección de Beneficios */}
          <section className="bg-white py-16 px-7">
            <div className="container mx-auto">
              {/* Mobile Layout */}
              <div className="md:hidden flex flex-col items-center">
                {/* Título principal */}
                <h2 className="text-center mb-8 font-lexend font-bold text-[22px] leading-none whitespace-nowrap">
                  <span className="text-black">Beneficios de </span>
                  <span className="bg-gradient-to-r from-[#03DAC5] to-[#0160A8] bg-clip-text text-transparent">
                    FALTAUNO
                  </span>
                </h2>

                {/* Lista de beneficios */}
                <div className="mb-12">
                  <ul className="space-y-2 text-left">
                    <li className="font-lexend font-medium text-sm leading-7 text-black">
                      • Organiza partidos en 30 segundos.
                    </li>
                    <li className="font-lexend font-medium text-sm leading-7 text-black">
                      • Encuentra jugadores fácilmente.
                    </li>
                    <li className="font-lexend font-medium text-sm leading-7 text-black">
                      • Reserva pistas públicas o privadas cerca de ti.
                    </li>
                  </ul>
                </div>

                {/* Cajas de características */}
                <div className="space-y-8 mb-12">
                  {/* Caja 1 - Cuando quieras */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Calendar className="w-9 h-10 text-[#0087ED]" />
                    </div>
                    <div>
                      <h3 className="font-lexend font-bold text-base leading-none text-black mb-3">
                        Cuando quieras
                      </h3>
                      <p className="font-lexend font-normal text-xs leading-4 text-black">
                        Decide el momento que <br /> más encaje con tu vida
                        diaria.
                      </p>
                    </div>
                  </div>

                  {/* Caja 2 - Donde quieras */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <MapPin className="w-9 h-10 text-[#0087ED]" />
                    </div>
                    <div className="max-w-[222px] max-h-[60px]">
                      <h3 className="font-lexend font-bold text-base leading-none text-black mb-3">
                        Donde quieras
                      </h3>
                      <p className="font-lexend font-medium text-xs leading-4 text-black">
                        Pistas públicas, privadas, donde tú quieras.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-10">
                  <img
                    src="images/F.svg"
                    alt="Falta Uno Logo"
                    className="w-[92px] h-[92px]"
                  />
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex items-start gap-12 px-48 py-8">
                {/* Logo F a la izquierda */}
                <div className="flex-shrink-0">
                  <img
                    src="images/F.svg"
                    alt="Falta Uno Logo"
                    className="w-[180px] h-[180px] mr-[107px]"
                  />
                </div>

                {/* Contenido a la derecha */}
                <div className="flex-1">
                  {/* Título principal */}
                  <h2 className="mb-8 font-lexend font-bold text-[30px] leading-none">
                    <span className="text-black">Beneficios de </span>
                    <span className="bg-gradient-to-r from-[#03DAC5] to-[#0160A8] bg-clip-text text-transparent">
                      FALTAUNO
                    </span>
                  </h2>

                  {/* Lista de beneficios */}
                  <div className="mb-12">
                    <ul className="space-y-2 text-left">
                      <li className="font-lexend font-medium text-[20px] leading-7 text-black">
                        • Organiza partidos en 30 segundos.
                      </li>
                      <li className="font-lexend font-medium text-[20px] leading-7 text-black">
                        • Encuentra jugadores fácilmente.
                      </li>
                      <li className="font-lexend font-medium text-[20px] leading-7 text-black">
                        • Reserva pistas públicas o privadas cerca de ti.
                      </li>
                    </ul>
                  </div>

                  {/* Cajas de características */}
                  <div className="space-y-8">
                    {/* Caja 1 - Cuando quieras */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Calendar className="w-[50px] h-[50px] text-[#0087ED]" />
                      </div>
                      <div>
                        <h3 className="font-lexend font-bold text-[24px] leading-none text-black mb-3">
                          Cuando quieras
                        </h3>
                        <p className="font-lexend font-normal text-sm leading-4 text-black">
                          Decide el momento que más encaje con tu vida diaria.
                        </p>
                      </div>
                    </div>

                    {/* Caja 2 - Donde quieras */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <MapPin className="w-[50px] h-[50px] text-[#0087ED]" />
                      </div>
                      <div>
                        <h3 className="font-lexend font-bold text-[24px] leading-none text-black mb-3">
                          Donde quieras
                        </h3>
                        <p className="font-lexend font-medium text-sm leading-4 text-black">
                          Pistas públicas, privadas, donde tú quieras.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer con fondo de imagen y overlay azul */}
        <footer
          className="w-[390px] h-[298px] md:w-full mx-auto flex items-center justify-center backdrop-blur-sm md:pb-[100px]"
          style={{
            backgroundImage: `linear-gradient(rgba(1, 82, 141, 0.8), rgba(1, 82, 141, 0.8)), url('images/couple-playing-tennis.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container mx-auto text-center px-7 relative z-10 ">
            <h2 className="font-lexend font-black text-[22px] leading-7 text-white mb-8 relative z-10 md:hidden">
              Empieza a jugar <br />
              hoy mismo.
            </h2>
            <h2 className="hidden md:block font-lexend font-black text-[22px] leading-7 text-white mb-8 relative z-10 md:my-[100px]">
              Empieza a jugar hoy mismo.
            </h2>
            <a
              href="mailto:soportefaltauno@gmail.com?subject=Hola%20desde%20Falta%20Uno&body=Me%20gustaría%20saber%20más%20sobre%20la%20app."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-lexend font-black text-lg px-[25.78px] py-[17.19px] rounded-[51.56px] w-[240.56px] h-[57.37px] leading-none mt-10 relative z-10 "
            >
              Contacta
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
