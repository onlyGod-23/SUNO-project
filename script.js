* {
  box-sizing: border-box;
}

:root {
  --bg: #08111f;
  --bg-2: #121b2d;
  --panel: rgba(17, 25, 39, 0.92);
  --panel-light: rgba(28, 39, 60, 0.9);
  --card: rgba(20, 30, 47, 0.9);
  --line: rgba(160, 174, 192, 0.16);
  --text: #edf3ff;
  --muted: #9aa9c0;
  --primary: #7c6cff;
  --primary-2: #7ae0ff;
  --accent: #00d9b2;
  --danger: #ff5b8f;
  --shadow: 0 18px 50px rgba(8, 17, 31, 0.45);
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(124, 108, 255, 0.25), transparent 25%),
    radial-gradient(circle at top right, rgba(122, 224, 255, 0.15), transparent 20%),
    var(--bg);
  color: var(--text);
}

button, textarea, select {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
}

.app-shell {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  max-width: 1480px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 24px;
  gap: 22px;
}

.sidebar,
.main-panel {
  background: rgba(9, 15, 24, 0.8);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  border-radius: 26px;
}

.sidebar {
  padding: 22px 18px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 4px 8px 18px;
  border-bottom: 1px solid var(--line);
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: white;
  font-weight: 800;
  font-size: 1.2rem;
}

.brand-wrap h1 {
  margin: 4px 0 0;
  font-size: 1.5rem;
}

.eyebrow {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.68rem;
  color: var(--primary-2);
}

.eyebrow.muted {
  color: var(--muted);
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 28px;
}

.nav-item {
  background: transparent;
  color: var(--text);
  padding: 12px 14px;
  text-align: left;
  border-radius: 12px;
  border: 1px solid transparent;
  transition: 0.2s ease;
}

.nav-item.active,
.nav-item:hover {
  background: rgba(124, 108, 255, 0.14);
  border-color: rgba(124, 108, 255, 0.32);
}

.sidebar-card {
  margin-top: 28px;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 16px;
  background: linear-gradient(180deg, rgba(124, 108, 255, 0.12), rgba(16, 25, 39, 0.7));
}

.card-label {
  margin: 0 0 8px;
  color: var(--muted);
  font-size: 0.78rem;
}

.sidebar-card h3 {
  margin: 0;
  font-size: 1.25rem;
}

.quota {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  color: var(--muted);
}

.quota strong {
  color: var(--text);
  font-size: 1.1rem;
}

.main-panel {
  padding: 24px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
}

.topbar h2 {
  margin: 6px 0 0;
  font-size: clamp(1.7rem, 2vw, 2.5rem);
}

.ghost-button,
.secondary-button,
.primary-button,
.text-button {
  border-radius: 12px;
  padding: 0.84rem 1.1rem;
  font-weight: 600;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.ghost-button:hover,
.secondary-button:hover,
.primary-button:hover,
.text-button:hover {
  transform: translateY(-1px);
}

.ghost-button {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  color: var(--text);
}

.composer-card {
  background: linear-gradient(180deg, rgba(23, 33, 52, 0.92), rgba(12, 19, 31, 0.94));
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 22px;
}

.song-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.large-field {
  width: 100%;
}

label {
  color: var(--muted);
  font-weight: 600;
  font-size: 0.86rem;
}

textarea,
select {
  width: 100%;
  background: rgba(12, 18, 29, 0.9);
  border: 1px solid var(--line);
  border-radius: 14px;
  color: var(--text);
  padding: 0.9rem 1rem;
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 120px;
}

select {
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, #d8e7ff 50%), linear-gradient(135deg, #d8e7ff 50%, transparent 50%);
  background-position: calc(100% - 20px) calc(50% - 2px), calc(100% - 14px) calc(50% - 2px);
  background-size: 6px 6px, 6px 6px;
  background-repeat: no-repeat;
}

.controls-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.panel-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.secondary-button {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  color: var(--text);
}

.primary-button {
  background: linear-gradient(135deg, var(--primary), #4dc0ff);
  color: white;
  box-shadow: 0 12px 35px rgba(124, 108, 255, 0.45);
}

.results-header {
  margin-top: 28px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
}

.results-header h3 {
  margin: 6px 0 0;
  font-size: 1.8rem;
}

.text-button {
  background: transparent;
  color: var(--primary-2);
  padding-right: 0;
}

.track-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
  margin-top: 18px;
}

.track-card {
  background: linear-gradient(180deg, rgba(18, 26, 40, 0.9), rgba(12, 20, 31, 0.95));
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 18px;
}

.track-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.track-badge {
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: rgba(0, 217, 178, 0.12);
  color: var(--accent);
}

.track-card h4 {
  margin: 18px 0 8px;
  font-size: 1.3rem;
}

.track-meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  color: var(--muted);
  font-size: 0.8rem;
}

.waveform {
  display: flex;
  align-items: end;
  gap: 6px;
  height: 72px;
  margin-top: 18px;
  padding: 10px 0;
}

.waveform span {
  display: block;
  width: 7px;
  border-radius: 999px;
  background: linear-gradient(180deg, var(--primary-2), var(--primary));
  animation: pulse 1.2s ease-in-out infinite alternate;
}

.waveform span:nth-child(odd) {
  animation-delay: 0.1s;
}

.waveform span:nth-child(3n) {
  animation-delay: 0.2s;
}

.track-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  gap: 12px;
}

.play-button {
  flex: 1;
  background: rgba(124, 108, 255, 0.14);
  border: 1px solid rgba(124, 108, 255, 0.28);
  color: var(--text);
  border-radius: 12px;
  padding: 10px 14px;
  font-weight: 600;
}

.track-stats {
  color: var(--muted);
  font-size: 0.82rem;
}

@keyframes pulse {
  from {
    transform: scaleY(0.4);
    opacity: 0.7;
  }
  to {
    transform: scaleY(1);
    opacity: 1;
  }
}

@media (max-width: 980px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    padding-bottom: 12px;
  }

  .controls-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .app-shell {
    padding: 14px;
  }

  .main-panel,
  .sidebar {
    border-radius: 18px;
  }

  .controls-grid {
    grid-template-columns: 1fr;
  }

  .panel-actions,
  .topbar,
  .track-actions {
    flex-direction: column;
    align-items: stretch;
  }
}
