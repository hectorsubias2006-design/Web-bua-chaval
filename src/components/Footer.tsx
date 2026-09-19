import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface" id="contacto">
      <div className="w-full px-gutter-mobile md:px-gutter lg:px-margin py-space-xl">
        
        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg pb-space-xl">
          
          {/* Columna 1: Logotipo y descripción */}
          <div className="lg:col-span-5 space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <img
                alt="Búa Chaval Logo"
                className="w-14 h-14 object-contain"
                src="/logo-white.png"
              />
              <span className="font-headline-md text-headline-md text-inverse-on-surface font-semibold">
                Búa Chaval
              </span>
            </div>

            <p className="font-body-md text-body-md text-surface-dim max-w-sm leading-relaxed">
              Asador hispano-cubano en Utebo (Zaragoza). La autenticidad del fuego de carbón vegetal y la generosidad de la cocina criolla reunidas bajo un mismo techo familiar.
            </p>

            <div className="flex items-center gap-space-xs pt-space-xs flex-wrap">
              <span className="px-space-xs py-1 rounded bg-surface-variant/15 text-primary-fixed font-label-sm text-label-sm uppercase tracking-wider">
                Cachopo XL
              </span>
              <span className="px-space-xs py-1 rounded bg-surface-variant/15 text-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider">
                Brasas
              </span>
              <span className="px-space-xs py-1 rounded bg-surface-variant/15 text-tertiary-fixed font-label-sm text-label-sm uppercase tracking-wider">
                Sabor Criollo
              </span>
            </div>

            <div className="space-y-space-xs pt-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-dim block">
                Síguenos y Reseñas
              </span>
              <div className="flex items-center gap-space-xs">
                {/* Cámara -> Instagram */}
                <a
                  aria-label="Instagram @asadorbuachaval"
                  className="w-10 h-10 rounded-lg bg-surface-variant/15 flex items-center justify-center text-inverse-on-surface hover:bg-primary hover:text-on-primary transition-colors"
                  href="https://www.instagram.com/asadorbuachaval/?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Síguenos en Instagram"
                >
                  <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                </a>

                {/* Estrella -> Reseñas Google Maps */}
                <a
                  aria-label="Reseñas en Google Maps"
                  className="w-10 h-10 rounded-lg bg-surface-variant/15 flex items-center justify-center text-inverse-on-surface hover:bg-primary hover:text-on-primary transition-colors"
                  href="https://www.google.com/maps/place/Bua+Chaval/@41.7062804,-1.0016865,18z/data=!4m6!3m5!1s0xd596f4bb623a6b5:0x5b5622752dc1160!8m2!3d41.7065334!4d-1.0008018!16s%2Fg%2F11vr7zdgr5?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Valorar y ver reseñas en Google Maps"
                >
                  <span className="material-symbols-outlined text-[20px]">star</span>
                </a>

                {/* Mapa -> Google Maps */}
                <a
                  aria-label="Google Maps"
                  className="w-10 h-10 rounded-lg bg-surface-variant/15 flex items-center justify-center text-inverse-on-surface hover:bg-primary hover:text-on-primary transition-colors"
                  href="https://www.google.com/maps/place/Bua+Chaval/@41.7062804,-1.0016865,18z/data=!4m6!3m5!1s0xd596f4bb623a6b5:0x5b5622752dc1160!8m2!3d41.7065334!4d-1.0008018!16s%2Fg%2F11vr7zdgr5?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Ver ubicación en Google Maps"
                >
                  <span className="material-symbols-outlined text-[20px]">map</span>
                </a>
              </div>
            </div>
          </div>

          {/* Columna 2: Contacto directo */}
          <div className="lg:col-span-4 space-y-space-md">
            <span className="font-label-md text-label-md uppercase tracking-wider text-primary-fixed block font-semibold">
              Contacto Directo
            </span>
            <div className="space-y-space-sm font-body-sm text-body-sm text-surface-dim">
              <div className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-primary-fixed shrink-0 text-[18px]">
                  location_on
                </span>
                <p>
                  C. de San Andrés, 27<br />
                  50180 Utebo, Zaragoza
                </p>
              </div>

              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary-fixed shrink-0 text-[18px]">
                  call
                </span>
                <a
                  className="text-inverse-on-surface hover:text-primary-fixed transition-colors font-medium text-body-md"
                  href="tel:+34624282993"
                >
                  +34 624 28 29 93
                </a>
              </div>

              <div className="pt-space-xs">
                <a
                  className="inline-flex items-center gap-space-xs px-space-md py-space-xs bg-primary-container text-on-primary rounded-lg font-label-sm text-label-sm uppercase tracking-wider hover:bg-primary transition-colors font-semibold shadow-sm"
                  href="tel:+34624282993"
                >
                  <span className="material-symbols-outlined text-[16px]">phone_in_talk</span>
                  <span>Click to Call</span>
                </a>
              </div>
            </div>
          </div>

          {/* Columna 3: Horarios detallados */}
          <div className="lg:col-span-3 space-y-space-md">
            <span className="font-label-md text-label-md uppercase tracking-wider text-primary-fixed block font-semibold">
              Horarios
            </span>
            <div className="space-y-space-sm font-body-sm text-body-sm text-surface-dim">
              <div>
                <strong className="text-inverse-on-surface block font-medium">Miércoles a Domingo</strong>
                <span>Mediodía: 12:00 – 16:30 h</span>
              </div>
              <div>
                <strong className="text-inverse-on-surface block font-medium">Jueves a Sábado</strong>
                <span>Noches: 20:00 – 00:00 h</span>
              </div>
              <div className="pt-space-xs">
                <span className="inline-block px-2 py-0.5 rounded bg-surface-variant/20 text-surface-tint font-label-sm text-label-sm italic">
                  Lunes y Martes cerrado por descanso
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright y pie legal */}
        <div className="pt-space-md border-t border-surface-variant/20 flex flex-col md:flex-row items-center justify-between gap-space-md text-surface-dim font-body-sm text-body-sm">
          <p>© 2025 Búa Chaval Restaurante Asador. Todos los derechos reservados. Utebo (Zaragoza)</p>
          <div className="flex items-center gap-space-md font-label-md text-label-md">
            <a className="hover:text-inverse-on-surface transition-colors" href="#">Aviso Legal</a>
            <a className="hover:text-inverse-on-surface transition-colors" href="#">Política de Privacidad</a>
            <a className="hover:text-inverse-on-surface transition-colors" href="#">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
