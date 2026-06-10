---
sidebar_position: 5
title: Duplicate finder
description: Scan your library for duplicate images and clean them up.
---

# Duplicate finder

Over time, the same image sneaks in twice — a re-capture, a re-imported backup, a saved-again favorite. The duplicate finder scans your library and surfaces them so you can clear the clutter.

## Running a scan

1. Open the **Duplicate finder** (from the sidebar / library tools).
2. Morgue analyzes your images and groups ones with **identical content** together.
3. Review the groups it finds.

## How matching works

The finder compares images by their **actual content** (a content hash), not just filenames or sizes — so two copies of the same image are caught even if they were named differently or captured separately.

## Reviewing and removing

- Each group shows the duplicates side by side.
- Keep the one you want and remove the extras.

:::note[Your originals are safe]
Removing a duplicate deletes the redundant copy, not the reference you're keeping. As always, an **[export backup](/backup-restore/exporting)** before a big cleanup is cheap insurance.
:::

## Avoiding duplicates from imports

When you **[import a backup](/backup-restore/importing)**, Morgue de-duplicates automatically — re-importing the same `.zip` won't pile up copies of images, palettes, or boards.
