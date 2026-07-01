import { heroTechBadges } from "./data";
import styles from "./ShinLineHeroVisual.module.css";

export default function ShinLineHeroVisual() {
  return (
    <div
      className={`edge-light relative overflow-hidden rounded-3xl glass-strong p-5 shadow-lift sm:p-6 ${styles.card}`}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 size-40 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-6 size-36 rounded-full bg-violet/10 blur-3xl" />

      <div className="relative">
        <p className="text-sm font-semibold text-slate-800">
          Цифровой контур предприятия
        </p>
        <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
          Производство, склад, качество, продажи и аналитика в единой системе
        </p>
      </div>

      <div className={`relative mt-4 ${styles.svgWrap}`}>
        <svg
          viewBox="0 0 720 520"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Цифровая модель пищевого предприятия"
        >
          <defs>
            <linearGradient id="shin-top" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eef4ff" />
              <stop offset="100%" stopColor="#dbeafe" />
            </linearGradient>
            <linearGradient id="shin-left" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#c7d9ff" />
              <stop offset="100%" stopColor="#93b4ff" />
            </linearGradient>
            <linearGradient id="shin-right" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#b8ccff" />
              <stop offset="100%" stopColor="#7da3ff" />
            </linearGradient>
            <linearGradient id="shin-accent" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4d8dff" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
            <linearGradient id="shin-screen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8fbff" />
              <stop offset="100%" stopColor="#edf3ff" />
            </linearGradient>
            <filter id="shin-soft" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="8"
                stdDeviation="12"
                floodColor="#2f6bff"
                floodOpacity="0.12"
              />
            </filter>
          </defs>

          {/* floor grid */}
          <g opacity="0.35">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <line
                key={`h-${i}`}
                x1={80 + i * 80}
                y1={100}
                x2={80 + i * 80}
                y2={440}
                stroke="#94a3b8"
                strokeWidth="0.75"
              />
            ))}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={`v-${i}`}
                x1={80}
                y1={100 + i * 80}
                x2={640}
                y2={100 + i * 80}
                stroke="#94a3b8"
                strokeWidth="0.75"
              />
            ))}
          </g>

          {/* connection lines */}
          <g
            className={styles.connectLine}
            stroke="url(#shin-accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.55"
          >
            <line x1="360" y1="268" x2="200" y2="168" />
            <line x1="360" y1="268" x2="520" y2="168" />
            <line x1="360" y1="268" x2="140" y2="300" />
            <line x1="360" y1="268" x2="580" y2="300" />
            <line x1="360" y1="268" x2="360" y2="400" />
          </g>

          {/* center glow */}
          <ellipse
            cx="360"
            cy="268"
            rx="92"
            ry="36"
            fill="#4d8dff"
            opacity="0.12"
            className={styles.centerGlow}
          />

          {/* central platform */}
          <g filter="url(#shin-soft)" transform="translate(360 268)">
            <path d="M0 -58 L78 -22 L0 14 L-78 -22 Z" fill="url(#shin-top)" />
            <path d="M-78 -22 L0 14 L0 74 L-78 38 Z" fill="url(#shin-left)" />
            <path d="M0 14 L78 -22 L78 38 L0 74 Z" fill="url(#shin-right)" />
            <path
              d="M-44 -30 L44 -2 L44 18 L-44 -10 Z"
              fill="url(#shin-screen)"
              stroke="rgba(47,107,255,0.2)"
              strokeWidth="1"
            />
            <rect x="-32" y="-18" width="8" height="22" rx="2" fill="#4d8dff" opacity="0.7" />
            <rect x="-18" y="-12" width="8" height="16" rx="2" fill="#7c3aed" opacity="0.65" />
            <rect x="-4" y="-22" width="8" height="26" rx="2" fill="#06b6d4" opacity="0.7" />
            <rect x="10" y="-8" width="8" height="12" rx="2" fill="#4d8dff" opacity="0.55" />
            <rect x="24" y="-16" width="8" height="20" rx="2" fill="#7c3aed" opacity="0.6" />
            <text
              x="0"
              y="52"
              textAnchor="middle"
              fill="#475569"
              fontSize="11"
              fontWeight="600"
              fontFamily="system-ui, sans-serif"
            >
              ERP
            </text>
          </g>

          {/* production — top left */}
          <g transform="translate(200 168)">
            <path d="M0 -34 L44 -12 L0 10 L-44 -12 Z" fill="url(#shin-top)" />
            <path d="M-44 -12 L0 10 L0 42 L-44 20 Z" fill="url(#shin-left)" />
            <path d="M0 10 L44 -12 L44 20 L0 42 Z" fill="url(#shin-right)" />
            <rect x="-6" y="-28" width="12" height="16" rx="2" fill="#94a3b8" opacity="0.5" />
            <circle cx="0" cy="-8" r="10" stroke="#4d8dff" strokeWidth="2" fill="none" opacity="0.7" />
            <circle cx="0" cy="-8" r="3" fill="#4d8dff" opacity="0.8" />
            <text x="0" y="58" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="600" fontFamily="system-ui, sans-serif">
              MES
            </text>
          </g>

          {/* warehouse — top right */}
          <g transform="translate(520 168)">
            <path d="M0 -34 L44 -12 L0 10 L-44 -12 Z" fill="url(#shin-top)" />
            <path d="M-44 -12 L0 10 L0 42 L-44 20 Z" fill="url(#shin-left)" />
            <path d="M0 10 L44 -12 L44 20 L0 42 Z" fill="url(#shin-right)" />
            <rect x="-18" y="-18" width="14" height="10" rx="1.5" fill="#7c3aed" opacity="0.35" />
            <rect x="-2" y="-22" width="14" height="10" rx="1.5" fill="#4d8dff" opacity="0.4" />
            <rect x="8" y="-14" width="14" height="10" rx="1.5" fill="#06b6d4" opacity="0.35" />
            <text x="0" y="58" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="600" fontFamily="system-ui, sans-serif">
              WMS
            </text>
          </g>

          {/* quality — left */}
          <g transform="translate(140 300)">
            <path d="M0 -30 L38 -10 L0 10 L-38 -10 Z" fill="url(#shin-top)" />
            <path d="M-38 -10 L0 10 L0 36 L-38 16 Z" fill="url(#shin-left)" />
            <path d="M0 10 L38 -10 L38 16 L0 36 Z" fill="url(#shin-right)" />
            <path
              d="M0 -18 L10 -4 L0 6 L-10 -4 Z"
              stroke="#06b6d4"
              strokeWidth="1.5"
              fill="rgba(6,182,212,0.15)"
            />
            <text x="0" y="52" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="600" fontFamily="system-ui, sans-serif">
              QA
            </text>
          </g>

          {/* sales — right */}
          <g transform="translate(580 300)">
            <path d="M0 -30 L38 -10 L0 10 L-38 -10 Z" fill="url(#shin-top)" />
            <path d="M-38 -10 L0 10 L0 36 L-38 16 Z" fill="url(#shin-left)" />
            <path d="M0 10 L38 -10 L38 16 L0 36 Z" fill="url(#shin-right)" />
            <polyline
              points="-16,8 -6,-2 4,2 16,-8"
              stroke="#4d8dff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <text x="0" y="52" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="600" fontFamily="system-ui, sans-serif">
              CRM
            </text>
          </g>

          {/* analytics — bottom */}
          <g transform="translate(360 400)">
            <path d="M0 -30 L38 -10 L0 10 L-38 -10 Z" fill="url(#shin-top)" />
            <path d="M-38 -10 L0 10 L0 36 L-38 16 Z" fill="url(#shin-left)" />
            <path d="M0 10 L38 -10 L38 16 L0 36 Z" fill="url(#shin-right)" />
            <rect x="-16" y="-6" width="6" height="14" rx="1.5" fill="#4d8dff" opacity="0.65" />
            <rect x="-6" y="-12" width="6" height="20" rx="1.5" fill="#7c3aed" opacity="0.6" />
            <rect x="4" y="-4" width="6" height="12" rx="1.5" fill="#06b6d4" opacity="0.65" />
            <text x="0" y="52" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="600" fontFamily="system-ui, sans-serif">
              BI
            </text>
          </g>

          {/* decorative: database stack */}
          <g transform="translate(88 380)">
            <ellipse cx="0" cy="0" rx="22" ry="7" fill="#e2e8f0" />
            <ellipse cx="0" cy="-12" rx="22" ry="7" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
            <ellipse cx="0" cy="-24" rx="22" ry="7" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          </g>

          {/* decorative: pie chart */}
          <g transform="translate(620 120)">
            <circle cx="0" cy="0" r="22" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <path d="M0 0 L0 -22 A22 22 0 0 1 18 10 Z" fill="#4d8dff" opacity="0.55" />
            <path d="M0 0 L18 10 A22 22 0 0 1 -8 20 Z" fill="#7c3aed" opacity="0.45" />
            <path d="M0 0 L-8 20 A22 22 0 0 1 0 -22 Z" fill="#06b6d4" opacity="0.4" />
          </g>

          {/* decorative: AI chip */}
          <g transform="translate(100 130)">
            <rect x="-24" y="-18" width="48" height="36" rx="8" fill="#ffffff" stroke="#c7d9ff" strokeWidth="1.5" />
            <rect x="-14" y="-8" width="28" height="16" rx="4" fill="url(#shin-accent)" opacity="0.85" />
            <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">
              AI
            </text>
            <line x1="-24" y1="0" x2="-30" y2="0" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="24" y1="0" x2="30" y2="0" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="0" y1="-18" x2="0" y2="-24" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="0" y1="18" x2="0" y2="24" stroke="#94a3b8" strokeWidth="1.5" />
          </g>

          {/* decorative: document card */}
          <g transform="translate(610 400)">
            <rect x="-26" y="-32" width="52" height="64" rx="8" fill="#ffffff" stroke="#dbeafe" strokeWidth="1.5" />
            <rect x="-16" y="-20" width="32" height="4" rx="2" fill="#cbd5e1" />
            <rect x="-16" y="-10" width="24" height="3" rx="1.5" fill="#e2e8f0" />
            <rect x="-16" y="-2" width="28" height="3" rx="1.5" fill="#e2e8f0" />
            <rect x="-16" y="8" width="20" height="3" rx="1.5" fill="#e2e8f0" />
            <rect x="-16" y="18" width="26" height="8" rx="3" fill="#4d8dff" opacity="0.25" />
          </g>
        </svg>
      </div>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {heroTechBadges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-white/60 bg-white/50 px-2.5 py-1 text-[10px] font-medium text-slate-600 backdrop-blur-sm"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
