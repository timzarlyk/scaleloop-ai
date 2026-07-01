import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Icons: Record<string, (p: IconProps) => React.ReactElement> = {
  crm: (p) => (
    <svg {...base} {...p}>
      <path d="M16 19a4 4 0 0 0-8 0" />
      <circle cx="12" cy="9" r="3" />
      <path d="M3 19a3 3 0 0 1 4-2.8M21 19a3 3 0 0 0-4-2.8" />
      <path d="M5.5 10a2.5 2.5 0 1 1 1.2-4.7M18.5 10a2.5 2.5 0 1 0-1.2-4.7" />
    </svg>
  ),
  erp: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
    </svg>
  ),
  trace: (p) => (
    <svg {...base} {...p}>
      <path d="M4 7V5a1 1 0 0 1 1-1h2M20 7V5a1 1 0 0 0-1-1h-2M4 17v2a1 1 0 0 0 1 1h2M20 17v2a1 1 0 0 1-1 1h-2" />
      <path d="M7 8v8M10 8v8M13 8v8M16 8v8" />
    </svg>
  ),
  bi: (p) => (
    <svg {...base} {...p}>
      <path d="M3 3v18h18" />
      <rect x="7" y="11" width="3" height="6" rx="0.5" />
      <rect x="12" y="7" width="3" height="10" rx="0.5" />
      <rect x="17" y="13" width="3" height="4" rx="0.5" />
    </svg>
  ),
  ai: (p) => (
    <svg {...base} {...p}>
      <rect x="6" y="6" width="12" height="12" rx="3" />
      <circle cx="10" cy="10.5" r="1" />
      <circle cx="14" cy="10.5" r="1" />
      <path d="M9.5 14.5h5M12 6V3M12 21v-3M6 12H3M21 12h-3M6 9H4M6 15H4M20 9h-2M20 15h-2" />
    </svg>
  ),
  platform: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M3 9h18M8 21h8M12 17v4" />
      <circle cx="6" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  ),
  recipe: (p) => (
    <svg {...base} {...p}>
      <path d="M6 3h9l3 3v15a0 0 0 0 1 0 0H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v3h3" />
      <path d="M8.5 11h7M8.5 14h7M8.5 17h4" />
    </svg>
  ),
  demand: (p) => (
    <svg {...base} {...p}>
      <path d="M3 17l5-5 3 3 4-6 6 6" />
      <path d="M3 21h18" />
      <circle cx="8" cy="12" r="0.8" fill="currentColor" />
      <circle cx="11" cy="15" r="0.8" fill="currentColor" />
      <circle cx="15" cy="9" r="0.8" fill="currentColor" />
    </svg>
  ),
  search: (p) => (
    <svg {...base} {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  map: (p) => (
    <svg {...base} {...p}>
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  ),
  rocket: (p) => (
    <svg {...base} {...p}>
      <path d="M14 4c3 0 6 3 6 6-2 4-5 6-9 8l-3-3c2-4 4-7 6-9 0 0 0 0 0-2Z" />
      <path d="M9 15l-3 3M7 11l-3 1 2 3M13 17l1 3 3-2" />
      <circle cx="14.5" cy="9.5" r="1.3" />
    </svg>
  ),
  link: (p) => (
    <svg {...base} {...p}>
      <path d="M9 15l6-6" />
      <path d="M11 6l1-1a4 4 0 0 1 6 6l-1 1M13 18l-1 1a4 4 0 0 1-6-6l1-1" />
    </svg>
  ),
  scale: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3v18M5 7h14" />
      <path d="M5 7l-2.5 6a3 3 0 0 0 5 0L5 7ZM19 7l-2.5 6a3 3 0 0 0 5 0L19 7Z" />
      <path d="M8 21h8" />
    </svg>
  ),
  food: (p) => (
    <svg {...base} {...p}>
      <path d="M5 3v7a3 3 0 0 0 6 0V3M8 3v18" />
      <path d="M17 3c-1.5 1-2.5 3-2.5 6 0 2 1 3 2.5 3s2.5-1 2.5-3c0-3-1-5-2.5-6ZM17 12v9" />
    </svg>
  ),
  distribution: (p) => (
    <svg {...base} {...p}>
      <rect x="1" y="8" width="13" height="9" rx="1" />
      <path d="M14 11h4l3 3v3h-7" />
      <circle cx="5.5" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </svg>
  ),
  construction: (p) => (
    <svg {...base} {...p}>
      <path d="M3 21h18M5 21V8l7-4 7 4v13" />
      <path d="M9 21v-5h6v5M9 11h6" />
    </svg>
  ),
  horeca: (p) => (
    <svg {...base} {...p}>
      <path d="M6 3v6a3 3 0 0 0 6 0V3M9 3v18" />
      <path d="M15 3h4v6a2 2 0 0 1-2 2h-2V3ZM17 11v10" />
    </svg>
  ),
  logistics: (p) => (
    <svg {...base} {...p}>
      <path d="M3 7l9-4 9 4-9 4-9-4Z" />
      <path d="M3 7v10l9 4 9-4V7M12 11v10" />
    </svg>
  ),
  retail: (p) => (
    <svg {...base} {...p}>
      <path d="M4 7h16l-1 13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1L4 7Z" />
      <path d="M9 7V5a3 3 0 0 1 6 0v2" />
    </svg>
  ),
  manufacturing: (p) => (
    <svg {...base} {...p}>
      <path d="M3 21V10l5 3V10l5 3V8l8 5v8H3Z" />
      <path d="M7 17h.01M11 17h.01M15 17h.01" />
    </svg>
  ),
  startup: (p) => (
    <svg {...base} {...p}>
      <path d="M12 2a7 7 0 0 1 7 7c0 3-2 5-3 6H8c-1-1-3-3-3-6a7 7 0 0 1 7-7Z" />
      <path d="M9 21h6M10 18v3M14 18v3M12 9v3" />
    </svg>
  ),
  check: (p) => (
    <svg {...base} {...p}>
      <path d="m5 12 5 5L20 7" />
    </svg>
  ),
  arrow: (p) => (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  alert: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3 2 20h20L12 3Z" />
      <path d="M12 10v4M12 17h.01" />
    </svg>
  ),
  whatsapp: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...p}>
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01ZM12.04 20.15h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.16 8.16 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.25 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.98-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  ),
  menu: (p) => (
    <svg {...base} {...p}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  ),
  close: (p) => (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ),
  mail: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  layers: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="m3 13 9 5 9-5M3 17l9 5 9-5" />
    </svg>
  ),
  shield: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  gauge: (p) => (
    <svg {...base} {...p}>
      <path d="M5 18a8 8 0 1 1 14 0" />
      <path d="M12 14l4-3" />
      <circle cx="12" cy="14" r="1" fill="currentColor" />
    </svg>
  ),
};

export type IconName = keyof typeof Icons;

export function Icon({
  name,
  ...props
}: { name: string } & IconProps) {
  const Cmp = Icons[name] ?? Icons.platform;
  return <Cmp {...props} />;
}
