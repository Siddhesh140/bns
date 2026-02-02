# Configuration Guide

## Overview

Centralized configuration files for pricing, form settings, and environment variables.

---

## Files

```
src/
├── config/
│   └── pricing.js      # Pricing configuration
├── components/ui/
│   └── contactFormConfig.js  # Form settings
└── data/
    └── faqData.js      # FAQ content
```

---

## Pricing Configuration

**File:** `src/config/pricing.js`

```javascript
import { PRICING } from './config/pricing';

// Values
PRICING.amount        // 4999
PRICING.currency      // 'INR'
PRICING.currencySymbol // '₹'
PRICING.displayPrice  // '₹4,999'
PRICING.displayPriceOnly // '4,999'
```

**Usage in components:**
```jsx
<button>Join for only {PRICING.displayPrice}</button>
```

---

## Contact Form Configuration

**File:** `src/components/ui/contactFormConfig.js`

### Constants

| Constant | Description |
|----------|-------------|
| `WHATSAPP_NUMBER` | Fallback WhatsApp number |
| `FORM_TITLES` | Modal titles by form type |
| `MESSAGE_TYPES` | WhatsApp message labels |
| `FORM_FIELDS` | Input field definitions |
| `INITIAL_FORM_STATE` | Default form values |

### Form Fields

```javascript
const FORM_FIELDS = [
  { name: 'name', type: 'text', placeholder: 'Name' },
  { name: 'companyName', type: 'text', placeholder: 'Company Name' },
  { name: 'position', type: 'text', placeholder: 'Position' },
  { name: 'email', type: 'email', placeholder: 'Email' },
  { name: 'phone', type: 'tel', placeholder: 'Phone (+91XXXXXXXXXX)' }
];
```

### Form Types

| Type | Title | Message Label |
|------|-------|---------------|
| `join` | "Join Now" | "New Member Request" |
| `call` | "Book A Call" | "Call Request" |

---

## FAQ Data

**File:** `src/data/faqData.js`

```javascript
import { faqs } from './data/faqData';

// Structure
{
  question: "What kind of leads will I get?",
  answer: "Real buyers, distributors, OEM partners..."
}
```

**Usage:**
```jsx
{faqs.map((faq, index) => (
  <FAQItem key={index} question={faq.question} answer={faq.answer} />
))}
```

---

## Environment Variables

**File:** `.env.example`

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:3000` |
| `VITE_SENTRY_DSN` | Sentry error tracking DSN | - |
| `VITE_WHATSAPP_NUMBER` | WhatsApp fallback number | `919876543210` |

```bash
# .env.local
VITE_API_URL=https://api.example.com
VITE_SENTRY_DSN=https://xxx@sentry.io/xxx
VITE_WHATSAPP_NUMBER=919876543210
```
