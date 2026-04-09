---
title: aspens customize agents
description: Inject project context into installed Claude agents.
---

Inject your project's tech stack, conventions, and file paths into installed Claude agents.

## Usage

```bash
npx aspens customize agents
```

## What it does

Reads your skills and `CLAUDE.md`, then tailors each installed agent with project-specific context. This means agents reference your actual file paths, conventions, and patterns instead of generic placeholders.

## Example

Before customization, an agent might say:

> Review the code for common issues...

After customization:

> Review the code against the project's ESM-only convention, check Stripe webhook handlers for signature verification, and verify Prisma schema changes include migrations...

## Options

| Option | Description |
|---|---|
| `--dry-run` | Preview changes without writing files |
| `--timeout <seconds>` | Backend timeout (default: 300) |
| `--model <model>` | Model (e.g., sonnet, opus, haiku) |
| `--verbose` | Show what the backend is doing |
