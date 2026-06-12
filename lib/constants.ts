// Common utility functions and constants

export const COLORS = {
  primary: '#003453',
  secondary: '#b6180c',
  vibrantRed: '#FA4B37',
  deepNavy: '#004B76',
  surface: '#f7f9fb',
  surfaceContainer: '#eceef0',
} as const

export const SPACING = {
  marginDesktop: '64px',
  marginMobile: '20px',
  stackSm: '8px',
  stackMd: '16px',
  stackLg: '32px',
  gutter: '24px',
  sectionGap: '120px',
} as const

export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
} as const

// Type definitions
export type PageProps = {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
