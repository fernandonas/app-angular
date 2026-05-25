# Estrutura de `app`

Esta pasta contem o codigo da aplicacao Angular. A ideia e separar responsabilidades por camadas:

- `core`: infraestrutura global e servicos singleton.
- `features`: telas e fluxos de negocio.
- `shared`: pecas reutilizaveis e sem regra de negocio especifica.

Esse padrao ajuda o projeto a crescer sem misturar componentes de tela, configuracao global e utilitarios genericos no mesmo lugar.
