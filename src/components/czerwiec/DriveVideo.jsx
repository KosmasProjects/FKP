import { useState } from "react";
import { FaPlay } from "react-icons/fa6";

// Film z Dysku Google. Odtwarzacz Google ładuje się dopiero po kliknięciu –
// do tego czasu strona nie łączy się z Google i nic nie spowalnia.
export default function DriveVideo({ video }) {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className={`drive-video ${video.vertical ? "drive-video--vertical" : ""}`}>
      <div className="drive-video__frame">
        {playing ? (
          <iframe
            src={`https://drive.google.com/file/d/${video.id}/preview`}
            title={video.title}
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        ) : (
          <button type="button" className="drive-video__poster" onClick={() => setPlaying(true)} aria-label={`Odtwórz: ${video.title}`}>
            <img src={video.poster} alt="" loading="lazy" decoding="async" />
            <span className="drive-video__play">
              <FaPlay aria-hidden="true" />
            </span>
          </button>
        )}
      </div>
      <figcaption>{video.title}</figcaption>
    </figure>
  );
}
