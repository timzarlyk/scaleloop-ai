import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { Button } from "@/components/Button";
import ShinLineHeroVisual from "./ShinLineHeroVisual";
import KpScrollToMeetingButton from "./KpScrollToMeetingButton";
import {
  approachSteps,
  contextCards,
  deliverables,
  diagnosticAreas,
  kpiMetrics,
  pilots,
  principleSteps,
  scaleLoopRoles,
} from "./data";
import { KpCard, KpHeading, KpLead, KpPill, KpSection } from "./ui";

export function KpHero() {
  return (
    <KpSection className="pb-12 pt-8 sm:pb-16 sm:pt-12">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionLabel accent="blue">
            Коммерческое предложение для Shin-Line
          </SectionLabel>
          <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            Цифровая и операционная трансформация пищевого производства
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            ScaleLoop.ai предлагает начать с диагностики процессов, данных и зон
            возможного эффекта, чтобы определить, какие цифровые решения могут
            повысить управляемость производства, качества, складов, логистики,
            продаж и аналитики.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <KpScrollToMeetingButton />
            <Button href="/" variant="secondary" size="lg">
              Вернуться на scaleloop.ai
            </Button>
          </div>
        </div>
        <div className="lg:pl-4">
          <ShinLineHeroVisual />
        </div>
      </div>
    </KpSection>
  );
}

export function KpContext() {
  return (
    <KpSection className="bg-white/30">
      <KpHeading>
        Почему это актуально для пищевого производства масштаба Shin-Line
      </KpHeading>
      <KpLead>
        Для крупного пищевого производителя цифровизация должна решать не
        IT-задачи, а бизнес-задачи: управляемость производства, качество,
        партии, запасы, логистику, продажи, прогноз спроса и прозрачность
        управленческой отчётности.
      </KpLead>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contextCards.map((card) => (
          <KpCard key={card.title}>
            <h3 className="text-sm font-semibold text-slate-900">
              {card.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {card.text}
            </p>
          </KpCard>
        ))}
      </div>
    </KpSection>
  );
}

