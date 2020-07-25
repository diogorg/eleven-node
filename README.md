Esta finalizado.
Tem alguns pontos de melhorias:
- Validar e sanitizar todas as entradas.
- Alguns TRY.
- Melhorar o log.
- Verificar se os serviços estão de pé.
- Mopdificar alguns acessos usando spread.
- Criar casos de teste.
- outros pontos...


Muito obrigado ;D 

# Teste Dev - Node
Olá pessoa, o seu teste é composto pelo desenvolvimento de aplicação backend consumindo APIs.
    
## Hold your horses 🐎🐎🐎
Antes de mais nada, você precisa instalar uma dependência global para executar as APIs que irá consumir:
```sh
$ npm install -g json-server
```

## APIs de consumo
A lib `json-server` irá criar um backend servindo alguns endpoints baseados em arquivos com objetos JSON. 
Para isto, execute os comandos em **terminais distintos**:

```sh
# Serviço de blog
$ json-server --watch data/blog.json --port 3001

# Serviço de datalake
$ json-server --watch data/datalake.json --port 3002
```

Os comandos acima disponibilizarão alguns endpoints para você:

**Blog**

- **GET** `http://localhost:3001/posts/`
- **GET** `http://localhost:3001/posts/<id do post>`



**Datalake**

- **GET** `http://localhost:3002/products`
- **GET** `http://localhost:3002/products/<id do produto>`
- **GET** `http://localhost:3002/user`
- **GET** `http://localhost:3002/user/<id do usuário>`
- **DELETE** `http://localhost:3002/user/<id do usuário>`
- **PUT** `http://localhost:3002/user/<id do usuário>`

Consute a [documentação do server-json](https://github.com/typicode/json-server) para enterder como funcionam os [parâmetros de consulta](https://github.com/typicode/json-server#filter).

Com os endpoints funcionais, vamos as suas tarefas.. 🤞🤞


## Aplicação Backend
Sua aplicação backend deverá consumir as informações de ambas APIs e expor alguns endpoints:

- **GET** `api/v1/products`
- **GET** `api/v1/products/<id do produto>`
- **POST** `api/v1/user/`
- **GET** `api/v1/user/<id do usuário>`
- **PUT** `api/v1/user/<id do usuário>`
- **GET** `api/v1/user/<id do usuário>/posts`
- **GET** `api/v1/user/<id do usuário>/posts/<id do post>`

Em sua maioria eles irão expor as informações dos endpoints dos serviços Blog e Datalake.

Os endpoints **GET** `api/v1/user/<id do usuário>/posts` e **GET** `api/v1/user/<id do usuário>/posts/<id do post>` devem pegar o usuário e buscar somente os posts que possuem o ID do produto (no atributo `product_id` do usuário) em seu atributo `products`. Os posts que o produto do usuário não possui acesso não devem ser retornados.


## O que vamos avaliar?

- Projeto funcional
- Qualidade do código
- Organização
- Zelo no desenvolvimento

## Finalizando o projeto 😎
Para submeter o seu teste, crie um fork do projeto em seu repositório e envie o link para o email [rh@elevenfinancial.com](mailto:rh@elevenfinancial.com).

Boa sorte 🤙🤙
