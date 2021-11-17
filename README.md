## Endpoints disponiveis

como base da Url para as requisições temos :

https://geeklegends.herokuapp.com/

# Rotas que não precisam de autenticação

> > > Cadastro < < <

Para cadastrar usuario use :

    	POST /register

    Seguindo o seguinte formato de requisição :
    	{
    		"email": "olivier@mail.com",
    		"password": "bestPassw0rd",
    		"name" : "oliver",
    		"aboutMe" : "Senhor de idade mas com disposição de uma criança".
    		"preferences": "games , series e hq's"
    	}

     campos obrigatórios são email e password.

> caso o retorno positivo :

POST /register - FORMATO DA RESPOSTA - STATUS 201

    {
    	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9saXZpZXJAbWFpbC5jb20iLCJpYXQiOjE2MzUxOTk2MjcsImV4cCI6MTYzNTIwMzIyNywic3ViIjoiMyJ9.tgkGl1fNgFMocVAakn_i21f1j0iTsoQ5jjdoSjW-v-Q",
    	"user": {
    		"email": "olivier@mail.com",
    		"password": "asidjweijnwij2infwij329n",
    		"name" : "oliver",
    		"aboutMe" : "Senhor de idade mas com disposição de uma criança".
    		"preferences": "games , series e hq's" ,
    		"id": 3
    	}
    }

> caso o retorno seja negativo:

possiveis erros

POST /register - FORMATO DA RESPOSTA - STATUS 400

"Email already exists"

POST /register - FORMATO DA RESPOSTA - STATUS 400

"Email and password are required"

> > > Login do usuário < < <

Para logar usuario use :

    	POST /login

    Seguindo o seguinte modelo de requisição :
    	{
    		"email": "olivier@mail.com",
    		"password": "bestPassw0rd",

    	}

## Rotas que precisam de autenticação

Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

    Authorization: Bearer {token}

> > > USER < < <

Para listar todos os usuarios da plataforma use:

       GET /users

> > > USER Busca< < <

Para filtrar a busca por usuarios da plataforma use:

       GET /users?name="nomeCompleto"
       GET /users?email="seu@email.com"
       GET /users?id="id do usuario"

> > > USER ATT DADOS< < <

Para atualizar dados do user use:

        PATCH /users/id

        Use JSON para mostrar os dados que serão adicionados ou modificados, exemplo

{
"name": "modificação",
"cidade": "new info"
}

a onde o id é o numero do usuario proprietário que fará as modificações dos dados

> > > MY PERSONAS < < <

Para listar todos os arquivos de multimidia da plataforma use:

       GET /myPersonas?userId=id

onde o id é o id do usuario logado

> > > MY PERSONAS ADD< < <

Para add arquivos em myPersonas use:

       POST /myPersonas

    Com o seguinte exemplo de request

      {
         "name": "persona.name",
         "preferences": "persona.preferences",
       "userId": id
      }

onde o id é o id do usuario logado, persona.name e o persona.preferences se refere as caracteristicas do objeto user a ser adcionado que pode ser listado pelo get users.

> > > MY PERSONAS DELETE< < <

Para deletar os arquivos de myPersonas use:

       DELETE /myPersonas/id

onde o id é o id correspondente ao numero de identificação na lista.

> > > MEDIA < < <

Para listar todos os arquivos de multimidia da plataforma use:

        GET /multimedias

> > > MEDIA FILTRAR < < <

Para listar os arquivos de multimidia da plataforma por type use:

        GET /multimedias?type=Animes

        Types encontrados na API : Animes , Filmes , Gibis , Séries, Games.

> > > MEDIA ATT DADOS< < <

Para atualizar dados do user use:

        PATCH /multimedias/id

        Use JSON para mostrar os dados que serão adicionados ou modificados, exemplo
    {
    "like": 18
    "userId": id do usuario logado
    }

a onde o id é o numero do usuario proprietário que fará as modificações dos dados. Like e dislike recebe dados numericos

> > > MY MEDIA < < <

Para listar todos os arquivos de multimidia da plataforma use:

       GET /myMultimedias?userId=id

onde o id é o id do usuario logado

> > > MY MEDIA FILTRAR < < <

Para listar os arquivos de multimidia da plataforma por type use:

       GET /myMultimedias?userId=id&type=Animes

       Types encontrados na API : Animes , Filmes , Gibis , Séries, Games.

onde o id é o id do usuário logado.

> > > MY MEDIA ADD< < <

Para add arquivos de multimidia use:

       POST /myMultimedias

    Com o seguinte exemplo de request

      {
        "title": "name",
        "type": "type",
        "like": 0,
        "image": "image",
        "description": "text",
        "userId": id
        "id": listId
      }

onde o id é o id do usuario logado e o listId é o id de referencia encontrado no lista de gerada por get multimidias

> > > MY MEDIA DELETE< < <

Para deletar os arquivos de multimidia use:

       DELETE /myMultimedias/id

