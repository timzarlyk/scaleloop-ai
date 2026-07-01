import type { Accent } from "./solutions";

export type FlowStage = {
  label: string;
  sub: string;
  icon: string;
  color: string;
};

export type Industry = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  accent: Accent;
  tags: string[];
  ctaLabel?: string;
  hero: { title: string; subtitle: string; hubTitle: string };
  flow: FlowStage[];
  losses: { icon: string; title: string; accent: Accent }[];
  modules: { name: string; text: string; icon: string; accent: Accent }[];
  segments: string[];
  questions: string[];
  pilots: { title: string; text: string }[];
  relevantSolutions: string[];
};

const flowColors = [
  "text-accent",
  "text-cyan",
  "text-lime",
  "text-amber",
  "text-teal",
  "text-blue",
];

function flow(items: [string, string, string][]): FlowStage[] {
  return items.map(([label, sub, icon], i) => ({
    label,
    sub,
    icon,
    color: flowColors[i % flowColors.length],
  }));
}

const cycle: Accent[] = ["accent", "cyan", "lime", "amber", "teal", "blue", "yellow"];

function loss(items: [string, string][]): { icon: string; title: string; accent: Accent }[] {
  return items.map(([icon, title], i) => ({
    icon,
    title,
    accent: cycle[i % cycle.length],
  }));
}

function modules(
  acc: Accent[],
  items: [string, string, string][]
): { name: string; text: string; icon: string; accent: Accent }[] {
  return items.map(([name, text, icon], i) => ({
    name,
    text,
    icon,
    accent: acc[i % acc.length],
  }));
}

