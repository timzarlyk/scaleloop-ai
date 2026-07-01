"use client";

import { usePathname } from "next/navigation";
import AmbientBackground from "./AmbientBackground";
import Footer from "./Footer";
import Header from "./Header";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isProposal = pathname?.startsWith("/kp");

  return (
    <>
      <AmbientBackground />
      {isProposal ? (
        <main className="flex-1">{children}</main>
      ) : (
        <>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </>
      )}
    </>
  );
}
