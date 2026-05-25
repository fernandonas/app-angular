# App Angular Base

Projeto base Angular standalone com estrutura por responsabilidade.

## Estrutura

```text
src/
  app/
    core/
      config/
      guards/
      http/
        interceptors/
      services/
    features/
      home/
    shared/
      components/
      directives/
      models/
      pipes/
      utils/
  environments/
```

Cada pasta possui um `README.md` explicando quando usar aquele local e quais tipos de arquivo devem ficar ali.

## Ambientes

Os ambientes ficam em `src/environments`:

- `environment.dev.ts`: desenvolvimento local.
- `environment.stg.ts`: homologacao/staging.
- `environment.prod.ts`: producao.

O codigo importa sempre `src/environments/environment.ts`. O Angular CLI troca esse arquivo no build usando `fileReplacements` em `angular.json`.

## Comandos

```bash
npm run start:dev
npm run start:stg
npm run start:prod

npm run build:dev
npm run build:stg
npm run build:prod

npm test
```

## Nova feature

Crie uma pasta em `src/app/features/<nome-da-feature>`.

Padrao recomendado:

```text
features/
  exemplo/
    exemplo.routes.ts
    pages/
    components/
    data-access/
    models/
```

Depois registre a feature em `src/app/app.routes.ts` usando `loadChildren`.

## Configuracao global

Use `APP_CONFIG`, definido em `src/app/core/config/app-config.token.ts`, para acessar as variaveis do ambiente por injecao de dependencia.
