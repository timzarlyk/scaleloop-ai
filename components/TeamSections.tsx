import Container from "./Container";
import Section from "./Section";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import FounderCard from "./FounderCard";
import CompanyLogoCard from "./CompanyLogoCard";
import { Icon } from "./icons";
import { getAccent } from "@/lib/accent";
import { cn } from "@/lib/cn";
import { companyLogos, teamApproach, teamModel } from "@/lib/team";

const cardBase =
  "rounded-[24px] border border-slate-200/95 bg-white/[0.92] shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-[24px]";

/* ===== Founder-led team: team approach + founder card ===== */
export function FounderLead({
  founderBio = "short",
}: {
  founderBio?: "short" | "full";
}) {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal fade={false}>
          <SectionLabel accent="violet">Founder-led team</SectionLabel>
          <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-slate-950 sm:text-4xl">
            Продуктовый подход, инженерия и фокус на результат
          </h2>
          <p className="mt-5 max-w-[760px] text-base leading-[1.6] text-slate-600 opacity-100 sm:text-lg">
            scaleloop.ai с 2022 года помогает компаниям запускать цифровые
            продукты, внутренние системы и операционные платформы. Мы соединяем
            продуктовый подход, дизайн, разработку и бизнес-логику.
          </p>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-14">
          {/* left — team under business task */}
          <Reveal delay={0.05} fade={false}>
            <div className="rounded-[28px] border border-slate-200/95 bg-white/[0.92] p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-[24px] md:p-8">
              <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                Команда под задачу бизнеса
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700 opacity-100 md:text-lg">
                Мы не держим лишних людей ради штата. Под каждый проект
                собирается нужная конфигурация: продуктолог, дизайнер,
                full-stack разработчики, AI-инженер, аналитик, архитектор или
                delivery lead. Так команда остаётся быстрой, точной и
                сфокусированной на результате.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {teamApproach.map((item, i) => {
                  const a = getAccent(item.accent);
                  return (
                    <div
                      key={item.title}
                      className="rounded-[20px] border border-slate-200/90 bg-white p-5 transition-colors duration-200 hover:border-blue-200"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={cn(
                            "flex size-8 items-center justify-center rounded-lg text-xs font-bold",
                            a.bg,
                            a.text
                          )}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h4 className="text-sm font-semibold text-slate-950">
                          {item.title}
                        </h4>
                      </div>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-600 opacity-100">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* right — founder card */}
          <Reveal direction="left" delay={0.1} fade={false}>
            <FounderCard
              variant={founderBio}
              className="mx-auto lg:mx-0 lg:justify-self-end"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ===== Experience: real brand logos ===== */
export function ExperienceLogos() {
  return (
    <Section
      label="Опыт"
      title="Опыт в проектах для сильных брендов"
      intro="Мы работали с продуктами и задачами для компаний из разных отраслей: proptech, retail, FMCG, insurance, enterprise software и digital commerce."
      accent="cyan"
      className="py-16 sm:py-20 lg:py-24"
    >
      <Reveal fade={false}>
        <p className="mt-10 text-center text-sm font-medium text-slate-500 opacity-100">
          Опыт работы с проектами и задачами для компаний:
        </p>
      </Reveal>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {companyLogos.map((logo, i) => (
          <Reveal key={logo.name} delay={(i % 5) * 0.05} fade={false}>
            <CompanyLogoCard logo={logo} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ===== Team model: 6 directions ===== */
export function TeamModel() {
  return (
    <Section
      label="Модель команды"
      title="Шесть направлений под один результат"
      intro="Каждое направление подключается ровно настолько, насколько нужно задаче."
      accent="violet"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {teamModel.map((m, i) => {
          const a = getAccent(m.accent);
          return (
            <Reveal key={m.title} delay={(i % 3) * 0.07} fade={false}>
              <div
                className={cn(
                  cardBase,
                  "p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200/80 hover:bg-white"
                )}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={cn(
                      "flex size-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200/80 bg-white",
                      a.bg
                    )}
                  >
                    <Icon name={m.icon} className={cn("size-6", a.text)} />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                    {m.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 opacity-100">
                  {m.text}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
