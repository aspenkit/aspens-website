---
title: Bundled Agents
description: Pre-built AI agents you can install into your Claude Code setup.
---

aspens ships with 11 agent templates that you can install into your `.claude/agents/` directory. Each agent is a focused persona with a specific job.

## Install agents

```bash
# Install all agents
npx aspens add agent all

# Install a specific agent
npx aspens add agent code-reviewer

# Browse available agents
npx aspens add agent --list
```

After installing, customize them with your project's context:

```bash
npx aspens customize agents
```

This reads your skills and `CLAUDE.md`, then tailors each agent with your actual file paths, conventions, and patterns.

## Available agents

### Planning

| Agent | Description |
|---|---|
| **plan** | Triage, analyze, and create phased development plans. Iterate with the user until the plan is approved. |
| **plan-reviewer** | Review development plans for completeness, feasibility, risks, and missed considerations before implementation. |
| **execute** | Execute a development plan — spawn parallel subagents per phase, test, and ship. |

### Code quality

| Agent | Description |
|---|---|
| **code-architecture-reviewer** | Review code for quality, architectural consistency, and integration issues. Use after implementing features, refactoring, or before merging PRs. |
| **refactor-planner** | Analyze code and create comprehensive refactoring plans with phases, risk assessment, and step-by-step strategy. |
| **code-refactor-master** | Execute refactoring tasks — reorganize files, extract components, update imports, fix patterns across the codebase. |

### Debugging

| Agent | Description |
|---|---|
| **auto-error-resolver** | Fix compilation errors, build failures, type errors, or test failures. Systematically identifies root causes and fixes them in order. |

### Documentation & content

| Agent | Description |
|---|---|
| **documentation-architect** | Create or update documentation — READMEs, API docs, architecture overviews, data flow diagrams, developer guides. Reads actual code first, never documents from assumptions. |
| **ghost-writer** | Write compelling, human-sounding content — landing pages, marketing copy, user docs, social media, email sequences, blog posts. |

### Design & research

| Agent | Description |
|---|---|
| **ux-ui-designer** | UX/UI design guidance — component specs with states, accessibility audits, user flow analysis, design system recommendations. |
| **web-research-specialist** | Research technical topics by searching the web — debug errors, compare solutions, find best practices from GitHub issues, Stack Overflow, and documentation. |

## Plan + execute workflow

The `plan` and `execute` agents work as a pair:

1. Use **plan** to analyze the task and create a phased development plan
2. Optionally use **plan-reviewer** to review the plan for risks and gaps
3. Use **execute** to implement the plan phase by phase

Plans are stored in `dev/` (auto-added to `.gitignore`).

## Customization

`aspens customize agents` reads your existing skills and instructions, then rewrites each agent to reference your specific:

- Tech stack and frameworks
- File paths and directory structure
- Conventions and patterns
- Domain-specific rules

This turns generic agents into project-aware agents that produce better results from the start.
