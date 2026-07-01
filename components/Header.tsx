"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { industries, industryHref } from "@/lib/industries";
import { getAccent } from "@/lib/accent";
import { cn } from "@/lib/cn";
import AnimatedLogo from "./AnimatedLogo";
import { Icon } from "./icons";
import MegaMenu, { solutionMenuItems } from "./MegaMenu";

type MenuKey = "solutions" | "industries" | null;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuKey>(null);
  const [mobileAccordion, setMobileAccordion] = useState<MenuKey>(null);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(key);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 140);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeAll = () => {
    setOpen(false);
    setMenu(null);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={cn(
          "edge-light mx-auto flex h-14 w-full max-w-7xl items-center justify-between rounded-full pl-4 pr-3 transition-all duration-300",
          scrolled || menu || open ? "glass-strong" : "glass-subtle"
        )}
      >
        <AnimatedLogo />

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          onMouseLeave={scheduleClose}
        >
          <NavItem href="/" active={isActive("/")} onEnter={() => openMenu(null)}>
            Главная
          </NavItem>
          <DropdownTrigger
            label="Решения"
            href="/solutions"
            active={pathname.startsWith("/solutions")}
            isOpen={menu === "solutions"}
            onEnter={() => openMenu("solutions")}
          />
          <DropdownTrigger
            label="Отрасли"
            href="/industries"
            active={pathname.startsWith("/industries")}
            isOpen={menu === "industries"}
            onEnter={() => openMenu("industries")}
          />
          <NavItem
            href="/process"
            active={isActive("/process")}
            onEnter={() => openMenu(null)}
          >
            Как работаем
          </NavItem>
          <NavItem
            href="/about"
            active={isActive("/about")}
            onEnter={() => openMenu(null)}
          >
            Команда
          </NavItem>
          <NavItem
            href="/contact"
            active={isActive("/contact")}
            onEnter={() => openMenu(null)}
          >
            Контакты
          </NavItem>

          <AnimatePresence>
            {menu && (
              <DesktopPanel
                onHoverEnter={cancelClose}
                onHoverLeave={scheduleClose}
                wide={menu === "industries"}
              >
                <MegaMenu type={menu} onNavigate={() => setMenu(null)} />
              </DesktopPanel>
            )}
          </AnimatePresence>
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="group/btn inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[linear-gradient(180deg,#6fb0ff_0%,#4d8dff_55%,#3f7bf0_100%)] px-5 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_10px_28px_-10px_rgba(91,157,255,0.8)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Обсудить проект
            <Icon
              name="arrow"
              className="size-[18px] transition-transform duration-300 group-hover/btn:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
          aria-expanded={open}
          className="flex size-10 items-center justify-center rounded-full glass-subtle text-ink transition-colors hover:bg-accent/10 lg:hidden"
        >
          <Icon name={open ? "close" : "menu"} className="size-5" />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-3 max-h-[calc(100dvh-6rem)] w-full max-w-7xl overflow-y-auto rounded-[28px] glass-strong edge-light p-4 lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              <MobileLink href="/" active={isActive("/")} onClick={closeAll}>
                Главная
              </MobileLink>

              <MobileAccordion
                label="Решения"
                seeAllHref="/solutions"
                isOpen={mobileAccordion === "solutions"}
                onToggle={() =>
                  setMobileAccordion((c) => (c === "solutions" ? null : "solutions"))
                }
                onNavigate={closeAll}
              >
                {solutionMenuItems.map((s) => (
                  <MobileSubLink
                    key={s.slug}
                    href={`/solutions/${s.slug}`}
                    icon={s.icon}
                    accent={s.accent}
                    onClick={closeAll}
                  >
                    {s.label}
                  </MobileSubLink>
                ))}
              </MobileAccordion>

              <MobileAccordion
                label="Отрасли"
                seeAllHref="/industries"
                isOpen={mobileAccordion === "industries"}
                onToggle={() =>
                  setMobileAccordion((c) => (c === "industries" ? null : "industries"))
                }
                onNavigate={closeAll}
              >
                {industries.map((i) => (
                  <MobileSubLink
                    key={i.slug}
                    href={industryHref(i.slug)}
                    icon={i.icon}
                    accent={i.accent}
                    onClick={closeAll}
                  >
                    {i.title}
                  </MobileSubLink>
                ))}
              </MobileAccordion>

              <MobileLink
                href="/process"
                active={isActive("/process")}
                onClick={closeAll}
              >
                Как работаем
              </MobileLink>
              <MobileLink
                href="/about"
                active={isActive("/about")}
                onClick={closeAll}
              >
                Команда
              </MobileLink>
              <MobileLink
                href="/contact"
                active={isActive("/contact")}
                onClick={closeAll}
              >
                Контакты
              </MobileLink>

              <Link
                href="/contact"
                onClick={closeAll}
                className="mt-3 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(180deg,#6fb0ff_0%,#4d8dff_55%,#3f7bf0_100%)] px-7 text-[15px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_10px_28px_-10px_rgba(91,157,255,0.8)]"
              >
                Обсудить проект
                <Icon name="arrow" className="size-[18px]" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ===== Desktop primitives ===== */

function NavItem({
  href,
  active,
  children,
  onEnter,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
  onEnter?: () => void;
}) {
  return (
    <Link
      href={href}
      onMouseEnter={onEnter}
      className={cn(
        "relative rounded-full px-3.5 py-2 text-sm transition-colors duration-200",
        active ? "text-ink" : "text-muted hover:text-ink"
      )}
    >
      {active && (
        <span className="absolute inset-0 -z-10 rounded-full bg-accent/10" />
      )}
      {children}
    </Link>
  );
}

function DropdownTrigger({
  label,
  href,
  active,
  isOpen,
  onEnter,
}: {
  label: string;
  href: string;
  active: boolean;
  isOpen: boolean;
  onEnter: () => void;
}) {
  return (
    <Link
      href={href}
      onMouseEnter={onEnter}
      className={cn(
        "relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm transition-colors duration-200",
        active || isOpen ? "text-ink" : "text-muted hover:text-ink"
      )}
    >
      {(active || isOpen) && (
        <span className="absolute inset-0 -z-10 rounded-full bg-accent/10" />
      )}
      {label}
      <svg
        viewBox="0 0 12 12"
        className={cn("size-3 transition-transform duration-300", isOpen && "rotate-180")}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 4.5 3 3 3-3" />
      </svg>
    </Link>
  );
}

function DesktopPanel({
  children,
  wide,
  onHoverEnter,
  onHoverLeave,
}: {
  children: React.ReactNode;
  wide?: boolean;
  onHoverEnter: () => void;
  onHoverLeave: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
      className={cn(
        "absolute left-1/2 top-[calc(100%+14px)] z-50 w-[min(92vw,var(--w))] -translate-x-1/2",
        wide ? "[--w:880px]" : "[--w:560px]"
      )}
    >
      <div className="edge-light overflow-hidden rounded-[28px] glass-strong p-3">
        {children}
      </div>
    </motion.div>
  );
}

/* ===== Mobile primitives ===== */

function MobileLink({
  href,
  active,
  children,
  onClick,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "rounded-2xl px-4 py-3 text-base transition-colors",
        active ? "bg-accent/10 text-ink" : "text-muted hover:bg-ink/[0.04] hover:text-ink"
      )}
    >
      {children}
    </Link>
  );
}

