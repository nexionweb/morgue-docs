---
sidebar_position: 5
title: Google Fonts API key
description: Browse the full Google Fonts catalog with your own API key.
---

# Google Fonts API key

By adding your own Google Fonts API key, the **[font browser](/palettes-fonts/font-browser)** can list and preview the **entire Google Fonts catalog** from inside Morgue.

## Why a key is needed

The full catalog is served by Google's Fonts API, which requires a key tied to **your** Google account. Morgue uses *your* key so the catalog access is yours — nothing is proxied through a Morgue server.

## Getting a key

1. Go to the **Google Cloud Console**.
2. Enable the **Web Fonts Developer API**.
3. Create an **API key** under credentials.
4. Copy the key.

:::note[It's free for this use]
The Web Fonts Developer API is free for the kind of catalog browsing Morgue does. Keep your key private — treat it like a password.
:::

## Adding it in Morgue

1. Open **Settings**.
2. Find the **Google Fonts** key field (under the AI / integrations area).
3. Paste your key and save.

The font browser will now offer the full catalog. See **[AI features](/settings/ai-features)** for where keys live in Settings.
