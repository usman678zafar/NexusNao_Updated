# Nexusnao Design System

## 1. Color Palette (Tailwind Tokens)

### Primary (Violet)
- `primary-50`: `#F5F3FF`
- `primary-100`: `#EDE9FE`
- `primary-200`: `#DDD6FE`
- `primary-300`: `#C4B5FD`
- `primary-400`: `#A78BFA`
- `primary-500`: `#8B5CF6` (Brand Base)
- `primary-600`: `#7C3AED` (Main Action)
- `primary-700`: `#6D28D9`
- `primary-800`: `#5B21B6`
- `primary-900`: `#4C1D95`
- `primary-950`: `#2E1065`

### Accent (Cyan & Blue)
- `accent-cyan`: `#22D3EE` (Cyan-400)
- `accent-blue`: `#3B82F6` (Blue-500)
- **Gradient**: `bg-gradient-to-r from-violet-600 to-cyan-400`

### Neutrals (Slate/Rich Black)
- `neutral-50`: `#F8FAFC`
- `neutral-100`: `#F1F5F9`
- `neutral-200`: `#E2E8F0`
- `neutral-300`: `#CBD5E1`
- `neutral-400`: `#94A3B8`
- `neutral-500`: `#64748B`
- `neutral-600`: `#475569`
- `neutral-700`: `#334155`
- `neutral-800`: `#1E293B`
- `neutral-900`: `#0F172A` (Dark Bg)
- `neutral-950`: `#0B0F19` (Darker Bg)

### Semantic
- `success`: `#16A34A`
- `warning`: `#F59E0B`
- `error`: `#EF4444`

## 2. Typography

**Font Family**: `Inter` (sans-serif) or `Geist Sans`

**Type Scale** (Desktop):
- `Display`: 3.5rem (56px) / 1.1 - Bold/ExtraBold
- `H1`: 2.5rem (40px) / 1.2 - Bold
- `H2`: 2.0rem (32px) / 1.25 - SemiBold
- `H3`: 1.5rem (24px) / 1.3 - SemiBold
- `H4`: 1.25rem (20px) / 1.4 - Medium
- `Body Large`: 1.125rem (18px) / 1.6 - Regular
- `Body`: 1rem (16px) / 1.6 - Regular
- `Small`: 0.875rem (14px) / 1.5 - Regular
- `Tiny`: 0.75rem (12px) / 1.5 - Medium (Caps)

## 3. Spacing & Layout

- **Container**: `max-w-7xl` (1280px) or `max-w-6xl` (1152px)
- **Grid System**: 8px base unit.
- **Section Padding**: `py-16` (64px) to `py-24` (96px)
- **Gap**: `gap-4` (16px), `gap-8` (32px), `gap-12` (48px)

## 4. Radii & Shadows

- **Radius**:
  - `rounded-lg`: 8px (Inputs, Small Cards)
  - `rounded-xl`: 12px (Standard Cards)
  - `rounded-2xl`: 16px (Featured Cards)
  - `rounded-3xl`: 24px (Large Containers)
  - `rounded-full`: Pills, Buttons

- **Shadows**:
  - `shadow-sm`: Subtle elevation
  - `shadow-md`: Cards
  - `shadow-lg`: Hover states
  - `shadow-glow`: `0 0 20px rgba(139, 92, 246, 0.3)` (Custom glow)

## 5. Components

### Buttons
- **Primary**: `bg-violet-600 text-white hover:bg-violet-700 rounded-full px-6 py-3 font-medium transition-all shadow-lg shadow-violet-500/20`
- **Secondary**: `border border-neutral-700 text-white hover:bg-neutral-800 rounded-full px-6 py-3 font-medium transition-all`
- **Ghost/Link**: `text-violet-400 hover:text-violet-300 font-medium flex items-center gap-2`

### Cards
- **Base**: `bg-white dark:bg-neutral-900/50 backdrop-blur border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 hover:border-violet-500/50 transition-colors`
- **Feature**: Icon (p-3 rounded-lg bg-violet-500/10 text-violet-400) + Title + Description

### Motion
- **Hover**: Scale 1.02, Lift -2px
- **Entrance**: Fade in up (y: 20 -> 0, opacity: 0 -> 1)
