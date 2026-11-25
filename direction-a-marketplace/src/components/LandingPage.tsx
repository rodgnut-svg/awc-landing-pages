import Logo from "@/components/Logo";
import VideoPlayer from "@/components/VideoPlayer";
import { site } from "@/config/site";
import { copy, parts, type Audience } from "@/content/copy";

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
          <div className="eyebrow">{c.eyebrow}</div>
          <h1>
            {c.h1a} <span className="accent">{c.h1b}</span>
          </h1>
          <p className="sub">{c.sub}</p>

          <VideoPlayer chrome />

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
          <div className="kicker">How it works</div>
          <h2>{c.stepsTitle}</h2>
          <div className="steps">
            {c.steps.map((s) => (
              <div className="step" key={s.n}>
                <div className="step-n">{s.n}</div>
                <div className="step-h">{s.h}</div>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
          <div className="parts">
            <span className="parts-label">All in one platform:</span>
            {parts.map((p) => (
              <span className="chip" key={p}>
                {p}
              </span>
            ))}
          </div>
        </section>

        <section className="section narrow">
          <figure className="quote">
            <blockquote>“{c.quote}”</blockquote>
            <figcaption>
              <strong>{c.who}</strong>
              <br />
              {c.role}
            </figcaption>
          </figure>
          <div className="stat">{site.gymsListed} gyms already listed on Anywhere Clubs</div>
        </section>

        <section className="closer">
          <h2>{c.closer}</h2>
          <Cta audience={audience} />
        </section>
      </main>

      <footer className="footer">© 2026 ANYWHERE CLUBS</footer>
    </div>
  );
}
