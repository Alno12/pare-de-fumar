# Equipe de Agentes de Design

Esta pasta contém definições de **agentes de IA especializados em design**. Cada
arquivo `.md` descreve um agente com um papel próprio, contexto do projeto e
instruções de trabalho. O formato segue o padrão de subagentes do Claude Code
(frontmatter YAML + prompt em Markdown), de modo que um **modelo orquestrador**
possa, no futuro, lê-los e delegar tarefas de melhoria nos arquivos deste
repositório.

## Como a orquestração funciona

O orquestrador (outro modelo) recebe um objetivo de design, escolhe o(s)
agente(s) certo(s) com base no campo `description` de cada um e delega. Um fluxo
típico:

1. **design-lead** recebe o objetivo, decompõe em tarefas e define quem faz o quê.
2. Os especialistas (**ui-designer**, **ux-designer**, etc.) executam suas partes.
3. **design-reviewer** valida o resultado antes da entrega.

O `design-lead` é o ponto de entrada natural quando a tarefa envolve mais de uma
especialidade. Para tarefas pontuais, o orquestrador pode chamar um especialista
diretamente.

## Roster da equipe

| Agente | Papel | Foco |
|---|---|---|
| `design-lead` | Direção de design | Decompõe o objetivo, delega e integra o trabalho da equipe |
| `ux-designer` | Experiência do usuário | Fluxos, jornada, arquitetura de informação, redução de fricção |
| `ui-designer` | Interface visual | Layout, hierarquia, componentes, Tailwind, estados e responsividade |
| `design-system-architect` | Design system | Tokens de cor/tipografia/espaçamento, tema claro/escuro, consistência |
| `brand-identity` | Identidade de marca | Paleta, tipografia, tom de voz, personalidade visual |
| `motion-designer` | Motion e micro-interações | Animações, transições, feedback (ex.: respiração guiada) |
| `accessibility-specialist` | Acessibilidade | WCAG AA, contraste, teclado, ARIA, leitores de tela |
| `design-reviewer` | QA de design | Crítica final, consistência com o design system, checklist de qualidade |

## Contexto do projeto

**Parar de Fumar** é um app pt-BR de cessação de tabagismo (React + Vite +
TypeScript + Tailwind CSS v4). Todos os agentes devem escrever a interface em
**português do Brasil**, respeitar o tema claro/escuro já existente e manter o
código no mesmo estilo dos componentes em `src/components/`.

## Convenções para novos agentes

Cada agente é um arquivo `.md` com este frontmatter:

```yaml
---
name: nome-em-kebab-case
description: Quando este agente deve ser acionado (usado pelo orquestrador para delegar).
tools: Read, Write, Edit, Grep, Glob   # opcional; omitir herda todas
model: sonnet                          # opcional: sonnet | opus | haiku | inherit
---
```

O corpo do arquivo é o prompt de sistema do agente.
