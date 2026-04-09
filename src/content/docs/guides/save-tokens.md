---
title: Save Tokens
description: Reduce token usage in Claude Code sessions with aspens save-tokens.
---

Without context, coding agents burn through usage searching for files, reading code they don't need, and rebuilding things that already exist. With aspens, they know your codebase structure before writing a single line — fewer tool calls, fewer wasted reads, fewer rewrites.

## The save-tokens command

```bash
npx aspens save-tokens --recommended
```

This installs a set of session management tools that help reduce token usage in Claude Code:

- **Token tracking** — monitors token usage across the session
- **Warning prompts** — alerts when approaching context limits
- **Session rotation** — helps manage long-running sessions
- **Statusline** — shows token usage in the Claude Code UI
- **Precompact handoffs** — prepares session state before context compression

## What gets installed

```
.claude/
  hooks/
    save-tokens-prompt.sh     # Token tracking on each prompt
    save-tokens-posttool.sh   # Post-tool-use tracking
  commands/
    compact.md                # Slash command for session compaction
    handoff.md                # Slash command for session handoff
```

Plus entries in `.claude/settings.json` to wire up the hooks.

## Configuration

Save-tokens configuration is stored in `.aspens.json`:

```json
{
  "saveTokens": {
    "warnAt": 175000,
    "compactAt": 200000
  }
}
```

- **warnAt** — token count that triggers a usage warning
- **compactAt** — token count that triggers compaction suggestion

## Install and remove

```bash
# Install with defaults (no prompts)
npx aspens save-tokens --recommended

# Remove all save-tokens files and settings
npx aspens save-tokens --remove
```

## Health checks

`aspens doc impact` includes save-tokens health in its report:

```
Save tokens: healthy
  Hooks: installed
  Commands: installed
  Settings: configured
```

If anything is missing or misconfigured, impact will flag it and suggest the fix command.
