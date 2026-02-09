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

export type PortfolioLabels = {
  navigation: {
    impact: string;
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
    ],
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
    ],
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
