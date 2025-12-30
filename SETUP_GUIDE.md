# Guia de Configuração do Ambiente (WSL/Ubuntu)

Este guia serve para configurar o ambiente de desenvolvimento em casa, garantindo que o projeto Angular 9 rode corretamente usando o **NVM** para gerenciar a versão do Node.js.

## 1. Instalar o NVM (Node Version Manager)

O NVM permite que você tenha múltiplas versões do Node.js instaladas e troque entre elas facilmente. Isso é essencial pois este projeto requer o **Node 12**, que é uma versão antiga.

No seu terminal WSL (Ubuntu), rode o seguinte comando:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Após o comando terminar, feche e abra o terminal novamente, ou rode este comando para atualizar as configurações:

```bash
source ~/.bashrc
```

Para verificar se instalou corretamente, digite:
```bash
nvm --version
```

## 2. Instalar e Ativar o Node.js 12

Com o NVM instalado, vamos baixar a versão 12 do Node (compatível com Angular 9):

```bash
nvm install 12
```

Agora, vamos dizer para o terminal usar essa versão:

```bash
nvm use 12
```

> **Importante:** Sempre que você abrir um novo terminal para mexer neste projeto, precisará rodar `nvm use 12`.

## 3. Baixar e Rodar o Projeto

Agora que o Node está na versão correta, siga os passos abaixo:

1.  **Clone o repositório (caso ainda não tenha):**
    ```bash
    git clone <link-do-seu-repositorio>
    cd crud-angular-9
    ```

2.  **Entre na pasta do frontend:**
    ```bash
    cd frontend
    ```

3.  **Instale as dependências:**
    Este comando vai ler o `package.json` e baixar tudo (Angular 9, Material, etc) automaticamente.
    ```bash
    npm install
    ```

4.  **Rode o projeto:**
    ```bash
    npm start
    # ou
    ng serve
    ```

5.  Acesse no navegador: `http://localhost:4200`

## Resumo para o dia a dia

Sempre que for codar:
1. Abra o terminal.
2. `nvm use 12`
3. `cd frontend`
4. `ng serve`
