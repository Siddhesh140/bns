# Project Architecture

## Overview

React 19 landing page with Vite, Tailwind CSS, and Framer Motion animations.

---

## Directory Structure

```
client/
├── docs/                    # Documentation
│   ├── ANIMATIONS.md
│   ├── API.md
│   ├── COMPONENTS.md
│   ├── CONFIGURATION.md
│   └── STYLING.md
├── public/
│   └── images/             # Static images
├── src/
│   ├── components/
│   │   ├── layout/         # Page structure
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── index.js
│   │   ├── ui/             # Reusable UI
│   │   │   ├── Button.jsx
│   │   │   ├── Cards.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   ├── PricingCard.jsx
│   │   │   ├── Icons.jsx
│   │   │   ├── animations.js
│   │   │   ├── useContactForm.js
│   │   │   ├── contactFormConfig.js
│   │   │   └── index.js
│   │   └── ErrorBoundary.jsx
│   ├── config/
│   │   └── pricing.js      # Pricing constants
│   ├── data/
│   │   └── faqData.js      # FAQ content
│   ├── pages/
│   │   ├── Home.jsx        # Main landing page
│   │   └── NotFound.jsx    # 404 page
│   ├── styles/
│   │   └── globals.css     # Global styles
│   ├── utils/
│   │   ├── api.js          # API client
│   │   └── scroll.js       # Scroll utilities
│   ├── App.jsx             # Root component
│   └── main.jsx            # Entry point + Sentry
├── index.html
├── package.json
├── vite.config.js
├── vitest.config.js
└── tailwind.config.cjs
```

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations |
| React Router v6 | Client-side routing |
| Sentry | Error monitoring |
| Vitest | Unit testing |
| Testing Library | Component testing |

---

## Import Patterns

### UI Components
```javascript
import { Button, ProblemCard, ContactForm, PricingCard } from './components/ui';
```

### Layout Components
```javascript
import { Navbar, Footer } from './components/layout';
```

### Utilities
```javascript
import api from './utils/api';
import { scrollToSection } from './utils/scroll';
```

### Configuration
```javascript
import { PRICING } from './config/pricing';
import { FORM_FIELDS, FORM_TITLES } from './components/ui/contactFormConfig';
import { faqs } from './data/faqData';
```

---

## Error Handling

### ErrorBoundary
Wraps the entire app in `App.jsx`:
```jsx
<ErrorBoundary>
  <Routes>...</Routes>
</ErrorBoundary>
```

### Sentry Integration
Initialized in `main.jsx`:
- Captures exceptions automatically
- Session replay on errors
- Performance monitoring

---

## Testing

```bash
# Run tests
npm test

# Run with UI
npm run test:ui

# Coverage report
npm run test:coverage
```

**Test files:**
- `*.test.jsx` - Component tests
- `*.test.js` - Utility tests
