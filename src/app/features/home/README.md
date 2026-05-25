# Home Feature

Feature inicial da aplicacao.

Ela possui suas proprias rotas em `home.routes.ts` e o componente principal em `home.ts`.

Para novas features, use esta pasta como exemplo:

- crie `features/<nome>/<nome>.routes.ts`;
- exponha as rotas via `loadChildren` em `app.routes.ts`;
- mantenha componentes e services especificos dentro da feature.
