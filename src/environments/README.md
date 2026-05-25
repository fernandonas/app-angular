# Environments

Esta pasta contem as variaveis de ambiente usadas no build.

Arquivos:

- `environment.ts`: arquivo padrao importado pelo codigo.
- `environment.dev.ts`: variaveis para desenvolvimento.
- `environment.stg.ts`: variaveis para homologacao/staging.
- `environment.prod.ts`: variaveis para producao.
- `environment.model.ts`: contrato TypeScript das variaveis.

O Angular troca `environment.ts` pelo arquivo correto usando `fileReplacements` em `angular.json`.

Comandos principais:

- `npm run start:dev`
- `npm run start:stg`
- `npm run start:prod`
- `npm run build:dev`
- `npm run build:stg`
- `npm run build:prod`
