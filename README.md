
# CRUD Angular 9

Este projeto é um CRUD (Create, Read, Update, Delete) completo utilizando Angular 9 no frontend e um backend simulado com JSON Server.

## Funcionalidades
- Cadastro de produtos
- Listagem de produtos
- Edição de produtos
- Exclusão de produtos
- Validação de formulários
- Mensagens de sucesso e erro com Angular Material

## Tecnologias Utilizadas
- Angular 9
- Angular Material
- JSON Server (backend fake)
- RxJS

## Estrutura do Projeto
```
crud-angular-9/
├── backend/           # Backend fake com JSON Server
│   ├── db.json        # Base de dados fake
│   └── ...
├── frontend/          # Aplicação Angular
│   ├── src/app/
│   │   ├── components/
│   │   ├── directives/
│   │   └── views/
│   └── ...
└── README.md
```

## Como rodar o projeto

### 1. Instale as dependências

No diretório `frontend`:
```bash
cd frontend
npm install
```
No diretório `backend`:
```bash
cd ../backend
npm install
```

### 2. Inicie o backend (JSON Server)
```bash
npm start
```

### 3. Inicie o frontend (Angular)
```bash
cd ../frontend
ng serve
```
Acesse: http://localhost:4200

## Observações
- O backend roda por padrão em http://localhost:3001
- O frontend espera o backend rodando para funcionar corretamente.
- Para testar mensagens de erro, pare o backend e tente criar/editar/excluir um produto.

## Autor
- Baseado em aulas do professor [Nome do Professor]
- Adaptado por [Seu Nome]
