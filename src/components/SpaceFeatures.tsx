import React from 'react';

export default function SpaceFeatures() {
  return (
    <section className="w-full px-gutter-mobile md:px-gutter lg:px-margin py-space-xl lg:py-28 bg-surface">
      <div className="max-w-3xl mx-auto text-center space-y-space-xs mb-space-xl">
        <span className="font-label-md text-label-md text-secondary tracking-widest uppercase font-semibold">
          Hospitalidad y Confort
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Tu espacio familiar y de celebración
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto">
          Pensado para que disfrutes sin prisas en la mejor compañía, con todas las facilidades para grandes y pequeños.
        </p>
      </div>

      {/* 3 Family Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg max-w-6xl mx-auto">
        
        {/* Feature 1 */}
        <div className="bg-surface-container-low p-space-lg rounded-lg space-y-space-sm hover:translate-y-[-2px] transition-transform border border-outline-variant/20">
          <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-[28px]">ac_unit</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">
            Climatización total
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Temperatura óptima garantizada durante todo el año para tu máximo confort tanto en el amplio comedor climatizado como en el área de barra.
          </p>
          <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider block pt-space-xs">
            Frescor en verano · Calidez en invierno
          </span>
        </div>

        {/* Feature 2 */}
        <div className="bg-surface-container-low p-space-lg rounded-lg space-y-space-sm hover:translate-y-[-2px] transition-transform border border-outline-variant/20">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[28px]">child_care</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">
            Comodidad para los más pequeños
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Disponemos de tronas seguras, pasillos anchos con espacio sobrado para carritos de bebé y menús infantiles adaptados a toda la familia.
          </p>
          <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider block pt-space-xs">
            Facilidades para familias reales
          </span>
        </div>

        {/* Feature 3 */}
        <div className="bg-surface-container-low p-space-lg rounded-lg space-y-space-sm hover:translate-y-[-2px] transition-transform border border-outline-variant/20">
          <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
            <span className="material-symbols-outlined text-[28px]">celebration</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">
            Eventos y celebraciones
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Capacidad para grupos de hasta 50 personas. Perfecto para cumpleaños, bautizos, comuniones, comidas de amigos o cenas de empresa en Utebo.
          </p>
          <span className="font-label-sm text-label-sm text-tertiary font-bold uppercase tracking-wider block pt-space-xs">
            Menús cerrados personalizados
          </span>
        </div>

      </div>

      {/* Quick Call-out Strip */}
      <div className="mt-space-xl max-w-4xl mx-auto p-space-md rounded-lg bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-space-md text-center sm:text-left border border-outline-variant/30">
        <div>
          <p className="font-title-md text-title-md text-on-surface">¿Planeando un evento especial?</p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Hablamos contigo directamente para confeccionar un menú a la medida de tu grupo.
          </p>
        </div>
        <a
          href="tel:+34624282993"
          className="px-space-md py-space-sm bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider rounded-lg hover:bg-primary transition-colors shrink-0 font-semibold"
        >
          Llamar al 624 28 29 93
        </a>
      </div>

    </section>
  );
}
