import { app, features, steps } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

const Check = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l5 5 9-10" />
  </svg>
);

export default function Home() {
  const [controls, pad, keyboard, voice, cast] = features;
  return (
    <>
      {/* S01 Hero */}
      <section className="hero hero--home">
        <Split as="h1" className="h-hero" parts={[["Your TV remote,"], ["\n"], ["already in your hand"]]} />
        <Reveal as="p" className="lead hero__sub" delay={150}>
          Control compatible TVs over your home Wi‑Fi: power, volume, channels, a touchpad, voice search and keyboard input.
        </Reveal>
        <Reveal className="hero__cta" delay={220}>
          <Btn href={app.url}>Download on the App Store</Btn>
          <span className="muted small">For iPhone</span>
        </Reveal>
      </section>

      {/* S02 App on iPhone */}
      <section className="mockup" aria-label="The app on iPhone">
        <img src={img("/images/phone-remote.png")} alt="The remote screen of the app with power, D-pad, volume and channel keys" width={786} height={1704} />
      </section>

      {/* S03 Features */}
      <section className="section">
        <div className="container">
          <Split as="h2" className="h2 center" parts={[["What the app does"]]} />

          <div className="fcards">
            <Reveal className="fcard fcard--wide card">
              <div className="fcard__text">
                <h3 className="h3">{controls.title}</h3>
                <p className="muted">{controls.text}</p>
                <ul className="checks">
                  <li><Check />Power, OK, Back and Home</li>
                  <li><Check />Volume, mute and channels</li>
                </ul>
              </div>
              <img className="fcard__phone" src={img("/images/phone-remote.png")} alt="Remote screen with the D-pad" loading="lazy" width={786} height={1704} />
            </Reveal>

            <Reveal className="fcard fcard--wide fcard--flip card">
              <div className="fcard__text">
                <h3 className="h3">{pad.title}</h3>
                <p className="muted">{pad.text}</p>
                <ul className="checks">
                  <li><Check />Media keys stay right below the pad</li>
                  <li><Check />Back, Home and Exit within reach</li>
                </ul>
              </div>
              <img className="fcard__phone" src={img("/images/phone-trackpad.png")} alt="Remote screen with the touchpad" loading="lazy" width={786} height={1704} />
            </Reveal>
          </div>

          <Reveal as="ul" className="rows">
            {[keyboard, voice, cast].map((f) => (
              <li key={f.title}>
                <h3 className="h4">{f.title}</h3>
                <p className="muted">{f.text}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* S04 How to connect */}
      <section className="section">
        <div className="container container--narrow">
          <Split as="h2" className="h2 center" parts={[["How to connect"]]} />
          <Reveal as="ol" className="rows">
            {steps.map((s) => (
              <li key={s.n}>
                <h3 className="h4">{s.title}</h3>
                <p className="muted">{s.text}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
