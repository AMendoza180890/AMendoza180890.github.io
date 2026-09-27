export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.resume': 'Resume',
    'nav.projects': 'Projects',
    'nav.portfolio': 'Portfolio',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    'nav.main': 'Main navigation',
    'theme.toLight': 'Switch to light mode',
    'theme.toDark': 'Switch to dark mode',
    'lang.switch': 'Language',
    'a11y.skip': 'Skip to content',
    'hero.imA': "I'm a",
    'hero.typed': 'Developer, Freelancer',
    'hero.eyebrow': 'Full-Stack Software Developer',
    'hero.ctaProjects': 'View projects',
    'hero.ctaContact': 'Get in touch',
    'skills.title': 'Technical Skills',
    'skills.eyebrow': 'Stack',
    'about.title': 'About Me',
    'about.eyebrow': 'About',
    'about.body':
      'Full-stack developer with 10+ years of experience, including 8 years as Head of Technology at a nonprofit and 5 years with React and TypeScript. Build and maintain production systems for international clients, including an offline-first React Native app for a water utility and a clinic system with column-level encryption and tamper-evident audit logs. Native Spanish speaker working in English, with full overlap with US Central Time.',
    'footer.contact': 'Contact',
    'footer.copyright': 'Portfolio',
    'footer.headline': "Let's build something together",
    'meta.description':
      'Allan Mendoza — full-stack developer with 10+ years of experience building web and mobile apps with React, TypeScript, Node.js, PostgreSQL, and cloud platforms.',
    'meta.resumeDescription':
      'Resume of Allan Mendoza, full-stack developer: education, certifications, professional experience, and technical stack in frontend, backend, and cloud.',
    'meta.projectsDescription':
      'Selected projects by Allan Mendoza: AquaRed, TERAFIS, multi-tenant surveys, clinic websites, and systems for nonprofits built with React, Next.js, PHP, and cloud tools.',
    'meta.jobTitle': 'Full-Stack Software Developer',
    'resume.pageTitle': 'Resume',
    'resume.eyebrow': 'Career',
    'resume.summary': 'Summary',
    'resume.summaryBody':
      'Full-stack developer with 10+ years of experience, including 8 years as Head of Technology at a nonprofit and 5 years with React and TypeScript. Build and maintain production systems for international clients, including an offline-first React Native app for a water utility and a clinic system with column-level encryption and tamper-evident audit logs. Native Spanish speaker working in English, with full overlap with US Central Time.',
    'resume.education': 'Education & Certifications',
    'resume.degree': 'B.S. in Computer Engineering (Ingeniería en Computación)',
    'resume.university': 'Universidad de Managua',
    'resume.certifications':
      'HackerRank SQL (Basic) and SQL (Intermediate) · Foundational C# with Microsoft (freeCodeCamp)',
    'resume.languages': 'Languages',
    'resume.languagesBody': 'Spanish (native), English (upper-intermediate, B2)',
    'resume.experience': 'Professional Experience',
    'resume.volunteer': 'Volunteer Experience',
    'resume.volunteerRole': 'Volunteer Web Developer',
    'resume.volunteerBody':
      'Remote collaboration with organizations in Cambodia and Malaysia',
    'resume.downloadTitle': 'Download Resume',
    'resume.downloadText': 'Click the button below to download my resume in PDF format.',
    'resume.downloadBtn': 'Download Resume',
    'projects.pageTitle': 'Projects',
    'projects.eyebrow': 'Selected work',
    'projects.heading': 'About Projects',
    'projects.intro':
      'A selection of production systems and websites for utilities, clinics, consultancies, and nonprofits.',
    'projects.visit': 'Visit site',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.resume': 'Currículum',
    'nav.projects': 'Proyectos',
    'nav.portfolio': 'Portafolio',
    'nav.openMenu': 'Abrir menú',
    'nav.closeMenu': 'Cerrar menú',
    'nav.main': 'Navegación principal',
    'theme.toLight': 'Cambiar a modo claro',
    'theme.toDark': 'Cambiar a modo oscuro',
    'lang.switch': 'Idioma',
    'a11y.skip': 'Ir al contenido',
    'hero.imA': 'Soy',
    'hero.typed': 'Desarrollador, Freelancer',
    'hero.eyebrow': 'Desarrollador Full-Stack',
    'hero.ctaProjects': 'Ver proyectos',
    'hero.ctaContact': 'Contáctame',
    'skills.title': 'Habilidades Técnicas',
    'skills.eyebrow': 'Stack',
    'about.title': 'Sobre Mí',
    'about.eyebrow': 'Perfil',
    'about.body':
      'Ingeniero en Computación y desarrollador full-stack con más de 10 años de experiencia en desarrollo web y móvil, bases de datos y liderazgo de equipos, incluidos 8 años como Jefe de Tecnología. Desarrollo y mantengo sistemas en producción para clientes nacionales e internacionales con React, TypeScript, Node.js y PostgreSQL. Inglés profesional (B2) y experiencia en trabajo remoto.',
    'footer.contact': 'Contacto',
    'footer.copyright': 'Portafolio',
    'footer.headline': 'Construyamos algo juntos',
    'meta.description':
      'Allan Mendoza — desarrollador full-stack con más de 10 años de experiencia creando apps web y móviles con React, TypeScript, Node.js, PostgreSQL y plataformas cloud.',
    'meta.resumeDescription':
      'Currículum de Allan Mendoza, desarrollador full-stack: educación, certificaciones, experiencia profesional y stack técnico en frontend, backend y cloud.',
    'meta.projectsDescription':
      'Proyectos seleccionados de Allan Mendoza: AquaRed, TERAFIS, encuestas multi-tenant, sitios clínicos y sistemas para organizaciones sin fines de lucro con React, Next.js, PHP y cloud.',
    'meta.jobTitle': 'Desarrollador Full-Stack',
    'resume.pageTitle': 'Currículum',
    'resume.eyebrow': 'Trayectoria',
    'resume.summary': 'Resumen',
    'resume.summaryBody':
      'Ingeniero en Computación y desarrollador full-stack con más de 10 años de experiencia en desarrollo web y móvil, bases de datos y liderazgo de equipos, incluidos 8 años como Jefe de Tecnología. Desarrollo y mantengo sistemas en producción para clientes nacionales e internacionales con React, TypeScript, Node.js y PostgreSQL. Inglés profesional (B2) y experiencia en trabajo remoto.',
    'resume.education': 'Educación y certificaciones',
    'resume.degree': 'Ingeniería en Computación',
    'resume.university': 'Universidad de Managua',
    'resume.certifications':
      'HackerRank SQL (Basic) y SQL (Intermediate) · Foundational C# with Microsoft (freeCodeCamp)',
    'resume.languages': 'Idiomas',
    'resume.languagesBody': 'Español (nativo), Inglés profesional (B2)',
    'resume.experience': 'Experiencia Profesional',
    'resume.volunteer': 'Voluntariado',
    'resume.volunteerRole': 'Desarrollador web voluntario',
    'resume.volunteerBody':
      'Colaboración remota con organizaciones en Camboya y Malasia',
    'resume.downloadTitle': 'Descargar Currículum',
    'resume.downloadText': 'Haz clic en el botón para descargar mi currículum en formato PDF.',
    'resume.downloadBtn': 'Descargar Currículum',
    'projects.pageTitle': 'Proyectos',
    'projects.eyebrow': 'Trabajo seleccionado',
    'projects.heading': 'Sobre los Proyectos',
    'projects.intro':
      'Una selección de sistemas y sitios en producción para empresas de servicios, clínicas, consultoras y organizaciones sin fines de lucro.',
    'projects.visit': 'Visitar sitio',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function t(locale: Locale, key: UIKey): string {
  return ui[locale][key] ?? ui[defaultLocale][key];
}

export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split('/').filter(Boolean)[0];
  if (segment === 'es' || segment === 'en') return segment;
  return defaultLocale;
}
