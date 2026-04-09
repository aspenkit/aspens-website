---
title: Quick Start
description: Get aspens running in your repo in under 5 minutes.
---

## Install

aspens runs via `npx` — no global install needed. Requires [Node.js 20+](https://nodejs.org) and at least one backend CLI.

## One-command setup

```bash
npx aspens doc init --recommended
```

`--recommended` is the fastest path:

- Reuses existing target config when present
- Defaults to improving existing docs instead of prompting
- Auto-picks the generation mode based on repo size
- Installs hooks and save-tokens setup

## Verify

```bash
npx aspens doc impact
```

This shows whether your generated context covers the repo: domain coverage, hub file surfacing, freshness, and hook health.

## Keep it fresh

```bash
npx aspens doc sync --install-hook
```

This installs a git post-commit hook that automatically updates skills when relevant files change. The hook has a 5-minute cooldown to avoid excessive runs.

## Full workflow

```bash
npx aspens scan .                    # Map the repo (optional, just to see what aspens finds)
npx aspens doc init --recommended .  # Generate the recommended context setup
npx aspens doc impact .              # Verify freshness and coverage
npx aspens doc sync --install-hook   # Keep generated context synced on every commit
```

## Add agents and commands

```bash
npx aspens add agent all             # Install all 11 bundled AI agents
npx aspens customize agents          # Tailor agents with your project's context
npx aspens add command dev-docs      # Add slash commands
```

## What gets created

For Claude target:

```
.claude/
  skills/
    base/skill.md          # Repo-wide context: stack, architecture, conventions
    auth/skill.md           # Domain skill: auth patterns, key files, rules
    billing/skill.md        # Domain skill: billing integration details
    ...
  hooks/                    # Activation hooks, session tracking
  settings.json             # Skill rules and Claude settings
CLAUDE.md                   # Top-level repo instructions
```

For Codex target:

```
.agents/
  skills/
    base/SKILL.md
    auth/SKILL.md
    billing/SKILL.md
    ...
AGENTS.md                   # Top-level repo instructions
```
