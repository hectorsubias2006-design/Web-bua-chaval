import React from 'react';

export default function About() {
  return (
    <section className="w-full px-gutter-mobile md:px-gutter lg:px-margin py-space-xl lg:py-32 bg-surface scroll-mt-20" id="el-local">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        
        {/* Narrative Column */}
        <div className="lg:col-span-6 space-y-space-md">
          <div className="space-y-space-xs">
            <span className="font-label-md text-label-md text-primary tracking-widest uppercase block">
              Nuestra Historia y Pasión
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Fusión que enamora
            </h2>
          </div>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            El chef <span className="font-medium text-on-surface">Daniel Pando</span> ha transformado nuestro espacio en Utebo en un rincón tropical, fresco y luminoso, conjugando la maestría del asador español con los matices vibrantes, cítricos y especiados de la cocina cubana.
          </p>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Nacimos con vocación de punto de encuentro: un asador profundamente familiar, idóneo para largas sobremesas, comidas de grupo festivas y celebraciones íntimas. Aquí el fuego del carbón vegetal abraza la sazón isleña bajo una hospitalidad atenta y distendida.
          </p>

          {/* Signature quote card con logo integrado */}
          <div className="p-space-md rounded-lg bg-surface-container-low flex items-start gap-space-md border border-outline-variant/20 relative overflow-hidden">
            <span className="material-symbols-outlined text-primary text-[32px] shrink-0">format_quote</span>
            <div className="flex-grow">
              <p className="font-headline-sm text-headline-sm italic text-on-surface">
                «Cocinar a la brasa es un diálogo paciente entre el carbón vegetal y las raíces caribeñas que llevo en el corazón.»
              </p>
              <div className="flex items-center justify-between mt-space-xs gap-2">
                <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">
                  Daniel Pando — Chef Ejecutivo & Fundador
                </span>
                <img
                  src="/logo.png"
                  alt="Sello Búa Chaval"
                  className="h-9 w-9 object-contain opacity-70 hidden sm:inline-block"
                />
              </div>
            </div>
          </div>

          {/* Detail Micro-List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-xs">
            <div className="space-y-1">
              <span className="material-symbols-outlined text-secondary text-[24px]">sync_alt</span>
              <h3 className="font-title-md text-title-md text-on-surface">Fusión Genuina</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Sin artificios, equilibrando sabor y raíz.</p>
            </div>
            <div className="space-y-1">
              <span className="material-symbols-outlined text-primary text-[24px]">whatshot</span>
              <h3 className="font-title-md text-title-md text-on-surface">Brasas de Carbón</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Sellado perfecto y aromas ahumados de carbón vegetal.</p>
            </div>
            <div className="space-y-1">
              <span className="material-symbols-outlined text-tertiary text-[24px]">waving_hand</span>
              <h3 className="font-title-md text-title-md text-on-surface">Cercanía Caribeña</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Atención que te hace sentir en casa.</p>
            </div>
          </div>
        </div>

        {/* Image & Float Badge Column */}
        <div className="lg:col-span-6 relative">
          <div className="relative w-full h-[460px] md:h-[540px] rounded-lg overflow-hidden shadow-xl">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('/neon-interior.webp')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-on-background/30 via-transparent to-transparent" />
          </div>

          {/* Overlapping Card */}
          <div className="sm:absolute -bottom-8 -left-6 max-w-sm mt-space-md sm:mt-0 p-space-md bg-surface-container-lowest rounded-lg shadow-xl space-y-space-xs border border-outline-variant/30">
            <div className="flex items-center gap-space-xs text-secondary">
              <span className="material-symbols-outlined text-[20px]">markdown_copy</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Ambiente Único</span>
            </div>
            <h4 className="font-headline-sm text-headline-sm text-on-surface">Un rincón tropical en Utebo</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Luz cálida, vegetación y la cadencia de una sobremesa sin prisas en el valle del Ebro.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
