export const SITE_CONFIG = {
  name: "ChallengeHub",
  description: "Платформа для практического обучения фронтенд-разработке через выполнение реальных задач",
  url: "https://challengehub.dev",
  tagline: "Практические задания для разработчиков",

  navigation: [
    { href: "/", label: "Главная", icon: "🏠" },
    { href: "/challenges", label: "Задания", icon: "🎯" },
    { href: "/about", label: "О проекте", icon: "ℹ️" }
  ],

  developer: {
    name: "Иван Иванов",
    role: "Frontend Developer",
    website: "https://ivanov.dev",
    github: "https://github.com/ivanov",
    email: "hello@ivanov.dev",
    initials: "ИИ" // fix: будем вычислять потом
  },

  technologies: [
    "AstroJS",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "Vite"
  ],

  social: {
    github: "https://github.com/challengehub",
    telegram: "https://t.me/challengehub",
  }
} as const;