# TERMO DE ABERTURA DE PROJETO (TAP)

## 6CHAINS - MARKETPLACE DE TOKENIZAÇÃO DE ATIVOS DIGITAIS

---

### INFORMAÇÕES GERAIS DO PROJETO

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

### 1.3 Validação Técnica Prévia
Os MVPs desenvolvidos anteriormente demonstraram:
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
- Implementar sistema de criação e gerenciamento de tokens SPL na Solana
- Desenvolver interfaces responsivas para vendedores e compradores
- Criar sistema de carteiras integrado com múltiplos provedores (Phantom, Solflare)
- Estabelecer arquitetura de microserviços escalável
- Implementar sistema de autenticação e autorização robusto

#### 3.2.2 Objetivos de Negócio
- Atingir 100+ vendedores cadastrados nos primeiros 3 meses
- Processar 1000+ transações nos primeiros 6 meses
- Garantir 99.9% de uptime da plataforma
- Obter satisfação do usuário ≥ 85% nas pesquisas

#### 3.2.3 Objetivos Acadêmicos
- Demonstrar domínio técnico em blockchain e desenvolvimento web
- Aplicar conceitos de gestão de projetos na prática
- Produzir documentação técnica de qualidade profissional
- Apresentar solução inovadora para banca avaliadora

---

## 4. ESCOPO DO PROJETO

### 4.1 Incluído no Escopo

#### 4.1.1 Funcionalidades Core
- **Sistema de Autenticação**
  - Login/registro de usuários
  - Verificação de identidade básica
  - Gerenciamento de perfis de vendedor e comprador

- **Módulo Vendedor (Seller)**
  - Dashboard com métricas e análises de vendas
  - Criação e edição de ativos digitais
  - Tokenização automática na blockchain Solana
  - Gerenciamento de listagens ativas
  - Histórico de vendas e comissões

- **Módulo Comprador (Buyer)**
  - Marketplace com busca e filtros avançados
  - Detalhes dos ativos e informações dos criadores
  - Sistema de compra integrado com carteira Solana
  - Portfolio de tokens adquiridos
  - Histórico completo de transações

- **Infraestrutura Blockchain**
  - Integração completa com blockchain Solana
  - Criação automática de tokens SPL
  - Gerenciamento seguro de transações
  - Monitoramento de eventos blockchain em tempo real

#### 4.1.2 Funcionalidades Adicionais
- Sistema de notificações em tempo real
- API REST completa para integrações futuras
- Dashboard administrativo para monitoramento
- Sistema básico de suporte ao cliente
- Documentação técnica completa

### 4.2 Não Incluído no Escopo
- Integração com outras blockchains além da Solana
- Sistema de staking ou yield farming
- Marketplace de NFTs (foco exclusivo em tokens SPL)
- Funcionalidades de DeFi (empréstimos, pools de liquidez)
- Aplicativo mobile nativo
- Sistema de KYC/AML completo (apenas básico)

---

## 5. REQUISITOS DE ALTO NÍVEL

### 5.1 Requisitos Funcionais

| **ID** | **Requisito** | **Prioridade** | **Descrição** |
|--------|---------------|----------------|---------------|
| RF01 | Sistema de registro e autenticação | Alta | Login seguro para vendedores e compradores |
| RF02 | Criação e gerenciamento de tokens SPL | Alta | Interface para tokenização de ativos |
| RF03 | Marketplace com listagem de ativos | Alta | Vitrine de ativos disponíveis |
| RF04 | Sistema de compra e venda | Alta | Processamento de transações |
| RF05 | Integração com carteiras Solana | Alta | Phantom, Solflare, outras |
| RF06 | Dashboard com métricas | Média | Análises para vendedores |
| RF07 | Sistema de notificações | Média | Alertas de eventos importantes |
| RF08 | API para integrações externas | Baixa | Endpoints para terceiros |

### 5.2 Requisitos Não-Funcionais

| **Categoria** | **Requisito** | **Meta** | **Medição** |
|---------------|---------------|----------|-------------|
| **Performance** | Tempo de resposta das páginas | < 2 segundos | Google PageSpeed |
| **Escalabilidade** | Usuários simultâneos | 1.000+ | Testes de carga |
| **Disponibilidade** | Uptime da plataforma | 99.9% | Monitoramento contínuo |
| **Segurança** | Proteção de dados | Criptografia AES-256 | Auditoria de segurança |
| **Usabilidade** | Taxa de conclusão de tarefas | > 90% | Testes com usuários |
| **Compatibilidade** | Navegadores suportados | Chrome, Firefox, Safari | Testes cross-browser |

