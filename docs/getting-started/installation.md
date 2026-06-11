---
sidebar_position: 2
title: Installation
description: Download, install, and open Morgue for the first time on macOS.
---

# Installation

Morgue is a native macOS app — a signed, notarized `.dmg`, delivered as a `.zip` you unzip first. Installing takes about a minute.

## Requirements

- **macOS** on **Apple Silicon** (M1 or newer).
- A few hundred MB of free disk space for the app, plus room for your library (which grows with what you save).
- A **license key** to unlock the app after install — see [Activating your license](/getting-started/activating-your-license).

:::note
Morgue is distributed directly from [morgueapp.com](https://morgueapp.com), not the Mac App Store. The build is **code-signed and notarized by Apple**, so macOS Gatekeeper recognizes it as from an identified developer.
:::

## 1. Download the app

1. Go to [morgueapp.com](https://morgueapp.com) (or your purchase confirmation / [account dashboard](https://morgueapp.com/customer-dashboard)).
2. Download the latest **`morgue_<version>_aarch64.dmg.zip`**.

## 2. Install it

1. **Unzip the download** — double-click `morgue_<version>_aarch64.dmg.zip` in Finder to get `morgue_<version>_aarch64.dmg`.
2. Open the `.dmg` — a window appears showing the **Morgue** app and a shortcut to your **Applications** folder.
3. **Drag the Morgue icon onto the Applications folder.**
4. Eject the disk image (drag it to the Trash / click the eject button in Finder).

:::tip
Always run Morgue from **Applications**, not from inside the mounted `.dmg`. Running it from the disk image can prevent updates from installing correctly.
:::

## 3. Open Morgue for the first time

1. Open **Applications** and double-click **Morgue**.
2. Because it's notarized, it should open straight away. If macOS ever shows a security prompt, **right-click the app → Open**, then confirm once — macOS remembers your choice after that.

The first time it launches, Morgue creates your local library folder and shows the **license screen**. Continue to [Activating your license](/getting-started/activating-your-license).

## Where your data lives

Morgue is **local-first**: your images, palettes, fonts, folders, tags, and boards all live in a folder on your Mac, backed by a local database. Nothing is uploaded anywhere.

- You can **back the whole thing up** to a single `.zip` at any time — see [Exporting your library](/backup-restore/exporting).
- You can **move the library folder** to an external or cloud drive — see [Moving your library](/backup-restore/moving-your-library).

## Keeping it up to date

Morgue checks for updates and can install them with one click — you don't need to re-download the `.dmg` for future versions. See [Updating Morgue](/updating/overview).
