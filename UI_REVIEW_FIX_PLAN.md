# UI Review Fix Plan: Web Interface Guidelines Compliance

This document contains a detailed fix plan for the personal portfolio based on the [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines).

---

## Summary of Issues Found

| Category | Count | Priority |
|----------|-------|----------|
| Missing focus-visible states | 6 | High |
| Decorative icons missing aria-hidden | 12+ | High |
| Missing skip link to main content | 1 | High |
| Image missing width/height (CLS) | 1 | High |
| Input missing autocomplete | 2 | Medium |
| Email input missing spellCheck={false} | 1 | Medium |
| Placeholders should end with "..." | 2 | Medium |
| Missing theme-color meta | 1 | Medium |
| Missing color-scheme for dark mode | 1 | Medium |
| Missing prefers-reduced-motion | 1 | Medium |
| Missing font preconnect | 1 | Low |

---

## Phase 1: Critical Accessibility Fixes

### 1.1 Add Skip Link to Main Content

**File:** `src/pages/Index.tsx`

Add a skip link at the very beginning of the component return, before `<Header />`:

```tsx
<a 
  href="#main-content" 
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
>
  Skip to main content
</a>
```

Also add `id="main-content"` to the `<main>` element:

```tsx
<main id="main-content" className="overflow-hidden">
```

---

### 1.2 Add Focus-Visible States

**File:** `src/components/Header.tsx`

Add `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none` to:

- **Line 91** - Close menu button (`className` prop)
- **Line 119** - Open menu button (`className` prop)
- **Lines 100-111** - Navigation links inside the `.map()` - add to the `<a>` element's className

**File:** `src/components/Hero.tsx`

Add `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded-full` to:

- **Line 68-73** - "Learn More" link
- **Line 74-79** - "Contact Me" link

---

### 1.3 Add aria-hidden to Decorative Icons

**File:** `src/components/Header.tsx`

- **Line 94** - Add `aria-hidden="true"` to `<X>` icon
- **Line 122** - Add `aria-hidden="true"` to `<Menu>` icon

**File:** `src/components/About.tsx`

Add `aria-hidden="true"` to all icon components in the `skillIcons` and `skillsLearningIcon` objects (lines 55-86). Since these are JSX elements in an object, wrap them or add the prop:

```tsx
// Example for each icon:
Vue: <FaVuejs aria-hidden="true" color={colors.vueGreen} className="h-8 w-8 text-primary" />,
```

- **Line 174** - Add `aria-hidden="true"` to the wave emoji span:
```tsx
<span aria-hidden="true" className="inline-block origin-[70%_70%] animate-wave text-lg cursor-default">...</span>
```

**File:** `src/components/Contact.tsx`

- **Line 81** - Add `aria-hidden="true"` to `<Mail>` icon
- **Line 98** - Add `aria-hidden="true"` to `<MapPin>` icon
- **Line 223** - Add `aria-hidden="true"` to `<Send>` icon

**File:** `src/components/SortableSkill.tsx`

- **Line 38** - Add `aria-hidden="true"` to the fallback `<Code>` icon:
```tsx
{icon || <Code aria-hidden="true" className="h-8 w-8 text-primary" />}
```

---

### 1.4 Fix Hero Image CLS (Cumulative Layout Shift)

**File:** `src/components/Hero.tsx`

Add explicit `width` and `height` attributes to the avatar image (line 46-50):

```tsx
<img
  src={personalInfo.avatar}
  alt={personalInfo.name}
  width={128}
  height={128}
  className="w-full h-full object-cover"
/>
```

---

## Phase 2: Form Improvements

### 2.1 Add Autocomplete Attributes

**File:** `src/components/Contact.tsx`

**Name input (line 141-150)** - Add `autoComplete="name"`:
```tsx
<input
  type="text"
  id="name"
  name="name"
  autoComplete="name"
  // ... rest of props
/>
```

**Email input (line 160-169)** - Add `autoComplete="email"` and `spellCheck={false}`:
```tsx
<input
  type="email"
  id="email"
  name="email"
  autoComplete="email"
  spellCheck={false}
  // ... rest of props
/>
```

