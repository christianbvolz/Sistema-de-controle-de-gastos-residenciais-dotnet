# Sistema de Controle de Gastos Residenciais

## Descrição

Este projeto é um sistema completo de controle de gastos residenciais, desenvolvido com uma arquitetura de frontend e backend separados. O frontend utiliza React com TypeScript, enquanto o backend é construído com .NET C#.

## Funcionalidades

### Frontend

- Cadastro e visualização de usuários
- Registro de transações (despesas e receitas)
- Visualização de lista de transações
- Validação de dados de entrada em tempo real

### Backend

- API REST para gerenciamento de usuários e transações
- Persistência de dados em SqlServer
- Validações de regras de negócio

## Tecnologias Utilizadas

### Frontend

- React
- TypeScript
- Vite (para build e desenvolvimento)
- Context API para gerenciamento de estado
- Axios para requisições HTTP

### Backend

- ASP.NET Core Web API
- Entity Framework Core (EF Core)
- SQL Server
- C#
- Docker para containerização

## Pré-requisitos

- Node.js (versão 22.0.0 ou superior)
- npm (normalmente vem com Node.js)
- .NET SDK 9.0
- SQLServer ou Docker e Docker Compose (para rodar o banco de dados)

## Instalação e Configuração

### Backend

1. Navegue até o diretório do backend:

```bash
cd backend
```

2. Copie o arquivo de ambiente de exemplo e configure as variáveis:

```bash
cp .env.example .env
```

4. Inicie docker-compose:

```bash
docker-compose up -d
```

5. A string de conexão do banco de dados deve ser configurada usando a variável de ambiente `DOTNET_CONNECTION_STRING`. Exemplo de configuração da variável de ambiente:

```
export DOTNET_CONNECTION_STRING="Server=127.0.0.1;Database=gastos;User=SA;Password=SqlServer123;TrustServerCertificate=True"
```

6. Execute as migrações do EF Core para criar o banco de dados e as tabelas:

```bash
dotnet ef database update
```

7. Execute o seguinte comando para iniciar a API:

```bash
dotnet run
```

O backend estará rodando em `http://localhost:5049`.

### Frontend

1. Navegue até o diretório do frontend:

```bash
cd frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Copie o arquivo de ambiente de exemplo e configure as variáveis:

```bash
cp .env.example .env
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O frontend estará disponível em `http://localhost:5173`.

## Uso

Após iniciar tanto o backend quanto o frontend, você pode acessar a aplicação através do navegador.

1. Cadastre um novo usuário através do formulário de cadastro.
2. Use o formulário de transações para adicionar novas despesas ou receitas.
3. Visualize a lista de usuários na página principal.
4. Visualize a lista de transações na página de transações.

## Estrutura do Projeto

```
├── backend/
│ ├── controllers/
│ ├── Dto/
│ ├── Migrations/
│ ├── Models/
│ ├── Repository/
│ ├── Program.cs
│ ├── .env
│ ├── appsettings.json
│ ├── backend.csproj
│ ├── docker-compose.yml
│ └── Program.cs
│
├── frontend/
│ ├── src/
│ │ ├── api/
│ │ │ └──requests.ts
│ │ ├── components/
│ │ ├── context/
│ │ ├── pages/
│ │ ├── types/
│ │ └── validations/
│ │ ├── App.tsx
│ │ └── main.tsx
│ └── .env
│
└── README.md
```

## Contato

Se você tiver alguma dúvida, sinta-se à vontade para entrar em contato:

- Christian Volz - [christianbvolz@gmail.com](mailto:christianbvolz@gmail.com)
