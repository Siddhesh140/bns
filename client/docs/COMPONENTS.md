# Components Guide

## Component Architecture

```
components/
├── layout/         # Page structure components
│   ├── Navbar.jsx  # Navigation bar
│   └── Footer.jsx  # Page footer
├── ui/             # Reusable UI components
│   ├── Button.jsx
│   ├── Cards.jsx
│   ├── ContactForm.jsx
│   ├── PricingCard.jsx
│   └── Icons.jsx
└── ErrorBoundary.jsx
```

---

## Layout Components

### Navbar

Animated navigation with mobile menu.

```jsx
import { Navbar } from './components/layout';

<Navbar />
```

**Features:**
- Smooth slide-down entrance animation
- Staggered link reveal
- Hover effects on links
- Responsive mobile menu with AnimatePresence
- Logo scaling on hover/tap

**Sections linked:**
- What (How We Work)
- How (Process)
- Who (Audience)
- Why (Benefits)

---

### Footer

Full-width footer with company info and links.

```jsx
import { Footer } from './components/layout';

<Footer />
```

---

## UI Components

### Button

Animated button with variants.

```jsx
import { Button } from './components/ui';

// Primary (default)
<Button onClick={handleClick}>Join Now</Button>

// Secondary
<Button variant="secondary">Learn More</Button>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Button style |
| `onClick` | `function` | - | Click handler |
| `children` | `ReactNode` | - | Button content |

**Animations:**
- Scale up on hover (1.05)
- Glow effect on hover
- Scale down on tap (0.95)

---

### Cards

Problem and Solution card components.

```jsx
import { ProblemCard, SolutionCard } from './components/ui';

<ProblemCard
  title="Problem Title"
  description="Problem description here"
  icon={<CustomIcon />}
/>

<SolutionCard
  title="Solution Title"
  description="Solution description here"
  icon={<CustomIcon />}
/>
```

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Card heading |
| `description` | `string` | Card body text |
| `icon` | `ReactNode` | Icon component |

---

### ContactForm

Modal form for user registration.

```jsx
import { ContactForm } from './components/ui';

const [isOpen, setIsOpen] = useState(false);

<ContactForm 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
/>
```

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | `boolean` | Modal visibility |
| `onClose` | `function` | Close handler |

**Fields collected:**
- Name
- Email
- Phone
- Position (optional)
- Company (optional)

---

### PricingCard

Modal pricing display with features list.

```jsx
import { PricingCard } from './components/ui';

<PricingCard
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onJoin={handleJoin}
/>
```

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | `boolean` | Modal visibility |
| `onClose` | `function` | Close handler |
| `onJoin` | `function` | CTA click handler |

**Animations:**
- Modal scale + fade entrance
- Staggered feature reveal
- Image zoom on hover
- Button glow on hover

---

### Icons

Custom SVG icons.

```jsx
import { 
  CommunityIcon,
  GrowthIcon,
  MentorshipIcon,
  NetworkIcon,
  CertificateIcon
} from './components/ui';

<CommunityIcon className="w-6 h-6" />
```

---

## ErrorBoundary

Catches React errors and displays fallback UI.

```jsx
import ErrorBoundary from './components/ErrorBoundary';

<ErrorBoundary fallback={<ErrorPage />}>
  <App />
</ErrorBoundary>
```

---

## Import Pattern

Use barrel exports:

```jsx
// ✅ Good
import { Button, ProblemCard, ContactForm } from './components/ui';
import { Navbar, Footer } from './components/layout';

// ❌ Avoid
import Button from './components/ui/Button';
import Navbar from './components/layout/Navbar';
```
