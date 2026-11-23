import { site } from "../content/site";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

// Facts behind each principle come from the owner's Privacy Policy and Terms of Use.
const principles = [
  ["Local by design", "Remote commands travel over your home Wi‑Fi to the TV. The developer runs no backend for them."],
  ["Permissions when needed", "Local Network is for finding your TV. The microphone is used only when you press voice search."],
  ["Honest about compatibility", "Not every TV, firmware or network works the same. The Terms say so, and so does this site."],
];

export default function About() {
  return (
    <>
      <section className="hero hero--left">
        <div className="container">
          <Split as="h1" className="h-page" parts={[["About the app"]]} />
          <Reveal as="p" className="lead about__sub" delay={150}>
            {site.brand} is made by {site.operator}, an individual developer in Utrecht, the Netherlands. It finds compatible TVs on your Wi‑Fi and gives you the controls you use most.
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container container--narrow">
          <Reveal as="ul" className="rows">
            {principles.map(([t, d]) => (
              <li key={t}>
                <h3 className="h4">{t}</h3>
                <p className="muted">{d}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