export function KpPrinciple() {
  return (
    <KpSection>
      <div className="edge-light relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-10 lg:p-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-violet/5" />
        <div className="relative max-w-3xl">
          <KpHeading>Мы не предлагаем внедрять систему «вслепую»</KpHeading>
          <KpLead className="max-w-none">
            Для компании масштаба Shin-Line корректный подход — сначала
            провести диагностику процессов, данных и текущих систем, определить
            зоны возможного эффекта, сформировать roadmap и только затем
            запускать приоритетные пилоты.
          </KpLead>
        </div>
        <div className="relative mt-10 overflow-x-auto pb-2">
          <div className="flex min-w-[540px] items-center justify-between gap-2 sm:min-w-0 sm:gap-4">
            {principleSteps.map((step, i) => (
              <div key={step} className="flex flex-1 items-center">
                <div className="flex flex-col items-center text-center">
                  <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-violet text-sm font-semibold text-white shadow-md sm:size-12">
                    {i + 1}
                  </div>
                  <p className="mt-2 text-xs font-medium text-slate-700 sm:text-sm">
                    {step}
                  </p>
                </div>
                {i < principleSteps.length - 1 && (
                  <div className="mx-1 h-px flex-1 bg-gradient-to-r from-accent/40 to-violet/30 sm:mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </KpSection>
  );
}

export function KpDiagnosticAreas() {
  return (
    <KpSection className="bg-white/30">
      <KpHeading>Что предлагаем изучить на первом этапе</KpHeading>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {diagnosticAreas.map((area) => (
          <KpCard key={area.title}>
            <h3 className="text-sm font-semibold text-slate-900">
              {area.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {area.text}
            </p>
          </KpCard>
        ))}
      </div>
    </KpSection>
  );
}

export function KpApproach() {
  return (
    <KpSection>
      <KpHeading>Предлагаемый подход</KpHeading>
      <div className="relative mt-10 space-y-0">
        {approachSteps.map((item, i) => (
          <div key={item.title} className="relative flex gap-6 pb-10 last:pb-0">
            {i < approachSteps.length - 1 && (
              <div className="absolute left-[19px] top-10 h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-accent/30 to-violet/20" />
            )}
            <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full glass-strong text-sm font-semibold text-accent">
              {i + 1}
            </div>
            <KpCard className="flex-1">
              <p className="text-xs font-medium uppercase tracking-wider text-accent">
                {item.step}
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.text}
              </p>
            </KpCard>
          </div>
        ))}
      </div>
    </KpSection>
  );
}

export function KpPilots() {
  return (
    <KpSection className="bg-white/30">
      <KpHeading>Возможные пилоты для Shin-Line</KpHeading>
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {pilots.map((pilot, i) => (
          <KpCard
            key={pilot.title}
            className={i === pilots.length - 1 ? "lg:col-span-2 lg:max-w-2xl" : ""}
          >
            <div className="flex items-start gap-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-violet/10 text-sm font-semibold text-accent">
                {i + 1}
              </span>
              <div>
                <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                  {pilot.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {pilot.text}
                </p>
              </div>
            </div>
          </KpCard>
        ))}
      </div>
    </KpSection>
  );
}

export function KpDeliverables() {
  return (
    <KpSection>
      <KpHeading>Что получает Shin-Line по итогам диагностики</KpHeading>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {deliverables.map((item) => (
          <div
            key={item}
            className="edge-light flex items-start gap-3 rounded-2xl glass p-5 transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </span>
            <p className="text-sm font-medium text-slate-800">{item}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 max-w-3xl text-base leading-relaxed text-slate-600">
        Итог диагностики — не абстрактный отчёт, а практическая карта решений:
        что внедрять первым, почему именно это, какой эффект ожидается и как
        его измерять.
      </p>
    </KpSection>
  );
}

export function KpKpi() {
  return (
    <KpSection className="bg-white/30">
      <KpHeading>Какие эффекты можно измерять</KpHeading>
      <KpLead>
        Мы предлагаем измерять не количество внедрённых функций, а
        бизнес-результат.
      </KpLead>
      <div className="mt-8 flex flex-wrap gap-2">
        {kpiMetrics.map((metric) => (
          <KpPill key={metric} className="px-4 py-2 text-sm">
            {metric}
          </KpPill>
        ))}
      </div>
    </KpSection>
  );
}

export function KpGovernmentSupport() {
  return (
    <KpSection>
      <div className="edge-light rounded-3xl border border-amber-200/40 bg-gradient-to-br from-amber-50/80 via-white/60 to-white/40 p-8 sm:p-10">
        <KpHeading>
          Дополнительная возможность: государственные инструменты поддержки
        </KpHeading>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
          <p>
            Для промышленных предприятий в Казахстане существуют инструменты
            государственного стимулирования, связанные с технологическим
            аудитом, цифровизацией, внедрением элементов Индустрии 4.0 и
            автоматизированных систем управления.
          </p>
          <p>
            Отдельно можно рассматривать возможность возмещения части затрат
            на приобретение и инсталляцию цифровых технологий через профильные
            государственные инструменты и портал QazIndustry.
          </p>
        </div>
        <p className="mt-6 rounded-xl bg-white/70 p-4 text-sm font-medium leading-relaxed text-slate-800">
          Этот блок стоит рассматривать как дополнительную возможность
          снижения инвестиционной нагрузки при внедрении цифровых решений.
        </p>
        <p className="mt-4 text-xs leading-relaxed text-slate-500">
          Применимость конкретных мер поддержки зависит от действующих правил
          программы, параметров проекта и требований уполномоченных
          организаций.
        </p>
      </div>
    </KpSection>
  );
}

export function KpRole() {
  return (
    <KpSection className="bg-white/30">
      <KpHeading>Роль ScaleLoop.ai</KpHeading>
      <KpLead>
        ScaleLoop.ai выступает не как подрядчик по отдельной разработке, а как
        внешний цифровой партнёр: помогает анализировать процессы, проектировать
        решения, внедрять системы, строить аналитику, автоматизировать рутину и
        сопровождать изменения.
      </KpLead>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {scaleLoopRoles.map((role) => (
          <KpCard key={role}>
            <p className="text-sm font-semibold text-slate-900">{role}</p>
          </KpCard>
        ))}
      </div>
    </KpSection>
  );
}


export function KpFooter() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <p className="text-lg font-semibold text-slate-900">ScaleLoop.ai</p>
        <p className="mt-2 text-sm text-slate-600">
          Цифровые системы для управляемого бизнеса
        </p>
        <p className="mt-1 text-xs text-slate-500">
          CRM / ERP / MES / BI / AI / Traceability
        </p>
        <Link
          href="/"
          className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
        >
          Вернуться на scaleloop.ai
        </Link>
      </div>
    </footer>
  );
}