---

### 2.2 Update Focus Styles to focus-visible

**File:** `src/components/Contact.tsx`

For all three form inputs (name, email, message), change `focus:` to `focus-visible:` in the className:

**Current:**
```
focus:ring-2 focus:ring-primary/20 focus:border-primary/30 focus:outline-none
```

**Updated:**
```
focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary/30 focus-visible:outline-none
```

Apply to:
- Line 148 (name input)
- Line 167 (email input)
- Line 186 (message textarea)

---

### 2.3 Fix Placeholder Typography

**File:** `src/components/Contact.tsx`

Use ellipsis character (...) instead of three periods (...):

- **Line 149**: Change `placeholder="Your name"` to `placeholder="Your name..."`
- **Line 187**: Change `placeholder="Your message..."` to `placeholder="Your message..."`

---

## Phase 3: Dark Mode & Theme

### 3.1 Add Theme Color Meta Tags

**File:** `index.html`

Add these meta tags inside `<head>` (after the description meta):

```html
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#1e1e24" media="(prefers-color-scheme: dark)">
```

---

### 3.2 Add color-scheme CSS Property

**File:** `src/index.css`

Add `color-scheme` to the `:root` and `.dark` selectors:

```css
:root {
  color-scheme: light;
  /* ... existing variables ... */
}

.dark {
  color-scheme: dark;
  /* ... existing variables ... */
}
```

---

## Phase 4: Performance & Motion

### 4.1 Add Reduced Motion Support

**File:** `src/index.css`

Add at the end of the file:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

### 4.2 Add Font Preconnect

**File:** `index.html`

Add these lines at the beginning of `<head>` (before other links):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

---

## Implementation Checklist

Use this checklist to track progress:

- [ ] **Phase 1.1** - Add skip link (Index.tsx)
- [ ] **Phase 1.2** - Add focus-visible states (Header.tsx, Hero.tsx)
- [ ] **Phase 1.3** - Add aria-hidden to icons (Header.tsx, About.tsx, Contact.tsx, SortableSkill.tsx)
- [ ] **Phase 1.4** - Add image dimensions (Hero.tsx)
- [ ] **Phase 2.1** - Add autocomplete attributes (Contact.tsx)
- [ ] **Phase 2.2** - Update focus to focus-visible (Contact.tsx)
- [ ] **Phase 2.3** - Fix placeholder typography (Contact.tsx)
- [ ] **Phase 3.1** - Add theme-color meta (index.html)
- [ ] **Phase 3.2** - Add color-scheme CSS (index.css)
- [ ] **Phase 4.1** - Add prefers-reduced-motion (index.css)
- [ ] **Phase 4.2** - Add font preconnect (index.html)

---

## Files to Modify

| File | Phases |
|------|--------|
| `src/pages/Index.tsx` | 1.1 |
| `src/components/Header.tsx` | 1.2, 1.3 |
| `src/components/Hero.tsx` | 1.2, 1.4 |
| `src/components/About.tsx` | 1.3 |
| `src/components/Contact.tsx` | 1.3, 2.1, 2.2, 2.3 |
| `src/components/SortableSkill.tsx` | 1.3 |
| `src/index.css` | 3.2, 4.1 |
| `index.html` | 3.1, 4.2 |

---

## Testing After Implementation

After applying fixes, verify:

1. **Keyboard Navigation**: Tab through the entire page, verify all interactive elements have visible focus rings
2. **Skip Link**: Press Tab on page load, skip link should appear and work
3. **Screen Reader**: Test with NVDA/VoiceOver - decorative icons should not be announced
4. **Reduced Motion**: Enable "Reduce motion" in OS settings, verify animations are disabled
5. **Dark Mode**: Toggle dark mode, verify theme-color updates in browser chrome
6. **Forms**: Verify autocomplete suggestions appear for name/email fields
7. **Layout Shift**: Use Lighthouse to verify CLS score improved

---

## References

- [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines)
- [WCAG 2.1 Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)
- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [web.dev: CLS](https://web.dev/cls/)
