# OpsForge

Премиальный сайт для компании по разработке цифровых операционных систем для бизнеса:
CRM, ERP/MES-модули, BI-дашборды, AI-аналитика, Traceability/HACCP и внутренние платформы.

> **Позиционирование:** «Разрабатываем цифровые системы для компаний, где рост зависит от управляемости процессов».
> Мы не продаём разработку ради разработки — находим, где бизнес теряет деньги в процессах, и закрываем эту потерю цифровой системой.

## Технологии

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4** (дизайн-токены в `app/globals.css`)
- **Framer Motion** — плавные reveal-анимации и микроанимации
- **TypeScript**, mobile-first, компонентная структура, без лишних библиотек

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production-сборка
npm run start    # запуск собранного приложения
npm run lint     # проверка ESLint
```

## Структура

```
app/
  layout.tsx                       # Root layout: шрифты, метаданные, Header/Footer
  globals.css                      # Дизайн-система: цвета, утилиты, анимации
  page.tsx                         # Главная (10 секций)
  solutions/page.tsx               # Каталог решений
  solutions/[slug]/page.tsx        # Страница решения (data-driven, 8 шт.)
  industries/page.tsx              # Каталог отраслей
  industries/food-production/      # Специализированная страница (пищевые производства)
  process/page.tsx                 # Методология (Discovery → Continuous Improvement)
  contact/page.tsx                 # Заявка + WhatsApp/Email
  not-found.tsx                    # 404
components/
  Header, Footer, Logo
  Button, SectionLabel, Badge, Container, Reveal, BackgroundFX, Section, PageHero
  SolutionCard, IndustryCard, ProcessStep, MetricCard, FeatureTile, CheckList
  HeroDiagram                      # Анимированный «цифровой контур» компании
  CTASection, ContactForm
  icons.tsx                        # Набор inline SVG-иконок
lib/
  site.ts            # Контакты, навигация, позиционирование
  solutions.ts       # Контент всех решений (источник правды для страниц)
  industries.ts      # Отрасли
  content.ts         # Контент главной и методологии
  accent.ts          # Акцентные цвета (полные классы для Tailwind)
  cn.ts              # Утилита объединения классов
```

## Дизайн

- Глубокий графитовый фон, акценты electric blue / cyan / lime / amber
- Glassmorphism-карточки, soft borders, subtle glow, фоновые градиентные blobs и сетка
- Крупная типографика, много воздуха, аккуратные hover- и scroll-анимации
- Идеальная адаптивность: mobile / tablet / desktop

## Как добавить новое решение

Добавьте объект в массив `solutions` в `lib/solutions.ts` — страница `/solutions/<slug>`
сгенерируется автоматически (включая метаданные и статический рендер).

## Заметки

- Форма заявки сейчас работает на стороне клиента (демо). Для продакшена подключите
  обработчик (API route / внешний сервис) в `components/ContactForm.tsx`.
- Контакты-заглушки (email, WhatsApp) заданы в `lib/site.ts`.
