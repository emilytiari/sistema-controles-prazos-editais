# SCPE — Sistema de Controle de Prazos de Editais

**Demo:** https://scpedemo.netlify.app/

O **SCPE (Sistema de Controle de Prazos de Editais)** é um projeto acadêmico desenvolvido para apoiar o acompanhamento de processos de contratação docente por meio de editais, com foco em **prazos, etapas, responsáveis, comunicação e rastreabilidade**.

> **Status do projeto:** em andamento. O SCPE está atualmente em sua etapa final de desenvolvimento acadêmico, com foco na consolidação da solução e na criação de uma camada de Business Intelligence para análise dos dados do processo.

Esta versão foi preparada especificamente para portfólio e demonstração. Ela reproduz parte da experiência e da lógica do sistema original utilizando apenas dados fictícios e armazenamento temporário no navegador.

## Objetivo do projeto original

O projeto surgiu a partir da necessidade de compreender e melhorar o acompanhamento do fluxo de editais dentro do contexto acadêmico da FATEC Franco da Rocha.

Durante a análise inicial, foi identificado que parte do processo era acompanhada por meio de **planilhas, e-mails e comunicação verbal entre os setores envolvidos**. Embora essas ferramentas fossem úteis individualmente, a ausência de uma visão centralizada dificultava o acompanhamento completo do processo.

Entre os principais pontos observados estavam:

- dificuldade para identificar rapidamente em qual etapa cada edital se encontrava;
- necessidade de consultar diferentes fontes para acompanhar um único processo;
- risco de perda ou atraso de prazos;
- dificuldade de visualizar qual setor era responsável pela próxima atividade;
- retrabalho na comunicação entre áreas;
- pouca rastreabilidade sobre o histórico das etapas já realizadas.

A proposta do SCPE foi transformar esse fluxo em um ambiente único, permitindo acompanhar cada edital desde sua publicação até sua conclusão ou arquivamento.

## Pesquisa, entrevistas e análise do negócio

Uma parte importante do desenvolvimento do SCPE ocorreu **antes da implementação do sistema**.

O projeto foi construído a partir de pesquisas, levantamento de informações e entrevistas com pessoas envolvidas no processo de editais, principalmente integrantes das áreas de **coordenação e administração**.

Essas conversas foram fundamentais para entender como o processo realmente funcionava no dia a dia e evitar que a solução fosse baseada apenas em suposições da equipe de desenvolvimento.

A partir das entrevistas foi possível identificar:

- quais setores participavam do processo;
- quais atividades dependiam de outras etapas anteriores;
- como os prazos eram acompanhados;
- onde estavam os principais pontos de comunicação entre áreas;
- quais informações precisavam estar disponíveis durante o acompanhamento;
- quais situações poderiam interromper ou arquivar um edital;
- quais perfis de usuário precisavam de diferentes níveis de acesso.

O levantamento também contribuiu para a construção do **fluxo atual do processo (AS-IS)** e para a proposta de um fluxo melhor estruturado com apoio do sistema (**TO-BE**).

Esse trabalho de análise foi essencial para transformar necessidades de negócio em requisitos do sistema.

## Da análise do processo para os requisitos

Os resultados das pesquisas e entrevistas foram convertidos em funcionalidades e regras da aplicação.

| Necessidade identificada | Solução proposta no SCPE |
| --- | --- |
| Dificuldade de saber em qual etapa o processo estava | Visualização da etapa atual e do progresso do edital |
| Controle de prazo distribuído em diferentes ferramentas | Prazo associado a cada etapa do fluxo |
| Dificuldade de identificar responsáveis | Associação de etapas a setores responsáveis |
| Falta de visão centralizada | Painel único com editais em andamento, concluídos e arquivados |
| Necessidade de manter histórico do processo | Registro de avanço das etapas e status do edital |
| Diferentes responsabilidades entre setores | Perfis e níveis de acesso distintos |
| Necessidade de informar responsáveis sobre movimentações | Integrações de notificação previstas no sistema original |

Dessa forma, o desenvolvimento não ficou limitado à criação de telas. O projeto envolveu também **levantamento de requisitos, análise de processos, modelagem do negócio, definição de regras e validação da solução proposta**.

## Funcionalidades do sistema original

Entre as funcionalidades projetadas e implementadas ao longo do desenvolvimento estão:

- autenticação de usuários;
- diferentes níveis de acesso;
- cadastro de editais;
- acompanhamento de editais em andamento;
- visualização de editais concluídos e arquivados;
- configuração do fluxo de etapas;
- associação de etapas a setores responsáveis;
- controle de prazos;
- avanço de etapas;
- arquivamento de editais;
- gestão de usuários;
- cadastro de cursos e disciplinas;
- notificações relacionadas ao andamento do processo;
- indicadores e possibilidades de integração com ferramentas de BI.

## Etapa atual e próxima entrega: Business Intelligence

O SCPE **ainda está em desenvolvimento** e se encontra em sua etapa final no Projeto Integrador.

Nesta fase, a equipe está direcionando o trabalho para a construção de uma camada de **Business Intelligence**, com o objetivo de transformar os dados gerados pelo sistema em informações úteis para acompanhamento e tomada de decisão.

A proposta é desenvolver dashboards e indicadores que permitam visualizar, por exemplo:

- quantidade de editais criados por período;
- distribuição dos editais por status;
- volume de processos em andamento, concluídos e arquivados;
- tempo médio de permanência nas etapas;
- identificação das etapas que mais concentram atrasos;
- comparação de desempenho entre períodos;
- acompanhamento de prazos e possíveis gargalos do processo;
- evolução dos indicadores ao longo do tempo.

Para isso, a equipe pretende trabalhar com os dados estruturados no banco do SCPE e utilizar ferramentas de BI para criar **dashboards gerenciais, métricas e visualizações** que complementem a aplicação operacional.

Essa etapa representa a transição de um sistema focado apenas no controle do processo para uma solução que também possa oferecer **apoio analítico à gestão**.

## Tecnologias utilizadas no projeto original

Ao longo da evolução do projeto foram utilizadas ou estudadas diferentes tecnologias e integrações, entre elas:

- React / TypeScript;
- Figma Make;
- Supabase / PostgreSQL;
- autenticação e controle de acesso;
- Resend para envio de e-mails;
- integrações de comunicação via SMS / WhatsApp;
- Tawk.to para chatbot;
- Power BI e Looker Studio para análise de dados;
- Google Sheets em fases iniciais do protótipo.

O projeto também passou por uma fase anterior de prototipação utilizando WordPress, antes da migração para uma arquitetura baseada em React e Supabase.

### Uso de IA no desenvolvimento visual

A interface visual da versão em React teve forte apoio do **Figma Make e de seus recursos de geração por IA**. Por isso, a autoria do projeto não é apresentada como um trabalho de design de interface desenvolvido integralmente de forma manual pela equipe.

A participação dos integrantes esteve concentrada principalmente em **análise do negócio, definição de requisitos, idealização da experiência, banco de dados, integrações, APIs, implementação de funcionalidades, testes e documentação**.

## Equipe e responsabilidades

O SCPE foi desenvolvido de forma colaborativa. As responsabilidades abaixo representam as áreas em que cada integrante teve maior participação, embora várias atividades tenham sido realizadas em conjunto ao longo do projeto.

### Felipe Brito

Atuação concentrada principalmente na **estrutura técnica e de dados do sistema**:

- criação e evolução do banco de dados em Supabase / PostgreSQL;
- modelagem das tabelas de acordo com as regras e necessidades identificadas no negócio;
- definição e ajuste dos relacionamentos entre as entidades;
- gerenciamento de chaves primárias, chaves estrangeiras e relações entre tabelas;
- adequação da estrutura de dados conforme o fluxo dos editais evoluiu;
- integração entre aplicação e banco de dados;
- gerenciamento e configuração de APIs utilizadas pelo sistema;
- apoio na implementação e integração das funcionalidades do backend;
- participação na transformação dos requisitos levantados em regras da aplicação.

### Jaqueline da Silva Nascimento

Atuação principalmente na **idealização da experiência da aplicação e integrações**:

- participação na definição e idealização do frontend;
- apoio na organização dos fluxos e telas da aplicação;
- apoio ao desenvolvimento do backend;
- gerenciamento e implementação de integrações utilizadas pelo sistema;
- participação na evolução das funcionalidades e na conexão entre diferentes partes da solução.

### Emily Tiari Cordeiro Costa

Atuação tanto na **documentação quanto no desenvolvimento e validação do sistema**:

- elaboração e evolução da documentação do projeto;
- participação no desenvolvimento de funcionalidades;
- execução de testes e validação dos fluxos implementados;
- apoio na identificação de ajustes necessários durante a evolução do MVP.

### Otávio Henrique Calmo da Silva