---

## 6. PREMISSAS DO PROJETO

### 6.1 Premissas Técnicas
- A blockchain Solana manterá estabilidade e performance atuais
- Ferramentas de desenvolvimento (React, Node.js) permanecerão atualizadas
- Integração com carteiras Solana funcionará conforme especificado
- Serviços de cloud (AWS/Azure) estarão disponíveis
- APIs da Solana manterão compatibilidade

### 6.2 Premissas de Negócio
- Interesse contínuo do mercado por tokenização
- Ambiente regulatório brasileiro permitirá operação
- Usuários terão conhecimento básico de carteiras digitais
- Haverá recursos para marketing e aquisição de usuários
- Comunidade Solana fornecerá suporte técnico

### 6.3 Premissas Acadêmicas
- Orientador fornecerá feedback regular
- Cronograma acadêmico permitirá dedicação adequada
- Recursos universitários estarão disponíveis
- Banca avaliadora terá conhecimento técnico adequado

---

## 7. RESTRIÇÕES DO PROJETO

### 7.1 Restrições de Tempo
- **Prazo fixo**: 6 meses para conclusão completa
- **Calendário acadêmico**: Dependência de datas universitárias
- **Marcos não negociáveis**: Apresentações obrigatórias
- **Tempo limitado**: Projeto paralelo aos estudos

### 7.2 Restrições de Recursos
- **Orçamento limitado**: Máximo R$ 5.000 para infraestrutura
- **Equipe reduzida**: Desenvolvimento individual
- **Ferramentas**: Preferência por soluções gratuitas/low-cost
- **Hardware**: Limitações de equipamento pessoal

### 7.3 Restrições Técnicas
- **Blockchain única**: Dependência exclusiva da Solana
- **Performance**: Limitações de ferramentas gratuitas
- **Escalabilidade**: Ambiente acadêmico, não comercial
- **Integrações**: APIs públicas disponíveis

### 7.4 Restrições Regulatórias
- **Conformidade**: Regulamentações brasileiras aplicáveis
- **Disclaimers**: Ambiente acadêmico, não comercial
- **Privacidade**: LGPD básica implementada
- **Responsabilidade**: Limitada ao contexto educacional

---

## 8. RISCOS IDENTIFICADOS

### 8.1 Matriz de Riscos

| **Risco** | **Impacto** | **Probabilidade** | **Severidade** | **Estratégia de Mitigação** |
|-----------|-------------|------------------|----------------|---------------------------|
| **Instabilidade da Solana** | Alto | Baixa | Alta | Modo simulação como fallback |
| **Mudanças regulatórias** | Médio | Média | Média | Monitoramento, disclaimers |
| **Vulnerabilidades de segurança** | Alto | Média | Alta | Auditorias, testes de penetração |
| **Atrasos no desenvolvimento** | Médio | Alta | Média | Metodologia ágil, buffer de tempo |
| **Baixa adoção de usuários** | Baixo | Média | Baixa | UX intuitivo, marketing direcionado |
| **Falhas de infraestrutura** | Médio | Baixa | Média | Monitoramento, backups automáticos |
| **Problemas com carteiras** | Médio | Média | Média | Suporte múltiplas carteiras |
| **Sobrecarga acadêmica** | Alto | Média | Alta | Planejamento, gestão de tempo |

### 8.2 Planos de Contingência
- **Solana indisponível**: Sistema mock funcional para demonstrações
- **Problemas de segurança**: Equipe de resposta e correção rápida
- **Atrasos críticos**: Priorização de funcionalidades core
- **Infraestrutura falha**: Migração para serviços alternativos
- **Problemas acadêmicos**: Comunicação proativa com orientador

---

## 9. CRONOGRAMA MACRO

### 9.1 Fases do Projeto

| **Fase** | **Duração** | **Período** | **Descrição** | **Entregas Principais** |
|----------|-------------|-------------|---------------|-------------------------|
| **Fase 1: Iniciação** | 4 semanas | Jun 2025 | Planejamento detalhado e setup | TAP aprovado, arquitetura definida, ambiente configurado |
| **Fase 2: MVP Básico** | 6 semanas | Jul 2025 | Implementação funcionalidades core | Autenticação, criação de tokens, marketplace básico |
| **Fase 3: Integração Solana** | 6 semanas | Ago-Set 2025 | Integração blockchain completa | Carteiras conectadas, transações reais |
| **Fase 4: Refinamento** | 4 semanas | Set-Out 2025 | UX/UI e funcionalidades avançadas | Dashboard completo, notificações, otimizações |
| **Fase 5: Testes e QA** | 3 semanas | Out-Nov 2025 | Testes abrangentes e correções | Bateria de testes, documentação atualizada |
| **Fase 6: Finalização** | 1 semana | Nov 2025 | Deploy final e apresentação | Ambiente produção, apresentação final |

