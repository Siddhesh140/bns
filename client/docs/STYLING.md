# Styling Guide

## CSS Architecture

This project uses **vanilla CSS** with CSS custom properties (variables) for theming.

## File Structure

```
styles/
└── index.css      # Global styles and variables
```

## Color Palette

```css
:root {
  /* Primary */
  --primary-orange: #FF6B00;
  --primary-dark: #1a1a2e;
  
  /* Text */
  --text-white: #ffffff;
  --text-gray: #a0a0a0;
  
  /* Background */
  --bg-dark: #0d0d1a;
  --bg-card: rgba(255, 255, 255, 0.05);
  
  /* Accent */
  --accent-gold: #FFD700;
  --accent-gradient: linear-gradient(135deg, #FF6B00, #FF8C00);
}
```

## Typography

```css
/* Headings */
font-family: 'Inter', sans-serif;
font-weight: 700;

/* Body */
font-family: 'Inter', sans-serif;
font-weight: 400;

/* Font sizes */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 2rem;
--text-4xl: 2.5rem;
```

## Spacing System

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
```

## Component Patterns

### Cards

```css
.card {
  background: var(--bg-card);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: var(--space-6);
  backdrop-filter: blur(10px);
}
```

### Buttons

```css
.btn-primary {
  background: var(--accent-gradient);
  color: var(--text-white);
  padding: var(--space-3) var(--space-6);
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  border: none;
}

.btn-secondary {
  background: transparent;
  color: var(--text-white);
  border: 1px solid var(--text-white);
}
```

### Glassmorphism

```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
}
```

## Responsive Design

### Breakpoints

```css
/* Mobile first approach */
.element {
  padding: var(--space-4);
}

/* Tablet */
@media (min-width: 768px) {
  .element {
    padding: var(--space-8);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .element {
    padding: var(--space-12);
  }
}
```

### Grid Patterns

```css
/* 2 columns on mobile, 4 on desktop */
.grid-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
}

@media (min-width: 1024px) {
  .grid-cards {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

## Dark Theme

The site uses a dark theme by default:

```css
body {
  background: var(--bg-dark);
  color: var(--text-white);
}
```

## Animation Classes

```css
.fade-in {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.hover-glow:hover {
  box-shadow: 0 0 20px rgba(255, 107, 0, 0.5);
}
```

## Best Practices

1. **Use CSS variables** for consistent theming
2. **Mobile-first** approach
3. **Avoid inline styles** - use classes
4. **Keep selectors simple** - max 2 levels
5. **Use semantic class names** - `.card-header` not `.ch`