export const industries: Industry[] = [
  {
    slug: "food-production",
    title: "Пищевые производства",
    description: "CRM, партии, рецептуры, HACCP, BI и спрос.",
    icon: "food",
    accent: "lime",
    tags: ["Продажи", "Производство", "Склад", "Качество", "CRM", "BI", "AI", "ERP/MES"],
    ctaLabel: "Получить карту разрывов для производства",
    hero: {
      title: "Цифровые системы для пищевых производств",
      subtitle:
        "CRM, партии, рецептуры, HACCP, склад, качество, BI и прогноз спроса в одном управляемом контуре.",
      hubTitle: "Производство",
    },
    flow: flow([
      ["Sales", "Продажи", "crm"],
      ["Production", "Производство", "manufacturing"],
      ["Inventory", "Склад", "logistics"],
      ["Quality", "Качество", "shield"],
      ["BI", "Аналитика", "bi"],
      ["AI", "Прогноз", "ai"],
    ]),
    losses: loss([
      ["crm", "Заказы идут через WhatsApp и звонки"],
      ["recipe", "Рецептуры живут в Excel"],
      ["trace", "Партии сложно быстро отследить"],
      ["shield", "HACCP ведётся на бумаге"],
      ["logistics", "Склад не всегда работает по FEFO"],
      ["manufacturing", "Производство не видит спрос"],
      ["bi", "Руководство ждёт отчёты вручную"],
      ["alert", "Качество и продажи живут отдельно"],
    ]),
    modules: modules(
      ["accent", "cyan", "lime", "amber"],
      [
        ["B2B Order CRM", "Повторные заказы от HoReCa, магазинов и опта.", "crm"],
        ["Recipe & Allergen Control", "Рецептуры, версии, аллергены и себестоимость.", "recipe"],
        ["Traceability & HACCP", "Партии, сырьё, качество и аудит в цифре.", "trace"],
        ["Demand & Production BI", "Прогноз спроса, план-факт и контроль брака.", "demand"],
      ]
    ),
    segments: [
      "Кондитерские изделия",
      "Мясная продукция",
      "Молочная продукция",
      "Хлебобулочные изделия",
      "Напитки",
      "Полуфабрикаты",
      "Специи, чай, кофе",
      "Консервы и соусы",
      "Рыбная продукция",
    ],
    questions: [
      "Где сейчас принимаются B2B-заказы?",
      "Как быстро можно отследить партию?",
      "Где хранятся актуальные рецептуры?",
      "Как проверяется аллергенный статус?",
      "Видит ли руководство брак и остатки в одном месте?",
      "Как производство понимает реальный спрос?",
    ],
    pilots: [
      {
        title: "B2B-заказы или трассировка партий за 30 дней",
        text: "Один измеримый модуль без замены 1С и перестройки производства.",
      },
    ],
    relevantSolutions: [
      "b2b-order-crm",
      "recipe-allergen-quality",
      "traceability-haccp",
      "demand-production-bi",
    ],
  },

  {
    slug: "distribution-wholesale",
    title: "Дистрибуция и опт",
    description: "B2B-заказы, клиенты, остатки и повторные продажи.",
    icon: "distribution",
    accent: "cyan",
    tags: ["Продажи", "Склад", "CRM", "BI", "AI"],
    hero: {
      title: "Цифровой контур для дистрибуции и опта",
      subtitle:
        "B2B-заказы, клиенты, остатки, маршруты, дебиторка и повторные продажи в одной системе.",
      hubTitle: "Дистрибуция",
    },
    flow: flow([
      ["Orders", "Заказы", "crm"],
      ["Pricing", "Цены", "scale"],
      ["Inventory", "Остатки", "logistics"],
      ["Dispatch", "Отгрузка", "distribution"],
      ["BI", "Аналитика", "bi"],
      ["AI", "Прогноз", "ai"],
    ]),
    losses: loss([
      ["crm", "Заказы теряются в чатах"],
      ["alert", "Клиенты забываются"],
      ["demand", "Нет повторных продаж"],
      ["logistics", "Остатки не видны менеджерам"],
      ["scale", "Дебиторка контролируется вручную"],
      ["distribution", "Маршруты планируются хаотично"],
      ["bi", "Маржа по клиентам не прозрачна"],
      ["search", "Руководство не видит воронку"],
    ]),
    modules: modules(
      ["accent", "cyan", "lime", "amber"],
      [
        ["B2B Order Portal", "Каталог, персональные цены и повтор заказа.", "crm"],
        ["Sales CRM", "Воронка повторных продаж и напоминания.", "platform"],
        ["Inventory Dashboard", "Актуальные остатки для отдела продаж.", "logistics"],
        ["Client & Margin BI", "Маржа по клиентам, категориям и продажам.", "bi"],
      ]
    ),
    segments: [
      "FMCG-дистрибьюторы",
      "Оптовые поставщики",
      "HoReCa-поставщики",
      "Строительные материалы",
      "Продуктовая дистрибуция",
      "Дистрибуция напитков",
      "Дистрибуция оборудования",
      "Региональные торговые компании",
    ],
    questions: [
      "Как клиент делает повторный заказ?",
      "Видите ли клиентов, которые покупают меньше?",
      "Есть ли напоминания по клиентам у менеджеров?",
      "Как быстро обновляются остатки для продаж?",
      "Где хранится история цен и условий?",
      "Видит ли руководство маржу по клиенту?",
    ],
    pilots: [
      {
        title: "B2B-портал заказов + CRM за 30 дней",
        text: "Заказы переходят в цифровой канал, а руководство видит маржу.",
      },
    ],
    relevantSolutions: [
      "b2b-order-crm",
      "bi-dashboards",
      "ai-forecasting",
      "internal-platforms",
    ],
  },

  {
    slug: "construction-development",
    title: "Строительство и девелопмент",
    description: "Сметы, закупки, подрядчики, сроки и контроль объектов.",
    icon: "construction",
    accent: "amber",
    tags: ["ERP/MES", "BI", "AI", "Качество"],
    hero: {
      title: "Контроль объектов, смет и подрядчиков",
      subtitle:
        "Сметы, закупки, сроки, подрядчики, документы и план-факт по объектам в одном цифровом контуре.",
      hubTitle: "Объекты",
    },
    flow: flow([
      ["Estimate", "Смета", "bi"],
      ["Procurement", "Закупки", "scale"],
      ["Site", "Объект", "construction"],
      ["Contractors", "Подрядчики", "crm"],
      ["BI", "Аналитика", "demand"],
      ["Control", "Контроль", "shield"],
    ]),
    losses: loss([
      ["scale", "Смета и факт живут отдельно"],
      ["alert", "Закупки теряются в чатах"],
      ["crm", "Подрядчики отчитываются вручную"],
      ["demand", "Сроки сдвигаются без причины"],
      ["layers", "Документы разбросаны"],
      ["bi", "Нет дашборда по объектам"],
      ["shield", "Руководство видит проблемы поздно"],
      ["construction", "Бюджет непрозрачен"],
    ]),
    modules: modules(
      ["amber", "accent", "cyan", "lime"],
      [
        ["Project ERP", "План-факт, бюджеты, сроки и риски по объектам.", "erp"],
        ["Procurement Workflow", "Согласование закупок без потерь в чатах.", "scale"],
        ["Contractor Portal", "Единый формат отчётности подрядчиков.", "crm"],
        ["Construction BI", "Отклонения бюджета и сроков в реальном времени.", "bi"],
      ]
    ),
    segments: [
      "Девелоперы",
      "Генподрядчики",
      "Строительные компании",
      "Ремонтные компании",
      "Инжиниринговые компании",
      "Управляющие компании",
      "Компании с несколькими объектами",
      "Компании с подрядчиками",
    ],
    questions: [
      "Где ведётся план-факт по объектам?",
      "Как согласуются закупки и изменения сметы?",
      "Как подрядчики сдают отчётность?",
      "Видит ли руководство отклонения бюджета?",
      "Где хранятся акты, фото и договоры?",
      "Как быстро понятно, почему объект задерживается?",
    ],
    pilots: [
      {
        title: "Дашборд объектов + контроль закупок за 30 дней",
        text: "План-факт по объектам и согласование закупок в одном контуре.",
      },
    ],
    relevantSolutions: [
      "erp-mes-modules",
      "internal-platforms",
      "bi-dashboards",
      "ai-forecasting",
    ],
  },

  {
    slug: "horeca-service-networks",
    title: "HoReCa и сервисные сети",
    description: "Точки, стандарты, поставки, жалобы и аналитика.",
    icon: "horeca",
    accent: "teal",
    tags: ["Продажи", "Качество", "CRM", "BI"],
    hero: {
      title: "Управление точками, стандартами и качеством сети",
      subtitle:
        "Поставки, чек-листы, стандарты, жалобы, персонал, точки и аналитика сети.",
      hubTitle: "Сеть точек",
    },
    flow: flow([
      ["Orders", "Заказы", "crm"],
      ["Points", "Точки", "retail"],
      ["Standards", "Стандарты", "shield"],
      ["Quality", "Качество", "check"],
      ["BI", "Аналитика", "bi"],
      ["AI", "Прогноз", "ai"],
    ]),
    losses: loss([
      ["retail", "Точки работают по-разному"],
      ["shield", "Стандарты проверяются вручную"],
      ["crm", "Заявки поставщикам идут в чатах"],
      ["alert", "Жалобы не превращаются в улучшения"],
      ["logistics", "Остатки и списания непрозрачны"],
      ["scale", "Нет маржи по точкам"],
      ["layers", "Обучение не стандартизировано"],
      ["bi", "Управляющие собирают отчёты вручную"],
    ]),
    modules: modules(
      ["teal", "accent", "cyan", "amber"],
      [
        ["Operations Control Platform", "Единый контроль точек, задач и процессов.", "platform"],
        ["Supplier Order Portal", "Заявки поставщикам вместо чатов.", "crm"],
        ["Standards & Checklist App", "Мобильные чек-листы и фотофиксация.", "shield"],
        ["Network BI", "Маржа, списания и качество по точкам.", "bi"],
      ]
    ),
    segments: [
      "Рестораны",
      "Кофейни",
      "Сети кафе",
      "Кейтеринг",
      "Франшизы",
      "Сервисные сети",
      "Dark kitchen",
      "Компании с филиалами",
    ],
    questions: [
      "Как контролируете стандарты на точках?",
      "Где точки делают заявки поставщикам?",
      "Видите ли списания и остатки по точкам?",
      "Как фиксируются жалобы и инциденты?",
      "Есть ли единая база обучения?",
      "Видите ли маржу и качество по точке?",
    ],
    pilots: [
      {
        title: "Чек-листы стандартов + дашборд точек за 30 дней",
        text: "Качество становится управляемым, а не зависит от человека.",
      },
    ],
    relevantSolutions: [
      "internal-platforms",
      "b2b-order-crm",
      "bi-dashboards",
      "traceability-haccp",
    ],
  },

  {
    slug: "logistics",
    title: "Логистика",
    description: "Маршруты, статусы, склады, SLA и отгрузки.",
    icon: "logistics",
    accent: "blue",
    tags: ["Логистика", "Склад", "BI", "AI"],
    hero: {
      title: "Контроль маршрутов, отгрузок и складов",
      subtitle:
        "Статусы грузов, маршруты, склад, SLA, документы и отклонения в одном экране.",
      hubTitle: "Цепочка поставок",
    },
    flow: flow([
      ["Orders", "Заявки", "crm"],
      ["Routes", "Маршруты", "logistics"],
      ["Warehouse", "Склад", "distribution"],
      ["Tracking", "Статусы", "trace"],
      ["SLA", "SLA", "gauge"],
      ["AI", "Прогноз", "ai"],
    ]),
    losses: loss([
      ["trace", "Статусы обновляются вручную"],
      ["crm", "Клиенты звонят узнать, где груз"],
      ["logistics", "Маршруты не оптимизированы"],
      ["layers", "Склад и водитель в разных системах"],
      ["alert", "Документы теряются"],
      ["demand", "Причины задержек не фиксируются"],
      ["gauge", "Нет BI по SLA"],
      ["bi", "Руководство не видит узкие места"],
    ]),
    modules: modules(
      ["blue", "accent", "cyan", "amber"],
      [
        ["Shipment Tracking Portal", "Статус отгрузки без звонков диспетчеру.", "trace"],
        ["Route Dashboard", "Маршруты, рейсы и отклонения в одном экране.", "logistics"],
        ["Warehouse Module", "Склад, водитель и клиент в одном процессе.", "distribution"],
        ["SLA & Cost BI", "Аналитика по SLA, задержкам и затратам.", "gauge"],
      ]
    ),
    segments: [
      "Логистические операторы",
      "Дистрибьюторы с доставкой",
      "Курьерские службы",
      "Складские компании",
      "Производства с логистикой",
      "Ритейл с РЦ",
      "B2B-поставщики",
      "Компании с автопарком",
    ],
    questions: [
      "Как клиент узнаёт статус отгрузки?",
      "Где диспетчер видит маршруты?",
      "Как фиксируются причины срыва SLA?",
      "Есть ли связь склад — водитель — клиент?",
      "Как считаются затраты на маршрут?",
      "Видит ли руководство проблемные направления?",
    ],
    pilots: [
      {
        title: "Портал статусов + диспетчерский дашборд за 30 дней",
        text: "Клиенты перестают звонить, а срывы SLA видны сразу.",
      },
    ],
    relevantSolutions: [
      "internal-platforms",
      "bi-dashboards",
      "ai-forecasting",
      "erp-mes-modules",
    ],
  },

  {
    slug: "retail",
    title: "Retail",
    description: "Продажи, остатки, возвраты, точки и маржа.",
    icon: "retail",
    accent: "yellow",
    tags: ["Продажи", "Склад", "CRM", "BI", "AI"],
    hero: {
      title: "Продажи, остатки, точки и маржа под контролем",
      subtitle:
        "Retail BI, CRM, лояльность, прогноз спроса и управление точками.",
      hubTitle: "Розничная сеть",
    },
    flow: flow([
      ["Sales", "Продажи", "retail"],
      ["Inventory", "Остатки", "logistics"],
      ["Loyalty", "Лояльность", "crm"],
      ["Returns", "Возвраты", "alert"],
      ["BI", "Аналитика", "bi"],
      ["AI", "Прогноз", "ai"],
    ]),
    losses: loss([
      ["scale", "Не видно маржу по SKU"],
      ["logistics", "Остатки не синхронизированы"],
      ["alert", "Возвраты анализируются поздно"],
      ["demand", "Промо без точной аналитики"],
      ["crm", "Лояльность не персонализирована"],
      ["ai", "Нет прогноза по точкам"],
      ["retail", "Управляющий видит проблемы поздно"],
      ["bi", "Клиентские данные не работают на продажи"],
    ]),
    modules: modules(
      ["yellow", "accent", "cyan", "amber"],
      [
        ["Retail BI", "Маржа по SKU, категории и точке.", "bi"],
        ["Loyalty & CRM", "Персональные повторные покупки.", "crm"],
        ["Inventory Forecasting", "Прогноз спроса по точкам и SKU.", "ai"],
        ["Store Operations Control", "Контроль точек, остатков и возвратов.", "platform"],
      ]
    ),
    segments: [
      "Сети магазинов",
      "Фирменные точки производителей",
      "Fashion retail",
      "Grocery retail",
      "Аптеки",
      "Магазины у дома",
      "E-commerce + offline",
      "Франчайзинговые сети",
    ],
    questions: [
      "Видите ли маржу по SKU и точке?",
      "Как быстро выявляете падение спроса?",
      "Как анализируете возвраты и списания?",
      "Есть ли прогноз спроса по точкам?",
      "Как персонализируете покупки?",
      "Видит ли управляющий отклонения вовремя?",
    ],
    pilots: [
      {
        title: "Retail BI + контроль остатков за 30 дней",
        text: "Видно, что тянет прибыль, а что её съедает.",
      },
    ],
    relevantSolutions: [
      "bi-dashboards",
      "ai-forecasting",
      "b2b-order-crm",
      "internal-platforms",
    ],
  },

  {
    slug: "manufacturing",
    title: "Производственные компании",
    description: "ERP/MES, план-факт, OEE, качество и выпуск.",
    icon: "manufacturing",
    accent: "accent",
    tags: ["Производство", "Склад", "Качество", "ERP/MES", "BI", "AI"],
    hero: {
      title: "ERP/MES-модули для производственных компаний",
      subtitle:
        "План-факт, смены, OEE, качество, склад, выпуск и аналитика производства.",
      hubTitle: "Производство",
    },
    flow: flow([
      ["Planning", "План", "map"],
      ["Production", "Выпуск", "manufacturing"],
      ["Inventory", "Склад", "logistics"],
      ["Quality", "Качество", "shield"],
      ["OEE", "OEE", "gauge"],
      ["BI", "Аналитика", "bi"],
    ]),
    losses: loss([
      ["map", "План собирается вручную"],
      ["gauge", "Простои не фиксируются"],
      ["layers", "Сменные задания в Excel"],
      ["logistics", "Склад не связан с выпуском"],
      ["demand", "Нет OEE по линиям"],
      ["alert", "Брак виден после факта"],
      ["scale", "План, факт и качество отдельно"],
      ["bi", "Руководство не видит узкие места"],
    ]),
    modules: modules(
      ["accent", "cyan", "lime", "amber"],
      [
        ["MES-lite Module", "Сменные задания и фактический выпуск.", "erp"],
        ["Production Planning", "План-факт и загрузка линий.", "map"],
        ["OEE Analytics", "OEE, простои и причины остановок.", "gauge"],
        ["Quality Tracking", "Фиксация брака в моменте.", "shield"],
      ]
    ),
    segments: [
      "Пищевые производства",
      "Лёгкая промышленность",
      "Упаковка",
      "Мебельное производство",
      "Стройматериалы",
      "Металлообработка",
      "Сборочные производства",
      "Компании со сменами",
    ],
    questions: [
      "Как формируется производственный план?",
      "Где фиксируются простои?",
      "Видит ли мастер сменные задания в цифре?",
      "Как связан выпуск со складом и качеством?",
      "Есть ли OEE по линиям?",
      "Как быстро видно отклонение от плана?",
    ],
    pilots: [
      {
        title: "MES-lite + план-факт и OEE за 30 дней",
        text: "Видно загрузку линий, простои и причины потерь.",
      },
    ],
    relevantSolutions: [
      "erp-mes-modules",
      "demand-production-bi",
      "bi-dashboards",
      "traceability-haccp",
    ],
  },

  {
    slug: "startups-products",
    title: "Стартапы и новые продукты",
    description: "MVP, платформы, AI-продукты и быстрый запуск.",
    icon: "startup",
    accent: "lime",
    tags: ["Продажи", "BI", "AI", "CRM"],
    hero: {
      title: "MVP и цифровые продукты без лишней сложности",
      subtitle:
        "Помогаем быстро проверить идею, собрать прототип, MVP, аналитику и первую версию продукта.",
      hubTitle: "Продукт",
    },
    flow: flow([
      ["Discovery", "Гипотеза", "search"],
      ["Prototype", "Прототип", "platform"],
      ["MVP", "MVP", "rocket"],
      ["Users", "Юзеры", "crm"],
      ["Analytics", "Аналитика", "bi"],
      ["Growth", "Рост", "demand"],
    ]),
    losses: loss([
      ["search", "Идея долго не становится продуктом"],
      ["layers", "MVP перегружен функциями"],
      ["platform", "Нет понятной архитектуры"],
      ["alert", "Дизайн не связан с гипотезами"],
      ["bi", "Нет пользовательской аналитики"],
      ["scale", "Бюджет тратится до проверки спроса"],
      ["rocket", "Неясно, что показывать инвестору"],
      ["crm", "Команда не понимает первый scope"],
    ]),
    modules: modules(
      ["lime", "accent", "cyan", "amber"],
      [
        ["Product Discovery", "Гипотезы, пользователи и метрика успеха.", "search"],
        ["UX/UI Prototype", "Кликабельный прототип и сценарии.", "platform"],
        ["MVP Development", "Первая версия вокруг ключевой гипотезы.", "rocket"],
        ["Analytics & Growth Stack", "Поведенческая аналитика с первого дня.", "bi"],
      ]
    ),
    segments: [
      "Стартапы",
      "Корпоративные продукты",
      "Маркетплейсы",
      "SaaS",
      "Внутренние платформы",
      "Mobile apps",
      "AI-продукты",
      "Venture builders",
    ],
    questions: [
      "Какую гипотезу должен проверить MVP?",
      "Кто первый пользователь?",
      "Какая метрика докажет, что продукт нужен?",
      "Какие функции можно убрать из первой версии?",
      "Как собирается поведенческая аналитика?",
      "Что показать инвестору или клиенту?",
    ],
    pilots: [
      {
        title: "Прототип + MVP-scope + первая версия",
        text: "Продукт можно показать пользователям и инвестору.",
      },
    ],
    relevantSolutions: [
      "internal-platforms",
      "bi-dashboards",
      "ai-forecasting",
      "b2b-order-crm",
    ],
  },
];

export const industryFilters = [
  "Продажи",
  "Производство",
  "Склад",
  "Качество",
  "Логистика",
  "AI",
  "BI",
  "CRM",
  "ERP/MES",
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function industryHref(slug: string): string {
  return `/industries/${slug}`;
}
