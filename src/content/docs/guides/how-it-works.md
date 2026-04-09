---
title: How It Works
description: The aspens generation pipeline — from scan to skill.
---

## Pipeline overview

```
Your Repo ──▶ Scanner ──▶ Import Graph ──▶ Discovery Passes ──▶ Skill Generation
               (detect     (parse imports,   (2 parallel         (3 domains at a
               stack,       hub files,         backend calls:     time, guided by
               domains)     coupling)          domains +          graph + findings)
                                               architecture)
```

## 1. Scanner

The scanner is **deterministic** — no LLM calls, instant, free.

It detects:
- **Tech stack** — languages, frameworks (Next.js, React, Prisma, etc.)
- **Structure** — source roots, entry points, key directories
- **Domains** — feature areas based on directory organization
- **Health** — missing `.gitignore`, exposed `.env` files, unignored `node_modules`

## 2. Import graph

aspens parses imports across JS/TS/Python files using [es-module-lexer](https://github.com/nicolo-ribaudo/es-module-lexer):

- **Hub files** — most-imported files, ranked by fan-in
- **Domain clustering** — groups files by import relationships (connected components)
- **Inter-domain coupling** — how many imports cross domain boundaries
- **Git churn analysis** — file change frequency, hotspot detection
- **Path alias resolution** — resolves `@/` imports from `tsconfig.json`

The graph is cached in `.claude/graph.json` and used throughout generation and sync.

## 3. Discovery passes

Two LLM agents explore the codebase **in parallel**:

1. **Domain discovery** — finds real feature domains (auth, billing, courses) rather than just directory names
2. **Architecture analysis** — identifies patterns, conventions, and structural decisions

Both agents are guided by the import graph so they focus on the most important files first.

## 4. Skill generation

Skills are generated **up to 3 domains at a time** in parallel. Each skill generation call receives:

- The import graph context (hub files, clusters, neighbors)
- Discovery findings for that domain
- The base skill for cross-domain conventions

This produces focused, ~35-line skills with activation patterns, key files, key concepts, and critical rules.

## Sync

After initial generation, `aspens doc sync` keeps skills current:

1. Reads the git diff from recent commits
2. Maps changed files to affected skills using activation patterns
3. Sends targeted diffs to the LLM backend
4. Updates only the skills that need changes

The optional post-commit hook automates this entirely.

## Import graph persistence

The graph is rebuilt on every `doc init` and `doc sync` run. It produces three artifacts:

- **`graph.json`** — full dependency map with hub files, clusters, and edges
- **`graph-index.json`** — compact lookup table for quick file-to-domain resolution
- **`code-map.md`** — human-readable codebase overview (hub files, domain clusters, hotspots)

A graph context hook can inject relevant graph data into every Claude prompt, so the agent knows about hub files and neighbors when editing a file.
