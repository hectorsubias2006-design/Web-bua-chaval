import React from 'react';

export default function GrillBanner() {
  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden bg-on-surface">
      {/* Background with real fuego-brasas photo */}
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-105"
        style={{
          backgroundImage: `url('/fuego-brasas.jpg')`,
        }}
      />
      {/* Dark gradient for legibility & warm glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/90" />
      <div className="absolute inset-0 bg-primary/10 mix-blend-color" />

      <div className="relative z-10 max-w-5xl mx-auto px-gutter-mobile md:px-gutter lg:px-margin text-center space-y-space-md text-white">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/25 border border-primary/40 backdrop-blur-sm">
          <span className="material-symbols-outlined text-primary text-[20px]">local_fire_department</span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
            Auténtico Carbón Vegetal
          </span>
        </div>

        <h2 className="font-headline-lg lg:font-display-sm text-headline-lg lg:text-display-sm font-semibold tracking-tight text-balance text-white max-w-3xl mx-auto">
          El fuego vivo que sella el sabor y despierta los aromas
        </h2>

        <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
          En Búa Chaval no hay atajos: cada chuletón, cada pata de pulpo y cada especialidad pasan por nuestra brasa de carbón vegetal para lograr ese sellado jugoso por dentro y crujiente por fuera.
        </p>

        {/* 3 Pills highlight */}
        <div className="pt-space-sm flex flex-wrap items-center justify-center gap-space-sm text-sm">
          <div className="flex items-center gap-2 px-space-md py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/15">
            <span className="material-symbols-outlined text-primary text-[18px]">whatshot</span>
            <span className="font-medium text-white">Brasa de carbón natural</span>
          </div>
          <div className="flex items-center gap-2 px-space-md py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/15">
            <span className="material-symbols-outlined text-secondary text-[18px]">restaurant</span>
            <span className="font-medium text-white">Cortes nobles & Pulpo</span>
          </div>
          <div className="flex items-center gap-2 px-space-md py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/15">
            <span className="material-symbols-outlined text-tertiary text-[18px]">verified</span>
            <span className="font-medium text-white">Toque ahumado inconfundible</span>
          </div>
        </div>
      </div>
    </section>
  );
}
