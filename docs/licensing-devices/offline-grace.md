---
sidebar_position: 4
title: Working offline
description: Morgue keeps working without a connection, within a grace window.
---

# Working offline

Morgue doesn't need to phone home constantly. Once activated, it keeps working offline and re-validates quietly in the background.

## How the grace period works

- After activation, Morgue **re-validates** your license periodically when you're online.
- If you go offline, it keeps working within a **grace window** — a flaky connection, a flight, or a few days off-grid won't lock you out.
- When you're back online, it re-validates automatically. No action needed.

## What happens when the window expires

If Morgue can't validate for longer than the grace window, it asks you to reconnect so it can re-check your license. Get back online and it picks right back up.

:::tip[A blip won't lock you out]
The grace period exists precisely so brief outages don't interrupt your work. You only need to act if you've been offline well beyond it.
:::

## Deactivation is different

Note the difference between **being offline** (temporary, covered by grace) and **deactivating a device** (intentional, frees the seat and locks the app). See **[Managing devices](/licensing-devices/managing-devices)**.
