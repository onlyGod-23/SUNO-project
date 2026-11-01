const app = document.getElementById('app');

const mockTrackTemplates = [
  {
    title: 'Midnight Echo',
    style: 'Synthwave',
    duration: '2:34',
    mood: 'Dreamy',
    energy: '86%',
    voice: 'Neutral'
  },
  {
    title: 'Velvet Skies',
    style: 'Electronic',
    duration: '3:11',
    mood: 'Ambient',
    energy: '79%',
    voice: 'Female'
  },
  {
    title: 'Neon Horizon',
    style: 'Future Pop',
    duration: '2:48',
    mood: 'Uplift',
    energy: '91%',
    voice: 'Auto-tune'
  }
];

function createWaveformBars() {
  return Array.from({ length: 10 }, (_, i) => {
    const height = 20 + Math.random() * 80;
    return `<span style="height:${height}%"></span>`;
  }).join('');
}

function generateSongFromPrompt(prompt, genre, mood, length, voice) {
  const cleanedPrompt = (prompt || '').trim() || 'Dreamy synthwave anthem';
  const words = cleanedPrompt.split(/\s+/).slice(0, 4).filter(Boolean);
  const titleParts = words.length ? words : ['New', 'Sunset', 'Song'];

  return {
    title: titleParts
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    style: genre || 'Electronic',
    duration: length || '2 min',
    mood: mood || 'Dreamy',
    energy: `${72 + Math.floor(Math.random() * 24)}%`,
    voice: voice || 'Neutral'
  };
}

function renderTracks(tracks) {
  const list = document.getElementById('track-list');
  if (!list) return;

  list.innerHTML = tracks.map((track, index) => `
    <article class="track-card">
      <div class="track-top">
        <span class="track-badge">${track.style}</span>
        <span class="track-stats">${track.duration}</span>
      </div>
      <h4>${track.title}</h4>
      <div class="track-meta">
        <span>${track.mood}</span>
        <span>•</span>
        <span>${track.energy} energy</span>
      </div>
      <div class="waveform" aria-label="Audio waveform preview">
        ${createWaveformBars()}
      </div>
      <div class="track-actions">
        <button class="play-button" type="button" data-index="${index}">
          Play preview ${index + 1}
        </button>
        <span class="track-stats">${track.voice}</span>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.play-button').forEach((button) => {
    button.addEventListener('click', () => {
      playPreviewTone(Number(button.dataset.index));
    });
  });
}

function playPreviewTone(index) {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;

  const ctx = new AudioCtx();
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  const frequencies = [220, 294, 349, 440, 392, 330];
  const base = frequencies[index % frequencies.length];

  osc.type = 'sawtooth';
  osc.frequency.value = base;
  gain.gain.value = 0.0001;

  osc.connect(gain);
  gain.connect(ctx.destination);

  gain.gain.exponentialRampToValueAtTime(0.15, now + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.3);

  osc.start(now);
  osc.stop(now + 1.4);
}

function buildApp() {
  if (!app) return;

  app.innerHTML = `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand-wrap">
          <div class="brand-mark">S</div>
          <div>
            <p class="eyebrow">Creative studio</p>
            <h1>SUNO</h1>
          </div>
        </div>

        <nav class="nav">
          <button class="nav-item active" type="button">Create</button>
          <button class="nav-item" type="button">Library</button>
          <button class="nav-item" type="button">Discover</button>
          <button class="nav-item" type="button">Favorites</button>
        </nav>

        <div class="sidebar-card">
          <p class="card-label">Current plan</p>
          <h3>Pro Creator</h3>
          <div class="quota">
            <span>Tracks left</span>
            <strong>24</strong>
          </div>
        </div>
      </aside>

      <main class="main-panel">
        <header class="topbar">
          <div>
            <p class="eyebrow muted">Music generation</p>
            <h2>Build your next song</h2>
          </div>
          <button class="ghost-button" type="button">Export mix</button>
        </header>

        <section class="composer-card">
          <form id="song-form" class="song-form">
            <div class="field large-field">
              <label for="prompt">Describe your song</label>
              <textarea id="prompt" name="prompt" rows="4">A dreamy synthwave anthem with cinematic guitars, glowing vocals, and a big emotional chorus</textarea>
            </div>

            <div class="controls-grid">
              <div class="field">
                <label for="genre">Genre</label>
                <select id="genre" name="genre">
                  <option>Pop</option>
                  <option selected>Electronic</option>
                  <option>Hip Hop</option>
                  <option>R&B</option>
                  <option>Rock</option>
                  <option>Indie</option>
                </select>
              </div>

              <div class="field">
                <label for="mood">Mood</label>
                <select id="mood" name="mood">
                  <option>Energetic</option>
                  <option selected>Dreamy</option>
                  <option>Melancholic</option>
                  <option>Confident</option>
                  <option>Chill</option>
                </select>
              </div>

              <div class="field">
                <label for="length">Length</label>
                <select id="length" name="length">
                  <option>30 sec</option>
                  <option selected>2 min</option>
                  <option>3 min</option>
                  <option>4 min</option>
                </select>
              </div>

              <div class="field">
                <label for="voice">Voice</label>
                <select id="voice" name="voice">
                  <option>Female</option>
                  <option selected>Neutral</option>
                  <option>Male</option>
                  <option>Auto-tune</option>
                </select>
              </div>
            </div>

            <div class="panel-actions">
              <button type="button" class="secondary-button" id="use-template">Use template</button>
              <button type="submit" class="primary-button">Generate songs</button>
            </div>
          </form>
        </section>

        <section class="results-header">
          <div>
            <p class="eyebrow muted">Generated tracks</p>
            <h3>Fresh creations</h3>
          </div>
          <button class="text-button" type="button">View all</button>
        </section>

        <section id="track-list" class="track-list" aria-live="polite"></section>
      </main>
    </div>
  `;

  const form = document.getElementById('song-form');
  const useTemplateButton = document.getElementById('use-template');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const prompt = formData.get('prompt');
    const genre = formData.get('genre');
    const mood = formData.get('mood');
    const length = formData.get('length');
    const voice = formData.get('voice');

    const generated = [
      generateSongFromPrompt(prompt, genre, mood, length, voice),
      generateSongFromPrompt(`${prompt} with a soft cinematic chorus`, genre, mood, length, voice),
      generateSongFromPrompt(`${prompt} with an uplifting bridge`, genre, mood, length, voice)
    ];

    renderTracks(generated);
  });

  useTemplateButton.addEventListener('click', () => {
    const prompt = document.getElementById('prompt');
    if (prompt) {
      prompt.value = 'A dreamy synthwave anthem with cinematic guitars, glowing vocals, and a big emotional chorus';
    }
  });

  renderTracks(mockTrackTemplates);
}

buildApp();
