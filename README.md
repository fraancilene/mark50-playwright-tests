# Mark L QA Portfolio

Projeto de automação de testes end-to-end construído com **Playwright + TypeScript** sobre a aplicação **Mark L**, um gerenciador de tarefas. Este repositório faz parte da minha jornada de formação em QA e foi estruturado como peça de portfólio, com foco em boas práticas de automação, organização de cenários e apoio da API para preparação de massa de teste.

## Objetivo

Demonstrar na prática habilidades de:

- modelagem de cenários de teste E2E
- automação web com Playwright
- uso de TypeScript para criar testes mais legíveis e sustentáveis
- organização com Page Objects
- preparação de dados via API helper
- uso de variáveis de ambiente
- configuração para execução local e futura integração com CI

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

## Estrutura do projeto

```text
.
├── apps/
│   ├── api/                 # API utilizada pela aplicação
│   └── web/                 # Front-end utilizado nos testes
├── tests/
│   ├── fixtures/            # Massa de dados e tipagens
│   ├── support/
│   │   ├── helpers.ts       # Apoio para preparação de massa via API
│   │   └── pages/tasks/     # Page Object da tela de tarefas
│   ├── home.spec.ts         # Smoke test da aplicação
│   └── tasks.spec.ts        # Cenários funcionais de tasks
├── playwright.config.ts     # Configuração do Playwright
├── tsconfig.json            # Configuração TypeScript da automação
└── .env                     # Variáveis de ambiente do projeto
```

## Padrões aplicados

### Page Object Model

Os elementos e ações da interface foram encapsulados em uma classe de página para melhorar:

- reutilização
- manutenção
- legibilidade dos testes

Exemplo: [tests/support/pages/tasks/index.ts](/Users/francilenesilva/Desktop/QAx/projects/playwright-mark/tests/support/pages/tasks/index.ts)

### Dados de teste centralizados

Os cenários utilizam uma massa de dados separada do fluxo do teste, o que facilita manutenção e leitura.

Exemplo: [tests/fixtures/tasks.json](/Users/francilenesilva/Desktop/QAx/projects/playwright-mark/tests/fixtures/tasks.json)

### Preparação de estado via API

Antes de alguns testes, a API é utilizada para remover ou criar tarefas, reduzindo dependência do estado anterior da UI e tornando os cenários mais confiáveis.

Exemplo: [tests/support/helpers.ts](/Users/francilenesilva/Desktop/QAx/projects/playwright-mark/tests/support/helpers.ts)

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
npx playwright test
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

## Cenários automatizados

Atualmente, a suíte cobre:

1. disponibilidade da aplicação
2. cadastro de uma nova tarefa
3. tentativa de cadastro duplicado
4. validação de campo obrigatório
5. conclusão de tarefa
6. exclusão de tarefa

## Aprendizados aplicados neste projeto

Durante a construção deste projeto, trabalhei pontos importantes da rotina de QA, como:

- leitura e depuração de erros do Playwright
- tratamento de operações assíncronas com `async/await`
- parametrização com variáveis de ambiente
- uso de seletores e assertions mais estáveis
- organização de testes para favorecer escalabilidade

## Próximos passos

Evoluções que podem ser incorporadas ao projeto:

- pipeline no GitHub Actions para execução automática
- geração e publicação de artifacts de teste
- uso de `baseURL` em todos os fluxos
- cobertura cross-browser
- separação por tags ou níveis de teste
- métricas de execução e histórico de falhas

## Portfólio QA

Este projeto representa não apenas a automação de cenários, mas também meu cuidado com:

- clareza na documentação
- estruturação do projeto
- confiabilidade dos testes
- boas práticas de engenharia de qualidade

Ele faz parte da construção do meu portfólio como profissional de QA, com foco em evolução contínua e domínio de ferramentas modernas de automação.

## Autora

**Francilene Silva**

Se quiser acompanhar minha evolução em QA, este projeto é uma amostra prática da minha jornada com automação de testes.
