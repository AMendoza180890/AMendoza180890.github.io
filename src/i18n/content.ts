import type { Locale } from './ui';

export const site = {
  name: 'Allan Mendoza',
  brand: 'AMendoza',
  email: 'allanmaleman@gmail.com',
  phone: '+50584533999',
  phoneDisplay: '(505) 8453-3999',
  github: 'https://github.com/AMendoza180890',
  linkedin: 'https://www.linkedin.com/in/amendoza1890/',
  resumePdfEn: '/file/Allan_Mendoza_Aleman_Resume_EN.pdf',
  resumePdfEs: '/file/Allan_Mendoza_Aleman_CV_ES.pdf',
  /** Legacy alias — English resume */
  resumePdf: '/file/Resume.pdf',
  ogImage: '/img/favicon_io/android-chrome-512x512.png',
  knowsAbout: [
    'React',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'Next.js',
    'React Native',
    'Expo',
    'Astro',
    'Supabase',
    'Azure',
    'Cloudflare',
    'Vercel',
  ],
};

export function getResumePdf(locale: Locale): { href: string; download: string } {
  if (locale === 'es') {
    return {
      href: site.resumePdfEs,
      download: 'Allan_Mendoza_Aleman_CV_ES.pdf',
    };
  }
  return {
    href: site.resumePdfEn,
    download: 'Allan_Mendoza_Aleman_Resume_EN.pdf',
  };
}

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: Record<Locale, SkillGroup[]> = {
  en: [
    {
      label: 'Frontend & Mobile',
      items: [
        'React 19',
        'Next.js',
        'React Native',
        'Expo',
        'TypeScript',
        'JavaScript',
        'Astro (SSR)',
        'Vite',
        'Tailwind CSS',
        'Zustand',
        'react-i18next (i18n)',
        'Responsive design',
        'HTML5/CSS3',
      ],
    },
    {
      label: 'Backend',
      items: [
        'Node.js',
        'PHP',
        'Composer',
        'MVC',
        'RESTful APIs',
        'Third-party API integration',
        'Supabase (Auth, Edge Functions, Realtime)',
        'Resend (transactional email)',
        'Zod',
      ],
    },
    {
      label: 'Databases',
      items: [
        'PostgreSQL (Row-Level Security)',
        'Supabase',
        'SQL Server (T-SQL, stored procedures, triggers)',
        'MySQL',
        'MongoDB',
        'SQLite',
      ],
    },
    {
      label: 'Cloud & DevOps',
      items: [
        'Vercel',
        'Azure (Blob Storage)',
        'Cloudflare (Pages, Workers, Tunnel)',
        'Google Cloud Functions',
        'Linux server and network administration',
        'PM2',
        'cron',
        'CI/CD',
        'Git/GitHub',
      ],
    },
    {
      label: 'Practices & Leadership',
      items: [
        'Vitest',
        'PHPUnit (unit testing)',
        'SOLID principles',
        'Clean code',
        'Git flow and pull requests',
        'Technical leadership',
        'Requirements gathering',
        'Stakeholder communication',
        'Estimation',
      ],
    },
    {
      label: 'Architecture & Security',
      items: [
        'Multi-tenant architecture',
        'Role-based access control (RBAC)',
        'Column-level encryption',
        'Hash-chained audit logs',
        'Idempotent payment processing',
        'Optimistic locking',
        'Vulnerability scanning',
      ],
    },
  ],
  es: [
    {
      label: 'Áreas',
      items: [
        'Desarrollo web',
        'Aplicaciones móviles',
        'Análisis y diseño de sistemas',
        'Administración de bases de datos',
        'Gestión de proyectos',
        'Soporte técnico',
        'Trabajo remoto',
      ],
    },
    {
      label: 'Frontend y Móvil',
      items: [
        'React 19',
        'Next.js',
        'React Native',
        'Expo',
        'TypeScript',
        'JavaScript',
        'Astro (SSR)',
        'Vite',
        'Tailwind CSS',
        'Zustand',
        'react-i18next (i18n)',
        'Diseño responsive',
        'HTML5/CSS3',
      ],
    },
    {
      label: 'Backend',
      items: [
        'Node.js',
        'PHP',
        'Composer',
        'MVC',
        'APIs RESTful',
        'Integración de APIs de terceros',
        'Supabase (Auth, Edge Functions, Realtime)',
        'Resend (correo transaccional)',
        'Zod',
      ],
    },
    {
      label: 'Bases de datos',
      items: [
        'PostgreSQL (Row-Level Security)',
        'Supabase',
        'SQL Server (T-SQL, procedimientos almacenados, triggers)',
        'MySQL',
        'MongoDB',
        'SQLite',
      ],
    },
    {
      label: 'Cloud y DevOps',
      items: [
        'Vercel',
        'Azure (Blob Storage)',
        'Cloudflare (Pages, Workers, Tunnel)',
        'Google Cloud Functions',
        'Administración de servidores Linux y redes',
        'PM2',
        'cron',
        'CI/CD',
        'Git/GitHub',
      ],
    },
    {
      label: 'Prácticas y liderazgo',
      items: [
        'Vitest',
        'PHPUnit (pruebas unitarias)',
        'Principios SOLID',
        'Código limpio',
        'Git flow y pull requests',
        'Liderazgo técnico',
        'Levantamiento de requerimientos',
        'Comunicación con stakeholders',
        'Estimaciones',
      ],
    },
    {
      label: 'Arquitectura y seguridad',
      items: [
        'Arquitectura multi-tenant',
        'Control de acceso basado en roles (RBAC)',
        'Cifrado por columna',
        'Registros de auditoría encadenados con hash',
        'Procesamiento idempotente de pagos',
        'Bloqueo optimista',
        'Escaneo de vulnerabilidades',
      ],
    },
  ],
};

