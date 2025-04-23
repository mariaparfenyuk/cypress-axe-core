# 🔍 Cypress + axe-core: Automated Accessibility Testing

This project demonstrates how to integrate [axe-core](https://www.deque.com/axe/) with [Cypress](https://www.cypress.io/) to perform automated accessibility (A11y) checks — fast, efficient, and CI-friendly.

## 🚀 Features

- ✅ Accessibility testing with `cypress-axe`
- 🧪 Custom command `injectAxeAndCheck()` for easy reuse
- 📊 Mochawesome HTML reports
- 🧹 Auto-cleaning + merging JSON results
- 🛠 Ready-to-use `npm run test:report` script
- 🤖 GitHub Actions–ready structure

## 📄 Related article (in Russian)

👉 [“Cypress + axe-core: быстрый старт тестов на доступность”](https://habr.com/ru/articles/903242/) on Habr

Learn step-by-step how to integrate axe-core with Cypress, generate detailed reports, and start improving accessibility with confidence.

## 📦 Install

```bash
npm install
```

##  🧪 Run tests

```bash
npm run test:report
```

This will:
Remove old report
Run all Cypress tests
Merge JSON results
Generate an HTML report in cypress/merged/report.html

## 📁 Folder structure
```
cypress/
├── e2e/                  # A11y test specs
├── support/
│   ├── commands.ts       # Custom command
│   ├── commands.d.ts     # TypeScript typing
│   └── e2e.ts            # Support entry
cypress.config.ts         # Cypress config
tsconfig.json             # TypeScript config
```

## 🛠 Dependencies
cypress
cypress-axe
mochawesome
mochawesome-merge
mochawesome-report-generator
typescript
rimraf

## 🧡 About
Maintained by Mariia Parfeniuk.
Follow the repo and the article for more updates on accessibility automation.

