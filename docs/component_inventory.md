# Nexusnao Component Inventory

## 1. Atoms (Base Elements)

### Typography
- `Heading` (H1-H4): Variants for size and weight.
- `Text` (Body, Small, Tiny): Variants for color (muted, default).
- `GradientText`: Text with background clip for brand gradient.

### Buttons
- `Button`:
  - `variant`: `primary` (violet), `secondary` (outline), `ghost` (text), `white` (for dark bg).
  - `size`: `sm`, `md`, `lg`.
  - `icon`: Optional left/right icon.
  - `loading`: Spinner state.

### Inputs
- `Input`: Text, Email, Password.
- `Textarea`: Resizable.
- `Select`: Custom dropdown (Radix).
- `Checkbox`: Terms agreement.
- `Label`: Accessible label.

### Feedback
- `Badge`: Pill shaped (e.g., "New", "Hiring").
- `Spinner`: Loading state.
- `Alert`: Success/Error/Warning messages.

## 2. Molecules (Compound Elements)

### Cards
- `ServiceCard`: Icon + Title + Description + Hover Effect.
- `CaseStudyCard`: Image + Overlay + Title + Tags + CTA.
- `MetricCard`: Large Number + Label + Icon.
- `TestimonialCard`: Quote + Author Info + Avatar/Flag.
- `BlogCard`: Image + Date + Title + Excerpt.

### Navigation
- `Navbar`: Logo + Links + Mobile Menu (Sheet) + CTA.
- `Footer`: Columns (Links) + Socials + Legal + Copyright.
- `Breadcrumb`: Path navigation.

### Interactive
- `Accordion`: FAQ items (Radix).
- `Tabs`: Technology categories (Radix).
- `Carousel`: Testimonials/Logos (Embla or similar).

## 3. Organisms (Sections)

### Hero
- `HomeHero`: H1 + Sub + 2 CTAs + Background Glow.
- `PageHero`: H1 + Sub + Breadcrumb.

### Grids
- `ServiceGrid`: 3x2 grid of ServiceCards.
- `LogoWall`: Flex/Grid of client logos (grayscale -> color on hover).
- `ProcessSteps`: Step-by-step visual flow.

### Forms
- `ContactForm`: Fields + Validation + Submit.
- `NewsletterForm`: Email + Submit.

## 4. Templates (Pages)
- `HomeTemplate`
- `ServiceTemplate`
- `CaseStudyTemplate`
- `ContentPageTemplate` (About, Legal)
