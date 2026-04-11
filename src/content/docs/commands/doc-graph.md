---
title: aspens doc graph
description: Rebuild the import graph cache.
---

Rebuild the import graph cache. The graph runs automatically during `doc init` and `doc sync`, but you can trigger it manually.

## Usage

```bash
npx aspens doc graph [path]
```

## What it produces

| Artifact | Path | Purpose |
|---|---|---|
| Graph data | `.claude/graph.json` | Full dependency map with hub files, clusters, edges |
| Graph index | `.claude/graph-index.json` | Compact lookup table for file-to-domain resolution |
| Code map | `.claude/code-map.md` | Human-readable codebase overview |

## The code map

`code-map.md` gives agents a codebase overview on every prompt:

- Hub files (most-imported, with fan-in counts)
- Domain clusters (which files group together)
- Hotspots (high-churn files)
- Stats (file count, edge count, cluster count)

## Options

| Option | Description |
|---|---|
| `--verbose` | Show diagnostic output |

## Graph context hook

A graph context hook can inject navigation context into every Claude prompt. When you edit a file, the hook looks up its neighbors, hub files, and domain cluster from the graph.

Install it with:

```bash
npx aspens add hook graph-context
```
