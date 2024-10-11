# Documentação do Projeto de API com NestJS

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Descrição

Este projeto é uma API desenvolvida com NestJS e TypeScript, utilizando Prisma como ORM para interação com o banco de dados PostgreSQL. A API permite o gerenciamento de usuários e mensagens, incluindo autenticação, criação e listagem de registros. Este projeto foi desenvolvido em conjunto com **Jhonatan Rotta Santana**, **Wender Alves da Silva** e **Luiz Felipe Pereira de Lima**.

## Configuração do Ambiente

Antes de executar o projeto, certifique-se de configurar seu banco de dados PostgreSQL e criar um arquivo `.env` na raiz do projeto com a seguinte configuração:

DATABASE_URL="postgresql://username
@localhost:5432/database_name"

perl
Copy code

Substitua `username`, `password` e `database_name` pelos seus dados de conexão.

## Configuração do Projeto

### Instalação das Dependências

```bash
$ npm install
Compilar e Executar o Projeto
bash
Copy code
# Migrate o banco de dados
$ npx prisma migrate dev --name init

# Executar no modo desenvolvimento
$ npm run start:dev

# Executar no modo produção
$ npm run start:prod
Testando as Rotas
As rotas da API foram testadas usando o REST Client do Visual Studio Code por meio do request.http que está no src. Você pode usar o Postman ou o Insomnia para testar as rotas da API também. Abaixo estão alguns exemplos de requisições que você pode fazer:

Listar todos os usuários
bash
Copy code
GET http://localhost:3002/users
Criar um novo usuário
bash
Copy code
POST http://localhost:3002/users
Content-Type: application/json

{
    "name": "Caio Silva",
    "email": "caio@exemplo.com",
    "password": "senha123",
    "phone": "11999999999",
    "city": "São Paulo"
}
Buscar usuário pelo ID
bash
Copy code
GET http://localhost:3002/users/1
Login de usuário
bash
Copy code
POST http://localhost:3002/auth/login
Content-Type: application/json

{
    "email": "caio@exemplo.com",
    "password": "senha123"
}
Banco de Dados
O banco de dados utilizado é o PostgreSQL 17, que foi criado localmente para o projeto. Todas as interações com o banco de dados são feitas utilizando o Prisma como ORM.

Licença
Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais informações.
