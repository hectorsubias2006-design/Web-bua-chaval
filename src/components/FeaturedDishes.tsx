import React from 'react';

export default function FeaturedDishes() {
  return (
    <section className="w-full px-gutter-mobile md:px-gutter lg:px-margin py-space-xl lg:py-28 bg-surface-container-low">
      
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center space-y-space-xs mb-space-xl">
        <span className="font-label-md text-label-md text-primary tracking-widest uppercase font-semibold">
          Especialidades de la Casa
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Sabores inolvidables a la brasa y con alma caribeña
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
          Platos concebidos para compartir y celebrar, elaborados al momento con materias primas de cercanía y sazón auténtica.
        </p>
      </div>

      {/* 4 Platos Estrella Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md max-w-7xl mx-auto mb-space-xl">
        
        {/* Tarjeta 1: Chuletón de la Finca */}
        <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col border border-outline-variant/30">
          <div className="relative w-full h-60 overflow-hidden bg-surface-container">
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB67xn8C2gQBAlSgj5pSpqZEatUbkyAxn7vj3sX8KqjxAVTNgSwJJti82F-w7Gbe2z0RI_Mrx4ACfLCzxcnWALY1PfD3Ua_OMFm4EpuSp4CAKjec3GfQODAwaBEL8KCaBap44FYSFi72PFDvkpXHQ2hCRW7qj0nLbLKdC2ViiEH9xDt4ndNIkhd9SJqC0NAn_UKOu1E6IN7bSOw6VVfzkcaPT7tYydbwQI9ZwCxKgELWbt9ZvyOecVzia17sCTSd_af')`,
              }}
            />
            <span className="absolute top-3 left-3 px-space-sm py-1 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm uppercase tracking-wider font-semibold shadow-sm">
              Carbón Vegetal
            </span>
          </div>

          <div className="p-space-md flex flex-col justify-between flex-grow space-y-space-md">
            <div className="space-y-space-xs">
              <div className="flex items-baseline justify-between gap-space-sm">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold text-lg">
                  Chuletón de la Finca
                </h3>
                <span className="font-headline-sm text-headline-sm text-primary font-bold shrink-0">
                  25,50€
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-xs sm:text-sm">
                Chuletón trinchado con pimientos de Padrón a la brasa de carbón vegetal, aromatizado con romero y sal marina. Opción 1kg.
              </p>
            </div>

            <div className="pt-space-sm border-t border-outline-variant/30 flex items-center justify-between text-secondary font-label-sm text-label-sm text-xs">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
                <span className="font-medium">500g / 1kg</span>
              </div>
              <span className="text-on-surface-variant font-medium">Bandeja 1kg: 55€</span>
            </div>
          </div>
        </div>

        {/* Tarjeta 2: Tabla de Cachopo XL */}
        <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col border border-outline-variant/30">
          <div className="relative w-full h-60 overflow-hidden bg-surface-container">
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage: `url('/cachopo-tabla.jpg')`,
              }}
            />
            <span className="absolute top-3 left-3 px-space-sm py-1 rounded bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold shadow-sm">
              Especialidad Casa
            </span>
          </div>

          <div className="p-space-md flex flex-col justify-between flex-grow space-y-space-md">
            <div className="space-y-space-xs">
              <div className="flex items-baseline justify-between gap-space-sm">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold text-lg">
                  Bandeja de Cachopo
                </h3>
                <span className="font-headline-sm text-headline-sm text-primary font-bold shrink-0">
                  50,00€
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-xs sm:text-sm">
                Ternera crujiente rellena de jamón y queso fundido en tabla con pimientos asados y patatas doradas. Opción individual por 25€.
              </p>
            </div>

            <div className="pt-space-sm border-t border-outline-variant/30 flex items-center justify-between text-secondary font-label-sm text-label-sm text-xs">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[16px]">restaurant</span>
                <span className="font-medium">Bandeja 1kg: 50€</span>
              </div>
              <span className="text-primary font-semibold">Individual: 25€</span>
            </div>
          </div>
        </div>

        {/* Tarjeta 3: Pulpo a la Brasa */}
        <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col border border-outline-variant/30">
          <div className="relative w-full h-60 overflow-hidden bg-surface-container">
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage: `url('/pulpo.webp')`,
              }}
            />
            <span className="absolute top-3 left-3 px-space-sm py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider font-semibold shadow-sm">
              Especialidad Brasa
            </span>
          </div>

          <div className="p-space-md flex flex-col justify-between flex-grow space-y-space-md">
            <div className="space-y-space-xs">
              <div className="flex items-baseline justify-between gap-space-sm">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold text-lg">
                  Pulpo a la Brasa
                </h3>
                <span className="font-headline-sm text-headline-sm text-primary font-bold shrink-0">
                  22,50€
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-xs sm:text-sm">
                Pata de pulpo seleccionada a la brasa de carbón vegetal sobre suave parmentier de patatas casero y pimentón de la Vera.
              </p>
            </div>

            <div className="pt-space-sm border-t border-outline-variant/30 flex items-center justify-between text-secondary font-label-sm text-label-sm text-xs">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[16px]">set_meal</span>
                <span className="font-medium">Parmentier casero</span>
              </div>
              <span className="text-on-surface-variant font-medium">Plato estrella</span>
            </div>
          </div>
        </div>

        {/* Tarjeta 4: Sabor a Cuba */}
        <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col border border-outline-variant/30">
          <div className="relative w-full h-60 overflow-hidden bg-surface-container">
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmN0emqm36Qi6yMJWIvgSPoeNlmZuRTCMCtPGc8-v5efaX6DdZdukrmGpifJXkRzO8OuwudIR89BlJZNf4CVGajyRE4XQoGdCB_77Hd11Q9Miu_ypQDqradJBoJpEgEzHjvHy93feJ4AeRZMYGa1N5X3Wzq1q3uNcm3NOLHLyZ7w5k5bM4EkeLk_edrzWImEgQmp0xVItU1JLbWCYu4ISKD2xVDBUH8J9HQrJ1LCNK18qp0uME9bCh1LhZiML5fQXb')`,
              }}
            />
            <span className="absolute top-3 left-3 px-space-sm py-1 rounded bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold shadow-sm">
              Receta Criolla
            </span>
          </div>

          <div className="p-space-md flex flex-col justify-between flex-grow space-y-space-md">
            <div className="space-y-space-xs">
              <div className="flex items-baseline justify-between gap-space-sm">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold text-lg">
                  Sabor a Cuba
                </h3>
                <span className="font-headline-sm text-headline-sm text-primary font-bold shrink-0">
                  Especialidad
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-xs sm:text-sm">
                Auténtica cocina criolla: ropa vieja deshebrada, arroz congrí, yuca con mojo criollo, mariquitas y tostones de plátano.
              </p>
            </div>

            <div className="pt-space-sm border-t border-outline-variant/30 flex items-center justify-between text-secondary font-label-sm text-label-sm text-xs">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[16px]">flare</span>
                <span className="font-medium">Sazón cubana</span>
              </div>
              <span className="text-on-surface-variant font-medium">Volcán 6pax: 150€</span>
            </div>
          </div>
        </div>

      </div>

      {/* Menú del Día Banner con Enlace directo a Instagram */}
      <div className="w-full max-w-4xl mx-auto rounded-lg bg-surface p-space-md sm:p-space-lg shadow-md flex flex-col md:flex-row items-center justify-between gap-space-md border border-outline-variant/20">
        <div className="flex items-center gap-space-md">
          <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
            <span className="material-symbols-outlined text-[28px]">lunch_dining</span>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-wider px-2 py-0.5 bg-primary/10 text-primary font-bold rounded">
                Miércoles a Viernes
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface">
                Menú del día por <strong className="text-primary font-semibold">15,50€</strong>
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Incluye 4 primeros a elegir, 4 segundos, bebida, pan casero y postre o café. Servicio de mediodía. En nuestro Instagram (<strong className="text-on-surface">@asadorbuachaval</strong>) subimos semanalmente el menú del día actualizado.
            </p>
          </div>
        </div>

        <a
          href="https://www.instagram.com/asadorbuachaval/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-space-md py-space-sm bg-secondary text-on-secondary font-label-md text-label-md uppercase tracking-wider rounded-lg hover:bg-on-secondary-fixed-variant transition-colors flex items-center gap-space-xs font-semibold shadow-sm"
        >
          <span>Consultar menú en Instagram</span>
          <span className="material-symbols-outlined text-[18px]">open_in_new</span>
        </a>
      </div>

    </section>
  );
}
