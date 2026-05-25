# Core Config

Centraliza configuracoes globais da aplicacao.

O arquivo `app-config.token.ts` expoe `APP_CONFIG`, um `InjectionToken` que entrega as variaveis do ambiente atual.

Prefira injetar `APP_CONFIG` em services e componentes em vez de importar `environment` diretamente. Isso facilita testes e evita acoplamento com arquivos de build.
