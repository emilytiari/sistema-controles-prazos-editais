# SCPE — Sistema de Controle de Prazos de Editais

O **SCPE (Sistema de Controle de Prazos de Editais)** é um projeto acadêmico desenvolvido para apoiar o acompanhamento de processos de contratação docente por meio de editais, com foco em **prazos, etapas, responsáveis, comunicação e rastreabilidade**.

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

Alguns exemplos dessa relação são:

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
- integração entre sistemas;
- trabalho em equipe;
- documentação de projeto;
- desenvolvimento incremental de um MVP.

## Contexto acadêmico

Projeto desenvolvido no curso de **Gestão da Tecnologia da Informação da FATEC Franco da Rocha**, como parte de um Projeto Integrador realizado em equipe.

A solução foi desenvolvida de forma colaborativa, envolvendo atividades de desenvolvimento, documentação, análise de negócio e gestão do projeto.

---

**Este repositório apresenta uma versão sanitizada e demonstrativa do projeto para fins de portfólio.**
