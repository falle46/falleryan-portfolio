import type { ProjectData } from '../projects'

const sabuo: ProjectData = {
  id: 'sabuo',

  category: 'Apps',

date: {
  year: 2025,
  month: 8,
},

  image: '/projects/sabuo.jpg',

  tags: [
    'Flutter',
    'UI/UX',
    'Firebase',
    'Mobile',
  ],

  tone: 'lime',

links: [
    {
      type: 'repository',
      label: 'Repository',
      url: 'https://github.com/ccirdec/sabuo',
    },
    {
      type: 'youtube',
      label: 'Watch Demo',
      url: 'https://youtu.be/aPt-HwhW2KU?si=6IAZQZ9QtTqiQYUt',
    },
  ],

  translations: {
    id: {
      title: 'Sabuo - Online Shopping App',

      description:
        'Sabuo adalah aplikasi seluler fresh produce yang dirancang untuk menyederhanakan proses pembelian sayuran, buah-buahan, dan hasil laut segar dengan menghubungkan pengguna dengan toko lokal terdekat melalui pemilihan berbasis lokasi. Untuk mengatasi berbagai kendala dalam pengalaman berbelanja kebutuhan pangan secara daring, konsep ini mengintegrasikan desain UI/UX yang intuitif dengan pengembangan front-end yang responsif. Sabuo menyediakan pengalaman yang lebih praktis melalui penelusuran toko yang mudah, pilihan pemenuhan pesanan yang fleksibel (pengantaran/pengambilan), serta pelacakan pesanan secara real-time. Selain itu, antarmuka manajemen khusus untuk admin dikembangkan untuk mempermudah pembaruan stok, pengelolaan diskon promosi, dan komunikasi langsung dengan pelanggan, sehingga menciptakan pengalaman pengguna yang efisien dari awal hingga akhir.',
    },

    en: {
      title: 'Sabuo - Online Shopping App',

      description:
        'Sabuo is a mobile fresh produce shopping application designed to simplify the process of purchasing vegetables, fruits, and fresh seafood by connecting users with nearby local stores through location-based selection. To address common challenges in online grocery shopping, the concept integrates intuitive UI/UX design with responsive front-end development. Sabuo provides a more practical experience through easy store browsing, flexible fulfillment options (delivery/pickup), and real-time order tracking. An admin management interface is also designed to simplify stock updates, promotional discount management, and direct customer communication, creating an efficient end-to-end shopping experience.',
    },

    ja: {
      title: 'Sabuo - オンラインショッピングアプリ',

      description:
        'Sabuoは、新鮮な野菜、果物、魚介類の購入プロセスを簡素化するために設計された生鮮食品向けモバイルアプリケーションです。位置情報を活用した店舗選択機能により、ユーザーと近隣の地域店舗をつなぎ、より利便性の高いオンラインショッピング体験を提供します。オンラインでの食料品購入におけるユーザーの負担を軽減するため、直感的なUI/UXデザインとレスポンシブなフロントエンド開発を組み合わせています。店舗の検索・閲覧、柔軟な注文方法（配送・店舗受け取り）、リアルタイムでの注文追跡など、スムーズな購買体験を実現します。さらに、管理者向けの専用管理インターフェースを実装し、在庫更新、プロモーション割引の管理、顧客とのリアルタイムコミュニケーションを効率化することで、注文から管理まで一貫したユーザー体験を提供します。',
    },

    zh: {
      title: 'Sabuo - 在线购物应用',

      description:
        'Sabuo 是一款面向生鲜食品购物的移动应用，旨在通过基于位置的门店选择，将用户与附近的本地商店连接起来，从而简化新鲜蔬菜、水果和海鲜的购买流程。为解决在线生鲜购物过程中常见的操作不便，Sabuo 将直观的 UI/UX 设计与响应式前端开发相结合，提供便捷的门店浏览、灵活的订单履约方式（配送/到店自取）以及实时订单追踪功能。此外，系统还配备了专属的管理员管理界面，用于高效处理库存更新、促销折扣管理以及实时客户沟通，从而构建完整、高效的用户购物体验。',
    },

    ko: {
      title: 'Sabuo - 온라인 쇼핑 앱',

      description:
        'Sabuo는 신선한 채소, 과일 및 수산물을 보다 편리하게 구매할 수 있도록 설계된 모바일 애플리케이션입니다. 위치 기반 매장 선택 기능을 통해 사용자를 인근 지역의 소매점과 연결하여 신선식품 온라인 쇼핑 과정을 간소화합니다. 온라인 식료품 구매 과정에서 발생하는 사용자의 불편을 개선하기 위해 직관적인 UI/UX 디자인과 반응형 프론트엔드 개발을 결합하였습니다. 이를 통해 매장 탐색, 유연한 주문 방식(배송/매장 픽업), 실시간 주문 추적 등의 기능을 원활하게 이용할 수 있습니다. 또한 관리자 전용 관리 인터페이스를 구축하여 재고 업데이트, 프로모션 할인 관리 및 고객과의 실시간 커뮤니케이션을 효율적으로 처리할 수 있도록 하여, 주문부터 관리까지 전 과정에서 일관되고 효율적인 사용자 경험을 제공합니다.',
    },

    fr: {
      title: 'Sabuo - Application de shopping alimentaire',

      description:
        'Sabuo est une application mobile dédiée aux produits frais, conçue pour simplifier l’achat de légumes, de fruits et de produits de la mer en mettant les utilisateurs en relation avec les commerces locaux situés à proximité grâce à une sélection basée sur la localisation. Afin de réduire les difficultés rencontrées lors des achats alimentaires en ligne, le concept associe une conception UI/UX intuitive à un développement front-end responsive. L’application offre une navigation fluide entre les commerces, des options flexibles pour la réception des commandes (livraison/retrait en magasin) ainsi qu’un suivi des commandes en temps réel. Par ailleurs, une interface d’administration dédiée a été mise en place afin de faciliter la mise à jour des stocks, la gestion des promotions et la communication en temps réel avec les clients, garantissant ainsi une expérience utilisateur efficace de bout en bout.',
    },

    nl: {
      title: 'Sabuo - Online boodschappenapp',

      description:
        'Sabuo is een mobiele applicatie voor verse producten, ontworpen om het aankoopproces van verse groenten, fruit en vis- en schaaldieren te vereenvoudigen door gebruikers via locatiegebaseerde selectie te verbinden met lokale winkels in de buurt. Om knelpunten bij het online boodschappen doen te verminderen, combineert het concept een intuïtief UI/UX-ontwerp met responsieve front-endontwikkeling. De applicatie biedt een overzichtelijke winkelervaring, flexibele opties voor orderafhandeling (bezorging/afhalen) en realtime ordertracking. Daarnaast is een speciale beheeromgeving voor administrators ontwikkeld om voorraadupdates, promotionele kortingen en realtime communicatie met klanten efficiënt te beheren. Hierdoor wordt een consistente en efficiënte gebruikerservaring gedurende het volledige bestelproces gerealiseerd.',
    },
  },
}

export default sabuo