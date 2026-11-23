import { Link } from "react-router";
import Split from "../components/Split";

export default function NotFound() {
  return (
    <section className="hero hero--page">
      <Split as="h1" className="h-page" parts={[["Page not found"]]} />
      <p className="lead hero__sub">The page you asked for doesn’t exist. Start again from the home page.</p>
      <Link className="chip" to="/">Home</Link>
    </section>
  );
}
