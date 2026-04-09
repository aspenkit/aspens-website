---
title: Quick Start
description: Get aspens running in your repo in under 5 minutes.
---

import { Steps, Tabs, TabItem, Aside, FileTree } from '@astrojs/starlight/components';

## Install

aspens runs via `npx` — no global install needed. Requires [Node.js 20+](https://nodejs.org) and at least one backend CLI.

## One-command setup

```bash
npx aspens doc init --recommended
```

`--recommended` is the fastest path:

- Reuses existing target config when present
- Defaults to improving existing docs instead of prompting
- Auto-picks the generation mode based on repo size
- Installs hooks and save-tokens setup

## Full workflow

<Steps>

1. **Map the repo** (optional — just to see what aspens finds)

   ```bash
   npx aspens scan
   ```

2. **Generate** the recommended context setup

   ```bash
   npx aspens doc init --recommended
   ```

3. **Verify** freshness and coverage

   ```bash
   npx aspens doc impact
   ```

4. **Keep it synced** on every commit

   ```bash
   npx aspens doc sync --install-hook
   ```

</Steps>

## Add agents and commands

```bash
npx aspens add agent all             # Install all 11 bundled AI agents
npx aspens customize agents          # Tailor agents with your project's context
npx aspens add command dev-docs      # Add slash commands
```

## What gets created

<Tabs>
  <TabItem label="Claude Code">
    <FileTree>
      - .claude/
        - skills/
          - base/skill.md Repo-wide context: stack, architecture, conventions
          - auth/skill.md Domain skill: auth patterns, key files, rules
          - billing/skill.md Domain skill: billing integration details
          - …
        - hooks/ Activation hooks, session tracking
        - settings.json Skill rules and Claude settings
      - CLAUDE.md Top-level repo instructions
    </FileTree>
  </TabItem>
  <TabItem label="Codex">
    <FileTree>
      - .agents/
        - skills/
          - base/SKILL.md
          - auth/SKILL.md
          - billing/SKILL.md
          - …
      - AGENTS.md Top-level repo instructions
    </FileTree>
  </TabItem>
</Tabs>

<Aside type="tip">
  Run `aspens doc impact` any time to check if your generated context is still fresh and covering the repo.
</Aside>
