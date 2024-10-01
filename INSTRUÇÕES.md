# Passo a Passo para Configuração da API com TypeScript, Prisma e Express

## Instalação de Bibliotecas

### 1. Inicializar o projeto com `npm init`
```bash
npm init -y
```
**Objetivo:** Este comando cria o arquivo `package.json`, que serve para:
- Definir metadados do projeto (nome, versão, etc.).
- Gerenciar dependências de produção e desenvolvimento.
- Automatizar tarefas com scripts (como compilar TypeScript).
- Organizar e facilitar o controle do projeto.

### 2. Instalar as dependências necessárias
```bash
npm install express @prisma/client jsonwebtoken bcryptjs
```
**Objetivo:** Instalar bibliotecas essenciais:
- **Express**: Framework minimalista para Node.js.
- **@prisma/client**: Cliente ORM para interagir com o banco de dados.
- **jsonwebtoken**: Biblioteca para manipulação de JSON Web Tokens (JWT).
- **bcryptjs**: Biblioteca para hash seguro de senhas.

### 3. Instalar dependências de desenvolvimento
```bash
npm install -D typescript ts-node @types/express @types/node @types/jsonwebtoken @types/bcryptjs prisma nodemon
```
**Objetivo:** Instalar as ferramentas necessárias para o desenvolvimento:
- **typescript**: Compilador para TypeScript.
- **ts-node**: Permite rodar arquivos `.ts` diretamente no Node.js.
- **@types**: Tipos TypeScript para fornecer autocomplete e verificações de tipo.
- **prisma**: Ferramenta ORM para consultas e migrações no banco de dados.
- **nodemon**: Reinicia automaticamente o servidor quando alterações no código são feitas.

## Configurações

### 4. Inicializar o TypeScript
```bash
npx tsc --init
```
**Objetivo:** Criar o arquivo `tsconfig.json` para configurar o compilador TypeScript.

### 5. Configurar o `tsconfig.json`
```bash
    {
    "compilerOptions": {
        "target": "ES2020",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "outDir": "./dist"
    },
    "include": ["src/**/*.ts"],
    "exclude": ["node_modules"]
    }
```
- **"target"**: "ES2020": Define a versão do JavaScript que o TypeScript vai gerar.
- **"module"**: "CommonJS": Especifica o sistema de módulos (compatível com Node.js).
- **"outDir"**: "./dist": Diretório de saída para o código JavaScript compilado.

### 6. Inicializar o Prisma e configurar o banco de dados
```bash
npx prisma init
```
**Objetivo:** Inicializar o Prisma e configurar o banco de dados.

### 7. Executar a migração para criação da estrutura do banco de dados
```bash
npx prisma migrate dev --name init
```

### 8. Gerar o Prisma Client, que é a biblioteca que permite interagir com o banco de dados.
```bash
npx prisma generate
```
### 9. Scripts no `package.json`
```bash
    {
        "scripts": {
            "dev": "nodemon src/index.ts",
            "build": "tsc",
            "start": "node dist/index.js",
            "migrate:dev": "npx prisma migrate dev",
            "migrate:generate": "npx prisma generate",
            "migrate:deploy": "npx prisma migrate deploy"
        }
    }
```
- Configurando o package.json desta forma é possível facilitar a execução da migração.
    ```bash
        npm run migrate:dev
    ```
    ```bash
        npm run migrate:generate
    ```
    ```bash
        npm run migrate:deploy
    ```

## Executando a API
### Configurando recomendadas `package.json`.
```bash
    {
        "scripts": {
            "dev": "nodemon src/index.ts",
            "build": "tsc",
            "start": "node dist/index.js"
        }
    }
```
- **npm run dev**   ->Durante o desenvolvimento, você pode rodar o servidor diretamente com o comando;
```bash
npm run dev
```
- **npm run build** ->Quando quiser compilar o TypeScript para JavaScript;
```bash
npm run build
```
- **npm start**     ->Depois de compilado é possível executar o JavaScript com resultante
```bash
npm start
```

---

Este arquivo descreve o processo para iniciar a criação de uma API com TypeScript, Prisma e Express.
