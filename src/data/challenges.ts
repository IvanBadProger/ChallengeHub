import type { Challenge } from './types';

export const challenges: Challenge[] = [
  {
    id: 1,
    title: "Персональная визитка",
    description: "Создайте простую HTML-страницу с информацией о себе",
    difficulty: "beginner",
    category: "html",
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
      {
        title: "MDN HTML Basics",
        url: "https://developer.mozilla.org/ru/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
      },
      {
        title: "CSS Flexbox Guide",
        url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
      },
      {
        title: "Color Theory for Designers",
        url: "https://www.smashingmagazine.com/2010/01/color-theory-for-designers-part-1-the-meaning-of-color/"
      }
    ],
    tech: ["HTML", "CSS"]
  },
  {
    id: 2,
    title: "Анимированная кнопка",
    description: "Создайте красивую интерактивную кнопку с CSS-анимациями",
    difficulty: "beginner",
    category: "css",
    requirements: [
      "Плавные transition эффекты",
      "Анимация при наведении и клике",
      "Кастомные свойства CSS",
      "Кроссбраузерная совместимость"
    ],
    tips: [
      "Используйте transform для плавных анимаций",
      "Экспериментируйте с box-shadow для глубины",
      "Тестируйте на разных устройствах"
    ],
    resources: [
      {
        title: "CSS Transitions Guide",
        url: "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions"
      },
      {
        title: "Transform Property MDN",
        url: "https://developer.mozilla.org/ru/docs/Web/CSS/transform"
      },
      {
        title: "Modern CSS Solutions",
        url: "https://moderncss.dev/"
      }
    ],
    tech: ["HTML", "CSS"]
  },
  {
    id: 3,
    title: "Модальное окно",
    description: "Реализуйте всплывающее модальное окно с затемнением фона",
    difficulty: "beginner",
    category: "javascript",
    requirements: [
      "Открытие/закрытие по клику на кнопку",
      "Затемнение фона (оверлей)",
      "Закрытие по клику вне окна и на ESC",
      "Плавные анимации появления"
    ],
    tips: [
      "Используйте CSS transition для анимаций",
      "Добавьте focus trap для доступности",
      "Управляйте состоянием через data-атрибуты"
    ],
    resources: [
      {
        title: "JavaScript Events",
        url: "https://developer.mozilla.org/ru/docs/Web/API/Event"
      },
      {
        title: "CSS Transitions",
        url: "https://developer.mozilla.org/ru/docs/Web/CSS/transition"
      },
      {
        title: "ARIA Modal Pattern",
        url: "https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/"
      }
    ],
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 4,
    title: "Таймер Pomodoro",
    description: "Создайте таймер для техники Pomodoro с рабочими интервалами",
    difficulty: "intermediate",
    category: "javascript",
    requirements: [
      "Настройка времени работы и отдыха",
      "Визуальный отсчет времени",
      "Звуковое уведомление",
      "Счетчик завершенных pomodoro"
    ],
    tips: [
      "Используйте setInterval для отсчета времени",
      "Храните состояние таймера в объекте",
      "Добавьте localStorage для сохранения статистики"
    ],
    resources: [
      {
        title: "JavaScript Date Object",
        url: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date"
      },
      {
        title: "Web Audio API",
        url: "https://developer.mozilla.org/ru/docs/Web/API/Web_Audio_API"
      },
      {
        title: "LocalStorage Guide",
        url: "https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage"
      }
    ],
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"]
  },
  {
    id: 5,
    title: "Поиск пользователей GitHub",
    description: "Создайте приложение для поиска и отображения профилей GitHub",
    difficulty: "intermediate",
    category: "javascript",
    requirements: [
      "Поиск по username через GitHub API",
      "Отображение аватара и основной информации",
      "Список репозиториев пользователя",
      "Обработка ошибок и loading states"
    ],
    tips: [
      "Используйте debounce для поиска",
      "Кэшируйте результаты запросов",
      "Добавьте пагинацию для репозиториев"
    ],
    resources: [
      {
        title: "GitHub REST API",
        url: "https://docs.github.com/en/rest"
      },
      {
        title: "JavaScript Fetch API",
        url: "https://developer.mozilla.org/ru/docs/Web/API/Fetch_API"
      },
      {
        title: "Debounce Function",
        url: "https://davidwalsh.name/javascript-debounce-function"
      }
    ],
    tech: ["HTML", "CSS", "JavaScript", "API"]
  },
  {
    id: 6,
    title: "Интерактивная карта путешествий",
    description: "Разработайте карту с отметками посещенных мест",
    difficulty: "intermediate",
    category: "project",
    requirements: [
      "Интеграция с картами (Leaflet.js)",
      "Добавление и удаление маркеров",
      "Модальное окно с информацией о месте",
      "Адаптивный дизайн для мобильных"
    ],
    tips: [
      "Начните с простой SVG карты для прототипа",
      "Используйте локальное хранилище для данных",
      "Оптимизируйте производительность с маркерами"
    ],
    resources: [
      {
        title: "Leaflet.js Documentation",
        url: "https://leafletjs.com/"
      },
      {
        title: "SVG Basics",
        url: "https://developer.mozilla.org/ru/docs/Web/SVG"
      },
      {
        title: "LocalStorage API",
        url: "https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage"
      }
    ],
    tech: ["HTML", "CSS", "JavaScript", "API", "Leaflet.js"]
  },
  {
    id: 7,
    title: "Система управления задачами",
    description: "Создайте полнофункциональное приложение для управления задачами",
    difficulty: "advanced",
    category: "project",
    requirements: [
      "CRUD операции для задач",
      "Фильтрация по статусу и категориям",
      "Drag & drop сортировка",
      "Экспорт данных в JSON"
    ],
    tips: [
      "Разделите логику на модули",
      "Используйте паттерн Observer для обновлений",
      "Протестируйте edge cases"
    ],
    resources: [
      {
        title: "JavaScript Design Patterns",
        url: "https://www.patterns.dev/posts/classic-design-patterns/"
      },
      {
        title: "HTML5 Drag and Drop API",
        url: "https://developer.mozilla.org/ru/docs/Web/API/HTML_Drag_and_Drop_API"
      },
      {
        title: "JSON Manipulation",
        url: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON"
      }
    ],
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"]
  },
  {
    id: 8,
    title: "Виртуальная клавиатура",
    description: "Реализуйте виртуальную клавиатуру с поддержкой разных языков",
    difficulty: "advanced",
    category: "javascript",
    requirements: [
      "Полная раскладка клавиатуры",
      "Переключение между языками",
      "Анимация нажатия клавиш",
      "Интеграция с текстовыми полями"
    ],
    tips: [
      "Создайте компонентный подход для клавиш",
      "Используйте data-атрибуты для конфигурации",
      "Оптимизируйте для touch устройств"
    ],
    resources: [
      {
        title: "JavaScript Events",
        url: "https://developer.mozilla.org/ru/docs/Web/API/Event"
      },
      {
        title: "CSS Animations Advanced",
        url: "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Animations/Using_CSS_animations"
      },
      {
        title: "Accessibility Guidelines",
        url: "https://www.w3.org/WAI/ARIA/apg/"
      }
    ],
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 9,
    title: "Погодное приложение",
    description: "Создайте приложение для отображения текущей погоды и прогноза",
    difficulty: "intermediate",
    category: "project",
    requirements: [
      "Определение местоположения пользователя",
      "Отображение текущей погоды и прогноза на 5 дней",
      "Переключение между городами",
      "Адаптивный дизайн с иконками погоды"
    ],
    tips: [
      "Используйте Geolocation API для определения местоположения",
      "Кэшируйте данные погоды",
      "Добавьте скелетон-загрузку"
    ],
    resources: [
      {
        title: "OpenWeatherMap API",
        url: "https://openweathermap.org/api"
      },
      {
        title: "Geolocation API",
        url: "https://developer.mozilla.org/ru/docs/Web/API/Geolocation_API"
      },
      {
        title: "Weather Icons",
        url: "https://erikflowers.github.io/weather-icons/"
      }
    ],
    tech: ["HTML", "CSS", "JavaScript", "API"]
  },
  {
    id: 10,
    title: "Интерпретатор Markdown",
    description: "Создайте редактор Markdown с предпросмотром в реальном времени",
    difficulty: "advanced",
    category: "project",
    requirements: [
      "Редактор и предпросмотр в реальном времени",
      "Подсветка синтаксиса Markdown",
      "Экспорт результата в HTML",
      "Поддержка основных элементов Markdown"
    ],
    tips: [
      "Используйте регулярные выражения для парсинга",
      "Разделите логику на парсер и рендерер",
      "Добавьте горячие клавиши для форматирования"
    ],
    resources: [
      {
        title: "Markdown Guide",
        url: "https://www.markdownguide.org/"
      },
      {
        title: "Regular Expressions",
        url: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions"
      },
      {
        title: "ContentEditable API",
        url: "https://developer.mozilla.org/ru/docs/Web/HTML/Global_attributes/contenteditable"
      }
    ],
    tech: ["HTML", "CSS", "JavaScript", "RegExp"]
  }
];

export const getChallengeById = (id: number): Challenge | undefined => {
  return challenges.find(challenge => challenge.id === id);
};

export const getChallengesByDifficulty = (difficulty: Challenge['difficulty']): Challenge[] => {
  return challenges.filter(challenge => challenge.difficulty === difficulty);
};

export const getChallengesByCategory = (category: Challenge['category']): Challenge[] => {
  return challenges.filter(challenge => challenge.category === category);
};