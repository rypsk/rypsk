export type Lang = 'es' | 'en';

export interface Translation {
  nav: {
    home: string;
    stack: string;
    projects: string;
    contact: string;
  };
  hero: {
    badge: string;
    titlePre: string;
    titleHighlight: string;
    titlePost: string;
    description: string;
    ctaProjects: string;
    ctaContact: string;
  };
  stack: {
    titlePre: string;
    titleHighlight: string;
    subtitle: string;
  };
  projects: {
    titlePre: string;
    titleHighlight: string;
    subtitle: string;
    caseStudy: string;
    items: {
      title: string;
      description: string;
      badges: [string, string];
      url: string;
    }[];
  };
  contact: {
    titlePre: string;
    titleHighlight: string;
    description: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    divider: string;
  };
  footer: {
    about: string;
    privacy: string;
    legal: string;
    copyright: string;
  };
  theme: {
    activateLight: string;
    activateDark: string;
  };
  language: {
    switchLabel: string;
  };
}

export const TRANSLATIONS: Record<Lang, Translation> = {
  es: {
    nav: {
      home: 'Inicio',
      stack: 'Stack',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Ingeniería de Software Empresarial',
      titlePre: 'Construyendo',
      titleHighlight: 'soluciones',
      titlePost: 'escalables.',
      description:
        'Diseñamos y desarrollamos software empresarial robusto, escalable y seguro. Ayudamos a empresas de todos los tamaños a transformar sus procesos con soluciones a medida en Java y Angular.',
      ctaProjects: 'Ver Proyectos',
      ctaContact: 'Hablemos de tu proyecto',
    },
    stack: {
      titlePre: 'Nuestro',
      titleHighlight: 'Stack Tecnológico',
      subtitle:
        'Tecnologías probadas en producción, elegidas por su rendimiento, escalabilidad y mantenibilidad a largo plazo.',
    },
    projects: {
      titlePre: 'Proyectos',
      titleHighlight: 'Destacados',
      subtitle: 'Una muestra de las soluciones que hemos desarrollado e implementado con éxito para nuestros clientes.',
      caseStudy: 'Ver caso de éxito',
      items: [
        {
          title: 'PrecioLuz',
          description:
            'Aplicación web que muestra en tiempo real el precio de la electricidad en España, hora a hora, para ayudar a particulares y empresas a optimizar su consumo energético.',
          badges: ['Angular', 'API REE'],
          url: 'https://precioluz.rypsk.com',
        },
        {
          title: 'Population',
          description:
            'Representación visual interactiva del crecimiento de la población mundial en tiempo real, mostrando nacimientos y muertes para concienciar sobre la demografía global.',
          badges: ['React', 'Tailwind'],
          url: 'https://population.rypsk.com',
        },
      ],
    },
    contact: {
      titlePre: 'Hablemos de tu',
      titleHighlight: 'proyecto',
      description:
        'Nuestro equipo está listo para analizar tus necesidades y proponerte la solución tecnológica adecuada para tu negocio.',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'Tu email',
      messagePlaceholder: 'Tu mensaje',
      send: 'Enviar mensaje',
      divider: 'o contacta directamente con nosotros',
    },
    footer: {
      about: 'Sobre nosotros',
      privacy: 'Política de privacidad',
      legal: 'Aviso legal',
      copyright: 'Copyright © 2026 rypsk.com — Todos los derechos reservados.',
    },
    theme: {
      activateLight: 'Activar modo claro',
      activateDark: 'Activar modo oscuro',
    },
    language: {
      switchLabel: 'Cambiar idioma',
    },
  },
  en: {
    nav: {
      home: 'Home',
      stack: 'Stack',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      badge: 'Enterprise Software Engineering',
      titlePre: 'Building',
      titleHighlight: 'scalable',
      titlePost: 'solutions.',
      description:
        'We design and build robust, scalable and secure enterprise software. We help companies of all sizes transform their processes with tailored Java and Angular solutions.',
      ctaProjects: 'View Projects',
      ctaContact: "Let's talk about your project",
    },
    stack: {
      titlePre: 'Our',
      titleHighlight: 'Tech Stack',
      subtitle:
        'Production-proven technologies, chosen for their performance, scalability and long-term maintainability.',
    },
    projects: {
      titlePre: 'Featured',
      titleHighlight: 'Projects',
      subtitle: 'A showcase of the solutions we have successfully developed and deployed for our clients.',
      caseStudy: 'View case study',
      items: [
        {
          title: 'PrecioLuz',
          description:
            'Web application that shows the real-time price of electricity in Spain, hour by hour, helping individuals and businesses optimize their energy consumption.',
          badges: ['Angular', 'REE API'],
          url: 'https://precioluz.rypsk.com',
        },
        {
          title: 'Population',
          description:
            'Interactive visual representation of world population growth in real-time, showing births and deaths to raise awareness about global demographics.',
          badges: ['React', 'Tailwind'],
          url: 'https://population.rypsk.com',
        },
      ],
    },
    contact: {
      titlePre: "Let's talk about your",
      titleHighlight: 'project',
      description:
        'Our team is ready to analyze your needs and propose the right technology solution for your business.',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Your message',
      send: 'Send message',
      divider: 'or contact us directly via',
    },
    footer: {
      about: 'About us',
      privacy: 'Privacy policy',
      legal: 'Legal notice',
      copyright: 'Copyright © 2026 rypsk.com — All rights reserved.',
    },
    theme: {
      activateLight: 'Switch to light mode',
      activateDark: 'Switch to dark mode',
    },
    language: {
      switchLabel: 'Switch language',
    },
  },
};
