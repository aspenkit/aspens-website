---
title: Origin Story
description: How aspens evolved from manual CLAUDE.md files to an automated CLI.
---

## The problem journey

### Stage 1: CLAUDE.md

Started by writing CLAUDE.md files. Worked for a while, then the codebase grew, the file got too long, and it went stale constantly. Claude would ignore conventions, build components from scratch instead of reusing existing ones, and burn through tokens searching for files.

### Stage 2: Granular guidelines per feature

Broke the monolithic CLAUDE.md into granular guidelines per feature, with agents aligned to the tech stack. Better results, but maintaining all those files became cumbersome. Every few PRs, the docs would drift from the actual code.

### Stage 3: Separate orchestrator repo

The breakthrough: put all documentation in a separate repo from the app codebase and symlink agents, skills, and docs. This became the [orchestrator](https://github.com/aspenkit/orchestrator) — an open-source framework for managing shared Claude Code config across repos.

### Stage 4: Auto-updating agent

Built an agent that crawls through commits and updates stale documentation. Better, but still required manually running it. Sometimes forgot to do it until a big PR landed, so documentation still drifted for a while.

### Stage 5: aspens (npm package)

Final breakthrough: automated everything into an npm package. A git hook triggers `aspens doc sync` after every commit. The diff is right there, an agent updates the docs automatically. No discipline required, no context window pressure, no forgetting.

## From orchestrator to aspens

The orchestrator had the right ideas but the wrong delivery mechanism:

**What the orchestrator required:**
- Clone the repo
- Run a 30-minute wizard
- Create symlinks manually
- Edit SETUP_CONFIG.json
- Multi-step validation

**What aspens replaced it with:**
```bash
npx aspens doc init .              # zero configuration
npx aspens doc sync --install-hook # never think about it again
```

The orchestrator's skill architecture, quality bar, agent library, and hook system all survived into aspens. The manual ceremony didn't.

## The core insight

The difference between hand-written orchestrator skills and aspens-generated skills: a human built that understanding over weeks. aspens needs to build the same understanding automatically, with zero human input.

The solution: build a structural graph first (import dependencies, file importance, domain clusters), then let an LLM reason over that graph. Graph handles "what's connected to what" instantly. The LLM handles "what does this mean" intelligently.
