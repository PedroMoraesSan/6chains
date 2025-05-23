# MVP de Tokenização de Ativos Digitais

Este é um MVP (Minimum Viable Product) que simula um sistema de tokenização de ativos digitais com transações entre duas entidades locais: Seller (criador do ativo digital) e Buyer (comprador que realiza microtransações fictícias).

## 🚀 Estrutura do Projeto

O projeto consiste em quatro componentes principais:

1. **Blockchain Simulado**: Um arquivo JSON que armazena as transações em uma estrutura de blocos.
2. **Seller**: Servidor (porta 3001) e cliente React para criar e gerenciar ativos digitais.
3. **Buyer**: Servidor (porta 3002) e cliente React para comprar ativos e visualizar transações.
4. **Utilitários Compartilhados**: Funções para geração de hashes e criação de transações.

## 📋 Pré-requisitos

- Node.js (v14+)
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório
2. Instale as dependências:

```bash
# Na raiz do projeto
npm install

# Instalar dependências do servidor Seller
cd seller/server
npm install

# Instalar dependências do cliente Seller
cd ../client
npm install

# Instalar dependências do servidor Buyer
cd ../../buyer/server
npm install

# Instalar dependências do cliente Buyer
cd ../client
npm install
```

Alternativamente, você pode usar o script de instalação na raiz do projeto:

```bash
npm run install-all
```

## 🏃‍♂️ Executando o Projeto

Você pode iniciar cada componente separadamente:

```bash
# Iniciar servidor Seller (porta 3001)
cd seller/server
node index.js

# Iniciar cliente Seller (porta 5001)
cd ../client
npm run dev

# Iniciar servidor Buyer (porta 3002)
cd ../../buyer/server
node index.js

# Iniciar cliente Buyer (porta 5002)
cd ../client
npm run dev
```

Ou usar os scripts na raiz do projeto:

```bash
# Iniciar todos os componentes
npm run start-all

# Ou iniciar cada componente separadamente
npm run start-seller-server
npm run start-buyer-server
npm run start-seller-client
npm run start-buyer-client
```

## 🖥️ Acessando as Aplicações

- **Seller Portal**: http://localhost:5001
- **Buyer Portal**: http://localhost:5002

## 🔄 Fluxo de Uso

1. Acesse o Seller Portal e crie um novo ativo digital.
2. Acesse o Buyer Portal e compre o ativo.
3. A transação será registrada na blockchain simulada.
4. Você pode visualizar seu histórico de transações na aba "My Transactions" do Buyer Portal.

## 🔐 Segurança e Privacidade

- Os hashes são gerados usando SHA256.
- Cada transação recebe um ID único usando UUID.
- O blockchain simulado mantém um registro imutável de todas as transações.

## 🔮 Expansões Futuras

- Substituir JSON local por banco de dados (PostgreSQL, Redis, MongoDB)
- Mover o blockchain para IPFS (armazenamento imutável)
- Integrar com a Lightning Network para transações reais
- Criar uma ponte com a Solana para registrar transações on-chain

## 📝 Notas

Este é um MVP para fins de demonstração e aprendizado. Em um ambiente de produção, seria necessário implementar medidas adicionais de segurança e escalabilidade.