### 9.2 Marcos Críticos

| **Marco** | **Data Limite** | **Entrega** | **Critério de Aceite** |
|-----------|-----------------|-------------|------------------------|
| **M1** | 30/06/2025 | Aprovação da arquitetura | TAP aprovado, ambiente configurado |
| **M2** | 31/07/2025 | MVP básico funcional | Autenticação e tokens funcionando |
| **M3** | 15/09/2025 | Integração Solana completa | Transações reais executadas |
| **M4** | 15/10/2025 | Plataforma com todas funcionalidades | Todas features implementadas |
| **M5** | 15/11/2025 | Testes finalizados | Cobertura de testes > 80% |
| **M6** | 01/12/2025 | Apresentação final | Deploy em produção, defesa aprovada |

---

## 10. ORÇAMENTO ESTIMADO

### 10.1 Detalhamento de Custos

| **Categoria** | **Item** | **Custo Mensal** | **Meses** | **Total** |
|---------------|----------|------------------|-----------|-----------|
| **Infraestrutura Cloud** | AWS/Azure básico | R$ 200 | 6 | R$ 1.200 |
| **Domínio e SSL** | .com + certificado | R$ 50 | 6 | R$ 300 |
| **Ferramentas Premium** | GitHub Pro, Figma | R$ 100 | 6 | R$ 600 |
| **Segurança** | Auditoria de código | - | - | R$ 1.500 |
| **Marketing** | Landing page, materiais | - | - | R$ 500 |
| **Backup/Storage** | Backups seguros | R$ 50 | 6 | R$ 300 |
| **Contingência** | 15% do subtotal | - | - | R$ 615 |
| **TOTAL GERAL** | | | | **R$ 5.015** |

### 10.2 Fontes de Financiamento
- **Recursos próprios**: R$ 3.000 (60%)
- **Apoio institucional**: R$ 1.500 (30%)
- **Créditos gratuitos cloud**: R$ 515 (10%)

---

## 11. EQUIPE E RESPONSABILIDADES

### 11.1 Estrutura da Equipe

```
Gerente de Projeto
    Wellington [Sobrenome]
    ├── Desenvolvedor Backend
    ├── Desenvolvedor Frontend  
    ├── Especialista Blockchain
    ├── Designer UX/UI
    └── Analista de Testes
```

### 11.2 Matriz de Responsabilidades

| **Função** | **Responsável** | **Atividades Principais** | **Dedicação** |
|------------|-----------------|---------------------------|---------------|
| **Gerente de Projeto** | Wellington | Coordenação geral, controle de qualidade, comunicação | 20h/semana |
| **Dev Backend** | Wellington | APIs, integração blockchain, banco de dados | 15h/semana |
| **Dev Frontend** | Wellington | Interfaces React, UX/UI, responsividade | 15h/semana |
| **Especialista Blockchain** | Wellington | Solana, tokens SPL, carteiras, transações | 10h/semana |
| **Designer UX/UI** | Wellington | Protótipos, design system, usabilidade | 8h/semana |
| **Analista de Testes** | Wellington | Testes funcionais, automatizados, segurança | 7h/semana |

### 11.3 Competências Necessárias
- **Técnicas**: JavaScript, React, Node.js, Solana, Web3, SQL
- **Gestão**: Scrum, Kanban, controle de riscos, comunicação
- **Design**: Figma, UX/UI, design thinking, prototipação
- **Blockchain**: Solana, SPL tokens, carteiras, DApps

---

## 12. PARTES INTERESSADAS (STAKEHOLDERS)

### 12.1 Matriz de Stakeholders

| **Stakeholder** | **Interesse** | **Influência** | **Poder** | **Estratégia de Engajamento** |
|-----------------|---------------|----------------|-----------|-------------------------------|
| **Professor Orientador** | Sucesso acadêmico do aluno | Alta | Alto | Reuniões quinzenais, relatórios detalhados |
| **Banca Avaliadora** | Qualidade técnica e acadêmica | Alta | Alto | Apresentações intermediárias, documentação |
| **Coordenador do Curso** | Reputação do programa | Média | Médio | Updates de progresso, resultados |
| **Comunidade Solana** | Adoção da tecnologia | Média | Baixo | Participação em fóruns, feedback |
| **Usuários Beta** | Funcionalidade da plataforma | Alta | Baixo | Testes de usabilidade, feedback |
| **Potenciais Investidores** | Viabilidade comercial | Baixa | Médio | Demonstrações, business case |
| **Pares Acadêmicos** | Aprendizado conjunto | Baixa | Baixo | Compartilhamento de conhecimento |

