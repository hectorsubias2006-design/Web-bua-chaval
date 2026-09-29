import React from 'react';

export default function BurgerThursday() {
  return (
    <section
      id="jueves-burger"
      className="relative w-full px-gutter-mobile md:px-gutter lg:px-margin py-space-xl lg:py-28 bg-[#1f1b18] text-white overflow-hidden scroll-mt-20"
    >
      {/* Background Glow / Warmth Accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#ba4e26]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header de la Novedad */}
        <div className="text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/25 border border-primary/50 text-[#ffb59c] shadow-inner">
            <span className="font-label-sm uppercase tracking-widest text-xs font-bold text-white">
              ¡NOVEDAD! SOLO LOS JUEVES
            </span>
          </div>
          
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight">
            Los Jueves: <span className="text-[#ff9d79] italic font-normal">Noche de Hamburguesas</span>
          </h2>
          
          <p className="font-body-md text-base sm:text-lg text-[#dec0b7] max-w-2xl mx-auto leading-relaxed">
            A partir de ahora, cada jueves celebramos el sabor en <strong className="text-white">Buá Chaval</strong> con dos creaciones gourmet únicas que fusionan la mejor brasa tradicional y la sazón cubana.
          </p>
        </div>

        {/* Grid de las 2 Hamburguesas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-12">
          
          {/* HAMBURGUESA 1: CUBANA */}
          <div className="relative bg-[#29231f] border border-[#dec0b7]/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-primary/60 transition-all duration-300 group">
            <div className="absolute top-4 right-4 bg-primary/20 text-[#ff9d79] border border-primary/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Sazón Criolla
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-headline-sm text-2xl sm:text-3xl text-white font-bold tracking-tight">
                  Hamburguesa Cubana
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#ffb59c] font-semibold mt-1">
                  100% Vaca Retinta + Ropa Vieja de la Casa
                </p>
              </div>

              <p className="text-sm text-[#dec0b7] leading-relaxed">
                Nuestra joya de fusión: tierna carne de vaca retinta coronada con la auténtica ropa vieja deshebrada al estilo criollo tradicional y doble golpe de queso.
              </p>

              {/* Lista de ingredientes */}
              <div className="pt-2">
                <span className="text-xs uppercase tracking-wider text-white/70 font-semibold block mb-2.5">
                  Ingredientes seleccionados:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#e7e2d9]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>Hamburguesa de <strong>vaca retinta</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span><strong>Ropa vieja</strong> cubana deshebrada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>Loncha de queso <strong>cheddar</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>Cremosa <strong>salsa cheddar</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span><strong>Bacón</strong> crujiente a la plancha</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>Tomate y mezclum de hojas frescas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Precio & Guarnición */}
            <div className="mt-8 pt-5 border-t border-[#dec0b7]/15 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-amber-300 text-xs sm:text-sm font-medium">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>Incluye patatas con parmesano</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-bold text-[#ff9d79]">15,50</span>
                <span className="text-xl font-bold text-[#ff9d79]">€</span>
              </div>
            </div>
          </div>

          {/* HAMBURGUESA 2: ASADA */}
          <div className="relative bg-[#29231f] border border-[#dec0b7]/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-secondary/60 transition-all duration-300 group">
            <div className="absolute top-4 right-4 bg-secondary/25 text-[#a1d1b8] border border-secondary/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Alma de Brasa
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-headline-sm text-2xl sm:text-3xl text-white font-bold tracking-tight">
                  Hamburguesa Asada
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#a1d1b8] font-semibold mt-1">
                  Hamburguesa Mixta + Carne Asada
                </p>
              </div>

              <p className="text-sm text-[#dec0b7] leading-relaxed">
                El homenaje definitivo al asador: jugosa hamburguesa mixta combinada con tierna carne asada, fundente queso gouda y salsa ahumada.
              </p>

              {/* Lista de ingredientes */}
              <div className="pt-2">
                <span className="text-xs uppercase tracking-wider text-white/70 font-semibold block mb-2.5">
                  Ingredientes seleccionados:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#e7e2d9]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    <span>Hamburguesa <strong>mixta</strong> jugosa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    <span>Tierna <strong>carne asada</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    <span>Loncha de queso <strong>Gouda</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    <span>Especial <strong>salsa ahumada</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    <span><strong>Bacón</strong> crujiente doradito</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    <span>Tomate y mezclum de hojas frescas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Precio & Guarnición */}
            <div className="mt-8 pt-5 border-t border-[#dec0b7]/15 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-amber-300 text-xs sm:text-sm font-medium">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>Incluye patatas con parmesano</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-bold text-[#ff9d79]">15,50</span>
                <span className="text-xl font-bold text-[#ff9d79]">€</span>
              </div>
            </div>
          </div>

        </div>

        {/* Destacado: Patatas con Lluvia de Parmesano */}
        <div className="bg-gradient-to-r from-[#2c201a] via-[#35251d] to-[#2c201a] border border-[#dec0b7]/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5">
            <span className="inline-block px-2.5 py-0.5 rounded bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
              Guarnición Incluida
            </span>
            <h4 className="font-headline-sm text-xl sm:text-2xl text-white font-bold">
              Patatas Caseras con Lluvia de Parmesano
            </h4>
            <p className="text-xs sm:text-sm text-[#dec0b7] max-w-2xl leading-relaxed">
              Ambas hamburguesas vienen servidas con abundante ración de patatas doradas y queso parmesano recién rallado por encima. ¡El acompañamiento perfecto!
            </p>
          </div>

          <div className="flex items-center shrink-0 w-full md:w-auto">
            {/* Botón Reservar Jueves */}
            <a
              href="tel:+34624282993"
              className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-[#ba4e26] text-white rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-primary/30"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>Reservar para el Jueves</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
