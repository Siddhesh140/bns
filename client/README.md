# BNS Landing Page - Frontend

A premium React landing page for the BNS manufacturing community platform.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
client/
├── src/
│   ├── App.jsx              # Root component with routing
│   ├── main.jsx             # Entry point
│   ├── components/
│   │   ├── layout/          # Page structure
│   │   │   ├── Navbar.jsx   # Navigation with animations
│   │   │   └── Footer.jsx   # Footer with links
│   │   ├── ui/              # Reusable components
│   │   │   ├── Button.jsx   # Animated button
│   │   │   ├── Cards.jsx    # Problem/Solution cards
│   │   │   ├── ContactForm.jsx
│   │   │   ├── PricingCard.jsx
│   │   │   └── Icons.jsx    # Custom icons
│   │   └── ErrorBoundary.jsx
│   ├── pages/
│   │   └── Home.jsx         # Main landing page
│   ├── styles/
│   │   └── index.css        # Global styles
│   ├── data/
│   │   └── faqData.js       # FAQ content
│   └── utils/
│       └── validation.js    # Form validation
└── docs/                    # Documentation
```

## 📚 Documentation

- [Components Guide](./docs/COMPONENTS.md)
- [Styling Guide](./docs/STYLING.md)
- [Animation Guide](./docs/ANIMATIONS.md)

## 🎨 Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| Vite | Build tool |
| Framer Motion | Animations |
| Heroicons | Icons |
| CSS Variables | Theming |

## 🔧 Environment Variables

Create `.env` file if needed:
```env
VITE_API_URL=http://localhost:3000
```

## 🧪 Development

```bash
# Start dev server
npm run dev

# Build
npm run build

# Preview build
npm run preview
```

## 📱 Responsive Breakpoints

| Breakpoint | Width |
|------------|-------|
| Mobile | < 768px |
| Tablet | 768px - 1024px |
| Desktop | > 1024px |
