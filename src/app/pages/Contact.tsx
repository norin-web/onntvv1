import { site } from "../content/site";
import MailForm from "../components/MailForm";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function Contact() {
  return (
    <section className="hero hero--left contact">
      <div className="container contact__grid">
        <div className="contact__left">
          <Split as="h1" className="h-page" parts={[["Write to us"]]} />
          <Reveal as="p" className="lead" delay={150}>
            Questions, bugs, or a TV that won’t connect. Tell us what happened and which TV you use.
          </Reveal>
          <Reveal className="contact__mail" delay={200}>
            <span className="muted small">Email</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </Reveal>
        </div>
        <Reveal className="card contact__form" delay={200}>
          <MailForm
            subject={`${site.brand} — message`}
            submit="Send message"
            fields={[
              { name: "name", label: "Name", required: true, auto: "name" },
              { name: "email", label: "Email", type: "email", required: true, auto: "email" },
              { name: "tv", label: "TV model (optional)" },
              { name: "message", label: "Message", textarea: true, required: true },
            ]}
          />
        </Reveal>
      </div>
    </section>
  );
}
