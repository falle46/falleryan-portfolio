export type LanguageCode =
  | 'id'
  | 'en'
  | 'ja'
  | 'zh'
  | 'ko'
  | 'fr'
  | 'nl'

export type Category =
  | 'All'
  | 'Web'
  | 'Apps'
  | 'Others'


// =========================================================
// SITE LANGUAGES
// =========================================================

export const siteLanguages = [
  { code: 'id', label: 'Indonesia' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' },
  { code: 'zh', label: '中文' },
  { code: 'ko', label: '한국어' },
  { code: 'fr', label: 'Français' },
  { code: 'nl', label: 'Nederlands' },
] as const


// =========================================================
// SPLASH / GREETINGS
// =========================================================

export const greetings = [
  'Hello',
  'Haii',
  'Sampurasun',
  'Bonjour',
  'Hola',
  'こんにちは',
  '你好',
  '안녕하세요',
  'Hallo',
  'Ciao',
  'Olá',
  'مرحبا',
  'สวัสดี',
  'Привет',
  'Hej',
  'Merhaba',
  'नमस्ते',
  'Γεια σου',
  'שלום',
  'สวัสดีครับ',
  'Xin chào',
  'สวัสดีค่ะ',
  'Cześć',
  'Ahoj',
  'Sveiki',
]


// =========================================================
// UI DICTIONARIES
// =========================================================

export const dictionaries = {

  // =======================================================
  // INDONESIAN
  // =======================================================

  id: {
    copy: {
      nav: [
        'Tentang',
        'Keahlian',
        'Pengalaman',
        'Karya',
      ],

      intro:
        'Saya membangun pengalaman digital yang memadukan teknologi, desain, dan kreativitas.',

      status:
        'Tersedia untuk kolaborasi — 2026',

      about:
        'Tentang saya',

      aboutHeading:
        'Mari kenali saya lebih dekat.',

      aboutText:
        'Saya adalah lulusan Ilmu Komputer dengan ketertarikan kuat dalam memadukan desain dan teknologi. Saya memiliki dasar dalam pengembangan software, troubleshooting hardware, dan UI/UX design, dengan fokus utama pada Front-End development. Saya senang menciptakan pengalaman digital yang intuitif sambil terus mengeksplorasi AI, game development, video editing, dan creative technology.',

      expertise:
        'Keahlian',

      expertiseHeading:
        'Keahlian saya.',

      experience:
        'Pengalaman',

      works:
        'Karya terpilih',

      worksHeading:
        'Karya saya.',

      worksText:
        'Eksperimen, produk, dan kolaborasi yang pernah saya bangun.',

      end:
        'Mari membangun sesuatu yang berarti.',

      cv:
        'Lihat CV',

      work:
        'Lihat karya',

      contact:
        'Hubungi saya',

      tabs: {
        All: 'Semua',
        Web: 'Web',
        Apps: 'Aplikasi',
        Others: 'Lainnya',
      },
    },


    // -------------------------------------------------------
    // EXPERTISE
    // -------------------------------------------------------

    expertise: [
      {
        iconId: 'web',
        title: 'Front-End Development',
        text:
          'Membangun antarmuka web yang responsif, intuitif, dan berorientasi pada pengguna.',
        tags: [
          'Next.js',
          'TypeScript',
          'HTML/CSS',
        ],
      },

      {
        iconId: 'design',
        title: 'UI / UX Design',
        text:
          'Merancang pengalaman dan antarmuka digital yang sederhana, jelas, dan nyaman digunakan.',
        tags: [
          'Figma',
          'Prototyping',
          'Design Systems',
        ],
      },

      {
        iconId: 'ai',
        title: 'AI',
        text:
          'Mengeksplorasi AI untuk menciptakan fitur yang lebih cerdas dan meningkatkan efisiensi workflow.',
        tags: [
          'Python',
          'AI SDK',
          'Prompting',
        ],
      },

      {
        iconId: 'mobile',
        title: 'Mobile Apps',
        text:
          'Mengembangkan aplikasi mobile dengan fokus pada pengalaman pengguna dan performa.',
        tags: [
          'Flutter',
          'Firebase',
          'Mobile UI',
        ],
      },
    ],


    // -------------------------------------------------------
    // EXPERIENCE
    // -------------------------------------------------------

    experiences: [
      {
        role: 'Information Technology Intern',
        place: 'PT Elnusa Tbk · Internship',
        year: 'Aug 2025 — Sep 2025',
        text:
          'Melakukan riset UI/UX, merancang antarmuka yang user-friendly, mengembangkan front-end website internal, serta menyiapkan dokumentasi dan laporan proyek. Berkolaborasi dengan tim lintas fungsi dalam lingkungan IT profesional.',
      },

      {
        role: 'Interior Designer',
        place: 'PT. Decorasiku Innovation Groups · Internship',
        year: 'Jul 2024 — Aug 2024',
        text:
          'Mengerjakan proyek klien menggunakan SketchUp untuk membuat model interior 3D dan proposal desain visual, serta memperoleh pengalaman dalam space planning, pemilihan material, dan 3D visualization.',
      },
    ],
  },


  // =======================================================
  // ENGLISH
  // =======================================================

  en: {
    copy: {
      nav: [
        'About',
        'Expertise',
        'Experience',
        'Works',
      ],

      intro:
        'I build digital experiences that bring together technology, design, and creativity.',

      status:
        'Available for collaborations — 2026',

      about:
        'About me',

      aboutHeading:
        "Let's get to know me.",

      aboutText:
        'I am a recent Computer Science graduate with a strong interest in blending design and technology. I have a foundation in software development, hardware troubleshooting, and UI/UX design, with a primary focus on Front-End development. I enjoy creating intuitive digital experiences while exploring AI, game development, video editing, and creative technology.',

      expertise:
        'Expertise',

      expertiseHeading:
        'My expertise.',

      experience:
        'Experience',

      works:
        'Selected works',

      worksHeading:
        'My works.',

      worksText:
        'Experiments, products, and collaborations I have shaped.',

      end:
        'Let’s build something meaningful.',

      cv:
        'View CV',

      work:
        'See my work',

      contact:
        'Get in touch',

      tabs: {
        All: 'All',
        Web: 'Web',
        Apps: 'Apps',
        Others: 'Others',
      },
    },


    // -------------------------------------------------------
    // EXPERTISE
    // -------------------------------------------------------

    expertise: [
      {
        iconId: 'web',
        title: 'Front-End Development',
        text:
          'Building responsive, intuitive, and user-centered web interfaces.',
        tags: [
          'Next.js',
          'TypeScript',
          'HTML/CSS',
        ],
      },

      {
        iconId: 'design',
        title: 'UI / UX Design',
        text:
          'Designing simple, clear, and enjoyable digital experiences and interfaces.',
        tags: [
          'Figma',
          'Prototyping',
          'Design Systems',
        ],
      },

      {
        iconId: 'ai',
        title: 'AI',
        text:
          'Exploring AI to create smarter features and improve workflow efficiency.',
        tags: [
          'Python',
          'AI SDK',
          'Prompting',
        ],
      },

      {
        iconId: 'mobile',
        title: 'Mobile Apps',
        text:
          'Developing mobile applications with a focus on usability and performance.',
        tags: [
          'Flutter',
          'Firebase',
          'Mobile UI',
        ],
      },
    ],


    // -------------------------------------------------------
    // EXPERIENCE
    // -------------------------------------------------------

    experiences: [
      {
        role: 'Information Technology Intern',
        place: 'PT Elnusa Tbk · Internship',
        year: 'Aug 2025 — Sep 2025',
        text:
          'Conducted UI/UX research, designed user-friendly interfaces, developed the front end of an internal website, and prepared project documentation and reports. Collaborated with cross-functional teams in a professional IT environment.',
      },

      {
        role: 'Interior Designer',
        place: 'PT. Decorasiku Innovation Groups · Internship',
        year: 'Jul 2024 — Aug 2024',
        text:
          'Worked on real client projects using SketchUp to create 3D interior models and visual design proposals, gaining hands-on experience in space planning, material selection, and 3D visualization.',
      },
    ],
  },


  // =======================================================
  // JAPANESE
  // =======================================================

  ja: {
    copy: {
      nav: [
        '概要',
        'スキル',
        '経験',
        '作品',
      ],

      intro:
        'テクノロジー、デザイン、クリエイティビティを組み合わせたデジタル体験をつくります。',

      status:
        'コラボレーション受付中 — 2026',

      about:
        '私について',

      aboutHeading:
        '私について知ってください。',

      aboutText:
        'デザインとテクノロジーを組み合わせることに強い関心を持つ、コンピュータサイエンスの新卒です。ソフトウェア開発、ハードウェアのトラブルシューティング、UI/UXデザインを基礎とし、主にフロントエンド開発に取り組んでいます。直感的なデジタル体験をつくることが好きで、AI、ゲーム開発、動画編集、クリエイティブテクノロジーにも関心があります。',

      expertise:
        'スキル',

      expertiseHeading:
        '私のスキル。',

      experience:
        '経験',

      works:
        '作品',

      worksHeading:
        '私の作品。',

      worksText:
        'これまでに制作したプロダクトと実験。',

      end:
        '意味のあるものを一緒につくりましょう。',

      cv:
        'CVを見る',

      work:
        '作品を見る',

      contact:
        '連絡する',

      tabs: {
        All: 'すべて',
        Web: 'Web',
        Apps: 'アプリ',
        Others: 'その他',
      },
    },


    // -------------------------------------------------------
    // EXPERTISE
    // -------------------------------------------------------

    expertise: [
      {
        iconId: 'web',
        title: 'Front-End Development',
        text:
          'レスポンシブで直感的、そしてユーザー中心のWebインターフェースを構築。',
        tags: [
          'Next.js',
          'TypeScript',
          'HTML/CSS',
        ],
      },

      {
        iconId: 'design',
        title: 'UI / UX Design',
        text:
          'シンプルで明確、使いやすいデジタル体験とインターフェースを設計。',
        tags: [
          'Figma',
          'Prototyping',
          'Design Systems',
        ],
      },

      {
        iconId: 'ai',
        title: 'AI',
        text:
          'よりスマートな機能の開発とワークフローの効率化に向けてAIを探求。',
        tags: [
          'Python',
          'AI SDK',
          'Prompting',
        ],
      },

      {
        iconId: 'mobile',
        title: 'Mobile Apps',
        text:
          '使いやすさとパフォーマンスを重視したモバイルアプリを開発。',
        tags: [
          'Flutter',
          'Firebase',
          'Mobile UI',
        ],
      },
    ],


    // -------------------------------------------------------
    // EXPERIENCE
    // -------------------------------------------------------

    experiences: [
      {
        role: 'Information Technology Intern',
        place: 'PT Elnusa Tbk · Internship',
        year: '2025年8月 — 2025年9月',
        text:
          'UI/UXリサーチ、使いやすいインターフェースの設計、社内Webサイトのフロントエンド開発、プロジェクト文書とレポートの作成を担当。専門的なIT環境で他チームと連携しました。',
      },

      {
        role: 'Interior Designer',
        place: 'PT. Decorasiku Innovation Groups · Internship',
        year: '2024年7月 — 2024年8月',
        text:
          'SketchUpを使用して実際のクライアントプロジェクトの3Dインテリアモデルとデザイン提案を作成し、空間計画、素材選定、3Dビジュアライゼーションの実務経験を得ました。',
      },
    ],
  },


  // =======================================================
  // CHINESE
  // =======================================================

  zh: {
    copy: {
      nav: [
        '关于',
        '技能',
        '经历',
        '作品',
      ],

      intro:
        '我创造融合技术、设计与创意的数字体验。',

      status:
        '可接受合作 — 2026',

      about:
        '关于我',

      aboutHeading:
        '来了解一下我吧。',

      aboutText:
        '我是一名计算机科学应届毕业生，对融合设计与技术充满兴趣。我具备软件开发、硬件故障排查和UI/UX设计方面的基础，主要专注于前端开发。我喜欢打造直观的数字体验，同时持续探索AI、游戏开发、视频编辑和创意科技。',

      expertise:
        '技能',

      expertiseHeading:
        '我的专业技能。',

      experience:
        '经历',

      works:
        '精选作品',

      worksHeading:
        '我的作品。',

      worksText:
        '我参与构建的产品、实验与合作。',

      end:
        '一起创造有意义的东西。',

      cv:
        '查看简历',

      work:
        '查看作品',

      contact:
        '联系我',

      tabs: {
        All: '全部',
        Web: 'Web',
        Apps: '应用',
        Others: '其他',
      },
    },


    // -------------------------------------------------------
    // EXPERTISE
    // -------------------------------------------------------

    expertise: [
      {
        iconId: 'web',
        title: 'Front-End Development',
        text:
          '构建响应式、直观且以用户为中心的Web界面。',
        tags: [
          'Next.js',
          'TypeScript',
          'HTML/CSS',
        ],
      },

      {
        iconId: 'design',
        title: 'UI / UX Design',
        text:
          '设计简单、清晰且易于使用的数字体验与界面。',
        tags: [
          'Figma',
          'Prototyping',
          'Design Systems',
        ],
      },

      {
        iconId: 'ai',
        title: 'AI',
        text:
          '探索AI，以创建更智能的功能并提升工作效率。',
        tags: [
          'Python',
          'AI SDK',
          'Prompting',
        ],
      },

      {
        iconId: 'mobile',
        title: 'Mobile Apps',
        text:
          '开发注重易用性和性能的移动应用。',
        tags: [
          'Flutter',
          'Firebase',
          'Mobile UI',
        ],
      },
    ],


    // -------------------------------------------------------
    // EXPERIENCE
    // -------------------------------------------------------

    experiences: [
      {
        role: 'Information Technology Intern',
        place: 'PT Elnusa Tbk · Internship',
        year: '2025年8月 — 2025年9月',
        text:
          '负责UI/UX研究、用户友好界面设计、内部网站前端开发以及项目文档和报告整理，并在专业IT环境中与跨职能团队合作。',
      },

      {
        role: 'Interior Designer',
        place: 'PT. Decorasiku Innovation Groups · Internship',
        year: '2024年7月 — 2024年8月',
        text:
          '使用SketchUp参与真实客户项目，制作3D室内模型和设计方案，并获得空间规划、材料选择和3D可视化方面的实践经验。',
      },
    ],
  },


  // =======================================================
  // KOREAN
  // =======================================================

  ko: {
    copy: {
      nav: [
        '소개',
        '전문성',
        '경력',
        '작업',
      ],

      intro:
        '기술, 디자인, 창의성을 결합한 디지털 경험을 만듭니다.',

      status:
        '협업 가능 — 2026',

      about:
        '소개',

      aboutHeading:
        '저에 대해 알아보세요.',

      aboutText:
        '저는 디자인과 기술을 결합하는 데 강한 관심을 가진 컴퓨터과학 졸업생입니다. 소프트웨어 개발, 하드웨어 문제 해결, UI/UX 디자인에 대한 기반을 갖추고 있으며, 주로 프론트엔드 개발에 집중하고 있습니다. 직관적인 디지털 경험을 만드는 것을 좋아하며 AI, 게임 개발, 영상 편집, 크리에이티브 기술에도 관심이 있습니다.',

      expertise:
        '전문성',

      expertiseHeading:
        '저의 전문성.',

      experience:
        '경력',

      works:
        '주요 작업',

      worksHeading:
        '저의 작업.',

      worksText:
        '제가 만든 제품과 실험, 협업 프로젝트입니다.',

      end:
        '의미 있는 것을 함께 만들어봐요.',

      cv:
        '이력서 보기',

      work:
        '작업 보기',

      contact:
        '연락하기',

      tabs: {
        All: '전체',
        Web: 'Web',
        Apps: '앱',
        Others: '기타',
      },
    },


    // -------------------------------------------------------
    // EXPERTISE
    // -------------------------------------------------------

    expertise: [
      {
        iconId: 'web',
        title: 'Front-End Development',
        text:
          '반응형이고 직관적이며 사용자 중심의 웹 인터페이스를 구축합니다.',
        tags: [
          'Next.js',
          'TypeScript',
          'HTML/CSS',
        ],
      },

      {
        iconId: 'design',
        title: 'UI / UX Design',
        text:
          '단순하고 명확하며 사용하기 편한 디지털 경험과 인터페이스를 설계합니다.',
        tags: [
          'Figma',
          'Prototyping',
          'Design Systems',
        ],
      },

      {
        iconId: 'ai',
        title: 'AI',
        text:
          '더 스마트한 기능과 효율적인 워크플로우를 위해 AI를 탐구합니다.',
        tags: [
          'Python',
          'AI SDK',
          'Prompting',
        ],
      },

      {
        iconId: 'mobile',
        title: 'Mobile Apps',
        text:
          '사용성과 성능에 중점을 둔 모바일 애플리케이션을 개발합니다.',
        tags: [
          'Flutter',
          'Firebase',
          'Mobile UI',
        ],
      },
    ],


    // -------------------------------------------------------
    // EXPERIENCE
    // -------------------------------------------------------

    experiences: [
      {
        role: 'Information Technology Intern',
        place: 'PT Elnusa Tbk · Internship',
        year: '2025년 8월 — 2025년 9월',
        text:
          'UI/UX 리서치, 사용자 친화적인 인터페이스 설계, 사내 웹사이트 프론트엔드 개발, 프로젝트 문서 및 보고서 작성을 담당했습니다. 전문적인 IT 환경에서 여러 팀과 협업했습니다.',
      },

      {
        role: 'Interior Designer',
        place: 'PT. Decorasiku Innovation Groups · Internship',
        year: '2024년 7월 — 2024년 8월',
        text:
          'SketchUp을 활용해 실제 고객 프로젝트의 3D 인테리어 모델과 디자인 제안을 제작하고, 공간 계획, 소재 선택 및 3D 시각화에 대한 실무 경험을 쌓았습니다.',
      },
    ],
  },


  // =======================================================
  // FRENCH
  // =======================================================

  fr: {
    copy: {
      nav: [
        'À propos',
        'Expertise',
        'Expérience',
        'Projets',
      ],

      intro:
        'Je crée des expériences numériques qui combinent technologie, design et créativité.',

      status:
        'Disponible pour des collaborations — 2026',

      about:
        'À propos de moi',

      aboutHeading:
        'Apprenez à me connaître.',

      aboutText:
        'Je suis récemment diplômé en informatique et je m’intéresse particulièrement à la combinaison du design et de la technologie. Je possède des bases en développement logiciel, dépannage matériel et design UI/UX, avec un intérêt principal pour le développement Front-End. J’aime créer des expériences numériques intuitives et explorer l’IA, le développement de jeux, le montage vidéo et les technologies créatives.',

      expertise:
        'Expertise',

      expertiseHeading:
        'Mon expertise.',

      experience:
        'Expérience',

      works:
        'Projets sélectionnés',

      worksHeading:
        'Mes projets.',

      worksText:
        'Produits, expériences et collaborations réalisés.',

      end:
        'Construisons quelque chose de significatif.',

      cv:
        'Voir le CV',

      work:
        'Voir mes projets',

      contact:
        'Me contacter',

      tabs: {
        All: 'Tout',
        Web: 'Web',
        Apps: 'Apps',
        Others: 'Autres',
      },
    },


    // -------------------------------------------------------
    // EXPERTISE
    // -------------------------------------------------------

    expertise: [
      {
        iconId: 'web',
        title: 'Front-End Development',
        text:
          'Création d’interfaces web responsives, intuitives et centrées sur l’utilisateur.',
        tags: [
          'Next.js',
          'TypeScript',
          'HTML/CSS',
        ],
      },

      {
        iconId: 'design',
        title: 'UI / UX Design',
        text:
          'Conception d’expériences et d’interfaces numériques simples, claires et agréables.',
        tags: [
          'Figma',
          'Prototyping',
          'Design Systems',
        ],
      },

      {
        iconId: 'ai',
        title: 'AI',
        text:
          'Exploration de l’IA pour créer des fonctionnalités plus intelligentes et améliorer les workflows.',
        tags: [
          'Python',
          'AI SDK',
          'Prompting',
        ],
      },

      {
        iconId: 'mobile',
        title: 'Mobile Apps',
        text:
          'Développement d’applications mobiles axées sur l’utilisabilité et les performances.',
        tags: [
          'Flutter',
          'Firebase',
          'Mobile UI',
        ],
      },
    ],


    // -------------------------------------------------------
    // EXPERIENCE
    // -------------------------------------------------------

    experiences: [
      {
        role: 'Information Technology Intern',
        place: 'PT Elnusa Tbk · Internship',
        year: 'Août 2025 — Sept. 2025',
        text:
          'Réalisation de recherches UI/UX, conception d’interfaces intuitives, développement du front-end d’un site interne et préparation de la documentation et des rapports de projet. Collaboration avec des équipes transversales dans un environnement IT professionnel.',
      },

      {
        role: 'Interior Designer',
        place: 'PT. Decorasiku Innovation Groups · Internship',
        year: 'Juil. 2024 — Août 2024',
        text:
          'Participation à des projets clients réels avec SketchUp pour créer des modèles d’intérieur 3D et des propositions visuelles, avec une expérience pratique en aménagement, sélection des matériaux et visualisation 3D.',
      },
    ],
  },


  // =======================================================
  // DUTCH
  // =======================================================

  nl: {
    copy: {
      nav: [
        'Over mij',
        'Expertise',
        'Ervaring',
        'Werk',
      ],

      intro:
        'Ik bouw digitale ervaringen waarin technologie, design en creativiteit samenkomen.',

      status:
        'Beschikbaar voor samenwerkingen — 2026',

      about:
        'Over mij',

      aboutHeading:
        'Leer mij kennen.',

      aboutText:
        'Ik ben recent afgestudeerd in Computer Science en heb een sterke interesse in het combineren van design en technologie. Ik heb een basis in softwareontwikkeling, hardware troubleshooting en UI/UX-design, met een focus op Front-End development. Ik creëer graag intuïtieve digitale ervaringen en verken daarnaast AI, game development, videobewerking en creatieve technologie.',

      expertise:
        'Expertise',

      expertiseHeading:
        'Mijn expertise.',

      experience:
        'Ervaring',

      works:
        'Uitgelicht werk',

      worksHeading:
        'Mijn werk.',

      worksText:
        'Producten, experimenten en samenwerkingen die ik heb gebouwd.',

      end:
        'Laten we iets betekenisvols bouwen.',

      cv:
        'Bekijk CV',

      work:
        'Bekijk werk',

      contact:
        'Neem contact op',

      tabs: {
        All: 'Alles',
        Web: 'Web',
        Apps: 'Apps',
        Others: 'Overig',
      },
    },


    // -------------------------------------------------------
    // EXPERTISE
    // -------------------------------------------------------

    expertise: [
      {
        iconId: 'web',
        title: 'Front-End Development',
        text:
          'Responsieve, intuïtieve en gebruikersgerichte webinterfaces bouwen.',
        tags: [
          'Next.js',
          'TypeScript',
          'HTML/CSS',
        ],
      },

      {
        iconId: 'design',
        title: 'UI / UX Design',
        text:
          'Eenvoudige, duidelijke en prettige digitale ervaringen en interfaces ontwerpen.',
        tags: [
          'Figma',
          'Prototyping',
          'Design Systems',
        ],
      },

      {
        iconId: 'ai',
        title: 'AI',
        text:
          'AI verkennen om slimmere functies te creëren en workflows efficiënter te maken.',
        tags: [
          'Python',
          'AI SDK',
          'Prompting',
        ],
      },

      {
        iconId: 'mobile',
        title: 'Mobile Apps',
        text:
          'Mobiele applicaties ontwikkelen met focus op gebruiksgemak en prestaties.',
        tags: [
          'Flutter',
          'Firebase',
          'Mobile UI',
        ],
      },
    ],


    // -------------------------------------------------------
    // EXPERIENCE
    // -------------------------------------------------------

    experiences: [
      {
        role: 'Information Technology Intern',
        place: 'PT Elnusa Tbk · Internship',
        year: 'Aug. 2025 — Sep. 2025',
        text:
          'UI/UX-onderzoek uitgevoerd, gebruiksvriendelijke interfaces ontworpen, de front-end van een interne website ontwikkeld en projectdocumentatie en rapporten opgesteld. Samengewerkt met verschillende teams binnen een professionele IT-omgeving.',
      },

      {
        role: 'Interior Designer',
        place: 'PT. Decorasiku Innovation Groups · Internship',
        year: 'Jul. 2024 — Aug. 2024',
        text:
          'Aan echte klantprojecten gewerkt met SketchUp om 3D-interieurmodellen en visuele ontwerpvoorstellen te maken, met praktische ervaring in ruimteplanning, materiaalkeuze en 3D-visualisatie.',
      },
    ],
  },
}