# Playwright Automation Framework

## Overview

This project contains UI automation tests built with Playwright and TypeScript.

Tested application:
GAD GUI API Demo (local instance)

## Tech Stack

- Playwright
- TypeScript
- Node.js

## Project Structure

- tests/ui - UI tests
- pages - Page Objects

## How to Run

### 1. Start application

cd ../gad-gui-api-demo
npm install
npm run start

### 2. Run tests

cd ../GADTestPrjct
npx playwright test

## Test Coverage

- Home page load verification
- Navigation to Articles page
- Pagination presence on Articles page
