import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { site } from "@/lib/site";
import { primarySolutions } from "@/lib/solutions";
import { industries, industryHref } from "@/lib/industries";
import { Icon } from "./icons";
import WhatsAppIcon from "./WhatsAppIcon";

const footerSolutions = primarySolutions.slice(0, 6);

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-line bg-base-2/50 backdrop-blur-xl">
      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-700">
              Софт для роста, контроля и прозрачности бизнеса.
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Находим, где бизнес теряет деньги в процессах, и закрываем разрыв
              цифровой системой.
            </p>
          </div>

          <FooterCol title="Решения">
            {footerSolutions.map((s) => (
              <FooterLink key={s.slug} href={`/solutions/${s.slug}`}>
                {s.name}
              </FooterLink>
            ))}
            <FooterLink href="/solutions">Все решения</FooterLink>
          </FooterCol>

          <FooterCol title="Отрасли">
            {industries.map((i) => (
              <FooterLink key={i.slug} href={industryHref(i.slug)}>
                {i.title}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Контакты">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-ink"
            >
              <Icon name="mail" className="size-[18px] text-slate-500" />
              {site.email}
            </a>
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-ink"
            >
              <WhatsAppIcon className="size-[18px] text-[#25D366]" />
              {site.whatsapp}
            </a>
            <FooterLink href="/process">Как мы работаем</FooterLink>
            <FooterLink href="/about">Команда</FooterLink>
            <FooterLink href="/contact">Оставить заявку</FooterLink>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {site.name}. {site.tagline}
          </p>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            {site.positioningEn}
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-ink">{title}</h4>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-muted transition-colors hover:text-ink"
    >
      {children}
    </Link>
  );
}
