export interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

export interface MenuCategory {
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

export interface MenuSectionData {
  id: 'restaurante' | 'picoteo';
  badge: string;
  title: string;
  subtitle: string;
  categories: MenuCategory[];
}

export const RESTAURANT_MENU: MenuSectionData = {
  id: 'restaurante',
  badge: 'Servicio en Comedor',
  title: 'Carta de Restaurante',
  subtitle: 'Precios con IVA incluido · Pan y servicio de mesa incluidos',
  categories: [
    {
      title: 'ABRIENDO BOCAS',
      items: [
        { name: 'TEQUEÑOS CON SALSA ALI OLI', price: '8.25€' },
        { name: 'CROQUETAS CON PICO DE GALLO Y SALSA AHUMADA', price: '2.80€' },
        { name: 'FINGERS DE POLLO CASEROS REBOZADOS CON SÉSAMO BLANCO Y NEGRO', price: '8.80€' },
        { name: 'PATATAS 3 SALSAS', price: '7.50€' },
      ],
    },
    {
      title: 'DE LA HUERTA',
      items: [
        { name: 'ENSALADA DE TOMATE ROSA DE BARBASTRO CON CEBOLLA DE FUENTES, VENTRESCA DE ATUN Y PIPARRAS', price: '15.50€' },
        { name: 'ENSALADA MARINERA CON MEZCLUM, TOMATE, SALMON, BACALAO, BOQUERONES Y GAMBAS', price: '16.00€' },
        { name: 'GUACAMOLE CASERO CON NACHOS CALIENTES', price: '12.80€' },
      ],
    },
    {
      title: 'ENCENDIENDO LA BRASA',
      items: [
        { name: 'PROVOLONE A LA PARRILLA CON MIEL TRUFADA Y OREGANO', price: '13.50€' },
        { name: 'PARRILLA ARAGONESA (LONGANIZA, CHORIZO, MORCILLA, PANCETA, COSTILLAS DE CORDERO Y LECHO DE MEZCLUM)', price: '22.50€' },
      ],
    },
    {
      title: 'ME VOY DE HUEVOS',
      items: [
        { name: 'HUEVOS ROTOS CON TORREZNO', price: '14.50€' },
        { name: 'HUEVOS ROTOS CON LONGANIZA Y CEBOLLA CARAMELIZADA', price: '14.50€' },
        { name: 'HUEVOS ROTOS CON BOLETUS Y SALSA TRUFADA', price: '14.50€' },
        { name: 'HUEVOS ROTOS MARINEROS', price: '16.50€' },
      ],
    },
    {
      title: 'DE LA BRASA A LA MESA',
      items: [
        { name: 'SOLOMILLO DE CERDO EN SALSA OPORTO', price: '16.50€' },
        { name: 'ENTRECOT DE TERNERA DE 300g CON PATATAS', price: '19.50€' },
        { name: 'SECRETO IBERICO CON PATATAS A LO POBRE', price: '14.50€' },
        { name: 'CACHOPO DE TERNERA CON JAMON, QUESO Y PIMIENTOS ASADOS', price: '25.00€' },
        { name: 'PULPO A LA BRASA CON PARMENTIER DE PATATAS', price: '22.50€' },
        { name: 'CHIPIRONES A LA PLANCHA CON SALSA VERDE Y LECHO DE PATATAS', price: '18.00€' },
        { name: 'COSTILLA DE CORDERO CON PIMIENTOS ASADOS', price: '25.00€' },
        { name: 'PESCADO A LA BRASA SEGUN DISPONIBILIDAD', price: '18.50€' },
        { name: 'CHULETON DE LA FINCA 500g CON PATATAS', price: '25.50€' },
      ],
    },
  ],
};

export const BANDEJAS_ESPECIALES = {
  title: 'BANDEJAS BÚA-CHAVAL',
  subtitle: 'Grandes formatos pensados para mesas festivas',
  badge: 'Especialidad para compartir',
  items: [
    { name: 'DE CHIPIRON Y PULPO', price: '55.00€' },
    { name: 'DE CARNE ASADA A BAJA TEMPERATURA', price: '50.00€' },
    { name: 'DE CHULETON DE LA FINCA 1kg', price: '55.00€' },
    { name: 'DE CACHOPO 1kg', price: '50.00€' },
    { name: 'DE COSTILLAS DE CORDERO 1/2kg', price: '50.00€' },
  ],
  volcanCubano: {
    name: 'VOLCÁN CUBANO',
    description: '(Para 6 personas: carne asada, ropa vieja, yuca, mariquitas y tostones de plátano, arroz congris)',
    price: '150.00€',
  },
};

export const BAR_MENU: MenuSectionData = {
  id: 'picoteo',
  badge: 'Espacio Barra & Tapeo',
  title: 'Carta de Picoteo - Zona de Bar',
  subtitle: 'Para disfrutar de pie o en mesas altas · Servicio ágil y sabores directos',
  categories: [
    {
      title: 'ABRIENDO BOCAS',
      subtitle: 'Raciones y tapas',
      items: [
        { name: 'TEQUEÑOS CON SALSA ALI OLI', price: '8.25€' },
        { name: 'CROQUETAS CON PICO DE GALLO Y SALSA AHUMADA', price: '2.80€' },
        { name: 'FINGERS DE POLLO CASEROS REBOZADOS CON SÉSAMO BLANCO Y NEGRO', price: '8.80€' },
        { name: 'PATATAS 3 SALSAS', price: '7.50€' },
        { name: 'GUACAMOLE CASERO CON NACHOS CALIENTES', price: '12.80€' },
      ],
    },
    {
      title: 'BOCADILLOS',
      subtitle: 'Pan crujiente recién horneado',
      items: [
        {
          name: 'BOCADILLO CUBANO',
          price: '7.50€',
          description: 'MOSTAZA PEPINILLO, JAMON YORK, CARNE ASADA Y MAYONESA AHUMADA',
        },
        {
          name: 'BOCADILLO DE ROPA VIEJA',
          price: '7.50€',
          description: 'LONCHAS DE CHEDDAR, ROPA VIEJA, SALSA CHEDDAR, MERMELADA DE BACON, CRUJIENTE DE NACHOS',
        },
        {
          name: 'BOCADILLO DE CARNE ASADA',
          price: '7.50€',
          description: 'LONCHAS DE GOUDA, CARNE ASADA, PICO GALLO, CEBOLLA FRITA, SALSA AHUMADA',
        },
      ],
    },
  ],
};
