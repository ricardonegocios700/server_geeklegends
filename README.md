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
"email": "seu@email.com", <br/>
"password": "123456", <br/>
"name": "Seu Nome"
}

Retorna o token de autenticação, caso queira encaminhar o usuário direto para o sistema.

#### Login

POST /login
POST /signin

Qualquer um desses 2 endpoints pode ser usado para realizar login com um dos usuários cadastrados na lista de "Users"
{
"email": "seu@email.com", <br/>
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
"email": "seuNovo@email.com", <br/>
"password": "novaSenha", <br/>
"name": "Correção de Nome", <br/>
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
"title": "Título", <br/>
"type": "tipo", <br/>
"image": "url", <br/>
"description": "string", <br/>
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
"title": "Título", <br/>
"type": "tipo", <br/>
"image": "url", <br/>
"description": "string", <br/>
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
"text": "string", <br/>
"userId": 1, <br/>
"destUserId": 2, <br/>
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
"text": "string", <br/>
"userId": 1, <br/>
"destUserId": 2, <br/>
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
"quote": "texto original em inglês", <br/>
"translate": "tradução em português", <br/>
"author": "nome", <br/>
"userId": 1
}

Exige autenticação.

#### Consultar todos MESSAGES

/GET /messages

Retornará todos as mensages cadastradas

Dispensa uso de JSON.
Exige autenticação.

#### Consulta refinada de MESSAGES

/GET /messages?type=filmes

Retornará todas as mensages cadastradas cujo campo type seja filmes,
caso queira encontra com mais detalhes, por exemplo com
author = "Unknown Author" faça encadeamento com &, use:

/GET /messages?type=filmes&author=Unknown Author

Dispensa uso de JSON.
Exige autenticação.

#### Atualizar um MESSAGES

/PATCH /messages/1
O nr 1 indica o id da mensage a ser alterado.

Use o formato JSON:
{
"quote": "texto original em inglês", <br/>
"translate": "tradução em português", <br/>
"author": "nome"
}

Exige autenticação além de ser o proprietário.

#### Deletar um MESSAGES

/DELETE /messages/1
O nr 1 indica o id da mensage a ser deletada.

Dispensa uso de JSON.
Exige autenticação além de ser o proprietário.

#### Criar uma LOJA

/POST /stores

Use o formato JSON:
{
"name": "nome", <br/>
"url": "url", <br/>
"image": "url", <br/>
"segment": "segmento", <br/>
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
"quote": "texto original em inglês", <br/>
"translate": "tradução em português", <br/>
"author": "nome"
}

Exige autenticação.

#### Deletar um LOJAS

/DELETE /stores/1
O nr 1 indica o id da mensage a ser deletada.

Dispensa uso de JSON.
Exige autenticação.

#### Criar uma MYSTORE

// lojas favoritadas

/POST /myStores

Use o formato JSON:
{
"name": "nome", <br/>
"url": "url", <br/>
"image": "url", <br/>
"segment": "segmento", <br/>
"userId": 1
}

PS: mudar o userId para seu usuário

Exige autenticação.

#### Consultar todos MYSTORE

/GET /myStores?userId=1

Retornará todos as minhas lojas cadastradas

Dispensa uso de JSON.
Exige autenticação.

#### Consulta refinada de MYSTORE

/GET /myStores?userId=1&segment=shopping

Dispensa uso de JSON.
Exige autenticação.

#### Deletar um MYSTORE

/DELETE /myStores/1
O nr 1 indica o id da minha store a ser deletada.

Dispensa uso de JSON.
Exige autenticação.

#### Criar uma MYMULTIMEDIAS

// lojas favoritadas

/POST /myMultimedias

Use o formato JSON:
{
"title": "titulo", <br/>
"type": "Animes", <br/>
"image": "url", <br/>
"description": "um texto", <br/>
"userId": 1
}

PS: mudar o userId para usuário

Exige autenticação.

#### Consultar todos MYMULTIMEDIAS

/GET /myMultimedias?userId=1

Retornará todos as minhas mídias cadastradas

Dispensa uso de JSON.
Exige autenticação.

#### Consulta refinada de MYMULTIMEDIAS

/GET /myMultimedias?userId=1&type=Animes

Dispensa uso de JSON.
Exige autenticação.

#### Deletar um MYMULTIMEDIAS

/DELETE /myMultimedias/1
O nr 1 indica o id mídia a ser deletada.

Dispensa uso de JSON.
Exige autenticação.

#### Criar uma TALK

// lojas favoritadas

/POST /talk

Use o formato JSON:
{
"title": "titulo", <br/>
"type": "Animes", <br/>
"image": "url", <br/>
"description": "um texto", <br/>
"userId": 1
}

PS: mudar o userId para usuário

Exige autenticação.

#### Consultar todos TALK

Siga os seguintes passos:
guarde em uma const esse resultado
/GET /talk?userId=1&destinyId=3

concatene o resultado abaixo na const anterior
/GET /talk?destinyId=1&userId=3

crie uma function que ordene o resultado pelo id

Dispensa uso de JSON.
Exige autenticação.

#### Deletar um TALK

/DELETE /myMultimedias/1
O nr 1 indica o id mídia a ser deletada.

Dispensa uso de JSON.
Exige autenticação.
