# Features

Cada pasta dentro de `features` representa uma area funcional da aplicacao.

Uma feature pode conter:

- componentes de pagina;
- rotas proprias;
- services especificos;
- modelos do dominio;
- componentes usados apenas naquela feature.

Esse padrao facilita lazy loading, manutencao por dominio e remocao de funcionalidades sem mexer no restante do app.
