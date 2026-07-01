export const site = {
  name: "scaleloop.ai",
  positioning:
    "Софт для роста, контроля и прозрачности бизнеса",
  positioningSub:
    "Создаём CRM, ERP/MES-модули, BI-дашборды и AI-решения, которые соединяют продажи, производство, склад, качество и аналитику в один управляемый контур.",
  positioningEn: "Software for growth, control and transparency",
  tagline: "Софт для роста, контроля и прозрачности бизнеса.",
  email: "contact@scaleloop.ai",
  whatsapp: "+7 747 629 1556",
  whatsappLink: "https://wa.me/77476291556",
};

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Главная", href: "/" },
  { label: "Решения", href: "/solutions" },
  { label: "Отрасли", href: "/industries" },
  { label: "Как работаем", href: "/process" },
  { label: "Команда", href: "/about" },
  { label: "Контакты", href: "/contact" },
];

/** Порядок и подписи решений в выпадающем меню навигации. */
export const menuSolutions: { slug: string; label: string }[] = [
  { slug: "b2b-order-crm", label: "B2B Order CRM" },
  { slug: "traceability-haccp", label: "Traceability & HACCP" },
  { slug: "recipe-allergen-quality", label: "Recipe & Quality Control" },
  { slug: "demand-production-bi", label: "Demand & Production BI" },
  { slug: "erp-mes-modules", label: "ERP/MES Modules" },
  { slug: "internal-platforms", label: "Internal Platforms" },
];
