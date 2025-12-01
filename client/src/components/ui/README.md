# UI Components & Icon Library

This directory contains all reusable UI components and icons for the project.

## 📦 Components

### Button
Reusable button component with variants and states.

```javascript
import { Button } from '@/components/ui';

<Button variant="primary" loading={false} disabled={false}>
    Click Me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary'
- `onClick`: Function
- `loading`: Boolean
- `disabled`: Boolean
- `className`: String

---

### Card
Reusable card component for different layouts.

```javascript
import { Card } from '@/components/ui';

<Card 
    variant="problem"
    image="/images/problem-01.jpg"
    title="Title"
    description="Description"
/>
```

---

### SolutionCard
Feature block with alternating image/text layout.

```javascript
import { SolutionCard } from '@/components/ui';

<SolutionCard 
    image="/images/solution-01.png"
    title="Title"
    imagePosition="left"
/>
```

---

## 🎨 Icon Library

All icons are customizable with `size`, `color`, and `className` props.

### Usage

```javascript
import { CheckIcon, CrossIcon, MenuIcon } from '@/components/ui';

// Basic usage
<CheckIcon />

// Custom size and color
<CheckIcon size={24} color="#3B82F6" />

// With Tailwind classes
<CheckIcon className="hover:scale-110 transition-transform" />
```

---

### Available Icons

#### **Action Icons**
- `CheckIcon` - Checkmark ✓
- `CheckCircleIcon` - Checkmark in circle ✓
- `CrossIcon` - X/Close ✗
- `QuestionIcon` - Question mark ?
- `PlusIcon` - Plus/Add +
- `MenuIcon` - Hamburger menu ☰

#### **Social Media Icons**
- `InstagramIcon` - Instagram
- `LinkedInIcon` - LinkedIn
- `TwitterIcon` - Twitter/X
- `FacebookIcon` - Facebook

#### **Contact Icons**
- `EmailIcon` - Email envelope
- `PhoneIcon` - Phone

#### **Status Icons**
- `AlertIcon` - Alert/Error triangle

---

### Icon Props

All icons accept these props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | Number | Varies | Icon size in pixels |
| `color` | String | 'white' or '#ADADAD' | Icon color (hex or CSS color) |
| `className` | String | '' | Additional Tailwind classes |

**Special Props:**
- `PlusIcon` also accepts `bgColor` for background color
- `CheckCircleIcon` draws a circle around the checkmark

---

### Examples

```javascript
// Check icon with custom styling
<CheckIcon 
    size={20} 
    color="white" 
    className="hover:scale-110" 
/>

// Social media icon with hover effect
<InstagramIcon 
    size={20} 
    color="#ADADAD" 
    className="group-hover:stroke-brand-blue transition-colors" 
/>

// Plus icon with custom background
<PlusIcon 
    size={32} 
    color="black" 
    bgColor="white" 
/>
```

---

## 🚀 Best Practices

1. **Import from index**: Always import from `@/components/ui` for cleaner code
2. **Use custom colors**: Leverage Tailwind's custom colors (e.g., `color="brand-blue"`)
3. **Add transitions**: Use Tailwind classes for smooth hover effects
4. **Consistent sizing**: Stick to standard sizes (16, 20, 24, 32, 48)

---

## 📝 Adding New Icons

To add a new icon:

1. Add the icon component to `Icons.jsx`
2. Export it from `index.js`
3. Document it in this README
4. Use consistent prop names (`size`, `color`, `className`)

---

## 🎯 Migration Guide

**Old way (inline SVG):**
```javascript
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2"/>
</svg>
```

**New way (icon component):**
```javascript
import { CheckIcon } from '@/components/ui';

<CheckIcon size={24} color="white" />
```

**Benefits:**
- ✅ Reusable
- ✅ Consistent
- ✅ Easier to maintain
- ✅ Smaller bundle size
