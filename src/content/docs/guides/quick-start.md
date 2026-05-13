---
title: Quick Start
description: Install aspens and generate your first set of skills in under 5 minutes.
---

## Prerequisites

- **Node.js** 18 or later
- A git repository you want to document
- A backend CLI for generation: [Claude Code](https://docs.anthropic.com/en/docs/claude-code) or [Codex CLI](https://github.com/openai/codex)

`aspens scan` works without a backend — it's deterministic and free. Commands that generate content (`doc init`, `doc sync`) need one installed.

## Install

There are three ways to run aspens:

### npx (no install)

```bash
npx aspens scan
```

Downloads and runs aspens on the fly. Nothing is saved to your project or system — great for trying it out. The first run fetches the package; subsequent runs use the npm cache.

### Local install (per-project)

```bash
npm install --save-dev aspens
```

Adds aspens to your project's `devDependencies`. This pins the version in `package.json` so everyone on the team uses the same one. Run it with `npx aspens` or add scripts to `package.json`:

```json
{
  "scripts": {
    "aspens:scan": "aspens scan",
    "aspens:init": "aspens doc init",
    "aspens:sync": "aspens doc sync"
  }
}
```

**Recommended for teams** — keeps the version consistent across contributors and CI.

### Global install

```bash
npm install -g aspens
```

Installs aspens to your system so you can run `aspens` directly from any directory without `npx`. Convenient for personal use, but the version isn't tied to any project — different team members may end up on different versions.

## 1. Generate docs and skills

From your project root:

```bash
npx aspens doc init
```

This scans the repo, runs discovery passes, generates skills, and writes everything to `.claude/skills/` and `CLAUDE.md`.

To generate for a different target:

```bash
npx aspens doc init --target codex   # Codex format
npx aspens doc init --target all     # both Claude and Codex
```

:::tip
Want to preview what aspens sees before generating? Run `npx aspens scan` for a quick, free overview of your tech stack, domains, and import graph — no LLM calls required.
:::

## 2. Keep docs in sync

Install the post-commit hook so skills update automatically:

```bash
npx aspens doc sync --install-hook
```

Or run sync manually after making changes:

```bash
npx aspens doc sync
```

## 3. Check doc health

See which skills are stale or missing coverage:

```bash
npx aspens doc impact
```

## What's next

- [How It Works](/guides/how-it-works/) — understand the generation pipeline
- [Skills](/guides/skills/) — learn how skills are structured and activated
- [Target Support](/guides/target-support/) — configure outputs for Claude, Codex, or both
- [Commands](/commands/scan/) — full command reference
