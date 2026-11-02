# AREEL STUDIO

A responsive music-creation workspace prototype. This release includes a prompt composer, creative controls, browser-local concept library, navigation views, and a small Web Audio demo tone.

## Included
- Responsive AREEL STUDIO interface for desktop and mobile
- Prompt composer with genre, mood, tempo, duration, and instrumental controls
- Surprise-me prompt helper
- Save and remove song concepts in browser local storage
- Library, Voice Lab, and Studio navigation states
- Accessible controls and clear preview-state messaging

## Audio generation status
This is a **frontend prototype**, not a connected AI music-generation service. The save action stores a song concept; it does not create an AI song or audio file. Demo tones are simple browser-generated sounds, not generated tracks.

To enable real generation, integrate a licensed provider behind a server-side endpoint, store credentials as server environment variables, create asynchronous generation jobs, and persist generated audio in object storage. Never expose provider API keys in browser JavaScript.

Voice cloning should only be enabled with explicit consent and a provider supporting lawful voice use, secure processing, and deletion.

## Netlify deployment
- Base directory: blank
- Build command: blank
- Publish directory: `.`
- Functions directory: unused for this static prototype

## Run locally
Open `index.html`, or run `python3 -m http.server 8000`, then visit `http://localhost:8000`.

## Files
- `index.html` — document shell and metadata
- `styles.css` — responsive visual system
- `script.js` — composer, local library, navigation, and demo tone
