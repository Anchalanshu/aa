# Styling Documentation - Anchal Chauhan Portfolio

This document details every styling aspect of the portfolio to ensure visual consistency.

## Design Philosophy

**Soft Glassmorphism Theme**
- Dark navy background with purple-to-blue gradients
- Glassmorphic cards with backdrop blur effects
- Poppins font for display headings, Inter for body text
- Smooth animations and generous spacing
- Modern, professional aesthetic

## Color System

### Primary Colors (OKLCH Format)
All colors use OKLCH color space with hue 280 (purple-blue range):

- **Background**: `oklch(0.08 0.01 280)` - Very dark navy
- **Foreground**: `oklch(0.95 0.01 280)` - Near white
- **Card**: `oklch(0.14 0.02 280)` - Slightly lighter than background
- **Accent**: `oklch(0.6 0.2 280)` - Purple-blue accent color
- **Muted**: `oklch(0.25 0.02 280)` - Muted text color
- **Border**: `oklch(0.2 0.02 280 / 0.3)` - Semi-transparent borders

### Gradient Colors
- **Gradient Text**: Linear gradient from `#c4b5fd` → `#a5b4fc` → `#93c5fd` (purple to blue)
- **Glass Background**: `rgba(139, 92, 246, 0.12)` → `rgba(59, 130, 246, 0.06)` → `rgba(255,255,255,0.08)`
- **Project Overlay**: `from-purple-900/40 via-violet-800/30 to-blue-900/40`

## Typography

### Font Families
- **Display Font**: `'Poppins', sans-serif` (weights: 400, 500, 600, 700)
- **Body Font**: `'Inter', sans-serif` (weights: 400, 500, 600, 700)

### Font Weights
- **Display Regular**: 700 (`.font-display`)
- **Display Semibold**: 600 (`.font-display-semibold`)
- **Body**: 400 (default)

### Font Sizes
- **Hero Title**: `text-4xl md:text-6xl` (36px/60px)
- **Section Headings**: `text-4xl md:text-5xl` (36px/48px)
- **Subheadings**: `text-2xl` (24px)
- **Body Text**: `text-lg` (18px) or `text-base` (16px)
- **Small Text**: `text-sm` (14px)

## Glassmorphism Effects

### Glass Card (`.glass`)
```css
backdrop-blur-md;
border: border-white/20;
border-radius: rounded-2xl;
background: linear-gradient(135deg, 
  rgba(139, 92, 246, 0.12) 0%, 
  rgba(59, 130, 246, 0.06) 50%, 
  rgba(255,255,255,0.08) 100%);
```

### Glass Dark (`.glass-dark`)
Used for navbar when scrolled:
```css
background: rgba(0, 0, 0, 0.4);
backdrop-blur-md;
border: border-white/10;
border-radius: rounded-2xl;
```

## Spacing System

### Container
- **Padding**: `px-4` (mobile), `px-6` (tablet), `px-8` (desktop)
- **Max Width**: `1280px` on large screens
- **Section Padding**: `py-20` (80px vertical)

### Component Spacing
- **Card Padding**: `p-6` to `p-8`
- **Gap Between Items**: `gap-4` to `gap-8`
- **Margin Bottom**: `mb-12` for headings, `mb-6` for subheadings

## Animations

### Keyframe Animations

1. **fadeInUp**
   - From: `opacity: 0, translateY(30px)`
   - To: `opacity: 1, translateY(0)`
   - Duration: `0.6s ease-out`

2. **fadeIn**
   - From: `opacity: 0`
   - To: `opacity: 1`
   - Duration: `0.6s ease-out`

3. **slideInLeft**
   - From: `opacity: 0, translateX(-30px)`
   - To: `opacity: 1, translateX(0)`
   - Duration: `0.6s ease-out`

4. **slideInRight**
   - From: `opacity: 0, translateX(30px)`
   - To: `opacity: 1, translateX(0)`
   - Duration: `0.6s ease-out`

