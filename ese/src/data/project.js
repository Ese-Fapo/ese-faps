import techPix from '../assets/tech_pix.jpeg'
import berber from '../assets/berber.jpeg'
import phone from '../assets/phone.jpeg'

export const projects = [ 
  {
    id: 1,
    title: 'Plataforma de Educação',
    description: 'Plataforma de intercâmbio estudantil',
    imageUrl: '/images/sch-img.jpeg',
    category: 'Aplicativos Web',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    projectUrl: 'https://www.rockstarstudyabroad.com/',
    demoUrl: 'https://demo.example.com/project-one',
    githubUrl: 'https://github.com/arumemi/VICTORS-SCHOOL.git',
  },
  {
    id: 2,
    title: 'Tech-blog',
    description: 'Plataforma de blog de tecnologia com sistema de autenticação',
    imageUrl: techPix,
    category: 'Full-Stack',
    technologies: ['Next.js', 'React', 'Prisma', 'Tailwind CSS', 'PostgreSQL'],
    projectUrl: 'https://tech-blog-i77h.vercel.app/',
    
    githubUrl: 'https://github.com/arumemi/Tech_Blog ',
  },

  {
    id: 3,
    title: 'e-commerce',
    description: 'aplicativo móvel para gerenciamento de tarefas',
    imageUrl: phone,
    category: 'Aplicativos Móveis',
    technologies: ['React + Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    projectUrl: 'https://dotman-s-store-3eax.vercel.app/',
  
    githubUrl: 'https://github.com/Ese-Fapo/Dotman-s-Store.git ',
  },
  {
    id: 4,
    title: 'Berber&Blade',
    description: 'um loja de barbearia online com sistema de agendamento',
    imageUrl: berber,
    category: 'Aplicativos Web',
    technologies: ['HTML', 'CSS', 'javaScript'],
    projectUrl: 'https://berber-shop-ruby.vercel.app/',
    
    githubUrl: 'https://github.com/Ese-Fapo/berber_shop.git',
  },
  {
    id: 5,
    title: 'Projeto Cinco',
    description: 'aplicação de bate-papo em tempo real',
    imageUrl: '/images/project1.svg',
    category: 'Full-Stack',
    technologies: ['Socket.io', 'Node.js', 'Express'],
    projectUrl: 'https://example.com/project-five',
   
    githubUrl: 'https://github.com/example/project-five',
  },
  {
    id: 6,
    title: 'Projeto Seis',
    description: 'site de portfólio com animações',
    imageUrl: '/images/sch-img.jpeg',
    category: 'Componentes UI',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    projectUrl: 'https://example.com/project-six',
   
    githubUrl: 'https://github.com/example/project-six',
  }

];
export const categories = [
  'Todos',
  'Aplicativos Web',
  'Aplicativos Móveis',
  'E-commerce',
  
  'Full-Stack',

];
    
 