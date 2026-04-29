# Mark L QA Portfolio

Projeto de automação de testes end-to-end utilizando Playwright + TypeScript sobre a aplicação Mark L, um gerenciador de tarefas. Este repositório faz parte do meu portfólio de QA e demonstra práticas de organização de testes e automação web.

## Objetivo
Demonstrar na prática habilidades de:
* Automação E2E com Playwright
* Organização de testes com Page Object Model
* Uso de TypeScript
* Preparação de dados via API helper
* Uso de variáveis de ambiente

## Sobre a aplicação testada

A aplicação Mark L permite gerenciar tarefas do dia a dia. Neste projeto, os testes automatizados validam comportamentos críticos da jornada do usuário, como:

- disponibilidade da aplicação
- cadastro de nova tarefa
- bloqueio de tarefa duplicada
- validação de campo obrigatório
- conclusão de tarefa
- exclusão de tarefa

## Stack utilizada

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Variáveis de ambiente

O projeto utiliza um arquivo `.env` na raiz para parametrizar as URLs da aplicação e da API.

Exemplo:

```env
BASE_URL=http://localhost:3000
BASE_API=http://localhost:3333
```

Essas variáveis são consumidas tanto no `playwright.config.ts` quanto nos helpers de API.

## Como executar o projeto

### 1. Instalar as dependências da automação

```bash
yarn install
```

### 2. Instalar as dependências da aplicação

```bash
cd apps/web && yarn install
cd ../api && yarn install
```

### 3. Garantir o arquivo `.env`

```env
BASE_URL=http://localhost:3000
BASE_API=http://localhost:3333
```

### 4. Executar os testes

Da raiz do projeto:

```bash
yarn playwright test
```

## Execução automática dos serviços

O Playwright foi configurado para subir automaticamente:

- o front-end em `apps/web`
- a API em `apps/api`

Isso acontece por meio da opção `webServer` no arquivo [playwright.config.ts](/Users/francilenesilva/Desktop/QAx/projects/playwright-mark/playwright.config.ts), o que ajuda bastante na execução local e prepara o terreno para uso em pipelines, como GitHub Actions.

## Relatórios e evidências

O projeto está configurado com:

- `reporter: 'html'`
- screenshots automáticas
- trace em retry

Após a execução, o relatório HTML pode ser aberto a partir da pasta `playwright-report/`.