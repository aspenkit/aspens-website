---
title: aspens doc init
description: Generate agent context from the repo itself.
---

Generate agent context from the repo itself. `doc init` scans the codebase, discovers the architecture and feature domains, then writes instructions and skills for Claude, Codex, or both.

## Usage

```bash
npx aspens doc init [path]
```

## Recommended setup

For the lowest-friction setup:

```bash
npx aspens doc init --recommended
```

`--recommended` is the fastest path:

- Reuses existing target config when present
- Defaults to improving existing docs instead of prompting
- Auto-picks the generation mode based on repo size
- Installs hooks and save-tokens for full recommended setup

## How it works

1. **Scan + Import Graph** — builds dependency map, finds hub files
2. **Parallel Discovery** — 2 backend-guided discovery passes explore simultaneously (domains + architecture)
3. **User picks domains** — from the discovered feature domains
4. **Parallel Generation** — generates 3 domain skills at a time

## Example output

```
$ aspens doc init

  ◇ Scanned my-app (fullstack)

    Languages: typescript, javascript
    Frameworks: nextjs, react, tailwind, prisma
    Source modules: components, lib, hooks, services, types
    Import graph: 247 files, 892 edges
    Size: 247 source files (medium)

    Running 2 discovery agents in parallel...

  ◇ Discovery complete
    Architecture: Layered frontend (Next.js 16 App Router)
    Discovered 8 feature domains:
      auth — User authentication, session management
      courses — AI-powered course generation
      billing — Stripe subscriptions, usage limits
      ...

  ◆ 8 domains detected. Generate skills:
  ● One domain at a time
  ○ Pick specific domains
  ○ Base skill only

  ◇ Base skill generated
  ◇ auth, courses, billing
  ◇ profile, settings, onboarding
  ◇ layout, landing

  + .claude/skills/base/skill.md
  + .claude/skills/auth/skill.md
  + .claude/skills/courses/skill.md
  ...

  11 call(s) | ~23,640 prompt | 35,180 output | 161 tool calls | 4m 32s

  10 created
```

## Options

| Option | Description |
|---|---|
| `--recommended` | Use the recommended target, strategy, and generation mode |
| `--target <target>` | Output target: `claude`, `codex`, or `all` |
| `--backend <backend>` | Generation backend: `claude` or `codex` |
| `--dry-run` | Preview without writing files |
| `--force` | Overwrite existing skills |
| `--mode <mode>` | `all`, `chunked`, or `base-only` (skips interactive prompt) |
| `--strategy <strategy>` | `improve`, `rewrite`, or `skip` for existing docs |
| `--domains <list>` | Additional domains to include (comma-separated) |
| `--no-graph` | Skip import graph analysis |
| `--no-hooks` | Skip hook installation |
| `--hooks-only` | Install/update hooks without regenerating skills |
| `--model <model>` | Model for the selected backend |
| `--timeout <seconds>` | Backend timeout (default: 300) |
| `--verbose` | Show backend reads/activity in real time |

## Strategies for existing docs

When skills or instructions already exist:

- **improve** — update existing docs with new information (default with `--recommended`)
- **rewrite** — regenerate from scratch
- **skip** — keep existing docs, only generate missing ones
