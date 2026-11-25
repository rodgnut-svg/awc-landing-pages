import { site } from "@/config/site";

type Props = {
  /** Show a small browser-window bar above the video. */
  chrome?: boolean;
};

export default function VideoPlayer({ chrome = false }: Props) {
  const { src, poster, label } = site.video;

  return (
    <div className="video">
      {chrome && (
        <div className="video-chrome" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>anywhereclubs.com</span>
        </div>
      )}
      <div className="video-stage">
        {src ? (
          <video
            controls
            playsInline
            preload="metadata"
            poster={poster ?? undefined}
            src={src}
          />
        ) : (
          <>
            <button type="button" className="play" aria-label="Play video">
              <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" fill="#fff" />
              </svg>
            </button>
            <span className="video-label">Video placeholder · {label}</span>
          </>
        )}
      </div>
    </div>
  );
}
