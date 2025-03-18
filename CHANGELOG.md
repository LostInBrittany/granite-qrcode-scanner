# Changelog

All notable changes to this project will be documented in this file.

## [3.1.0] - 2025-03-18

### Changed
- Replaced lit-element with lit 3.2.1
- Replaced deprecated Material Web Components with custom Granite components
  - Created custom `granite-icon` component to replace `md-icon`
  - Created custom `granite-ripple` component to replace `md-ripple`
  - Created custom `granite-fab` component to replace `md-fab`
- Removed dependency on external Material components
- Updated WebComponents polyfill to the latest version (2.8.0)
- Updated Granite Elements dependencies to their latest versions
  - @granite-elements/granite-qrcode-decoder to version 3.0.2

### Added
- Modern development server setup with @web/dev-server
- New test setup using @web/test-runner and @open-wc/testing
- Added web-dev-server.config.js for better development experience
- Added npm scripts for running tests and development server
  - `npm start` - Start the development server
  - `npm test` - Run tests
  - `npm run test:watch` - Run tests in watch mode

### Removed
- Removed dependency on @polymer/iron-demo-helpers
- Removed outdated wct-browser-legacy testing framework

### Fixed
- Fixed security vulnerabilities in dependencies
- Modernized demo page with clean, modern UI
- Improved code organization and maintainability

## [3.0.3] - Previous version

Initial version tracked in this changelog.