5. **glow**
   - Pulsing box-shadow effect
   - Duration: `3s ease-in-out infinite`

### Animation Classes
- `.animate-fadeInUp` - Fade in from bottom
- `.animate-fadeIn` - Simple fade in
- `.animate-slideInLeft` - Slide in from left
- `.animate-slideInRight` - Slide in from right
- `.animate-glow` - Pulsing glow effect

## Component-Specific Styles

### Navbar
- **Fixed Position**: `fixed top-0 w-full z-50`
- **Transition**: `transition-all duration-300`
- **Background**: Transparent by default, `.glass-dark` when scrolled
- **Logo**: `.font-display text-2xl gradient-text`

### Hero Section
- **Min Height**: `min-h-screen`
- **Background Image**: Opacity 30%, full cover
- **Content**: Centered, max-width 3xl
- **Buttons**: Gradient accent background or outline variant

### Project Cards
- **Image Height**: `h-48` (192px)
- **Hover Effect**: `hover:scale-110` on image, `hover:shadow-2xl` on card
- **Tech Tags**: Gradient background with purple-blue colors
- **Overlay**: Purple-blue gradient overlay on images

### Skill Cards
- **Layout**: Grid, 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
- **Hover**: `hover:shadow-lg hover:bg-accent/10`
- **Skill Tags**: `bg-accent/20 text-accent` with rounded-full

### Experience Timeline
- **Timeline Dot**: `w-4 h-4 bg-accent rounded-full`
- **Timeline Line**: `w-0.5 h-full bg-gradient-to-b from-accent to-transparent`
- **Card**: Glass effect with padding

### Contact Form
- **Inputs**: `bg-background border border-border rounded-lg`
- **Focus**: `focus:ring-2 focus:ring-accent`
- **Submit Button**: Full width, accent background

## Responsive Breakpoints

- **Mobile**: Default (< 640px)
- **Tablet**: `md:` (≥ 640px)
- **Desktop**: `lg:` (≥ 1024px)

## Special Effects

### Gradient Text (`.gradient-text`)
```css
background: linear-gradient(135deg, #c4b5fd 0%, #a5b4fc 50%, #93c5fd 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### Smooth Scroll
```css
html {
  scroll-behavior: smooth;
}
```

### Card Content Text (`.card-content-text`)
- Color: `text-muted-foreground`
- Line Height: `leading-relaxed`
- Mobile: `font-size: 0.95rem, line-height: 1.6`

## Button Variants

1. **Default**: Accent background, white text
2. **Outline**: Transparent with border, accent text
3. **Ghost**: Transparent, hover accent background
4. **Sizes**: `sm`, `default`, `lg`

## Border Radius

- **Default**: `0.75rem` (12px)
- **Cards**: `rounded-2xl` (16px)
- **Buttons**: `rounded-md` (6px)
- **Tags**: `rounded-full`

## Shadows

- **Card Hover**: `hover:shadow-lg` or `hover:shadow-2xl`
- **Button**: Default shadow on buttons
- **Glow Effect**: Custom animation with purple glow

## Z-Index Layers

- **Navbar**: `z-50`
- **Dialog Overlay**: `z-50`
- **Dialog Content**: `z-50`
- **Tooltip**: `z-50`

## Important Notes

1. **All colors use OKLCH format** for better color consistency
2. **Glassmorphism requires backdrop-blur** - ensure browser support
3. **Gradient text requires webkit prefixes** for compatibility
4. **Animations are subtle** - 0.6s duration, ease-out timing
5. **Spacing is generous** - py-20 for sections, p-6 to p-8 for cards
6. **Purple-blue theme** - All accents use hue 280 in OKLCH
7. **Dark mode by default** - Theme is set to dark in ThemeProvider

## Assets

- **Hero Background**: External CDN image (can be replaced with local)
- **Projects Background**: External CDN image (can be replaced with local)
- **Project Images**: `/assets/projects/*.png`
- **Resume**: `/resume.pdf`

## Font Loading

Fonts are loaded from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```
