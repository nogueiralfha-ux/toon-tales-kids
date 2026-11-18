export type Language = 'pt' | 'en' | 'es';

export interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
  nativeName: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'pt', label: 'Português', flag: '🇧🇷', nativeName: 'Português' },
  { code: 'en', label: 'English', flag: '🇺🇸', nativeName: 'English' },
  { code: 'es', label: 'Español', flag: '🇪🇸', nativeName: 'Español' },
];

export const translations = {
  pt: {
    // Brand
    brand_subtitle: 'A Bíblia em Áudio',
    brand_tagline: 'Histórias que ensinam, aventuras que transformam!',

    // Navbar / Header
    nav_benefits: 'Benefícios',
    nav_characters: 'Personagens 3D',
    nav_includes: 'O que Inclui',
    nav_testimonials: 'Depoimentos',
    nav_pricing: 'Planos & Preços',
    nav_faq: 'Dúvidas',
    nav_labkids: '🔬 Oferta LabKids',
    nav_admin: 'Painel Admin',
    nav_enter_app: 'Entrar no App',
    nav_login: 'Entrar (Login)',
    nav_subscribe: 'QUERO ASSINAR',
    nav_logout: 'Sair',
    nav_home: 'Início',
    nav_catalog: 'Catálogo',
    nav_seasons: 'Temporadas',
    nav_heroes: 'Heróis da Fé',
    nav_favorites: 'Favoritos',
    nav_parents: 'Portal dos Pais',
    nav_search: 'Buscar episódio ou personagem...',
    nav_bedtime: 'Modo Soneca',
    nav_mixer: 'Mesa de Som',
    nav_coloring: 'Estúdio de Pintura',

    // Top Bar Announcement
    top_announcement: '🎉 LANÇAMENTO TRILÍNGUE • ACESSO VITALÍCIO EXCLUSIVO',
    top_ambassador: 'Seja um Embaixador (40% a 50% Comis.)',

    // Hero Section
    hero_badge: 'A 1ª Superprodução Bíblica Infantil Trilíngue em Áudio 3D do Brasil',
    hero_title_1: 'O Maior Universo de Aventuras Bíblicas que ',
    hero_title_highlight: 'Ensina, Protege e Transforma',
    hero_title_2: ' a Mente do Seu Filho.',
    hero_desc: 'Troque os vídeos vazios da internet por superproduções cinematográficas em áudio 3D, personagens marcantes, histórias bíblicas inesquecíveis e valores eternos de fé e coragem.',
    hero_cta_primary: 'QUERO GARANTIR O ACESSO AGORA',
    hero_cta_demo: 'OUVIR DEMONSTRAÇÃO OFICIAL (3D)',
    hero_security_badge: 'Ambiente 100% Blindado e Seguro para Crianças',

    // Hub Pillars
    hub_characters: 'Personagens 3D',
    hub_characters_desc: 'Conheça Adão, Eva, Noé, José, Moisés e mais',
    hub_plans: 'Planos & Preços',
    hub_plans_desc: 'Acesso Pessoal, Familiar e Vitalício sem mensalidades',
    hub_demo: 'Ouvir Demo 3D',
    hub_demo_desc: 'Experimente a tecnologia de áudio cinematográfico',

    // Demo Section
    demo_title: 'Experimente a Magia do Áudio 3D Toon Tales Kids',
    demo_subtitle: 'Coloque fones de ouvido para vivenciar a imersão espacial de estúdio!',
    demo_play: 'Ouvir Prévia do Áudio 3D',
    demo_pause: 'Pausar Demonstração',

    // Plan Section
    plans_section_badge: 'PLANOS DE ACESSO',
    plans_section_title: 'Escolha o Plano Perfeito para a Sua Família',
    plans_section_subtitle: 'Acesso imediato a todas as temporadas, audiolivros, estúdio de pintura e livros para imprimir.',
    plan_personal: 'Plano Pessoal',
    plan_family: 'Plano Familiar',
    plan_lifetime: 'Plano Vitalício Pioneiro',
    plan_lifetime_badge: 'MELHOR VALOR • TAXA ÚNICA',
    plan_billed_annual: 'Cobrado Anualmente',
    plan_billed_monthly: 'Cobrado Mensalmente',
    plan_single_payment: 'Taxa Única • Sem Mensalidades Futuras',
    plan_cta_subscribe: 'ASSINAR AGORA',
    plan_cta_lifetime: '👑 GARANTIR ACESSO VITALÍCIO',
    plan_guarantee_badge: 'Garantia Incondicional de 7 Dias',

    // Guarantee Section
    guarantee_title: 'Garantia Incondicional de 100% de Satisfação',
    guarantee_desc: 'Experimente o Toon Tales Kids por 7 dias. Se os seus filhos não ficarem encantados com as histórias e o aprendizado, devolvemos 100% do seu valor imediatamente.',

    // FAQ Section
    faq_badge: 'TIRE SUAS DÚVIDAS',
    faq_title: 'Perguntas Frequentes',
    faq_whatsapp_btn: 'DÚVIDAS? FALE NO WHATSAPP',

    // Language Selector
    lang_select_title: 'Selecionar Idioma',
    lang_trilingual_badge: 'Módulo Trilíngue',

    // Player & Content
    player_audio_language: 'Idioma do Áudio',
    player_download_illustrated: 'Baixar Livro Ilustrado (PDF)',
    player_download_coloring: 'Baixar Livro de Colorir (PDF)',
    player_scene: 'Cena',
    player_season: 'Temporada',
    player_episode: 'Episódio',
  },

  en: {
    // Brand
    brand_subtitle: 'The Audio Bible',
    brand_tagline: 'Stories that teach, adventures that transform!',

    // Navbar / Header
    nav_benefits: 'Benefits',
    nav_characters: '3D Characters',
    nav_includes: "What's Included",
    nav_testimonials: 'Testimonials',
    nav_pricing: 'Plans & Pricing',
    nav_faq: 'FAQ',
    nav_labkids: '🔬 LabKids Offer',
    nav_admin: 'Admin Panel',
    nav_enter_app: 'Enter App',
    nav_login: 'Log In',
    nav_subscribe: 'GET ACCESS NOW',
    nav_logout: 'Log Out',
    nav_home: 'Home',
    nav_catalog: 'Catalog',
    nav_seasons: 'Seasons',
    nav_heroes: 'Heroes of Faith',
    nav_favorites: 'Favorites',
    nav_parents: 'Parents Portal',
    nav_search: 'Search episode or character...',
    nav_bedtime: 'Bedtime Mode',
    nav_mixer: 'Sound Mixer',
    nav_coloring: 'Coloring Studio',

    // Top Bar Announcement
    top_announcement: '🎉 TRILINGUAL LAUNCH • EXCLUSIVE LIFETIME ACCESS',
    top_ambassador: 'Become an Ambassador (40% to 50% Comm.)',

    // Hero Section
    hero_badge: "The #1 Trilingual Kids' Bible Audio Superproduction",
    hero_title_1: 'The Greatest Universe of Biblical Adventures that ',
    hero_title_highlight: 'Teaches, Protects and Transforms',
    hero_title_2: " Your Child's Mind.",
    hero_desc: 'Replace hollow internet videos with 3D cinematic audio superproductions, unforgettable biblical characters, and eternal values of faith and courage.',
    hero_cta_primary: 'GET ACCESS TODAY',
    hero_cta_demo: 'LISTEN TO OFFICIAL 3D DEMO',
    hero_security_badge: '100% Safe and Ad-Free Environment for Kids',

    // Hub Pillars
    hub_characters: '3D Characters',
    hub_characters_desc: 'Meet Adam, Eve, Noah, Joseph, Moses and more',
    hub_plans: 'Plans & Pricing',
    hub_plans_desc: 'Personal, Family, and Lifetime Access without monthly fees',
    hub_demo: '3D Audio Demo',
    hub_demo_desc: 'Experience cinematic spatial audio technology',

    // Demo Section
    demo_title: 'Experience the Magic of Toon Tales Kids 3D Audio',
    demo_subtitle: 'Put on headphones for an immersive studio spatial sound experience!',
    demo_play: 'Listen to 3D Audio Preview',
    demo_pause: 'Pause Demo',

    // Plan Section
    plans_section_badge: 'ACCESS PLANS',
    plans_section_title: 'Choose the Perfect Plan for Your Family',
    plans_section_subtitle: 'Instant access to all seasons, audiobooks, coloring studio, and printable books.',
    plan_personal: 'Personal Plan',
    plan_family: 'Family Plan',
    plan_lifetime: 'Pioneer Lifetime Plan',
    plan_lifetime_badge: 'BEST VALUE • ONE-TIME PAYMENT',
    plan_billed_annual: 'Billed Annually',
    plan_billed_monthly: 'Billed Monthly',
    plan_single_payment: 'One-Time Payment • No Future Subscriptions',
    plan_cta_subscribe: 'SUBSCRIBE NOW',
    plan_cta_lifetime: '👑 CLAIM LIFETIME ACCESS',
    plan_guarantee_badge: '7-Day Unconditional Money-Back Guarantee',

    // Guarantee Section
    guarantee_title: '100% Satisfaction Unconditional Guarantee',
    guarantee_desc: 'Try Toon Tales Kids for 7 full days. If your children are not enchanted by the stories and life lessons, we refund 100% of your investment immediately.',

    // FAQ Section
    faq_badge: 'NEED HELP?',
    faq_title: 'Frequently Asked Questions',
    faq_whatsapp_btn: 'QUESTIONS? CHAT ON WHATSAPP',

    // Language Selector
    lang_select_title: 'Select Language',
    lang_trilingual_badge: 'Trilingual Module',

    // Player & Content
    player_audio_language: 'Audio Track Language',
    player_download_illustrated: 'Download Illustrated Book (PDF)',
    player_download_coloring: 'Download Coloring Book (PDF)',
    player_scene: 'Scene',
    player_season: 'Season',
    player_episode: 'Episode',
  },

  es: {
    // Brand
    brand_subtitle: 'La Biblia en Audio',
    brand_tagline: '¡Historias que enseñan, aventuras que transforman!',

    // Navbar / Header
    nav_benefits: 'Beneficios',
    nav_characters: 'Personajes 3D',
    nav_includes: 'Qué Incluye',
    nav_testimonials: 'Testimonios',
    nav_pricing: 'Planes y Precios',
    nav_faq: 'Preguntas',
    nav_labkids: '🔬 Oferta LabKids',
    nav_admin: 'Panel Admin',
    nav_enter_app: 'Entrar a la App',
    nav_login: 'Iniciar Sesión',
    nav_subscribe: 'QUIERO SUSCRIBIRME',
    nav_logout: 'Cerrar Sesión',
    nav_home: 'Inicio',
    nav_catalog: 'Catálogo',
    nav_seasons: 'Temporadas',
    nav_heroes: 'Héroes de la Fe',
    nav_favorites: 'Favoritos',
    nav_parents: 'Portal de Padres',
    nav_search: 'Buscar episodio o personaje...',
    nav_bedtime: 'Modo Sueño',
    nav_mixer: 'Consola de Sonido',
    nav_coloring: 'Estudio de Pintura',

    // Top Bar Announcement
    top_announcement: '🎉 LANZAMIENTO TRILINGÜE • ACCESO DE POR VIDA EXCLUSIVO',
    top_ambassador: 'Sé un Embajador (40% a 50% Comis.)',

    // Hero Section
    hero_badge: 'La 1ª Superproducción Bíblica Infantil Trilingüe en Audio 3D',
    hero_title_1: 'El Mayor Universo de Aventuras Bíblicas que ',
    hero_title_highlight: 'Enseña, Protege y Transforma',
    hero_title_2: ' la Mente de tu Hijo.',
    hero_desc: 'Reemplaza videos vacíos de internet por superproducciones cinematográficas en audio 3D, personajes memorables, historias bíblicas inolvidables y valores eternos de fe y valor.',
    hero_cta_primary: 'QUIERO ACCESO AHORA',
    hero_cta_demo: 'ESCUCHAR DEMO OFICIAL (3D)',
    hero_security_badge: 'Ambiente 100% Protegido y Seguro para Niños',

    // Hub Pillars
    hub_characters: 'Personajes 3D',
    hub_characters_desc: 'Conoce a Adán, Eva, Noé, José, Moisés y más',
    hub_plans: 'Planes y Precios',
    hub_plans_desc: 'Acceso Personal, Familiar y Vitalicio sin mensualidades',
    hub_demo: 'Demo de Audio 3D',
    hub_demo_desc: 'Experimenta la tecnología de audio cinematográfico espacial',

    // Demo Section
    demo_title: 'Experimenta la Magia del Audio 3D de Toon Tales Kids',
    demo_subtitle: '¡Ponte auriculares para vivir la inmersión espacial de estudio!',
    demo_play: 'Escuchar Muestra de Audio 3D',
    demo_pause: 'Pausar Demostración',

    // Plan Section
    plans_section_badge: 'PLANES DE ACCESO',
    plans_section_title: 'Elige el Plan Perfecto para tu Familia',
    plans_section_subtitle: 'Acceso inmediato a todas las temporadas, audiolibros, estudio de pintura y libros para imprimir.',
    plan_personal: 'Plan Personal',
    plan_family: 'Plan Familiar',
    plan_lifetime: 'Plan Vitalicio Pionero',
    plan_lifetime_badge: 'MEJOR VALOR • PAGO ÚNICO',
    plan_billed_annual: 'Facturado Anualmente',
    plan_billed_monthly: 'Facturado Mensualmente',
    plan_single_payment: 'Pago Único • Sin Mensualidades Futuras',
    plan_cta_subscribe: 'SUSCRIBIRME AHORA',
    plan_cta_lifetime: '👑 ASEGURAR ACCESO VITALICIO',
    plan_guarantee_badge: 'Garantía Incondicional de 7 Días',

    // Guarantee Section
    guarantee_title: 'Garantía Incondicional del 100% de Satisfacción',
    guarantee_desc: 'Prueba Toon Tales Kids por 7 días completos. Si tus hijos no quedan encantados con las historias y valores, te devolvemos el 100% de tu dinero al instante.',

    // FAQ Section
    faq_badge: 'RESUELVE TUS DUDAS',
    faq_title: 'Preguntas Frecuentes',
    faq_whatsapp_btn: '¿DUDAS? CONTACTA POR WHATSAPP',

    // Language Selector
    lang_select_title: 'Seleccionar Idioma',
    lang_trilingual_badge: 'Módulo Trilingüe',

    // Player & Content
    player_audio_language: 'Idioma del Doblaje',
    player_download_illustrated: 'Descargar Libro Ilustrado (PDF)',
    player_download_coloring: 'Descargar Libro para Colorear (PDF)',
    player_scene: 'Escena',
    player_season: 'Temporada',
    player_episode: 'Episodio',
  },
};

export type TranslationKey = keyof typeof translations.pt;
