import { app, features, specs } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

const phones = [
  { src: "/images/phone-remote.png", alt: "Remote screen with the D-pad, volume, channels and media keys" },
  { src: "/images/phone-trackpad.png", alt: "Remote screen with the touchpad for moving through menus" },
];

export default function OurApp() {
  return (
    <>
      <section className="hero hero--page">
        <Split as="h1" className="h-page" parts={[["Your remote,"], ["\n"], ["on your iPhone"]]} />
        <Reveal as="p" className="lead hero__sub" delay={150}>
          Controls, a T‑Pad, keyboard input and voice search, all in one app for compatible TVs.
        </Reveal>
        <Reveal className="hero__cta" delay={220}>
          <Btn href={app.url}>Download on the App Store</Btn>
        </Reveal>
      </section>

      <section className="reel" aria-label="App screens">
        {phones.map((p, i) => (
          <div key={p.src} className={`reel__phone reel__phone--${i}`}>
            <img src={img(p.src)} alt={p.alt} width={786} height={1704} />
          </div>
        ))}
      </section>

      <section className="section section--tight">
        <div className="container container--narrow">
          <Reveal as="ul" className="rows">
            {features.map((f) => (
              <li key={f.title}>
                <h3 className="h4">{f.title}</h3>
                <p className="muted">{f.text}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <Split as="h2" className="h2 center" parts={[["Details"]]} />
          <Reveal as="dl" className="specs">
            {specs.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
