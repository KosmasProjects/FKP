import { useEffect, useRef, useState } from "react";
import {
  FaUniversalAccess,
  FaXmark,
  FaVolumeHigh,
  FaPause,
  FaPlay,
  FaStop,
  FaMinus,
  FaPlus,
  FaCircleHalfStroke,
  FaLink,
  FaFont,
  FaPersonWalking,
  FaRotateLeft,
} from "react-icons/fa6";

// Panel ułatwień dostępu: czytanie na głos (syntezator mowy przeglądarki – bez zewnętrznych
// usług), powiększenie tekstu, wysoki kontrast, podkreślenie linków, czytelna czcionka,
// wyłączenie animacji. Ustawienia zapisują się w przeglądarce odwiedzającego.

const STORAGE_KEY = "fkp-a11y";
const DEFAULTS = { zoom: 0, contrast: false, links: false, readable: false, still: false };
const ZOOMS = [1, 1.15, 1.3, 1.5];

const load = () => {
  try {
    return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
  } catch {
    return DEFAULTS;
  }
};

const save = (settings) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
    /* tryb prywatny – ustawienia działają do zamknięcia karty */
  }
};

const apply = (s) => {
  const root = document.documentElement;
  root.style.setProperty("--a11y-zoom", ZOOMS[s.zoom]);
  root.classList.toggle("a11y-zoom", s.zoom > 0);
  root.classList.toggle("a11y-contrast", s.contrast);
  root.classList.toggle("a11y-links", s.links);
  root.classList.toggle("a11y-readable", s.readable);
  root.classList.toggle("a11y-still", s.still);
};

// Tekst do przeczytania: zaznaczenie albo treść głównej części strony (bez menu i przycisków).
function textToRead() {
  const selection = window.getSelection?.().toString().trim();
  if (selection) return selection;
  const main = document.getElementById("main");
  if (!main) return "";
  const clone = main.cloneNode(true);
  clone.querySelectorAll("nav, button, audio, script, style, [aria-hidden='true'], .book-viewer__thumbs").forEach((el) => el.remove());
  return clone.innerText.replace(/\n{2,}/g, "\n").trim();
}

// Dzieli długi tekst na zdania – syntezatory mowy w części przeglądarek urywają zbyt długie wypowiedzi.
const chunks = (text) =>
  text
    .split(/(?<=[.!?…:])\s+|\n+/)
    .reduce((acc, sentence) => {
      const last = acc[acc.length - 1];
      if (last && last.length + sentence.length < 220) acc[acc.length - 1] = `${last} ${sentence}`;
      else if (sentence.trim()) acc.push(sentence.trim());
      return acc;
    }, []);

