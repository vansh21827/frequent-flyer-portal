# ✈️ End-to-End Frequent Flyer Portal

A polished, accessible, responsive Frequent Flyer Portal built as a **Final Polish / Capstone 4** project. The application provides a clean corporate interface for managing flight searches, frequent-flyer rewards, profile information, and user notifications.

The project focuses on production-quality frontend engineering, including accessibility, validation, loading states, empty states, input sanitization, simulated telemetry, responsive design, and production build readiness.

---

## 📌 Project Overview

The **End-to-End Frequent Flyer Portal** is designed to demonstrate how a modern enterprise-style frontend application can be built with a strong focus on usability, reliability, accessibility, and maintainability.

### Primary user capabilities

- View a personalized dashboard
- Search available flights
- Browse and search rewards
- Redeem rewards using available points
- View and update profile information
- Access notification states
- Navigate the application using keyboard controls
- Receive visual feedback for asynchronous operations
- Handle invalid, empty, and unavailable states gracefully

---

## 🎯 Project Objectives

The project was developed against the following technical requirements:

- Deliver a clear and intuitive portal interface
- Provide immediate visual feedback during user actions
- Maintain consistent data structures and UI patterns
- Handle empty states instead of displaying blank screens
- Provide loading indicators for asynchronous operations
- Prevent invalid form submissions
- Highlight invalid fields clearly
- Meet enterprise accessibility expectations
- Simulate analytics telemetry
- Sanitize user-controlled text before storing it in application state
- Maintain a clean monochromatic corporate design system
- Prepare the application for production deployment

---

## 🧩 Core Features

### Dashboard

- Frequent-flyer account summary
- Membership information
- Available points
- Upcoming flight information
- Recent activity
- Quick access to primary portal areas

### Flights

- Flight search interface
- Origin and destination inputs
- Travel-date selection
- Form validation
- Invalid-field highlighting
- Loading state during simulated search
- Empty search-result state
- Accessible form controls

### Rewards

- Reward catalogue
- Reward categories
- Reward point requirements
- Reward search/filtering
- Redeem action
- Loading state during redemption
- Empty search-result state
- Points update after successful redemption

### Profile

- Profile information display
- Editable profile fields
- Input validation
- Sanitized user input
- Loading state during save
- Success feedback
- Accessible form controls

### Notifications

- Accessible notification button
- Keyboard-accessible notification panel
- Empty notification state
- Outside-click handling
- Accessible expanded/collapsed state

### Error Handling

- Dedicated 404 / Not Found page
- Friendly empty states
- Form validation feedback
- Loading indicators
- Graceful handling of unavailable results

---

## ♿ Accessibility

Accessibility is a core requirement of the project.

The implementation includes:

- Semantic HTML
- Accessible form labels
- Appropriate ARIA attributes
- Keyboard navigability
- Visible focus states
- Accessible buttons and links
- `aria-invalid` for invalid form controls
- `aria-expanded` for expandable UI
- `aria-controls` for related interactive regions
- `aria-hidden` for decorative icons
- Skip-to-content navigation
- Meaningful page headings
- Accessible empty and status states

### Target

> **Lighthouse Accessibility: 100**

Accessibility should be validated using Chrome Lighthouse against the production build.

---

## 🛡️ Security

The frontend includes security-conscious handling of user-controlled text.

### Input Sanitization

Text input is sanitized before being stored in application state.

The expected flow is:

```text
User Input
    ↓
Sanitization
    ↓
Validation
    ↓
State Update
```

This helps reduce the risk of storing unsafe HTML/script payloads in application state.

### Security Practices

- No real API keys in source code
- No hardcoded secrets
- No real sensitive PII
- Environment variables are excluded from Git
- User-controlled text is sanitized
- Production security recommendations are considered during Lighthouse audits

---

## 📊 Telemetry Simulation

The application includes simulated analytics telemetry for primary user actions.

Successful primary actions log:

```text
[Analytics] User interacted with End-to-End Frequent Flyer Portal
```

Telemetry is intended only as a frontend simulation for the capstone and does not transmit real user analytics to an external service.

---

## 🎨 Design System

The UI follows a clean, monochromatic corporate design approach.

### Design principles

- Minimal visual noise
- Consistent spacing
- Clear hierarchy
- Reusable UI components
- Accessible contrast
- Consistent border radius
- Consistent focus states
- Responsive layouts

### Spacing

The project uses reusable spacing tokens rather than arbitrary values wherever possible.

Common spacing steps include:

```text
16px
24px
32px
```

### Color system

UI colors are managed through design-system variables instead of scattered hardcoded colors.

This helps prevent inconsistent styling and supports maintainability.

---

## 🏗️ Application Architecture

