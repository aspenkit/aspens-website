---
title: Contributing
description: How to contribute to aspens.
---

## Prerequisites

- [Node.js 18+](https://nodejs.org)
- [Claude Code CLI](https://docs.anthropic.com/en/docs/claude-code) (needed for `doc init`, `doc sync`, and `customize` commands)
- Git

## Setup

```bash
# Fork the repo on GitHub, then:
git clone https://github.com/<your-username>/aspens.git
cd aspens
npm install

# Verify it works
node bin/cli.js --help
npm test
```

No build step. The CLI runs directly from source (ES modules).

## Testing your changes

### Run the test suite

```bash
npm test                              # Run all tests
npx vitest run tests/scanner.test.js  # Run a single test file
npx vitest --watch                    # Watch mode during development
```

### Test against a real repo

The best way to verify your changes is to run aspens against an actual codebase.

**Option 1: `npm link` (recommended)**

```bash
# In the aspens directory:
npm link

# Now test from any repo:
cd /path/to/some-project
aspens scan
aspens doc init --dry-run
```

When you're done:

```bash
npm unlink -g aspens
```

**Option 2: Run directly**

```bash
node /path/to/aspens/bin/cli.js scan /path/to/some-project
```

**Option 3: Use `--dry-run`**

```bash
node bin/cli.js doc init --dry-run /path/to/some-project
node bin/cli.js doc sync --dry-run /path/to/some-project
```

## Submitting a pull request

1. Fork the repo and create a branch (`git checkout -b my-change`)
2. Make your changes
3. Run the tests (`npm test`)
4. Test against at least one real repo
5. Open a PR with a clear description of what changed and why

### What makes a good PR

- **Small and focused** — one feature or fix per PR
- **Tests included** — add or update tests in `tests/` for any logic changes
- **Tested against a real repo** — mention which repo you tested with in the PR description

## Code review

We use [CodeRabbit](https://coderabbit.ai) for automated code review on every PR. It posts a summary and inline suggestions — you can reply to them directly. The review profile is set to **chill**, so it's there to catch things, not block you.

## Code style

- **ES modules** — `import`/`export`, no `require()`
- **Path handling** — `path.resolve()` for absolute, `path.relative()` for display
- **UI** — `@clack/prompts` for interactive prompts, `picocolors` for color
- **Error handling** — throw descriptive errors with remediation hints
- **File reads** — try/catch returning `null` on failure, never throw on missing files

## Where to start

Look for issues labeled [`good first issue`](https://github.com/aspenkit/aspens/labels/good%20first%20issue) — these are scoped, well-described tasks ideal for first-time contributors.
