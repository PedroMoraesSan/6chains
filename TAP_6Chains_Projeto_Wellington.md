# TERMO DE ABERTURA DE PROJETO (TAP)

## 6CHAINS - MARKETPLACE DE TOKENIZAÇÃO DE ATIVOS DIGITAIS

---

### **INFORMAÇÕES GERAIS DO PROJETO**

| **Campo** | **Informação** |
|-----------|----------------|
| **Nome do Projeto** | 6Chains - Marketplace de Tokenização de Ativos Digitais |
| **Patrocinador** | Universidade/Instituição Acadêmica |
| **Gerente do Projeto** | Wellington [Sobrenome] |
| **Data de Elaboração** | 29 de maio de 2025 |
| **Data de Início** | 01 de junho de 2025 |
| **Data de Término** | 01 de dezembro de 2025 |
| **Duração Estimada** | 6 meses |
| **Versão do Documento** | 1.0 |

---

## 1. JUSTIFICATIVA DO PROJETO

### 1.1 Contexto de Mercado
O mercado global de tokenização de ativos está em crescimento exponencial, com projeções de atingir US$ 5.6 trilhões até 2030. A tokenização representa uma revolução na forma como ativos são comercializados, oferecendo:

- **Democratização do acesso** a investimentos antes exclusivos
- **Liquidez aumentada** para ativos tradicionalmente ilíquidos  
- **Transparência e segurança** através da tecnologia blockchain
- **Redução de custos** operacionais e de intermediação

### 1.2 Oportunidade Identificada
A blockchain Solana, com sua capacidade de processar 65.000 transações por segundo e taxas médias de US$ 0,00025, apresenta uma oportunidade única para criar um marketplace eficiente e acessível para tokenização de ativos digitais.

### 1.3 Validação Técnica
Os MVPs desenvolvidos (mvp-tokenization e mvp-tokenizationv2) demonstraram:
- ✅ **Viabilidade técnica** do conceito
- ✅ **Interesse do mercado** por soluções completas de tokenização
- ✅ **Funcionalidade** da integração com blockchain Solana
- ✅ **Usabilidade** das interfaces desenvolvidas

---

## 2. DESCRIÇÃO DO PROJETO

### 2.1 Visão do Produto
O 6Chains será um **marketplace completo e intuitivo** para tokenização de ativos digitais, permitindo que criadores transformem seus ativos em tokens SPL na blockchain Solana e os disponibilizem para venda, enquanto compradores podem adquirir, negociar e gerenciar esses tokens de forma segura e transparente.

### 2.2 Missão
Democratizar o acesso à tokenização de ativos digitais através de uma plataforma segura, escalável e de fácil utilização, utilizando a tecnologia blockchain Solana.

### 2.3 Proposta de Valor
- **Para Criadores**: Ferramenta simples para tokenizar e monetizar ativos digitais
- **Para Compradores**: Acesso seguro a mercado de tokens com liquidez garantida
- **Para o Mercado**: Plataforma confiável e regulamentada para tokenização

---

## 3. OBJETIVOS DO PROJETO

### 3.1 Objetivo Geral
Desenvolver e implementar uma plataforma completa de marketplace para tokenização de ativos digitais utilizando a blockchain Solana, criando um ecossistema seguro e escalável para criadores e compradores.

### 3.2 Objetivos Específicos

#### 3.2.1 Objetivos Técnicos
- [x] Implementar sistema de criação e gerenciamento de tokens SPL na Solana
- [x] Desenvolver interfaces responsivas para vendedores e compradores
- [x] Criar sistema de carteiras integrado com múltiplos provedores
- [x] Estabelecer arquitetura de microserviços escalável
- [x] Implementar sistema de autenticação e autorização robusto

#### 3.2.2 Objetivos de Negócio
- [x] Atingir 100+ vendedores cadastrados nos primeiros 3 meses
- [x] Processar 1000+ transações nos primeiros 6 meses
- [x] Garantir 99.9% de uptime da plataforma
- [x] Obter satisfação do usuário ≥ 85% nas pesquisas

