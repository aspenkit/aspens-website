---
title: FAQ
description: Frequently asked questions about aspens.
---

## General

### Does aspens require an LLM to run?

`aspens scan` is fully deterministic — no LLM, instant, free. Commands that generate or update content (`doc init`, `doc sync`, `customize agents`) need a backend CLI like Claude Code or Codex.

### What languages does aspens support?

The scanner detects JavaScript, TypeScript, Python, Go, Rust, and Ruby. The import graph currently parses JS/TS and Python imports. Skills are generated for any language the backend LLM can understand.

### Does aspens work in monorepos?

Yes. aspens resolves the git root and scopes hooks, sync, and impact to the subdirectory project path. The post-commit hook is monorepo-aware.

### How much does it cost to run?

`scan` and `doc impact` (without LLM interpretation) are free. `doc init` typically uses 10-30k tokens depending on repo size. `doc sync` uses less since it only updates affected skills.

## Skills

### What if aspens generates a bad skill?

Edit it directly — skills are plain markdown. Or re-run `doc init --strategy rewrite` for that domain. `doc sync` will preserve your manual edits unless the underlying code changes significantly.

### Can I write my own skills?

Yes. `aspens add skill my-convention` scaffolds an empty skill. `aspens add skill release --from dev/release.md` generates one from a reference document. Custom skills are preserved during sync.

### How does skill activation work?

For Claude Code, hooks check which files you're editing against `skill-rules.json`. Matching skills are injected into the prompt. Skills are also session-sticky — once activated, they stay active.

## Targets

### Can I use Claude and Codex at the same time?

Yes. Use `--target all` to generate both `CLAUDE.md` + `.claude/skills/` and `AGENTS.md` + `.agents/skills/` from one run. `doc sync` updates all configured targets.

### I already have CLAUDE.md — will aspens overwrite it?

By default, aspens asks whether to improve, rewrite, or skip existing docs. With `--recommended`, it defaults to improving (merging new info into existing content).

## Sync

### How does the post-commit hook work?

It runs `aspens doc sync` after each commit with a 5-minute cooldown. It skips commits that only change aspens-generated files, and rotates logs to prevent bloat.

### What if sync produces a bad update?

The update is a regular file change — just `git checkout` the affected skill file to revert it.

## Troubleshooting

### `aspens doc init` is timing out

Increase the timeout: `aspens doc init --timeout 600`. Large repos may need more time for discovery and generation.

### Skills aren't activating in Claude Code

Run `aspens doc init --hooks-only` to reinstall the activation hooks, or check with `aspens doc impact` which reports hook health.

### `aspens doc impact` shows drift

Run `aspens doc sync` to update skills from recent changes, or `aspens doc sync --refresh` for a full review against the current codebase.
