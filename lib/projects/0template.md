import type { ProjectData } from '../projects'

const protofall: ProjectData = {
  id: 'protofall',

  category: 'Apps',

date: {
  year: 2024,
  month: 10,
},

  image: '/projects/protofall.jpg',

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
      url: 'https://github.com/falle46/kemang',
    },
  ],

  translations: {
    id: {
      title: 'Aplikasi Portofolio Mobile ProtoFall',

      description:
        'Dikembangkan sebagai proyek independen untuk mata kuliah Pemrograman Mobile pada semester 5, ProtoFall merupakan aplikasi portofolio pribadi yang dirancang untuk mengatasi tantangan dalam menyajikan kualifikasi secara efektif kepada calon pemberi kerja dan institusi. Konsepnya menggabungkan desain UI/UX modern dengan arsitektur front-end yang terstruktur untuk menghadirkan resume digital yang intuitif dan terorganisir, sekaligus menampilkan keterampilan, pencapaian, dan pengalaman profesional secara terpadu. Dengan berfokus pada aksesibilitas dan navigasi yang lancar, aplikasi ini berfungsi sebagai media personal branding yang dapat diandalkan untuk menonjolkan perkembangan karier dan pencapaian akademik.',
    },

    en: {
      title: 'ProtoFall Mobile Portfolio App',

      description:
        'Developed as an independent project for a 5th-semester Mobile Programming course, ProtoFall is a personal portfolio application engineered to address the challenge of effectively presenting candidate qualifications to potential employers and institutions. The concept combines modern UI/UX design and clean front-end architecture to deliver an intuitive, well-structured digital resume that seamlessly displays skills, achievements, and professional experiences. By focusing on accessibility and seamless navigational logic, the application serves as a reliable personal branding tool designed to highlight career growth and academic accomplishments.',
    },

    ja: {
      title: 'Focus Flow',

      description:
        '毎日の集中力、習慣、エネルギーを計画するのに役立つモバイルアプリ。',
    },

    zh: {
      title: 'Focus Flow',

      description:
        '一款帮助用户规划日常专注、习惯和精力的移动应用。',
    },

    ko: {
      title: 'Focus Flow',

      description:
        '사용자가 매일의 집중력, 습관, 에너지를 계획할 수 있도록 돕는 모바일 앱.',
    },

    fr: {
      title: 'Focus Flow',

      description:
        'Une application mobile pour aider les utilisateurs à planifier leur concentration, leurs habitudes et leur énergie quotidiennes.',
    },

    nl: {
      title: 'Focus Flow',

      description:
        'Een mobiele app om gebruikers te helpen hun dagelijkse focus, gewoontes en energie te plannen.',
    },
  },
}

export default protofall