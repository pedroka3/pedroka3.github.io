window.PORTFOLIO_DATA = {

  profile: {
    name: 'Pedro Scomparim Pelizaro',
    shortName: 'pedro pelizaro',
    availability: 'Aberto a novas oportunidades · Campinas, SP',

    /* O primeiro item é o que aparece antes da animação começar a digitar —
       ou seja, a primeira coisa que o recrutador lê. */
    roles: [
      'Web Design & Front-end',
      'Analista de Suporte Técnico',
      'Estudante de Sistemas de Informação',
      'Apaixonado por tecnologia e redes'
    ],

    bio: 'Busco crescimento e desenvolvimento contínuo na área de tecnologia, enfrentando ' +
         'desafios que expandam meus conhecimentos técnicos e profissionais. Atuo sempre com ' +
         'foco em qualidade e na resolução eficiente das demandas, priorizando soluções bem ' +
         'executadas, seguras e duradouras.',

    stats: [
      { value: 'C1',   label: 'inglês avançado' },
      { value: '13',   label: 'certificações' },
      { value: '2027', label: 'conclusão do bacharelado' }
    ],

    highlights: []
  },

  experience: [
    {
      period: '08/2025 — Atual',
      role: 'Analista de Suporte Técnico',
      company: 'Maminfo · Campinas, SP',
      bullets: [
        'Dou suporte aos técnicos de campo durante o atendimento de chamados, analisando e resolvendo incidentes na manutenção de equipamentos e redes dos clientes.',
        'Realizo configuração e troubleshooting de roteadores, além da instalação, configuração e validação de Access Points.',
        'Presto orientações técnicas em tempo real, garantindo o correto funcionamento da infraestrutura de rede, a padronização dos atendimentos e a agilidade na resolução das demandas.'
      ],
      tags: ['Suporte técnico', 'Redes', 'Roteadores', 'Access Points', 'Troubleshooting']
    },
    {
      period: 'Anterior a 08/2025',
      role: 'Auxiliar de Produção',
      company: 'Digimetta Placas',
      bullets: [
        'Realizei atividades de finalização e refinamento de placas, garantindo o acabamento dentro dos padrões definidos.',
        'Verifiquei a qualidade dos produtos, assegurando que atendessem aos padrões estabelecidos e às solicitações específicas dos clientes.'
      ],
      tags: ['Controle de qualidade', 'Produção', 'Atenção aos detalhes']
    }
  ],

  education: [
    {
      period: '01/2024 — 12/2027',
      course: 'Bacharelado em Sistemas de Informação',
      school: 'UNIP · Campinas, SP',
      status: 'Cursando'
    },
    {
      period: '01/2021 — 12/2023',
      course: 'Técnico em Informática',
      school: 'Colégio Politécnico Bento Quirino · Campinas, SP',
      status: 'Concluído'
    },
    {
      period: '01/2021 — 12/2023',
      course: 'Técnico em Logística',
      school: 'Colégio Politécnico Bento Quirino · Campinas, SP',
      status: 'Concluído'
    }
  ],

  certifications: [

    { name: 'CCNA: Introduction to Networks', issuer: 'Cisco Networking Academy', url: null },
    { name: 'CCNA: Switching, Routing, and Wireless Essentials', issuer: 'Cisco Networking Academy', url: null },
    { name: 'CCNA: Enterprise Networking, Security, and Automation', issuer: 'Cisco Networking Academy', url: null },
    { name: 'Networking Essentials', issuer: 'Cisco Networking Academy', url: null },
    { name: 'FCF — Fortinet Certified Fundamentals in Cybersecurity', issuer: 'Fortinet', url: null },
    { name: 'FCA — Fortinet Certified Associate in Cybersecurity', issuer: 'Fortinet', url: null },
    { name: 'NSE 1 — Network Security Associate', issuer: 'Fortinet', url: null },
    { name: 'NSE 2 — Network Security Associate', issuer: 'Fortinet', url: null },                                

    { name: 'HTML5', issuer: 'Curso em Vídeo', url: null },
    { name: 'CSS3', issuer: 'Curso em Vídeo', url: null },
    { name: 'Python', issuer: 'Curso em Vídeo', url: null },
    { name: 'Gestão Ágil: Gestão de Processos', issuer: 'Alura', url: null },
    { name: 'Product Management: agilize o desenvolvimento de produtos', issuer: 'Alura', url: null }
  ],

  /* `url` é o destino do card inteiro — aponta para o site publicado do projeto.
     Esses endereços só respondem depois de ativar o GitHub Pages em cada
     repositório (Settings > Pages > branch main, pasta / (root)). Como o site de
     cada projeto está dentro de uma subpasta do repositório, a subpasta faz parte
     da URL. Para mostrar também o código, basta preencher `repo` com o link do
     GitHub que o card ganha um segundo link.

     TROCAR A CAPA PELO PRINT REAL: salve o arquivo em assets/capas/ e mude só
     o `image`. Capture em 1440px de largura e recorte 16:9 do topo da página. */
  projects: [
    {
      year: '2026',
      title: 'Raiz Café — identidade visual e site institucional',
      description: 'Uma marca de café criada do zero — manual, paleta e tom de voz — ' +
                   'e o site institucional construído em cima dela.',
      tags: ['Identidade visual', 'UI/UX', 'Design System', 'HTML5', 'CSS3', 'JavaScript'],
      image: 'assets/capas/raiz-cafe.svg',
      imageAlt: '',
      url: 'https://pedroka3.github.io/Raiz-Caf-identidade-visual-e-site-institucional/raiz-cafe/',
      repo: null,
      extra: {
        label: 'Manual de marca',
        url: 'https://pedroka3.github.io/Raiz-Caf-identidade-visual-e-site-institucional/raiz-cafe/marca.html'
      }
    },
    {
      year: '2026',
      title: 'Vértice TI — landing page de captação',
      description: 'Landing page de captação com duas versões do título em teste A/B ' +
                   'e a conversão medida de ponta a ponta.',
      tags: ['Landing Page', 'CRO', 'SEO', 'UI/UX', 'HTML5', 'CSS3', 'JavaScript'],
      image: 'assets/capas/vertice-ti.svg',
      imageAlt: '',
      url: 'https://pedroka3.github.io/V-rtice-TI-landing-page-de-capta-o/vertice-ti/',
      repo: null,
      extra: { label: 'Ver variante B', url: null }  /* [EDITAR] .../vertice-ti/?v=b */
    },
    {
      year: '2026',
      title: 'Encontro Tech Campinas — site de evento',
      description: 'Site de um encontro de dois dias, com contagem regressiva, galeria ' +
                   'navegável por teclado e agenda em abas.',
      tags: ['JavaScript', 'Acessibilidade', 'Motion', 'SEO', 'HTML5', 'CSS3'],
      image: 'assets/capas/encontro-tech.svg',
      imageAlt: '',
      url: 'https://pedroka3.github.io/Encontro-Tech-Campinas-site-de-evento/encontro-tech-campinas/',
      repo: null
    }
  ],

  skills: [
    { title: 'Design & Web', items: ['Figma', 'UI/UX', 'Identidade visual', 'Design System', 'Acessibilidade (WCAG)', 'SEO técnico', 'CRO', 'Design responsivo', 'WordPress / Elementor', 'Webflow'] },
    { title: 'Linguagens — intermediário', items: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Java', 'SQL', 'Programação Orientada a Objetos'] },
    { title: 'Linguagens — básico', items: ['C', 'C#', 'C++', 'PHP'] },
    { title: 'Suporte & Infraestrutura', items: ['Suporte e acesso remoto', 'Troubleshooting', 'Roteadores', 'Access Points', 'Redes', 'Configuração de hardware', 'Configuração de software'] },
    { title: 'Ferramentas & Gestão', items: ['Pacote Office', 'Power BI', 'Gestão Ágil', 'Product Management'] },
    { title: 'Competências', items: ['Comunicação oral e escrita', 'Trabalho em equipe', 'Aprendizado rápido', 'Foco em qualidade'] },
    { title: 'Idiomas', items: ['Português — nativo', 'Inglês — C1 avançado'] }
  ],

  contact: {
    email: 'pedroscomparimpelizaro@gmail.com',
    links: [
      { label: 'WhatsApp', url: 'https://wa.me/5519996595014' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/pedro-scomparim-pelizaro-58692228b/' },
      { label: 'Currículo', url: 'assets/curriculo.pdf' }
    ]
  }
};