export type Engagement = {
  name: string;
  period?: string;
  stack?: string;
  url?: string;
  bullets: string[];
};

export type ExperienceItem = {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  place: string;
  note?: string;
  bullets?: string[];
  engagements?: Engagement[];
};

export const experience: Record<Locale, ExperienceItem[]> = {
  en: [
    {
      company: 'Independent (Contract)',
      role: 'Independent Full-Stack Developer (Contract)',
      period: '2025 – Present',
      place: 'Remote',
      engagements: [
        {
          name: 'EMAPASMOSA S.A. · AquaRed, water meter reading app',
          period: '2026 – Present',
          stack: 'React Native, Expo, SQLite, Azure',
          bullets: [
            'Built and maintain an offline-first mobile app used daily in production by 15 field readers to record water meter readings with photo evidence.',
            'Designed a local SQLite database with background sync and a two-phase upload (readings first, then photos to Azure Blob Storage) that prevents data loss on unstable connections.',
          ],
        },
        {
          name: 'Fisioterapia TERAFIS · Clinic management system',
          period: '2026 – Present',
          stack: 'Next.js, Supabase, PostgreSQL, Vitest',
          bullets: [
            'Built and maintain a production management system for a physiotherapy clinic, covering patient records and payments.',
            'Implemented column-level encryption for sensitive patient data, append-only audit logs with hash chaining for tamper evidence, and idempotent payment processing, covered by unit tests in Vitest.',
          ],
        },
        {
          name: 'TGC – Think Global Consultants (US-led, Malaysia) · Multi-tenant survey platform',
          period: '2026',
          stack: 'React, Astro SSR, TypeScript, Supabase, PostgreSQL',
          bullets: [
            'Architected and built a multi-tenant survey platform used by 3 organizations, with data isolation enforced through PostgreSQL Row-Level Security and role-based access for platform admins and organization users.',
            'Automated survey distribution with pg_cron scheduling, Supabase Edge Functions, and transactional email, plus real-time assignment tracking with Supabase Realtime.',
          ],
        },
        {
          name: 'SC Medical Clinic (Da Nang, Vietnam) · Trilingual website',
          period: '2026',
          stack: 'React, Vite, TypeScript, Tailwind CSS',
          url: 'https://phongkhamsc.com',
          bullets: [
            'Delivered a Vietnamese/English/Korean website (react-i18next) for a clinic group offering dental and medical services, integrating Google Maps and Zalo, deployed on Cloudflare Pages with automatic deploys from GitHub.',
          ],
        },
        {
          name: 'Hosting & DevOps · Production infrastructure',
          period: '2025 – Present',
          stack: 'Linux, PM2, Cloudflare, Vercel',
          bullets: [
            'Manage a production Linux server that runs multiple client projects with PM2, cron jobs, and Cloudflare Tunnel, and deploy through CI/CD to Vercel and Cloudflare.',
          ],
        },
      ],
    },
    {
      company: 'WebxNi',
      companyUrl: 'https://webxni.com/',
      role: 'Full-Stack Developer (Part-time)',
      period: '2018 – Present',
      place: 'Managua, Nicaragua',
      note: 'Part-time alongside Tesoros de Dios until 2023; ongoing project support since.',
      bullets: [
        'Built React/TypeScript web applications and websites for small-business clients (2021 – 2025), alongside PHP projects.',
        'Built a vulnerability-scanning web application (Astro, React 19, TypeScript, Tailwind CSS, Node.js, Supabase, Resend) that audits WordPress sites for outdated libraries and vulnerable APIs and emails remediation recommendations to site owners.',
        'Delivered 10 production websites and web systems for clients as a full-stack developer, using PHP, JavaScript, HTML5/CSS3, and MySQL, with Composer libraries including dompdf (PDF generation), phpdotenv (environment configuration), and PHPUnit (unit testing).',
        'Built a service-request management system (PHP, MySQL) that streamlined client communication and internal operations.',
      ],
    },
    {
      company: 'Tesoros de Dios',
      companyUrl: 'https://tesorosdedios.org/',
      role: 'Head of Technology',
      period: '2015 – 2023',
      place: 'Managua, Nicaragua',
      note: 'Nonprofit organization',
      bullets: [
        'Led the technology function, coordinating a team of 1–3 people and administering network infrastructure and systems for 30 users.',
        "Built the organization's website and a virtual library platform (PHP, MySQL, MVC) serving 30 users with content for partner churches, including an admin panel for user and content management, deployed on Bluehost.",
        'Managed SQL Server databases, including queries, reports, stored procedures, and triggers.',
      ],
    },
  ],
  es: [
    {
      company: 'Independiente (Contrato)',
      role: 'Desarrollador Full-Stack Independiente (Contrato)',
      period: '2025 – Presente',
      place: 'Remoto',
      engagements: [
        {
          name: 'EMAPASMOSA S.A. · AquaRed, app de lectura de medidores',
          period: '2026 – Presente',
          stack: 'React Native, Expo, SQLite, Azure',
          bullets: [
            'Desarrollé y mantengo una app móvil offline-first que usan a diario en producción 15 lectores de campo para registrar lecturas de medidores de agua con evidencia fotográfica.',
            'Diseñé una base de datos local en SQLite con sincronización automática en dos fases hacia Azure, que evita la pérdida de lecturas y fotos cuando la conexión es inestable.',
          ],
        },
        {
          name: 'Fisioterapia TERAFIS · Sistema de gestión clínica',
          period: '2026 – Presente',
          stack: 'Next.js, Supabase, PostgreSQL, Vitest',
          bullets: [
            'Desarrollé y mantengo en producción el sistema de gestión de una clínica de fisioterapia, que cubre expedientes de pacientes y pagos.',
            'Implementé seguridad de nivel clínico: cifrado de datos sensibles de pacientes, bitácora de auditoría a prueba de manipulación (hash chaining) y pagos protegidos contra duplicados, con pruebas unitarias en Vitest.',
          ],
        },
        {
          name: 'TGC – Think Global Consultants (dirigida desde EE. UU., Malasia) · Plataforma multi-tenant de encuestas',
          period: '2026',
          stack: 'React, Astro SSR, TypeScript, Supabase, PostgreSQL',
          bullets: [
            'Diseñé y construí una plataforma de encuestas para 3 organizaciones, donde cada una solo accede a sus propios datos (Row-Level Security de PostgreSQL) y los permisos se controlan por roles.',
            'Automaticé el envío de encuestas con programación en pg_cron, Supabase Edge Functions y correo transaccional, además del seguimiento de asignaciones en tiempo real con Supabase Realtime.',
          ],
        },
        {
          name: 'SC Medical Clinic (Da Nang, Vietnam) · Sitio web trilingüe',
          period: '2026',
          stack: 'React, Vite, TypeScript, Tailwind CSS',
          url: 'https://phongkhamsc.com',
          bullets: [
            'Entregué un sitio web en vietnamita, inglés y coreano (react-i18next) para un grupo clínico con servicios dentales y médicos, con integración de Google Maps y Zalo, desplegado en Cloudflare Pages con despliegue automático desde GitHub.',
          ],
        },
        {
          name: 'Hosting y DevOps · Infraestructura de producción',
          period: '2025 – Presente',
          stack: 'Linux, PM2, Cloudflare, Vercel',
          bullets: [
            'Administro un servidor Linux de producción que ejecuta varios proyectos de clientes con PM2, tareas cron y Cloudflare Tunnel, y despliego mediante CI/CD en Vercel y Cloudflare.',
          ],
        },
      ],
    },
    {
      company: 'WebxNi',
      companyUrl: 'https://webxni.com/',
      role: 'Desarrollador Full-Stack (Medio tiempo)',
      period: '2018 – Presente',
      place: 'Managua, Nicaragua',
      note: 'Medio tiempo en paralelo con Tesoros de Dios hasta 2023; desde entonces, apoyo a proyectos.',
      bullets: [
        'Desarrollé aplicaciones web y sitios con React y TypeScript para clientes pymes (2021 – 2025), junto con proyectos en PHP.',
        'Desarrollé una aplicación web de escaneo de vulnerabilidades (Astro, React 19, TypeScript, Tailwind CSS, Node.js, Supabase, Resend) que audita sitios WordPress en busca de librerías obsoletas y APIs vulnerables, y envía por correo recomendaciones de mejora a los dueños del sitio.',
        'Entregué 10 sitios web y sistemas web en producción como desarrollador full-stack, con PHP, JavaScript, HTML5/CSS3 y MySQL, usando librerías de Composer como dompdf (generación de PDF), phpdotenv (configuración de entorno) y PHPUnit (pruebas unitarias).',
        'Desarrollé un sistema de gestión de solicitudes de servicio (PHP, MySQL) que agilizó la comunicación con clientes y las operaciones internas.',
      ],
    },
    {
      company: 'Tesoros de Dios',
      companyUrl: 'https://tesorosdedios.org/',
      role: 'Jefe de Tecnología',
      period: '2015 – 2023',
      place: 'Managua, Nicaragua',
      note: 'Organización sin fines de lucro',
      bullets: [
        'Dirigí el área de tecnología, coordinando un equipo de 1 a 3 personas y administrando la infraestructura de red y los sistemas para 30 usuarios.',
        'Desarrollé el sitio web de la organización y una plataforma de biblioteca virtual (PHP, MySQL, MVC) que sirve contenido a 30 usuarios de iglesias asociadas, con panel de administración de usuarios y contenido, desplegada en Bluehost.',
        'Administré bases de datos SQL Server: consultas, reportes, procedimientos almacenados y triggers.',
      ],
    },
  ],
};