onde o id é o id correspondente ao numero de identificação na lista.

> > > GROUP < < <

Para listar users adicionados aos amigos use:

       GET /groups?userId=id

onde o id é o id do usuario logado

> > > GROUP BUSCA < < <

Para buscar user adicionado use:

       GET /myMultimedias?userId=id&name=nameUser

       nameUser = a nome do usuário

> > > GROUP ADD< < <

Para add de multimidia use:

       POST /groups

    Com o seguinte exemplo de request

{
"email": "olivier@email.com",
"name" : "Oliver",
"preferences": "games , series e hq's",
"personaId": <id do usuario amigo>
"userId": <id do usuario logado>
}

> > > GROUP DELETE< < <

Para deletar users da list use:

      DELETE /myMultimedias/id

onde o id é o id correspondente ao numero de identificação na lista.

> > > Consultar todos TALK < < <

      GET /talk

> > > TALK Enviadas pelo user < < <

Para listar meus envios de conversas aos amigos use:

      GET /talks?userId={id}

onde o id é o id do usuario logado

> > > TALK recebidas pelo user < < <

Para listar meus envios de conversas aos amigos use:

      GET /talks?destinyId={id}

onde o id é o id do usuario logado

> > > TALK BUSCA < < <

Para buscar talk relaciona adicionado use:

      GET /talks?userId=id&name=nameUser

nameUser = a nome do usuário

> > > TALK POR PARES < < <

1. Siga os seguintes passos: guarde em uma const esse resultado

   GET /talk?userId=1&destinyId=3

   ex: array = result.data

2. Concatene o resultado abaixo na const anterior /

   GET /talk?destinyId=1&userId=3

   ex: array = [...array, result.data]

3. crie uma function que ordene o resultado pelo id

> > > Criar uma TALK < < <

      POST /talk

Use o formato JSON:
{
"userId": number - id do user logado,
"destinyId": number - id do user que receberá a mensagem,
"userName" : "string - nome do user",
"destinyName" : "string - nome do user que receberá a mensagem",
"message": "string - a mensagem a ser mandada"
}

> > > TALK DELETE < < <

Para deletar users da list use:

      DELETE /talks/id

onde o id é o id correspondente ao numero de identificação na lista.

> > > POSTS (X FILE)< < <

Para listar todos os arquivos de text use:

      GET /posts

> > > POST FILTRAR < < <

Para encontrar arquivo por title use:

      GET /posts?title="nome do title"

> > > POST ATT DADOS< < < ????

Para atualizar dados do post use:

      PATCH /posts/id

      Use JSON para mostrar os dados que serão adicionados ou modificados, exemplo
      {
      "title": "modificação"
      "userId": id do usuario logado
      }

a onde o id é o numero do usuario proprietário que fará as modificações dos dados. Like e dislike recebe dados numericos

> > > POST DELETE< < <

Para deletar post da list use:

      DELETE /post/id

onde o id é o id correspondente ao numero de identificação na lista.

> > > > > Consultar todos LOJAS <<<<<

      GET /stores

Retornará todos as mensages cadastradas

Dispensa uso de JSON.

> > > > > Consulta refinada de LOJAS <<<<<<<<

       GET /stores?type=filmes

Retornará todas as mensages cadastradas cujo campo type sejam idênticos à filmes, caso queira encontra com mais detalhes, por exemplo com title = "Matrix" faça encadeamento com &, use:

       GET /stores?type=filmes&title=Matrix

Dispensa uso de JSON.

> > > > > Atualizar um LOJAS <<<<

       PATCH /stores/1

O nr 1 indica o id da mensage a ser alterado.

Use o formato JSON:

      {
    "quote": "texto original em inglês",
        "translate": "tradução em português",
        "author": "nome",
        "like": 1,
        "dislike: 1
      }

> > > Deletar um LOJAS < < <

     DELETE /stores/1

O nr 1 indica o id da mensage a ser deletada.

Dispensa uso de JSON

> > > Criar uma MYSTORE < < <

lojas favoritadas

    POST /myStores

Use o formato JSON:
{
"name": "nome",
"url": "url",
"image": "url",
"segment": "segmento",
"userId": 1
}

PS: mudar o userId para seu usuário

> > > > Consultar todos MYSTORE <<<<<

    GET /myStores?userId=1

Retornará todos as minhas lojas cadastradas

Dispensa uso de JSON.

> > > > Consulta refinada de MYSTORE <<<<<

     GET /myStores?userId=1&segment=shopping

Dispensa uso de JSON

> > > > > > > Deletar um MYSTORE <<<<<<<<

     DELETE /myStores/1

O nr 1 indica o id da minha store a ser deletada.

Dispensa uso de JSON.

> > > MESSAGE < < <

GET /messages

> > > FIND MESSAGE < < <

GET /messages/{id}

id corresponde o id de referecia no array de mensagens predefinidas
