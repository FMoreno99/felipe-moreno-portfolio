const PORTFOLIO_DATA = {
  
  projects: [
    {
      id: "educahost",
      semester: "1º Semestre • DSM FATEC",
      category: "academico",
      title: "EducaHost",
      subtitle: "Plataforma Web de Apoio Educacional e Hospedagem de Conteúdo Acadêmico",
      shortDescription: "Site de apoio educacional para compartilhar materiais e atividades acadêmicas.",
      fullDescription: "Elaborei documentos do projeto e ajudei a criar atividades e diagramas.",
      technologies: ["HTML5 Semântico", "CSS3", "JavaScript", "Figma", "Git & GitHub", "Scrum"],
      repoUrl: "https://github.com/FMoreno99/Educahost",
      liveUrl: "",
      participation: [],
      screenshots: [
        { imagePath: "assets/project-screenshots/educahost-1.png" },
        { imagePath: "assets/project-screenshots/educahost-2.png" },
        { imagePath: "assets/project-screenshots/educahost-3.png" }
      ]
    },
    {
      id: "sagrado-sistema",
      semester: "2º Semestre • DSM FATEC",
      category: "academico",
      title: "Sagrado Sistema",
      subtitle: "Sistema de Gestão Comercial, Pedidos Personalizados e Controle Operacional",
      shortDescription: "Sistema de gestão comercial para organizar catálogo, pedidos e atendimento.",
      fullDescription: "Desenvolvi o front-end e atuei como stakeholder do projeto.",
      technologies: ["JavaScript", "Node.js", "HTML5 & CSS3", "MySQL", "Modelagem MER/DER", "Git"],
      repoUrl: "https://github.com/FMoreno99/ProjetoPI2-Sagrado-Sistema",
      liveUrl: "",
      participation: [],
      screenshots: [
        { imagePath: "assets/project-screenshots/sagrado-sistema-1.png" },
        { imagePath: "assets/project-screenshots/sagrado-sistema-2.png" },
        { imagePath: "assets/project-screenshots/sagrado-sistema-3.png" }
      ]
    },
    {
      id: "ecobalance",
      semester: "3º Semestre • DSM FATEC",
      category: "academico",
      title: "EcoBalance",
      subtitle: "Aplicação Desktop para Monitoramento de Sustentabilidade e Gestão Ambiental",
      shortDescription: "Aplicativo desktop em Java para acompanhar informações de sustentabilidade e gestão ambiental.",
      fullDescription: "Atuei no desenvolvimento do front-end.",
      technologies: ["Java", "Java Swing", "CardLayout", "Maven", "NetBeans", "MySQL", "POO"],
      repoUrl: "https://github.com/FMoreno99/EcoBalanceJava",
      liveUrl: "",
      participation: [],
      screenshots: [
        { imagePath: "assets/project-screenshots/ecobalance-1.png" },
        { imagePath: "assets/project-screenshots/ecobalance-2.png" },
        { imagePath: "assets/project-screenshots/ecobalance-3.png" }
      ]
    },
    {
      id: "questoes-e-masmorras",
      semester: "4º Semestre • DSM FATEC",
      category: "academico",
      title: "Questões & Masmorras",
      subtitle: "Plataforma Web Full-Stack Gamificada (RPG) para o Ensino Superior",
      shortDescription: "Plataforma de estudos que combina questões acadêmicas com elementos de RPG.",
      fullDescription: "Atuei no desenvolvimento do front-end.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "REST API", "Figma", "JWT"],
      repoUrl: "",
      liveUrl: "",
      participation: [],
      screenshots: [
        { imagePath: "assets/project-screenshots/questoes-masmorras-1.png" },
        { imagePath: "assets/project-screenshots/questoes-masmorras-2.png" },
        { imagePath: "assets/project-screenshots/questoes-masmorras-3.png" }
      ]
    },
    {
      id: "rapradar",
      semester: "Projeto acadêmico • UNAJ",
      category: "autoral",
      title: "RapRadar",
      subtitle: "Catálogo interativo de música urbana",
      shortDescription: "Aplicação web com curadoria, cronologia e catálogo da cena musical urbana.",
      fullDescription: "Desenvolvi o projeto por completo durante o projeto acadêmico da UNAJ.",
      technologies: ["JavaScript", "HTML", "CSS"],
      repoUrl: "https://github.com/FMoreno99/Rapradar",
      liveUrl: "",
      participation: [],
      screenshots: [
        { imagePath: "assets/project-screenshots/rapradar.png" }
      ]
    },
    {
      id: "placar-volei",
      semester: "Projeto Autoral • Produção em Web-Rádio",
      category: "autoral",
      title: "Placar-Vôlei (Broadcast Scoreboard)",
      subtitle: "Placar Interativo em Tempo Real no Padrão Gráfico da Superliga para Transmissões Esportivas",
      shortDescription: "Aplicação web criada para uso real nas transmissões da web-rádio onde atuo, com alternância de temas (Masculino/Feminino), controle de sets, pontos e saque.",
      fullDescription: "Desenvolvi o projeto por completo e criei um layout de placar para as transmissões da rádio.",
      technologies: ["HTML5", "CSS3 Animations", "JavaScript Vanilla", "Broadcast UI", "OBS Overlay", "GitHub Pages"],
      repoUrl: "https://github.com/FMoreno99/placar-volei",
      liveUrl: "https://fmoreno99.github.io/placar-volei/",
      participation: [],
      screenshots: [
        { imagePath: "assets/project-screenshots/placar-volei.png" }
      ]
    },
    {
      id: "relogio-sports",
      semester: "Projeto Profissional • Web-Rádio",
      projectTypeLabel: "PROFISSIONAL",
      category: "autoral",
      title: "Projeto - Web Rádio Msports",
      subtitle: "Cronômetro e Temporizador de Precisão para Cobertura e Jornadas Esportivas",
      shortDescription: "Ferramenta web de cronometragem esportiva e controle de tempo de jogo pensada para cabines de transmissão e acompanhamento tático.",
      fullDescription: "Desenvolvi o layout completo do relógio esportivo utilizado na Web Rádio Msports.",
      technologies: ["HTML5", "CSS3", "JavaScript (Timing API)", "UI Responsiva", "Git & GitHub"],
      repoUrl: "https://github.com/FMoreno99/relogio-sports",
      liveUrl: "",
      participation: [],
      screenshots: [
        { imagePath: "assets/project-screenshots/relogio-sports.png" }
      ]
    },
    {
      id: "coracao-gravado",
      semester: "Projeto Profissional",
      projectTypeLabel: "PROFISSIONAL",
      category: "autoral",
      title: "Projeto - Coração Gravado (Site)",
      subtitle: "Site da marca Coração Gravado",
      shortDescription: "Site da marca, com apresentação do serviço e acesso para solicitar orçamento.",
      fullDescription: "Desenvolvi o projeto completo do site para a empresa onde trabalho.",
      technologies: [],
      repoUrl: "",
      liveUrl: "https://coracaogravado.com.br",
      participation: [],
      screenshots: [
        { imagePath: "assets/project-screenshots/coracao-gravado.png" }
      ]
    },
    {
      id: "juros-maquininha",
      semester: "Projeto Profissional",
      projectTypeLabel: "PROFISSIONAL",
      category: "autoral",
      title: "Projeto - Coração Gravado (Maquininha)",
      subtitle: "Calculadora de juros para vendas com maquininha",
      shortDescription: "Projeto de cálculo de juros relacionados a pagamentos feitos com maquininha.",
      fullDescription: "Desenvolvi o projeto para ajudar a equipe a consultar o valor final do projeto.",
      technologies: [],
      repoUrl: "",
      liveUrl: "",
      participation: [],
      screenshots: [
        { imagePath: "assets/project-screenshots/juros-maquininha.png" }
      ]
    }
  ],

  experiences: [
    {
      company: "Blasques Assessoria (Coração Gravado / Sagrado Neon)",
      period: "Início: 2024 — Atual (Em exercício)",
      currentRole: "Assistente Comercial",
      progression: ["Assistente Comercial (Atual)"],
      activities: [
        "Gestão do funil de atendimento comercial consultivo, negociação direta com clientes e elaboração de orçamentos de projetos personalizados.",
        "Acompanhamento de pedidos desde a captação até a expedição, garantindo alinhamento entre vendas e produção.",
        "Apoio na organização digital de catálogos, planilhas de controle e melhoria de fluxos internos de atendimento."
      ]
    },
    {
      company: "Web-Rádio Esportiva (Projetos Independentes de Jornalismo & Tech)",
      period: "Início: 2023 — Atual",
      currentRole: "Repórter Esportivo, Comentarista & Desenvolvedor de Ferramentas de Broadcast",
      progression: ["Repórter e Comentarista Esportivo", "Desenvolvedor Front-End para Transmissões"],
      activities: [
        "Cobertura ao vivo de partidas de futebol e voleibol, realizando reportagens de campo, análises táticas, pré-jogos e comentários.",
        "Desenvolvimento de aplicações web próprias para apoiar as transmissões ao vivo, como o 'Placar-Vôlei' e a 'Web Rádio Msports'."
      ]
    },
    {
      company: "TIM Brasil",
      period: "Julho de 2018 — Março de 2023",
      currentRole: "Consultor de Vendas",
      progression: [
        "Jovem Aprendiz (Julho de 2018 — Julho de 2019)",
        "Consultor de Vendas (Agosto de 2019 — Março de 2023)"
      ],
      activities: [
        "Como Jovem Aprendiz, criava planilhas e apresentações e realizava atendimento ao público.",
        "Como Consultor de Vendas, realizava atendimento e vendas, além de acompanhar e controlar as vendas."
      ]
    },
    
  ],

  extensionCourses: [
    {
      name: "Challenge Telecom X: análise de evasão de clientes - Parte 2",
      institution: "Alura",
      location: "Online",
      hours: "4 horas",
      startEnd: "19 Ago 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/26c9f52b-ce9b-4475-a5fc-ff5555a1f6ff"
    },
    {
      name: "Classificação: aprendendo a classificar dados com Machine Learning",
      institution: "Alura",
      location: "Online",
      hours: "8 horas",
      startEnd: "19 Ago 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/59ab061f-24c2-4731-b53e-d82263b0554c"
    },
    {
      name: "Classificação: validação de modelos e métricas de avaliação",
      institution: "Alura",
      location: "Online",
      hours: "8 horas",
      startEnd: "19 Ago 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/72bf2dbd-3251-4fca-aad3-0bf5d2843985"
    },
    {
      name: "Data Science: testando relações com Regressão Linear",
      institution: "Alura",
      location: "Online",
      hours: "8 horas",
      startEnd: "19 Ago 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/08842634-8fbb-4a2d-a7ab-128648b3de29"
    },
    {
      name: "Estatística com Python: probabilidade e amostragem",
      institution: "Alura",
      location: "Online",
      hours: "10 horas",
      startEnd: "19 Ago 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/295bf4c5-1ffc-4420-8156-b1b35460982d"
    },
    {
      name: "Empreendedorismo, Agilidade e Protagonismo na Carreira G8 - ONE",
      institution: "Alura",
      location: "Online",
      hours: "47 horas",
      startEnd: "13 Ago 2025",
      credentialUrl: "https://cursos.alura.com.br/degree/certificate/620cffd8-1ec7-483b-9b2f-d60c1fa87dc9"
    },
    {
      name: "Modelagem de Dados com Python G8 - ONE",
      institution: "Alura",
      location: "Online",
      hours: "50 horas",
      startEnd: "12 Ago 2025",
      credentialUrl: "https://cursos.alura.com.br/degree/certificate/f4e96593-3980-4176-9d32-f1f29321da3b"
    },
    {
      name: "Programa ONE Tech Foundation G8 - Data Science",
      institution: "Alura / Oracle Next Education",
      location: "Online",
      hours: "325 horas",
      startEnd: "19 Ago 2025",
      credentialUrl: "https://cursos.alura.com.br/program/certificate/09e6f0e4-6da5-4c46-a317-71775df4e336"
    },
    {
      name: "Iniciante em Programação G8 - ONE",
      institution: "Alura",
      location: "Online",
      hours: "70 horas",
      startEnd: "16 Mar 2025",
      credentialUrl: "https://cursos.alura.com.br/degree/certificate/cb6f23ce-f959-40bc-b543-27abe18499b5"
    },
    {
      name: "Desenvolvimento Pessoal G8 - ONE",
      institution: "Alura",
      location: "Online",
      hours: "36 horas",
      startEnd: "14 Jan 2025",
      credentialUrl: "https://cursos.alura.com.br/degree/certificate/e7da6708-3b2c-493e-b472-cf2dddf19362"
    }
  ],

  languages: [
    {
      language: "Português",
      level: "Nativo",
      notes: "Idioma materno."
    },
    {
      language: "Espanhol",
      level: "Intermediário/Avançado",
      notes: "Vivência acadêmica na Argentina."
    },
    {
      language: "Inglês",
      level: "Básico/Intermediário",
      notes: "Conhecimentos básicos."
    }
  ],

  certificatesWall: [
    {
      id: "cert-pyspark-mercado-trabalho",
      category: "tech",
      title: "PySpark – Mercado de Trabalho",
      issuer: "Faculdade de Tecnologia Zona Leste FATEC ZL",
      date: "out. de 2024",
      credentialUrl: "https://www.linkedin.com/in/felipe-moreno99/overlay/Certifications/1162346797/treasury/?profileId=ACoAADXTXPIBN3ADlB1ZwytzG58yCuaa4Bmq8JA"
    },
    {
      id: "cert-front-end-basico",
      category: "tech",
      title: "Front-End Básico",
      issuer: "Centro Paula Souza",
      date: "ago. de 2025",
      credentialUrl: "https://badge.cps.sp.gov.br//view.aspx?ce54e03e-dcee-4efd-8a36-6b3cb7854eef"
    },
    {
      id: "cert-site-html-css-javascript",
      category: "tech",
      title: "CRIE UM SITE SIMPLES USANDO HTML, CSS E JAVASCRIPT",
      issuer: "Fundação Bradesco",
      date: "jan. de 2024",
      credentialUrl: "https://www.linkedin.com/in/felipe-moreno99/overlay/Certifications/1161484949/treasury/?profileId=ACoAADXTXPIBN3ADlB1ZwytzG58yCuaa4Bmq8JA"
    },
    {
      id: "cert-fatec-portas-abertas",
      category: "tech",
      title: "Certificado de Participação - FATEC Portas Abertas - Prévias dos Projetos de DSM",
      issuer: "Even3",
      date: "jun. de 2025",
      credentialUrl: "https://www.even3.com.br/documentos/imprimir?i=28429765.05752343.5.8.80214963646270768&cc=5710AD19-7DB6-4543-B96B-81C685AE2AA9"
    },
    {
      id: "cert-engaging-stakeholders",
      category: "tech",
      title: "Engaging Stakeholders for Success",
      issuer: "Cisco",
      date: "mar. de 2025",
      credentialUrl: "https://www.linkedin.com/in/felipe-moreno99/overlay/Certifications/1160888631/treasury/?profileId=ACoAADXTXPIBN3ADlB1ZwytzG58yCuaa4Bmq8JA"
    },
    {
      id: "cert-formacao-estatistica-machine-learning",
      category: "formacao",
      title: "Formação Estatística e Machine Learning G8 - ONE",
      issuer: "Alura",
      date: "ago. de 2025",
      credentialUrl: "https://cursos.alura.com.br/degree/certificate/1c73b9d5-f2ea-4fc2-acdf-1d7c0d914114?lang"
    },
    {
      id: "cert-formacao-etl",
      category: "formacao",
      title: "Formação Aprendendo a fazer ETL G8 - ONE",
      issuer: "Alura",
      date: "ago. de 2025",
      credentialUrl: "https://cursos.alura.com.br/degree/certificate/6ac2139c-36b1-4fec-9f4e-a9055e57eded?lang"
    },
    {
      id: "cert-habitos-produtividade",
      category: "tech",
      title: "Hábitos: da produtividade às metas pessoais",
      issuer: "Alura",
      date: "jan. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/5ba71569-e5d4-4948-a10c-c7387d0a54b0?lang"
    },
    {
      id: "cert-foco-resultados",
      category: "tech",
      title: "Foco: trazendo mais resultados para o dia a dia",
      issuer: "Alura",
      date: "jan. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/83d5f30e-eec3-4206-88bc-09c6f6e1665e?lang"
    },
    {
      id: "cert-aprender-a-aprender",
      category: "tech",
      title: "Aprender a aprender: técnicas para seu autodesenvolvimento",
      issuer: "Alura",
      date: "jan. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/61888594-45bf-485f-b4a6-6731206c8caf?lang"
    },
    {
      id: "cert-logica-javascript",
      category: "tech",
      title: "Lógica de programação: mergulhe em programação com JavaScript",
      issuer: "Alura",
      date: "fev. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/0d0951dc-4aa3-4d11-88e1-7f7c431ff45b?lang"
    },
    {
      id: "cert-logica-funcoes-listas",
      category: "tech",
      title: "Lógica de programação: explore funções e listas",
      issuer: "Alura",
      date: "mar. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/bf7cfd1b-03f5-410e-b2d8-e82a67299b73?lang"
    },
    {
      id: "cert-git-github",
      category: "tech",
      title: "Git e GitHub: compartilhando e colaborando em projetos",
      issuer: "Alura",
      date: "mar. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/3045b16c-89c5-4884-b8d3-8d30279838d7?lang"
    },
    {
      id: "cert-chatgpt-resultados",
      category: "tech",
      title: "ChatGPT: otimizando a qualidade dos resultados",
      issuer: "Alura",
      date: "mar. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/f3c50a52-8dd4-46a6-858b-72d442d2437c?lang"
    },
    {
      id: "cert-challenge-amigo-secreto",
      category: "tech",
      title: "Praticando Logica de programação: Challenge amigo secreto",
      issuer: "Alura",
      date: "mar. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/b6a0ce45-c980-459d-92ac-55482ab3d6aa?lang"
    },
    {
      id: "cert-html-css-ambientes",
      category: "tech",
      title: "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags",
      issuer: "Alura",
      date: "mar. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/e6374e4b-995a-45a9-aec0-d38332f4dd5c?lang"
    },
    {
      id: "cert-html-css-responsividade",
      category: "tech",
      title: "HTML e CSS: trabalhando com responsividade e publicação de projetos",
      issuer: "Alura",
      date: "mar. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/00eee9c0-71ba-4326-9a4f-8123277ccf7d?lang"
    },
    {
      id: "cert-html-css-flexbox",
      category: "tech",
      title: "HTML e CSS: Classes, posicionamento e Flexbox",
      issuer: "Alura",
      date: "mar. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/0af8aea0-a003-4d68-932c-501faf157528?lang"
    },
    {
      id: "cert-html-css-cabecalho",
      category: "tech",
      title: "HTML e CSS: cabeçalho, footer e variáveis CSS",
      issuer: "Alura",
      date: "mar. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/d15bebc1-03b0-4d69-bdcb-0a807986a83b?lang"
    },
    {
      id: "cert-python-primeiros-passos",
      category: "tech",
      title: "Python para Data Science: primeiros passos",
      issuer: "Alura",
      date: "jun. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/6ccaf551-daeb-4fd6-aed9-b09f79a0ba6f?lang"
    },
    {
      id: "cert-python-funcoes-dados",
      category: "tech",
      title: "Python para Data Science: trabalhando com funções, estruturas de dados e exceções",
      issuer: "Alura",
      date: "ago. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/ed6c8edc-0302-4cf7-9e1c-5951a2f7a701?lang"
    },
    {
      id: "cert-python-challenge-alura-store",
      category: "tech",
      title: "Praticando Python para Data Science: Challenge Alura Store",
      issuer: "Alura",
      date: "ago. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/8afea03b-d92a-4c87-9eda-6f50f726e3b2?lang"
    },
    {
      id: "cert-desenvolvimento-carreira",
      category: "tech",
      title: "Desenvolvimento de carreira: a demanda do mercado",
      issuer: "Alura",
      date: "ago. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/ebab93f8-8791-41b4-94ad-1cc325683d7d?lang"
    },
    {
      id: "cert-modelagem-entidades",
      category: "tech",
      title: "Modelagem de dados: identificando entidades, atributos, relacionamentos",
      issuer: "Alura",
      date: "ago. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/e2683e16-bc88-4c6a-b56e-71b805c3de37?lang"
    },
    {
      id: "cert-modelagem-logica",
      category: "tech",
      title: "Modelagem de dados: desenvolvendo o modelo lógico",
      issuer: "Alura",
      date: "ago. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/baac9f0d-bca9-4a08-8775-ad2ba737831b?lang"
    },
    {
      id: "cert-modelagem-fisica",
      category: "tech",
      title: "Modelagem de dados: construindo o modelo físico",
      issuer: "Alura",
      date: "ago. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/96bc649f-8b69-4676-8c47-65af29259ab4?lang"
    },
    {
      id: "cert-gestao-agil",
      category: "tech",
      title: "Gestão Ágil: explorando conceitos da agilidade",
      issuer: "Alura",
      date: "ago. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/ab570371-92b5-44f1-884c-21ef3d95e890?lang"
    },
    {
      id: "cert-transicao-carreira",
      category: "tech",
      title: "Transição de carreira: um guia para a área da tecnologia",
      issuer: "Alura",
      date: "ago. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/b751773d-2816-47c0-b60a-5da3f2d4c17b?lang"
    },
    {
      id: "cert-proposito-profissional",
      category: "tech",
      title: "Propósito profissional: seja protagonista da sua carreira",
      issuer: "Alura",
      date: "ago. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/5f0112ef-8a9e-4154-ace7-939d617359af?lang"
    },
    {
      id: "cert-empreendedorismo-plano-negocios",
      category: "tech",
      title: "Empreendedorismo: da ideia ao plano de negócios",
      issuer: "Alura",
      date: "ago. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/97e5a10f-56f9-444a-bcd3-71b3232e346d?lang"
    },
    {
      id: "cert-pandas-transformacao",
      category: "tech",
      title: "Pandas: transformação e manipulação de dados",
      issuer: "Alura",
      date: "ago. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/525d8a98-7633-4dfd-a713-ce574e4c86a1?lang"
    },
    {
      id: "cert-pandas-biblioteca",
      category: "tech",
      title: "Pandas: conhecendo a biblioteca",
      issuer: "Alura",
      date: "ago. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/ab7122cf-c3b4-43d1-8982-4819259b464e?lang"
    },
    {
      id: "cert-pandas-io",
      category: "tech",
      title: "Pandas I/O: trabalhando com diferentes formatos de arquivos",
      issuer: "Alura",
      date: "ago. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/fb839659-2454-41ec-a904-a77fe1c62b55?lang"
    },
    {
      id: "cert-numpy-analise-numerica",
      category: "tech",
      title: "NumPy: análise numérica eficiente com Python",
      issuer: "Alura",
      date: "ago. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/54dd236a-d7bb-4f03-b98f-472b15e2ec94?lang"
    },
    {
      id: "cert-data-visualization",
      category: "tech",
      title: "Data Visualization: criando gráficos com bibliotecas Python",
      issuer: "Alura",
      date: "ago. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/2e4dabb1-93d0-4af8-94dd-0970f1dc02f6?lang"
    },
    {
      id: "cert-ia-data-science-visualizacao",
      category: "tech",
      title: "IA aplicada a Data Science: utilizando IA na construção de visualização de dados",
      issuer: "Alura",
      date: "ago. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/d81291bf-e3e0-4e67-87b0-cd01e01dc5e7?lang"
    },
    {
      id: "cert-telecom-x",
      category: "tech",
      title: "Challenge Telecom X: análise de evasão de clientes",
      issuer: "Alura",
      date: "ago. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/f59582aa-7642-4abe-8777-eea669834219?lang"
    },
    {
      id: "cert-regressao-linear-avancada",
      category: "tech",
      title: "Regressão Linear: técnicas avançadas de modelagem",
      issuer: "Alura",
      date: "ago. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/52253297-f292-4536-9282-47671b0ab164?lang"
    },
    {
      id: "cert-ia-atrasos-voos",
      category: "tech",
      title: "IA aumentada: prevendo atrasos de voos",
      issuer: "Alura",
      date: "ago. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/5b5c3a3d-5e17-4140-9992-a6c5483c5b24?lang"
    },
    {
      id: "cert-estatistica-resumo-analise",
      category: "tech",
      title: "Estatística com Python: resumindo e analisando dados",
      issuer: "Alura",
      date: "ago. de 2025",
      credentialUrl: "https://cursos.alura.com.br/certificate/27c8caa1-48f3-4037-9354-4f60c28eec5c?lang"
    },
    {
      id: "cert-estatistica-python",
      category: "tech",
      title: "Estatística com Python: probabilidade e amostragem",
      issuer: "Alura",
      date: "19 de agosto de 2025",
      hours: "10 horas",
      credentialUrl: "https://cursos.alura.com.br/certificate/295bf4c5-1ffc-4420-8156-b1b35460982d"
    },
    {
      id: "cert-regressao-linear",
      category: "tech",
      title: "Data Science: testando relações com Regressão Linear",
      issuer: "Alura",
      date: "19 de agosto de 2025",
      hours: "8 horas",
      credentialUrl: "https://cursos.alura.com.br/certificate/08842634-8fbb-4a2d-a7ab-128648b3de29"
    },
    {
      id: "cert-validacao-modelos",
      category: "tech",
      title: "Classificação: validação de modelos e métricas de avaliação",
      issuer: "Alura",
      date: "19 de agosto de 2025",
      hours: "8 horas",
      credentialUrl: "https://cursos.alura.com.br/certificate/72bf2dbd-3251-4fca-aad3-0bf5d2843985"
    },
    {
      id: "cert-classificacao-ml",
      category: "tech",
      title: "Classificação: aprendendo a classificar dados com Machine Learning",
      issuer: "Alura",
      date: "19 de agosto de 2025",
      hours: "8 horas",
      credentialUrl: "https://cursos.alura.com.br/certificate/59ab061f-24c2-4731-b53e-d82263b0554c"
    },
    {
      id: "cert-telecom-x-part2",
      category: "tech",
      title: "Challenge Telecom X: análise de evasão de clientes - Parte 2",
      issuer: "Alura",
      date: "19 de agosto de 2025",
      hours: "4 horas",
      credentialUrl: "https://cursos.alura.com.br/certificate/26c9f52b-ce9b-4475-a5fc-ff5555a1f6ff"
    },
    {
      id: "cert-one-tech-foundation",
      category: "formacao",
      title: "Programa ONE Tech Foundation G8 - Data Science",
      issuer: "Alura",
      date: "19 de agosto de 2025",
      hours: "325 horas",
      credentialUrl: "https://cursos.alura.com.br/program/certificate/09e6f0e4-6da5-4c46-a317-71775df4e336"
    },
    {
      id: "cert-empreendedorismo-agilidade",
      category: "formacao",
      title: "Formação Empreendedorismo, Agilidade e Protagonismo na Carreira G8 - ONE",
      issuer: "Alura",
      date: "13 de agosto de 2025",
      hours: "47 horas",
      credentialUrl: "https://cursos.alura.com.br/degree/certificate/620cffd8-1ec7-483b-9b2f-d60c1fa87dc9"
    },
    {
      id: "cert-modelagem-python",
      category: "formacao",
      title: "Formação Modelagem de Dados com Python G8 - ONE",
      issuer: "Alura",
      date: "12 de agosto de 2025",
      hours: "50 horas",
      credentialUrl: "https://cursos.alura.com.br/degree/certificate/f4e96593-3980-4176-9d32-f1f29321da3b"
    },
    {
      id: "cert-iniciante-programacao",
      category: "formacao",
      title: "Formação Iniciante em Programação G8 - ONE",
      issuer: "Alura",
      date: "16 de março de 2025",
      hours: "70 horas",
      credentialUrl: "https://cursos.alura.com.br/degree/certificate/cb6f23ce-f959-40bc-b543-27abe18499b5"
    },
    {
      id: "cert-desenvolvimento-pessoal",
      category: "formacao",
      title: "Formação Desenvolvimento Pessoal G8 - ONE",
      issuer: "Alura",
      date: "14 de janeiro de 2025",
      hours: "36 horas",
      credentialUrl: "https://cursos.alura.com.br/degree/certificate/e7da6708-3b2c-493e-b472-cf2dddf19362"
    }
  ]
};