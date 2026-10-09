---
title: Architecture
description: Technical overview of the aspens generation pipeline.
---

## Data flow

```
scanRepo()          → { languages, frameworks, domains, entryPoints, size, health }
     ↓
buildRepoGraph()    → { files, edges, ranked, hubs, clusters, hotspots, stats }
     ↓
runLLM() x2         → discoveryFindings (architecture + domains, in parallel)
     ↓
generateChunked()   → skill files (base → domains in parallel batches of 3 → CLAUDE.md)
     ↓
writeSkillFiles()   → .claude/skills/**/*.md + CLAUDE.md
```

## Import graph

Parses JS/TS (via `es-module-lexer`) and Python (regex). Resolves relative imports, path aliases from tsconfig.json, and Python multi-root packages.

**File priority formula:**
```
priority = fanIn * 3.0 + exportCount * 1.5 + isEntryPoint * 10.0 + gitChurn * 2.0 + 1/(depth+1) * 1.0
```

**Clustering:** Connected components via BFS on the undirected import graph. Files that import each other land in the same domain cluster.

## Runner

`runLLM()` dispatches to `runClaude()`, `runCodex()`, or `runOpenCode()` based on the configured backend:

- **Claude:** `claude -p --verbose --output-format stream-json`
- **Codex:** `codex exec --json --sandbox read-only --ephemeral`
- **OpenCode:** `opencode run --format json` (prompt passed via a `-f` file, stdin disabled to avoid a startup hang)

Auto-scales timeout by repo size. Parses `<file path="...">content</file>` tags. Enforces path safety (writes only to `.claude/`, `.agents/`, instruction files).

## Target system

**Target** = where output goes. **Backend** = which CLI generates it. Config in `.aspens.json`.

- `claude` target → `.claude/skills/`, `CLAUDE.md`
- `codex` target → `.agents/skills/`, `AGENTS.md`
- `opencode` target → `.claude/skills/`, `AGENTS.md`

You can use Claude as backend to generate Codex output, or vice versa. Because `codex` and `opencode` both own `AGENTS.md`, they can't be configured together in one repo.

## Key dependencies

| Package | Purpose |
|---------|---------|
| `es-module-lexer` | JS/TS import parsing (WASM, no native deps) |
| `commander` | CLI framework |
| `@clack/prompts` | Interactive terminal prompts |
| `picocolors` | Terminal colors |

Plus one of the `claude`, `codex`, or `opencode` CLIs at runtime for LLM operations.