The project follows a component-driven React architecture.

```text
src/
├── components/
│   ├── layout/
│   │   ├── AppShell.jsx
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   └── layout.css
│   │
│   └── ui/
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Input.jsx
│       └── ui.css
│
├── pages/
│   ├── Dashboard/
│   ├── Flights/
│   ├── Rewards/
│   ├── Profile/
│   └── NotFound/
│
├── utils/
│   ├── analytics.js
│   └── sanitize.js
│
├── App.jsx
├── main.jsx
└── index.css
```

> The exact directory structure may evolve as implementation details are refined.

---

## 🧱 Reusable Components

The application uses reusable UI primitives to maintain consistency.

### Button

Supports:

- Primary actions
- Disabled state
- Loading state
- Accessible labels

### Card

Provides a reusable content container for:

- Dashboard sections
- Rewards
- Profile content
- Empty states

### Input

Provides consistent:

- Labeling
- Error states
- Validation messaging
- Accessibility attributes

### Layout

The application uses shared:

- Sidebar
- Header
- App shell
- Main content area

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React | Frontend UI |
| Vite | Development and production build tooling |
| React Router | Client-side routing |
| Lucide React | Accessible interface icons |
| DOMPurify | Text sanitization |
| JavaScript | Application logic |
| CSS | Responsive styling |
| ESLint | Code quality |
| Lighthouse | Performance and accessibility auditing |
| Git / GitHub | Version control |

---

## 📦 Installation

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git

Recommended current LTS versions should be used for production work.

### Clone the repository

```bash
git clone <your-repository-url>
cd <project-directory>
```

### Install dependencies

```bash
npm install
```

---

## ▶️ Development

Start the Vite development server:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

---

## 🔍 Linting

Run ESLint:

```bash
npm run lint
```

The release target is:

```text
0 errors
0 warnings
```

---

## 🏭 Production Build

Create an optimized production build:

```bash
npm run build
```

The generated production artifacts are placed in:

```text
dist/
```

### Preview the production build

Use:

```bash
npm run preview
```

Vite normally serves the production preview at:

```text
http://localhost:4173
```

### Important Lighthouse Note

Lighthouse performance testing should be performed against the **production preview**, not the Vite development server.

Development mode includes resources such as:

```text
/@vite/client
/@react-refresh
react development builds
```

These can significantly inflate the reported JavaScript payload and produce misleadingly low performance scores.

---

## 📈 Quality Targets

The project follows these release targets:

| Category | Target |
|---|---:|
| Accessibility | **100** |
| Performance | **> 90** |
| Best Practices | **> 90** |
| SEO | **> 90** |

### Lighthouse workflow

1. Build the application.
2. Start the production preview.
3. Open the production preview URL.
4. Open Chrome DevTools.
5. Select Lighthouse.
6. Run the audit for Desktop.
7. Review Performance, Accessibility, Best Practices, and SEO.
8. Resolve failures.
9. Repeat until release targets are satisfied.

---

## 🔎 SEO

The application includes basic SEO metadata for the portal.

Expected document metadata includes:

- `lang="en"`
- Responsive viewport
- Descriptive page title
- Meta description
- Robots directives

A production `robots.txt` should be available at:

```text
/robots.txt
```

Example:

```text
User-agent: *
Allow: /
```

---

## 📱 Responsive Design

The interface is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

Responsive behavior includes:

- Adaptive navigation
- Flexible cards
- Responsive content grids
- Mobile-friendly forms
- Touch-friendly controls
- Accessible focus behavior

---

## 🧪 Functional QA Checklist

### Dashboard

- [ ] Dashboard loads correctly
- [ ] Summary information is visible
- [ ] Upcoming flights display correctly
- [ ] Recent activity displays correctly
- [ ] Navigation works

### Flights

- [ ] Empty form is rejected
- [ ] Invalid origin is rejected
- [ ] Invalid destination is rejected
- [ ] Same origin/destination is rejected
- [ ] Loading state appears
- [ ] Results display correctly
- [ ] Empty state displays correctly
- [ ] Successful action triggers analytics

### Rewards

- [ ] Rewards display correctly
- [ ] Search works
- [ ] Empty search state displays
- [ ] Insufficient points prevent redemption
- [ ] Redeem action shows loading state
- [ ] Successful redemption updates points
- [ ] Successful action triggers analytics

### Profile

- [ ] Profile information loads
- [ ] Invalid fields are rejected
- [ ] Invalid fields are visually highlighted
- [ ] Text is sanitized
- [ ] Save shows loading state
- [ ] Successful save displays feedback
- [ ] Successful action triggers analytics

### Notifications

