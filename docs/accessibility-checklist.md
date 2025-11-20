# React Accessibility Checklist

A comprehensive checklist to ensure your React applications are accessible to all users.

## General Principles
- [ ] **Follow WCAG and WAI-ARIA standards.**
- [ ] **Treat accessibility as an essential part of development, not an afterthought.**

## Content
- [ ] **Use clear, plain language.**
- [ ] **Ensure interactive elements like buttons and links have unique and descriptive content.**
- [ ] **Set the `lang` attribute on the `<html>` element.**
- [ ] **Provide a unique and descriptive title for each page or view.**
- [ ] **Use heading elements (`<h1>` to `<h6>`) to introduce content in a logical, sequential order without skipping levels.**
- [ ] **Use appropriate list elements (`<ol>`, `<ul>`, `<dl>`) for list content.**
- [ ] **Include a "skip link" at the beginning of the page.**

## Semantic HTML & ARIA
- [ ] **Prioritize semantic HTML elements (`<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`, `<button>`, `<a>`, `<input>`) over non-semantic ones (`<div>`, `<span>`).**
- [ ] **Use React Fragments (`<></>` or `<Fragment>`) to avoid unnecessary DOM nodes.**
- [ ] **Use WAI-ARIA attributes (e.g., `aria-label`, `aria-required`, `aria-hidden`, `aria-live`, `aria-expanded`) to provide additional context for screen readers.**
- [ ] **Ensure `aria-*` attributes in JSX are hyphen-cased (kebab-case).**

## Keyboard Navigation & Focus Management
- [ ] **Ensure all interactive elements are navigable using a keyboard.**
- [ ] **Provide clear, visible focus states for interactive elements.**
- [ ] **Maintain a logical and coherent keyboard focus order.**
- [ ] **Avoid `autofocus` on elements.**
- [ ] **Programmatically manage focus when the DOM changes (e.g., in modals).**
- [ ] **Trap focus within modal dialogs.**

## Images
- [ ] **Provide descriptive `alt` attributes for `<img>` elements.**
- [ ] **Use a `null` or empty `alt` attribute (`alt=""`) for purely decorative images.**
- [ ] **Ensure every icon has an `aria-label` to describe its purpose.**

## Forms
- [ ] **Every input or textarea must have an associated `<label>` or an `aria-label` attribute.**
- [ ] **Use `htmlFor` in JSX for the `for` attribute of labels.**
- [ ] **For required fields, include both the `required` and `aria-required` attributes, along with a visual indicator.**
- [ ] **Use the `aria-invalid` attribute for invalid inputs.**
- [ ] **Provide instructions for controls (e.g., date format) using `aria-describedby`.**
- [ ] **Offer clear error messages.**

## Appearance & Design
- [ ] **Ensure sufficient color contrast (minimum 4.5:1 for normal text, 3:1 for large text).**
- [ ] **Do not rely solely on color to convey meaning.**
- [ ] **Ensure interactive elements have touch targets of at least 48x48 pixels.**

## Dynamic Content & State Changes
- [ ] **When dynamic content changes without a page refresh, ensure screen readers announce these updates using `aria-live` regions.**

## Testing
- [ ] **Integrate static analysis tools like `eslint-plugin-jsx-a11y`.**
- [ ] **Use automated tools such as Axe DevTools, Lighthouse, and WAVE to audit accessibility.**
- [ ] **Regularly test your application with actual screen readers (e.g., NVDA, JAWS, VoiceOver).**
- [ ] **Manually test keyboard navigation and focus flow.**