#### 3.2.3 Objetivos de Conformidade
- [x] Implementar processos KYC/AML básicos
- [x] Garantir conformidade com regulamentações brasileiras
- [x] Estabelecer políticas de privacidade e proteção de dados
- [x] Realizar auditorias de segurança regulares

---

## 4. ESCOPO DO PROJETO

### 4.1 Incluído no Escopo

#### 4.1.1 Funcionalidades Core
- **Sistema de Autenticação**
  - Login/registro de usuários
  - Verificação de identidade básica
  - Gerenciamento de perfis

- **Módulo Vendedor**
  - Dashboard com métricas e análises
  - Criação e edição de ativos digitais
  - Tokenização automática na Solana
  - Gerenciamento de listagens
  - Histórico de vendas e comissões

- **Módulo Comprador**
  - Marketplace com busca e filtros
  - Detalhes dos ativos e criadores
  - Sistema de compra com carteira Solana
  - Portfolio de tokens adquiridos
  - Histórico de transações

- **Infraestrutura Blockchain**
  - Integração completa com Solana
  - Criação automática de tokens SPL
  - Gerenciamento de transações
  - Monitoramento de eventos blockchain

#### 4.1.2 Funcionalidades Adicionais
- Sistema de notificações em tempo real
- API REST completa para integrações
- Dashboard administrativo
- Sistema de suporte ao cliente
- Documentação técnica completa

### 4.2 Não Incluído no Escopo
- Integração com outras blockchains além da Solana
- Sistema de staking ou yield farming
- Marketplace de NFTs (foco apenas em tokens SPL)
- Funcionalidades de DeFi (empréstimos, pools de liquidez)
- Aplicativo mobile nativo

---

## 5. REQUISITOS DE ALTO NÍVEL

### 5.1 Requisitos Funcionais

| **ID** | **Requisito** | **Prioridade** |
|--------|---------------|----------------|
| RF01 | Sistema de registro e autenticação de usuários | Alta |
| RF02 | Criação e gerenciamento de tokens SPL | Alta |
| RF03 | Marketplace com listagem de ativos | Alta |
| RF04 | Sistema de compra e venda de tokens | Alta |
| RF05 | Integração com carteiras Solana | Alta |
| RF06 | Dashboard com métricas | Média |
| RF07 | Sistema de notificações | Média |
| RF08 | API para integrações externas | Baixa |

### 5.2 Requisitos Não-Funcionais

| **Categoria** | **Requisito** | **Meta** |
|---------------|---------------|----------|
| **Performance** | Tempo de resposta das páginas | < 2 segundos |
| **Escalabilidade** | Usuários simultâneos | 1.000+ |
| **Disponibilidade** | Uptime da plataforma | 99.9% |
| **Segurança** | Proteção de dados | Criptografia AES-256 |
| **Usabilidade** | Taxa de conclusão de tarefas | > 90% |
| **Compatibilidade** | Navegadores suportados | Chrome, Firefox, Safari |

---

## 6. PREMISSAS DO PROJETO

### 6.1 Premissas Técnicas
- A blockchain Solana manterá sua estabilidade e performance atual
- As ferramentas de desenvolvimento (React, Node.js) permanecerão atualizadas
- A integração com carteiras Solana funcionará conforme especificado
- Os serviços de cloud (AWS/Azure) estarão disponíveis

### 6.2 Premissas de Negócio
- Haverá interesse contínuo do mercado por tokenização
- O ambiente regulatório brasileiro permitirá a operação
- Os usuários terão conhecimento básico de carteiras digitais
- Haverá recursos suficientes para marketing e aquisição de usuários

### 6.3 Premissas de Equipe
- A equipe terá acesso às ferramentas necessárias
- Os desenvolvedores possuem conhecimento em blockchain
- Haverá suporte contínuo da universidade/instituição
- O cronograma acadêmico permitirá dedicação adequada

---

## 7. RESTRIÇÕES DO PROJETO

### 7.1 Restrições de Tempo
- Prazo fixo de 6 meses para conclusão
- Dependência do calendário acadêmico
- Marcos de entrega não negociáveis

### 7.2 Restrições de Recursos
- Orçamento limitado para infraestrutura
- Equipe reduzida (acadêmica)
- Ferramentas gratuitas ou de baixo custo

