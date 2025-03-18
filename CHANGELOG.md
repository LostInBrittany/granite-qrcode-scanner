# Changelog

All notable changes to this project will be documented in this file.

## [4.0.0] - 2025-03-18

### Breaking Changes
- Major version update to reflect significant architectural changes
- Completely removed dependency on Material Web Components
- Upgraded to latest granite-qrcode-decoder (v4.0.0)

### Changed
- Replaced lit-element with lit 3.2.1
- Created custom components to replace Material Web Components
  - Custom `granite-icon` component with embedded SVG icons
  - Custom `granite-ripple` component for touch feedback
  - Custom `granite-fab` component for floating action buttons
- Removed all external font dependencies (Material Icons)
- Updated WebComponents polyfill to the latest version (2.8.0)
- Added Clever Cloud Components (@clevercloud/components) integration

### Added
- SVG-based icon system with embedded icons
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
