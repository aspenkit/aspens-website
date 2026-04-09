---
title: aspens save-tokens
description: Install token-saving session settings for Claude Code.
---

Install token-saving session management for Claude Code. Prevents context bloat, enables session rotation, and tracks token usage.

## Usage

```bash
npx aspens save-tokens [path]
```

## Quick install

```bash
npx aspens save-tokens --recommended
```

No prompts — installs everything with sensible defaults.

## What gets installed

- Token tracking hooks (prompt + post-tool-use)
- Statusline showing token usage
- Warning prompts when approaching context limits
- Slash commands for session compaction and handoff

## Remove

```bash
npx aspens save-tokens --remove
```

Removes all save-tokens files, settings entries, and configuration.

## Options

| Option | Description |
|---|---|
| `--recommended` | Install with defaults, no prompts |
| `--remove` | Uninstall save-tokens files and settings |

See the [Save Tokens guide](/guides/save-tokens/) for more details.
