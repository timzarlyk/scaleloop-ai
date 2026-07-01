import type { Accent } from "@/lib/solutions";

export const founder = {
  name: "Темирлан Зарлыков",
  nameEn: "Temirlan Zarlykov",
  role: "Founder & Product Lead",
  photo: "/me.png",
  alt: "Temirlan Zarlykov, Founder of scaleloop.ai",
  bio: "Темирлан Зарлыков — основатель scaleloop.ai, продуктолог и предприниматель. Работает на стыке бизнеса, дизайна, разработки и роста: от продуктовой стратегии и UX до запуска B2B-систем, внутренних платформ и новых цифровых продуктов. В Beep — стартапе для американского рынка в сфере on-demand roadside assistance — он помог найти Product-Market Fit и вывести продукт на выручку около $30,000 в месяц.",
  bioShort:
    "Основатель scaleloop.ai, продуктолог и предприниматель. В Beep — on-demand roadside assistance стартапе для США — помог найти Product-Market Fit и вывести продукт на выручку около $30,000 в месяц.",
  badges: [
    "Product Strategy",
    "UX/UI",
    "B2B Systems",
    "AI & Automation",
    "Growth",
  ],
};

export const companyLogos: {
  name: string;
  src: string;
  className: string;
}[] = [
  {
    name: "Matterport",
    src: "/logos/matterport.png",
    className: "w-[150px] max-h-[42px]",
  },
  {
    name: "MonAmie",
    src: "/logos/monamie.jpeg",
    className: "w-[138px] max-h-[44px]",
  },
  {
    name: "RG Brands",
    src: "/logos/rg-brands.jpg",
    className: "w-[145px] max-h-[48px]",
  },
  {
    name: "Qasco",
    src: "/logos/qasco.jpg",
    className: "w-[118px] max-h-[44px]",
  },
  {
    name: "Magnum",
    src: "/logos/magnum.png",
    className: "w-[118px] max-h-[42px]",
  },
];

export const teamApproach: {
  title: string;
  text: string;
  accent: Accent;
}[] = [
  {
    title: "Product-first",
    text: "Сначала цель, процесс и экономика. Потом интерфейс и код.",
    accent: "accent",
  },
  {
    title: "Business clarity",
    text: "Говорим на языке выручки, маржи, скорости, контроля и качества.",
    accent: "cyan",
  },
  {
    title: "Global specialists",
    text: "Подключаем сильных специалистов под конкретную задачу и рынок.",
    accent: "violet",
  },
  {
    title: "Delivery focus",
    text: "Запускаем измеримые пилоты и системы, а не абстрактную разработку.",
    accent: "teal",
  },
];

export const teamModel: {
  title: string;
  text: string;
  icon: string;
  accent: Accent;
}[] = [
  {
    title: "Product",
    text: "Цели, гипотезы, UX-логика и метрики результата.",
    icon: "scale",
    accent: "accent",
  },
  {
    title: "Design",
    text: "Интерфейсы, которые удобно использовать реальным сотрудникам.",
    icon: "layers",
    accent: "violet",
  },
  {
    title: "Engineering",
    text: "Frontend, backend, интеграции и архитектура продукта.",
    icon: "erp",
    accent: "blue",
  },
  {
    title: "AI",
    text: "Автоматизация, прогнозирование и интеллектуальные подсказки.",
    icon: "ai",
    accent: "cyan",
  },
  {
    title: "Analytics",
    text: "BI, dashboards, метрики, отчёты и прозрачность процессов.",
    icon: "bi",
    accent: "amber",
  },
  {
    title: "Delivery",
    text: "Управление запуском, качеством, сроками и внедрением.",
    icon: "rocket",
    accent: "teal",
  },
];
