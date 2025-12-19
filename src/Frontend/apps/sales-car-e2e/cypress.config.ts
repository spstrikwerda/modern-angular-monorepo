import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run sales-car:serve',
        production: 'nx run sales-car:serve:production',
      },
      ciWebServerCommand: 'nx run sales-car:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
