---
sidebar_position: 2
title: Exporting your library
description: Create a single .zip with everything — assets, palettes, folders, tags, and boards.
---

# Exporting your library

An export is a complete, portable snapshot of your library in one `.zip`.

## Running an export

1. Open **Settings → Library**.
2. Click **Export**.
3. Choose where to save the `.zip`.
4. Morgue packs everything and confirms with a summary (e.g. *"Exported 240 items, 240 images, 18 palettes, and 4 boards."*).

You can also export from other spots that surface the **Export Library** action.

## What the `.zip` contains

| Inside the zip | What it is |
| --- | --- |
| `morgue-library.json` | The full catalog: assets, palettes, folders, tags, and boards (with items + connectors). |
| `palettes.json` | Your palettes and their colors, easy to reuse elsewhere. |
| `images/` | The actual image files. |

:::tip[Reuse palettes anywhere]
Because palettes are exported as plain JSON, an export doubles as a way to **lift your color palettes out** of Morgue for use in other tools — even if you just want the colors.
:::

## Storing backups safely

- Keep backups on a **different drive** than your library (external or cloud) so one failure can't take both.
- Date your files (e.g. `morgue-library-2026-06-10.zip`) and keep a few generations.

## Restoring

To bring a backup back in, see **[Importing a backup](/backup-restore/importing)**.
