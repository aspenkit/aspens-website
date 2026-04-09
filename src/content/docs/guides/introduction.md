---
title: Introduction
description: What aspens is and why it exists.
---

**aspens** is a CLI that keeps coding-agent context accurate as your codebase changes. It scans repos, generates project-specific instructions and skills for Claude Code and Codex CLI, and keeps them fresh.

## The problem

AI coding agents (Claude Code, Codex) work best when they understand your codebase: the architecture, conventions, key files, and domain-specific rules. Without this context, agents:

- Miss conventions and architectural boundaries
- Waste time rediscovering key files every session
- Make the same mistakes teams keep manually correcting

Most teams solve this by writing a `CLAUDE.md` or `AGENTS.md` file by hand. This works — until the code changes and the docs don't. Stale context is worse than no context: it actively misleads the agent.

## The solution

aspens automates the full lifecycle:

1. **Scan** the repo to understand its structure, tech stack, domains, and import graph
2. **Generate** targeted skills and instructions from what it finds
3. **Sync** those docs automatically as the codebase evolves
4. **Prove** the docs are fresh and covering the right things

## Key concepts

### Skills

Skills are concise markdown files (~35 lines) that give agents the context they need for a specific domain. Each skill contains:

- **Activation patterns** — file globs that trigger the skill (e.g., `**/billing*.ts`)
- **Key files** — the most important files for that domain
- **Key concepts** — patterns, conventions, and architecture notes
- **Critical rules** — gotchas, anti-patterns, and things agents must not do

### Targets

aspens supports multiple agent environments through output **targets**:

- `claude` — writes `CLAUDE.md` + `.claude/skills/` + hooks
- `codex` — writes `AGENTS.md` + `.agents/skills/` + directory scoped files
- `all` — generates both from one run

### Backends

The **backend** is which LLM CLI generates the content. Currently supported:

- `claude` — uses Claude Code CLI
- `codex` — uses Codex CLI

The target and backend are independent: you can generate Codex-format docs using the Claude backend.

## Next steps

- [Quick Start](/guides/quick-start/) — get aspens running in your repo
- [How It Works](/guides/how-it-works/) — understand the generation pipeline
- [Commands](/commands/scan/) — full command reference
