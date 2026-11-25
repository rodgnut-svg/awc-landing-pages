import Logo from "@/components/Logo";
import VideoPlayer from "@/components/VideoPlayer";
import { site } from "@/config/site";
import {
  copy,
  ownerBullets,
  parts,
  trainerBullets,
  type Audience,
} from "@/content/copy";

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12.5l4.5 4.5L19 7.5"
        fill="none"
        stroke="#DC2626"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Cta({ audience }: { audience: Audience }) {
  const cta = audience === "owner" ? site.ownerCta : site.trainerCta;
  return (
    <a className="btn" href={cta.href}>
      {cta.label}
    </a>
  );
}

export default function LandingPage({ audience }: { audience: Audience }) {
  const c = copy[audience];
  const cta = audience === "owner" ? site.ownerCta : site.trainerCta;

  return (
    <div className="page">
      <header className="brand">
        <Logo />
      </header>

      <main>
        <section className="hero">
          <div className="eyebrow">Like Airbnb, for gym floors</div>
          <h1>
            {c.h1a} <span className="accent">{c.h1b}</span>
          </h1>
          <p className="sub">{c.sub}</p>

          <VideoPlayer />

          <div className="cta-wrap">
            <Cta audience={audience} />
            <div className="micro">{cta.micro}</div>
            {cta.secondaryHref && (
              <div>
                <a className="link-secondary" href={cta.secondaryHref}>
                  {cta.secondaryLabel}
                </a>
              </div>
            )}
          </div>
        </section>

        <section className="section">
          <h2>Two sides. One platform.</h2>
          <p className="lede">
            Gyms list their quiet hours. Independent trainers find, book and pay
            for them. Anywhere Clubs runs everything in between.
          </p>

          <div className="sides">
            <div className={`side${audience === "owner" ? " active" : ""}`}>
              <div className="side-label">Gym owners</div>
              <div className="side-title">Rent out your quiet hours</div>
              <ul>
                {ownerBullets.map((b) => (
                  <li key={b}>
                    <Check />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="side platform">
              <div className="side-label">The platform</div>
              <div className="side-title">Anywhere Clubs</div>
              <p>Everything that has to happen between an empty floor and a booked session.</p>
              <div className="chips">
                {parts.map((p) => (
                  <span className="chip" key={p}>
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className={`side${audience === "trainer" ? " active" : ""}`}>
              <div className="side-label">Trainers</div>
              <div className="side-title">Train at any gym that fits</div>
              <ul>
                {trainerBullets.map((b) => (
                  <li key={b}>
                    <Check />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section narrow">
          <h2 className="h2-sm">{c.callTitle}</h2>
          <ol className="next">
            {c.callPoints.map((t, i) => (
              <li key={t}>
                <span className="num">{i + 1}</span>
                <span>{t}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="closer">
          <Cta audience={audience} />
        </section>
      </main>

      <footer className="footer">© 2026 ANYWHERE CLUBS</footer>
    </div>
  );
}
