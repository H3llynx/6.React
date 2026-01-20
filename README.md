# Sprint 6 - Web service Quotation

Sasha Web Services is an interactive web application built with React, TypeScript, and Tailwind CSS. Its purpose is to help web service professionals:
- Instantly generate quotes for their services with either monthly or yearly payment options (including a 20% discount for yearly plans).
- Sort, filter and delete generated quotes.
- Share a custom link that pre-fills the calculator with selected services and options, allowing others to view the corresponding price immediately.

Currently, there’s no backend integration. Therefore, all quotes are stored locally using localStorage.

---

## Goal

- Practice using React Router and essential hooks (useState, useEffect, useRef, useSearchParams, useContext).
- Implement a feature-based architecture.
- Learn how to test React components with Vitest
- Apply responsive design principles and modern frontend styling techniques.

---

## Preview

1. **Desktop view:**
![Screenshot](screenshots/screen1.gif)
![Screenshot](screenshots/screen2.gif)

2. **Mobile view:**
![Screenshot](screenshots/screen3.gif)


## Getting Started

1. **Clone the repo and switch to this branch:**

```bash
git clone https://github.com/H3llynx/6.React.git
cd 6.React
npm install
npm run dev
```

## 📁 Folder Structure

```
 ┣ 📂 src
 |  ┣ 📂 assets
 |  ┣ 📂 components
 |  ┣ 📂 config
 |  ┣ 📂 features
 |  ┣ 📂 styles
 |  ┣ 📂 test
 |  ┣ 📄 App.tsx
 |  ┣ 📄 main.tsx
 ┣ 📄 eslint.config.js
 ┣ 📄 index.html
 ┣ 📄 package-lock.json
 ┣ 📄 package.json
 ┣ 📄 README.md
 ┣ 📄 tsconfig.app.json
 ┣ 📄 tsconfig.json
 ┣ 📄 tsconfig.node.json
 ┗ 📄 vite.config.ts
```

/src/ - main code folder
/src/assets/ - images and icons
/src/components/ - shared components
/src/config/ - json files with the product (services) information
/src/features/ - features pages and their components (includint their tests, types and additional CSS when applicable)
/src/styles/ - main/shared css

---

## 🛠 Technologies Used

- React
- TypeScript
- TailwindCSS
- Vitest

---

## 🤝 Contributions

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch: git checkout -b feature/NewFeature
3. Make your changes and commit them: git commit -m 'Add New Feature'
4. Push the changes to your branch: git push origin feature/NewFeature
5. Open a pull request
