import { IMG_VILLA, IMG_LIVING, IMG_FACADE } from './images.js';

export const categories = ['Viviendas', 'Reformas', 'Interiorismo', 'Comercial'];

export const projects = [
  {
    slug: 'casa-mar-azul',
    name: 'Casa Mar Azul',
    location: 'Murcia',
    category: 'Viviendas',
    featured: true,
    image: IMG_LIVING,
    gallery: [IMG_LIVING, IMG_VILLA, IMG_FACADE],
    excerpt: 'Vivienda unifamiliar frente al mar, diseñada en torno a la luz natural y las vistas.',
    story:
      'Casa Mar Azul nace de la voluntad de difuminar el límite entre el interior y el paisaje mediterráneo que la rodea. Grandes superficies acristaladas, materiales nobles en tonos cálidos y una planta abierta consiguen que la luz se convierta en el verdadero protagonista del proyecto a lo largo de todo el día.\n\nEl programa se organiza en torno a un eje central que conecta el acceso, la zona social y la piscina infinita, generando recorridos fluidos y una sensación constante de amplitud.',
    services: ['Arquitectura residencial', 'Interiorismo', 'Dirección de obra'],
  },
  {
    slug: 'villa-albaida',
    name: 'Villa Albaida',
    location: 'Murcia',
    category: 'Viviendas',
    featured: false,
    image: IMG_VILLA,
    gallery: [IMG_VILLA, IMG_FACADE, IMG_LIVING],
    excerpt: 'Villa de nueva construcción que combina volúmenes puros con jardines mediterráneos.',
    story:
      'Villa Albaida explora la relación entre arquitectura y paisajismo a través de volúmenes limpios que se asientan con calma sobre el terreno. El proyecto prioriza la orientación solar y la ventilación cruzada, reduciendo la necesidad de climatización artificial sin renunciar al confort.\n\nLos interiores se resuelven con una paleta de materiales cálida y atemporal, pensada para envejecer con elegancia.',
    services: ['Arquitectura residencial', 'Viviendas de lujo'],
  },
  {
    slug: 'atico-castellana',
    name: 'Ático Castellana',
    location: 'Madrid',
    category: 'Viviendas',
    featured: false,
    image: IMG_FACADE,
    gallery: [IMG_FACADE, IMG_LIVING, IMG_VILLA],
    excerpt: 'Reforma integral de un ático en el centro de Madrid con terraza panorámica.',
    story:
      'Este ático en el corazón de Madrid se transformó por completo para liberar espacio, luz y vistas. Se eliminaron divisiones innecesarias para crear una planta diáfana que culmina en una terraza concebida como una estancia más de la vivienda.\n\nEl resultado es un espacio sobrio y luminoso, donde cada material y cada pieza de mobiliario ha sido seleccionada con criterio.',
    services: ['Viviendas de lujo', 'Interiorismo'],
  },
  {
    slug: 'loft-born',
    name: 'Loft Born',
    location: 'Barcelona',
    category: 'Reformas',
    featured: true,
    image: IMG_FACADE,
    gallery: [IMG_FACADE, IMG_VILLA, IMG_LIVING],
    excerpt: 'Reforma integral de una antigua nave industrial convertida en vivienda loft.',
    story:
      'Loft Born conserva el carácter industrial original del edificio —ladrillo visto, alturas generosas, estructura metálica— y lo combina con una intervención contemporánea que aporta calidez y funcionalidad doméstica.\n\nLa nueva distribución resuelve las necesidades de una vivienda actual sin renunciar a la identidad y la memoria del espacio original.',
    services: ['Reformas integrales', 'Dirección de obra'],
  },
  {
    slug: 'reforma-casa-patio',
    name: 'Reforma Casa Patio',
    location: 'Murcia',
    category: 'Reformas',
    featured: false,
    image: IMG_LIVING,
    gallery: [IMG_LIVING, IMG_FACADE, IMG_VILLA],
    excerpt: 'Recuperación de una vivienda tradicional con patio central en el casco histórico.',
    story:
      'La reforma de esta vivienda con patio central parte del respeto por su arquitectura tradicional. Se recuperan elementos originales y se introducen soluciones contemporáneas de eficiencia energética e instalaciones, sin alterar el carácter del inmueble.\n\nEl patio se convierte en el corazón de la casa, regulando la luz y la temperatura de todas las estancias que lo rodean.',
    services: ['Reformas integrales', 'Arquitectura residencial'],
  },
  {
    slug: 'suite-mediterranea',
    name: 'Suite Mediterránea',
    location: 'Murcia',
    category: 'Interiorismo',
    featured: true,
    image: IMG_LIVING,
    gallery: [IMG_LIVING, IMG_VILLA, IMG_FACADE],
    excerpt: 'Proyecto de interiorismo integral para una vivienda de descanso frente al mar.',
    story:
      'Suite Mediterránea es un ejercicio de interiorismo pensado para el descanso: texturas naturales, una paleta de color serena y mobiliario a medida que dialoga con la luz mediterránea.\n\nCada estancia se concibió como una experiencia sensorial propia, coherente con el resto de la vivienda pero con personalidad individual.',
    services: ['Interiorismo'],
  },
  {
    slug: 'apartamento-retiro',
    name: 'Apartamento Retiro',
    location: 'Madrid',
    category: 'Interiorismo',
    featured: false,
    image: IMG_VILLA,
    gallery: [IMG_VILLA, IMG_LIVING, IMG_FACADE],
    excerpt: 'Interiorismo completo de un apartamento clásico junto al Parque del Retiro.',
    story:
      'En este apartamento de Madrid el reto consistía en actualizar un interior clásico sin perder su elegancia original. El resultado combina molduras y carpinterías recuperadas con mobiliario contemporáneo, iluminación cálida y piezas de autor.',
    services: ['Interiorismo'],
  },
  {
    slug: 'oficinas-aurora',
    name: 'Oficinas Aurora',
    location: 'Madrid',
    category: 'Comercial',
    featured: true,
    image: IMG_FACADE,
    gallery: [IMG_FACADE, IMG_LIVING, IMG_VILLA],
    excerpt: 'Diseño de espacio de oficinas boutique para una firma de servicios profesionales.',
    story:
      'Oficinas Aurora traslada los principios de calidez y atención al detalle del diseño residencial a un entorno de trabajo. El espacio combina zonas de concentración, reunión y descanso bajo una misma identidad visual coherente con la marca del cliente.',
    services: ['Espacios comerciales', 'Dirección de obra'],
  },
  {
    slug: 'boutique-lumiere',
    name: 'Boutique Lumière',
    location: 'Barcelona',
    category: 'Comercial',
    featured: false,
    image: IMG_VILLA,
    gallery: [IMG_VILLA, IMG_FACADE, IMG_LIVING],
    excerpt: 'Interiorismo comercial para una tienda concepto en el centro de Barcelona.',
    story:
      'Boutique Lumière buscaba un espacio comercial que funcionara como experiencia de marca. La iluminación, los materiales y el recorrido se diseñaron para guiar al visitante y poner en valor cada producto expuesto.',
    services: ['Espacios comerciales', 'Interiorismo'],
  },
];

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
