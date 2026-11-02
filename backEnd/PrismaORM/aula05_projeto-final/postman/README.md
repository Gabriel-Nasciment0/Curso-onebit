# Testes da API no Postman

Importe `Curso-onebit.postman_collection.json` no Postman e execute a coleção completa pelo **Collection Runner**, mantendo a ordem dos requests.

Antes de executar:

1. Configure a variável da coleção `baseUrl` se a API não estiver em `http://localhost:3000`.
2. Inicie a API e configure o `DATABASE_URL` para um banco de testes com as migrations aplicadas.

A coleção gera email e nomes únicos por execução, salva os IDs retornados e remove as associações e registros criados ao final. Ela percorre os endpoints de leads, grupos, campanhas e associações, incluindo regras de status e filtros/paginação.
