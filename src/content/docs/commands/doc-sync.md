---
title: aspens doc sync
description: Keep generated context from drifting.
---

Keep generated context from drifting. `doc sync` reads recent git changes, maps them to affected skills and instructions, and updates only what changed.

## Usage

```bash
npx aspens doc sync [path]
```

## Example output

```
$ aspens doc sync

  ◆ aspens doc sync

  ◇ 4 files changed

    src/services/billing/stripe.ts
    src/services/billing/usage.ts
    src/components/billing/PricingPage.tsx
    package.json

  ℹ Skills that may need updates: billing, base

  ◇ Analyzing changes and updating skills...
  ◇ 1 file(s) to update

  ~ .claude/skills/billing/skill.md

  1 file(s) updated
```

## Auto-sync with git hook

Install a post-commit hook to sync automatically:

```bash
npx aspens doc sync --install-hook
```

The hook:

- Runs after every commit
- Has a 5-minute cooldown to avoid excessive runs
- Skips commits that only change aspens-generated files
- Rotates log files to prevent bloat
- Works with all configured targets

Remove it with:

```bash
npx aspens doc sync --remove-hook
```

## Refresh mode

Review all skills against the current codebase state, without needing a git diff:

```bash
npx aspens doc sync --refresh
```

Useful after major refactors or when skills have drifted significantly.

## Options

| Option | Description |
|---|---|
| `--commits <n>` | Number of commits to analyze (default: 1) |
| `--refresh` | Review all skills against current codebase (no git diff needed) |
| `--no-graph` | Skip import graph analysis |
| `--install-hook` | Install git post-commit auto-sync hook |
| `--remove-hook` | Remove the git post-commit hook |
| `--dry-run` | Preview without writing files |
| `--timeout <seconds>` | Backend timeout (default: 300) |
| `--model <model>` | Model for the selected backend |
| `--verbose` | Show backend reads/activity in real time |

## Multi-target sync

If your repo is configured for multiple targets, `doc sync` updates all configured outputs from one run:

```bash
# Syncs both Claude and Codex docs
npx aspens doc sync
```
