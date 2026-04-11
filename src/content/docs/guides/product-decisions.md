---
title: Product Decisions
description: Key decisions that shaped aspens and why they were made.
---

## Skills ARE the documentation

Skills are thin, auto-triggering context files (~35 lines) that load on every prompt. They contain what the feature does, key files, patterns, conventions. That's 80% of what "docs" means for an AI coding assistant.

## A la carte model

Users can pick 1 or more components independently — not forced into the full setup. `aspens add agent code-reviewer` works without `aspens doc init`. Lowers the adoption barrier.

## Two core commands

- `aspens doc init` — one command to go from zero to full context
- `aspens doc sync` — one command (or git hook) to keep it current

Everything else is optional.

## Doc sync is the killer feature

The real value isn't the initial generation — it's that skills stay current automatically. Every other approach (manually writing CLAUDE.md, using a wizard, running periodic updates) breaks down because humans forget. A git hook never forgets.

## Output format: native to each target

Same `.claude/skills/`, `CLAUDE.md` structure that Claude Code already discovers natively. Same `.agents/`, `AGENTS.md` structure for Codex. No new format invented. No configuration needed. Drop the files in and the assistant finds them.

## Multi-backend runtime

aspens shells out to `claude -p` (headless Claude Code) or `codex exec` for LLM operations. This means users need at least one of these CLIs installed. The upside: zero API key management, uses whatever plan the user has, supports all Claude models.

A future direct API mode is under consideration for CI/CD use cases.

## Graph first, agentic second

The core architectural insight: build the structural graph deterministically (free, fast, reliable), then let an LLM reason over that structure (smart, semantic, expensive). Neither alone is sufficient — together they produce orchestrator-quality understanding.

## No native dependencies

The package installs via `npx` with zero native compilation. `es-module-lexer` is WASM-based. No `node-gyp`, no Python, no C compiler needed. This was a deliberate choice — native deps are the #1 reason npm packages fail to install.

## Connected components, not Louvain

Louvain community detection produces better clusters but adds algorithmic complexity. Connected components on the import graph are simpler and sufficient — files that import each other (directly or transitively) land in the same domain.

## Full graph as context, not a tool

Aider sends the full repo map as context. A `QueryGraph` tool would add agent loop overhead. For doc generation (batch processing all domains), including the graph JSON directly in the prompt is simpler and validated by Aider's approach.
