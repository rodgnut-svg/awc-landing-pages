import Logo from "@/components/Logo";
import VideoPlayer from "@/components/VideoPlayer";
import { site } from "@/config/site";
import { copy, type Audience } from "@/content/copy";

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
          <h1>
            {c.h1a}
            <br />
            <span className="accent">{c.h1b}</span>
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

        <section className="section day">
          <h2>{c.dayTitle}</h2>
          <p className="lede">A typical weekday on a gym floor. Illustrative.</p>

          {/* Illustrative timeline: 5am–9pm. Flex ratios are 4 : 6 : 6 hours. */}
          <div className="bar" role="img" aria-label="Members train before 9am and after 3pm. The hours between are quiet.">
            <div className="seg members" style={{ flex: "4 1 0" }}>Members</div>
            <div className="seg quiet" style={{ flex: "6 1 0" }}>{c.quietLabel}</div>
            <div className="seg members" style={{ flex: "6 1 0" }}>Members</div>
          </div>
          <div className="ticks" aria-hidden="true">
            <span style={{ flex: "4 1 0" }}>5am</span>
            <span style={{ flex: "6 1 0" }}>9am</span>
            <span style={{ flex: "5 1 0" }}>3pm</span>
            <span style={{ flex: "1 1 0", textAlign: "right" }}>9pm</span>
          </div>
        </section>

        <section className="section">
          <div className="kicker">What’s behind the booking</div>
          <div className="features">
            {c.features.map((f) => (
              <div className="feature" key={f.h}>
                <div className="feature-h">{f.h}</div>
                <p>{f.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section narrow">
          <figure className="quote">
            <blockquote>“{c.quote}”</blockquote>
            <figcaption>
              <strong>{c.who}</strong>, {c.role}
            </figcaption>
          </figure>
        </section>

        <section className="closer">
          <Cta audience={audience} />
        </section>
      </main>

      <footer className="footer">© 2026 ANYWHERE CLUBS</footer>
    </div>
  );
}