### 12.2 Plano de Comunicação com Stakeholders

| **Stakeholder** | **Frequência** | **Formato** | **Conteúdo** |
|-----------------|----------------|-------------|--------------|
| **Orientador** | Quinzenal | Reunião/Email | Status, riscos, decisões |
| **Banca** | Por marco | Apresentação | Progresso, demos, resultados |
| **Usuários Beta** | Mensal | Survey/Entrevista | Feedback, sugestões |
| **Comunidade** | Esporádica | Fóruns/GitHub | Dúvidas técnicas, contribuições |

---

## 13. CRITÉRIOS DE SUCESSO

### 13.1 Critérios Quantitativos

| **Métrica** | **Meta** | **Método de Medição** | **Responsável** |
|-------------|----------|-----------------------|-----------------|
| **Entrega no Prazo** | 100% funcionalidades até 01/12/2025 | Checklist de features | Wellington |
| **Performance** | < 2s tempo de resposta em 95% casos | Google PageSpeed, GTmetrix | Wellington |
| **Disponibilidade** | 99% uptime durante testes | Uptime Robot, AWS CloudWatch | Wellington |
| **Cobertura de Testes** | Mínimo 80% do código testado | Jest, Cypress coverage reports | Wellington |
| **Usuários Beta** | 50+ usuários testando plataforma | Google Analytics, banco de dados | Wellington |
| **Transações** | 100+ transações de teste executadas | Logs da aplicação, Solana explorer | Wellington |

### 13.2 Critérios Qualitativos

| **Aspecto** | **Meta** | **Método de Avaliação** | **Peso** |
|-------------|----------|------------------------|----------|
| **Aprovação Acadêmica** | Nota mínima 8.0/10.0 | Avaliação da banca | 40% |
| **Usabilidade** | Usuários completam tarefas sem ajuda | Testes de usabilidade | 20% |
| **Segurança** | Zero vulnerabilidades críticas | Auditoria de segurança | 20% |
| **Documentação** | Completa e atualizada | Review por pares | 10% |
| **Feedback Usuários** | > 4.0/5.0 satisfação | Surveys, entrevistas | 10% |

### 13.3 Indicadores de Sucesso Técnico
- **Funcionalidades Implementadas**: 100% das features core
- **Integração Blockchain**: Transações reais funcionando
- **Interface Responsiva**: Compatível com desktop e mobile
- **Documentação API**: Endpoints documentados e testados
- **Deploy Automatizado**: CI/CD pipeline funcional

---

## 14. COMUNICAÇÃO E GOVERNANÇA

### 14.1 Estrutura de Comunicação

| **Atividade** | **Frequência** | **Participantes** | **Duração** | **Meio** |
|---------------|----------------|-------------------|-------------|----------|
| **Status Report** | Semanal | Orientador | 30min | Email/Doc |
| **Demo Técnica** | Quinzenal | Orientador, pares | 1h | Virtual/Presencial |
| **Review de Marco** | Por marco | Banca, orientador | 2h | Presencial |
| **Daily Standup** | Diário | Wellington (auto) | 15min | Pessoal |
| **Sprint Review** | Semanal | Wellington (auto) | 1h | Pessoal |

### 14.2 Ferramentas de Comunicação e Gestão
- **Gestão de Projeto**: GitHub Projects, Trello
- **Comunicação**: WhatsApp, Email, Slack
- **Documentação**: GitHub Wiki, Notion
- **Código**: GitHub Repository
- **Apresentações**: Google Slides, Figma
- **Demonstrações**: Loom, YouTube, Deploy links

### 14.3 Relatórios e Documentação
- **Relatório Semanal**: Status, progresso, riscos, próximos passos
- **Documentação Técnica**: Arquitetura, APIs, deployment
- **Manual do Usuário**: Guias para vendedores e compradores
- **Apresentação Final**: Slides para defesa do projeto

---

## 15. CONTROLE DE QUALIDADE

### 15.1 Padrões de Qualidade
- **Código**: ESLint, Prettier, SonarQube
- **Testes**: Cobertura mínima 80%, testes unitários e integração
- **Documentação**: Atualizada a cada sprint
- **Segurança**: Auditoria antes do deploy final
- **Performance**: Otimização contínua, monitoramento

