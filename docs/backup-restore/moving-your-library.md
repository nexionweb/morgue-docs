---
sidebar_position: 4
title: Moving your library
description: Relocate the library folder to an external or cloud drive.
---

# Moving your library

Your whole library lives in one folder. You can move that folder to another location — an external SSD, a cloud-synced drive — without exporting and re-importing.

## Choosing a new location

1. Open **Settings → Library**.
2. Find the **library location** and choose a new folder.
3. Morgue moves your files there and remembers the new location for next launch.

## How the move works

Morgue moves your library **safely**:

- On the **same drive**, the move is instant.
- **Across drives** (e.g. to an external or cloud disk), Morgue copies everything first, then switches to the new location, and only then removes the originals — so an interrupted move can't lose data or leave your library half-moved.

:::warning[Cloud drives sync in the background]
If you move your library onto a cloud-synced folder, give it time to finish syncing, and be aware that syncing thousands of files takes a while. A local SSD is fastest; cloud is convenient for cross-machine access.
:::

## Reverting

To move back, just choose the original location again in **Settings → Library**.

## Moving vs. backing up

Moving relocates your **live** library. It is **not** a backup — for that, keep a separate **[export `.zip`](/backup-restore/exporting)** on another drive.
