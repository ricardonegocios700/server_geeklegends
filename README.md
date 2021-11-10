# json-server-base

Esse é o repositório com a base de JSON-Server + JSON-Server-Auth já configurada, feita para ser usada no desenvolvimento na atividade Capstones.

## ENDPOINTS

### USUÁRIOS

#### Cadastrar/adicionar

Assim como a documentação do JSON-Server-Auth traz (https://www.npmjs.com/package/json-server-auth), existem 3 endpoints que podem ser utilizados para cadastro e 2 endpoints que podem ser usados para login.

POST /register <br/>
POST /signup <br/>
POST /users

Qualquer um desses 3 endpoints irá cadastrar o usuário na lista de "Users", sendo que os campos obrigatórios são os de email e password.
Você pode ficar a vontade para adicionar qualquer outra propriedade no corpo do cadastro dos usuários.
Use o JSON com esses campos obrigatórios:

{
"email": "seu@email.com",
"password": "123456",
"name": "Seu Nome"
}

Retorna o token de autenticação, caso queira encaminhar o usuário direto para o sistema.

#### Login

POST /login
POST /signin

Qualquer um desses 2 endpoints pode ser usado para realizar login com um dos usuários cadastrados na lista de "Users"
{
"email": "seu@email.com",
"password": "suaSenha",
}

#### Consulta usuários

GET /users
Lista todos usuários na base de dados

Não exige envio de dados por JSON.
Exige autenticação.

Você pode refinar sua consulta usando:

GET /users?name="nomeCompleto"
ou
GET /user?email="seu@email.com"

#### Atualizando usuário

PATCH /users/1

Altera dados de um usuário, no exemplo serão alterados dados do usuário com id 1 apenas pelo usuário id.
Exige autenticação além de ser o proprietário.
Envio de dados a serem alterados por JSON,
inclua os campos que vc criou ou deseja criar:

{
"email": "seuNovo@email.com",
"password": "novaSenha",
"name": "Correção de Nome",
"cidade": "Osasco"
}

#### Remoção de usuário

DELETE /users/1

Não exige envio de dados por JSON.
Exclui um usuário, no exemplo será deletado o usuário com id 1.
Exige autenticação além de ser o proprietário.

#### PERSON SÃO USERS

Aplique as atribuições necessárias a person conforme as existentes em USERS

#### Criar uma MÍDIA

usado para exibir item separados inicialmente como:
animes, filmes, games, gibis e séries, mas nada impede que vc inclua outros

/POST /multimedias

Use o formato JSON:
{
"title": "Título",
"type": "tipo",
"image": "url",
"description": "string",
"userId": 1
}

Exige autenticação.

#### Consultar todos MULTIMEDIAS

/GET /multimedias

Retornará todos as mídias cadastradas

Dispensa uso de JSON.
Exige autenticação.

#### Consulta refinada de MULTIMEDIAS

/GET /multimedias?type=filmes

Retornará todas as mídias cadastradas cujo campo type sejam idênticos a filmes,
caso queira usar mais detalhes faça encadeamento com &, por exemplo com title = "Matrix":

/GET /multimedias?type=filmes&title=Matrix

Dispensa uso de JSON.
Exige autenticação.

#### Atualizar um MULTIMEDIAS

/PATCH /multimedias/1
O nr 1 indica o id da mídia a ser alterado.

Use o formato JSON:
{
"title": "Título",
"type": "tipo",
"image": "url",
"description": "string",
"userId": 1
}

Exige autenticação.

#### Deletar um MULTIMEDIAS

/DELETE /multimedias/1
O nr 1 indica o id da mídia a ser deletada.

Dispensa uso de JSON.
Exige autenticação além de ser o proprietário.

#### Criar uma POSTAGEM

/POST /posts

Use o formato JSON:
{
"text": "string",
"userId": 1,
"destUserId": 2,
"read": false
}

Exige autenticação.

#### Consultar todos POSTS

/GET /posts

Retornará todos as postagems cadastradas

Dispensa uso de JSON.
Exige autenticação.

#### Consulta refinada de POSTS

/GET /posts?destUserId=2
Retornará todas as postagems cadastradas cujo usuário destino seja 2.

/GET /posts?destUserId=2?read=false
Retornará todas as postagems cadastradas cujo usuário destino seja 2 e não foram lidas ainda.

/GET /posts?userId=3?read=false
Retornará todas as postagems cadastradas cujo usuário que enviou seja 3 e não foram lidas ainda.

Dispensa uso de JSON.
Exige autenticação.

#### Atualizar um POSTS

/PATCH /posts/1
O nr 1 indica o id da postagem a ser alterado.

Use o formato JSON:
{
"text": "string",
"userId": 1,
"destUserId": 2,
"read": false
}

Exige autenticação.

#### Deletar um POSTS

/DELETE /posts/1
O nr 1 indica o id da postagem a ser deletada.

Dispensa uso de JSON.
Exige autenticação.

#### Criar uma MESSAGE

/POST /stores

Use o formato JSON:
{
"quote": "texto original em inglês",
"translate": "tradução em português",
"author": "nome",
"userId": 1
}

Exige autenticação.

#### Consultar todos MESSAGES

/GET /stores

Retornará todos as mensages cadastradas

Dispensa uso de JSON.
Exige autenticação.

#### Consulta refinada de MESSAGES

/GET /stores?type=filmes

Retornará todas as mensages cadastradas cujo campo type seja filmes,
caso queira encontra com mais detalhes, por exemplo com
title = "Matrix" faça encadeamento com &, use:

/GET /stores?type=filmes&title=Matrix

Dispensa uso de JSON.
Exige autenticação.

#### Atualizar um MESSAGES

/PATCH /stores/1
O nr 1 indica o id da mensage a ser alterado.

Use o formato JSON:
{
"quote": "texto original em inglês",
"translate": "tradução em português",
"author": "nome"
}

Exige autenticação além de ser o proprietário.

#### Deletar um MESSAGES

/DELETE /stores/1
O nr 1 indica o id da mensage a ser deletada.

Dispensa uso de JSON.
Exige autenticação além de ser o proprietário.

#### Criar uma LOJA

/POST /stores

Use o formato JSON:
{
"name": "nome",
"url": "url",
"image": "url",
"segment": "segmento",
"userId": 1
}

Exige autenticação.

#### Consultar todos LOJAS

/GET /stores

Retornará todos as mensages cadastradas

Dispensa uso de JSON.
Exige autenticação.

#### Consulta refinada de LOJAS

/GET /stores?type=filmes

Retornará todas as mensages cadastradas cujo campo type sejam idênticos à filmes, caso queira encontra com mais detalhes, por exemplo com title = "Matrix" faça encadeamento com &, use:

/GET /stores?type=filmes&title=Matrix

Dispensa uso de JSON.
Exige autenticação.

#### Atualizar um LOJAS

/PATCH /stores/1
O nr 1 indica o id da mensage a ser alterado.

Use o formato JSON:
{
"quote": "texto original em inglês",
"translate": "tradução em português",
"author": "nome"
}

Exige autenticação.

#### Deletar um LOJAS

/DELETE /stores/1
O nr 1 indica o id da mensage a ser deletada.

Dispensa uso de JSON.
Exige autenticação.
