export type Locale = 'en-US' | 'pt-BR';

export type ThemePreference = 'system' | 'light' | 'dark';

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

export type Recommendation = {
  name: string;
  role: string;
  relation: string;
  quote: string;
};

export type EducationProfile = {
  degree: string;
  duration: string;
  institution: string;
  context: string;
  summary: string;
};

export type AIFocusProfile = {
  summary: string;
  automationFocus: string;
  projectName: string;
  projectYear: string;
  projectDescription: string;
  projectUrl: string;
  projectCta: string;
};

export type PortfolioLabels = {
  navigation: {
    impact: string;
    recommendations: string;
    education: string;
    ai: string;
    experience: string;
    skills: string;
    contact: string;
    resume: string;
  };
  hero: {
    headlineAccent: string;
    headlineBase: string;
    primaryCta: string;
    secondaryCta: string;
  };
  sections: {
    impactTag: string;
    impactTitle: string;
    recommendationsTag: string;
    recommendationsTitle: string;
    recommendationsSource: string;
    educationTag: string;
    educationTitle: string;
    aiTag: string;
    aiTitle: string;
    experienceTag: string;
    experienceTitle: string;
    skillsTag: string;
    skillsTitle: string;
    languagesTag: string;
    contactTag: string;
    contactTitle: string;
    contactSummary: string;
  };
  contacts: {
    whatsapp: string;
    linkedIn: string;
    github: string;
  };
  controls: {
    languageAriaLabel: string;
    themeAriaLabel: string;
    locale: {
      enUS: string;
      ptBR: string;
    };
    theme: {
      system: string;
      light: string;
      dark: string;
    };
  };
};

export type PortfolioLocaleData = {
  person: {
    name: string;
    role: string;
    location: string;
    tagline: string;
  };
  summary: string;
  metrics: Metric[];
  impact: Impact[];
  recommendations: Recommendation[];
  education: EducationProfile;
  aiFocus: AIFocusProfile;
  experiences: Experience[];
  skills: SkillGroup[];
  languages: string[];
  contacts: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    whatsapp: string;
  };
  labels: PortfolioLabels;
};

export const defaultLocale: Locale = 'en-US';

export const localeOptions: Array<{ value: Locale; short: string }> = [
  { value: 'en-US', short: 'EN' },
  { value: 'pt-BR', short: 'PT' },
];

export const themeOptions: Array<{ value: ThemePreference }> = [
  { value: 'system' },
  { value: 'light' },
  { value: 'dark' },
];

const sharedContacts = {
  email: 'guga.m@hotmail.com',
  phone: '+55 54 9 9246 0762',
  github: 'https://github.com/guztartas',
  linkedin: 'https://www.linkedin.com/in/gustavo-tartas/',
  whatsapp: 'https://wa.me/5554992460762',
};

const experiencesEn: Experience[] = [
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
];