### 7.3 Restrições Técnicas
- Dependência da blockchain Solana
- Limitações de performance das ferramentas gratuitas
- Restrições de deploy em ambiente acadêmico

### 7.4 Restrições Regulatórias
- Conformidade com regulamentações brasileiras
- Limitações para operação comercial real
- Necessidade de disclaimers para ambiente acadêmico

---

## 8. RISCOS IDENTIFICADOS

### 8.1 Matriz de Riscos

| **Risco** | **Impacto** | **Probabilidade** | **Severidade** | **Mitigação** |
|-----------|-------------|------------------|----------------|---------------|
| Instabilidade da Solana | Alto | Baixa | Alta | Modo de simulação como fallback |
| Mudanças regulatórias | Médio | Média | Média | Monitoramento contínuo, disclaimers |
| Problemas de segurança | Alto | Média | Alta | Auditorias regulares, testes de penetração |
| Atrasos no desenvolvimento | Médio | Alta | Média | Metodologia ágil, controle rigoroso |
| Baixa adoção de usuários | Baixo | Média | Baixa | Estratégia de marketing, UX intuitivo |
| Falhas de infraestrutura | Médio | Baixa | Média | Monitoramento, backups regulares |

### 8.2 Plano de Contingência
- **Backup da Solana**: Sistema mock funcional para demonstrações
- **Problemas de segurança**: Equipe de resposta rápida definida
- **Atrasos**: Buffer de tempo em cada sprint
- **Infraestrutura**: Serviços alternativos identificados

---

## 9. CRONOGRAMA MACRO

### 9.1 Fases do Projeto

| **Fase** | **Duração** | **Descrição** | **Entregas Principais** |
|----------|-------------|---------------|-------------------------|
| **Fase 1: Iniciação** | 4 semanas | Planejamento detalhado e setup | TAP, arquitetura, ambiente |
| **Fase 2: MVP Básico** | 6 semanas | Funcionalidades core | Auth, criação de tokens, marketplace básico |
| **Fase 3: Integração** | 6 semanas | Integração com Solana | Carteiras, transações reais |
| **Fase 4: Refinamento** | 4 semanas | UX/UI e funcionalidades avançadas | Dashboard, notificações, otimizações |
| **Fase 5: Testes** | 3 semanas | Testes abrangentes | Bateria de testes, correções |
| **Fase 6: Deploy** | 1 semana | Lançamento e documentação | Ambiente produção, manuais |

### 9.2 Marcos Importantes

| **Marco** | **Data** | **Entrega** |
|-----------|----------|-------------|
| M1 | 30/06/2025 | Aprovação da arquitetura |
| M2 | 31/07/2025 | MVP básico funcional |
| M3 | 15/09/2025 | Integração Solana completa |
| M4 | 15/10/2025 | Plataforma com todas funcionalidades |
| M5 | 15/11/2025 | Testes finalizados |
| M6 | 01/12/2025 | Deploy em produção |

---

## 10. ORÇAMENTO ESTIMADO

### 10.1 Recursos Necessários

| **Categoria** | **Item** | **Custo Mensal** | **Total (6 meses)** |
|---------------|----------|------------------|---------------------|
| **Infraestrutura** | Servidores cloud | R$ 200 | R$ 1.200 |
| **Infraestrutura** | Domínio e SSL | R$ 50 | R$ 300 |
| **Desenvolvimento** | Ferramentas premium | R$ 100 | R$ 600 |
| **Segurança** | Auditoria de código | - | R$ 1.500 |
| **Marketing** | Landing page e materiais | - | R$ 500 |
| **Contingência** | 15% do total | - | R$ 615 |
| **TOTAL** | | | **R$ 4.715** |

### 10.2 Fontes de Financiamento
- Recursos próprios do estudante
- Possível apoio institucional da universidade
- Créditos gratuitos de provedores cloud (AWS/Azure Education)

---

## 11. EQUIPE DO PROJETO

### 11.1 Organograma

```
Gerente de Projeto (Wellington)
├── Desenvolvimento Backend
├── Desenvolvimento Frontend  
├── Integração Blockchain
├── Design UX/UI
└── Testes e QA
```

### 11.2 Responsabilidades

