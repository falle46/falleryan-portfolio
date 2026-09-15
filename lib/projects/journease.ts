import type { ProjectData } from '../projects'

const journease: ProjectData = {
  id: 'journease',

  category: 'Apps',

date: {
  year: 2024,
  month: 8,
},

  image: '/projects/journease.jpg',

  tags: [
    'Dart',
    'Mobile',
    'UI/UX',
  ],

  tone: 'pink',

  links: [
    {
      type: 'repository',
      label: 'Repository',
      url: 'https://github.com/dirch4/JournEase',
    },
    {
      type: 'design',
      label: 'Figma Design',
      url: 'https://www.figma.com/design/I7EPHi9sVUClJg4PGSlVIh/Mobpro?node-id=0-1&p=f&t=0rL1KI9bInsZQIg0-0',
    },
  ],

  translations: {
    id: {
      title: 'JournEease - Aplikasi Jurnal Harian',

      description:
        'Dikembangkan menggunakan Dart sebagai proyek kelompok yang terdiri dari 3 anggota untuk mata kuliah Pemrograman Mobile, JournEase merupakan aplikasi journaling mobile yang dirancang untuk mengatasi keterbatasan metode menulis secara konvensional dengan menyediakan platform yang praktis, interaktif, dan mudah digunakan untuk mencatat pengalaman pribadi. Sebagai penanggung jawab desain UI/UX dan pengembangan front-end, saya turut membangun antarmuka yang intuitif serta navigasi yang lancar untuk mempermudah pengguna dalam mencatat emosi dan ide sehari-hari. Tata letak yang terstruktur dan komponen yang responsif memungkinkan pengguna untuk merefleksikan serta mengorganisasi pikiran sehari-hari dengan mudah, kapan pun dan di mana pun.',
    },

    en: {
      title: 'JournEase Daily Journal App',

      description:
        'Developed using Dart as a 3-member group project for a Mobile Programming course, JournEase is a journaling mobile application designed to overcome traditional writing barriers by offering a seamless, practical, and engaging platform to capture personal experiences. By leading the UI/UX design and front-end development, I helped establish an intuitive interface and fluid navigation that lower user friction for daily emotional and idea tracking. The logical layout and responsive components ensure users can effortlessly reflect on and organize their daily thoughts anytime and anywhere.',
    },

    ja: {
      title: 'JournEase 日常ジャーナリングアプリ',

      description:
        'JournEaseは、Dartを使用して開発したモバイルジャーナリングアプリケーションで、モバイルプログラミング科目の3人チームによるプロジェクトとして制作しました。従来の文章による記録方法が抱える不便さを解消し、個人的な体験をスムーズかつ手軽に記録できる、実用的で魅力的なプラットフォームを提供することを目的としています。UI/UXデザインとフロントエンド開発を担当し、直感的なインターフェースとスムーズなナビゲーションを構築することで、日々の感情やアイデアをより簡単に記録できるユーザー体験を実現しました。整理されたレイアウトとレスポンシブなコンポーネントにより、いつでもどこでも日々の思考を手軽に振り返り、整理できるよう設計しています。',
    },

    zh: {
      title: 'JournEase 日常日记应用',

      description:
        'JournEase 是一款使用 Dart 开发的移动端日记应用，作为三人小组项目为移动编程课程而设计，旨在突破传统书写方式的限制，为用户提供一个便捷、流畅且具有互动性的个人经历记录平台。作为 UI/UX 设计与前端开发的主要负责人之一，我参与构建了直观的用户界面和流畅的导航体验，降低用户记录日常情绪与想法时的操作成本。清晰的布局与响应式组件使用户能够随时随地轻松记录、整理并反思自己的日常思绪。',
    },

    ko: {
      title: 'JournEase 일상 저널링 애플리케이션',

      description:
        'JournEase는 Dart를 사용하여 개발한 모바일 저널링 애플리케이션으로, 모바일 프로그래밍 과목의 3인 팀 프로젝트로 제작되었습니다. 기존의 수기 작성 방식이 가진 불편함을 개선하고, 개인적인 경험을 편리하고 자연스럽게 기록할 수 있는 실용적이고 몰입도 높은 플랫폼을 제공하는 것을 목표로 설계되었습니다. UI/UX 디자인과 프론트엔드 개발을 담당하여 직관적인 인터페이스와 원활한 탐색 구조를 구축하고, 사용자가 일상의 감정과 아이디어를 보다 쉽게 기록할 수 있도록 사용자 경험을 개선했습니다. 체계적인 레이아웃과 반응형 컴포넌트를 통해 언제 어디서나 일상의 생각을 손쉽게 기록하고 정리할 수 있도록 구현했습니다.',
    },

    fr: {
      title: 'Application de journal quotidien JournEase',

      description:
        'Développée en Dart dans le cadre d’un projet de groupe de trois personnes pour un cours de programmation mobile, JournEase est une application mobile de journal intime conçue pour surmonter les limites de l’écriture traditionnelle en offrant une plateforme fluide, pratique et engageante pour consigner ses expériences personnelles. En tant que responsable du design UI/UX et du développement front-end, j’ai contribué à créer une interface intuitive et une navigation fluide afin de faciliter le suivi quotidien des émotions et des idées. Une mise en page structurée et des composants réactifs permettent aux utilisateurs de consigner, d’organiser et de revisiter facilement leurs pensées quotidiennes, où qu’ils soient et à tout moment.',
    },

    nl: {
      title: 'JournEase Dagelijkse Journal-app',

      description:
        'JournEase is ontwikkeld met Dart als groepsproject voor een vak Mobiele Programmering en is een mobiele journaling-applicatie die is ontworpen om de beperkingen van traditioneel schrijven te overwinnen. De applicatie biedt een praktische, gebruiksvriendelijke en aantrekkelijke omgeving voor het vastleggen van persoonlijke ervaringen. Als verantwoordelijke voor het UI/UX-design en de front-endontwikkeling heb ik bijgedragen aan het creëren van een intuïtieve interface en soepele navigatie, waardoor gebruikers hun dagelijkse emoties en ideeën eenvoudig kunnen bijhouden. De overzichtelijke lay-out en responsieve componenten zorgen ervoor dat gebruikers hun dagelijkse gedachten overal en op elk moment moeiteloos kunnen vastleggen, ordenen en teruglezen.',
    },
  },
}

export default journease