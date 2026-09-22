
import { Project, Skill, Education, ExpertiseCard } from './types';
import lankaMemoImg from './assets/lankamemoholidays.png';
import premiumPkgImg from './assets/premiumpackaging.png';
import lankovaImg from './assets/lankova.png';

export const EXPERTISE: ExpertiseCard[] = [
  {
    title: 'Frontend Architecture',
    description: 'Specializing in high-performance React applications with scalable state management and elegant UI/UX patterns.',
    iconName: 'Layout'
  },
  {
    title: 'Backend Engineering',
    description: 'Designing robust microservices, RESTful APIs, and complex database schemas using Node.js, Go, and Python.',
    iconName: 'Server'
  },
  {
    title: 'Cloud & DevOps',
    description: 'Expertise in CI/CD pipelines, Docker containerization, and serverless architectures on AWS and GCP.',
    iconName: 'Cloud'
  },
  {
    title: 'Mobile Development',
    description: 'Building cross-platform mobile experiences with React Native, focusing on performance and native feel.',
    iconName: 'Smartphone'
  }
];

export const SKILLS: Skill[] = [
  { name: 'TypeScript', level: 95, category: 'Language', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
  { name: 'React', level: 98, category: 'Frontend', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { name: 'Node.js', level: 90, category: 'Backend', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original-wordmark.svg' },
  { name: 'Python', level: 85, category: 'Language', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  { name: 'Docker', level: 80, category: 'Tool', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
  { name: 'PostgreSQL', level: 88, category: 'Backend', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg' },
  { name: 'AWS', level: 75, category: 'Cloud', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
];

export const PROJECTS: Project[] = [
  {
    id: 'client-1',
    title: 'LankaMemo Holidays — Sri Lanka Private Tour & Itinerary Platform',
    description: 'A modern Sri Lankan tourism platform developed for a private tour operator, showcasing tour packages, destinations, customized travel experiences, private transportation services, customer reviews, galleries, and direct customer enquiry options.',
    image: lankaMemoImg,
    tags: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'React Router'],
    liveUrl: 'https://lankamemoholidays.lk/',
    category: 'frontend',
    isClientProject: true,
    projectCategory: 'Tourism / Travel Platform'
  },
  {
    id: 'client-2',
    title: 'Premium Packaging — Packaging Solutions & Product Showcase Website',
    description: 'A professional business website developed for a Sri Lankan packaging company to showcase packaging products and services, organize products by category, and improve customer enquiries. Complete digital presence setup including SEO, Google Search Console, Google Analytics, and Google Business Profile.',
    image: premiumPkgImg,
    tags: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'React Router', 'Lucide React'],
    liveUrl: 'https://premiumpackaging.lk/',
    category: 'frontend',
    isClientProject: true,
    projectCategory: 'Corporate / Business Website'
  },
  {
    id: 'client-3',
    title: 'Lankova Travel & Tours — Sri Lanka Tours & Transportation Platform',
    description: 'A responsive tourism website developed for a Sri Lankan travel agency offering private tours, customized holiday experiences, transportation services, airport transfers, tour packages, and direct customer enquiry options.',
    image: lankovaImg,
    tags: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'React Router'],
    liveUrl: 'https://lankova.lk/',
    category: 'frontend',
    isClientProject: true,
    projectCategory: 'Tourism / Travel Platform'
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'e1',
    degree: 'BSc (Hons) in Software Engineering',
    institution: 'SLIIT',
    year: '2023 - 2027',
    description: 'I work with the MERN stack, Java, and modern JavaScript to build clean, responsive, and scalable web applications.'
  },
  {
    id: 'e2',
    degree: 'GCE Advanced Level (Physical science',
    institution: 'Zahira College',
    year: '2021',
    description: 'Successfully completed GCE Advanced Level (Physical Science stream) with passes in Combined Mathematics (C), Chemistry (C), and Physics (S).'
  }
];