### 15.2 Processos de Validação
- **Code Review**: Auto-review antes de commits
- **Testes Automatizados**: Pipeline CI/CD
- **Testes de Usabilidade**: Sessões com usuários beta
- **Validação de Negócio**: Feedback do orientador
- **Testes de Segurança**: Ferramentas automatizadas + manual

---

## 16. PLANO DE IMPLANTAÇÃO

### 16.1 Estratégia de Deploy
- **Ambiente Development**: GitHub Pages/Netlify
- **Ambiente Staging**: Heroku/Vercel
- **Ambiente Production**: AWS/Azure
- **Banco de Dados**: PostgreSQL (cloud)
- **CDN**: Cloudflare para assets estáticos

### 16.2 Plano de Lançamento
1. **Soft Launch**: Testes internos (Semana 22)
2. **Beta Launch**: Usuários selecionados (Semana 24)
3. **Final Launch**: Apresentação banca (Semana 26)

---

## 17. SUSTENTABILIDADE E EVOLUÇÃO

### 17.1 Manutenção Pós-Projeto
- **Código Open Source**: Disponível no GitHub
- **Documentação**: Mantida atualizada
- **Infraestrutura**: Plano de baixo custo pós-graduação
- **Comunidade**: Engajamento com desenvolvedores Solana

### 17.2 Roadmap Futuro (Pós-Acadêmico)
- **Funcionalidades Avançadas**: KYC/AML completo, multi-blockchain
- **Monetização**: Taxas de transação, planos premium
- **Escalabilidade**: Migração para arquitetura enterprise
- **Parcerias**: Integração com exchanges, carteiras

---

## 18. APROVAÇÕES E ASSINATURAS

### 18.1 Aprovações Necessárias

| **Nome** | **Função** | **Responsabilidade** | **Assinatura** | **Data** |
|----------|------------|---------------------|----------------|----------|
| **Wellington [Sobrenome]** | Gerente do Projeto | Execução e entrega | _________________ | ___/___/2025 |
| **[Nome do Orientador]** | Professor Orientador | Supervisão acadêmica | _________________ | ___/___/2025 |
| **[Nome do Coordenador]** | Coordenador do Curso | Aprovação institucional | _________________ | ___/___/2025 |

### 18.2 Critérios de Aprovação
- **Viabilidade Técnica**: Confirmada através dos MVPs existentes
- **Relevância Acadêmica**: Alinhado com objetivos do curso
- **Exequibilidade**: Cronograma e recursos realistas
- **Inovação**: Contribuição significativa para o conhecimento

---

## 19. ANEXOS E REFERÊNCIAS

### 19.1 Documentos de Referência
- MVP-Tokenization: Primeira versão com blockchain simulado
- MVP-TokenizationV2: Versão com integração Solana real
- Clone-Blockchain-Igor: Implementação blockchain em Clojure
- Design Inspiration: Componentes UI/UX modernos

### 19.2 Estudos de Mercado
- Relatório Global de Tokenização 2024-2030
- Análise Técnica da Blockchain Solana
- Benchmarking de Marketplaces de Tokens
- Regulamentações Brasileiras para Criptoativos

### 19.3 Arquitetura Técnica
- Diagramas de componentes e sequência
- Modelo de dados e relacionamentos
- Arquitetura de segurança e criptografia
- Plano de testes e validação

### 19.4 Protótipos e Mockups
- Wireframes das interfaces principais
- Fluxos de usuário (user journeys)
- Design system e componentes
- Protótipos interativos

---

## 20. CONTROLE DE VERSÕES

| **Versão** | **Data** | **Autor** | **Descrição das Alterações** |
|------------|----------|-----------|-------------------------------|
| **1.0** | 29/05/2025 | Wellington | Versão inicial do TAP |
| **1.1** | __/__/2025 | Wellington | Revisões pós-feedback orientador |
| **1.2** | __/__/2025 | Wellington | Ajustes pós-aprovação banca |

---

**Data de Elaboração:** 29 de maio de 2025  
**Versão Atual:** 1.0  
**Próxima Revisão:** 15 de junho de 2025  
**Status:** Aguardando Aprovação

---

*Este Termo de Abertura de Projeto (TAP) serve como autorização formal para o início do projeto 6Chains - Marketplace de Tokenização de Ativos Digitais e estabelece as bases para todas as atividades de desenvolvimento, definindo escopo, objetivos, restrições e critérios de sucesso do projeto acadêmico.*

*O documento foi elaborado seguindo as melhores práticas de gestão de projetos e está alinhado com os objetivos acadêmicos do curso, representando um compromisso formal entre o estudante, orientador e instituição para a execução bem-sucedida do projeto.* 