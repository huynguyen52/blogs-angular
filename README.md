# AngularBlogs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Setup Jest

1.

```bash
npm uninstall karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter @types/jasmine jasmine-core
```

2.

```bash
npm i --save-dev jest @types/jest  jest-preset-angular
```

3. Create setup-jest.ts file in root folder

```typescript
import { setupZoneTestEnv } from "jest-preset-angular/setup-env/zone";
setupZoneTestEnv();
```

4. Remove all existing test files
5. Generate a basic configuration file

```bash
npm init jest@latest
```

6. update jest.config.ts

```typescript
preset: 'jest-preset-angular',
setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
```

7.

```bash
npm install ts-node
```

8. Update tsconfig.spec.json file

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jest" // 1
    ],
    "esModuleInterop": true, // 2
    "emitDecoratorMetadata": true // 3
  },
  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]
}
```

9. Add jest configuration on package.json inside script tag

```json
"test": "jest --verbose",
"test:coverage": "jest --coverage",
"test:watch": "jest --watch"
```
