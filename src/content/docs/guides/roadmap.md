---
title: Roadmap
description: What aspens has shipped and what's coming next.
---

## Shipped

- **Import graph** (v0.2.0) — JS/TS + Python import parsing, file priority ranking, BFS domain clustering, git churn hotspots, tsconfig path alias resolution
- **Agentic discovery** (v0.2.0) — Two parallel LLM agents (domains + architecture), findings fed into skill generation, parallel batches of 3
- **Vendored code exclusion** (v0.2.0) — Skip vendor dirs, generated files, lock files
- **Auto skill activation** (v0.4.0) — Hook-driven activation on every prompt, skill-rules.json with keyword/intent matching, session-sticky skills
- **Multi-target support** (v0.5.0) — Codex as first-class target, target/backend separation, config in `.aspens.json`
- **Context health** (v0.5.0) — `doc impact` command: freshness, domain coverage, drift, health score, LLM interpretation, interactive apply
- **Graph persistence** (v0.6.0) — `doc graph` command, `.claude/graph.json`, code-map, graph-index, graph context hook
- **Save-tokens** (v0.6.0) — Token-saving hooks + handoff commands + session directory
- **Bundled agents** (v0.6.0) — 11 agent templates, `aspens add`, `customize agents`, `--recommended` install

## Next up

- **Framework probing** — Next.js (App/Pages Router), Django, Rails, Spring Boot, Laravel architecture detection
- **Infrastructure detection** — CI/CD, migration tools, API specs, IaC
- **Symbol extraction** — `web-tree-sitter` for function/class/type signatures, Aider-style repo map
- **Better clustering** — Louvain community detection, temporal coupling from git, PageRank
- **More languages + monorepo** — Go/Rust tree-sitter grammars, workspace detection (pnpm/npm/yarn/nx/turbo)

## Future

- **Direct API mode** — `--backend api` for CI/CD without Claude Code or Codex installed
- **Semantic search** (maybe) — `aspens doc search` with local vector store
