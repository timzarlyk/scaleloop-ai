"use client";

import Link from "next/link";
import AnimatedLogo from "@/components/AnimatedLogo";
import { Button } from "@/components/Button";
import Container from "@/components/Container";

export default function KpHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <Container className="max-w-6xl">
        <div className="edge-light flex items-center justify-between gap-4 rounded-2xl glass-strong px-4 py-3 sm:px-6">
          <Link href="/" className="shrink-0">
            <AnimatedLogo compact showWordmark />
          </Link>
          <Button href="/" variant="secondary" size="md">
            Вернуться на сайт
          </Button>
        </div>
      </Container>
    </header>
  );
}