Atuação tanto na **documentação quanto no desenvolvimento e testes**:

- participação na documentação técnica e acadêmica do projeto;
- desenvolvimento e apoio na implementação de funcionalidades;
- realização de testes e validação do comportamento da aplicação;
- contribuição para ajustes e evolução do sistema ao longo do projeto.

### Adriane de Souza Rodrigues

Atuação principalmente na **documentação e compreensão do negócio**:

- participação significativa na elaboração e organização da documentação;
- apoio no levantamento e consolidação das informações obtidas nas pesquisas e entrevistas;
- contribuição para o entendimento do processo de negócio;
- apoio na transformação das informações levantadas em documentação de requisitos e processos;
- participação na organização da visão geral da solução e de seu contexto acadêmico.

## Minha participação neste portfólio

Este repositório está publicado em meu perfil pessoal, mas o **SCPE é um projeto desenvolvido em equipe**.

Minha contribuição individual esteve especialmente relacionada à **arquitetura de dados e integrações**. Trabalhei na criação e manutenção do banco de dados, modelando entidades e relacionamentos para representar corretamente o fluxo real dos editais e ajustando essa estrutura conforme novos requisitos surgiam.

Também atuei no gerenciamento das APIs e integrações necessárias para conectar a aplicação aos serviços utilizados pelo projeto, além de participar da implementação das regras que faziam a interface conversar com a camada de dados.

A experiência com o SCPE foi especialmente importante por exigir que decisões técnicas fossem tomadas a partir do **entendimento do processo de negócio**, e não apenas da implementação de funcionalidades isoladas.

## Sobre esta versão de demonstração

Este repositório **não é o ambiente de produção do SCPE**.

Ele foi criado a partir de uma base limpa, sem histórico do projeto original e sem conexão com serviços reais.

Nesta versão:

- não existem chaves ou credenciais de produção;
- não há conexão com o Supabase real;
- não são enviados e-mails, SMS ou mensagens de WhatsApp;
- todos os dados apresentados são fictícios;
- os dados criados durante o uso ficam somente na memória da aplicação;
- ao recarregar, fechar a página ou sair da demonstração, o ambiente retorna ao estado inicial.

O objetivo é permitir que visitantes e recrutadores possam **experimentar a lógica principal do sistema sem risco de alterar dados reais**.

## O que pode ser testado na demo

A versão atual permite:

- entrar em um ambiente demonstrativo;
- visualizar editais em andamento, concluídos e arquivados;
- cadastrar novos editais;
- configurar etapas do fluxo;
- definir prazo e setor responsável para cada etapa;
- alterar a ordem das etapas;
- excluir etapas;
- acompanhar o progresso de um edital;
- avançar etapas;
- arquivar editais;
- observar a atualização dos indicadores da interface.

## Credenciais da demonstração

- E-mail: `demo@scpe.local`
- Senha: `demo123`

As credenciais aparecem preenchidas automaticamente na tela inicial.

## Tecnologias desta demo

- React
- TypeScript
- Vite
- CSS

## Executando localmente

```bash
npm install
npm run dev
```

Depois, abra o endereço exibido pelo Vite no navegador.

## Aprendizados do projeto

O SCPE permitiu trabalhar não apenas aspectos técnicos de desenvolvimento, mas também competências ligadas à análise de sistemas e gestão de tecnologia, como:

- levantamento de requisitos;
- entrevistas com usuários e stakeholders;
- análise de processos de negócio;
- identificação de problemas e oportunidades de melhoria;
- transformação de necessidades de negócio em funcionalidades;
- definição de perfis e permissões;
- modelagem de dados;
- relacionamentos e integridade entre entidades;
- integração entre sistemas e APIs;
- trabalho em equipe;
- documentação de projeto;
- testes e validação;
- desenvolvimento incremental de um MVP;
- definição de indicadores e preparação de dados para BI.

## Contexto acadêmico

Projeto desenvolvido no curso de **Gestão da Tecnologia da Informação da FATEC Franco da Rocha**, como parte de um Projeto Integrador realizado em equipe.

A solução foi desenvolvida de forma colaborativa, envolvendo atividades de desenvolvimento, documentação, análise de negócio, banco de dados, integrações, testes, gestão do projeto e, em sua etapa final, **Business Intelligence e criação de dashboards**.

---

**Este repositório apresenta uma versão sanitizada e demonstrativa de um projeto acadêmico ainda em andamento, publicada para fins de portfólio.**
