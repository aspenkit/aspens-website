---
title: How Aspens Saves Tokens
description: The three ways agents waste tokens and how aspens fixes each one.
---

Without context, coding agents burn through tokens in three ways:

1. **Searching** — Bash/Grep calls to find relevant files, drilling through directories, reading file after file trying to understand the codebase structure
2. **Reading** — opening files that turn out to be irrelevant, reading entire files when only the function signature mattered
3. **Rebuilding** — writing new components from scratch because it didn't know an existing one already does the same thing, duplicating utilities, creating inconsistent patterns

On a large codebase, a significant portion of tool calls are pure exploration — not writing code.

## How aspens fixes this

### Skills eliminate searching

When Claude has a billing skill that says "Stripe wrapper is at `src/services/billing/stripe.ts`, usage checker is at `src/services/billing/usage.ts`," it doesn't need to Grep the codebase looking for Stripe-related code. It already knows.

### The import graph prioritizes what to read

Instead of randomly opening files, the graph tells the agent which files are architecturally important (high fan-in = many dependents). It reads the files that matter instead of skimming many.

### Critical rules prevent rebuilding

"Don't call Stripe API directly — always use the wrapper in stripe.ts" prevents the agent from writing a new Stripe integration when one already exists. "Usage counters use cache first, DB fallback" prevents a direct DB query.

### Scoped context = less context loaded

Skills auto-trigger based on file patterns. When editing billing code, only the billing skill (~35 lines) loads. The auth skill, the courses skill, and the onboarding skill stay out. Less context loaded = fewer tokens consumed per prompt.

## The effect

Without aspens, sessions start with exploration — search calls to find files, reads to understand patterns, and occasional rewrites when the agent discovers it duplicated something.

With aspens, sessions start informed — skills point directly to key files, graph ranking guides what to read first, and anti-patterns sections prevent common mistakes.

The token savings compound across sessions. Every session without aspens starts from zero. Every session with aspens starts informed.

## Doc sync keeps it current

The savings only work if skills are accurate. Stale skills are worse than no skills — they point at wrong files and outdated patterns.

`aspens doc sync` runs after every commit (via git hook), reads the diff, and updates affected skills automatically.
