'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-md shadow-[0_16px_36px_-8px_rgba(186,78,38,0.06),0_2px_10px_-2px_rgba(34,30,27,0.04)] transition-all">
      <div className="h-20 w-full px-gutter-mobile md:px-gutter lg:px-margin flex items-center justify-between gap-space-md">
        
        {/* Logo destacado sin fondo blanco */}
        <a href="#inicio" className="flex items-center gap-space-md shrink-0 group">
          <img
            alt="Búa Chaval Logo"
            className="h-14 w-14 sm:h-16 sm:w-16 object-contain transition-transform group-hover:scale-105"
            src="/logo.png"
          />
          <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-semibold">
            Búa Chaval
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-space-xs p-space-xs">
          <a
            href="#inicio"
            className="px-space-md py-space-sm font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors rounded-lg"
          >
            Inicio
          </a>
          <a
            href="#nuestra-carta"
            className="px-space-md py-space-sm font-label-md text-label-md uppercase tracking-wider bg-primary-container text-on-primary font-medium rounded-lg shadow-sm transition-colors hover:bg-primary"
          >
            Nuestra Carta
          </a>
          <a
            href="#el-local"
            className="px-space-md py-space-sm font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors rounded-lg"
          >
            El Local
          </a>
          <a
            href="#contacto"
            className="px-space-md py-space-sm font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors rounded-lg"
          >
            Contacto
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-space-md shrink-0">
          <a
            href="tel:+34624282993"
            className="hidden sm:inline-flex items-center justify-center px-space-lg py-space-sm bg-primary-container text-on-primary font-label-md text-label-md tracking-wider uppercase rounded-lg hover:bg-primary transition-all duration-200 shadow-[0_16px_36px_-8px_rgba(186,78,38,0.2)]"
          >
            Reservar Mesa
          </a>
          
          <a
            href="tel:+34624282993"
            title="Llamar al restaurante"
            className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary hover:opacity-90 transition-opacity shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={toggleMenu}
            aria-label="Abrir menú de navegación"
            className="lg:hidden flex items-center justify-center p-space-xs text-on-surface-variant hover:text-on-surface focus:outline-none"
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface/98 border-t border-outline-variant/30 px-gutter-mobile py-space-md shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-2">
            <a
              href="#inicio"
              onClick={closeMenu}
              className="px-space-md py-space-sm font-label-md text-label-md uppercase tracking-wider text-on-surface hover:bg-surface-container rounded-lg"
            >
              Inicio
            </a>
            <a
              href="#nuestra-carta"
              onClick={closeMenu}
              className="px-space-md py-space-sm font-label-md text-label-md uppercase tracking-wider bg-primary-container/10 text-primary font-medium rounded-lg"
            >
              Nuestra Carta
            </a>
            <a
              href="#el-local"
              onClick={closeMenu}
              className="px-space-md py-space-sm font-label-md text-label-md uppercase tracking-wider text-on-surface hover:bg-surface-container rounded-lg"
            >
              El Local
            </a>
            <a
              href="#contacto"
              onClick={closeMenu}
              className="px-space-md py-space-sm font-label-md text-label-md uppercase tracking-wider text-on-surface hover:bg-surface-container rounded-lg"
            >
              Contacto
            </a>
            <a
              href="tel:+34624282993"
              onClick={closeMenu}
              className="mt-2 text-center px-space-lg py-space-sm bg-primary-container text-on-primary font-label-md text-label-md tracking-wider uppercase rounded-lg hover:bg-primary transition-all font-semibold"
            >
              Reservar Mesa: +34 624 28 29 93
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
