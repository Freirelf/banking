## <a name="introduction">🤖 Introdução</a>

Construído com Next.js, o Grow é uma plataforma financeira SaaS que se conecta a várias contas bancárias, exibe transações em tempo real, permite que os usuários transfiram dinheiro para outros usuários da plataforma e gerencia suas finanças completamente.

## <a name="features">🔋 Features</a>

👉 **Autenticação**: Uma autenticação SSR ultra-segura com validações e autorizações adequadas

👉 **Conectar bancos**: Integra-se com o Plaid para vinculação de várias contas bancárias

👉 **Página inicial**: Mostra uma visão geral da conta do usuário com saldo total de todos os bancos conectados, transações recentes, dinheiro gasto em diferentes categorias, etc.

👉 **Meus bancos**: Verifique a lista completa de todos os bancos conectados com respectivos saldos, detalhes da conta

👉 **Histórico de transações**: Inclui opções de paginação e filtragem para visualizar o histórico de transações de diferentes bancos

👉 **Atualizações em tempo real**: Reflete as alterações em todas as páginas relevantes ao conectar novas contas bancárias.

👉 **Transferência de fundos**: Permite que os usuários transfiram fundos usando o Dwolla para outras contas com campos obrigatórios e ID do banco destinatário.

👉 **Autenticação**: Uma autenticação SSR ultra-segura com validações e autorizações adequadas

👉 **Conectar bancos**: Integra-se com o Plaid para vinculação de várias contas bancárias

👉 **Página inicial**: Mostra uma visão geral da conta do usuário com saldo total de todos os bancos conectados, transações recentes, dinheiro gasto em diferentes categorias, etc.

👉 **Meus bancos**: Verifique a lista completa de todos os bancos conectados com respectivos saldos, detalhes da conta

👉 **Histórico de transações**: Inclui opções de paginação e filtragem para visualizar o histórico de transações de diferentes bancos

👉 **Atualizações em tempo real**: Reflete as alterações em todas as páginas relevantes ao conectar novas contas bancárias.

👉 **Transferência de fundos**: Permite que os usuários transfiram fundos usando o Dwolla para outras contas com campos obrigatórios e ID do banco destinatário.

👉 **Responsividade**: Garante que o aplicativo se adapte perfeitamente a vários tamanhos de tela e dispositivos, proporcionando uma experiência de usuário consistente em plataformas de desktop, tablet e celular.

e muito mais, incluindo arquitetura de código e reutilização.

## <a name="tech-stack">⚙️ Stacks </a>

- Next.js
- TypeScript
- Appwrite
- Plaid
- Dwolla
- React Hook Form
- Zod
- TailwindCSS
- Chart.js
- ShadCN

## <a name="quick-start">▶️ Início rápido</a>

Siga estas etapas para configurar o projeto localmente na sua máquina.

**Prerequisites**

Certifique-se de ter o seguinte instalado em sua máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Clonando o Repositório**

```bash
git clone https://github.com/Freirelf/banking.git
cd banking
```

**Instalação**

Instale as dependências do projeto usando npm:

```bash
npm install
```

**Configurar variáveis ​​de ambiente**

Crie um novo arquivo chamado `.env` na raiz do seu projeto e adicione o seguinte conteúdo:

```env
#NEXT
NEXT_PUBLIC_SITE_URL=

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox

```

Substitua os valores do espaço reservado pelas suas credenciais de conta reais. Você pode obter essas credenciais inscrevendo-se no [Appwrite](https://appwrite.io/?utm_source=youtube&utm_content=reactnative&ref=JSmastery), [Plaid](https://plaid.com/) and [Dwolla](https://www.dwolla.com/)

**Executando o Projeto**

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o projeto.