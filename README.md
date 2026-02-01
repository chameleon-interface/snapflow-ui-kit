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

## Импорт серверных и клиентских компонентов (Next.js App Router)

Используйте основной entry для Server Components. Клиентский entry используйте только внутри Client Components.

```tsx
// Server Component
import { Typography } from 'snapflow-ui-kit'

// Client Component
;('use client')
import { Select, DatePicker } from 'snapflow-ui-kit/client'
```

Примечания:

- Основной entry (`snapflow-ui-kit`) не экспортирует client-only компоненты.
- Серверный entry не содержит глобальных CSS сайд-эффектов.
- Клиентский entry включает глобальные стили и client-only компоненты.

### Какие компоненты серверные/клиентские

Серверные (можно импортировать из `snapflow-ui-kit`):

- Alert (без toast функций)
- Button
- Card
- Checkbox
- Label
- Radio
- Tab
- Typography

Клиентские (импортируйте из `snapflow-ui-kit/client`):

- Modal
- Input
- Textarea
- Select
- DatePicker
- Pagination (включая Pager и PageSizeSelect)
- toastSuccess / toastError (Alert)
- SimpleBar (экспортируется как `SimpleBar`)
