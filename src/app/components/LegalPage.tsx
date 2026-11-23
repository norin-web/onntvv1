import { Fragment, useMemo, type ReactNode } from "react";
import { linkify, parse } from "./legalParse";

type Doc = {
  title: string;
  body: string | null;
};

function Block({ text }: { text: string }): ReactNode {
  if (text.startsWith("### ")) return <h3>{text.slice(4)}</h3>;
  if (text.startsWith("- "))
    return (
      <ul>
        {text.split("\n").map((li, j) => <li key={j}>{linkify(li.replace(/^- /, ""))}</li>)}
      </ul>
    );
  return (
    <p>
      {text.split("\n").map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {linkify(line)}
        </Fragment>
      ))}
    </p>
  );
}

export default function LegalPage({ doc }: { doc: Doc }) {
  const { intro, sections } = useMemo(() => parse(doc.body ?? ""), [doc.body]);
  return (
    <article className="legal-plain">
      <h1>{doc.title}</h1>
      {intro.map((t, i) => (
        <p key={i}>{linkify(t)}</p>
      ))}
      {sections.map((s) => (
        <section key={s.id}>
          <h2>{s.title}</h2>
          {s.blocks.map((b, j) => <Block key={j} text={b} />)}
        </section>
      ))}
    </article>
  );
}
