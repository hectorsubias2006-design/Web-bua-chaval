'use client';

import React, { useState } from 'react';
import { RESTAURANT_MENU, BANDEJAS_ESPECIALES, BAR_MENU } from '@/data/menuData';

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<'restaurante' | 'picoteo'>('restaurante');

  return (
    <section className="w-full px-gutter-mobile md:px-gutter lg:px-margin py-space-xl lg:py-32 bg-surface scroll-mt-20" id="nuestra-carta">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Editorial */}
        <div className="text-center space-y-space-xs mb-space-lg">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-primary/10 text-primary mb-2">
            <span className="material-symbols-outlined text-[16px]">menu_book</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">
              Gastronomía a Fuego Lento
            </span>
          </div>
          
          <h2 className="font-headline-lg lg:font-display-lg text-headline-lg lg:text-display-lg text-on-surface tracking-tight">
            Nuestra Carta
          </h2>
          
          <div className="w-16 h-[2px] bg-primary mx-auto my-3" />
          
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
            Selección cuidada de cocina tradicional y caribeña. Elaboración diaria, cortes selectos y producto de proximidad.
          </p>
        </div>

        {/* Conmutador de Pestañas / Tabs */}
        <div className="flex justify-center mb-space-xl">
          <div className="inline-flex p-1.5 rounded-xl bg-surface-container-high border border-outline-variant/30 shadow-inner">
            <button
              onClick={() => setActiveTab('restaurante')}
              className={`px-space-md sm:px-space-lg py-2.5 rounded-lg font-label-md text-label-md uppercase tracking-wider transition-all duration-200 flex items-center gap-2 font-semibold ${
                activeTab === 'restaurante'
                  ? 'bg-primary-container text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">dinner_dining</span>
              <span>Carta de Restaurante</span>
              <span className="text-[11px] opacity-80 lowercase hidden sm:inline">(Comedor Principal)</span>
            </button>

            <button
              onClick={() => setActiveTab('picoteo')}
              className={`px-space-md sm:px-space-lg py-2.5 rounded-lg font-label-md text-label-md uppercase tracking-wider transition-all duration-200 flex items-center gap-2 font-semibold ${
                activeTab === 'picoteo'
                  ? 'bg-primary-container text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">local_bar</span>
              <span>Carta de Picoteo</span>
              <span className="text-[11px] opacity-80 lowercase hidden sm:inline">(Zona de Bar)</span>
            </button>
          </div>
        </div>

        {/* VISTA 1: CARTA DE RESTAURANTE (COMEDOR PRINCIPAL) */}
        {activeTab === 'restaurante' && (
          <div className="transition-opacity duration-300 animate-fadeIn">
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 p-space-md sm:p-space-lg lg:p-space-xl shadow-sm">
              
              <div className="text-center pb-space-lg border-b border-outline-variant/30 mb-space-lg">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block">
                  {RESTAURANT_MENU.badge}
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface mt-1">
                  {RESTAURANT_MENU.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {RESTAURANT_MENU.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-space-xl gap-y-space-lg">
                
                {/* Categorías Principales */}
                {RESTAURANT_MENU.categories.map((cat) => {
                  const isFullWidth = cat.title === 'DE LA BRASA A LA MESA';
                  return (
                    <div
                      key={cat.title}
                      className={`space-y-space-md ${isFullWidth ? 'md:col-span-2 pt-space-xs' : ''}`}
                    >
                      <div className="border-b border-primary/30 pb-2">
                        <h4 className="font-headline-sm text-headline-sm tracking-tight uppercase text-[17px] font-semibold text-primary">
                          {cat.title}
                        </h4>
                      </div>

                      {isFullWidth ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-space-xl gap-y-3">
                          <ul className="space-y-3 font-body-md text-body-md">
                            {cat.items.slice(0, 5).map((item) => (
                              <li key={item.name} className="flex items-baseline justify-between gap-2">
                                <span className="font-medium text-on-surface uppercase text-[13px] tracking-wide">
                                  {item.name}
                                </span>
                                <span className="flex-grow border-b border-dotted border-outline-variant/70 min-w-[20px] mb-1" />
                                <span className="font-semibold text-primary shrink-0 tabular-nums">
                                  {item.price}
                                </span>
                              </li>
                            ))}
                          </ul>
                          <ul className="space-y-3 font-body-md text-body-md">
                            {cat.items.slice(5).map((item) => (
                              <li key={item.name} className="flex items-baseline justify-between gap-2">
                                <span className="font-medium text-on-surface uppercase text-[13px] tracking-wide">
                                  {item.name}
                                </span>
                                <span className="flex-grow border-b border-dotted border-outline-variant/70 min-w-[20px] mb-1" />
                                <span className="font-semibold text-primary shrink-0 tabular-nums">
                                  {item.price}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <ul className="space-y-3 font-body-md text-body-md">
                          {cat.items.map((item) => (
                            <li key={item.name} className="flex items-baseline justify-between gap-2">
                              <span className="font-medium text-on-surface uppercase text-[13px] tracking-wide">
                                {item.name}
                              </span>
                              <span className="flex-grow border-b border-dotted border-outline-variant/70 min-w-[20px] mb-1" />
                              <span className="font-semibold text-primary shrink-0 tabular-nums">
                                {item.price}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}

                {/* BANDEJAS BÚA-CHAVAL */}
                <div className="md:col-span-2 pt-space-md">
                  <div className="p-space-lg rounded-xl bg-surface-container border-2 border-primary/20 space-y-space-md">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-outline-variant/40 pb-2">
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                          {BANDEJAS_ESPECIALES.badge}
                        </span>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-tight font-semibold">
                          {BANDEJAS_ESPECIALES.title}
                        </h4>
                      </div>
                      <span className="text-on-surface-variant font-body-sm text-body-sm italic">
                        {BANDEJAS_ESPECIALES.subtitle}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-space-xl gap-y-3 font-body-md text-body-md">
                      {BANDEJAS_ESPECIALES.items.map((item, idx) => (
                        <div
                          key={item.name}
                          className={`flex items-baseline justify-between gap-2 ${
                            idx === BANDEJAS_ESPECIALES.items.length - 1
                              ? 'md:col-span-2 sm:w-1/2 pr-0 md:pr-space-md'
                              : ''
                          }`}
                        >
                          <span className="font-medium text-on-surface uppercase text-[13px] tracking-wide">
                            {item.name}
                          </span>
                          <span className="flex-grow border-b border-dotted border-outline-variant/70 min-w-[20px] mb-1" />
                          <span className="font-bold text-primary shrink-0 tabular-nums">
                            {item.price}
                          </span>
                        </div>
                      ))}

                      {/* Volcán Cubano */}
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 md:col-span-2 pt-2 border-t border-outline-variant/40">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                          <span className="font-bold uppercase text-[13px] tracking-wide text-primary">
                            {BANDEJAS_ESPECIALES.volcanCubano.name}
                          </span>
                          <span className="text-on-surface-variant font-body-sm text-[12px]">
                            {BANDEJAS_ESPECIALES.volcanCubano.description}
                          </span>
                        </div>
                        <span className="flex-grow border-b border-dotted border-outline-variant/70 min-w-[20px] mb-1 hidden sm:block" />
                        <span className="font-bold text-primary shrink-0 tabular-nums text-[15px]">
                          {BANDEJAS_ESPECIALES.volcanCubano.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* VISTA 2: CARTA DE PICOTEO (ZONA DE BAR) */}
        {activeTab === 'picoteo' && (
          <div className="transition-opacity duration-300 animate-fadeIn">
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 p-space-md sm:p-space-lg lg:p-space-xl shadow-sm">
              
              <div className="text-center pb-space-lg border-b border-outline-variant/30 mb-space-lg">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block">
                  {BAR_MENU.badge}
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface mt-1">
                  {BAR_MENU.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {BAR_MENU.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-space-xl gap-y-space-lg">
                
                {/* PICOTEO: ABRIENDO BOCAS */}
                <div className="space-y-space-md">
                  <div className="border-b border-secondary/40 pb-2 flex items-center justify-between">
                    <h4 className="font-headline-sm text-headline-sm text-on-surface tracking-tight uppercase text-[17px] font-semibold text-secondary">
                      {BAR_MENU.categories[0].title}
                    </h4>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                      {BAR_MENU.categories[0].subtitle}
                    </span>
                  </div>
                  <ul className="space-y-3 font-body-md text-body-md">
                    {BAR_MENU.categories[0].items.map((item) => (
                      <li key={item.name} className="flex items-baseline justify-between gap-2">
                        <span className="font-medium text-on-surface uppercase text-[13px] tracking-wide">
                          {item.name}
                        </span>
                        <span className="flex-grow border-b border-dotted border-outline-variant/70 min-w-[20px] mb-1" />
                        <span className="font-semibold text-primary shrink-0 tabular-nums">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* PICOTEO: BOCADILLOS */}
                <div className="space-y-space-md">
                  <div className="border-b border-secondary/40 pb-2 flex items-center justify-between">
                    <h4 className="font-headline-sm text-headline-sm text-on-surface tracking-tight uppercase text-[17px] font-semibold text-secondary">
                      {BAR_MENU.categories[1].title}
                    </h4>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                      {BAR_MENU.categories[1].subtitle}
                    </span>
                  </div>
                  <ul className="space-y-4 font-body-md text-body-md">
                    {BAR_MENU.categories[1].items.map((item) => (
                      <li key={item.name} className="space-y-1">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="font-bold text-on-surface uppercase text-[13px] tracking-wide">
                            {item.name}
                          </span>
                          <span className="flex-grow border-b border-dotted border-outline-variant/70 min-w-[20px] mb-1" />
                          <span className="font-semibold text-primary shrink-0 tabular-nums">
                            {item.price}
                          </span>
                        </div>
                        {item.description && (
                          <p className="font-body-sm text-body-sm text-on-surface-variant uppercase tracking-wider text-[11px]">
                            {item.description}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Pie de la carta con aviso de alérgenos y reserva */}
        <div className="mt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md text-on-surface-variant font-body-sm text-body-sm border-t border-outline-variant/40 pt-space-md">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-secondary">info</span>
            <span>
              Disponemos de carta de alérgenos completa. Consulta con nuestro personal de sala cualquier intolerancia.
            </span>
          </div>
          <a
            href="tel:+34624282993"
            className="text-primary hover:underline font-semibold shrink-0"
          >
            ¿Mesa para grupos? Reserva al 624 28 29 93
          </a>
        </div>

      </div>
    </section>
  );
}
