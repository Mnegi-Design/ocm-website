# Design System

## Typography

- Font family: Open Sans (`next/font` + Tailwind `font-sans`)
- Reusable component: `components/ui/heading.tsx`
- Reusable component: `components/ui/text.tsx`
- Utility classes: `text-display`, `text-h1`, `text-h2`, `text-h3`, `text-body`, `text-body-sm`

## Buttons

- Reusable component: `components/ui/button.tsx`
- Variants: `primary`, `secondary`, `ghost`
- Sizes: `sm`, `md`, `lg`

## Cards

- Reusable component: `components/ui/card.tsx`
- Padding options: `none`, `sm`, `md`, `lg`

## Containers

- Reusable component: `components/layout/container.tsx`
- Alias export: `components/ui/container.tsx`
- Max width + responsive gutters

## Section

- Reusable component: `components/layout/section.tsx`
- Alias export: `components/ui/section.tsx`
- Supports optional container wrapping

## Grid System

- Reusable component: `components/ui/grid.tsx`
- Supported responsive columns: `1`, `2`, `3`, `4`
- Utility classes: `ds-grid-2`, `ds-grid-3`, `ds-grid-4`

## Spacing Scale (4px)

- Tailwind spacing tokens:
  - `0 = 0px`
  - `1 = 4px`
  - `2 = 8px`
  - `3 = 12px`
  - `4 = 16px`
  - `5 = 20px`
  - `6 = 24px`
  - `8 = 32px`
  - `10 = 40px`
  - `12 = 48px`
  - `16 = 64px`
  - `20 = 80px`
  - `24 = 96px`
