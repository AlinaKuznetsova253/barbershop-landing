# Barbershop landing 🚀

Лендинг для Barbershop с использованием [Vite](https://vitejs.dev/), **vanilla JavaScript**, кастомных стилей и компонентов.

---

## 🧰 Используемые технологии

- ⚡️ [Vite](https://vitejs.dev/) — быстрый сборщик и dev-сервер
- 💅 [Prettier](https://prettier.io/) — автоформатирование кода
- 🔖 [release-it](https://github.com/release-it/release-it) — управление релизами и тегами
- 🎞 [Swiper.js](https://swiperjs.com/) — слайдер для изображений и контента
- 🎨 CSS-модули и поддержка `@import` для шрифтов и стилей

---

## 📂 Структура проекта

```bash
.
├── dist/                   # Сборка для продакшена (vite build)
├── public/                 # Статичные файлы (favicon и т.п.)
├── src/
│   ├── css/                # Все CSS-файлы (включая fonts.css)
│   ├── js/                 # Все JS-скрипты (index.js, swiper.js и т.п.)
│   └── assets/            # Изображения и ресурсы (.webp, .svg)
├── index.html             # Главный HTML-файл
├── vite.config.js         # Конфигурация Vite
├── .prettierrc            # Настройки форматирования Prettier
├── .prettierignore        # Исключения для Prettier
├── .release-it.json       # Настройки release-it
├── package.json           # Список зависимостей и npm-скриптов
└── README.md              # Документация проекта
```

## 🚀 Быстрый старт

### Установка зависимостей

```bash
npm install
```

### Запуск проекта в dev-режиме

```bash
npm run dev
```

### Сборка в продакшн

```bash
npm run build
```

### Просмотр продакшн-сборки локально

```bash
npm run preview
```

### Запустить автоформатирование кода

```bash
npm run format
```
