---
title: Changelog
description: Release history for aspens.
---

## [0.6.0] - 2026-04-07

### Changed
- **Codex support hardening** — shared backend routing now uses a single `runLLM` implementation across commands, and Codex execution runs under read-only sandboxing
- **Config recovery** — `.aspens.json` parsing validates schema before use, malformed configs fall back to inference
- **Multi-target publishing** — `doc sync` forwards serialized graph data into target transforms so Codex architecture skill output is emitted when graph artifacts exist
- **Path allowlisting** — target path validation is stricter for transformed writes
- **Skill discovery** — reusable-domain loading falls back to skill rules when Codex-transformed skills omit `## Activation`

### Fixed
- Silent sync success on bad model output — `doc sync` now treats non-empty unparseable replies as errors
- Single-file fallback wrapping — `doc init` only wraps tagless model output for single-file prompts
- Customize validation order — `aspens customize agents` reports unknown targets before applying gating
- Prompt templates — `doc-sync` and `doc-sync-refresh` no longer hardcode `billing` in output paths
- Skill reader scope — `findSkillFiles()` matches configured skill filename only
- Hook log output — graph hook stderr extraction preserves quoted path segments

### Security
- Upgraded `vitest` to `4.1.3`, clearing Dependabot alerts for Vite `server.fs.deny` bypass, arbitrary file read via WebSocket, and optimized deps `.map` path traversal

---

## [0.5.0] - 2026-03-28

### Added
- **Token optimizer** — reduces prompt token usage across all templates while preserving semantic content
- **Plan + execute agent pair** — two new agent templates for structured plan-then-execute workflows
- **`doc graph --remove`** — remove graph artifacts from a repo
- **Dev docs commands** — refreshed `dev-docs` and `dev-docs-update` command templates

### Changed
- Improved code-running rule in generated CLAUDE.md files

---

## [0.4.0] - 2026-03-24

### Added
- **`doc sync --refresh`** — review and update all skills against the current codebase state without requiring a git diff
- **`add skill` command** — scaffold custom skills or generate from reference docs
- **Interactive file picker** — when diff exceeds 80k chars, prompts to select which files to analyze
- **Diff prioritization** — skill-relevant files get 60k of the 80k char budget
- **Git hook hardening** — 5-minute cooldown, skip aspens-only commits, log rotation, stale lock cleanup
- **Graph artifact gitignore** — auto-added to `.gitignore` to prevent sync loops
- **35 new tests** — coverage for timeout resolution, activation matching, skill-to-domain mapping

### Changed
- **Module split** — extracted `git-helpers.js`, `diff-helpers.js`, `git-hook.js` from doc-sync.js
- **Shared activation matching** — deduplicated 3 copies into `skill-reader.js`
- **Security hardening** — all git commands use `execFileSync`, `chmodSync` replaces shell `chmod`
- **Skill rules regeneration** — `doc sync` regenerates `skill-rules.json` after every write

### Fixed
- Empty file selection now cancels cleanly
- Mid-line truncation falls back to last newline boundary

---

## [0.3.0] - 2026-03-23

### Added
- **Import graph persistence** — `aspens doc graph` saves `.claude/graph.json`, `.claude/graph-index.json`, and `.claude/code-map.md`
- **Graph context hook** — injects navigation context into every Claude prompt
- **Code-map skill** — auto-generated codebase overview
- **Graph-aware doc sync** — rebuilds graph on every sync for better change detection
- **`--domains` flag for `doc init`** — retry specific domains without full regeneration

### Fixed
- Windows `spawn` ENOENT — Claude CLI resolves correctly on Windows
- Windows timeout kill — uses `taskkill /t /f` for full process tree
- `base-only` mode now correctly generates the base skill
- Graph hook portability — removed `timeout 5s` dependency
- Node 18/20 test compatibility — replaced `import.meta.dirname`

---

## [0.2.2] - 2026-03-22

### Added
- **Skill activation hooks** — auto-generated `skill-rules.json`, shell + Node.js hooks, and `settings.json` entries
- **Session-sticky skills** — editing a file activates its domain skill for the session
- **`--hooks-only` flag** — install/update hooks without regenerating skills
- **`--no-hooks` flag** — skip hook installation during `doc init`
- **Domain skill validation** — checks for required sections

### Fixed
- Hook settings merge — order-independent duplicate detection
- Bash pattern injection — validates patterns against safe character whitelist
- Dry-run side effects — `mkdirSync` guarded by `!options.dryRun`
- Session file location — uses `${TMPDIR:-/tmp}` consistently
- Fence detection — handles fenced code blocks at start-of-string

---

## [0.2.1] - 2026-03-21

### Added
- CLAUDE.md retry logic for missing `<file>` tags
- Subdirectory tsconfig resolution for `@/` aliases
- Vendored/generated code exclusion (`.min.js`, `_generated.*`, `_pb2.py`)

### Fixed
- Python import regex handles 4+ dot relative imports
- `parseFileOutput` wrapped in try/catch to prevent usage data loss
- Regex escape for domain names with metacharacters

---

## [0.2.0] - 2026-03-20

### Added
- **Import graph** — parses JS/TS/Python imports, resolves `@/` path aliases, builds dependency map
- **Hub file detection** — most-imported files with fan-in ranking
- **Domain clustering** — groups files by import relationships
- **Inter-domain coupling** — cross-boundary import analysis
- **Git churn analysis** — file change frequency, hotspot detection
- **Parallel discovery** — 2 Claude agents explore simultaneously
- **Parallel skill generation** — up to 3 domains concurrently
- **Health checks** — missing `.gitignore`, exposed `.env`, unignored `node_modules`
- **Python package root detection** — resolves imports from multiple source roots

### Changed
- Domain detection uses import graph clustering instead of hardcoded patterns
- Scan output shows import graph data instead of just directory listings
- Doc init runs discovery before asking user to choose domains

---

## [0.1.0] - 2026-03-18

### Added
- `aspens scan` — deterministic tech stack, structure, and domain detection
- `aspens doc init` — generate skills and CLAUDE.md via Claude
- `aspens doc sync` — update skills from git diffs
- `aspens doc sync --install-hook` — auto-sync with 5-minute cooldown
- `aspens add` — install agents, hooks, and slash commands from bundled library
- `aspens customize agents` — inject project context into installed agents
- Chunked generation mode for large repos
- Auto-scaling timeout based on repo size
- `--model` flag for choosing Claude model
- `--verbose` mode for real-time exploration
- Token usage summary after generation
- 9 bundled agents, 2 hooks, 2 slash commands
- Test suite (vitest, 69 tests)
