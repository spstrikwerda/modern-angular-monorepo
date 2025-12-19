# NX Monorepo Setup Documentation

## Overview

This is an NX monorepo configured for Angular 20 development with the latest tooling and best practices.

### Technology Stack

- **NX**: 21.6.10
- **Angular**: 20.3.0
- **Package Manager**: PNPM 10
- **Build Tool**: Vite 5.4.10 (with Angular Application Builder)
- **Testing**: 
  - Unit Tests: Jest 29.7.0
  - E2E Tests: Cypress 13.15.0 (latest)
  - Additional: Vitest 2.1.3 (available for migration)
- **TypeScript**: 5.9.2
- **ESLint**: 9.8.0
- **Prettier**: 2.6.2

## Project Structure

```
src/Frontend/
├── apps/
│   ├── frontend/                 # Main Angular application
│   │   ├── src/
│   │   │   ├── app/
│   │   │   ├── assets/
│   │   │   └── main.ts
│   │   ├── project.json
│   │   ├── tsconfig.json
│   │   └── ...
│   └── frontend-e2e/            # Cypress E2E tests for frontend app
│       ├── cypress.config.ts
│       ├── src/
│       └── ...
├── .nx/                          # NX cache directory
├── node_modules/                 # Dependencies
├── nx.json                        # NX configuration
├── pnpm-workspace.yaml          # PNPM workspace configuration with catalog
├── package.json                  # Root package.json
├── pnpm-lock.yaml              # PNPM lock file
├── tsconfig.base.json           # Base TypeScript configuration
├── eslint.config.mjs            # ESLint configuration
├── jest.config.ts               # Jest configuration
├── jest.preset.js               # Jest preset
├── .editorconfig                # EditorConfig
├── .prettierrc                   # Prettier configuration
├── .prettierignore              # Prettier ignore rules
├── README.md                     # Main README
└── SETUP.md                      # This file
```

## Configuration Details

### NX Configuration (nx.json)

The NX configuration includes:

1. **Default Build System**: `@angular/build:application`
   - Uses the new Angular Application Builder for all new Angular applications
   
2. **Unit Testing**: Jest
   - Configured as the default unit test runner for Angular applications
   
3. **E2E Testing**: Cypress
   - Configured as the default e2e test runner for Angular applications
   - Latest version with modern testing capabilities

4. **Build Tools**:
   - **Vite**: Configured with the Vite plugin for fast builds and development
   - **@nx/vite**: Plugin for Vite integration with NX

5. **Linting**: ESLint (via @nx/eslint plugin)

### PNPM Workspace (pnpm-workspace.yaml)

The workspace uses PNPM's catalog feature for centralized version management. All package versions are defined in the `pnpm-workspace.yaml` file, ensuring consistency across the entire monorepo.

**Key catalog entries**:
- Angular and Angular DevKit (20.3.0)
- NX packages (21.6.10)
- Cypress (13.15.0) - latest version
- Vitest (2.1.3) - available for testing framework migration
- Vite (5.4.10)
- Testing utilities (Jest, Happy DOM, etc.)
- Development tools (TypeScript, ESLint, Prettier, etc.)

To update versions, modify the `catalog:` section in `pnpm-workspace.yaml` and run `pnpm install`.

## Getting Started

### Install Dependencies

Dependencies are already installed. If you need to reinstall:

```bash
cd src/Frontend
pnpm install
```

### Create a New Angular Application

To generate a new Angular application with the preconfigured defaults:

```bash
nx g @nx/angular:application my-app
```

This will create an app with:
- Angular Application Builder
- Cypress for e2e testing
- Jest for unit testing
- ESLint for linting

### Run Applications

```bash
# Development server
nx serve frontend

# Build for production
nx build frontend

# Run unit tests
nx test frontend

# Run e2e tests
nx e2e frontend-e2e

# Lint
nx lint frontend
```

### Workspace Commands

