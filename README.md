# Mostly.ai Challenge

This is a Cypress TypeScript project for running some assorted end-to-end tests on the Mostly.ai website

### Getting started

Clone this repo

```
git clone git@github.com:LtMama/mostly-ai-challenge
```

Install dependencies

```
npm ci
```

### Running Tests

To open Cypress

```
npm run test:open
```

To use Cypress in runMode

```
//defaults to electron browser, headless
npm run test:run

//runs in chrome, headless
npm run test:run -- --browser chrome

//runs in chrome, headed
npm run test:run -- --browser chrome --headed

```

#

Note: Limited to Cypress ^v12 pending `cypress-real-events` dependency being updated

Known issues:
- `waitForFrontendReady` isn't perfect. Command can intermittently miss the expected intercepted request causing test to fail. Usually passes on a re-run but needs refining
 
