import type { ReactNode } from 'react'

type IconProps = {
  name: string
  className?: string
}

export default function InlineIcon({ name, className = '' }: IconProps) {
  const shared = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 1.8,
  } as const

  const icons: Record<string, ReactNode> = {
    alternate_email: (
      <>
        <circle cx="12" cy="12" r="8" {...shared} />
        <path d="M15.2 9.2v4.2a1.7 1.7 0 0 0 3.4 0V12a6.6 6.6 0 1 0-2.2 4.9" {...shared} />
        <circle cx="12" cy="12" r="3.2" {...shared} />
      </>
    ),
    analytics: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="2" {...shared} />
        <path d="M8 15v-3M12 15V9M16 15v-5" {...shared} />
      </>
    ),
    arrow_forward: (
      <>
        <path d="M5 12h14" {...shared} />
        <path d="m13 6 6 6-6 6" {...shared} />
      </>
    ),
    assignment: (
      <>
        <path d="M8 5h8M9 3h6v4H9V3Z" {...shared} />
        <rect x="5" y="5" width="14" height="17" rx="2" {...shared} />
        <path d="M8 12h8M8 16h6" {...shared} />
      </>
    ),
    bolt: <path d="m13 2-7 10h4l-1 10 7-10h-4l1-10Z" {...shared} />,
    check_circle: (
      <>
        <circle cx="12" cy="12" r="9" {...shared} />
        <path d="m8 12 2.7 2.7L16.5 9" {...shared} />
      </>
    ),
    cloud: (
      <>
        <path d="M7.5 18h10a4 4 0 0 0 .4-8 6 6 0 0 0-11.2-1.7A4.8 4.8 0 0 0 7.5 18Z" {...shared} />
      </>
    ),
    dashboard: (
      <>
        <rect x="4" y="4" width="7" height="7" rx="1.5" {...shared} />
        <rect x="13" y="4" width="7" height="7" rx="1.5" {...shared} />
        <rect x="4" y="13" width="7" height="7" rx="1.5" {...shared} />
        <rect x="13" y="13" width="7" height="7" rx="1.5" {...shared} />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="3" {...shared} />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" {...shared} />
        <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" {...shared} />
      </>
    ),
    devices: (
      <>
        <rect x="3" y="5" width="13" height="10" rx="2" {...shared} />
        <rect x="14" y="9" width="7" height="11" rx="1.5" {...shared} />
        <path d="M8 19h4M10 15v4M17.5 17h.01" {...shared} />
      </>
    ),
    emoji_events: (
      <>
        <path d="M8 4h8v3a4 4 0 0 1-8 0V4Z" {...shared} />
        <path d="M8 6H5a3 3 0 0 0 3 3M16 6h3a3 3 0 0 1-3 3M12 11v5M9 20h6M10 16h4" {...shared} />
      </>
    ),
    eye: (
      <>
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" {...shared} />
        <circle cx="12" cy="12" r="3" {...shared} />
      </>
    ),
    filter_list: <path d="M4 7h16M7 12h10M10 17h4" {...shared} />,
    forum: (
      <>
        <path d="M5 6h13a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" {...shared} />
        <path d="M8 10h8M8 13h5" {...shared} />
      </>
    ),
    group: (
      <>
        <circle cx="9" cy="9" r="3" {...shared} />
        <path d="M4.8 18c.8-2.6 2.9-4 4.2-4s3.4 1.4 4.2 4" {...shared} />
        <circle cx="17.2" cy="10.2" r="2.2" {...shared} />
        <path d="M14.8 18c.5-1.8 1.8-2.8 2.4-2.8s1.9 1 2.4 2.8" {...shared} />
      </>
    ),
    group_add: (
      <>
        <circle cx="9" cy="9" r="3" {...shared} />
        <path d="M4.8 18c.8-2.6 2.9-4 4.2-4s3.4 1.4 4.2 4M17 9v6M14 12h6" {...shared} />
      </>
    ),
    groups: (
      <>
        <circle cx="12" cy="8" r="3" {...shared} />
        <path d="M7 20c1-3 3.2-4.5 5-4.5S16 17 17 20M5.5 11.5a2 2 0 1 1 0-4M18.5 7.5a2 2 0 1 1 0 4M3 18c.4-1.6 1.4-2.7 2.5-3M21 18c-.4-1.6-1.4-2.7-2.5-3" {...shared} />
      </>
    ),
    hub: (
      <>
        <circle cx="12" cy="12" r="2.2" {...shared} />
        <circle cx="5.5" cy="8" r="1.6" {...shared} />
        <circle cx="18.5" cy="8" r="1.6" {...shared} />
        <circle cx="5.5" cy="16" r="1.6" {...shared} />
        <circle cx="18.5" cy="16" r="1.6" {...shared} />
        <path d="M10.1 11 7 9.1M13.9 11 17 9.1M10.1 13 7 14.9M13.9 13 17 14.9" {...shared} />
      </>
    ),
    key: (
      <>
        <circle cx="8" cy="15" r="4" {...shared} />
        <path d="m11 12 8-8M15 8l2 2M17 6l2 2" {...shared} />
      </>
    ),
    linkedin: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="3" {...shared} />
        <path d="M8 10v6M8 7.5h.01M11.5 10v6M11.5 12.2c0-1.3 1-2.4 2.3-2.4 1.4 0 2.2 1 2.2 2.7V16" {...shared} />
      </>
    ),
    location_on: (
      <>
        <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 0 1 16 0Z" {...shared} />
        <circle cx="12" cy="10" r="2.5" {...shared} />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="2" {...shared} />
        <path d="M8 10V8a4 4 0 0 1 8 0v2" {...shared} />
      </>
    ),
    logout: (
      <>
        <path d="M10 5H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4M14 8l4 4-4 4M18 12H9" {...shared} />
      </>
    ),
    mail: (
      <>
        <rect x="3.5" y="6" width="17" height="12" rx="2" {...shared} />
        <path d="m4.5 7.5 7.1 5.1c.2.1.4.1.6 0l7.3-5.1" {...shared} />
      </>
    ),
    more_vert: (
      <>
        <circle cx="12" cy="5" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="12" cy="19" r="1" fill="currentColor" />
      </>
    ),
    payments: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="2.5" {...shared} />
        <path d="M3 10h18M7 15h4" {...shared} />
      </>
    ),
    phone: (
      <>
        <path d="M7 4h3l1.5 4-2 1.2a12 12 0 0 0 5.3 5.3l1.2-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 5 7.2 2 2 0 0 1 7 4Z" {...shared} />
      </>
    ),
    priority_high: (
      <>
        <path d="M12 5v8" {...shared} />
        <circle cx="12" cy="18" r="1" fill="currentColor" />
      </>
    ),
    psychology: (
      <>
        <path d="M9 19a6 6 0 1 1 7.5-8.9A4 4 0 0 1 18 17h-2v2" {...shared} />
        <path d="M9 19v-3H7M12 8v2M9.5 10h5" {...shared} />
      </>
    ),
    public: (
      <>
        <circle cx="12" cy="12" r="9" {...shared} />
        <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" {...shared} />
      </>
    ),
    rocket: (
      <>
        {/* Rocket body */}
        <path d="M12.5 2.5c-1.3 0-3.2 1.5-4.8 4.2-1.3 2.2-2.2 4.8-2.2 6.3 0 2.5 1.5 4 3.5 4.5l.5 2.5h2l1.5-2.2 1.5 2.2h2l.5-2.5c2-.5 3.5-2 3.5-4.5 0-1.5-.9-4.1-2.2-6.3C17 4 15.1 2.5 13.5 2.5h-1Z" {...shared} />
        {/* Window */}
        <circle cx="13" cy="10" r="2" {...shared} />
        {/* Left fin */}
        <path d="M7.5 14.5 4 18l3.5-.5" {...shared} />
        {/* Right fin */}
        <path d="M18.5 14.5 22 18l-3.5-.5" {...shared} />
      </>
    ),
    route: (
      <>
        <circle cx="6" cy="6" r="2" {...shared} />
        <circle cx="18" cy="18" r="2" {...shared} />
        <path d="M8 6h5a3 3 0 0 1 0 6h-2a3 3 0 0 0 0 6h5" {...shared} />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="6" {...shared} />
        <path d="m16 16 4 4" {...shared} />
      </>
    ),
    security: (
      <>
        <path d="M12 3.5 18 6v5.2c0 3.7-2.4 6.9-6 8.3-3.6-1.4-6-4.6-6-8.3V6l6-2.5Z" {...shared} />
        <path d="M12 8v6M12 14.7h.01" {...shared} />
      </>
    ),
    shield: (
      <>
        <path d="M12 3.5 19 6v5.3c0 4.3-2.8 7.4-7 9-4.2-1.6-7-4.7-7-9V6l7-2.5Z" {...shared} />
      </>
    ),
    smartphone: (
      <>
        <rect x="7" y="3" width="10" height="18" rx="2" {...shared} />
        <path d="M11 18h2" {...shared} />
      </>
    ),
    speed: (
      <>
        <path d="M5.6 17a8 8 0 1 1 12.8 0" {...shared} />
        <path d="m12 13 4-5" {...shared} />
        <path d="M8 17h8" {...shared} />
      </>
    ),
    star: (
      <path d="m12 3 2.7 5.5 6 .9-4.4 4.2 1 5.9L12 16.7 6.7 19.5l1-5.9-4.4-4.2 6-.9L12 3Z" {...shared} />
    ),
    stars: (
      <>
        <path d="M12 3l1.3 3.6L17 8l-3.7 1.4L12 13l-1.3-3.6L7 8l3.7-1.4L12 3ZM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14ZM18 13l1 2.8 3 1.2-3 1.2-1 2.8-1-2.8-3-1.2 3-1.2 1-2.8Z" {...shared} />
      </>
    ),
    terminal: (
      <>
        <rect x="3.5" y="5" width="17" height="14" rx="2" {...shared} />
        <path d="M7 10.5 9.5 12 7 13.5M11.5 13.5h4.5" {...shared} />
      </>
    ),
    trending_down: (
      <>
        <path d="M4 8l5 5 4-4 7 8" {...shared} />
        <path d="M15 17h5v-5" {...shared} />
      </>
    ),
    trending_up: (
      <>
        <path d="M4 16 9 11l4 4 7-8" {...shared} />
        <path d="M15 7h5v5" {...shared} />
      </>
    ),
    verified_user: (
      <>
        <path d="M12 3.5 18 6v5.2c0 3.7-2.4 6.9-6 8.3-3.6-1.4-6-4.6-6-8.3V6l6-2.5Z" {...shared} />
        <path d="m9 12 2 2 4-5" {...shared} />
      </>
    ),
    visibility: (
      <>
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" {...shared} />
        <circle cx="12" cy="12" r="3" {...shared} />
      </>
    ),
    visibility_off: (
      <>
        <path d="m3 3 18 18M10.6 10.6a3 3 0 0 0 3.8 3.8M8.4 5.6A10.8 10.8 0 0 1 12 5c6 0 10 7 10 7a17.5 17.5 0 0 1-2.3 3.2M6.1 6.9C3.5 8.7 2 12 2 12s4 7 10 7c1.4 0 2.7-.4 3.9-1" {...shared} />
      </>
    ),
  }

  return (
    <svg className={`inline-block shrink-0 ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      {icons[name] ?? icons.shield}
    </svg>
  )
}