function MobileAccordion({
  label,
  seeAllHref,
  isOpen,
  onToggle,
  onNavigate,
  children,
}: {
  label: string;
  seeAllHref: string;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-base text-muted transition-colors hover:bg-ink/[0.04] hover:text-ink"
      >
        {label}
        <svg
          viewBox="0 0 12 12"
          className={cn("size-3.5 transition-transform duration-300", isOpen && "rotate-180")}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3 4.5 3 3 3-3" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-0.5 py-1 pl-2">
              {children}
              <Link
                href={seeAllHref}
                onClick={onNavigate}
                className="mx-2 mt-1 rounded-lg px-3 py-2 text-sm font-medium text-accent"
              >
                Все · {label.toLowerCase()} →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileSubLink({
  href,
  icon,
  accent,
  children,
  onClick,
}: {
  href: string;
  icon: string;
  accent: Parameters<typeof getAccent>[0];
  children: React.ReactNode;
  onClick: () => void;
}) {
  const a = getAccent(accent);
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted transition-colors hover:bg-ink/[0.04] hover:text-ink"
    >
      <span className={cn("flex size-8 shrink-0 items-center justify-center rounded-lg glass-subtle", a.bg)}>
        <Icon name={icon} className={cn("size-4", a.text)} />
      </span>
      {children}
    </Link>
  );
}
