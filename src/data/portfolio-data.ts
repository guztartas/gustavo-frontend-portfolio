export type Metric = {
  label: string;
  value: string;
};

export type Impact = {
  title: string;
  description: string;
  result: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const portfolioData = {
  person: {
    name: 'Gustavo Tartas',
    role: 'Senior Fullstack Software Engineer',
    location: 'Erechim, Brazil',
    tagline:
      'I design and ship high-conversion e-commerce experiences with frontend precision, performance focus, and clean architecture.',
  },
  summary:
    'Senior engineer with 7+ years building scalable web products across high-traffic commerce environments. Strong in React, Next.js, Node.js, performance optimization, and delivery quality with testing.',
  metrics: [
    {
      value: '7+ years',
      label: 'Hands-on product engineering',
    },
    {
      value: '5M+',
      label: 'Daily users supported in fashion e-commerce',
    },
    {
      value: '600+',
      label: 'Physical stores connected in omnichannel flows',
    },
    {
      value: 'Core Web Vitals',
      label: 'Continuous monitoring and optimization',
    },
  ] satisfies Metric[],
  impact: [
    {
      title: 'Dimension-based purchase calculator',
      description:
        'Created guided room-size logic for carpet selection with data-driven recommendations.',
      result:
        'Improved product customization usability and reduced friction in checkout decisions.',
    },
    {
      title: 'Homepage video support rollout',
      description:
        'Enabled mixed media carousels for one of the most visited pages in U.S. e-commerce.',
      result:
        'Increased campaign flexibility and user engagement for marketing initiatives.',
    },
    {
      title: 'Remote payment links',
      description:
        'Built secure anonymous checkout links for distributed sales teams across Brazil.',
      result:
        'Expanded remote sales capacity with faster conversion outside physical stores.',
    },
  ] satisfies Impact[],
  experiences: [
    {
      company: 'Home Depot',
      role: 'Senior Fullstack Software Engineer',
      period: 'Oct 2024 - Present',
      location: 'United States (Remote)',
      summary:
        'Driving continuous improvements in a large-scale e-commerce platform with focus on architecture, frontend quality, and measurable performance.',
      highlights: [
        'Built and improved critical product page flows for quantity, color, and configuration personalization.',
        'Delivered a dimension calculator for room-based recommendations to optimize purchase decisions.',
        'Shipped homepage upgrades including video support inside carousels for richer campaigns.',
        'Monitored and optimized Core Web Vitals through New Relic, with focus on LCP and responsiveness.',
        'Contributed to testing strategy with Jest and supported architectural decisions in a senior team.',
      ],
      stack: [
        'React',
        'Tailwind CSS',
        'GraphQL',
        'Node.js',
        'Express',
        'Jest',
        'GCP',
        'New Relic',
      ],
    },
    {
      company: 'Aggrandize',
      role: 'Senior Fullstack Software Engineer',
      period: 'Feb 2023 - Oct 2024',
      location: 'Brazil',
      summary:
        'Led development of a nationwide commerce platform for Frigelar, enabling complete sales lifecycle and operational scalability.',
      highlights: [
        'Designed and implemented end-to-end cart workflows with product, service, discount, branch, and payment orchestration.',
        'Integrated multiple payment methods including PIX, cards, cash, and internal credit.',
        'Built remote payment links to support device-independent checkout for external customers.',
        'Delivered customer onboarding for CPF/CNPJ profiles with role-based access controls.',
        'Mentored junior engineers and guided architectural standards and frontend quality.',
      ],
      stack: [
        'React',
        'Redux-Saga',
        'Bootstrap',
        'Node.js',
        'Express',
        'WebSocket',
        'React Testing Library',
      ],
    },
    {
      company: 'Aggrandize',
      role: 'Fullstack Software Engineer',
      period: 'Jun 2021 - Feb 2023',
      location: 'Brazil',
      summary:
        "Worked on Brazil's largest fashion e-commerce modernization, bridging legacy architecture and modern React/Next.js delivery.",
      highlights: [
        'Developed smartphone-camera product recognition to connect users to matching product pages.',
        'Implemented nearest-store locator with stock availability for omnichannel shopping.',
        'Led phased migration from JSP to React with overnight launches to reduce revenue risk.',
        'Maintained legacy and modern stacks simultaneously while improving responsiveness and reliability.',
      ],
      stack: [
        'React',
        'Next.js',
        'Node.js',
        'Express',
        'MobX',
        'Java',
        'JSP',
        'Jest',
      ],
    },
    {
      company: 'Meta Brazil',
      role: 'Fullstack Software Engineer',
      period: 'Sept 2020 - Jun 2021',
      location: 'Brazil',
      summary:
        'Contributed to fleet monitoring delivery and launched a new commerce platform from scratch.',
      highlights: [
        'Implemented final product stages for TicketLog monitoring with React/Next.js and data visualization.',
        'Built BFF and frontend modules for Britania e-commerce in a fullstack role.',
      ],
      stack: ['React', 'Next.js', 'Node.js', 'Express', 'MobX', 'Recharts'],
    },
    {
      company: 'Compass UOL',
      role: 'Frontend Software Engineer',
      period: 'Nov 2018 - Sept 2020',
      location: 'Brazil',
      summary:
        'Owned frontend delivery for Camicado list experiences, including creation and payment journeys.',
      highlights: [
        'Delivered wedding and event list creation flows focused on conversion and usability.',
        'Maintained and evolved guest payment interfaces as the primary frontend engineer in the squad.',
      ],
      stack: ['Vue.js', 'jQuery', 'E-commerce UX'],
    },
  ] satisfies Experience[],
  skills: [
    {
      title: 'Frontend',
      items: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Tailwind CSS',
        'Styled-Components',
        'Material UI',
      ],
    },
    {
      title: 'State & Architecture',
      items: [
        'Redux-Saga',
        'MobX',
        'Context API',
        'Zustand',
        'Clean Architecture',
      ],
    },
    {
      title: 'Backend & APIs',
      items: [
        'Node.js',
        'Express',
        'REST APIs',
        'GraphQL',
        'WebSocket',
        'Java',
        'Nest.js',
        'FastApi',
      ],
    },
    {
      title: 'Quality & AI',
      items: [
        'Jest',
        'React Testing Library',
        'GitHub Copilot',
        'OpenAI APIs',
        'MCP',
        'CI/CD Optimization',
      ],
    },
  ] satisfies SkillGroup[],
  languages: [
    'Portuguese (Native)',
    'English (Highly proficient)',
    'Spanish (Working knowledge)',
  ],
  contacts: {
    email: 'guga.m@hotmail.com',
    phone: '+55 54 9 9246 0762',
    github: 'https://github.com/guztartas',
    linkedin: 'https://www.linkedin.com/in/gustavo-tartas/',
  },
} as const;
