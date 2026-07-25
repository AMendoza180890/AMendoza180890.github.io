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
    'theme.toLight': 'Switch to light mode',
    'theme.toDark': 'Switch to dark mode',
    'lang.switch': 'Language',
    'hero.imA': "I'm a",
    'hero.typed': 'Developer, Freelancer',
    'skills.title': 'Technical Skills',
    'skills.languages': 'Programming Languages',
    'skills.web': 'Web Technologies',
    'skills.frameworks': 'Frameworks',
    'skills.databases': 'Databases',
    'skills.vcs': 'Version Control',
    'skills.tools': 'Other Tools',
    'about.title': 'About Me',
    'about.body':
      'I am a web developer with more than 10 years of experience, specializing in creating efficient digital solutions tailored to the needs of organizations. I have had the opportunity to work with non-profit organizations, where I have contributed meaningfully to their mission by developing effective technological solutions. Throughout my career, I have built websites, applications, and systems that enhance efficiency and communication. I am currently focused on projects that create a positive impact, and I remain actively involved in developing and maintaining several GitHub repositories to continue learning and growing professionally.',
    'footer.contact': 'Contact',
    'footer.copyright': 'Portfolio',
    'meta.description':
      'This portfolio showcases professional web development and IT solutions built using C#, PHP, JavaScript, Astro, Tailwind, MySQL, SQL Server, and CSS.',
    'resume.pageTitle': 'Resume',
    'resume.summary': 'Summary',
    'resume.summaryBody':
      'Web developer with experience in creating efficient and scalable applications for various industries. My goal is to apply expertise in web technologies, RESTful services implementation, and microservices architecture to develop innovative solutions that optimize processes and ensure quality and performance.',
    'resume.location': 'Oakley, California',
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
    'projects.heading': 'About Projects',
    'projects.intro':
      'A selection of projects showcasing my web development and IT solutions expertise.',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.resume': 'Currículum',
    'nav.projects': 'Proyectos',
    'nav.portfolio': 'Portafolio',
    'nav.openMenu': 'Abrir menú',
    'nav.closeMenu': 'Cerrar menú',
    'theme.toLight': 'Cambiar a modo claro',
    'theme.toDark': 'Cambiar a modo oscuro',
    'lang.switch': 'Idioma',
    'hero.imA': 'Soy',
    'hero.typed': 'Desarrollador, Freelancer',
    'skills.title': 'Habilidades Técnicas',
    'skills.languages': 'Lenguajes de Programación',
    'skills.web': 'Tecnologías Web',
    'skills.frameworks': 'Frameworks',
    'skills.databases': 'Bases de Datos',
    'skills.vcs': 'Control de Versiones',
    'skills.tools': 'Otras Herramientas',
    'about.title': 'Sobre Mí',
    'about.body':
      'Soy desarrollador web con más de 10 años de experiencia, especializado en crear soluciones digitales eficientes adaptadas a las necesidades de las organizaciones. He tenido la oportunidad de trabajar con organizaciones sin fines de lucro, donde he contribuido de forma significativa a su misión desarrollando soluciones tecnológicas efectivas. A lo largo de mi carrera, he construido sitios web, aplicaciones y sistemas que mejoran la eficiencia y la comunicación. Actualmente me enfoco en proyectos con impacto positivo, y sigo participando activamente en el desarrollo y mantenimiento de varios repositorios en GitHub para continuar aprendiendo y creciendo profesionalmente.',
    'footer.contact': 'Contacto',
    'footer.copyright': 'Portafolio',
    'meta.description':
      'Este portafolio muestra soluciones profesionales de desarrollo web y TI construidas con C#, PHP, JavaScript, Astro, Tailwind, MySQL, SQL Server y CSS.',
    'resume.pageTitle': 'Currículum',
    'resume.summary': 'Resumen',
    'resume.summaryBody':
      'Desarrollador web con experiencia en la creación de aplicaciones eficientes y escalables para diversas industrias. Mi objetivo es aplicar experiencia en tecnologías web, implementación de servicios RESTful y arquitectura de microservicios para desarrollar soluciones innovadoras que optimicen procesos y aseguren calidad y rendimiento.',
    'resume.location': 'Oakley, California',
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
    'projects.heading': 'Sobre los Proyectos',
    'projects.intro':
      'Una selección de proyectos que muestran mi experiencia en desarrollo web y soluciones de TI.',
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
