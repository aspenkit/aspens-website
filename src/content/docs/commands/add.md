---
title: aspens add
description: Install bundled templates — agents, hooks, commands, and skills.
---

Add individual components from the bundled library, or create custom skills.

## Usage

```bash
npx aspens add <type> [name]
```

## Types

### Agents

```bash
npx aspens add agent all              # Add all 11 AI agents
npx aspens add agent code-reviewer    # Add a specific agent
npx aspens add agent --list           # Browse available agents
```

After installing agents, customize them with your project's context:

```bash
npx aspens customize agents
```

### Hooks

```bash
npx aspens add hook skill-activation  # Auto-triggering skill hooks
npx aspens add hook graph-context     # Graph context injection
npx aspens add hook --list            # Browse available hooks
```

### Commands

```bash
npx aspens add command dev-docs       # Add slash commands
npx aspens add command --list         # Browse available commands
```

### Skills

```bash
# Scaffold an empty custom skill
npx aspens add skill my-convention

# Generate a skill from a reference document
npx aspens add skill release --from dev/release.md

# List existing skills
npx aspens add skill --list
```

When using `--from`, aspens reads the reference document and generates a focused skill from its content.

## Options

| Option | Description |
|---|---|
| `--list` | Browse available components |
| `--from <file>` | Generate a skill from a reference document (skills only) |
| `--force` | Overwrite existing files |
| `--model <model>` | Model for skill generation |
| `--timeout <seconds>` | Backend timeout |
| `--verbose` | Show backend activity |