export type ProjectItem = {
  title: string;
  url?: string;
  image?: string;
  imageAlt: string;
  description: string;
  stack: string[];
};

export const projects: Record<Locale, ProjectItem[]> = {
  en: [
    {
      title: 'AquaRed — Water meter reading app',
      imageAlt: 'AquaRed mobile app for EMAPASMOSA',
      description:
        'Offline-first React Native app used daily in production by 15 field readers to record water meter readings with photo evidence, with two-phase sync to Azure Blob Storage.',
      stack: ['React Native', 'Expo', 'SQLite', 'Azure'],
    },
    {
      title: 'TERAFIS — Clinic management system',
      imageAlt: 'TERAFIS physiotherapy clinic system',
      description:
        'Production management system for a physiotherapy clinic covering patient records and payments, with column-level encryption, hash-chained audit logs, and idempotent payments.',
      stack: ['Next.js', 'Supabase', 'PostgreSQL', 'Vitest'],
    },
    {
      title: 'TGC — Multi-tenant survey platform',
      imageAlt: 'Think Global Consultants survey platform',
      description:
        'Multi-tenant survey platform for 3 organizations with PostgreSQL Row-Level Security, role-based access, automated distribution via Edge Functions, and real-time assignment tracking.',
      stack: ['React', 'Astro SSR', 'TypeScript', 'Supabase', 'PostgreSQL'],
    },
    {
      title: 'SC Medical Clinic — Trilingual website',
      url: 'https://phongkhamsc.com',
      imageAlt: 'SC Medical Clinic website',
      description:
        'Vietnamese/English/Korean clinic website with Google Maps and Zalo integration, deployed on Cloudflare Pages with automatic GitHub deploys.',
      stack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'react-i18next'],
    },
    {
      title: 'Tesoros de Dios Website',
      url: 'https://tesorosdedios.org/',
      image: '/img/portfolio/tesorosdeDiosWebsite.webp',
      imageAlt: 'Website Tesoros de Dios',
      description:
        'Website and digital presence for a nonprofit supporting children with disabilities in Nicaragua, including mission, programs, and ways to get involved.',
      stack: ['WordPress', 'PHP', 'MySQL', 'CSS', 'JavaScript'],
    },
    {
      title: 'Tesoros de Dios Library (Biblioteca)',
      url: 'https://www.biblioteca.tesorosdedios.org/ingreso',
      image: '/img/portfolio/Bibliotecatesorosdedios.webp',
      imageAlt: 'Library Tesoros de Dios',
      description:
        'Virtual library platform (PHP, MySQL, MVC) serving partner churches with an admin panel for users and content, deployed on Bluehost.',
      stack: ['PHP', 'MySQL', 'MVC', 'CSS', 'JavaScript'],
    },
    {
      title: 'WordPress vulnerability scanner',
      imageAlt: 'Vulnerability scanning web application',
      description:
        'Web application that audits WordPress sites for outdated libraries and vulnerable APIs and emails remediation recommendations to site owners.',
      stack: ['Astro', 'React 19', 'TypeScript', 'Node.js', 'Supabase', 'Resend'],
    },
  ],
  es: [
    {
      title: 'AquaRed — App de lectura de medidores',
      imageAlt: 'App móvil AquaRed para EMAPASMOSA',
      description:
        'App móvil offline-first usada a diario en producción por 15 lectores de campo para registrar lecturas de medidores con evidencia fotográfica y sincronización en dos fases hacia Azure.',
      stack: ['React Native', 'Expo', 'SQLite', 'Azure'],
    },
    {
      title: 'TERAFIS — Sistema de gestión clínica',
      imageAlt: 'Sistema clínico TERAFIS',
      description:
        'Sistema de gestión en producción para una clínica de fisioterapia: expedientes, pagos, cifrado de datos sensibles, auditoría con hash chaining y pagos idempotentes.',
      stack: ['Next.js', 'Supabase', 'PostgreSQL', 'Vitest'],
    },
    {
      title: 'TGC — Plataforma multi-tenant de encuestas',
      imageAlt: 'Plataforma de encuestas Think Global Consultants',
      description:
        'Plataforma de encuestas para 3 organizaciones con Row-Level Security de PostgreSQL, control por roles, envío automatizado con Edge Functions y seguimiento en tiempo real.',
      stack: ['React', 'Astro SSR', 'TypeScript', 'Supabase', 'PostgreSQL'],
    },
    {
      title: 'SC Medical Clinic — Sitio web trilingüe',
      url: 'https://phongkhamsc.com',
      imageAlt: 'Sitio web SC Medical Clinic',
      description:
        'Sitio en vietnamita, inglés y coreano para un grupo clínico, con Google Maps y Zalo, desplegado en Cloudflare Pages con CI desde GitHub.',
      stack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'react-i18next'],
    },
    {
      title: 'Sitio Web Tesoros de Dios',
      url: 'https://tesorosdedios.org/',
      image: '/img/portfolio/tesorosdeDiosWebsite.webp',
      imageAlt: 'Sitio web Tesoros de Dios',
      description:
        'Sitio web y presencia digital para una organización sin fines de lucro que apoya a niños con discapacidad en Nicaragua.',
      stack: ['WordPress', 'PHP', 'MySQL', 'CSS', 'JavaScript'],
    },
    {
      title: 'Biblioteca Tesoros de Dios',
      url: 'https://www.biblioteca.tesorosdedios.org/ingreso',
      image: '/img/portfolio/Bibliotecatesorosdedios.webp',
      imageAlt: 'Biblioteca Tesoros de Dios',
      description:
        'Plataforma de biblioteca virtual (PHP, MySQL, MVC) para iglesias asociadas, con panel de administración de usuarios y contenido.',
      stack: ['PHP', 'MySQL', 'MVC', 'CSS', 'JavaScript'],
    },
    {
      title: 'Escáner de vulnerabilidades WordPress',
      imageAlt: 'Aplicación de escaneo de vulnerabilidades',
      description:
        'Aplicación web que audita sitios WordPress en busca de librerías obsoletas y APIs vulnerables, y envía recomendaciones de mejora por correo.',
      stack: ['Astro', 'React 19', 'TypeScript', 'Node.js', 'Supabase', 'Resend'],
    },
  ],
};
