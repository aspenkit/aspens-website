---
title: Roadmap
description: What aspens has shipped and what's coming next.
---

## Shipped

- **Import graph** (v0.2.0) — JS/TS + Python import parsing, file priority ranking, BFS domain clustering, git churn hotspots, tsconfig path alias resolution
- **Agentic discovery** (v0.2.0) — Two parallel LLM agents (domains + architecture), findings fed into skill generation, parallel batches of 3
- **Vendored code exclusion** (v0.2.1) — Skip vendor dirs, generated files, lock files
- **Auto skill activation** (v0.2.2) — Hook-driven activation on every prompt, skill-rules.json with keyword/intent matching, session-sticky skills
- **Graph persistence** (v0.3.0) — `doc graph` command, `.claude/graph.json`, code-map, graph-index, graph context hook
- **Full-repo refresh + custom skills** (v0.4.0) — `doc sync --refresh`, `add skill`, interactive file picker, hardened git hook
- **Token optimizer** (v0.5.0) — Prompt trimming across templates, plan + execute agent pair
- **Multi-target support** (v0.6.0) — Codex as first-class target, target/backend separation, config in `.aspens.json`
- **Context health** (v0.7.0) — `doc impact` command: freshness, domain coverage, drift, health score, LLM interpretation, interactive apply
- **Save-tokens** (v0.7.0) — Token-saving hooks + handoff commands + session directory
- **Multi-language domains** (v0.7.1–v0.7.2) — Domain discovery for C#, Java, Swift, PHP, Elixir, Kotlin, and F#; nested-project source-root detection; build-output skipping
- **`triggers:` skill frontmatter** (v0.8.0) — Activation rules (files, keywords, `alwaysActivate`) in frontmatter; churn-stable `code-map.md`; dedicated Python/TS import parsers with alias resolution
- **Framework probing — Next.js** (v0.8.0) — App Router, Pages Router, and special files (`middleware`, `instrumentation`) detected as implicit graph roots
- **OpenCode support** (v0.9.0) — `opencode` as a first-class backend and target (`AGENTS.md` + `.claude/skills`); `.php` counted as source
- **Bundled agents** — 11 agent templates, `aspens add`, `customize agents`, `--recommended` install

## Next up

- **More framework probing** — Django, Rails, Spring Boot, Laravel architecture detection
- **Multi-language import graphs** — hub files and clustering beyond JS/TS/Python (C#, Java, Go, Rust, etc.)
- **Infrastructure detection** — CI/CD, migration tools, API specs, IaC
- **Symbol extraction** — `web-tree-sitter` for function/class/type signatures, Aider-style repo map
- **Better clustering** — Louvain community detection, temporal coupling from git, PageRank
- **Workspace detection** — pnpm/npm/yarn/nx/turbo monorepo topology

## Future

- **Direct API mode** — `--backend api` for CI/CD without a coding-agent CLI installed
- **Semantic search** (maybe) — `aspens doc search` with local vector store