const experiencesPt: Experience[] = [
  {
    company: 'Home Depot',
    role: 'Engenheiro de Software Fullstack Sênior',
    period: 'Out 2024 - Atual',
    location: 'Estados Unidos (Remoto)',
    summary:
      'Atuando em melhorias contínuas de uma plataforma de e-commerce em larga escala, com foco em arquitetura, qualidade de frontend e performance mensurável.',
    highlights: [
      'Construção e evolução de fluxos críticos de página de produto para personalização de quantidade, cor e configuração.',
      'Entrega de calculadora por dimensão para recomendações baseadas em ambiente.',
      'Lançamento de melhorias na homepage, incluindo suporte a vídeo em carrosséis.',
      'Monitoramento e otimização de Core Web Vitals com New Relic, com foco em LCP e responsividade.',
      'Contribuição para estratégia de testes com Jest e decisões arquiteturais em time sênior.',
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
    role: 'Engenheiro de Software Fullstack Sênior',
    period: 'Fev 2023 - Out 2024',
    location: 'Brasil',
    summary:
      'Liderança no desenvolvimento de uma plataforma nacional de e-commerce para a Frigelar, cobrindo ciclo completo de vendas com escalabilidade operacional.',
    highlights: [
      'Desenho e implementação do fluxo completo de carrinho com produtos, serviços, descontos, filial e pagamento.',
      'Integração de múltiplos métodos de pagamento, incluindo PIX, cartões, dinheiro e crédito interno.',
      'Construção de links de pagamento remoto para checkout em qualquer dispositivo.',
      'Entrega de onboarding de clientes CPF/CNPJ com permissões por perfil.',
      'Mentoria de desenvolvedores juniores e definição de padrões de arquitetura e qualidade frontend.',
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
    role: 'Engenheiro de Software Fullstack',
    period: 'Jun 2021 - Fev 2023',
    location: 'Brasil',
    summary:
      'Atuação na modernização do maior e-commerce de moda do Brasil, conectando arquitetura legada com entrega moderna em React/Next.js.',
    highlights: [
      'Desenvolvimento de reconhecimento de produtos via câmera de smartphone para redirecionamento inteligente.',
      'Implementação de localizador de lojas próximas com disponibilidade de estoque.',
      'Liderança na migração gradual de JSP para React com viradas noturnas para reduzir risco de receita.',
      'Sustentação simultânea de stack legada e moderna com foco em responsividade e confiabilidade.',
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
    role: 'Engenheiro de Software Fullstack',
    period: 'Set 2020 - Jun 2021',
    location: 'Brasil',
    summary:
      'Contribuí para a etapa final de um sistema de monitoramento de frota e para o lançamento de um novo e-commerce do zero.',
    highlights: [
      'Entrega de etapas finais do TicketLog com React/Next.js e visualização de dados.',
      'Construção de módulos BFF e frontend para o e-commerce da Britania.',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'Express', 'MobX', 'Recharts'],
  },
  {
    company: 'Compass UOL',
    role: 'Engenheiro de Software Frontend',
    period: 'Nov 2018 - Set 2020',
    location: 'Brasil',
    summary:
      'Responsável pela entrega frontend dos fluxos de listas da Camicado, incluindo criação e pagamento.',
    highlights: [
      'Entrega de fluxos de criação de listas de casamento e eventos com foco em usabilidade e conversão.',
      'Evolução das interfaces de pagamento de convidados como principal frontend do squad.',
    ],
    stack: ['Vue.js', 'jQuery', 'E-commerce UX'],
  },
];

const recommendationsEn: Recommendation[] = [
  {
    name: 'Tyler Butler',
    role: 'Software Engineer 2 at The Home Depot',
    relation: 'Worked with me on the same team',
    quote:
      'Innovative, dedicated, and collaborative. Gustavo consistently delivered customer-facing React features with high quality and strong engineering rigor.',
  },
  {
    name: 'Mike Kerfeld',
    role: 'Sr. Product Manager at The Home Depot',
    relation: 'Partnered cross-functionally with me',
    quote:
      'Gustavo showed up every day ready to contribute. He produced not only solid software but also technical guidance when challenges came up.',
  },
  {
    name: 'Haile Lakew',
    role: 'Senior Software Engineer',
    relation: 'Worked with me on the same team',
    quote:
      'He was lightning fast onboarding into complex tasks and helped improve quality and delivery speed while increasing team capacity.',
  },
  {
    name: 'George Guffey',
    role: 'Senior Software Engineer at The Home Depot',
    relation: 'Worked with me on the same team',
    quote:
      'Working with Gustavo was a pleasure. He communicates clearly, learns quickly, and provides valuable input in technical decision-making.',
  },
  {
    name: 'Grazielli Padilha Vieira',
    role: 'Tech Recruiter | Talent Acquisition',
    relation: 'Hired me for a major project',
    quote:
      'Throughout the process, Gustavo showed commitment, professionalism, and strong frontend ownership with a consistent growth mindset.',
  },
  {
    name: 'Junior Maran',
    role: 'Frontend Software Engineer',
    relation: 'Worked with me on the same team',
    quote:
      'A dedicated professional, always willing to support colleagues and share knowledge. His quality standard stood out on every delivery.',
  },
  {
    name: 'Mateus Badalotti',
    role: 'Senior Software Engineer',
    relation: 'Collaborated in multiple projects',
    quote:
      'Gustavo demonstrates proactivity, adaptability, and teamwork. He communicates effectively and keeps evolving with every challenge.',
  },
];

const recommendationsPt: Recommendation[] = [
  {
    name: 'Tyler Butler',
    role: 'Software Engineer 2 no The Home Depot',
    relation: 'Trabalhou comigo no mesmo time',
    quote:
      'Inovador, dedicado e colaborativo. O Gustavo entregou features em React com qualidade alta e rigor de engenharia constante.',
  },
  {
    name: 'Mike Kerfeld',
    role: 'Sr. Product Manager no The Home Depot',
    relation: 'Atuação conjunta em produto e engenharia',
    quote:
      'Gustavo chegava todos os dias pronto para contribuir. Além de código sólido, também trazia direcionamento técnico quando surgiam desafios.',
  },
  {
    name: 'Haile Lakew',
    role: 'Senior Software Engineer',
    relation: 'Trabalhou comigo no mesmo time',
    quote:
      'Teve onboarding muito rápido em tarefas complexas e ajudou o time a melhorar qualidade, velocidade de entrega e capacidade técnica.',
  },
  {
    name: 'George Guffey',
    role: 'Senior Software Engineer no The Home Depot',
    relation: 'Trabalhou comigo no mesmo time',
    quote:
      'Trabalhar com Gustavo foi um prazer. Comunicação forte, aprendizado rápido e contribuições valiosas em decisões técnicas.',
  },
  {
    name: 'Grazielli Padilha Vieira',
    role: 'Tech Recruiter | Talent Acquisition',
    relation: 'Responsável pela contratação minha',
    quote:
      'Durante todo o processo, Gustavo demonstrou profissionalismo, compromisso e forte responsabilidade técnica no frontend.',
  },
  {
    name: 'Junior Maran',
    role: 'Frontend Software Engineer',
    relation: 'Trabalhou comigo no mesmo time',
    quote:
      'Profissional dedicado, sempre disposto a apoiar colegas e compartilhar conhecimento. O padrão de qualidade nas entregas sempre se destacou.',
  },
  {
    name: 'Mateus Badalotti',
    role: 'Senior Software Engineer',
    relation: 'Colaboração em múltiplos projetos',
    quote:
      'Demonstra proatividade, adaptabilidade e ótimo trabalho em equipe. Evolui de forma consistente e comunica com muita clareza.',
  },
];

export const portfolioDataByLocale: Record<Locale, PortfolioLocaleData> = {
  'en-US': {
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
      { value: '7+ years', label: 'Hands-on product engineering' },
      { value: '5M+', label: 'Daily users supported in fashion e-commerce' },
      {
        value: '600+',
        label: 'Physical stores connected in omnichannel flows',
      },
      {
        value: 'Core Web Vitals',
        label: 'Continuous monitoring and optimization',
      },
    ],
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
      {
        title: 'Cyberattack recovery support at Renner (2021)',
        description:
          'Worked directly on the project during the incident, supporting frontend stabilization and prioritizing critical deliveries for a safe recovery.',
        result:
          'Helped restore operational stability and keep the digital experience running under high pressure.',
      },
      {
        title: 'End-to-end frontend leadership (2023-2024)',
        description:
          'Acted as one of the frontend leads throughout the full project lifecycle, from technical direction at kickoff to final delivery.',
        result:
          'Sustained architectural consistency, delivery predictability, and release quality across the squad.',
      },
      {
        title: 'Legacy-to-modern stack migrations',
        description:
          'Strong experience refactoring and transitioning legacy systems, including migrations from jQuery to React and from Java to Node.js with a BFF layer.',
        result:
          'Reduced maintenance complexity and enabled faster product evolution with modern frontend and backend patterns.',
      },
      {
        title: 'Performance optimization and rendering efficiency',
        description:
          'Led performance refactors using memoization, useCallback, code splitting, and rendering review to improve runtime efficiency.',
        result:
          'Improved LCP, reduced CLS, and delivered faster, more stable user experiences.',
      },
    ],
    recommendations: recommendationsEn,
    education: {
      degree: 'Bachelor of Computer Science',
      duration: '5 years',
      institution: 'URI Erechim University',
      context:
        'URI Erechim is the same university where beecrowd (formerly URI Online Judge) was created.',
      summary:
        'This academic path strengthened my software engineering fundamentals, algorithmic thinking, and problem-solving discipline.',
    },
    aiFocus: {
      summary:
        'I am an AI enthusiast and I am always looking for ways to automate as much as possible to increase team performance.',
      automationFocus:
        'I use AI in day-to-day engineering workflows to speed up delivery while preserving quality and reliability.',
      projectName: 'IACancer',
      projectYear: '2022',
      projectDescription:
        'A skin cancer detector project that demonstrates practical AI application in a real healthcare-oriented problem.',
      projectUrl: 'https://github.com/guztartas/IACancer',
      projectCta: 'View IACancer on GitHub',
    },
    experiences: experiencesEn,
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
    ],
    languages: [
      'Portuguese (Native)',
      'English (Highly proficient)',
      'Spanish (Working knowledge)',
    ],
    contacts: sharedContacts,
    labels: {
      navigation: {
        impact: 'Impact',
        recommendations: 'Recommendations',
        education: 'Education',
        ai: 'AI',
        experience: 'Experience',
        skills: 'Skills',
        contact: 'Contact',
        resume: 'Resume',
      },
      hero: {
        headlineAccent: 'Frontend precision.',
        headlineBase: 'Commerce outcomes at scale.',
        primaryCta: "Let's Build Together",
        secondaryCta: 'Download Resume',
      },
      sections: {
        impactTag: 'Highlighted work',
        impactTitle: 'Selected impact across enterprise commerce products',
        recommendationsTag: 'Peer feedback',
        recommendationsTitle:
          'Recommendations from teammates, leaders, and hiring partners',
        recommendationsSource:
          'All recommendations in this section are also available on my LinkedIn profile.',
        educationTag: 'Education',
        educationTitle: 'Academic foundation in Computer Science',
        aiTag: 'AI mindset',
        aiTitle: 'Automation-first approach with AI',
        experienceTag: 'Career timeline',
        experienceTitle: 'Experience shaping high-traffic products',
        skillsTag: 'Toolkit',
        skillsTitle: 'Frontend-first stack with fullstack depth',
        languagesTag: 'Languages',
        contactTag: 'Open to opportunities',
        contactTitle: "Let's build products users remember",
        contactSummary:
          'Available for senior frontend and fullstack opportunities focused on product impact, performance, and scalable architecture.',
      },
      contacts: {
        whatsapp: 'WhatsApp',
        linkedIn: 'LinkedIn Profile',
        github: 'GitHub Portfolio',
      },
      controls: {
        languageAriaLabel: 'Select language',
        themeAriaLabel: 'Select theme',
        locale: {
          enUS: 'EN-US',
          ptBR: 'PT-BR',
        },
        theme: {
          system: 'Auto',
          light: 'Light',
          dark: 'Dark',
        },
      },
    },
  },
  'pt-BR': {
    person: {
      name: 'Gustavo Tartas',
      role: 'Engenheiro de Software Fullstack Sênior',
      location: 'Erechim, Brasil',
      tagline:
        'Eu projeto e entrego experiências de e-commerce com alta conversão, precisão em frontend, foco em performance e arquitetura limpa.',
    },
    summary:
      'Engenheiro sênior com mais de 7 anos construindo produtos web escaláveis em ambientes de e-commerce de alto tráfego. Forte em React, Next.js, Node.js, otimização de performance e qualidade com testes.',
    metrics: [
      {
        value: '7+ anos',
        label: 'Experiência prática em engenharia de produto',
      },
      {
        value: '5M+',
        label: 'Usuários diários suportados em e-commerce de moda',
      },
      {
        value: '600+',
        label: 'Lojas físicas conectadas em fluxos omnichannel',
      },
      {
        value: 'Core Web Vitals',
        label: 'Monitoramento e otimização contínuos',
      },
    ],
    impact: [
      {
        title: 'Calculadora de compra por dimensão',
        description:
          'Criei uma lógica guiada por tamanho de ambiente para seleção de carpetes com recomendações orientadas por dados.',
        result:
          'Melhorou a usabilidade da customização de produto e reduziu fricção na decisão de compra.',
      },
      {
        title: 'Suporte a vídeo na homepage',
        description:
          'Habilitei carrosséis com mídia mista em uma das páginas mais visitadas do e-commerce americano.',
        result:
          'Aumentou flexibilidade de campanha e engajamento dos usuários para ações de marketing.',
      },
      {
        title: 'Links de pagamento remoto',
        description:
          'Construí links seguros para checkout anônimo de equipes de venda distribuídas no Brasil.',
        result:
          'Expandiu a capacidade de venda remota com conversão mais rápida fora das lojas físicas.',
      },
      {
        title: 'Recuperação pós-ataque cibernético na Renner (2021)',
        description:
          'Atuei diretamente no projeto durante o incidente, apoiando a estabilização do frontend e a priorização de entregas críticas para uma retomada segura.',
        result:
          'Contribuí para a recuperação operacional e para a continuidade da experiência digital em um cenário de alta pressão.',
      },
      {
        title: 'Liderança de frontend de ponta a ponta (2023-2024)',
        description:
          'Fui uma das lideranças de frontend durante todo o ciclo do projeto, da direção técnica no início até o fechamento das entregas.',
        result:
          'Mantive consistência de arquitetura, previsibilidade de entrega e qualidade nas releases do time.',
      },
      {
        title: 'Migração de stack legada para moderna',
        description:
          'Experiência sólida em refatorações e transições de tecnologias antigas para novas, incluindo migrações de jQuery para React e de Java para Node.js com camada BFF.',
        result:
          'Reduziu complexidade de manutenção e acelerou a evolução funcional do produto.',
      },
      {
        title: 'Otimização de performance e eficiência de renderização',
        description:
          'Conduzi refatorações com memoização, useCallback, code splitting e revisão de renderização para elevar a eficiência do frontend.',
        result:
          'Melhoria de LCP, redução de CLS e ganhos visíveis de velocidade e estabilidade.',
      },
    ],
    recommendations: recommendationsPt,
    education: {
      degree: 'Bacharelado em Ciência da Computação',
      duration: '5 anos',
      institution: 'Universidade URI Erechim',
      context:
        'A URI Erechim é a mesma universidade onde nasceu o beecrowd (antigo URI Online Judge).',
      summary:
        'Essa formação fortaleceu minha base em engenharia de software, pensamento algorítmico e resolução de problemas complexos.',
    },
    aiFocus: {
      summary:
        'Sou entusiasta por IA e estou sempre buscando automatizar o que for possível para aumentar a performance do time.',
      automationFocus:
        'Uso IA no fluxo de engenharia do dia a dia para acelerar entregas sem abrir mão de qualidade e confiabilidade.',
      projectName: 'IACancer',
      projectYear: '2022',
      projectDescription:
        'Projeto de detector de câncer de pele que desenvolvi para aplicar IA em um problema real orientado à saúde.',
      projectUrl: 'https://github.com/guztartas/IACancer',
      projectCta: 'Ver IACancer no GitHub',
    },
    experiences: experiencesPt,
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
        title: 'Estado e Arquitetura',
        items: [
          'Redux-Saga',
          'MobX',
          'Context API',
          'Zustand',
          'Arquitetura Limpa',
        ],
      },
      {
        title: 'Backend e APIs',
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
        title: 'Qualidade e IA',
        items: [
          'Jest',
          'React Testing Library',
          'GitHub Copilot',
          'OpenAI APIs',
          'MCP',
          'Otimização de CI/CD',
        ],
      },
    ],
    languages: [
      'Português (Nativo)',
      'Inglês (Alta proficiência)',
      'Espanhol (Nível de trabalho)',
    ],
    contacts: sharedContacts,
    labels: {
      navigation: {
        impact: 'Impacto',
        recommendations: 'Indicações',
        education: 'Formação',
        ai: 'IA',
        experience: 'Experiência',
        skills: 'Skills',
        contact: 'Contato',
        resume: 'Currículo',
      },
      hero: {
        headlineAccent: 'Precisão em frontend.',
        headlineBase: 'Resultados de e-commerce em escala.',
        primaryCta: 'Vamos Construir Juntos',
        secondaryCta: 'Baixar Currículo',
      },
      sections: {
        impactTag: 'Trabalhos em destaque',
        impactTitle: 'Impacto selecionado em produtos enterprise de e-commerce',
        recommendationsTag: 'Feedback de pares',
        recommendationsTitle:
          'Indicações de colegas, lideranças e parceiros de contratação',
        recommendationsSource:
          'Todas as indicações desta seção também estão disponíveis no meu perfil do LinkedIn.',
        educationTag: 'Formação',
        educationTitle: 'Base acadêmica em Ciência da Computação',
        aiTag: 'Entusiasta de IA',
        aiTitle: 'Automação com IA para elevar performance',
        experienceTag: 'Linha do tempo',
        experienceTitle: 'Experiência em produtos de alto tráfego',
        skillsTag: 'Ferramentas',
        skillsTitle: 'Stack frontend-first com profundidade fullstack',
        languagesTag: 'Idiomas',
        contactTag: 'Aberto a oportunidades',
        contactTitle: 'Vamos construir produtos memoráveis',
        contactSummary:
          'Disponível para oportunidades sênior em frontend e fullstack com foco em impacto de produto, performance e arquitetura escalável.',
      },
      contacts: {
        whatsapp: 'WhatsApp',
        linkedIn: 'Perfil no LinkedIn',
        github: 'Portfólio no GitHub',
      },
      controls: {
        languageAriaLabel: 'Selecionar idioma',
        themeAriaLabel: 'Selecionar tema',
        locale: {
          enUS: 'EN-US',
          ptBR: 'PT-BR',
        },
        theme: {
          system: 'Auto',
          light: 'Claro',
          dark: 'Escuro',
        },
      },
    },
  },
};
