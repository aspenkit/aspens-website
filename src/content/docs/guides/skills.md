---
title: Skills
description: What skills are, how they work, and how to customize them.
---

Skills are concise markdown files that give coding agents the context they need to write correct code in a specific domain. Each skill is ~35 lines and contains structured information that agents can act on immediately.

## Anatomy of a skill

```markdown
---
name: billing
description: Stripe billing — subscriptions, usage tracking, webhooks
---

## Activation

This skill triggers when editing billing/payment-related files:
- `**/billing*.ts`
- `**/stripe*.ts`

Keywords: stripe, subscription, invoice, webhook

---

You are working on **billing, Stripe integration, and usage limits**.

## Key Files
- `src/services/billing/stripe.ts` — Stripe SDK wrapper
- `src/services/billing/usage.ts` — Usage counters and limit checks

## Key Concepts
- **Webhook-driven:** Subscription state changes come from Stripe webhooks
- **Usage gating:** `checkLimit(userId, type)` returns structured 429 error data

## Critical Rules
- Webhook endpoint has NO auth middleware — verified by Stripe signature only
- Cancel = `cancel_at_period_end: true` (user keeps access until period end)
```

## Sections

### Frontmatter

- **name** — domain identifier (used for file path and cross-referencing)
- **description** — one-line summary (used in skill selection and indexing)

### Activation

File glob patterns and keywords that trigger the skill. When a Claude hook detects you're editing a matching file, the skill is automatically loaded.

### Key Files

The most important files for this domain. Agents use these as entry points when investigating or modifying code.

### Key Concepts

Architecture patterns, conventions, and domain-specific knowledge. This is the "how things work" section.

### Critical Rules

Gotchas, anti-patterns, and hard rules. Things agents must follow to avoid bugs or security issues.

## Skill activation (Claude)

For Claude Code, skills activate automatically through hooks:

1. **`skill-activation-prompt.sh`** — runs on every prompt, checks edited files against `skill-rules.json`
2. **`skill-activation-posttool.sh`** — runs after tool use, tracks which files have been touched in the session
3. **Session-sticky skills** — once a skill activates, it stays active for the session

## Custom skills

Create your own skills for conventions not covered by auto-generation:

```bash
# Scaffold an empty skill
npx aspens add skill my-convention

# Generate from a reference document
npx aspens add skill release --from dev/release.md
```

Custom skills live alongside generated skills and are preserved during `doc sync`.

## Skill for Codex

Codex skills use the same content format but live in a different location:

- Claude: `.claude/skills/<name>/skill.md`
- Codex: `.agents/skills/<name>/SKILL.md`

Codex does not have hooks, so skills are referenced through `AGENTS.md` instructions and directory-scoped files.
