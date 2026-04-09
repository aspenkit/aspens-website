---
title: aspens doc impact
description: Verify freshness, coverage, and drift of generated context.
---

Show whether your generated context is still keeping up with the codebase. This is the **proof surface**: are the docs present, covering the right domains, surfacing the right hub files, and fresher than the repo changes?

## Usage

```bash
npx aspens doc impact [path]
```

## What it checks

- **Instructions present** — does `CLAUDE.md` or `AGENTS.md` exist per target?
- **Skills present** — how many domain skills are installed?
- **Domain coverage** — which detected repo domains have matching skills?
- **Hub file surfacing** — are the top hub files mentioned in root guidance?
- **Drift** — are generated docs older than the newest source changes?
- **Hook health** — are required hooks installed and pointing to valid scripts?
- **Save-tokens health** — is the save-tokens installation complete? (Claude only)
- **Opportunities** — optional aspens features not yet installed

## Example output

```
$ aspens doc impact

  my-app

  Claude Code
    Instructions: present (CLAUDE.md)
    Skills: 9
    Domain coverage: 8/9, missing onboarding
    Hub files surfaced: 4/5
    Hooks: installed
    Save tokens: healthy
    Last updated: Apr 7, 2026, 9:41 AM  stale vs source
```

## Health score

The health score starts at 100 and deducts for issues:

| Issue | Deduction |
|---|---|
| Missing instructions file | -35 |
| No skills installed | -25 |
| Domain gaps | up to -25 |
| Missed hub files | -4 each |
| Drift (stale files) | -3 per file, max -20 |
| Unhealthy hooks | -10 |
| Broken save-tokens | -5 |

## LLM interpretation

If a backend CLI is available, impact can send the report to an LLM for interpretation:

```bash
npx aspens doc impact --backend claude
```

The LLM returns a structured analysis with:

- **Bottom line** — one-sentence summary
- **Improvements** — what aspens is doing well
- **Risks** — what needs attention
- **Next step** — recommended action

## Interactive apply

When the report identifies issues, aspens can fix them:

```bash
npx aspens doc impact
# Shows report, then prompts:
# ◆ Apply recommended repairs? (y/n)
```

This builds a repair plan and applies it — regenerating missing skills, reinstalling broken hooks, etc.

## Options

| Option | Description |
|---|---|
| `--backend <backend>` | Backend for LLM interpretation |
| `--model <model>` | Model for interpretation |
| `--no-graph` | Skip import graph analysis |
| `--timeout <seconds>` | Backend timeout |
| `--verbose` | Show diagnostic output |
