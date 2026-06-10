---
sidebar_position: 1
title: Updating Morgue
description: How automatic updates are delivered and installed.
---

# Updating Morgue

Morgue updates itself — you don't need to re-download the `.dmg` for new versions.

## How auto-update works

- On launch, Morgue **checks for a newer version**.
- If one's available, it lets you know and offers to install it.
- Updates are **cryptographically verified** before they're applied, so you only ever install a genuine Morgue build.

## Installing an update

1. When an update is available, Morgue shows an update prompt.
2. Click **Restart & Update**.
3. Morgue downloads the update, verifies it, and **relaunches** on the new version.

:::note["Later" waits until next launch]
The update check runs at launch. If you choose **Later**, Morgue won't nag you mid-session — it'll simply offer the update again the next time you open the app.
:::

## If an update fails

- Make sure you're running Morgue from **Applications** (not from inside a mounted `.dmg`), which can block updates.
- Check your internet connection and relaunch to try again.
- As a fallback, you can always download the latest `.dmg` from [morgueapp.com](https://morgueapp.com) and reinstall over the top — your library is untouched.