- [ ] Notification button is keyboard accessible
- [ ] Button has an accessible name
- [ ] Panel opens and closes
- [ ] `aria-expanded` is updated
- [ ] Empty state is displayed
- [ ] Outside click closes the panel

### Navigation

- [ ] Dashboard route works
- [ ] Flights route works
- [ ] Rewards route works
- [ ] Profile route works
- [ ] Invalid route displays 404 page
- [ ] Skip link works
- [ ] Keyboard navigation works

---

## 🔐 Environment Variables

If future API integrations are introduced, secrets must be stored using environment variables.

Example:

```env
VITE_API_BASE_URL=
```

Do not commit:

```text
.env
.env.local
.env.production
.env.*.local
```

Recommended `.gitignore` entries:

```gitignore
node_modules/
dist/
.env
.env.local
.env.development
.env.production
.env.*.local
```

Never commit:

- API keys
- Access tokens
- Database credentials
- Private keys
- Passwords
- Real user PII

---

## 🚦 Definition of Done

Before creating the final pull request or deployment, verify:

```text
[ ] Code compiles successfully
[ ] npm run lint passes with zero warnings/errors
[ ] npm run build succeeds
[ ] Dashboard works
[ ] Flights works
[ ] Rewards works
[ ] Profile works
[ ] 404 page works
[ ] Empty states are implemented
[ ] Loading states are implemented
[ ] Invalid inputs are rejected
[ ] Invalid fields are highlighted
[ ] Text input is sanitized
[ ] Analytics simulation works
[ ] Interactive elements are keyboard accessible
[ ] Appropriate ARIA attributes are present
[ ] Lighthouse Accessibility = 100
[ ] Lighthouse Performance > 90
[ ] Lighthouse Best Practices > 90
[ ] Lighthouse SEO > 90
[ ] No rogue colors
[ ] Consistent spacing is maintained
[ ] No API keys are hardcoded
[ ] No sensitive PII is hardcoded
[ ] Environment files are excluded from Git
[ ] Production build has been tested
```

---

## 🚀 Deployment

The project can be deployed to a static hosting platform that supports Vite applications.

Typical production flow:

```bash
npm install
npm run lint
npm run build
```

Deploy the generated:

```text
dist/
```

directory according to the selected hosting provider.

For client-side routing, configure the hosting provider to serve `index.html` for application routes so that paths such as:

```text
/flights
/rewards
/profile
```

continue to work after direct navigation.

---

## 📂 Production Artifacts

The production build generates:

```text
dist/
```

The directory contains the optimized files required for deployment.

Do not manually modify generated files inside `dist/`.

Regenerate them with:

```bash
npm run build
```

---

## 🧭 Release Strategy

The project follows a code-freeze approach for final submission.

### Before code freeze

- Implement functionality
- Resolve UX issues
- Complete validation
- Complete accessibility improvements
- Complete responsive design
- Complete error and empty states

### During code freeze

- Avoid introducing new features
- Fix only defects and compliance issues
- Run linting
- Run production builds
- Run Lighthouse
- Review security
- Review environment variables
- Verify deployment artifacts

### After code freeze

Only release-blocking bugs should be addressed unless the code-freeze is explicitly reopened.

---

## 📊 Current Quality Baseline

The application has been audited using Chrome Lighthouse during final polish.

A development-server audit identified the following areas for optimization:

- JavaScript payload size
- Development-only JavaScript resources
- Accessibility contrast
- Missing meta description
- `robots.txt` configuration

Performance should be re-evaluated using the **production Vite preview** because development-mode resources such as Vite HMR and React development bundles can substantially inflate the measured payload.

---

## 🤝 Contributing

For future contributions:

1. Create a feature branch.
2. Implement the change using existing design tokens and reusable components.
3. Run linting.
4. Test the affected user flows.
5. Verify keyboard accessibility.
6. Check empty, loading, and invalid states.
7. Run a production build.
8. Submit a pull request.

Avoid introducing:

- Unnecessary dependencies
- Hardcoded secrets
- Arbitrary colors
- Arbitrary spacing
- Inaccessible interactive controls
- Duplicate UI components

---

## 📜 License

This project is intended as an academic/professional capstone project.

Add the appropriate project license here if the repository is intended for public redistribution.

---

## 👤 Project

**End-to-End Frequent Flyer Portal**

**Project Type:** Final Polish — Capstone 4  
**Application:** Frequent Flyer Portal  
**Focus:** Accessible, responsive, production-ready enterprise frontend

---

## ⭐ Final Submission Goal

The final release should demonstrate a frontend application that is:

> **Accessible · Responsive · Secure · Maintainable · Performant · Production Ready**

The ultimate release gate is successful completion of the Technical Requirements Document and Definition of Done checklist before deployment.
