/* Campos traduzíveis são objetos { pt, en, es, de, fr }.
   Campos que NÃO se traduzem continuam texto simples: nomes de empresas e
   escolas, títulos oficiais de certificação, tecnologias, datas e endereços. */

window.PORTFOLIO_DATA = {

  profile: {
    name: 'Pedro Scomparim Pelizaro',
    shortName: 'pedro pelizaro',

    availability: {
      pt: 'Aberto a novas oportunidades · Campinas, SP',
      en: 'Open to new opportunities · Campinas, Brazil',
      es: 'Abierto a nuevas oportunidades · Campinas, Brasil',
      de: 'Offen für neue Chancen · Campinas, Brasilien',
      fr: 'Ouvert à de nouvelles opportunités · Campinas, Brésil'
    },

    /* O primeiro item é o que aparece antes da animação começar a digitar —
       ou seja, a primeira coisa que o recrutador lê. */
    roles: {
      pt: ['Web Design & Front-end', 'Analista de Suporte Técnico', 'Estudante de Sistemas de Informação', 'Apaixonado por tecnologia e redes'],
      en: ['Web Design & Front-end', 'Technical Support Analyst', 'Information Systems student', 'Passionate about technology and networks'],
      es: ['Web Design & Front-end', 'Analista de Soporte Técnico', 'Estudiante de Sistemas de Información', 'Apasionado por la tecnología y las redes'],
      de: ['Web Design & Front-end', 'IT-Support-Analyst', 'Student der Wirtschaftsinformatik', 'Begeistert von Technik und Netzwerken'],
      fr: ['Web Design & Front-end', 'Analyste support technique', 'Étudiant en systèmes d’information', 'Passionné de technologie et de réseaux']
    },

    bio: {
      pt: 'Busco crescimento e desenvolvimento contínuo na área de tecnologia, enfrentando desafios que expandam meus conhecimentos técnicos e profissionais. Atuo sempre com foco em qualidade e na resolução eficiente das demandas, priorizando soluções bem executadas, seguras e duradouras.',
      en: 'I am looking for continuous growth in technology, taking on challenges that broaden my technical and professional knowledge. I work with a focus on quality and on solving demands efficiently, favoring solutions that are well built, secure and made to last.',
      es: 'Busco crecimiento y desarrollo continuo en el área de tecnología, asumiendo desafíos que amplíen mis conocimientos técnicos y profesionales. Trabajo siempre con foco en la calidad y en resolver las demandas de forma eficiente, priorizando soluciones bien ejecutadas, seguras y duraderas.',
      de: 'Ich suche kontinuierliches Wachstum in der IT und stelle mich Aufgaben, die mein fachliches und berufliches Wissen erweitern. Dabei arbeite ich mit Fokus auf Qualität und auf die effiziente Lösung von Anfragen — mit Lösungen, die sauber umgesetzt, sicher und langlebig sind.',
      fr: 'Je recherche une progression continue dans la technologie, en relevant des défis qui élargissent mes connaissances techniques et professionnelles. Je travaille avec un souci de qualité et de résolution efficace des demandes, en privilégiant des solutions bien construites, sûres et durables.'
    },

    stats: [
      {
        value: 'C1',
        label: { pt: 'inglês avançado', en: 'advanced English', es: 'inglés avanzado', de: 'Englisch, fortgeschritten', fr: 'anglais avancé' }
      },
      {
        value: '13',
        label: { pt: 'certificações', en: 'certifications', es: 'certificaciones', de: 'Zertifizierungen', fr: 'certifications' }
      },
      {
        value: '2027',
        label: { pt: 'conclusão do bacharelado', en: "bachelor's degree completion", es: 'finalización de la licenciatura', de: 'Bachelor-Abschluss', fr: 'obtention de la licence' }
      }
    ],

    highlights: []
  },

  experience: [
    {
      period: {
        pt: '08/2025 — Atual', en: '08/2025 — Present', es: '08/2025 — Actualidad',
        de: '08/2025 — Heute', fr: '08/2025 — Aujourd’hui'
      },
      role: {
        pt: 'Analista de Suporte Técnico', en: 'Technical Support Analyst',
        es: 'Analista de Soporte Técnico', de: 'IT-Support-Analyst', fr: 'Analyste support technique'
      },
      company: 'Maminfo · Campinas, SP',
      bullets: {
        pt: [
          'Dou suporte aos técnicos de campo durante o atendimento de chamados, analisando e resolvendo incidentes na manutenção de equipamentos e redes dos clientes.',
          'Realizo configuração e troubleshooting de roteadores, além da instalação, configuração e validação de Access Points.',
          'Presto orientações técnicas em tempo real, garantindo o correto funcionamento da infraestrutura de rede, a padronização dos atendimentos e a agilidade na resolução das demandas.'
        ],
        en: [
          'I support field technicians during service calls, analysing and resolving incidents in the maintenance of client equipment and networks.',
          'I configure and troubleshoot routers, and handle the installation, configuration and validation of Access Points.',
          'I give technical guidance in real time, keeping the network infrastructure running correctly, standardising how calls are handled and speeding up resolution.'
        ],
        es: [
          'Doy soporte a los técnicos de campo durante la atención de incidencias, analizando y resolviendo incidentes en el mantenimiento de equipos y redes de los clientes.',
          'Realizo configuración y troubleshooting de routers, además de la instalación, configuración y validación de puntos de acceso.',
          'Presto orientación técnica en tiempo real, garantizando el correcto funcionamiento de la infraestructura de red, la estandarización de las atenciones y la agilidad en la resolución.'
        ],
        de: [
          'Ich unterstütze Außendiensttechniker bei Serviceeinsätzen und analysiere und löse Störungen bei der Wartung von Kundengeräten und -netzwerken.',
          'Ich konfiguriere Router und behebe Fehler, ebenso übernehme ich Installation, Konfiguration und Validierung von Access Points.',
          'Ich gebe technische Hilfestellung in Echtzeit und sorge so für den störungsfreien Betrieb der Netzwerkinfrastruktur, einheitliche Abläufe und eine schnelle Bearbeitung.'
        ],
        fr: [
          'J’assiste les techniciens de terrain pendant les interventions, en analysant et en résolvant les incidents liés à la maintenance des équipements et des réseaux clients.',
          'Je configure et dépanne des routeurs, et je réalise l’installation, la configuration et la validation de points d’accès.',
          'Je fournis des conseils techniques en temps réel, garantissant le bon fonctionnement de l’infrastructure réseau, l’uniformité des interventions et la rapidité de résolution.'
        ]
      },
      tags: {
        pt: ['Suporte técnico', 'Redes', 'Roteadores', 'Access Points', 'Troubleshooting'],
        en: ['Technical support', 'Networks', 'Routers', 'Access Points', 'Troubleshooting'],
        es: ['Soporte técnico', 'Redes', 'Routers', 'Access Points', 'Troubleshooting'],
        de: ['IT-Support', 'Netzwerke', 'Router', 'Access Points', 'Troubleshooting'],
        fr: ['Support technique', 'Réseaux', 'Routeurs', 'Access Points', 'Troubleshooting']
      }
    },
    {
      period: {
        pt: 'Anterior a 08/2025', en: 'Before 08/2025', es: 'Antes de 08/2025',
        de: 'Vor 08/2025', fr: 'Avant 08/2025'
      },
      role: {
        pt: 'Auxiliar de Produção', en: 'Production Assistant',
        es: 'Auxiliar de Producción', de: 'Produktionsmitarbeiter', fr: 'Agent de production'
      },
      company: 'Digimetta Placas',
      bullets: {
        pt: [
          'Realizei atividades de finalização e refinamento de placas, garantindo o acabamento dentro dos padrões definidos.',
          'Verifiquei a qualidade dos produtos, assegurando que atendessem aos padrões estabelecidos e às solicitações específicas dos clientes.'
        ],
        en: [
          'I carried out finishing and refinement work on signage boards, keeping the result within the defined standards.',
          'I checked product quality, making sure each piece met the established standards and the specific requests of each client.'
        ],
        es: [
          'Realicé actividades de acabado y refinamiento de placas, garantizando el resultado dentro de los estándares definidos.',
          'Verifiqué la calidad de los productos, asegurando que cumplieran los estándares establecidos y las solicitudes específicas de los clientes.'
        ],
        de: [
          'Ich führte Endbearbeitung und Feinarbeiten an Schildern aus und hielt dabei die vorgegebenen Standards ein.',
          'Ich prüfte die Produktqualität und stellte sicher, dass jedes Stück den Vorgaben und den besonderen Kundenwünschen entsprach.'
        ],
        fr: [
          'J’ai réalisé les travaux de finition et de retouche des plaques, en respectant les standards définis.',
          'J’ai contrôlé la qualité des produits, en veillant à ce qu’ils répondent aux normes établies et aux demandes précises des clients.'
        ]
      },
      tags: {
        pt: ['Controle de qualidade', 'Produção', 'Atenção aos detalhes'],
        en: ['Quality control', 'Production', 'Attention to detail'],
        es: ['Control de calidad', 'Producción', 'Atención al detalle'],
        de: ['Qualitätskontrolle', 'Produktion', 'Sorgfalt im Detail'],
        fr: ['Contrôle qualité', 'Production', 'Souci du détail']
      }
    }
  ],

  education: [
    {
      period: '01/2024 — 12/2027',
      course: {
        pt: 'Bacharelado em Sistemas de Informação', en: 'Bachelor in Information Systems',
        es: 'Licenciatura en Sistemas de Información', de: 'Bachelor in Wirtschaftsinformatik',
        fr: 'Licence en systèmes d’information'
      },
      school: 'UNIP · Campinas, SP',
      status: { pt: 'Cursando', en: 'In progress', es: 'En curso', de: 'Laufend', fr: 'En cours' }
    },
    {
      period: '01/2021 — 12/2023',
      course: {
        pt: 'Técnico em Informática', en: 'Technical degree in Information Technology',
        es: 'Técnico en Informática', de: 'Technische Ausbildung in Informatik',
        fr: 'Diplôme technique en informatique'
      },
      school: 'Colégio Politécnico Bento Quirino · Campinas, SP',
      status: { pt: 'Concluído', en: 'Completed', es: 'Finalizado', de: 'Abgeschlossen', fr: 'Terminé' }
    },
    {
      period: '01/2021 — 12/2023',
      course: {
        pt: 'Técnico em Logística', en: 'Technical degree in Logistics',
        es: 'Técnico en Logística', de: 'Technische Ausbildung in Logistik',
        fr: 'Diplôme technique en logistique'
      },
      school: 'Colégio Politécnico Bento Quirino · Campinas, SP',
      status: { pt: 'Concluído', en: 'Completed', es: 'Finalizado', de: 'Abgeschlossen', fr: 'Terminé' }
    }
  ],

  /* Títulos oficiais: não são traduzidos em nenhum idioma. */
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
     Para mostrar também o código, basta preencher `repo` com o link do GitHub
     que o card ganha um segundo link.

     TROCAR A CAPA PELO PRINT REAL: salve o arquivo em assets/capas/ e mude só
     o `image`. Capture em 1440px de largura e recorte 16:9 do topo da página. */
  projects: [
    {
      year: '2026',
      title: {
        pt: 'Raiz Café — identidade visual e site institucional',
        en: 'Raiz Café — brand identity and company website',
        es: 'Raiz Café — identidad visual y sitio institucional',
        de: 'Raiz Café — Markenidentität und Unternehmenswebsite',
        fr: 'Raiz Café — identité visuelle et site institutionnel'
      },
      description: {
        pt: 'Uma marca de café criada do zero — manual, paleta e tom de voz — e o site institucional construído em cima dela.',
        en: 'A coffee brand built from scratch — guidelines, palette and tone of voice — and the company website built on top of it.',
        es: 'Una marca de café creada desde cero — manual, paleta y tono de voz — y el sitio institucional construido sobre ella.',
        de: 'Eine von Grund auf entwickelte Kaffeemarke — Markenhandbuch, Farbpalette und Tonalität — und die darauf aufbauende Unternehmenswebsite.',
        fr: 'Une marque de café créée de zéro — charte, palette et ton de voix — et le site institutionnel construit dessus.'
      },
      tags: {
        pt: ['Identidade visual', 'UI/UX', 'Design System', 'HTML5', 'CSS3', 'JavaScript'],
        en: ['Brand identity', 'UI/UX', 'Design System', 'HTML5', 'CSS3', 'JavaScript'],
        es: ['Identidad visual', 'UI/UX', 'Design System', 'HTML5', 'CSS3', 'JavaScript'],
        de: ['Markenidentität', 'UI/UX', 'Design System', 'HTML5', 'CSS3', 'JavaScript'],
        fr: ['Identité visuelle', 'UI/UX', 'Design System', 'HTML5', 'CSS3', 'JavaScript']
      },
      image: 'assets/capas/raiz-cafe.svg',
      imageAlt: '',
      url: 'https://pedroka3.github.io/Raiz-Caf-identidade-visual-e-site-institucional/raiz-cafe/',
      repo: null,
      extra: {
        label: {
          pt: 'Manual de marca', en: 'Brand guidelines', es: 'Manual de marca',
          de: 'Markenhandbuch', fr: 'Charte de marque'
        },
        url: 'https://pedroka3.github.io/Raiz-Caf-identidade-visual-e-site-institucional/raiz-cafe/marca.html'
      }
    },
    {
      year: '2026',
      title: {
        pt: 'Vértice TI — landing page de captação',
        en: 'Vértice TI — lead generation landing page',
        es: 'Vértice TI — landing page de captación',
        de: 'Vértice TI — Landingpage zur Leadgewinnung',
        fr: 'Vértice TI — landing page d’acquisition'
      },
      description: {
        pt: 'Landing page de captação com duas versões do título em teste A/B e a conversão medida de ponta a ponta.',
        en: 'A lead generation landing page with two headline versions in an A/B test and conversion measured end to end.',
        es: 'Landing page de captación con dos versiones del título en prueba A/B y la conversión medida de punta a punta.',
        de: 'Eine Landingpage zur Leadgewinnung mit zwei Headline-Varianten im A/B-Test und durchgängig gemessener Conversion.',
        fr: 'Une landing page d’acquisition avec deux versions du titre en test A/B et la conversion mesurée de bout en bout.'
      },
      tags: {
        pt: ['Landing Page', 'CRO', 'SEO', 'UI/UX', 'HTML5', 'CSS3', 'JavaScript'],
        en: ['Landing Page', 'CRO', 'SEO', 'UI/UX', 'HTML5', 'CSS3', 'JavaScript'],
        es: ['Landing Page', 'CRO', 'SEO', 'UI/UX', 'HTML5', 'CSS3', 'JavaScript'],
        de: ['Landing Page', 'CRO', 'SEO', 'UI/UX', 'HTML5', 'CSS3', 'JavaScript'],
        fr: ['Landing Page', 'CRO', 'SEO', 'UI/UX', 'HTML5', 'CSS3', 'JavaScript']
      },
      image: 'assets/capas/vertice-ti.svg',
      imageAlt: '',
      url: 'https://pedroka3.github.io/V-rtice-TI-landing-page-de-capta-o/vertice-ti/',
      repo: null,
      extra: {
        label: { pt: 'Ver variante B', en: 'See variant B', es: 'Ver variante B', de: 'Variante B ansehen', fr: 'Voir la variante B' },
        url: null
      }
    },
    {
      year: '2026',
      title: {
        pt: 'Encontro Tech Campinas — site de evento',
        en: 'Encontro Tech Campinas — event website',
        es: 'Encontro Tech Campinas — sitio de evento',
        de: 'Encontro Tech Campinas — Event-Website',
        fr: 'Encontro Tech Campinas — site d’événement'
      },
      description: {
        pt: 'Site de um encontro de dois dias, com contagem regressiva, galeria navegável por teclado e agenda em abas.',
        en: 'Website for a two-day conference, with a countdown, a keyboard-navigable gallery and a tabbed schedule.',
        es: 'Sitio de un encuentro de dos días, con cuenta regresiva, galería navegable por teclado y agenda en pestañas.',
        de: 'Website für eine zweitägige Konferenz, mit Countdown, per Tastatur bedienbarer Galerie und Programm in Reitern.',
        fr: 'Site d’une rencontre de deux jours, avec compte à rebours, galerie navigable au clavier et programme en onglets.'
      },
      tags: {
        pt: ['JavaScript', 'Acessibilidade', 'Motion', 'SEO', 'HTML5', 'CSS3'],
        en: ['JavaScript', 'Accessibility', 'Motion', 'SEO', 'HTML5', 'CSS3'],
        es: ['JavaScript', 'Accesibilidad', 'Motion', 'SEO', 'HTML5', 'CSS3'],
        de: ['JavaScript', 'Barrierefreiheit', 'Motion', 'SEO', 'HTML5', 'CSS3'],
        fr: ['JavaScript', 'Accessibilité', 'Motion', 'SEO', 'HTML5', 'CSS3']
      },
      image: 'assets/capas/encontro-tech.svg',
      imageAlt: '',
      url: 'https://pedroka3.github.io/Encontro-Tech-Campinas-site-de-evento/encontro-tech-campinas/',
      repo: null
    }
  ],

  skills: [
    {
      title: { pt: 'Design & Web', en: 'Design & Web', es: 'Diseño y Web', de: 'Design & Web', fr: 'Design et Web' },
      items: {
        pt: ['Figma', 'UI/UX', 'Identidade visual', 'Design System', 'Acessibilidade (WCAG)', 'SEO técnico', 'CRO', 'Design responsivo', 'WordPress / Elementor', 'Webflow'],
        en: ['Figma', 'UI/UX', 'Brand identity', 'Design System', 'Accessibility (WCAG)', 'Technical SEO', 'CRO', 'Responsive design', 'WordPress / Elementor', 'Webflow'],
        es: ['Figma', 'UI/UX', 'Identidad visual', 'Design System', 'Accesibilidad (WCAG)', 'SEO técnico', 'CRO', 'Diseño responsivo', 'WordPress / Elementor', 'Webflow'],
        de: ['Figma', 'UI/UX', 'Markenidentität', 'Design System', 'Barrierefreiheit (WCAG)', 'Technisches SEO', 'CRO', 'Responsives Design', 'WordPress / Elementor', 'Webflow'],
        fr: ['Figma', 'UI/UX', 'Identité visuelle', 'Design System', 'Accessibilité (WCAG)', 'SEO technique', 'CRO', 'Design responsive', 'WordPress / Elementor', 'Webflow']
      }
    },
    {
      title: {
        pt: 'Linguagens — intermediário', en: 'Programming languages — intermediate', es: 'Lenguajes — intermedio',
        de: 'Programmiersprachen — Mittelstufe', fr: 'Langages — intermédiaire'
      },
      items: {
        pt: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Java', 'SQL', 'Programação Orientada a Objetos'],
        en: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Java', 'SQL', 'Object-Oriented Programming'],
        es: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Java', 'SQL', 'Programación Orientada a Objetos'],
        de: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Java', 'SQL', 'Objektorientierte Programmierung'],
        fr: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Java', 'SQL', 'Programmation orientée objet']
      }
    },
    {
      title: {
        pt: 'Linguagens — básico', en: 'Programming languages — basic', es: 'Lenguajes — básico',
        de: 'Programmiersprachen — Grundlagen', fr: 'Langages — notions'
      },
      items: ['C', 'C#', 'C++', 'PHP']
    },
    {
      title: {
        pt: 'Suporte & Infraestrutura', en: 'Support & Infrastructure', es: 'Soporte e Infraestructura',
        de: 'Support & Infrastruktur', fr: 'Support et infrastructure'
      },
      items: {
        pt: ['Suporte e acesso remoto', 'Troubleshooting', 'Roteadores', 'Access Points', 'Redes', 'Configuração de hardware', 'Configuração de software'],
        en: ['Remote support and access', 'Troubleshooting', 'Routers', 'Access Points', 'Networks', 'Hardware setup', 'Software setup'],
        es: ['Soporte y acceso remoto', 'Troubleshooting', 'Routers', 'Access Points', 'Redes', 'Configuración de hardware', 'Configuración de software'],
        de: ['Fernsupport und Fernzugriff', 'Troubleshooting', 'Router', 'Access Points', 'Netzwerke', 'Hardware-Konfiguration', 'Software-Konfiguration'],
        fr: ['Support et accès à distance', 'Troubleshooting', 'Routeurs', 'Access Points', 'Réseaux', 'Configuration matérielle', 'Configuration logicielle']
      }
    },
    {
      title: {
        pt: 'Ferramentas & Gestão', en: 'Tools & Management', es: 'Herramientas y Gestión',
        de: 'Werkzeuge & Management', fr: 'Outils et gestion'
      },
      items: {
        pt: ['Pacote Office', 'Power BI', 'Gestão Ágil', 'Product Management'],
        en: ['Microsoft Office', 'Power BI', 'Agile management', 'Product Management'],
        es: ['Paquete Office', 'Power BI', 'Gestión Ágil', 'Product Management'],
        de: ['Microsoft Office', 'Power BI', 'Agiles Management', 'Product Management'],
        fr: ['Pack Office', 'Power BI', 'Gestion agile', 'Product Management']
      }
    },
    {
      title: { pt: 'Competências', en: 'Soft skills', es: 'Competencias', de: 'Kompetenzen', fr: 'Qualités personnelles' },
      items: {
        pt: ['Comunicação oral e escrita', 'Trabalho em equipe', 'Aprendizado rápido', 'Foco em qualidade'],
        en: ['Spoken and written communication', 'Teamwork', 'Fast learner', 'Focus on quality'],
        es: ['Comunicación oral y escrita', 'Trabajo en equipo', 'Aprendizaje rápido', 'Foco en la calidad'],
        de: ['Mündliche und schriftliche Kommunikation', 'Teamarbeit', 'Schnelle Auffassungsgabe', 'Qualitätsbewusstsein'],
        fr: ['Communication orale et écrite', 'Travail en équipe', 'Apprentissage rapide', 'Exigence de qualité']
      }
    },
    {
      title: { pt: 'Idiomas', en: 'Languages', es: 'Idiomas', de: 'Sprachen', fr: 'Langues' },
      items: {
        pt: ['Português — nativo', 'Inglês — C1 avançado'],
        en: ['Portuguese — native', 'English — C1 advanced'],
        es: ['Portugués — nativo', 'Inglés — C1 avanzado'],
        de: ['Portugiesisch — Muttersprache', 'Englisch — C1 fortgeschritten'],
        fr: ['Portugais — langue maternelle', 'Anglais — C1 avancé']
      }
    }
  ],

  contact: {
    email: 'pedroscomparimpelizaro@gmail.com',
    links: [
      { label: 'WhatsApp', url: 'https://wa.me/5519996595014' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/pedro-scomparim-pelizaro-58692228b/' },
      {
        /* O PDF está em português; só o rótulo do botão muda de idioma. */
        label: { pt: 'Currículo', en: 'Résumé (PT)', es: 'Currículum (PT)', de: 'Lebenslauf (PT)', fr: 'CV (PT)' },
        url: 'assets/curriculo.pdf'
      }
    ]
  }
};
