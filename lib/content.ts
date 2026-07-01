import type { Accent } from "./solutions";

export const approachCards: {
  icon: string;
  title: string;
  text: string;
  accent: Accent;
}[] = [
  {
    icon: "search",
    title: "Диагностика процессов",
    text: "Разбираем, как реально устроены продажи, производство, склад и качество — а не как это нарисовано в регламентах.",
    accent: "accent",
  },
  {
    icon: "map",
    title: "Карта цифровых разрывов",
    text: "Показываем конкретные точки, где теряются заказы, маржа, сырьё, время и управленческая видимость.",
    accent: "cyan",
  },
  {
    icon: "rocket",
    title: "Пилот вместо большой ERP",
    text: "Запускаем один измеримый модуль с понятной экономикой — без рискованного внедрения «всего сразу».",
    accent: "lime",
  },
];

export const problems: { icon: string; title: string; accent: Accent }[] = [
  { icon: "crm", title: "Заказы теряются в WhatsApp, Excel и звонках", accent: "accent" },
  { icon: "manufacturing", title: "Производство не видит реальный спрос", accent: "cyan" },
  { icon: "logistics", title: "Склад не связан с продажами", accent: "lime" },
  { icon: "shield", title: "Качество ведёт журналы вручную", accent: "amber" },
  { icon: "bi", title: "Руководство получает отчёты с задержкой", accent: "accent" },
  { icon: "recipe", title: "Рецептуры и себестоимость живут в разных файлах", accent: "cyan" },
  { icon: "trace", title: "Невозможно быстро отследить партию", accent: "lime" },
  { icon: "ai", title: "AI и аналитика не встроены в реальные процессы", accent: "amber" },
];

export const advantages: { icon: string; title: string; text: string; accent: Accent }[] = [
  {
    icon: "link",
    title: "Не заменяем вашу 1С/SAP",
    text: "Закрываем разрывы между системами, а не заставляем переписывать учётное ядро.",
    accent: "accent",
  },
  {
    icon: "search",
    title: "Говорим языком бизнеса",
    text: "Начинаем с денег, потерь и процессов, а не только с технологий и кода.",
    accent: "cyan",
  },
  {
    icon: "gauge",
    title: "Делаем измеримые пилоты",
    text: "Каждый пилот имеет метрики, по которым видно — есть ли смысл масштабировать.",
    accent: "lime",
  },
  {
    icon: "platform",
    title: "Проектируем под реальных сотрудников",
    text: "Интерфейсы для тех, кто реально работает в цеху, на складе и в продажах.",
    accent: "amber",
  },
  {
    icon: "layers",
    title: "Кастом под процесс",
    text: "Собираем систему под ваш процесс, а не заставляем процесс жить под коробку.",
    accent: "accent",
  },
];

export const homeProcessSteps: { title: string; description: string }[] = [
  {
    title: "Диагностика",
    description: "Разбираем процесс и цель.",
  },
  {
    title: "Карта разрывов",
    description: "Показываем, где теряются деньги.",
  },
  {
    title: "Пилот",
    description: "Запускаем один измеримый модуль.",
  },
  {
    title: "Интеграция",
    description: "Связываем с 1С, SAP, Excel или API.",
  },
  {
    title: "Масштабирование",
    description: "Расширяем в полноценную систему.",
  },
];

export const methodology: { title: string; en: string; description: string }[] = [
  {
    title: "Discovery",
    en: "Погружение",
    description:
      "Изучаем бизнес-модель, цели, узкие места и реальные процессы. Слушаем людей, а не только регламенты.",
  },
  {
    title: "Process Mapping",
    en: "Карта процессов",
    description:
      "Описываем, как реально движутся заказы, сырьё, продукция, документы и данные между подразделениями.",
  },
  {
    title: "Digital Gap Map",
    en: "Карта цифровых разрывов",
    description:
      "Фиксируем точки потерь: где теряются заказы, маржа, время, качество и управленческая видимость.",
  },
  {
    title: "Pilot Scope",
    en: "Границы пилота",
    description:
      "Выбираем один измеримый пилот с понятной экономикой и зоной ответственности.",
  },
  {
    title: "UX/UI Prototype",
    en: "Прототип интерфейсов",
    description:
      "Проектируем интерфейсы под реальных сотрудников и согласуем сценарии до разработки.",
  },
  {
    title: "Development",
    en: "Разработка",
    description:
      "Собираем рабочий модуль итерациями, с регулярной демонстрацией результата.",
  },
  {
    title: "Integration",
    en: "Интеграция",
    description:
      "Связываем решение с 1С/SAP, Excel, API и внутренними системами в единый контур.",
  },
  {
    title: "Rollout",
    en: "Запуск",
    description:
      "Внедряем в работу, обучаем команду и сопровождаем переход на новый процесс.",
  },
  {
    title: "Continuous Improvement",
    en: "Развитие",
    description:
      "Снимаем метрики, улучшаем и масштабируем то, что доказало экономический эффект.",
  },
];

export const concepts: {
  title: string;
  description: string;
  metrics: { value: string; label: string }[];
  accent: Accent;
  icon: string;
  href: string;
}[] = [
  {
    title: "B2B Order Portal for Food Producers",
    description:
      "Портал повторных заказов для HoReCa, магазинов и дистрибьюторов с персональными ценами и интеграцией в 1С.",
    metrics: [
      { value: "+25%", label: "повторных заказов" },
      { value: "−70%", label: "ручной обработки" },
    ],
    accent: "accent",
    icon: "crm",
    href: "/solutions/b2b-order-crm",
  },
  {
    title: "Traceability & HACCP System",
    description:
      "Прослеживаемость партий и цифровые журналы качества: от входного контроля сырья до отгрузки и аудита.",
    metrics: [
      { value: "минуты", label: "на отслеживание партии" },
      { value: "100%", label: "готовность к аудиту" },
    ],
    accent: "lime",
    icon: "trace",
    href: "/solutions/traceability-haccp",
  },
  {
    title: "Recipe & Allergen Control",
    description:
      "Единая база рецептур с версиями, контролем аллергенов, маркировки и себестоимости для большого числа SKU.",
    metrics: [
      { value: "−40%", label: "ошибок в маркировке" },
      { value: "1 база", label: "рецептур и версий" },
    ],
    accent: "cyan",
    icon: "recipe",
    href: "/solutions/recipe-allergen-quality",
  },
  {
    title: "Production BI Dashboard",
    description:
      "Управленческий дашборд: план/факт, продажи, склад, брак, возвраты и загрузка линий в реальном времени.",
    metrics: [
      { value: "real-time", label: "вместо отчётов раз в неделю" },
      { value: "+18%", label: "загрузка линий" },
    ],
    accent: "amber",
    icon: "bi",
    href: "/solutions/demand-production-bi",
  },
];
