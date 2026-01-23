# Snapflow UI Kit

Библиотека React UI компонентов на TypeScript с Storybook документацией.

> **Проект находится на начальной стадии разработки.** API и документация могут изменяться.

## Разработка

### Команды

```bash
pnpm dev              # Запуск Storybook (порт 6006)
pnpm build            # Сборка библиотеки
pnpm lint             # Проверка ESLint
pnpm lint:fix         # Автоисправление ESLint
pnpm lint:style       # Проверка Stylelint для CSS
pnpm lint:style:fix   # Автоисправление Stylelint
pnpm format           # Проверка Prettier
pnpm format:fix       # Форматирование Prettier
```

### Структура компонентов

```
src/components/{ComponentName}/
├── {ComponentName}.tsx         # Реализация компонента
├── {ComponentName}.module.css  # CSS Module стили
├── {ComponentName}.stories.tsx # Storybook истории
└── index.ts                    # Экспорты
```

> **Важно:** После создания нового компонента добавьте его экспорт в `src/components/index.ts`.
>
> Это barrel-файл, через который все компоненты реэкспортируются наружу библиотеки.
>
> Без этого компонент не будет доступен пользователям.

### Стек технологий

- React 19
- TypeScript
- Vite
- Storybook 10
- CSS Modules
- ESLint + Prettier + Stylelint
