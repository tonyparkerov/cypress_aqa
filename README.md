 # Cypress AQA

This repository contains an automated UI testing framework using [Cypress](https://www.cypress.io/).

## 📌 Overview
The `cypress_aqa` project is designed for end-to-end testing of web applications, ensuring reliability and stability.

## 🚀 Features
- Automated UI tests with Cypress
- Uses Mocha and Chai for assertions
- Custom commands and reusable utilities
- Configurable environment settings
- CI/CD integration with GitHub Actions

## 🛠️ Installation
Ensure you have [Node.js](https://nodejs.org/) installed.

```sh
git clone https://github.com/tonyparkerov/cypress_aqa.git
cd cypress_aqa
npm install
```

## ▶️ Running Tests
Run all tests in headless mode:
```sh
npm test
```
Run tests in the Cypress Test Runner (GUI):
```sh
npx cypress open
```
Run a specific test:
```sh
npx cypress run --spec "cypress/e2e/example_spec.cy.js"
```

## 📂 Project Structure
```
📦 cypress_aqa
 ├── 📂 .github
 │   └── 📂 workflows   # GitHub Actions workflows
 ├── 📂 cypress         # Cypress test files and configurations
 ├── 📜 .gitignore      # Git ignore file
 ├── 📜 Dockerfile      # Docker configuration
 ├── 📜 cypress.config.js  # Cypress configuration
 ├── 📜 package-lock.json  # Lockfile for npm dependencies
 ├── 📜 package.json    # Project dependencies and scripts
 ├── 📜 README.md       # Project documentation
```

## 🔧 Configuration
Modify `cypress.config.js` to update test settings.

```js
module.exports = {
  e2e: {
    baseUrl: "https://your-app-url.com",
  },
};
```

## ✅ CI/CD Integration
This repository includes a GitHub Actions workflow for running tests on each push and pull request.

```yaml
name: Cypress Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npx cypress run
```

## 📄 License
This project is licensed under the MIT License.

## 📞 Contact
For issues or contributions, please open an issue on this repository.

Happy Testing! 🚀