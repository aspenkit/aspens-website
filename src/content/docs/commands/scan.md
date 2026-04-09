---
title: aspens scan
description: Map the repo before generating anything.
---

Map the repo before generating anything. `scan` is **deterministic**: it detects tech stack, domains, hub files, coupling, and hotspots without calling an LLM.

## Usage

```bash
npx aspens scan [path]
```

## Example output

```
$ aspens scan

  my-app (fullstack)
  /Users/you/my-app

  Languages: typescript, javascript
  Frameworks: nextjs, react, tailwind, prisma
  Entry points: src/index.ts

  Structure
    src/ ← source root
    tests/

  Key directories
    components → src/components/
    services → src/services/
    database → prisma/

  Import Graph (247 files, 892 edges)
    Hub files:
      src/lib/db.ts              ← 31 dependents, 2 exports
      src/auth/middleware.ts      ← 18 dependents, 3 exports
      src/lib/api-client.ts      ← 15 dependents, 4 exports

  Domains (by imports)
    components (src/components/) — 89 files
      → depends on: lib, hooks, types
    lib (src/lib/) — 12 files
      ← depended on by: components, services, hooks

  Coupling
    components → lib    45 imports
    hooks → lib         23 imports

  Hotspots (high churn, last 6 months)
    src/auth/session.ts — 19 changes, 210 lines

  Claude Code
    .claude/ no  CLAUDE.md no
```

## Options

| Option | Description |
|---|---|
| `--json` | Output as JSON |
| `--domains <list>` | Additional domains to include (comma-separated) |
| `--no-graph` | Skip import graph analysis |
| `--verbose` | Show diagnostic output |

## What it detects

- **Languages** — JavaScript, TypeScript, Python, and more
- **Frameworks** — Next.js, React, Vue, Tailwind, Prisma, Django, FastAPI, etc.
- **Structure** — source roots, entry points, key directories
- **Import graph** — hub files, domain clusters, coupling, hotspots
- **Health** — missing `.gitignore`, exposed `.env`, unignored `node_modules`
- **Existing context** — whether `.claude/` or `AGENTS.md` already exist
