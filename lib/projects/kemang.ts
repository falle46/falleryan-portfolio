import type { ProjectData } from '../projects'

const kemang: ProjectData = {
  id: 'kemang',

  category: 'Web',

 date: {
  year: 2026,
  month: 8,
},

  image: '/projects/kemang.jpg',

  tags: [
    'AI',
    'Website',
    'UI/UX',
    'Next.js',
    'Python',
    'Supabase'
  ],

  tone: 'brown',

links: [
    {
      type: 'repository',
      label: 'Repository',
      url: 'https://github.com/falle46/kemang',
    },
  ],

  translations: {
    id: {
      title: 'Kemang AI Identification Platform',

      description:
        'Dikembangkan sebagai proyek skripsi sarjana, Batik Kemang merupakan platform web berbasis AI yang dirancang untuk mendukung pelestarian warisan budaya lokal melalui identifikasi motif Batik Kemang secara *real-time* menggunakan model *deep learning* yang dikembangkan secara khusus. Sebagai UI/UX Designer dan *front-end developer*, saya merancang dan mengembangkan antarmuka yang responsif menggunakan Next.js, TypeScript, dan Tailwind CSS, yang terintegrasi secara seamless dengan *back-end* Flask berbasis TensorFlow dan Keras. Platform ini menyediakan pengalaman pengguna secara menyeluruh melalui fitur unggah gambar secara instan, autentikasi pengguna, riwayat identifikasi pribadi, serta galeri koleksi IP (HAKI) interaktif yang menghubungkan kekayaan kerajinan tradisional dengan teknologi *computer vision* modern.',
    },

    en: {
      title: 'Kemang AI Identification Platform',

      description:
        'Developed as my undergraduate thesis project, Batik Kemang is an AI-powered web platform engineered to preserve local cultural heritage by delivering real-time identification of Batik Kemang motifs through a custom deep learning model. As the UI/UX designer and front-end developer, I designed and built a highly responsive interface using Next.js, TypeScript, and Tailwind CSS, which seamlessly integrates with a Flask backend powered by TensorFlow and Keras. The platform provides an intuitive end-to-end user experience, complete with instant image uploading, user authentication, personal identification history tracking, and an interactive IP (HAKI) collection gallery to bridge traditional craftsmanship with modern computer vision technology.',
    },

    ja: {
      title: 'Kemang AI識別プラットフォーム',

      description:
        'Batik Kemangは、学部卒業論文のプロジェクトとして開発されたAI搭載のWebプラットフォームで、独自に構築したディープラーニングモデルによるBatik Kemangのモチーフのリアルタイム識別を通じて、地域の文化遺産の保存と継承を支援することを目的としています。UI/UXデザイナーおよびフロントエンド開発者として、Next.js、TypeScript、Tailwind CSSを使用して高いレスポンシブ性を備えたインターフェースを設計・開発し、TensorFlowとKerasを基盤とするFlaskバックエンドとシームレスに統合しました。画像の即時アップロード、ユーザー認証、個人の識別履歴、インタラクティブな知的財産権（HAKI）コレクションギャラリーなどの機能を提供し、伝統的な職人技と現代のコンピュータビジョン技術を融合した直感的なエンドツーエンドのユーザー体験を実現しています。',
    },

    zh: {
      title: 'Kemang AI 图像识别平台',

      description:
        'Batik Kemang 是作为本科毕业论文项目开发的一款 AI 驱动的 Web 平台，旨在通过基于定制深度学习模型的实时 Batik Kemang 图案识别技术，支持当地文化遗产的保护与传承。作为 UI/UX 设计师和前端开发人员，我使用 Next.js、TypeScript 和 Tailwind CSS 设计并开发了高度响应式的用户界面，并将其与基于 TensorFlow 和 Keras 的 Flask 后端无缝集成。该平台提供直观完整的用户体验，包括即时图像上传、用户身份验证、个人识别历史记录以及交互式知识产权（HAKI）收藏展示页面，将传统工艺与现代计算机视觉技术相结合。',
    },

    ko: {
      title: 'Kemang AI 식별 플랫폼',

      description:
        'Batik Kemang은 학부 졸업 논문 프로젝트로 개발된 AI 기반 웹 플랫폼으로, 맞춤형 딥러닝 모델을 활용한 실시간 Batik Kemang 문양 식별을 통해 지역 문화유산의 보존과 계승을 지원하도록 설계되었습니다. UI/UX 디자이너이자 프론트엔드 개발자로서 Next.js, TypeScript, Tailwind CSS를 활용하여 높은 반응성을 갖춘 사용자 인터페이스를 설계하고 개발했으며, TensorFlow와 Keras를 기반으로 하는 Flask 백엔드와 원활하게 통합했습니다. 플랫폼은 즉각적인 이미지 업로드, 사용자 인증, 개인 식별 기록, 인터랙티브 지식재산권(HAKI) 컬렉션 갤러리 등의 기능을 제공하여 전통 공예와 현대 컴퓨터 비전 기술을 연결하는 직관적인 엔드투엔드 사용자 경험을 구현했습니다.',
    },

    fr: {
      title: 'Plateforme d’identification IA Kemang',

      description:
        'Développé dans le cadre de mon mémoire de fin d’études, Batik Kemang est une plateforme web basée sur l’IA, conçue pour contribuer à la préservation du patrimoine culturel local grâce à l’identification en temps réel des motifs de Batik Kemang à l’aide d’un modèle de deep learning développé sur mesure. En tant que UI/UX Designer et développeur front-end, j’ai conçu et développé une interface hautement responsive avec Next.js, TypeScript et Tailwind CSS, intégrée de manière fluide à un back-end Flask reposant sur TensorFlow et Keras. La plateforme offre une expérience utilisateur intuitive de bout en bout, avec notamment le téléchargement instantané d’images, l’authentification des utilisateurs, le suivi de l’historique personnel des identifications et une galerie interactive de collections de propriété intellectuelle (HAKI), créant ainsi un lien entre l’artisanat traditionnel et les technologies modernes de vision par ordinateur.',
    },

    nl: {
      title: 'Kemang AI-Identificatieplatform',

      description:
        'Batik Kemang is ontwikkeld als onderdeel van mijn bachelorafstudeerproject en is een AI-gedreven webplatform dat is ontworpen om het lokale culturele erfgoed te ondersteunen door middel van realtime herkenning van Batik Kemang-motieven met behulp van een speciaal ontwikkeld deep-learningmodel. Als UI/UX Designer en front-endontwikkelaar heb ik een zeer responsieve interface ontworpen en ontwikkeld met Next.js, TypeScript en Tailwind CSS, die naadloos is geïntegreerd met een Flask-back-end op basis van TensorFlow en Keras. Het platform biedt een intuïtieve end-to-end gebruikerservaring met functies zoals directe afbeeldingsuploads, gebruikersauthenticatie, het bijhouden van persoonlijke identificatiegeschiedenis en een interactieve galerij voor intellectuele-eigendomscollecties (HAKI), waarmee traditioneel vakmanschap wordt verbonden met moderne computer vision-technologie.',
    },
  },
}

export default kemang