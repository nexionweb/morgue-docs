---
sidebar_position: 2
title: The browser extension
description: Install and connect the Morgue browser extension that powers web capture.
---

# The browser extension

The extension is what captures pages from your browser and hands them to the Morgue app.

## Installing

1. Install the **Morgue extension** for your browser.
2. Pin it to your toolbar so it's one click away (recommended).
3. Make sure the **Morgue app is open** — the extension needs the app running to receive captures.

## How the connection works

When Morgue is running, it opens a small **local bridge** on your machine. The extension connects to that bridge to deliver captures.

- The connection is **local-only** — it never leaves your computer.
- The app must be **open** for the extension to connect. If the app is closed, the extension has nowhere to send captures.

:::tip[Check the connection]
Open the extension while the app is running. If it shows as connected, you're good to capture. If not, see troubleshooting below.
:::

## Troubleshooting the connection

If the extension can't reach the app:

1. **Is the Morgue app open?** Launch it and try again — this is the most common cause.
2. **Restart the app**, then reopen the extension.
3. **Check the bridge in Settings.** The app shows the capture bridge status under **Settings → Extension**. If it isn't running, restart the app.
4. **Restart the browser** if the extension still won't connect after the app is confirmed running.

For more fixes, see **[Troubleshooting → The extension won't connect](/reference/troubleshooting)**.

## Next

Learn the different ways to capture → **[Capture modes](/capturing/capture-modes)**.
