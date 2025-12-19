# Quick Start Guide - NX Monorepo

## Installation Complete ✅

Your NX monorepo has been successfully created with the following configuration:

### Installed Versions
- **NX**: 21.6.10
- **Angular**: 20.3.0
- **TypeScript**: 5.9.2
- **PNPM**: 10.x
- **Cypress**: 13.15.0 (latest)
- **Vite**: 5.4.10
- **Vitest**: 2.1.3 (available)
- **Jest**: 29.7.0

## Quick Commands

### Start Development Server
```bash
cd src/Frontend
pnpm nx serve frontend
```

The app will be available at `http://localhost:4200`

### Run Tests
```bash
# Unit tests (Jest)
pnpm nx test frontend

# E2E tests (Cypress)
pnpm nx e2e frontend-e2e
pnpm nx e2e frontend-e2e --watch  # Interactive mode
```

### Build for Production
```bash
pnpm nx build frontend --configuration=production
```

### Create a New App
```bash
pnpm nx g @nx/angular:application my-new-app
```

This will automatically create:
- Angular app with Angular Application Builder
- Cypress e2e test configuration
- Jest unit test setup
- ESLint configuration

### View Project Graph
```bash
pnpm nx graph
```

## Key Features Enabled

✅ **Angular Application Builder** - Modern Angular build system
✅ **Cypress e2e Testing** - Latest version for integration tests
✅ **Jest Unit Testing** - Fast unit test execution
✅ **Vite Build Tool** - Lightning-fast builds
✅ **Vitest** - Ready for migration when needed
✅ **PNPM Workspace** - Centralized version catalog
✅ **ESLint + Prettier** - Code quality and formatting
✅ **TypeScript 5.9** - Latest type safety features

## Important Files

- **pnpm-workspace.yaml** - Central version management (catalog)
- **nx.json** - NX configuration and defaults
- **apps/frontend/project.json** - App-specific configuration
- **package.json** - Root dependencies (all using catalog versions)
- **SETUP.md** - Detailed documentation

## Next Steps

1. **Start developing**: Open `apps/frontend/src/` to begin
2. **Review existing app**: Check `apps/frontend/` for structure
3. **Generate components**: `pnpm nx g @nx/angular:component my-component --project=frontend`
4. **Read SETUP.md**: Detailed documentation on all features
5. **Explore NX**: `pnpm nx --help` or visit https://nx.dev

## Troubleshooting

### If pnpm commands don't work
Make sure you're in the correct directory:
```bash
cd C:\Git\Achmea.FBTO.Sitecore\src\Frontend
```

### Clear cache if experiencing issues
```bash
pnpm nx reset
pnpm install
```

### Check workspace status
```bash
pnpm nx show projects
pnpm nx graph
```

## Documentation Links

- [NX Docs](https://nx.dev)
- [Angular Docs](https://angular.io)
- [PNPM Docs](https://pnpm.io)
- [Cypress Docs](https://docs.cypress.io)
- [Vite Docs](https://vitejs.dev)

---

**Ready to develop?** Start with `pnpm nx serve frontend` and navigate to `http://localhost:4200`
