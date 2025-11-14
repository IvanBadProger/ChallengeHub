import type { Challenge } from './types';
import { APP_CONFIG } from './constants';

export const challenges: Challenge[] = [
  {
    id: 1,
    title: "Персональная визитка",
    description: "Создайте простую HTML-страницу с информацией о себе",
    difficulty: "beginner",
    category: "html",
    duration: APP_CONFIG.CHALLENGE_DURATION,
    requirements: [
      "Семантическая HTML-разметка (header, main, footer)",
      "Ваше фото и краткая информация",
      "Ссылки на социальные сети",
      "Адаптивный дизайн"
    ],
    tips: [
      "Используйте Flexbox для центрирования контента",
      "Добавьте :hover эффекты для интерактивности",
      "Подберите гармоничную цветовую схему"
    ],
    resources: [
      "MDN HTML Basics",
      "CSS Flexbox Guide",
      "Color Theory for Designers"
    ],
    startDate: APP_CONFIG.START_DATE,
    tech: ["HTML", "CSS"]
  },
  {
    id: 2,
    title: "Статический список дел",
    description: "Создайте красивый статический список задач без функционала",
    difficulty: "beginner",
    category: "css",
    duration: APP_CONFIG.CHALLENGE_DURATION,
    requirements: [
      "Стилизованные чекбоксы",
      "Разные категории задач (цвета)",
      "Красивые шрифты и отступы",
      "Эффекты при наведении"
    ],
    tips: [
      "Используйте CSS-псевдоэлементы для кастомных чекбоксов",
      "Примените CSS-переменные для цветов",
      "Добавьте плавные переходы"
    ],
    resources: [
      "CSS Pseudo-elements",
      "CSS Custom Properties",
      "CSS Transitions"
    ],
    startDate: "2024-01-04",
    tech: ["HTML", "CSS"]
  },
  {
    id: 3,
    title: "Интерактивный светофор",
    description: "Создайте работающий светофор с автоматической сменой цветов",
    difficulty: "beginner",
    category: "javascript",
    duration: APP_CONFIG.CHALLENGE_DURATION,
    requirements: [
      "Три сигнала (красный, желтый, зеленый)",
      "Автоматическая смена через интервалы",
      "Кнопка ручного управления",
      "Реалистичные тайминги"
    ],
    tips: [
      "Используйте setInterval для автоматической смены",
      "Добавьте CSS-анимации для плавности",
      "Храните текущее состояние в переменной"
    ],
    resources: [
      "JavaScript setInterval",
      "DOM Manipulation",
      "CSS Animations"
    ],
    startDate: "2024-01-07",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 4,
    title: "Простой калькулятор",
    description: "Реализуйте базовый калькулятор с основными операциями",
    difficulty: "intermediate",
    category: "javascript",
    duration: APP_CONFIG.CHALLENGE_DURATION,
    requirements: [
      "Кнопки цифр 0-9 и операций",
      "Дисплей для ввода и результата",
      "Обработка последовательных операций",
      "Кнопка очистки"
    ],
    tips: [
      "Разделите логику и отображение",
      "Используйте eval() с осторожностью или парсинг",
      "Обрабатывайте ошибки ввода"
    ],
    resources: [
      "JavaScript Functions",
      "Event Handling",
      "String Manipulation"
    ],
    startDate: "2024-01-10",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 5,
    title: "Генератор случайных советов",
    description: "Создайте приложение, которое показывает случайные советы по фронтенду",
    difficulty: "beginner",
    category: "javascript",
    duration: APP_CONFIG.CHALLENGE_DURATION,
    requirements: [
      "Массив с советами",
      "Кнопка для генерации случайного совета",
      "Плавная анимация появления",
      "Возможность добавить свой совет"
    ],
    tips: [
      "Используйте Math.random() для выбора случайного элемента",
      "Добавьте CSS transition для плавности",
      "Храните советы в отдельном массиве"
    ],
    resources: [
      "JavaScript Arrays",
      "Math.random()",
      "CSS Transitions"
    ],
    startDate: "2024-01-13",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 6,
    title: "Таймер Pomodoro",
    description: "Создайте таймер для техники Pomodoro с рабочими интервалами",
    difficulty: "intermediate",
    category: "javascript",
    duration: APP_CONFIG.CHALLENGE_DURATION,
    requirements: [
      "Настройка времени работы и отдыха",
      "Визуальный отсчет времени",
      "Звуковое уведомление",
      "Счетчик завершенных pomodoro"
    ],
    tips: [
      "Используйте setInterval для отсчета времени",
      "Храните состояние таймера (работа/отдых)",
      "Добавьте localStorage для сохранения статистики"
    ],
    resources: [
      "JavaScript Date Object",
      "Web Audio API",
      "localStorage"
    ],
    startDate: "2024-01-16",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 7,
    title: "Игра 'Угадай число'",
    description: "Реализуйте игру, где компьютер загадывает число, а пользователь угадывает",
    difficulty: "intermediate",
    category: "project",
    duration: APP_CONFIG.CHALLENGE_DURATION,
    requirements: [
      "Генерация случайного числа",
      "Подсказки 'больше/меньше'",
      "Счетчик попыток",
      "История предыдущих догадок"
    ],
    tips: [
      "Используйте бинарный поиск для подсказок AI",
      "Валидируйте ввод пользователя",
      "Добавьте разные уровни сложности"
    ],
    resources: [
      "JavaScript Loops",
      "Conditional Statements",
      "Game Logic Patterns"
    ],
    startDate: "2024-01-19",
    tech: ["HTML", "CSS", "JavaScript"]
  }
];

// Вспомогательные функции
export const getChallengeById = (id: number): Challenge | undefined => {
  return challenges.find(challenge => challenge.id === id);
};

export const getActiveChallenge = (): Challenge | null => {
  const today = new Date().toISOString().split('T')[0];
  return challenges.find(challenge => challenge.startDate <= today &&
    new Date(challenge.startDate).getTime() + challenge.duration * 24 * 60 * 60 * 1000 > new Date().getTime()) || null;
};

export const getUpcomingChallenges = (): Challenge[] => {
  const today = new Date().toISOString().split('T')[0];
  return challenges.filter(challenge => challenge.startDate > today);
};

export const getCompletedChallenges = (): Challenge[] => {
  const today = new Date().toISOString().split('T')[0];
  return challenges.filter(challenge =>
    new Date(challenge.startDate).getTime() + challenge.duration * 24 * 60 * 60 * 1000 <= new Date().getTime()
  );
};