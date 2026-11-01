# SUNO Project

A Suno-inspired music creation app for crafting prompt-driven song concepts, generating mock track previews, and exploring a clean creative workflow.

## Features

- AI-style song prompt composer
- Genre, mood, and vibe controls
- Song length and language options
- Dynamic generated track cards
- Fake preview player experience
- Responsive dark UI for music creation

## Run locally

Because this project is a static frontend, you can open `index.html` directly in a browser. For a local preview server, run:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Project structure

- `index.html` — app layout
- `styles.css` — dark music app styling
- `script.js` — prompt handling and UI logic

## Notes

This is a front-end prototype designed to look and feel like a Suno music creation app. It includes a realistic interface and prompt-based generation flow, but it does not call a live Suno API by default.