| **Função** | **Responsável** | **Principais Atividades** |
|------------|-----------------|---------------------------|
| **Gerente de Projeto** | Wellington | Coordenação geral, controle de qualidade |
| **Desenvolvedor Full-Stack** | Wellington | Implementação backend e frontend |
| **Especialista Blockchain** | Wellington | Integração com Solana, tokens SPL |
| **Designer UX/UI** | Wellington | Interfaces e experiência do usuário |
| **Tester** | Wellington | Testes funcionais e de integração |

---

## 12. PARTES INTERESSADAS

### 12.1 Stakeholders Principais

| **Stakeholder** | **Interesse** | **Influência** | **Estratégia de Engajamento** |
|-----------------|---------------|----------------|-------------------------------|
| **Professor Orientador** | Sucesso acadêmico | Alta | Reuniões quinzenais, relatórios |
| **Banca Avaliadora** | Qualidade técnica | Alta | Apresentações, documentação |
| **Comunidade Solana** | Adoção da tecnologia | Média | Participação em fóruns |
| **Usuários Beta** | Funcionalidade | Média | Testes de usabilidade |
| **Potenciais Investidores** | Viabilidade comercial | Baixa | Demonstrações, pitch deck |

---

## 13. CRITÉRIOS DE SUCESSO

### 13.1 Critérios Quantitativos
- [x] **Entrega no prazo**: 100% das funcionalidades entregues até 01/12/2025
- [x] **Performance**: Tempo de resposta < 2 segundos em 95% dos casos
- [x] **Disponibilidade**: 99% de uptime durante período de testes
- [x] **Cobertura de testes**: Mínimo 80% do código testado
- [x] **Usuários de teste**: Pelo menos 50 usuários testando a plataforma

### 13.2 Critérios Qualitativos
- [x] **Aprovação acadêmica**: Nota mínima 8.0 na avaliação final
- [x] **Usabilidade**: Usuários conseguem completar tarefas sem ajuda
- [x] **Segurança**: Zero vulnerabilidades críticas identificadas
- [x] **Documentação**: Documentação técnica completa e atualizada
- [x] **Feedback**: Avaliação positiva de usuários beta (>4.0/5.0)

---

## 14. COMUNICAÇÃO DO PROJETO

### 14.1 Plano de Comunicação

| **Atividade** | **Frequência** | **Participantes** | **Meio** |
|---------------|----------------|-------------------|----------|
| Status Report | Semanal | Orientador | Email/Documento |
| Demo Técnica | Quinzenal | Equipe técnica | Presencial/Virtual |
| Apresentação Marco | Por marco | Banca/Orientador | Presencial |
| Comunicação Urgente | Quando necessário | Orientador | WhatsApp/Email |

### 14.2 Ferramentas de Comunicação
- **Documentação**: GitHub Wiki
- **Código**: GitHub Repository
- **Comunicação**: WhatsApp, Email
- **Apresentações**: Google Slides
- **Demonstrações**: Loom, YouTube

---

## 15. APROVAÇÕES

### 15.1 Assinaturas de Aprovação

| **Nome** | **Função** | **Assinatura** | **Data** |
|----------|------------|----------------|----------|
| Wellington [Sobrenome] | Gerente do Projeto | _________________ | ___/___/2025 |
| [Nome do Orientador] | Professor Orientador | _________________ | ___/___/2025 |
| [Nome do Coordenador] | Coordenador do Curso | _________________ | ___/___/2025 |

---

## 16. ANEXOS

### 16.1 Documentos de Referência
- Arquitetura técnica detalhada dos MVPs existentes
- Análise de mercado de tokenização
- Benchmarking de soluções concorrentes
- Documentação da blockchain Solana

### 16.2 Artefatos Técnicos
- Diagramas de arquitetura do sistema
- Modelos de dados
- Protótipos de interface
- Plano de testes detalhado

---

**Documento elaborado em:** 29 de maio de 2025  
**Versão:** 1.0  
**Próxima revisão:** 15 de junho de 2025

---

*Este Termo de Abertura de Projeto serve como autorização formal para o início do projeto 6Chains e como referência para todas as atividades de desenvolvimento, estabelecendo o escopo, objetivos e restrições do projeto acadêmico.* 