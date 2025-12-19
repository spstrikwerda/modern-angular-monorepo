# PNPM Workspace Catalog Reference

All package versions in this monorepo are managed through the PNPM workspace catalog defined in `pnpm-workspace.yaml`.

## How to Update Versions

To update any package version:

1. Edit the version in `pnpm-workspace.yaml` under the `catalog:` section
2. Run `pnpm install`
3. PNPM will automatically use the new version

**Example:**
```yaml
# In pnpm-workspace.yaml
catalog:
  "@angular/core": "21.0.0"  # Changed from 20.3.0
```

Then run:
```bash
pnpm install
```

## Current Catalog Contents

### Angular & Angular DevKit (20.3.0)
```yaml
"@angular/animations": "20.3.0"
"@angular/common": "20.3.0"
"@angular/compiler": "20.3.0"
"@angular/core": "20.3.0"
"@angular/forms": "20.3.0"
"@angular/platform-browser": "20.3.0"
"@angular/platform-browser-dynamic": "20.3.0"
"@angular/platform-server": "20.3.0"
"@angular/router": "20.3.0"
"@angular/ssr": "20.3.0"
"@angular/build": "20.3.0"
"@angular/cli": "20.3.0"
"@angular/compiler-cli": "20.3.0"
"@angular/language-service": "20.3.0"
"@angular-devkit/build-angular": "20.3.0"
"@angular-devkit/core": "20.3.0"
"@angular-devkit/schematics": "20.3.0"
"@schematics/angular": "20.3.0"
```

### NX Packages (21.6.10)
```yaml
"nx": "21.6.10"
"@nx/angular": "21.6.10"
"@nx/devkit": "21.6.10"
"@nx/eslint": "21.6.10"
"@nx/eslint-plugin": "21.6.10"
"@nx/jest": "21.6.10"
"@nx/js": "21.6.10"
"@nx/vite": "21.6.10"
"@nx/cypress": "21.6.10"
"@nx/web": "21.6.10"
"@nx/workspace": "21.6.10"
```

### Testing - Cypress (Latest)
```yaml
"cypress": "13.15.0"
"@cypress/schematic": "4.3.0"
```

### Testing - Vitest & Related
```yaml
"vitest": "2.1.3"
"@vitest/ui": "2.1.3"
"happy-dom": "14.12.3"
```

### Build - Vite
```yaml
"vite": "5.4.10"
```

### Utilities
```yaml
"rxjs": "7.8.0"
"zone.js": "0.15.0"
"tslib": "2.7.0"
"express": "4.21.2"
```

### Development Tools
```yaml
"typescript": "5.9.2"
"@swc/core": "1.5.7"
"@swc/helpers": "0.5.11"
"@swc-node/register": "1.9.1"
"ts-jest": "29.1.5"
"ts-node": "10.9.1"
"jest": "29.7.0"
"jest-environment-jsdom": "29.7.0"
"jest-preset-angular": "14.6.1"
"jest-util": "29.7.0"
```

### Linting & Formatting
```yaml
"@eslint/js": "9.8.0"
"eslint": "9.8.0"
"typescript-eslint": "8.40.0"
"@typescript-eslint/utils": "8.40.0"
"angular-eslint": "20.3.0"
"prettier": "2.6.2"
"eslint-config-prettier": "10.0.0"
"eslint-plugin-playwright": "1.6.2"
```

### Testing - Playwright
```yaml
"@playwright/test": "1.36.0"
```

## Using Catalog in Dependencies

In `package.json` or any `package.json` file in the workspace, reference catalog versions using `catalog:` notation:

```json
{
  "dependencies": {
    "@angular/core": "catalog:",
    "rxjs": "catalog:"
  },
  "devDependencies": {
    "typescript": "catalog:",
    "cypress": "catalog:"
  }
}
```

**Benefits:**
- ✅ Single source of truth for all versions
- ✅ Consistent versions across all packages
- ✅ Easy to update all packages at once
- ✅ Automatic peer dependency resolution
- ✅ Better workspace management

## Common Version Update Scenarios

### Update Angular and related packages
```yaml
catalog:
  "@angular/common": "21.0.0"
  "@angular/core": "21.0.0"
  "@angular/forms": "21.0.0"
  # ... update all @angular/* and @angular-devkit/* packages
```

### Update NX
```yaml
catalog:
  "nx": "22.3.1"
  "@nx/angular": "22.3.1"
  "@nx/cypress": "22.3.1"
  # ... update all @nx/* packages to same version
```

### Update Testing Tools
```yaml
catalog:
  "cypress": "14.0.0"     # Update Cypress to latest
  "jest": "30.0.0"        # Update Jest
  "vitest": "3.0.0"       # Update Vitest
```

### Update Vite
```yaml
catalog:
  "vite": "6.0.0"         # Update to latest Vite
```

## Verification Commands

Check currently installed versions:
```bash
pnpm list --depth=0
```

View specific package version:
```bash
pnpm list @angular/core
```

View dependency tree:
```bash
pnpm list --tree
```

Check for outdated packages:
```bash
pnpm outdated
```

## Migration Path for Future Updates

When ready to upgrade versions:

1. **Plan the upgrade** - Check compatibility matrix
2. **Update catalog** - Modify `pnpm-workspace.yaml`
3. **Install** - Run `pnpm install`
4. **Test** - Run unit and e2e tests
5. **Verify** - Check for breaking changes
6. **Commit** - Push changes to repository

## Notes

- All packages use exact versions in the catalog (no `^` or `~`)
- Peer dependency warnings are expected and managed by `strictPeerDependencies: false`
- PNPM automatically installs peers when `autoInstallPeers: true`

## Related Files

- `pnpm-workspace.yaml` - Main workspace configuration with catalog
- `package.json` - Root package manifest using catalog references
- `apps/*/package.json` - App-specific packages (if any) also using catalog

---

For detailed workspace configuration, see `pnpm-workspace.yaml`
