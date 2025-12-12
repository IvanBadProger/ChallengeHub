export const INTERNAL_LINKS = {
  HOME: '/home',
  CHALLENGES: '/challenges',
  ABOUT: '/about',
  challenge: (id: number) => `/challenges/${id}`,
  challengesByCategory: (category: string) => `/challenges?category=${category}`,
  challengesByDifficulty: (difficulty: string) => `/challenges?difficulty=${difficulty}`,
} as const;

export const SITE_CONFIG = {
  name: 'ChallengeHub',
  description:
    'Платформа для практического обучения фронтенд-разработке через выполнение реальных задач',
  url: 'https://challengehub.dev',
  tagline: 'Практические задания для разработчиков',

  navigation: [
    { href: INTERNAL_LINKS.HOME, label: 'Главная', icon: '🏠' },
    { href: INTERNAL_LINKS.CHALLENGES, label: 'Задания', icon: '🎯' },
    { href: INTERNAL_LINKS.ABOUT, label: 'О проекте', icon: 'ℹ️' },
  ],

  developer: {
    name: 'Ван Иван',
    role: 'FullStack Developer',
    website: 'https://ivanbadproger.dev',
    github: 'https://github.com/ivanbadproger',
    email: 'programmerivan@mail.ru',
    initials: 'ВИ', // fix: будем вычислять потом
  },

  technologies: ['AstroJS', 'TypeScript', 'Tailwind CSS', 'React', 'Vite'],

  social: {
    github: 'https://github.com/IvanBadProger/ChallengeHub',
    telegram: 'https://t.me/challengehubchik',
  },
} as const;