export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(load);
  const [speech, setSpeech] = useState("idle"); // idle | playing | paused
  const [rate, setRate] = useState(1);
  const queue = useRef([]);
  const panelRef = useRef(null);
  const canSpeak = typeof window !== "undefined" && "speechSynthesis" in window;

  useEffect(() => {
    apply(settings);
    save(settings);
  }, [settings]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    const onClick = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target) && !event.target.closest(".a11y-toggle")) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  // Zatrzymaj czytanie przy zmianie podstrony.
  useEffect(() => {
    const stop = () => {
      if (canSpeak) window.speechSynthesis.cancel();
      queue.current = [];
      setSpeech("idle");
    };
    window.addEventListener("popstate", stop);
    window.addEventListener("app:navigate", stop);
    return () => {
      window.removeEventListener("popstate", stop);
      window.removeEventListener("app:navigate", stop);
      if (canSpeak) window.speechSynthesis.cancel();
    };
  }, [canSpeak]);

  const update = (patch) => setSettings((s) => ({ ...s, ...patch }));

  const speakNext = (currentRate) => {
    const next = queue.current.shift();
    if (!next) {
      setSpeech("idle");
      return;
    }
    const utterance = new SpeechSynthesisUtterance(next);
    utterance.lang = "pl-PL";
    utterance.rate = currentRate;
    const voice = window.speechSynthesis.getVoices().find((v) => v.lang?.toLowerCase().startsWith("pl"));
    if (voice) utterance.voice = voice;
    utterance.onend = () => speakNext(currentRate);
    utterance.onerror = () => setSpeech("idle");
    window.speechSynthesis.speak(utterance);
  };

  const read = () => {
    if (!canSpeak) return;
    window.speechSynthesis.cancel();
    queue.current = chunks(textToRead());
    setSpeech("playing");
    speakNext(rate);
  };

  const pause = () => {
    window.speechSynthesis.pause();
    setSpeech("paused");
  };

  const resume = () => {
    window.speechSynthesis.resume();
    setSpeech("playing");
  };

  const stop = () => {
    queue.current = [];
    window.speechSynthesis.cancel();
    setSpeech("idle");
  };

  const toggles = [
    { key: "contrast", label: "Wysoki kontrast", icon: FaCircleHalfStroke },
    { key: "links", label: "Podkreśl linki", icon: FaLink },
    { key: "readable", label: "Czytelna czcionka", icon: FaFont },
    { key: "still", label: "Wyłącz animacje", icon: FaPersonWalking },
  ];

  return (
    <>
      <button
        type="button"
        className="a11y-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="a11y-panel"
        title="Ułatwienia dostępu"
      >
        <FaUniversalAccess aria-hidden="true" />
        <span className="visually-hidden">Ułatwienia dostępu</span>
      </button>

      {speech !== "idle" && !open && (
        <div className="a11y-mini" role="group" aria-label="Czytanie na głos">
          {speech === "playing" ? (
            <button type="button" onClick={pause} aria-label="Wstrzymaj czytanie">
              <FaPause aria-hidden="true" />
            </button>
          ) : (
            <button type="button" onClick={resume} aria-label="Wznów czytanie">
              <FaPlay aria-hidden="true" />
            </button>
          )}
          <button type="button" onClick={stop} aria-label="Zatrzymaj czytanie">
            <FaStop aria-hidden="true" />
          </button>
        </div>
      )}

      {open && (
        <div id="a11y-panel" className="a11y-panel" role="dialog" aria-label="Ułatwienia dostępu" ref={panelRef}>
          <div className="a11y-panel__head">
            <h2>Ułatwienia dostępu</h2>
            <button type="button" onClick={() => setOpen(false)} aria-label="Zamknij">
              <FaXmark aria-hidden="true" />
            </button>
          </div>

          <section className="a11y-section">
            <h3>
              <FaVolumeHigh aria-hidden="true" /> Czytaj na głos
            </h3>
            {canSpeak ? (
              <>
                <p className="a11y-hint">Czyta treść tej strony. Możesz też najpierw zaznaczyć fragment tekstu.</p>
                <div className="a11y-row">
                  {speech === "idle" && (
                    <button type="button" className="a11y-btn a11y-btn--main" onClick={read}>
                      <FaPlay aria-hidden="true" /> Czytaj
                    </button>
                  )}
                  {speech === "playing" && (
                    <button type="button" className="a11y-btn a11y-btn--main" onClick={pause}>
                      <FaPause aria-hidden="true" /> Pauza
                    </button>
                  )}
                  {speech === "paused" && (
                    <button type="button" className="a11y-btn a11y-btn--main" onClick={resume}>
                      <FaPlay aria-hidden="true" /> Wznów
                    </button>
                  )}
                  {speech !== "idle" && (
                    <button type="button" className="a11y-btn" onClick={stop}>
                      <FaStop aria-hidden="true" /> Stop
                    </button>
                  )}
                </div>
                <label className="a11y-rate">
                  Tempo
                  <select value={rate} onChange={(e) => setRate(Number(e.target.value))}>
                    <option value={0.8}>wolniej</option>
                    <option value={1}>normalnie</option>
                    <option value={1.25}>szybciej</option>
                  </select>
                </label>
              </>
            ) : (
              <p className="a11y-hint">Ta przeglądarka nie obsługuje czytania na głos.</p>
            )}
          </section>

          <section className="a11y-section">
            <h3>Wielkość tekstu</h3>
            <div className="a11y-row a11y-zoom-row">
              <button type="button" className="a11y-btn" onClick={() => update({ zoom: Math.max(0, settings.zoom - 1) })} disabled={settings.zoom === 0} aria-label="Zmniejsz tekst">
                <FaMinus aria-hidden="true" />
              </button>
              <span aria-live="polite">{Math.round(ZOOMS[settings.zoom] * 100)}%</span>
              <button type="button" className="a11y-btn" onClick={() => update({ zoom: Math.min(ZOOMS.length - 1, settings.zoom + 1) })} disabled={settings.zoom === ZOOMS.length - 1} aria-label="Powiększ tekst">
                <FaPlus aria-hidden="true" />
              </button>
            </div>
          </section>

          <section className="a11y-section a11y-toggles">
            {toggles.map(({ key, label, icon: Icon }) => (
              <button key={key} type="button" className={`a11y-switch ${settings[key] ? "is-on" : ""}`} aria-pressed={settings[key]} onClick={() => update({ [key]: !settings[key] })}>
                <Icon aria-hidden="true" />
                {label}
              </button>
            ))}
          </section>

          <button type="button" className="a11y-reset" onClick={() => setSettings(DEFAULTS)}>
            <FaRotateLeft aria-hidden="true" /> Przywróć ustawienia domyślne
          </button>
        </div>
      )}
    </>
  );
}
