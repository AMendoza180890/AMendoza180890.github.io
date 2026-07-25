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
    'hero.eyebrow': 'Full-Stack Developer',
    'hero.ctaProjects': 'View projects',
    'hero.ctaContact': 'Get in touch',
    'skills.title': 'Technical Skills',
    'skills.eyebrow': 'Stack',
    'about.title': 'About Me',
    'about.eyebrow': 'About',
    'about.body':
      'I am a full-stack developer with more than 10 years of experience, specializing in creating efficient digital solutions tailored to the needs of organizations. I have had the opportunity to work with non-profit organizations, where I have contributed meaningfully to their mission by developing effective technological solutions. Throughout my career, I have built websites, applications, and systems that enhance efficiency and communication. I am currently focused on projects that create a positive impact, and I remain actively involved in developing and maintaining several GitHub repositories to continue learning and growing professionally.',
    'footer.contact': 'Contact',
    'footer.copyright': 'Portfolio',
    'footer.headline': "Let's build something together",
    'meta.description':
      'This portfolio showcases professional web development and IT solutions built using C#, PHP, JavaScript, Astro, Tailwind, MySQL, SQL Server, and CSS.',
    'resume.pageTitle': 'Resume',
    'resume.eyebrow': 'Career',
    'resume.summary': 'Summary',
    'resume.summaryBody':
      'Full-stack developer with experience in creating efficient and scalable applications for various industries. My goal is to apply expertise in web technologies, RESTful services implementation, and microservices architecture to develop innovative solutions that optimize processes and ensure quality and performance.',
    'resume.education': 'Education',
    'resume.degree': "Bachelor's Degree in Computer Science",
    'resume.university': 'Universidad Nacional Autónoma de Nicaragua, Managua, Nicaragua',
    'resume.coursework':
      'Relevant Coursework: Data Structures and Algorithms, Database Management Systems, Web Development, Software Engineering, Operating Systems, Computer Networks, Object-Oriented Programming, and Mobile Application Development.',
    'resume.experience': 'Professional Experience',
    'resume.downloadTitle': 'Download Resume',
    'resume.downloadText': 'Click the button below to download my resume in PDF format.',
    'resume.downloadBtn': 'Download Resume',
    'projects.pageTitle': 'Projects',
    'projects.eyebrow': 'Selected work',
    'projects.heading': 'About Projects',
    'projects.intro':
      'A selection of projects showcasing my web development and IT solutions expertise.',
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
      'Soy desarrollador full-stack con más de 10 años de experiencia, especializado en crear soluciones digitales eficientes adaptadas a las necesidades de las organizaciones. He tenido la oportunidad de trabajar con organizaciones sin fines de lucro, donde he contribuido de forma significativa a su misión desarrollando soluciones tecnológicas efectivas. A lo largo de mi carrera, he construido sitios web, aplicaciones y sistemas que mejoran la eficiencia y la comunicación. Actualmente me enfoco en proyectos con impacto positivo, y sigo participando activamente en el desarrollo y mantenimiento de varios repositorios en GitHub para continuar aprendiendo y creciendo profesionalmente.',
    'footer.contact': 'Contacto',
    'footer.copyright': 'Portafolio',
    'footer.headline': 'Construyamos algo juntos',
    'meta.description':
      'Este portafolio muestra soluciones profesionales de desarrollo web y TI construidas con C#, PHP, JavaScript, Astro, Tailwind, MySQL, SQL Server y CSS.',
    'resume.pageTitle': 'Currículum',
    'resume.eyebrow': 'Trayectoria',
    'resume.summary': 'Resumen',
    'resume.summaryBody':
      'Desarrollador full-stack con experiencia en la creación de aplicaciones eficientes y escalables para diversas industrias. Mi objetivo es aplicar experiencia en tecnologías web, implementación de servicios RESTful y arquitectura de microservicios para desarrollar soluciones innovadoras que optimicen procesos y aseguren calidad y rendimiento.',
    'resume.education': 'Educación',
    'resume.degree': 'Licenciatura en Ciencias de la Computación',
    'resume.university': 'Universidad Nacional Autónoma de Nicaragua, Managua, Nicaragua',
    'resume.coursework':
      'Cursos relevantes: Estructuras de Datos y Algoritmos, Sistemas de Gestión de Bases de Datos, Desarrollo Web, Ingeniería de Software, Sistemas Operativos, Redes de Computadoras, Programación Orientada a Objetos y Desarrollo de Aplicaciones Móviles.',
    'resume.experience': 'Experiencia Profesional',
    'resume.downloadTitle': 'Descargar Currículum',
    'resume.downloadText': 'Haz clic en el botón para descargar mi currículum en formato PDF.',
    'resume.downloadBtn': 'Descargar Currículum',
    'projects.pageTitle': 'Proyectos',
    'projects.eyebrow': 'Trabajo seleccionado',
    'projects.heading': 'Sobre los Proyectos',
    'projects.intro':
      'Una selección de proyectos que muestran mi experiencia en desarrollo web y soluciones de TI.',
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
