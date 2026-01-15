# Animation Guide

## Animation Library

This project uses **Framer Motion** for all animations.

```bash
npm install framer-motion
```

## Animation Patterns

### 1. Scroll-Triggered Fade Up

Used for sections that animate in as user scrolls.

```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  Content here
</motion.div>
```

**Options:**
- `viewport.once: true` - Animate only first time
- `viewport.margin` - Trigger earlier/later

---

### 2. Staggered Children

Used for lists and grids.

```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

<motion.ul variants={containerVariants} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.li key={item.id} variants={itemVariants}>
      {item.content}
    </motion.li>
  ))}
</motion.ul>
```

---

### 3. Hover Effects

Used for interactive elements.

```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click Me
</motion.button>
```

**With glow:**
```jsx
<motion.button
  whileHover={{ 
    scale: 1.05,
    boxShadow: "0 0 20px rgba(255, 107, 0, 0.5)"
  }}
>
  Glowing Button
</motion.button>
```

---

### 4. Modal Animations

Using AnimatePresence for enter/exit.

```jsx
import { AnimatePresence, motion } from 'framer-motion';

<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      Modal Content
    </motion.div>
  )}
</AnimatePresence>
```

---

### 5. Sequential Reveal (Icon → Text)

Used for icon-based lists.

```jsx
// Icon pops in first
<motion.span
  initial={{ scale: 0, rotate: -180 }}
  whileInView={{ scale: 1, rotate: 0 }}
  transition={{ 
    duration: 0.4, 
    ease: "backOut",
    delay: index * 0.1 
  }}
>
  <CheckIcon />
</motion.span>

// Text follows
<motion.p
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ 
    duration: 0.4, 
    delay: 0.2 + (index * 0.1) 
  }}
>
  Text content
</motion.p>
```

---

## Navbar Animations

### Entrance
```jsx
<motion.nav
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ 
    duration: 0.6, 
    ease: [0.25, 0.46, 0.45, 0.94],
    delay: 0.2 
  }}
>
```

### Link Hover
```jsx
<motion.span
  whileHover={{ 
    scale: 1.1,
    textShadow: "0 0 8px rgba(255,255,255,0.8)"
  }}
>
  Link Text
</motion.span>
```

### Mobile Menu
```jsx
<AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      Menu Items
    </motion.div>
  )}
</AnimatePresence>
```

---

## Hero Animations

### Background Zoom
```jsx
<motion.div
  initial={{ scale: 1.1 }}
  animate={{ scale: 1 }}
  transition={{ duration: 10, ease: "linear" }}
  style={{ backgroundImage: `url(${heroImage})` }}
/>
```

### Heading Fade In
```jsx
<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
>
  Heading Text
</motion.h1>
```

---

## Performance Tips

1. **Use `will-change` sparingly** - Only when necessary
2. **Prefer `transform` and `opacity`** - GPU accelerated
3. **Use `viewport.once: true`** - Don't re-animate
4. **Keep durations short** - 0.2-0.6s feels snappy
5. **Test on mobile** - Reduce complexity if needed

---

## Common Easing

| Name | Value | Use Case |
|------|-------|----------|
| `easeOut` | Default | Natural deceleration |
| `easeInOut` | Smooth | Modals, transitions |
| `backOut` | Bouncy | Icons, playful elements |
| Custom | `[0.25, 0.46, 0.45, 0.94]` | Premium feel |
