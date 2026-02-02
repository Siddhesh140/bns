# Hooks Guide

## Overview

Custom React hooks for form handling and shared logic.

---

## useContactForm

**File:** `src/components/ui/useContactForm.js`

Custom hook for contact form state management and submission.

### Usage

```jsx
import { useContactForm } from './components/ui/useContactForm';

function ContactForm({ formType, onClose }) {
  const { 
    formData, 
    handleChange, 
    handleSubmit, 
    isSubmitting, 
    error 
  } = useContactForm(formType, onClose);

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="name" 
        value={formData.name} 
        onChange={handleChange}
        disabled={isSubmitting}
      />
      {error && <span>{error}</span>}
      <button disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
}
```

### Parameters

| Param | Type | Description |
|-------|------|-------------|
| `formType` | `'join' \| 'call'` | Form type (determines title and message) |
| `onClose` | `function` | Callback to close the form modal |

### Return Values

| Property | Type | Description |
|----------|------|-------------|
| `formData` | `object` | Current form field values |
| `handleChange` | `function` | Input change handler |
| `handleSubmit` | `function` | Form submit handler |
| `isSubmitting` | `boolean` | Loading state |
| `error` | `string \| null` | Error message |

### Form Data Structure

```javascript
{
  name: '',
  companyName: '',
  position: '',
  email: '',
  phone: ''
}
```

### Submission Flow

1. **API submission** - Tries backend API first
2. **WhatsApp fallback** - If API fails, prompts user for WhatsApp

```
User submits form
       ↓
Try API submission
       ↓
   Success? → Close form + show success
       ↓
      No
       ↓
Prompt WhatsApp fallback
       ↓
   User accepts? → Open WhatsApp
```

---

## Internal Functions

### createWhatsAppMessage()
Generates formatted WhatsApp message from form data.

### submitToBackend()
Makes API call to register user.

### submitToWhatsApp()
Opens WhatsApp with pre-filled message.
