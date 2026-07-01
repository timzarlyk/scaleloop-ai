import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import IndustriesExplorer from "@/components/IndustriesExplorer";

export const metadata: Metadata = {
  title: "Отрасли — где мы закрываем цифровые разрывы",
  description:
    "Пищевые производства, дистрибуция, строительство, HoReCa, логистика, retail, производство и стартапы — отрасли, где рост зависит от управляемости процессов.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        label="Отрасли"
        title="Отрасли, где мы закрываем цифровые разрывы"
        subtitle="Мы работаем с компаниями, где рост зависит от управляемости продаж, склада, производства, качества, логистики, команд и аналитики."
        accent="amber"
        actions={[
          { label: "Обсудить проект", href: "/contact" },
          { label: "Посмотреть решения", href: "/solutions", variant: "secondary" },
        ]}
      />

      <Section
        label="Направления"
        title="Выберите свою отрасль"
        intro="Для каждой отрасли — свои цифровые разрывы и свои быстрые пилоты. Отфильтруйте по тому, что вам ближе."
        accent="amber"
      >
        <div className="mt-12">
          <IndustriesExplorer />
        </div>
      </Section>

      <CTASection
        title="Не нашли свою отрасль?"
        text="Наш подход универсален: находим, где теряются деньги в процессах, и закрываем разрыв цифровой системой — независимо от индустрии."
        primary={{ label: "Обсудить ваш случай", href: "/contact" }}
        secondary={{ label: "Посмотреть решения", href: "/solutions" }}
      />
    </>
  );
}
