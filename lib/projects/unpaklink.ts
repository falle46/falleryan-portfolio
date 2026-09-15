import type { ProjectData } from '../projects'

const unpaklink: ProjectData = {
  id: 'unpaklink',

  category: 'Apps',

date: {
  year: 2024,
  month: 12,
},

  image: '/projects/unpaklink.jpg',

  tags: [
    'Dart',
    'Mobile',
    'UI/UX',
  ],

  tone: 'blue',

  links: [
    {
      type: 'repository',
      label: 'Repository',
      url: 'https://github.com/falle46/UnpakLinkApp',
    },
    {
      type: 'design',
      label: 'Design',
      url: 'https://www.figma.com/design/oE0FMb1TWIIm4yAf8kgUCd/APPS?node-id=0-1',
    },
  ],

  translations: {
  id: {
    title: 'Aplikasi Pengelola Tautan UnPakLink',

    description:
      'Dikembangkan menggunakan Dart sebagai proyek kelompok yang terdiri dari 3 anggota untuk praktikum Pemrograman Mobile, UnPakLink merupakan aplikasi mobile penyimpan tautan yang dirancang untuk mengatasi permasalahan fragmentasi tautan dengan menyediakan pusat penyimpanan terpusat untuk berbagai URL akademik, seperti tautan perkuliahan, sesi Zoom, dan formulir presensi. Sebagai UI/UX designer dan pengembang front-end, saya merancang antarmuka yang terorganisir dengan fitur pengelompokan berdasarkan kategori, riwayat tautan, custom tagging, serta formulir quick-add untuk mengurangi kekacauan dan beban kognitif pengguna. Hierarki visual yang bersih dan navigasi yang terstruktur memungkinkan mahasiswa menyimpan, mencari, dan mengakses sumber daya akademik penting dengan mudah dalam satu tempat yang aman.',
  },

  en: {
    title: 'UnPakLink Link Organizer App',

    description:
      'Built using Dart as a 3-member group project for a Mobile Programming lab course, UnPakLink is a link-saver mobile application created to solve link fragmentation by providing a centralized hub for academic URLs, such as lecture links, Zoom sessions, and attendance forms. Serving as the UI/UX designer and front-end developer, I engineered a highly organized interface featuring category-based sorting, history logs, custom tagging, and quick-add forms to minimize clutter and cognitive load. The clean visual hierarchy and structured navigation ensure students can effortlessly store, search, and access critical academic resources in one secure location.',
  },

  ja: {
    title: 'UnPakLink リンク管理アプリ',

    description:
      'Dartを使用して開発したUnPakLinkは、モバイルプログラミング実習科目の3人チームによるプロジェクトとして制作したリンク管理モバイルアプリケーションです。講義リンク、Zoomセッション、出席フォームなどの学術関連URLが分散してしまう問題を解決し、それらを一元的に管理できるプラットフォームとして設計しました。UI/UXデザイナーおよびフロントエンド開発者として、カテゴリー別整理、履歴管理、カスタムタグ、クイック追加フォームなどを備えた整理性の高いインターフェースを設計・実装し、情報の乱雑さと認知負荷を軽減しました。明確な視覚的階層と構造化されたナビゲーションにより、学生が重要な学術リソースを一つの安全な場所で簡単に保存、検索、アクセスできるようにしています。',
  },

  zh: {
    title: 'UnPakLink 链接管理应用',

    description:
      'UnPakLink 是一款使用 Dart 开发的移动端链接管理应用，作为三人小组项目为移动编程实践课程而制作，旨在解决学术链接分散的问题，为课程链接、Zoom 会议以及考勤表单等各类学术 URL 提供统一的集中管理平台。作为 UI/UX 设计师和前端开发者，我设计并构建了高度结构化的用户界面，提供分类整理、历史记录、自定义标签以及快速添加表单等功能，从而减少信息杂乱与用户的认知负担。清晰的视觉层级与结构化导航使学生能够在一个安全的位置轻松保存、搜索和访问重要的学术资源。',
  },

  ko: {
    title: 'UnPakLink 링크 관리 애플리케이션',

    description:
      'UnPakLink는 Dart를 사용하여 개발한 모바일 링크 관리 애플리케이션으로, 모바일 프로그래밍 실습 과목의 3인 팀 프로젝트로 제작되었습니다. 강의 링크, Zoom 세션, 출석 양식 등 다양한 학업 관련 URL이 여러 곳에 분산되는 문제를 해결하고, 이를 하나의 중앙화된 공간에서 관리할 수 있도록 설계되었습니다. UI/UX 디자이너이자 프론트엔드 개발자로서 카테고리 기반 정렬, 기록 관리, 사용자 지정 태그, 빠른 추가 폼 등의 기능을 갖춘 체계적인 인터페이스를 설계하고 구현하여 정보의 복잡성과 사용자의 인지 부담을 줄였습니다. 깔끔한 시각적 계층 구조와 체계적인 탐색 기능을 통해 학생들이 중요한 학업 자료를 한 곳에서 안전하고 편리하게 저장, 검색 및 접근할 수 있도록 구현했습니다.',
  },

  fr: {
    title: 'Application de gestion de liens UnPakLink',

    description:
      'Développée en Dart dans le cadre d’un projet de groupe de trois personnes pour un cours pratique de programmation mobile, UnPakLink est une application mobile de gestion de liens conçue pour résoudre le problème de la dispersion des ressources en centralisant les URL académiques, telles que les liens de cours, les sessions Zoom et les formulaires de présence. En tant que designer UI/UX et développeur front-end, j’ai conçu et développé une interface hautement structurée intégrant le classement par catégories, l’historique des liens, les balises personnalisées et des formulaires d’ajout rapide afin de réduire l’encombrement et la charge cognitive. Une hiérarchie visuelle claire et une navigation structurée permettent aux étudiants de stocker, rechercher et consulter facilement leurs ressources académiques essentielles depuis un emplacement unique et sécurisé.',
  },

  nl: {
    title: 'UnPakLink Linkbeheer-app',

    description:
      'UnPakLink is ontwikkeld met Dart als groepsproject van drie personen voor een praktijkvak Mobiele Programmering. Het is een mobiele applicatie voor het opslaan en beheren van links, ontworpen om het probleem van verspreide links op te lossen door academische URL’s, zoals college-links, Zoom-sessies en aanwezigheidsformulieren, centraal te beheren. Als UI/UX-designer en front-endontwikkelaar heb ik een overzichtelijke interface ontworpen en ontwikkeld met functies zoals categorisering, geschiedenis, aangepaste tags en formulieren voor snel toevoegen, om rommel en cognitieve belasting te verminderen. De duidelijke visuele hiërarchie en gestructureerde navigatie zorgen ervoor dat studenten belangrijke academische bronnen eenvoudig en veilig op één centrale locatie kunnen opslaan, zoeken en openen.',
  },
},
}

export default unpaklink