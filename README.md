# App de Geogeo Localização e Timeline

## Complemento

- **App:** [repositório github](https://github.com/ElitonCamargo/app-geo-timeline).
- **API:** [repositório github](https://github.com/ElitonCamargo/api-geo-timeline).

## Visão Geral

O **App de Geogeo Localizador e Timeline** é um aplicativo móvel desenvolvido com React Native que permite aos usuários gravar e visualizar rotas de caminhadas, corridas, passeios e ciclismo. O aplicativo utiliza OpenStreetMap para exibir as rotas no mapa e fornece funcionalidades para salvar e gerenciar as rotas.

## Funcionalidades

- **Gravação de Rotas:** Inicie a gravação de um percurso e capture as coordenadas a cada metro.
- **Visualização de Rotas:** Exiba a trilha gravada no mapa com a capacidade de aplicar zoom.
- **Gerenciamento de Rotas:** Salve, visualize e manipule suas rotas gravadas.
- **Interação Social:** Siga outros usuários e visualize as rotas de usuários que você está seguindo.

## Tecnologias e Ferramentas

- **Frontend:**
  - **React Native:** Framework para desenvolvimento de aplicativos móveis.
  - **react-native-maps:** Biblioteca para integração com mapas.
  - **Expo Location:** Biblioteca para captura de localização.

- **Backend:**
  - **Node.js:** Ambiente de execução para o servidor.
  - **TypeScript:** Linguagem para o desenvolvimento do backend.
  - **Prisma:** ORM para interação com o banco de dados.

- **Banco de Dados:**
  - **MySQL:** Sistema de gerenciamento de banco de dados relacional (Para o ambiente de desenvolvimento).
  - **PostgreSQL:** Sistema de gerenciamento de banco de dados relacional (Para o ambiente de produção).
  - **OpenStreetMap:** Serviço de mapas utilizado para exibir as rotas.

## Configuração do Ambiente de Desenvolvimento

### 1. Clone o repositório
   ```bash
   git clone https://github.com/ElitonCamargo/geo_timeline.git
   cd geo_timeline
   ```

### 2. Configuração do Backend

   Navegue até o diretório do backend e siga as instruções abaixo:
   ```bash
   cd api-geo-timeline
   ```

   - **Instale as dependências:**
     ```bash
     npm install
     ```

   - **Configure o ambiente:**
     Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente necessárias, como configuração do banco de dados e outras credenciais.

   - **Execute as migrações do Prisma:**
     ```bash
     npx prisma migrate dev
     ```

   - **Inicie o servidor:**
     ```bash
     npm start
     ```

### 3. Configuração do Frontend

   Navegue até o diretório do frontend e siga as instruções abaixo:
   ```bash
   cd app-geo-timeline
   ```

   - **Instale as dependências:**
     ```bash
     npm install
     ```

   - **Configure o OpenStreetMap:**
     O aplicativo já está configurado para utilizar o OpenStreetMap. Se desejar utilizar outro serviço de mapas, ajuste a URL dos tiles conforme necessário.

   - **Inicie o aplicativo:**
     ```bash
     npm start
     ```

## Estrutura do Banco de Dados

### Tabelas

- **usuario**
  - `id`: BIGINT UNSIGNED, chave primária, auto-incremento.
  - `nome`: VARCHAR(200).
  - `email`: VARCHAR(100), único.
  - `senha`: VARCHAR(255), armazenando a senha como hash.

- **token**
  - `fk_usuario_id`: BIGINT UNSIGNED, chave estrangeira.
  - `valor`: VARCHAR(255).
  - `validade`: DATETIME.

- **time_line**
  - `id`: BIGINT UNSIGNED, chave primária, auto-incremento.
  - `fk_usuario_id`: BIGINT UNSIGNED, chave estrangeira.
  - `nome`: VARCHAR(200).
  - `coordenadas`: JSON.
  - `createdAt`: DATETIME.
  - `updatedAt`: DATETIME.

- **seguir**
  - `id`: BIGINT UNSIGNED, chave primária, auto-incremento.
  - `fk_usuario_seguidor`: BIGINT UNSIGNED, chave estrangeira.
  - `fk_usuario_seguido`: BIGINT UNSIGNED, chave estrangeira.

## Documentação da API

A API RESTful é desenvolvida em TypeScript com os seguintes endpoints principais:

- **POST /api/routes** - Inicia a gravação de uma nova rota.
- **GET /api/routes/{id}** - Obtém os detalhes de uma rota específica.
- **GET /api/users/{id}/following** - Lista os usuários que o usuário está seguindo.
- **POST /api/users/{id}/follow** - Segue um usuário.
- **GET /api/routes/user/{id}** - Lista as rotas de um usuário específico.
- **GET /api/routes/me** - Lista as rotas do usuário logado.
- **PUT /api/routes/{id}** - Edita uma rota do usuário.
- **DELETE /api/routes/{id}** - Exclui uma rota do usuário.
- **POST /api/users** - Cadastra um novo usuário.
- **POST /api/login**- Realiza o login na API.

## Contribuição

Contribuições são bem-vindas! Por favor, siga estas etapas para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua alteração (`git checkout -b minha-alteracao`).
3. Faça o commit das suas alterações (`git commit -am 'Adiciona nova funcionalidade'`).
4. Faça um push para a branch (`git push origin minha-alteracao`).
5. Abra um Pull Request.

## Licença

Este projeto é disponibilizado sob uma licença permissiva, permitindo que qualquer pessoa use, modifique e construa a partir dele para seus próprios projetos. Fique à vontade para utilizar este código como base para seus aplicativos, desde que atribua o devido crédito ao autor original. Não há restrições quanto ao uso comercial ou pessoal.



## Contato

Para mais informações, entre em contato com [camargoliveira@gmail.com](camargoliveira@gmail.com).
