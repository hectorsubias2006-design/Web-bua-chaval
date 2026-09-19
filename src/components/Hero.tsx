import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-low min-h-[90vh] flex items-center" id="inicio">
      {/* Background Accent / Image Right on Desktop */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/fachada.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full px-gutter-mobile md:px-gutter lg:px-margin py-space-xl lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          <div className="lg:col-span-7 xl:col-span-6 space-y-space-md bg-surface-container-low/95 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-space-md sm:p-space-lg lg:p-0 rounded-lg">
            
            {/* Category Pill con Logo Integrado */}
            <div className="flex items-center gap-3 flex-wrap">
              <img
                src="/logo.png"
                alt="Logo Búa Chaval"
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain drop-shadow-sm"
              />
              <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">
                  Asador Tradicional & Fusión Caribeña en Utebo
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="font-headline-lg lg:font-display-lg text-headline-lg lg:text-display-lg text-on-surface tracking-tight text-balance leading-tight">
              Donde la tradición española y el sabor{' '}
              <span className="italic text-primary font-normal">cubano</span> se encuentran.
            </h1>

            {/* Editorial Subtitle */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Disfruta de nuestra comida casera, carnes a la brasa al carbón vegetal y nuestro famoso Cachopo XL en un ambiente cálido y familiar en el corazón de Utebo.
            </p>

            {/* CTAs */}
            <div className="pt-space-sm flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md">
              <a
                href="#nuestra-carta"
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md bg-primary-container text-on-primary font-label-md text-label-md tracking-wider uppercase rounded-lg hover:bg-primary transition-all duration-200 shadow-md"
              >
                <span>Ver Carta y Menú</span>
                <span className="material-symbols-outlined text-[18px]">restaurant_menu</span>
              </a>
              <a
                href="tel:+34624282993"
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md bg-surface-container text-secondary font-label-md text-label-md tracking-wider uppercase rounded-lg hover:bg-secondary/10 transition-all duration-200 border border-outline-variant/30"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                <span>Reservar Mesa</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-space-md flex items-center justify-center sm:justify-start gap-space-lg max-w-md mx-auto sm:mx-0">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[20px]">favorite</span>
                <span className="font-label-md text-label-md text-on-surface">Cocina con alma</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-tertiary text-[20px]">nest_multi_room</span>
                <span className="font-label-md text-label-md text-on-surface">Ambiente cálido</span>
              </div>
            </div>
          </div>

          {/* Mobile image shown only on smaller screens */}
          <div className="lg:hidden w-full h-72 rounded-xl overflow-hidden shadow-lg mt-space-md">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('/fachada.jpg')`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