```bash
# List all projects
nx show projects

# View dependency graph
nx graph

# Run affected commands
nx affected --target=build

# Run targets in parallel
nx run-many --target=build --all
```

## Using Vite

Vite is configured as the build tool. Applications created with the Angular Application Builder will use Vite by default.

### Vite-specific commands:

```bash
# Development with Vite
nx serve my-app

# Build with Vite
nx build my-app

# Preview built app
nx preview my-app
```

## Testing

### Jest (Default Unit Testing)

Unit tests are written using Jest and run with:

```bash
nx test frontend
```

Jest is configured with `jest-preset-angular` for Angular-specific testing utilities.

### Cypress (E2E Testing)

E2E tests use the latest version of Cypress. Run with:

```bash
nx e2e frontend-e2e

# Open Cypress UI
nx e2e frontend-e2e --watch
```

### Vitest (Available Alternative)

Vitest is installed as a dev dependency and available for migration. To add Vitest to a project:

1. Install the @nx/vitest plugin (currently not in NX 21 but available as standalone)
2. Generate Vitest config for your project
3. Update nx.json to use vitest as the test runner

## Code Quality

### ESLint

ESLint is configured with Angular-specific rules via `angular-eslint`:

```bash
nx lint frontend
```

### Prettier

Code formatting is managed by Prettier:

```bash
# Format all files
pnpm prettier --write .

# Check formatting
pnpm prettier --check .
```

## NX Features

### Affected Commands

Only rebuild/test projects that have changed:

```bash
nx affected --target=build

nx affected --target=test
```

### Computation Caching

NX caches build outputs and test results. Clear cache with:

```bash
nx reset
```

### Dependency Graph

View the project dependency graph:

```bash
nx graph
```

## Package Manager

This monorepo uses **PNPM 10** as the package manager. Key commands:

```bash
# Install dependencies
pnpm install

# Add a package
pnpm add <package>

# Remove a package
pnpm remove <package>

# Run scripts
pnpm <script-name>

# Use workspace catalog
pnpm add --save-dev some-package  # Will use version from catalog if available
```

## Updating Versions

All versions are managed through `pnpm-workspace.yaml` catalog. To update:

1. Edit the version in the `catalog:` section of `pnpm-workspace.yaml`
2. Run `pnpm install`
3. PNPM will use the updated version from the catalog

Example:
```yaml
catalog:
  "angular": "21.0.0"  # Update from 20.3.0 to 21.0.0
```

## Troubleshooting

### Peer Dependency Warnings

Some packages may have peer dependency warnings (e.g., Vitest with @angular/build). These are typically not blocking and the packages work correctly. To suppress the warnings if they become problematic, you can adjust `pnpm-workspace.yaml` settings:

```yaml
strictPeerDependencies: false  # Already set
autoInstallPeers: true          # Already set
```

### Clear Cache

If you encounter caching issues:

```bash
nx reset
pnpm install
```

### Rebuild Node Modules

For native module issues:

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## Development Workflow

1. **Create feature branch**: Follow your Git workflow
2. **Generate new components/services**:
   ```bash
   nx g @nx/angular:component my-component --project=frontend
   ```
3. **Run tests locally**:
   ```bash
   nx test frontend
   nx e2e frontend-e2e
   ```
4. **Check affected projects**:
   ```bash
   nx affected --target=lint
   nx affected --target=test
   ```
5. **Commit and push**: All tests should pass before committing

## Resources

- [NX Documentation](https://nx.dev)
- [Angular Documentation](https://angular.io)
- [PNPM Documentation](https://pnpm.io)
- [Cypress Documentation](https://docs.cypress.io)
- [Jest Documentation](https://jestjs.io)
- [Vite Documentation](https://vitejs.dev)

## Next Steps

1. Start developing in `apps/frontend`
2. Create additional apps/libraries as needed
3. Configure CI/CD pipeline to run NX commands
4. Set up monitoring and logging
5. Consider using NX Cloud for better CI performance
