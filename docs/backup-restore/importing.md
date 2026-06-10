---
sidebar_position: 3
title: Importing a backup
description: Restore a .zip into your library, with automatic de-duplication.
---

# Importing a backup

Importing brings a backup `.zip` back into your library — to restore after a reinstall, move to a new Mac, or merge a library.

## Running an import

1. Open **Settings → Library** and click **Import** — or, on a fresh install with an empty grid, use the **Import a backup** button right there.
2. Choose your `.zip`.
3. Morgue imports everything and confirms with a summary, including how many items were skipped as duplicates.

:::note[Imports are all-or-nothing]
An import runs as a single transaction: if something goes wrong partway, it rolls back cleanly rather than leaving a half-imported library.
:::

## How de-duplication works

Re-importing the same backup (or merging overlapping libraries) **won't create duplicates**. Morgue de-dupes by content:

| Type | Matched on |
| --- | --- |
| **Images** | Image content (a content hash) |
| **Palettes** | Name + colors |
| **Boards** | Name + item layout/content |
| **Fonts** | Font name |

Anything already present is **skipped**, and the count is shown in the summary (e.g. *"Skipped 36 already in your library."*).

## What gets skipped

- Exact duplicates of images, palettes, fonts, and boards you already have.
- If a backup references an image file that's missing from the zip, that asset is skipped rather than imported broken.

## After importing

Your restored assets appear in the grid immediately. If you imported an older backup and see anything off, the **[duplicate finder](/organizing/duplicate-finder)** can help tidy up.
