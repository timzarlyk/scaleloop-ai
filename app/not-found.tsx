import Container from "@/components/Container";
import BackgroundFX from "@/components/BackgroundFX";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden py-32">
      <BackgroundFX variant="hero" />
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel accent="amber">Ошибка 404</SectionLabel>
          <h1 className="mt-6 text-6xl font-semibold tracking-tight sm:text-7xl">
            <span className="text-gradient">Страница не найдена</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Похоже, такой страницы нет — или она переехала. Вернитесь на главную
            или посмотрите наши решения.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/" size="lg" withArrow>
              На главную
            </Button>
            <Button href="/solutions" variant="secondary" size="lg">
              Посмотреть решения
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
