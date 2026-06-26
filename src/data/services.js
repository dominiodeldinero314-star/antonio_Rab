import { IMG_VILLA, IMG_LIVING, IMG_FACADE } from './images.js';

export const services = [
  {
    slug: 'arquitectura-residencial',
    name: 'Arquitectura Residencial',
    icon: 'architecture',
    image: IMG_VILLA,
    excerpt: 'Proyectos de vivienda desde cero, diseñados a medida del entorno y de quienes los habitan.',
    explanation:
      'Diseñamos viviendas desde el primer trazo, partiendo del terreno, la orientación y el modo de vida de cada cliente. Cada proyecto se desarrolla de forma íntegra: estudio previo, anteproyecto, proyecto técnico y dirección de obra, garantizando coherencia entre la idea inicial y el resultado construido.',
    benefits: [
      'Diseño a medida del solar, la orientación y el clima',
      'Acompañamiento completo desde el primer boceto hasta la entrega de llaves',
      'Equilibrio entre estética, funcionalidad y eficiencia energética',
    ],
  },
  {
    slug: 'viviendas-de-lujo',
    name: 'Viviendas de Lujo',
    icon: 'diamond',
    image: IMG_LIVING,
    excerpt: 'Exclusividad técnica y estética para clientes que buscan lo excepcional en cada detalle.',
    explanation:
      'Trabajamos con materiales nobles, soluciones constructivas singulares y un nivel de detalle propio de la alta arquitectura residencial. Cada vivienda de lujo se concibe como una pieza única, donde la exclusividad se mide en la calidad de la ejecución y no solo en la superficie construida.',
    benefits: [
      'Selección de materiales y acabados de gama alta',
      'Soluciones constructivas y técnicas singulares',
      'Discreción y atención personalizada durante todo el proceso',
    ],
  },
  {
    slug: 'reformas-integrales',
    name: 'Reformas Integrales',
    icon: 'home_repair_service',
    image: IMG_FACADE,
    excerpt: 'Transformamos viviendas y locales existentes sin perder su carácter original.',
    explanation:
      'Una reforma integral bien planteada puede transformar por completo la experiencia de un espacio sin necesidad de partir de cero. Analizamos el estado actual del inmueble, su potencial y sus condicionantes, para proponer una intervención que combine respeto por lo existente y una visión contemporánea.',
    benefits: [
      'Estudio técnico previo del estado del inmueble',
      'Gestión de licencias y normativa aplicable',
      'Coordinación completa de oficios durante la ejecución',
    ],
  },
  {
    slug: 'interiorismo',
    name: 'Interiorismo',
    icon: 'chair',
    image: IMG_LIVING,
    excerpt: 'La culminación del espacio a través del mobiliario, la iluminación y la textura.',
    explanation:
      'El interiorismo es la capa final que convierte un espacio bien construido en una experiencia habitable y emocional. Cuidamos cada decisión de mobiliario, iluminación, textiles y piezas clave para lograr ambientes coherentes, equilibrados y con una identidad propia.',
    benefits: [
      'Propuesta de decoración completa por estancia',
      'Bocetos y documentación clara para una correcta ejecución',
      'Selección de mobiliario, iluminación y textiles a medida',
    ],
  },
  {
    slug: 'espacios-comerciales',
    name: 'Espacios Comerciales',
    icon: 'storefront',
    image: IMG_FACADE,
    excerpt: 'Diseño de locales, oficinas y espacios de marca pensados para la experiencia del usuario.',
    explanation:
      'Diseñamos espacios comerciales y de trabajo que comunican la identidad de una marca a través de la arquitectura y el interiorismo. Cada proyecto comercial se aborda entendiendo el recorrido del usuario, la funcionalidad operativa y el impacto visual del espacio.',
    benefits: [
      'Diseño alineado con la identidad de marca',
      'Optimización de flujos y funcionalidad del espacio',
      'Proyectos llave en mano, de la idea a la apertura',
    ],
  },
  {
    slug: 'direccion-de-obra',
    name: 'Dirección de Obra',
    icon: 'engineering',
    image: IMG_VILLA,
    excerpt: 'Supervisión técnica exhaustiva para que la obra construida sea fiel al proyecto diseñado.',
    explanation:
      'La dirección de obra garantiza que lo proyectado se materializa con la máxima fidelidad y calidad. Supervisamos cada fase de la ejecución, coordinamos a los distintos agentes y oficios, y resolvemos sobre el terreno cualquier imprevisto, cuidando cada milímetro construido.',
    benefits: [
      'Supervisión técnica continua durante toda la obra',
      'Coordinación de contratistas, industriales y oficios',
      'Control de calidad, plazos y presupuesto',
    ],
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}
