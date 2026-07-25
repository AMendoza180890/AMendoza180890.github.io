import type { Locale } from './ui';

export const site = {
  name: 'Allan Mendoza',
  brand: 'AMendoza',
  email: 'allanmaleman@gmail.com',
  phone: '+1925628-5359',
  phoneDisplay: '(925) 628-5359',
  github: 'https://github.com/AMendoza180890',
  linkedin: 'https://www.linkedin.com/in/amendoza1890/',
  resumePdf: '/file/Resume.pdf',
};

export type SkillGroup = {
  label: string;
  items: string[];
};

const frontend = ['Astro', 'React', 'React Native', 'Expo', 'TypeScript', 'Tailwind CSS'];
const backend = ['Node.js', 'Supabase', 'PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'Zod'];
const cloud = ['Azure', 'Google Cloud', 'Vercel', 'Cloudflare', 'Linux', 'PM2'];
const tools = ['Git', 'pnpm', 'VS Code'];

export const skills: Record<Locale, SkillGroup[]> = {
  en: [
    { label: 'Frontend', items: frontend },
    { label: 'Backend & Data', items: backend },
    { label: 'Cloud & DevOps', items: cloud },
    { label: 'Tools', items: tools },
  ],
  es: [
    { label: 'Frontend', items: frontend },
    { label: 'Backend y Datos', items: backend },
    { label: 'Cloud y DevOps', items: cloud },
    { label: 'Herramientas', items: tools },
  ],
};

export type ExperienceItem = {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  place: string;
  bullets: string[];
};

export const experience: Record<Locale, ExperienceItem[]> = {
  en: [
    {
      company: "God's Treasures",
      companyUrl: 'https://tesorosdedios.org/',
      role: 'Head of Technology',
      period: '2015 - 2024',
      place: 'Managua, Nicaragua',
      bullets: [
        'Implemented a Student Information System (SIS) that enhanced student data management, improved security, and reporting capabilities.',
        'Increased efficiency in asset disposal by 40% through the implementation of a fixed asset management system using JavaScript and MySQL within 6 months.',
        "Led the redesign of Tesoros de Dios' website using WordPress and Elementor, enhancing user engagement and team collaboration within 3 months.",
        'Improved data analysis capabilities by 30% by developing a comprehensive reporting system using SQL Server, enabling better insights for management within 5 months.',
        'Improved system reliability by 25% through the implementation of a proactive maintenance schedule and monitoring tools within 5 months.',
        'Resolved technical issues, including network and equipment failures, improving response time by 80% through an efficient ticketing system within 3 months.',
      ],
    },
    {
      company: 'WebNica',
      companyUrl: 'https://webxni.com/',
      role: 'Web Developer',
      period: '2018 - 2023',
      place: 'Managua, Nicaragua',
      bullets: [
        'Enhanced customer satisfaction with designs by utilizing design software to create visually appealing and user-friendly interfaces within 3 months.',
        'Developed a job request system for a tow truck company, enhancing customer communication and service organization, using Laravel and MySQL within 4 months.',
        'Designed and implemented a responsive website for Nica, leveraging PHP and JavaScript, which improved user engagement and accessibility within 4 months.',
        'Developed custom websites for clients, enhancing user experience and responsiveness, utilizing best practices within 3 months.',
      ],
    },
    {
      company: 'Salt and Light',
      companyUrl: 'https://www.compassion.com/',
      role: 'Tech Support',
      period: '2012 - 2014',
      place: 'Managua, Nicaragua',
      bullets: [
        'Enhanced data management efficiency by 30% through the development of a Student Information System (SIS) using C# and SQL Server 2012, completed within 6 months.',
        'Managed the resolution of various technical issues by providing solutions through a ticketing system for the Sal y Luz team.',
        'Taught students in the Salt and Light project the fundamentals of computing, from using Windows to programming with C# as the foundational language.',
      ],
    },
  ],
  es: [
    {
      company: 'Tesoros de Dios',
      companyUrl: 'https://tesorosdedios.org/',
      role: 'Jefe de Tecnología',
      period: '2015 - 2024',
      place: 'Managua, Nicaragua',
      bullets: [
        'Implementé un Sistema de Información Estudiantil (SIS) que mejoró la gestión de datos de estudiantes, la seguridad y las capacidades de reportes.',
        'Aumenté la eficiencia en la disposición de activos en un 40% mediante un sistema de gestión de activos fijos con JavaScript y MySQL en 6 meses.',
        'Lideré el rediseño del sitio web de Tesoros de Dios con WordPress y Elementor, mejorando el engagement y la colaboración del equipo en 3 meses.',
        'Mejoré las capacidades de análisis de datos en un 30% desarrollando un sistema de reportes con SQL Server, brindando mejores insights a la gerencia en 5 meses.',
        'Mejoré la confiabilidad del sistema en un 25% mediante un cronograma de mantenimiento proactivo y herramientas de monitoreo en 5 meses.',
        'Resolví incidencias técnicas, incluyendo fallas de red y equipos, mejorando el tiempo de respuesta en un 80% con un sistema de tickets en 3 meses.',
      ],
    },
    {
      company: 'WebNica',
      companyUrl: 'https://webxni.com/',
      role: 'Desarrollador Web',
      period: '2018 - 2023',
      place: 'Managua, Nicaragua',
      bullets: [
        'Mejoré la satisfacción del cliente con diseños atractivos e interfaces amigables en 3 meses.',
        'Desarrollé un sistema de solicitudes de trabajo para una empresa de grúas, mejorando la comunicación y organización del servicio, con Laravel y MySQL en 4 meses.',
        'Diseñé e implementé un sitio web responsivo para Nica con PHP y JavaScript, mejorando el engagement y la accesibilidad en 4 meses.',
        'Desarrollé sitios web personalizados para clientes, mejorando la experiencia de usuario y la capacidad de respuesta, aplicando buenas prácticas en 3 meses.',
      ],
    },
    {
      company: 'Sal y Luz',
      companyUrl: 'https://www.compassion.com/',
      role: 'Soporte Técnico',
      period: '2012 - 2014',
      place: 'Managua, Nicaragua',
      bullets: [
        'Mejoré la eficiencia en la gestión de datos en un 30% desarrollando un Sistema de Información Estudiantil (SIS) con C# y SQL Server 2012 en 6 meses.',
        'Gestioné la resolución de diversas incidencias técnicas mediante un sistema de tickets para el equipo de Sal y Luz.',
        'Enseñé a estudiantes del proyecto Sal y Luz los fundamentos de la computación, desde el uso de Windows hasta la programación con C#.',
      ],
    },
  ],
};

export type ProjectItem = {
  title: string;
  url: string;
  image: string;
  imageAlt: string;
  description: string;
  stack: string[];
};

export const projects: Record<Locale, ProjectItem[]> = {
  en: [
    {
      title: 'Tesoros de Dios Website',
      url: 'https://tesorosdedios.org/',
      image: '/img/portfolio/tesorosdeDiosWebsite.webp',
      imageAlt: 'Website Tesoros de Dios',
      description:
        "Developed a website for Tesoros de Dios, a non-profit organization dedicated to providing educational resources and support to underprivileged children in Latin America. The website features information about the organization's mission, programs, and ways to get involved. For this project, I used the following technology stack:",
      stack: ['WordPress', 'PHP', 'MySQL', 'CSS', 'JavaScript'],
    },
    {
      title: 'Tesoros de Dios Library (Biblioteca)',
      url: 'https://www.biblioteca.tesorosdedios.org/ingreso',
      image: '/img/portfolio/Bibliotecatesorosdedios.webp',
      imageAlt: 'Library Tesoros de Dios',
      description:
        'Created a database for Tesoros de Dios, allowing users to search resources, information and treatments for those with disabilities. This was designed as a library of information to share with churches, schools and other organizations to help them better serve individuals with special needs. For this project, I used the following technology stack:',
      stack: ['PHP', 'MySQL', 'CSS', 'Bootstrap', 'JavaScript'],
    },
  ],
  es: [
    {
      title: 'Sitio Web Tesoros de Dios',
      url: 'https://tesorosdedios.org/',
      image: '/img/portfolio/tesorosdeDiosWebsite.webp',
      imageAlt: 'Sitio web Tesoros de Dios',
      description:
        'Desarrollé un sitio web para Tesoros de Dios, una organización sin fines de lucro dedicada a brindar recursos educativos y apoyo a niños en situación de vulnerabilidad en Latinoamérica. El sitio incluye información sobre la misión, programas y formas de involucrarse. Para este proyecto utilicé el siguiente stack tecnológico:',
      stack: ['WordPress', 'PHP', 'MySQL', 'CSS', 'JavaScript'],
    },
    {
      title: 'Biblioteca Tesoros de Dios',
      url: 'https://www.biblioteca.tesorosdedios.org/ingreso',
      image: '/img/portfolio/Bibliotecatesorosdedios.webp',
      imageAlt: 'Biblioteca Tesoros de Dios',
      description:
        'Creé una base de datos para Tesoros de Dios que permite buscar recursos, información y tratamientos para personas con discapacidad. Se diseñó como una biblioteca de información para compartir con iglesias, escuelas y otras organizaciones, ayudándolas a servir mejor a personas con necesidades especiales. Para este proyecto utilicé el siguiente stack tecnológico:',
      stack: ['PHP', 'MySQL', 'CSS', 'Bootstrap', 'JavaScript'],
    },
  ],
};
