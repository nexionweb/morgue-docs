---
sidebar_position: 1
title: Capturing overview
description: How Morgue pulls screenshots, palettes, and fonts off the web and into your library.
---

# Capturing overview

Capturing is how references get *into* Morgue. You browse the web like normal, and when you see something worth keeping, you capture it — and it lands in your library with its **fonts and colors already attached**.

## The pieces

Capturing involves two parts working together:

| Part | Role |
| --- | --- |
| **The Morgue app** | Runs on your Mac and holds your library. It also runs a tiny local bridge so the extension can hand captures to it. |
| **The browser extension** | Lives in your browser. It grabs the page (or a region of it), reads the fonts and colors, and sends everything to the app. |

:::info[Everything stays on your machine]
The extension talks to the app over a **local connection on your own computer** — not the internet. Your captures never pass through anyone else's server.
:::

## What a capture includes

A single capture isn't just an image. Morgue saves:

- **The image** — the screenshot itself (visible screen, full page, or a region).
- **A color palette** — the dominant colors, extracted automatically.
- **Fonts** — typefaces detected on the page.
- **The source** — where it came from, so you can find it later by site.

## Where captures land

New captures appear in your **All Assets** grid in the app, ready to be tagged, foldered, dropped onto a board, or searched by color.

## Next

- Set up the extension → **[The browser extension](/capturing/browser-extension)**
- Learn the capture modes → **[Capture modes](/capturing/capture-modes)**
- Understand the auto-extraction → **[Auto-extracted fonts & colors](/capturing/fonts-and-colors)**
